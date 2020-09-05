import React, { Component } from "react";
import { Link } from "react-router-dom";
// import { Form, Input, Label } from 'semantic-ui-react'
import { Carousel } from "react-bootstrap";
// import Transition from './common/Transition'
// import Carousels from './common/Carousels'
// import './common/background.jpg'

// const items = [
//   {
//     src: background.jpg,
//     altText: 'Slide 1',
//     caption: 'Slide 1'
//   }, ]

class Header extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="container">
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                width="100%"
                height="50%"
                src={require("./common/assets/img/background.jpg")}
                alt="First slide"
              />
              <Carousel.Caption>
                <h2>WELL OF HOPE</h2>
                <div className="intro-text">
                  <div className="intro-lead-in">International</div>
                  <Link
                    className="btn btn-primary btn-xl text-uppercase js-scroll-trigger"
                    to="/aboutus"
                  >
                    About Us
                  </Link>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                width="100%"
                height="50%"
                src={require("./common/assets/img/spons.jpg")}
                alt="Third slide"
              />

              <Carousel.Caption>
                {/* <h3><Transition/></h3> */}
                <h2>Child Sponsorship</h2>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                width="100%"
                height="50%"
                // src={require("./common/assets/img/construction.jpg")}
                alt="Third slide"
              />

              <Carousel.Caption>
                {/* <h3><Transition/></h3> */}
                <h2>Housing Project</h2>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                width="100%"
                height="50%"
                src={require("./common/assets/img/foods.JPG")}
                alt="Third slide"
              />

              <Carousel.Caption>
                {/* <h3><Transition/></h3> */}
                <h2>Food Donations</h2>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                width="100%"
                height="50%"
                src={require("./common/assets/img/water.jpg")}
                alt="Third slide"
              />

              <Carousel.Caption>
                {/* <h3><Transition/></h3> */}
                <h2>Water project</h2>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                width="100%"
                height="50%"
                src={require("./common/assets/img/farm.JPG")}
                alt="Third slide"
              />

              <Carousel.Caption>
                {/* <h3><Transition/></h3> */}
                <h2>Farm projects</h2>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                width="100%"
                height="50%"
                src={require("./common/assets/img/landsettle.jpg")}
                alt="Third slide"
              />

              <Carousel.Caption>
                {/* <h3><Transition/></h3> */}
                <h2>Land And settlement</h2>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
        {/* <Carousels/> */}

        <section className="page-section" id="services">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center">
                <h2 className="section-heading text-uppercase">Who We Are</h2>
                {/* <h3 className="section-subheading text-muted"></h3> */}
              </div>
            </div>
            <div className="row text-center">
              <div className="col-md-4">
                <span className="fa-stack fa-4x">
                  <i className="fa fa-circle fa-stack-2x text-primary"></i>
                  <i className="fa fa-eye fa-stack-1x fa-inverse"></i>
                </span>
                <h4 className="service-heading">Vision</h4>
                <p className="text-muted">
                  To ensure the empowerment of underprivileged individuals
                  through economic, educational, health, and housing
                  opportunities, while upholding their rights.
                </p>
              </div>
              <div className="col-md-4">
                <span className="fa-stack fa-4x">
                  <i className="fa fa-circle fa-stack-2x text-primary"></i>
                  <i className="fa fa-heartbeat fa-stack-1x fa-inverse"></i>
                </span>
                <h4 className="service-heading">Mission</h4>
                <p className="text-muted">
                  To fight for the rights of brokenhearted widows, bringing them
                  together in order to overcome the loneliness posed by the loss
                  of their beloved ones.
                </p>
              </div>
              <div className="col-md-4">
                <span className="fa-stack fa-4x">
                  <i className="fa fa-circle fa-stack-2x text-primary"></i>
                  <i className="fa fa-users fa-stack-1x fa-inverse"></i>
                </span>
                <h4 className="service-heading">Who We Are</h4>
                <p className="text-muted">
                  Pure religion and undefiled before God and the Father is this:
                  to visit the fatherless and widows in their affliction and to
                  keep oneself unspotted by the world. James 1:27.
                </p>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default Header;
