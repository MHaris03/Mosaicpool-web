import React from 'react'
import { Link } from 'react-router-dom'
import './pagenot.css'

const Notfound = () => {
    return (
        <div class="container">
            <div class="centered">
                <h1>Page Not Found</h1>
                <Link to={{ pathname: "/" }}>
                <button className='baccck__btn'>العودة إلى المنزل</button>
                </Link>
            </div>
        </div>
    )
}

export default Notfound