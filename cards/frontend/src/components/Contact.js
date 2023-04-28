import React from 'react'
import './Contact.css'

export default function Contact() {
  return (
    <div id="contactDiv">
       <h1>Contact Us!</h1>

       <div id="contactTable">
       <div id="contactMember">
                <h2>Brian Chang<span id="contactRole">Frontend</span></h2>
                <div id="contactDetails">
                    <a>github</a>
                    <a>email</a>
                    <a>phone</a>
                </div>
            </div>

            <div id="contactMember">
                <h2>Brian Chang</h2>
                <div id="contactDetails">
                    <a>github</a>
                    <a>email</a>
                    <a>phone</a>
                </div>
            </div>
       </div>
    </div>
  )
}
