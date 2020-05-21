import React, { Component, Suspense } from 'react';
import { Container, Divider, Image, Message } from 'semantic-ui-react'
import  "./common/wellofhope.png"
import Loader from './common/Loader'

const Goat = React.lazy(()=> import('./Goat'));
const Briquettes = React.lazy(()=> import('./Briquettes'));
const Food = React.lazy(()=> import('./Food'));
const Sewing = React.lazy(()=> import('./Sewing'));

const src = 'wellofhope.png'

class Farm extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
              <Divider color='blue' horizontal>Sewing</Divider>
             
           <Suspense fallback={<Loader/>}>
           <Sewing/>
             </Suspense>    
          
          <br/>
          <Divider color='blue' horizontal>Food Donations</Divider>
         
          <Suspense fallback={<Loader/>}>
          <Food/>
            </Suspense>    
          
          <br/>
          <Divider color='blue' horizontal>Briquettes</Divider>
         
          <Suspense fallback={<Loader/>}>
          <Briquettes/>
            </Suspense>    
          
          <br/>
          <Divider color='blue' horizontal>Farm Projects</Divider>
         
          <Suspense fallback={<Loader/>}>
          <Goat/>
            </Suspense>    
          
          <br/>
          <Divider horizontal>End of projects</Divider>
          


            </React.Fragment>
         );
    }
}
 
export default Farm;