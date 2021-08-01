import React from 'react';

import './HomePage.css';

export default function HomePage(){
    
    
    
    return(
        <div className='home-container'>
            <div className='hero-container'>
                <img src='https://github.com/anthonym313/yome/blob/main/react-app/src/images/hero.jpg?raw=true' alt='invoice vector'></img>
                <div className="hero-right-col">
                    <h1>Invoice your customers</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
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