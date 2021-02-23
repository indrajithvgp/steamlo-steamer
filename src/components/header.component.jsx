import React from 'react'
import {Link} from 'react-router-dom'
import GoogleAuth from './GoogleAuth'

// const MY_ID="812823115062-28lsc9efmm1lumci41r9d19p7ndv4b52.apps.googleusercontent.com"

function Header() {
    return (
        <div className="secondary poiting ui menu">
                <Link to="/" className="item">
                    stream Lo
                </Link>
            <div className="right menu" >
                <div className="right menu">
                    <Link to="/" className="item">
                        All Streams
                    </Link>
                    <GoogleAuth/>
                </div>
            </div>
        </div>
    )
}

export default Header
