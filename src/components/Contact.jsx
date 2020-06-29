import React, { Component } from 'react';
import Footer from './common/Footer'
import Card from './common/Card'
import { Container, Divider, Header } from 'semantic-ui-react'


class Contact extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
  <div className="col-lg-12 text-center">
    <Container textAlign='center' color='teal'><Header as='h1'>CONTACT US</Header></Container>
    <Container textAlign='justified' color='teal'>
      <Divider  color='teal'/>
      <p color='teal'>
      <Header as='h4'>  With the help of other partners, such as Well of Hope America, individual sponsors and 
      the founder, Nathaniel Kariuki, WOHI has impacted lives positively.
      Well of Hope International is committed to the vision to ensure the empowerment of the 
      underprivileged in Kenya through the provision of economical supports, educational opportunities, health services, 
      and safe housing, while upholding the rights of everyone served.

      Well of Hope International is open to help and support by willing donors that have the vision of helping the underprivileged.
      Thanks to all that support the mission.

      with our events and confirm your presence.</Header>
    


      </p>
                 <Container textAlign='center'><Card/> </Container>

              </Container>
      </div>

      <Divider horizontal>Or</Divider>
                        <div className="col-lg-12 text-center"><Header as='h4'>LEAVE US A MESSAGE</Header></div>
<br/>
                 <section className="page-section" id="contact">
    <div className="container">
      <div className="row">
        <div className="col-lg-12 text-center">
          <h2 className="section-heading text-uppercase">Contact Us</h2>
          <h3 className="section-subheading text-muted">Get in touch with us </h3>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <form id="contactForm" name="sentMessage" novalidate="novalidate">
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <input className="form-control" id="name" type="text" placeholder="Your Name *" required="required" data-validation-required-message="Please enter your name."/>
                  <p className="help-block text-danger"></p>
                </div>
                <div className="form-group">
                  <input className="form-control" id="email" type="email" placeholder="Your Email *" required="required" data-validation-required-message="Please enter your email address."/>
                  <p className="help-block text-danger"></p>
                </div>
                <div className="form-group">
                  <input className="form-control" id="phone" type="tel" placeholder="Your Phone *" required="required" data-validation-required-message="Please enter your phone number."/>
                  <p className="help-block text-danger"></p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <textarea className="form-control" id="message" placeholder="Your Message *" required="required" data-validation-required-message="Please enter a message."></textarea>
                  <p className="help-block text-danger"></p>
                </div>
              </div>
              <div className="clearfix"></div>
              <div className="col-lg-12 text-center">
                <div id="success"></div>
                <button id="sendMessageButton" className="btn btn-primary btn-xl text-uppercase" type="submit">Send Message</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
            </React.Fragment>
         );
    }
}
 
export default Contact;