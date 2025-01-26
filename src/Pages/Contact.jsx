import React from 'react'
import contact from '../assets/pizza.jpg';
import "../Styles/Contact.css";

function Contact() {
  return (
    <div className="contact">
        <div className="leftSide" style={{ backgroundImage: `url(${contact})` }}></div>
        <div className="right side">
            <h1 align="center">Contact Us</h1>
            <form action="/subbmit" method="post">
                <fieldset>
                    <label htmlFor="name">FullName</label>
                    <input type="text" name="name" id="name" placeholder="Enter Full Name.."/><br/><br/>
                    <label htmlFor="email" >Email</label>
                    <input type="email" name ="email" id="email" placeholder="Enter Valid Email"/><br/><br/>
                    <label htmlFor="message">Message</label>
                    <textarea rows="6" placeholder="Enter Message.." name="message"></textarea><br/><br/>
                    <input type="button" value="submit"/>
                </fieldset>
            </form>
        </div>
    </div>
  )
}

export default Contact