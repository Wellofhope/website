import React, { Component } from 'react';
import { Grid, Image, Container, Header, Label, Divider } from 'semantic-ui-react'



class Benedict extends Component {
    state = {  }
    render() { 
        return (  
            <React.Fragment>
                         <div>
                    <Header as='h1' icon textAlign='center'>
                    {/* <Icon name='users' circular /> */}
                    <Header.Content> <Header as='h1' color='yellow'> How We met Zippy </Header></Header.Content>
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
                                <Label basic color='violet' as='h1'>W</Label>e met Zippporah at a Seder supper in 2004, the first time
                                she came to the U.S. She spent some time with us in our home where we learned to know each other. She
                                started her testimony of how God spoke to her and gave her a heart foor the widows and their children's
                                plight. We were so moved by our dear sister's story and plunged in to try to connect her to as many 
                                people and organisations as ppossible. It has been amazing to see God work in providing the "right"
                                connections to further the vision
                            </p>
                            <p>
                               We assist with the financial aspects of <Label basic color='violet' as='h1'>WELL OF HOPE AMERICA</Label>
                               -keeping record of deposits and what they are for, wiring money from WOHA to WOHI, and sending year end 
                               contribution letters to donors.
                            </p>
                            <p>
                               We praise God for this opportunity to serve His people and for bringing Zippporah, Nat and their lovely
                               family into our lives.
                            </p>
                            <Header><Label color='violet'>Christ'n MaryBeth Benedict</Label></Header>
                        
                     </Container>
                    </Grid.Column>
                </Grid>
            </React.Fragment>
        );
    }
}
 
export default Benedict;