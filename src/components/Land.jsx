import React, { Component, Suspense } from 'react';
import { Container, Divider, Image, Message } from 'semantic-ui-react'
import  "./common/wellofhope.png"
import Loader from './common/Loader'

const Villages = React.lazy(()=> import('./Villages'));
const Settlement = React.lazy(()=> import('./Settlement'));

const src = 'wellofhope.png'

class Lands extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
              <Divider color='blue' horizontal>Settlement</Divider>
             
           <Suspense fallback={<Loader/>}>
           <Villages/>
             </Suspense>    
          
          <br/>
          <Divider color='blue' horizontal>Lands</Divider>
         
          <Suspense fallback={<Loader/>}>
          <Settlement/>
            </Suspense>     
          
          <br/>
          <Divider horizontal>End of projects</Divider>
          


            </React.Fragment>
         );
    }
}
 
export default Lands;