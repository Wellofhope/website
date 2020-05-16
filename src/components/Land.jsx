import React, { Component } from 'react';
import { Image } from 'semantic-ui-react'
import  "./common/wellofhope.png"

class Land extends Component {
    state = {  }
    render() { 
        return ( 
            <Image
            src='wellofhope.png'
            as='a'
            size='medium'
            href='http://google.com'
            target='_blank'
          />
         );
    }
}
 
export default Land;