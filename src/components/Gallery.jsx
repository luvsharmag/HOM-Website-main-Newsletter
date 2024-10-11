import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import zoomvideo from '../assets/videos/zoom1.mp4'
import { Link } from 'react-router-dom'
const Gallery = ({ Title }) => {
  return (
    <>
      <Navbar />
      <div className=" w-full py-32 px-4 md:px-20 flex flex-col md:flex-row bg-black items-center">
        <div className="w-full md:w-1/2">
          <video
            className=" w-full h-full object-cover"
            autoPlay playsInline
            loop
            muted
            src={zoomvideo}
          ></video>
        </div>
        <div className="flex items-center flex-col space-y-12 md:items-start md:ml-20">
<h1 className='text-5xl lg:text-7xl mt-8 font-semibold text-white'>{Title}</h1>
<Link to='https://wa.me/9773989305' className='px-8 py-3 rounded-full bg-white text-black hover:text-white hover:bg-blue-700 font-bold transition-all duration-500'> Show More</Link>
        </div>

      </div>
      <div className='p-5 md:p-10 bg-black'>
        <div className=" columns-1 gap-5 lg:gap-8 sm:columns-2 lg:columns-3 xl:columns-4">
          <img src="https://picsum.photos/400/300" className=' rounded-2xl hover:scale-110 hover:shadow-xl hover:shadow-teal-600 transition-all duration-250 my-4' alt="" />
          <img src="https://picsum.photos/400/200" className=' rounded-2xl hover:scale-110 hover:shadow-xl hover:shadow-teal-600 transition-all duration-250 my-4' alt="" />
          <img src="https://picsum.photos/400/600" className=' rounded-2xl hover:scale-110 hover:shadow-xl hover:shadow-teal-600 transition-all duration-250 my-4' alt="" />
          <img src="https://picsum.photos/400/250" className=' rounded-2xl hover:scale-110 hover:shadow-xl hover:shadow-teal-600 transition-all duration-250 my-4' alt="" />
          <img src="https://picsum.photos/400/150" className=' rounded-2xl hover:scale-110 hover:shadow-xl hover:shadow-teal-600 transition-all duration-250 my-4' alt="" />
          <img src="https://picsum.photos/400/500" className=' rounded-2xl hover:scale-110 hover:shadow-xl hover:shadow-teal-600 transition-all duration-250 my-4' alt="" />
          <img src="https://picsum.photos/400/200" className=' rounded-2xl hover:scale-110 hover:shadow-xl hover:shadow-teal-600 transition-all duration-250 my-4' alt="" />
          <img src="https://picsum.photos/400/450" className=' rounded-2xl hover:scale-110 hover:shadow-xl hover:shadow-teal-600 transition-all duration-250 my-4' alt="" />
          <img src="https://picsum.photos/400/550" className=' rounded-2xl hover:scale-110 hover:shadow-xl hover:shadow-teal-600 transition-all duration-250 my-4' alt="" />
          <img src="https://picsum.photos/400/150" className=' rounded-2xl hover:scale-110 hover:shadow-xl hover:shadow-teal-600 transition-all duration-250 my-4' alt="" />
          <img src="https://picsum.photos/400/700" className=' rounded-2xl hover:scale-110 hover:shadow-xl hover:shadow-teal-600 transition-all duration-250 my-4' alt="" />
          <img src="https://picsum.photos/400/709" className=' rounded-2xl hover:scale-110 hover:shadow-xl hover:shadow-teal-600 transition-all duration-250 my-4' alt="" />
          <img src="https://picsum.photos/400/250" className=' rounded-2xl hover:scale-110 hover:shadow-xl hover:shadow-teal-600 transition-all duration-250 my-4' alt="" />
          <img src="https://picsum.photos/400/100" className=' rounded-2xl hover:scale-110 hover:shadow-xl hover:shadow-teal-600 transition-all duration-250 my-4' alt="" />
          <img src="https://picsum.photos/400/150" className=' rounded-2xl hover:scale-110 hover:shadow-xl hover:shadow-teal-600 transition-all duration-250 my-4' alt="" />
          <img src="https://picsum.photos/400/300" className=' rounded-2xl hover:scale-110 hover:shadow-xl hover:shadow-teal-600 transition-all duration-250 my-4' alt="" />
          <img src="https://picsum.photos/400/200" className=' rounded-2xl hover:scale-110 hover:shadow-xl hover:shadow-teal-600 transition-all duration-250 my-4' alt="" />
          <img src="https://picsum.photos/400/250" className=' rounded-2xl hover:scale-110 hover:shadow-xl hover:shadow-teal-600 transition-all duration-250 my-4' alt="" />
          <img src="https://picsum.photos/400/100" className=' rounded-2xl hover:scale-110 hover:shadow-xl hover:shadow-teal-600 transition-all duration-250 my-4' alt="" />
          <img src="https://picsum.photos/400/650" className=' rounded-2xl hover:scale-110 hover:shadow-xl hover:shadow-teal-600 transition-all duration-250 my-4' alt="" />
          <img src="https://picsum.photos/400/300" className=' rounded-2xl hover:scale-110 hover:shadow-xl hover:shadow-teal-600 transition-all duration-250 my-4' alt="" />
          <img src="https://picsum.photos/400/200" className=' rounded-2xl hover:scale-110 hover:shadow-xl hover:shadow-teal-600 transition-all duration-250 my-4' alt="" />
          <img src="https://picsum.photos/400/250" className=' rounded-2xl hover:scale-110 hover:shadow-xl hover:shadow-teal-600 transition-all duration-250 my-4' alt="" />
          <img src="https://picsum.photos/400/100" className=' rounded-2xl hover:scale-110 hover:shadow-xl hover:shadow-teal-600 transition-all duration-250 my-4' alt="" />
          <img src="https://picsum.photos/400/150" className=' rounded-2xl hover:scale-110 hover:shadow-xl hover:shadow-teal-600 transition-all duration-250 my-4' alt="" />


        </div>

      </div>
      <Footer mode='dark' />
    </>

  )
}

export default Gallery
