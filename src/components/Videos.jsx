import React, { Component } from 'react';
import Footer from './common/Footer'
import Iframe from 'react-iframe'
import ReactPlayer from "react-player"
import { Card, Icon,  Embed  } from 'semantic-ui-react'

class Videos extends Component {
    state = {  }
    render() {
        return (
         <React.Fragment>
             {/* <Card.Group>
                 <Card>
                    <Card.Content header='Well Of Hope International' />
                    <Card.Content>
                    <Embed
                        id='7hFRLCLiFmc'
                        // placeholder='/images/image-16by9.png'
                        source='youtube'
                    />
                    </Card.Content>
                    
                    <Card.Content extra>
                    <Icon name='eye' /> 4 Views   <Icon name='comments' /> 0 comments  <Icon name='user' /> 4 subscribers
                    </Card.Content>
                </Card> 
                </Card.Group>  
                <Card.Group>
                 <Card>
                    <Card.Content header='Well Of Hope International' />
                    <Card.Content>
                    <Embed
                        id='wFlLxOon2vs'
                        // placeholder='/images/image-16by9.png'
                        source='youtube'
                    />
                    </Card.Content>
                    
                    <Card.Content extra>
                    <Icon name='eye' /> 5 Views   <Icon name='comments' /> 0 comments  <Icon name='user' /> 4 subscribers
                    </Card.Content>
                </Card> 
                </Card.Group>   */}
                
                <div className="search"><ReactPlayer
url="https://www.youtube.com/watch?v=7hFRLCLiFmc"
/></div>

<b/>
<div className="search"> <ReactPlayer
url="https://www.youtube.com/watch?v=wFlLxOon2vs"
/></div> 

            <Footer/>
        </React.Fragment>
         );
    }
}

export default Videos;





