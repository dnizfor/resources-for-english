import React from 'react'

import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <Link className="navbar-brand " to="/"><b>Resources For English</b></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse " id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item ">
                                <Link className="nav-link active " to="/resources">All Resoursces</Link>
                            </li>
                            <li className="nav-item ">
                                <a className="nav-link active " href="https://forms.gle/RYRkZKYr7UGoNgWv6" rel="noreferrer" target="_blank" aria-current="page" to="/">Add Resource</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </div>
    )
}
