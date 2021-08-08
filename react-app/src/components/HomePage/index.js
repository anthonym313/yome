import React from 'react';
import {useHistory} from 'react-router-dom';

import './HomePage.css';

export default function HomePage(){
    const history = useHistory();


    const handleHero =(e)=>{
        e.preventDefault();
        history.push('/login')
    };
    const handleFeatures = (e)=>{
        e.preventDefault();
        history.push('/sign-up')
    }
""   
    
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
                    <button onClick={handleHero}>Create An Invoice Now</button>
                </div>
            </div>
            <div className='home-break-container'>
                <div className='home-break-image'>
                    <img src='https://github.com/anthonym313/yome/blob/main/react-app/src/images/yome-definition.png?raw=true' alt='definition'></img>
                </div>
            </div>
            <div className='home-feature-content'>
                <div className='feature-text-items'>
                    <div className='feature-text-containers'>
                        <h2>Save Time</h2>
                        <p>
                            Optimize your payment organization by filling out<br></br> easy downloadable invoice forms
                            so that you can <br></br>spend more time doing the
                            business that gets you paid
                        </p>
                    </div>
                    <div className='feature-text-containers'>
                        <h2>Get Paid</h2>
                        <p>
                            Invoicing is required to get you paid and to keep<br></br>track of 
                            revenue for tax purposes. Store your client<br></br>information and
                            easily view invoices with outstanding<br></br>balances, and record new payments. 
                        </p>
                    </div>
                    <div className='feature-text-containers'>
                        <h2>Look Professional</h2>
                        <p>
                            The easy to fill out forms in Yome provide you with<br></br>a clean, easy to read, downloadble, electronic mailable,
                            <br></br>printable pdf form for you and your clients.
                
                        </p>
                    </div>
                </div>
                <div className='feature-content-button'>
                    <button onClick={handleFeatures}>Try it Now</button>
                </div>

            </div>
            <div className='footer'>
                <a href='https://www.linkedin.com/in/anthonyamartin/' target='_blank' rel='nooperner noreferrer'><img src='https://github.com/anthonym313/yome/blob/main/react-app/src/images/linkedInicon.png?raw=true' alt='linkedin'></img></a>
                <a href="https://github.com/anthonym313" target='_blank' rel='nooperner noreferrer'><img src='https://github.com/anthonym313/yome/blob/main/react-app/src/images/githubIcon.png?raw=true' alt='github'></img></a>
                Developed by: Anthony Martin
            </div>
          
        </div>
           
    )
}

