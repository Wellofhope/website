import React, { Component } from 'react';
import {Link} from "react-router-dom";

class Header extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
  <header className="masthead">
  <div className="container">
    <div className="intro-text">
      <div className="intro-heading text-uppercase">Well Of Hope  </div>
      <div className="intro-lead-in">International</div>
      <Link className="btn btn-primary btn-xl text-uppercase js-scroll-trigger" to="/aboutus">About Us</Link>
    </div>
  </div>
</header>


<section className="page-section" id="services">
  <div className="container">
    <div className="row">
      <div className="col-lg-12 text-center">
        <h2 className="section-heading text-uppercase">Who We Are</h2>
        <h3 className="section-subheading text-muted"></h3>
      </div>
    </div>
    <div className="row text-center">
      <div className="col-md-4">
        <span className="fa-stack fa-4x">
          <i className="fa fa-circle fa-stack-2x text-primary"></i>
          <i className="fa fa-eye fa-stack-1x fa-inverse"></i>
        </span>
        <h4 className="service-heading">Vision</h4>
        <p className="text-muted">To ensure the empowerment of the underprivileged in our society through the provision of economical supports, 
        educational opportunities, health services, and safe housing, while upholding their rights as individuals.</p>
      </div>
      <div className="col-md-4">
        <span className="fa-stack fa-4x">
          <i className="fa fa-circle fa-stack-2x text-primary"></i>
          <i className="fa fa-heartbeat fa-stack-1x fa-inverse"></i>
        </span>
        <h4 className="service-heading">Mission</h4>
        <p className="text-muted">To fight for the rights of the brokenhearted widows and bring them together to overcome the loneliness 
        posed by the loss of their beloved ones.</p>
      </div>
      <div className="col-md-4">
        <span className="fa-stack fa-4x">
          <i className="fa fa-circle fa-stack-2x text-primary"></i>
          <i className="fa fa-users fa-stack-1x fa-inverse"></i>
        </span>
        <h4 className="service-heading">Who We Are</h4>
        <p className="text-muted">Pure religion and undefiled before God and the Father is this: to visit the fatherless 
        and widows in their affliction and to keep
         oneself unspotted by the world. James 1:27.</p>
      </div>
    </div>
  </div>
</section>
</React.Fragment>
         );
    }
}
 
export default Header;