import React, { Component } from 'react'
import "./contact.scss"
import bg from "../../../images/wavey-fingerprint.svg"

export class Contact extends Component {
  render() {
    return (
      <>
        <div title="section1" id="contact" hash="contact" className="contact-container"> 
        <div className='contact-bg'> <img className='img-bg' src={bg}></img>
                    </div>
            <div className='contact-content'>
                <h1 className='contact-h1'> Contact me</h1>
                <hr/>
                <p className='contact-p'></p>
                <ul className='category-preview'> 
                </ul>

            </div>
        </div>
      </>
    )
  }
}

export default Contact
