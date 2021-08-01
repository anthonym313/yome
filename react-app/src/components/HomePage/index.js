import React from 'react';

import './HomePage.css';

export default function HomePage(){
    
    
    
    return(
        <div className='home-container'>
            <div className='hero-container'>
                <img src='https://github.com/anthonym313/yome/blob/main/react-app/src/images/hero.jpg?raw=true' alt='invoice vector'></img>
                <div className="hero-right-col">
                    <div className='hero-right-col-text'>
                        <h1>Invoice your customers</h1>
                        <h2>Get paid. Save Time. Look Professional</h2>
                        <h4>Yome invoicing software helps get you the money that you are owed.</h4>
                    </div>
                    <button>Create An Invoice Now</button>
                </div>
            </div>
            <div className='home-break-container'>
                

            </div>

            
            <div className='footeer'>

            </div>

        </div>
    )
}