import React from 'react'
import "./Carousel.css"
import one from '../../assets/one.png'
import two from '../../assets/two.png'
import three from '../../assets/three.png'
import AliceCarousel from "react-alice-carousel"

function Carousel() {
    // const items
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

// const responsive = {
//     0: {
//         items: 2,
//     },
//     500: {
//         items: 4,
//     },
// };

// return (
//     <div className='carousel'>
//         <AliceCarousel
//             mouseTracking
//             infinite
//             autoPlayInterval={1000}
//             animationDuration={1500}
//             disableButtonsControls
//             disableDotsControls
//             responsive={responsive}
//             autoPlay
//             items={Carousel}
//         />
//     </div>
// )
}
export default Carousel

function NumberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
export {NumberWithCommas}