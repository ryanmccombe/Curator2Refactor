import React, { PureComponent } from 'react';
import { Header, Card, Image, Container, Segment, Button } from 'semantic-ui-react';

import SectionTypeRegistry from '../../SectionTypes';

class AddSection extends PureComponent {
  renderSectionTypes() {
    return Object.keys(SectionTypeRegistry).map(sectionName => {
      const section = SectionTypeRegistry[sectionName];
      const { onAdd } = this.props;
      console.log(onAdd);
      return (
        <Card key={sectionName} raised>
          <Image src='http://blog.teamtreehouse.com/wp-content/uploads/2013/10/test.png' />
          <Card.Content>
            <Card.Header>
              {section.title}
            </Card.Header>
            <Card.Meta>
              {section.availableThemes.length} Theme{section.availableThemes.length !== 1 ? 's' : ''} Available
            </Card.Meta>
            <Card.Description>
              {section.description}
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <Button onClick={() => onAdd(sectionName)} fluid positive>Add Section</Button>
          </Card.Content>
        </Card>
      );
    });
  }

  render() {
    return (
      <Container>
        <Header dividing as="h3" textAlign="center" style={{marginTop: '1em'}}>Add a Section</Header>
        <Card.Group itemsPerRow={4}>
          {this.renderSectionTypes()}
        </Card.Group>
      </Container>
    );
  }
}

export default AddSection;