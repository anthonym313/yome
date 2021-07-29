import React from 'react'

import './NotFoundPage.css'

export default function NotFoundPage(){
    return(
        <div className='nfpage-container'>
            <img src='https://media1.tenor.com/images/27c19b8cac761b97fb87c1868a349dce/tenor.gif?itemid=11835765' alt='https://media1.tenor.com/images/ff5a682a14cee4fdbcde71385197473e/tenor.gif?itemid=17236561'></img>
            <div className='nfpage-redirection'>
                <h2>Hey there buddy!! Looks like you got lost.</h2>
                <h3>Maybe the page you are looking for has moved or is no longer available.</h3>
                <h3>No worries, to go back to the Yome app click <a href='/'>here!</a></h3>
            </div>
        </div>
    )
}