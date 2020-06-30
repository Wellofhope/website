import React, { Component } from 'react';
import { Grid, Image, Container, Header, Label, Divider } from 'semantic-ui-react'


class Teacher extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
                 <div>
                    <Header as='h1' icon textAlign='center'>
                    {/* <Icon name='users' circular /> */}
                    <Header.Content> <Header as='h1' color='brown'> TEACHERS TAKE </Header></Header.Content>
                    </Header>
                    <Divider />
                </div>
                <Grid>
                    <Grid.Column width={4}>
                    <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
                    </Grid.Column>
                    <Grid.Column width={9}>
                    <Container textAlign='justified'>
            
                            <p textAlign='center'>
                              I am the head teacher at Mlimani Star Junior. I have been working here for the last five 
                              years. I am grateful to God for giving me wisdom and knowledge to deal with children who 
                              often lack a father figure at home.
                            </p>
                            <p textAlign='center'>
                                Being the head teacher I have experienced some challenges in dealing with children. Many 
                                a time they miss school because they are sick and are in and out of the hospital. Sometimes
                                they come to school hungry and cannot concentrate in class. There are some who are taking
                                medication to help them feel well.
                            </p>
                            <p textAlign='center'>
                               It has also been a challenge to deal with their parents who most of the times are very bitter;
                               they come to my office to pour their hearts out. I listen to them, encourage, and give them hope.
                               Some parents cannot even afford a dollar to buy a book.
                               I also have the task of making sure these children get fair treatment from teachers and pupils. 
                               When these children lack a father figure at home, I have always provided fatherly love to them.
                               I encourage them which this gives them assurance of making it in life.
                            </p>
                            <p textAlign='center'>
                                I quote Mahatma  Gandhi who said, "When I admire the wonder of the sunset at the beauty of the moon,
                                my soul expands in worship of the creators." To me, when I see these children transforming their lives,
                                I am convinced that every one of us has the potential of extra-ordinary achievements and lasting fulfillment
                                . Many of the students go on to success in universities and colleges which satisfies my heart.
                                I extend our heartfelt congratulations to all our sponsors, teachers and friends of Mlimani Star Junior. May
                                the good Lord who watches over us continue to watch over you and your families and reward  you a hundred fold.
                            </p>
                            <Header><Label color='black'>TEACHER MARTIN</Label></Header>
                        
                     </Container>
                    </Grid.Column>
                </Grid>
                                     <Divider/>
                <Grid>
                    <Grid.Column width={4}>
                    <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
                    </Grid.Column>
                    <Grid.Column width={9}>
                    <Container textAlign='justified'>
            
                            <p>
                                <Label basic color='violet' as='h1'>I</Label> am a teacher 
                                at Mlimani Star Junior School. I am born-again Christian. I am glad
                                to be a teacher for the<Label color='blue'>THE WELL OF HOPE</Label> sponsored children.
                                I have seen their lives being changed for the better.
                            </p>
                            <p>
                                The sponsors are doing a great job impacting the lives of all the children. In the past
                                , many of the children felt discouraged and wrthless, having lost a parent and living in 
                                poverty. However, with the input of sponsors giving them a chance to attend school on a regular
                                basis, God is doing great work in them. My journey with them as their teacher has made a 
                                difference.
                            </p>
                            <p>
                               I thank Nat and Zipporah for their tireless efforts and commitment to ensure these children lives
                               and enjoy life like other children. Some of them have even gone to higher leraning levels for which 
                               we give thanks and all the glory to God. May the Almighty God bless all the sponsors and Nat's family
                               greatly.
                            </p>
                            <Header><Label color='black'>TEACHER ROSEMARY</Label></Header>
                        
                     </Container>
                    </Grid.Column>
                </Grid>
            </React.Fragment>
         );
    }
}
 
export default Teacher;