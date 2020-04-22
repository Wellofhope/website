import React, { Component } from 'react';
import OurStory from './OurStory'
import Projects from './Projects'
import Team from './Team'
import Header from './Header'
import Contact from './Contact'

class MainLayout extends Component {
    
    state = {  }
    render() { 
        
        return ( 
            <React.Fragment>
                    <Header/>
                   <Projects/>
                  <OurStory/>
                    <Team/> 
                    <Contact/>
            </React.Fragment>
         );
    }
}
 
export default MainLayout;