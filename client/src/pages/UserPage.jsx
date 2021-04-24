import React, { Component } from "react";
import Navbar from "../components/Navbar";
import ActivityFeed from "../components/ActivityFeed";

import {
  Segment,
  Grid,
  Container,
  Accordion,
  Icon,
  Header,
  //Feed
} from "semantic-ui-react";

export default class UserPage extends Component {
  state = { activeIndex: 0 };

  handleClick = (e, titleProps) => {
    const { index } = titleProps;
    const { activeIndex } = this.state;
    const newIndex = activeIndex === index ? -1 : index;

    this.setState({ activeIndex: newIndex });
  };

  render() {
    const { activeIndex } = this.state;

    return (
      <>
        <Navbar />
        <Segment>
          <Grid columns={4} relaxed="very">
            <Grid.Column>
              <Container>
                <Header as="h4" color="red">
                  Currently Reading
                </Header>
                <Accordion fluid styled>
                  <Accordion.Title
                    active={activeIndex === 0}
                    index={0}
                    onClick={this.handleClick}
                  >
                    <Icon name="dropdown" />
                    Book 1
                  </Accordion.Title>
                  <Accordion.Content active={activeIndex === 0}>
                    <p>
                      A dog is a type of domesticated animal. Known for its
                      loyalty and faithfulness, it can be found as a welcome
                      guest in many households across the world.
                    </p>
                  </Accordion.Content>

                  <Accordion.Title
                    active={activeIndex === 1}
                    index={1}
                    onClick={this.handleClick}
                  >
                    <Icon name="dropdown" />
                    Book 2
                  </Accordion.Title>
                  <Accordion.Content active={activeIndex === 1}>
                    <p>
                      There are many breeds of dogs. Each breed varies in size
                      and temperament. Owners often select a breed of dog that
                      they find to be compatible with their own lifestyle and
                      desires from a companion.
                    </p>
                  </Accordion.Content>

                  <Accordion.Title
                    active={activeIndex === 2}
                    index={2}
                    onClick={this.handleClick}
                  >
                    <Icon name="dropdown" />
                    Book 3
                  </Accordion.Title>
                  <Accordion.Content active={activeIndex === 2}>
                    <p>
                      Three common ways for a prospective owner to acquire a dog
                      is from pet shops, private owners, or shelters.
                    </p>
                    <p>
                      A pet shop may be the most convenient way to buy a dog.
                      Buying a dog from a private owner allows you to assess the
                      pedigree and upbringing of your dog before choosing to
                      take it home. Lastly, finding your dog from a shelter,
                      helps give a good home to a dog who may not find one so
                      readily.
                    </p>
                  </Accordion.Content>
                </Accordion>
              </Container>
            </Grid.Column>
            <Grid.Column>
              <Container>
                <Header as="h4" color="olive">
                  History
                </Header>
                <Accordion fluid styled>
                  <Accordion.Title
                    active={activeIndex === 0}
                    index={0}
                    onClick={this.handleClick}
                  >
                    <Icon name="dropdown" />
                    Book 1
                  </Accordion.Title>
                  <Accordion.Content active={activeIndex === 0}>
                    <p>
                      A dog is a type of domesticated animal. Known for its
                      loyalty and faithfulness, it can be found as a welcome
                      guest in many households across the world.
                    </p>
                  </Accordion.Content>

                  <Accordion.Title
                    active={activeIndex === 1}
                    index={1}
                    onClick={this.handleClick}
                  >
                    <Icon name="dropdown" />
                    Book 2
                  </Accordion.Title>
                  <Accordion.Content active={activeIndex === 1}>
                    <p>
                      There are many breeds of dogs. Each breed varies in size
                      and temperament. Owners often select a breed of dog that
                      they find to be compatible with their own lifestyle and
                      desires from a companion.
                    </p>
                  </Accordion.Content>

                  <Accordion.Title
                    active={activeIndex === 2}
                    index={2}
                    onClick={this.handleClick}
                  >
                    <Icon name="dropdown" />
                    Book 3
                  </Accordion.Title>
                  <Accordion.Content active={activeIndex === 2}>
                    <p>
                      Three common ways for a prospective owner to acquire a dog
                      is from pet shops, private owners, or shelters.
                    </p>
                    <p>
                      A pet shop may be the most convenient way to buy a dog.
                      Buying a dog from a private owner allows you to assess the
                      pedigree and upbringing of your dog before choosing to
                      take it home. Lastly, finding your dog from a shelter,
                      helps give a good home to a dog who may not find one so
                      readily.
                    </p>
                  </Accordion.Content>
                </Accordion>
              </Container>
            </Grid.Column>
            <Grid.Column>
              <Container>
                <Header as="h4" color="purple">
                  Want to Read
                </Header>
                <Accordion fluid styled>
                  <Accordion.Title
                    active={activeIndex === 0}
                    index={0}
                    onClick={this.handleClick}
                  >
                    <Icon name="dropdown" />
                    Book 1
                  </Accordion.Title>
                  <Accordion.Content active={activeIndex === 0}>
                    <p>
                      A dog is a type of domesticated animal. Known for its
                      loyalty and faithfulness, it can be found as a welcome
                      guest in many households across the world.
                    </p>
                  </Accordion.Content>

                  <Accordion.Title
                    active={activeIndex === 1}
                    index={1}
                    onClick={this.handleClick}
                  >
                    <Icon name="dropdown" />
                    Book 2
                  </Accordion.Title>
                  <Accordion.Content active={activeIndex === 1}>
                    <p>
                      There are many breeds of dogs. Each breed varies in size
                      and temperament. Owners often select a breed of dog that
                      they find to be compatible with their own lifestyle and
                      desires from a companion.
                    </p>
                  </Accordion.Content>

                  <Accordion.Title
                    active={activeIndex === 2}
                    index={2}
                    onClick={this.handleClick}
                  >
                    <Icon name="dropdown" />
                    Book 3
                  </Accordion.Title>
                  <Accordion.Content active={activeIndex === 2}>
                    <p>
                      Three common ways for a prospective owner to acquire a dog
                      is from pet shops, private owners, or shelters.
                    </p>
                    <p>
                      A pet shop may be the most convenient way to buy a dog.
                      Buying a dog from a private owner allows you to assess the
                      pedigree and upbringing of your dog before choosing to
                      take it home. Lastly, finding your dog from a shelter,
                      helps give a good home to a dog who may not find one so
                      readily.
                    </p>
                  </Accordion.Content>
                </Accordion>
              </Container>
            </Grid.Column>
            <Grid.Column>
              <ActivityFeed/>
            </Grid.Column>
          </Grid>
        </Segment>
      </>
    );
  }
}
