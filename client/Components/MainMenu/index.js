import React, { PureComponent } from 'react';
import { Menu, Container, Dropdown, Image, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class MainMenu extends PureComponent {
  render() {
    const { activePage } = this.props;
    return (
      <div>
        <Menu inverted attached size="huge">
          <Container>
            <Menu.Item as={Link} to="/" active={activePage === 'home'}>
              Curator 2
            </Menu.Item>
            <Menu.Item as={Link} to="/storylines" active={activePage === 'storylines'}>Storylines</Menu.Item>
            <Menu.Item disabled as="a">Your Stories</Menu.Item>
            <Menu.Item disabled as="a">Users</Menu.Item>
            <Menu.Menu disabled position="right">
              <Dropdown disabled item simple text="Ryan McCombe">
                <Dropdown.Menu>
                  <Dropdown.Item>Sign Out</Dropdown.Item>
                  <Dropdown.Item>List Item</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <Menu.Item as="a" disabled><Icon name="question" /></Menu.Item>
            </Menu.Menu>
          </Container>
        </Menu>
      </div>
    );
  }
}

export default MainMenu;
