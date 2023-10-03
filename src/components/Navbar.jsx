import React from 'react'
import PropTypes from 'prop-types'

export default function Navbar(props) {
    return (
        <div>
            <nav className="navbar navbar-expand-md navbar-dark bg-dark" id="account">
            <div className="container-fluid">
            <a className="navbar-brand home_link" href="/">
                <img className="rounded" src="https://img1.pnghut.com/24/4/12/JKpYwZFW6A/symbol-orange-gotcha-pokemon-niantic.jpg" alt="" width="45" height="45" />
            </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                <ul className="navbar-nav me-auto mb-2 mb-md-0">
                    <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/">Home</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
        </div>
    )
}



Navbar.prototype = {
    title: PropTypes.string.isRequired
}

Navbar.defaultProps = {
    title: "Set  Title"
}
