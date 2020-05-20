import React from 'react';
import Navbar from './components/common/Navbar'
import Footer from './components/common/Footer'
import MainLayout from './components/MainLayout'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import { Container, Divider, Image, Card } from 'semantic-ui-react'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Contact from './components/Contact';
import Projects from './components/Projects';
import Videos from './components/Videos';
import Blog from './components/Blog/Blog';
import Galler from './components/Galler';
import Causes from './components/Cuases';
import OurStory from './components/OurStory';
import Testimonials from './components/Testimonials'
import House from './components/House'
import Sponsor from './components/Sponsor'
import Water from './components/Water'
import Land from './components/Land'
import School from './components/School'
import Farm from './components/Farm'
import Sewing from './components/Sewing'
import Washrooms from './components/Washrooms'

function App() {
  return (
    <Router>
      <Navbar/>
      <br/>
      <Switch>
      <Route exact path="/" component={MainLayout} />

        <Route exact path="/gallery" component={Galler} />
        <Route exact path="/washrooms" component={Washrooms} />
        <Route exact path="/sewing" component={Sewing} />
        <Route exact path="/farm" component={Farm} />
        <Route exact path="/school" component={School} />
        <Route exact path="/land" component={Land} />
        <Route exact path="/water" component={Water} />
        <Route exact path="/house" component={House} />
        <Route exact path="/sponsorship" component={Sponsor} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/videos" component={Videos}/>
        <Route exact path="/testimonials" component={Testimonials}/>
        <Route exact path="/blog" component={Blog}/>
        <Route exact path= "/causes" component={Causes}/>
        <Route exact path= "/aboutus" component={OurStory}/>

        
      </Switch>
      <Divider horizontal></Divider>
      <Footer/>
    </Router>
  );
}

export default App;
