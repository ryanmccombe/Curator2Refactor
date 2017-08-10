import React, { PureComponent } from 'react';

import { Menu, Container, Dropdown, Button } from 'semantic-ui-react';

class StorylineMenu extends PureComponent {
  render() {
    const { storyline } = this.props;
    return (
      <div>
        <Menu color="grey" inverted attached>
          <Container>
            <Menu.Item header>
              {storyline.title}
            </Menu.Item>
            <Dropdown item simple text='English'>
              <Dropdown.Menu>
                <Dropdown.Item>English</Dropdown.Item>
                <Dropdown.Item disabled>Hindi</Dropdown.Item>
                <Dropdown.Item disabled>Urdu</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item disabled icon='add' text='Add Language' />
              </Dropdown.Menu>
            </Dropdown>

            <Menu.Menu position='right'>
              <Menu.Item>
                <Button.Group>
                  <Button negative disabled>Reset All</Button>
                  <Button secondary disabled>Reorder Sections</Button>
                  <Button positive disabled>Save All</Button>
                </Button.Group>
              </Menu.Item>
            </Menu.Menu>
          </Container>
        </Menu>
      </div>
    );
  }
}

StorylineMenu.propTypes = {

};

export default StorylineMenu;
