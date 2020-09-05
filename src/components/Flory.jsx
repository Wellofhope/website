import React, { Component } from "react";
import {
  Grid,
  Image,
  Container,
  Header,
  Label,
  Divider,
} from "semantic-ui-react";

class Flory extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div>
          <Header as="h1" icon textAlign="center">
            {/* <Icon name='users' circular /> */}
            <Header.Content>
              {" "}
              <Header as="h1" color="red">
                {" "}
                GOD'S WORK{" "}
              </Header>
            </Header.Content>
          </Header>
          <Divider />
        </div>
        <Grid>
          <Grid.Column width={4}>
            <Image src={require('./common/assets/img/florys.JPG')} />
          </Grid.Column>
          <Grid.Column width={9}>
            <Container textAlign="justified">
              <p>
                <Label basic color="violet" as="h1">
                  W
                </Label>
                e met Zippporah on one of her first trips to America in 2005
                invited her to our home for a meal and to tell us her story. Her
                dream for{" "}
                <Label basic color="violet" as="h1">
                  WOHA
                </Label>
                was in the very beginning stages. We were very touched with her
                story and asked how we could help. She explained her husband,
                Nathaniel, had a school and that orphans and children of widows
                were needing sponsors, to attend. She had several pictures of
                children with her who needed sponsors. We, and some of our
                family, agreed to sponsor children as they heard about the
                ministry and Zippporah would direct them to go through us. The
                sponsorship program, more or less 'fell in our laps'. We were
                glaf to do this but really didnt even realize what we were
                getting in for. We soon realized this was 'God's work', and He
                was prompting people to bless the unprivileged children as Nat &
                Zippporah and we, shared the needs and the blessing it was to
                these children to have a chance to attend school.
              </p>
              <p>
                Through the years we have had meetings of information about{" "}
                <Label basic color="violet" as="h1">
                  WOHA
                </Label>
                , and making people aware of the opportunity to sponsor
                children. We have visited Nathaniel's school and met these
                sponsored children. This is a Christian school with high moral
                standards. Many of these children excel and have high
                aspirations because of the chance they are given at chance for a
                good education. From time to time these children will write
                letters to their sponsors expressing their appreciation for
                being sponsored and sharing how they are doing in school and
                what their goals and dreams are. This is much appreciated by
                those sponsoring. Some of the sponsors wish this correspondence
                could be even more frequent. Sponsors are able to send gifts to
                their children when someone visits America. Thank you letters
                are most often sent by the children.
              </p>
              <p>
                We have never solicited to have children sponsored. We only make
                the need known. God is ever faithful! At present we have around
                73 children being sponsored and 56 sponsors. We are praying the
                LORD will bring us more willing persons as there are many more
                children in need of sponsors. Sometimes it's hard not to be
                disappointed when there are so many children needing sponsors
                and it seems no one comes forward. We thank Him for each one who
                does and continue to trust the Father to prompt willing
                participants. All for His glory, and may each one go where He
                leads.
              </p>
              <Header>
                <Label color="violet">Harold And Nancy Flory</Label>
              </Header>
            </Container>
          </Grid.Column>
        </Grid>
      </React.Fragment>
    );
  }
}

export default Flory;
