import React from "react";
import { Button, Divider, Input, Segment, Icon } from 'semantic-ui-react'
import Logo from './Logo';
import {Link} from "react-router-dom";
const Navbar = () => {
  
    return ( 
        <React.Fragment>
      <nav className="navbar navbar-expand-sm navbar-light bg-blue border-bottom">
        <a className="navbar-brand" href="#">
        <Link className="navbar-brand js-scroll-trigger" to="/"><Logo/></Link>
        </a>
        <button
          className="navbar-toggler d-lg-none"
          type="button"
          data-toggle="collapse"
          data-target="#collapsibleNavId"
          aria-controls="collapsibleNavId"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="container">
          <div className="collapse navbar-collapse" id="collapsibleNavId">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/causes">
                  Causes
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/gallery">
                  Gallery
                </Link>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="dropdownId"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Media
                </a>
                <div className="dropdown-menu" aria-labelledby="userAccount">
                  <Link className="dropdown-item" to="/videos">
                    Videos
                  </Link>
                  <Divider />
                  <Link className="dropdown-item" to="/testimonials">
                    Testimonials
                  </Link>
                </div>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="dropdownId"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Projects
                </a>
                <div className="dropdown-menu" aria-labelledby="userAccount">
                  <Link className="dropdown-item" to="/landandsettlement">
                    Land/Settlement
                  </Link>
                  <Divider />
                  <Link className="dropdown-item" to="/house">
                    Housing
                  </Link>
                  <Divider />
                  <Link className="dropdown-item" to="/school">
                    Children Sponsorship/School
                  </Link>
                  <Divider />
                  <Link className="dropdown-item" to="/water">
                    Water 
                  </Link>
                  <Divider />
                  <Link className="dropdown-item" to="/other projects">
                    Other Projects
                  </Link>
                </div>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="dropdownId"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Directors' Take
                </a>
                <div className="dropdown-menu" aria-labelledby="userAccount">
                  <Link className="dropdown-item" to="/zipporah">
                    Zipporah Kamau
                  </Link>
                  <Divider />
                  <Link className="dropdown-item" to="/school">
                    The Florys
                  </Link>
                  <Divider />
                  <Link className="dropdown-item" to="/water">
                    Water 
                  </Link>
                  <Divider />
                  <Link className="dropdown-item" to="/other projects">
                    Other Projects
                  </Link>
                </div>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/aboutus">
                  About Us
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  Contact Us
                </Link>
              </li>
            </ul>
            <br/>
             <div className="my-2 my-lg-0">
             <Link className="btn btn-secondary" to="/donate"><Icon name='handshake' />    DONATE TO THIS CAUSE</Link>

            </div> 
          </div>
        
        </div>
      </nav>
    </React.Fragment>
  );
};
 
export default Navbar;