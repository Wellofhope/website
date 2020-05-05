import React, { Component } from 'react';
import { Button, Divider, Input, Segment } from 'semantic-ui-react'

import OurStory from './OurStory'
// import Projects from './Projects'
import Team from './Team'
import Header from './Header'
import Contact from './Contact'

class MainLayout extends Component {
    
    state = {  }
    render() { 
        
        return ( 
            <React.Fragment>
                    <Header/>
                   {/* <Projects/> */}
                  <OurStory/>
                    <Team/> 
                    <Divider horizontal></Divider>
                    <Contact/>
            </React.Fragment>
         );
    }
}
 
export default MainLayout;