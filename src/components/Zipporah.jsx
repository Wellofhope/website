import React, { Component } from 'react';
import { Grid, Image, Container, Header, Label, Divider } from 'semantic-ui-react'

class Zipporah extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <React.Fragment>
                 <div>
                    <Header as='h1' icon textAlign='center'>
                    {/* <Icon name='users' circular /> */}
                    <Header.Content> <Header as='h1' color='red'> THE POWER OF A DREAM </Header></Header.Content>
                    </Header>
                    <Divider />
                </div>
                <Grid>
                    <Grid.Column width={4}>
                    <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
                    </Grid.Column>
                    <Grid.Column width={9}>
                    <Container textAlign='justified'>
            
                            <p>
                            <Label basic color='violet' as='h1'>W</Label>hen I got the dream to serve widows, I did not know that I was opening my life to so many
                               people  whom the Lord had prepared to bless through my calling. I had no idea that my life and
                               my family's life was taking a completely new turn as would be demonstrated later. For me 
                               , ths was only a fellowship to encourage all those widowed women who were moving through loss
                               . It was not to go beyond that point. Little did I know the Lord had other plans for my life
                               which would later give birth to the <Label color='blue'>"THE WELL OF HOPE INTERNATIONAL"</Label> as 
                               it is now popularly known.
                            </p>
                            <p>
                                Changing the lives of widows would never be complete without reaching out to their
                                 children. This is how the sponsorship program was born. The organisation that was 
                                 started as a platform to servwe widows by way of fellowship, later turned into a 
                                 well that gives hope to widows and their  children. Thanks to the German Baptist, 
                                 New Conference, which  became the first church  to embrace my visison for  the 
                                 widows in the US and that also supports the majority of the sponsored children in Kenya
                                  through <Label color='blue'>WELL OF HOPE INTERNATIONAL</Label> .
                            </p>
                            <p>
                                We have journeyed with some of the sponsored children from their day one in school (baby)
                                all the way to their 8th year in primary school. This has been a privilege that allows us to
                                shape them and prepare them for their future. The journey has not been without its challenges,
                                but we thank God for the support and prayers from all our sponsors. Some of the children who 
                                have been helped through this project have now become a blessing to their families and communities.
                                It is such an honor for me to see what the Lord is doing through the child sponsorship.
                            </p>
                            <Header><Label color='violet'>ZIPPORAH KAMAU</Label></Header>
                        
                     </Container>
                    </Grid.Column>
                </Grid>
            </React.Fragment>
         );
    }
}
 
export default Zipporah;