import React, { PureComponent } from 'react';
import { Header, Card, Image, Container, Segment, Button } from 'semantic-ui-react';

import SectionRenderer from '../SectionRenderer'
import SectionTypeRegistry from '../../SectionTypes';

class AddSection extends PureComponent {
  renderSectionTypes() {
    return Object.keys(SectionTypeRegistry).map(sectionName => {
      const section = SectionTypeRegistry[sectionName];
      const { onAdd } = this.props;
      const themeCount = (section.availableThemes && section.availableThemes.length) || 1;
      return (
        <Card key={sectionName} raised>
          <SectionRenderer thumbnail section={{ type: sectionName, currentContent: section.defaultContent }} />
          <Card.Content>
            <Card.Header>
              {section.title}
            </Card.Header>
            <Card.Meta>
              {themeCount} Theme{themeCount !== 1 ? 's' : ''} Available
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