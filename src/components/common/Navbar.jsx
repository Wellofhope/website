import React from "react";
// import Image from "../Common/Image"
import {Link} from "react-router-dom";

const Navbar = () => {
    return ( 
        <React.Fragment>
      <nav className="navbar navbar-expand-sm navbar-light bg-white border-bottom">
        <a className="navbar-brand" href="#">
        <Link className="navbar-brand js-scroll-trigger" to="/">Well Of Hope International</Link>
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
                  <Link className="dropdown-item" to="/blog">
                    Blog
                  </Link>
                  <Link className="dropdown-item" to="/videos">
                    Videos
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
                  <Link className="dropdown-item" to="/land">
                    Land/Settlement
                  </Link>
                  <Link className="dropdown-item" to="/house">
                    Housing
                  </Link>
                  <Link className="dropdown-item" to="/sponsorship">
                    Children Sponsorship
                  </Link>
                  <Link className="dropdown-item" to="/water">
                    Water 
                  </Link>
                  <Link className="dropdown-item" to="/school">
                    School
                  </Link>
                  <Link className="dropdown-item" to="/farm">
                    Farm
                  </Link>
                  <Link className="dropdown-item" to="/sewing">
                    Sewing
                  </Link>
                  <Link className="dropdown-item" to="/washrooms">
                    Washrooms
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
            {/* <div className="my-2 my-lg-0">
              <div className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="userAccount"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i className="fa fa-user" aria-hidden="true"></i>
                  User
                </a>
                <div className="dropdown-menu" aria-labelledby="userAccount">
                  <Link className="dropdown-item" to="/resetPassword">
                    Change Password
                  </Link>
                  <Link className="dropdown-item" to="/logout">
                    Logout
                  </Link>
                </div>
              </div>
            </div> */}
          </div>
          {/* <form className="form-inline my-2 my-lg-0">
                <input className="form-control mr-sm-2" type="text" placeholder="Search"/>
                <Button onClick={this.signOut} className={classes.signOutBtn}>Sign Out</Button>
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form> */}
        </div>
      </nav>
    </React.Fragment>
  );
};
 
export default Navbar;