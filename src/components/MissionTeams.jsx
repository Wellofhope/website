import React, { Component } from 'react';
import { Segment, Image, Divider, Label, Header } from 'semantic-ui-react'

const src = '/images/wireframe/image-text.png'

class MissionTeams extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
                <div>
                    <Header as='h1' icon textAlign='center'>
                    {/* <Icon name='users' circular /> */}
                    <Header.Content> <Header as='h1' color='blue'> MISSION TEAMS </Header></Header.Content>
                    </Header>
                    </div>
                    <Divider />
 
                    <Header as='h1' icon textAlign='center'>
                    {/* <Icon name='users' circular /> */}
                    <Header.Content> <Header as='h2' color='blue'> <Label basic color='red'>THE OHIO TEAM</Label> </Header></Header.Content>
                    </Header>
                    <Segment>
    <Image src= {require('./common/assets/img/spons.jpg')} size='medium' floated='left' />
    <p textAlign='center'>
     The arrival of <Label basic color='red'>THE OHIO TEAM</Label> 2018 was a stamp of proof that the Lord is blessing his
     people who have put their trust in Him. With Ten missionaries, consisting of six ladies and four gentlemen, the group
     landed in Kenya in June 2018.
    </p>
    <Image src= {require('./common/assets/img/spons.jpg')} size='medium' floated='right' />
    <p textAlign='center'>
     This marked the beginning of a new journey of faith with a great desire to touch and bless the beautiful, special
     women who have been resilient in their journey of widowhood.
    </p>
    <p textAlign='center'>
     Nothing could stop them from enjoying the beautiful Kenyan weather that was warmly welcoming them to a two week 
     visit which changed lives and brought fulfillment by serving God. The story of this team began over ten years
     ago when the Lord connected me to this beautiful group. These individuals changed lives, history, ad more as they have
     shared their time and talents to become a testimony to preach the love of God.
    </p>
  </Segment>

      <Divider />
    
    <Header as='h1' icon textAlign='center'>
    {/* <Icon name='users' circular /> */}
    <Header.Content> <Header as='h2' color='blue'> <Label basic color='green'>THE VIRGINIA TEAM</Label> </Header></Header.Content>
    </Header>
    <Segment>
<Image src= {require('./common/assets/img/team.jpg')} size='medium' floated='left' />
<p textAlign='center'>
The arrival of <Label basic color='green'>THE VIRGINIA TEAM</Label>. The unbeatable twelve who landed in Kenya 
on different dates were a true representation of the American love for Kenya.
</p>
<Image src= {require('./common/assets/img/virginia.jpg')} size='medium' floated='right' />
<p textAlign='center'>
    Some members of this team started falling sick, one after the other. We watched helplessly in this time of trial.
    However, we overcame all these challenges and were still able to provide for many of the widows. Because of this team's 
    efforts, widows got blessed in various areas in their lives.
</p>
<p textAlign='center'>
<Header as='h5'color='violet'>
    "This was my 4th trip to Kenya, having been
     introduced to Nat and Zippy and the WELL OF 
    HOPE during the first visit. it's amazing how God can use people 
    of different countries, different beliefs and
    backgrounds to do His work-- feeding, clothing and housing the poor, the hungry, the widows and children."
    <p><Label basic color='black'>DAVE DIVELEY</Label></p>
    </Header>
    
    
</p>

</Segment>
                

            </React.Fragment>
         );
    }
}
 
export default MissionTeams;