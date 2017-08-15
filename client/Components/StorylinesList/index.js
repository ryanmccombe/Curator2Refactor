import React, { PureComponent } from 'react';
import { Container, Segment, Card, Button, Header, Label } from 'semantic-ui-react';

import StorylineRenderer from '../StorylineRenderer';

import styles from './storylineList.less';

class StorylinesList extends PureComponent {
  static renderStorylines(storylines) {
    return storylines.map((storyline, index) => (
      <StorylineRenderer
        key={storyline.id}
        index={index}
        storyline={storyline}
        layout="card"
      />)
    );
  }
  render() {
    const { storylines } = this.props;
    return (
      <div>
        <div className={styles.intro}>
          <Container>
            <Segment basic>
              <Header as="h1" inverted>
                Create Your Story
              </Header>
              <p>
                Imagine a world where there was extremely compelling copy here.  It would succinctly outline what we're trying to do, and get people excited for the possibilities.
              </p>
              <Button size="large" inverted secondary>Create Your Story</Button>
              <Button size="large" basic inverted>Product Tour</Button>
            </Segment>
          </Container>
        </div>

        <Container>
          <Segment basic>
            <Header dividing>Your Stories</Header>
            <Card.Group itemsPerRow={4}>
              {StorylinesList.renderStorylines(storylines)}
              <Card>
                <Button size="massive" basic icon="add" style={{height: '100%'}} />
              </Card>
            </Card.Group>
            <Header style={{ marginTop: '2.5em' }} dividing>Recently Updated</Header>
            <Card.Group itemsPerRow={4}>
              {StorylinesList.renderStorylines(storylines)}
              <Card>
                <Button size="massive" basic icon="add" style={{height: '100%'}} />
              </Card>
            </Card.Group>
            <Header style={{ marginTop: '2.5em' }} dividing>All Stories</Header>
            <Card.Group itemsPerRow={5}>
              {StorylinesList.renderStorylines(storylines)}
              <Card>
                <Button size="massive" basic icon="add" style={{height: '100%'}} />
              </Card>
            </Card.Group>
          </Segment>
        </Container>
      </div>
    );
  }
}

export default StorylinesList;
