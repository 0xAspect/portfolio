import React, { useState, Component } from 'react'
import "./contact.scss"
import bg from "../../../images/wavey-fingerprint.svg"

const Contact = () => {

  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
    console.log(inputs);
  }

    return (
      <>
        <div title="section1" id="contact" hash="contact" className="contact-container"> 
        <div className='contact-bg'> <img className='img-bg' src={bg}></img>
                    </div>
            <div className='contact-content'>
                <h1 className='contact-h1'> Contact me</h1>
                <hr/>
                <form name="contact" method="POST" data-netlify="true">
                <input type="hidden" name="form-name" value="contact" />

        <label className='contact-p'>
          Name:
          <input 
            type="text" 
            name="name" 
            value={inputs.name || ""} 
            onChange={handleChange}/>
        </label>
        <label className="contact-p">
          Email:
          <input 
            type="email"
            name="email"
            value={inputs.email || ""} 
            onChange={handleChange}/> 

        </label>
        <label className="contact-p">
          Message:
          <textarea
            type="text"
            name="message" 
            value={inputs.message || ""} 
            onChange={handleChange}/> 
        </label>
        <input type="submit"  value="Submit" />
      </form>

            </div>
        </div>
      </>
    )
  }

export default Contact
