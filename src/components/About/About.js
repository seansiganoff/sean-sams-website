import React from 'react';
import './About.css';

const About = () => {
    

   


  return (
    <div>
        <div className="about">
          
            <div  className="about-us-text-container">
                <p>
                    Welcome to Collision Kings Auto Body Of McKinney. Your destination for professional auto body repairs. <br />
                    We are family owned and operated, and we have more than 30 years of experiance in the industry. <br /><br />
                    We offer deductible assistance: Up to $1000.<br /> We specializing in PDR, collision repair, paint matching and hail damage. <br />
                    We work with all insurance companies and personaly handle all claims, so you don't have to.
                     <br /><br />
                     Our goal is to provide our costumers with the best costumer service, and deliver professional results in a timely manner!

                  
                    
                </p>
            </div>

            <div className='about-us-img-container'>
              <img className='about-us-img' src={require('../../images/insurance-pic.jpg')} alt='img'/>
            </div>
        </div>
    </div>
  )
}

export default About