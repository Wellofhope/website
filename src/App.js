import React from 'react';
import Navbar from './components/common/Navbar'
import MainLayout from './components/MainLayout'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Contact from './components/Contact';
import Projects from './components/Projects';
import Videos from './components/Videos';
import Blog from './components/Blog/Blog';
import Galler from './components/Galler';
import Causes from './components/Cuases';
import OurStory from './components/OurStory';


function App() {
  return (
    <Router>
      <Navbar/>
      <br/>
      <Switch>
      <Route exact path="/" component={MainLayout} />

        <Route exact path="/gallery" component={Galler} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/videos" component={Videos}/>
        <Route exact path="/blog" component={Blog}/>
        <Route exact path= "/causes" component={Causes}/>
        <Route exact path= "/aboutus" component={OurStory}/>

        
      </Switch>
    </Router>
  );
}

export default App;
