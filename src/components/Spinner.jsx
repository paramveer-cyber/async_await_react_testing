import React, { Component } from 'react'
import '../App.css'

export class Spinner extends Component {
    render() {
        return (
            <div className="spinner container my-2">
                <div id="spinner"></div>
            </div>
        )
    }
}

export default Spinner
