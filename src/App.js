import React, {Suspense} from 'react';
import Navbar from './components/common/Navbar'
import Footer from './components/common/Footer'
import MainLayout from './components/MainLayout'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import { Container, Divider, Image, Card } from 'semantic-ui-react'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Loader from './components/common/Loader'
import Contact from './components/Contact';
import Projects from './components/Projects';
import Videos from './components/Videos';
import Blog from './components/Blog/Blog';
import Galler from './components/Galler';
import Causes from './components/Cuases';
import OurStory from './components/OurStory';
import Testimonials from './components/Testimonials'
import Sponsors from './components/Sponsors'
import Water from './components/Water'
import Zipporah from './components/Zipporah'
import Stories from './components/Stories'
import Benedict from './components/Benedict'
import MissionTeams from './components/MissionTeams'
import Flory from './components/Flory'
import Support from './components/Support'
import Farm from './components/Farm'
import Sewing from './components/Sewing'
import Washrooms from './components/Washrooms'
import Teacher from './components/Teacher'


const House = React.lazy(()=> import('./components/House'));
const Land = React.lazy(()=> import('./components/Land'))
const School = React.lazy(()=> import('./components/School'))

function App() {
  return (
    <Router>
      <Navbar/>
      <br/>
      <Switch>
      <Route exact path="/" component={MainLayout} />
      <Suspense fallback={<Loader/>}>
        <Route exact path="/gallery" component={Galler} />
        <Route exact path="/washrooms" component={Washrooms} />
        <Route exact path="/sewing" component={Sewing} />
        <Route exact path="/other projects" component={Farm} />
        <Route exact path="/water" component={Water} />
        <Route exact path="/house" component={House} />
        <Route exact path="/landandsettlement" component={Land} />
        <Route exact path="/school" component={School} />
        <Route exact path="/sponsorship" component={Sponsors} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/videos" component={Videos}/>
        <Route exact path="/testimonials" component={Testimonials}/>
        <Route exact path="/blog" component={Blog}/>
        <Route exact path='/zipporah' component={Zipporah}/>
        <Route exact path='/stories' component={Stories}/>
        <Route exact path='/support' component={Support}/>
        <Route exact path='/teachers' component={Teacher}/>
        <Route exact path='/benedict' component={Benedict}/>
        <Route exact path='/teams' component={MissionTeams}/>
        <Route exact path='/flory' component={Flory}/>
        <Route exact path= "/causes" component={Causes}/>
        <Route exact path= "/aboutus" component={OurStory}/>
        </Suspense>
      </Switch>
      <Divider horizontal>End of Page</Divider>
      <Footer/>
    </Router>
  );
}

export default App;
