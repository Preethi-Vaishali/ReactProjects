import React from 'react'
import { useLocation } from 'react-router-dom';

function Homepage(){
    const location = useLocation();

    return(
        <div className='homepage'>
            <h1>Hello {location.state.id} and welcome to the page</h1>
        </div>
    )
}

export default Homepage;