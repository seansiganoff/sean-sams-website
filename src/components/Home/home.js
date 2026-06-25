import React from 'react'
import './home.css';
import About from '../About/About';
import GoogleReviews from '../GoogleReviews/GoogleReviews';



// import { motion } from 'framer-motion';

const Home = () => {

  //Animates the vehicle icons when the page loads.
  // const visible = { opacity: 1, x: 0, transition: { duration: 0.4 } };
  //   const itemVariants = {
  //     hidden: { opacity: 0, x: -710 },
  //     visible
  //   };


  

  return (
    
    <div className='header'>
      
        <div className='home-container'>
          <img className='home-background-audi' src={require('../../images/audi.jpg')}  alt='Audi background' />
          <div className='home-text-top-left'>
              <img className='seans-logo' src={require('../../images/seans-logo.png')} alt='company logo'/><br /><br />
            <p className='home-p'>Professional Results.<br /> Reasonable Prices!</p>
          </div>
          <div className="home-locations-bottom"><b style={{color: 'white'}}>Address: 418 Power House Dr, McKinney, TX 75071.</b></div>
        </div>

        {<About />}
        {<GoogleReviews />}
        <iframe title='map' className='google-map' src="https://www.google.com/maps/embed/v1/place?key=AIzaSyB2NIWI3Tv9iDPrlnowr_0ZqZWoAQydKJU&q=Collision%20Kings%20Auto%20Body%20of%20McKinney%2C%20Power%20House%20drive%2C%20McKinney%2C%20TX%2C%20USA&zoom=16&maptype=roadmap"></iframe>
    </div>
    
  )
}

export default Home