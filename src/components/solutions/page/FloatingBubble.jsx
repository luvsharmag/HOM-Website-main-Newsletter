import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { gsap } from "gsap"; // Import gsap for smooth animation

const FloatingBubble = () => {
  const mountRef = useRef(null);
  const [bubbleBurst, setBubbleBurst] = useState(false);
  const [size, setSize] = useState(1); // Initial size of the bubble
  const [isDragging, setIsDragging] = useState(false); // State to track dragging
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 }); // Mouse position
  let renderer, scene, camera, bubble;

  useEffect(() => {
    const width = window.innerWidth;
    const height = window.innerHeight;

    // Scene setup
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(width, height);
    mountRef.current.appendChild(renderer.domElement);

    // Add lighting for shiny and reflective effects
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const pointLight1 = new THREE.PointLight(0xffffff, 1.5); // Light source 1
    pointLight1.position.set(5, 5, 5);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0xffffff, 1);
    pointLight2.position.set(-5, -5, 5);
    scene.add(pointLight2);

    // Use Physical Material for shiny, black soap-bubble-like surface
    const geometry = new THREE.SphereGeometry(1, 64, 64);
    const material = new THREE.MeshPhysicalMaterial({
      color: 0x000000, // Black base color
      roughness: 0.05, // Smoother surface
      metalness: 0.8, // More reflective
      transparent: true,
      opacity: 0.95, // Transparency to mimic soap bubble
      clearcoat: 1, // Adds a shiny clearcoat layer
      clearcoatRoughness: 0, // Very smooth clearcoat
      reflectivity: 0.9,// Fully reflective surface
      transmission: 0.2, // Some light passes through for a translucent effect
    });
    bubble = new THREE.Mesh(geometry, material);
    scene.add(bubble);

    camera.position.z = 5;

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);

      if (bubbleBurst) {
        burstBubble();
      } else {
        if (!isDragging) {
          bubble.position.y += 0.01; // Floating effect
        }
        gsap.to(bubble.scale, { x: size, y: size, z: size, duration: 0.6 }); // Smooth size change
      }

      renderer.render(scene, camera);
    };

    animate();

    // Cleanup
    return () => {
      mountRef.current.removeChild(renderer.domElement);
      renderer.dispose();
      scene.clear();
    };
  }, [bubbleBurst, size, isDragging]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const newSize = Math.min(2, 1 + scrollY / 600); // Adjust the size based on scroll smoothly
      setSize(newSize);

      // Trigger bursting at a certain scroll point
      if (scrollY > 600 && !bubbleBurst) {
        setBubbleBurst(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [bubbleBurst]);

  // Event listeners for handling bubble movement by cursor
  useEffect(() => {
    const handleMouseDown = (event) => {
      // Detect if the mouse clicked near the bubble
      const mouse = new THREE.Vector2();
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

      const raycaster = new THREE.Raycaster();
      raycaster.setFromCamera(mouse, camera);

      const intersects = raycaster.intersectObject(bubble);
      if (intersects.length > 0) {
        setIsDragging(true);
      }
    };

    const handleMouseMove = (event) => {
      if (isDragging) {
        const mouseX = (event.clientX / window.innerWidth) * 2 - 1;
        const mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
        setMousePos({ x: mouseX, y: mouseY });

        // Update bubble position based on mouse movement
        bubble.position.x = mousePos.x * 2.5; // Adjust for scene scale
        bubble.position.y = mousePos.y * 1.5;
      }
    };

    const handleMouseUp = () => {
      setIsDragging(false); // Stop dragging when mouse is released
    };

    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging, mousePos]);

  const burstBubble = () => {
    // Logic for bursting the bubble into smaller bubbles
    for (let i = 0; i < 10; i++) {
      const smallBubble = new THREE.Mesh(
        new THREE.SphereGeometry(Math.random() * 0.1 + 0.05, 16, 16),
        new THREE.MeshPhysicalMaterial({
          color: Math.random() * 0xffffff,
          roughness: 0.2,
          metalness: 0.5,
          clearcoat: 1,
          reflectivity: 0.8,
          transmission: 0.7,
          transparent: true,
          opacity: 0.7,
        })
      );
      smallBubble.position.set(
        bubble.position.x + (Math.random() - 0.5),
        bubble.position.y + (Math.random() - 0.5),
        bubble.position.z
      );
      scene.add(smallBubble);
    }
    setBubbleBurst(false); // Reset the state if you want the bubble to reappear
  };

  return (
    <div
      ref={mountRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
      }}
    />
  );
};

export default FloatingBubble;
