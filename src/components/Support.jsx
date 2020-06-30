import React, { Component } from 'react';
import { Grid, Image, Container, Header, Label, Divider } from 'semantic-ui-react'



class Support extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
                   <div>
                    <Header as='h1' icon textAlign='center'>
                    {/* <Icon name='users' circular /> */}
                    <Header.Content> <Header as='h1' color='green'> THE SUPPORT GROUP </Header></Header.Content>
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
                            <Label basic color='violet' as='h1'>As</Label> the organisation grew, new challenges 
                            emerged. When we started providing health care, healthy living talks and voluntary 
                            counseling and testing through nurses, it emerged that some women were living with
                            underlying medical conditions. Many of the women confessed that their spouses died 
                            of immune challenging diseases and that they are living with the challenges. WOHI
                            decided to startv a support group to cater for those affected and exposed. Membership
                            is voluntary and here they get a lot of useful information on where to get medication,
                            counseling, fellowship and advice on healthy living. Sex education is also offered to 
                            those still sexually active. 
                            </p>
                            <p>
                              More often, members benefit from food rations, clothes, bags of love, christmas parties.
                              Besides, their children both infected and healthy are offered educactional sponsorship.
                              Members anchored by faith and hope in Christ.
                            </p>
                            <p>
                                The Well of Hope has never thought of starting a home of their own to take care of children 
                                who lose their mothers through ssuch conditions. Its our policy to let the relatives stay
                                with these needy kids to instill in them family values. If need arises, we refer the children
                                to established homes like THE DREAMS PROJECT  which WOHI  is proudly associated with in terms 
                                of support. In this group, the members range from the age of 22 to 45 years. We thank all volunteers 
                                who have assisted us in one way or another.
                            </p>
                        
                     </Container>
                    </Grid.Column>
                </Grid>
            </React.Fragment>
         );
    }
}
 
export default Support;