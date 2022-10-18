import React from 'react'
import "./Carousel.css"
import one from '../../assets/one.png'
import two from '../../assets/two.png'
import three from '../../assets/three.png'

function Carousel() {
  return (
   <>
    <div className='threebox flex'>
        <div className='one flex'>
        <img src={one} alt='' />
        <div className='content1'>
            <p>Take a quiz!</p>
            <h3>Learn and learn $CKB</h3>
        </div>
        </div>

        <div className='two flex'>
        <img src={two} alt='' />
        <div className='content2'>
            <p>Portfolio🔥</p>
            <h3>Track your trades in one place not all over the place</h3>
        </div>
        </div>

        <div className='three flex'>
        <img src={three} alt='' />
        <div className='content3'>
            <p>Portfolio!</p>
            <h3>Track your trades in one place not all over the place</h3>
        </div>
        </div>
    </div>
   </>
  )
}

export default Carousel

function NumberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
export {NumberWithCommas}