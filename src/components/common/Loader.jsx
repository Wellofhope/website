import React from 'react';
import { Dimmer, Loader, Image, Segment } from 'semantic-ui-react'


const Loading = () => {
    return ( 
        <React.Fragment>
             <Segment>
      <Dimmer active inverted>
        <Loader size='large'>Loading</Loader>
      </Dimmer>

      <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
    </Segment>
        </React.Fragment>
     );
}
 
export default Loading;