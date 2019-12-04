import React from 'react'
import './style.scss'

const EmailSignUp = () => {
  return (
      <div>
          <div className="emailCard text-align-center align-items-center">
              <h4>Learn more about strategies & tactics from the <br/>product marketing perspective</h4>
                <p className="p">Delivered once a week to your inbox</p>
                  <form name="Blog Email Sign Up" className="form-inline " method="POST" data-netlify="true" action="/" data-netlify-honeypot="bot-field">
                      <input type="hidden" name="form-name" value="Product Marketing Email Sign Up" />
                      <div className="form-group">
                          <input name="email" type="email" className="formControlSignUp" id="exampleInputEmail1"  placeholder="Enter email"/>
                      </div>
                      <button type="submit" className="buttonSignUp">Sign Up</button>
                  </form>
              </div>
      </div>
  )
}
export default EmailSignUp