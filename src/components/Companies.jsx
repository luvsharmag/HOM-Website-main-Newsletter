import React from 'react'
import comp1 from '../assets/images/nagarro.png'
import comp2 from '../assets/images/honda.png'
import comp3 from '../assets/images/kukufm.png'
import comp4 from '../assets/images/Chai-Sutta-Bar.png'
import comp5 from '../assets/images/rooftopcafe.png'
import comp6 from '../assets/images/justice.png'
import comp7 from '../assets/images/simran graphics.png'
import comp8 from '../assets/images/desi thath.webp'
import comp9 from '../assets/images/chai bagh.png'
const Companies = () => {
  return (
    <div className='infinite-slider'>
      <div className="list">
        <div className="item" style={{'--position':1}}><img src={comp1} alt="" /></div>
        <div className="item" style={{'--position':2}}><img src={comp2} alt="" /></div>
        <div className="item" style={{'--position':3}}><img src={comp3} alt="" /></div>
        <div className="item" style={{'--position':4}}><img src={comp4} alt="" /></div>
        <div className="item" style={{'--position':5}}><img src={comp5} alt="" /></div>
        <div className="item" style={{'--position':6}}><img src={comp6} alt="" /></div>
        <div className="item" style={{'--position':7}}><img src={comp7} alt="" /></div>
        <div className="item" style={{'--position':8}}><img src={comp8} alt="" /></div>
        <div className="item" style={{'--position':9}}><img src={comp9} alt="" /></div>
        {/* <div className="item" style={{'--position':9}}><img src={comp3} alt="" /></div> */}
        {/* <div className="item" style={{'--position':10}}><img src={comp1} alt="" /></div> */}
        
      </div>
    </div>
  )
}

export default Companies
