import React, { PureComponent } from 'react';
import { Card, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import SectionRenderer from '../SectionRenderer';

class CardRenderer extends PureComponent {
  render() {
    console.log('cr', this.props);
    const { storyline } = this.props;
    const { type, currentContent } = storyline.sections[0];
    return (
      <Card raised>
        <SectionRenderer thumbnail section={{ type, currentContent }} />
        <Card.Content>
          <Card.Header>
            {storyline.title}
          </Card.Header>
          <Card.Meta>
            {storyline.sections.length} Section{storyline.sections.length !== 1 ? 's' : ''}
          </Card.Meta>
          <Card.Description>
            {storyline.description || 'Storyline Summary NYI' /* TODO */ }
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Button.Group fluid>
            <Button primary disabled>Details</Button>
            <Button as={Link} to={`/storyline/${storyline.id}/english/edit`} secondary>Editor</Button>
          </Button.Group>
        </Card.Content>
      </Card>
    )
  }
}

export default CardRenderer;

