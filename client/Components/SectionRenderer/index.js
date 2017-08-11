import React, { PureComponent } from 'react';
import { Sidebar, Segment, Button, Icon, Dropdown, Container, Menu } from 'semantic-ui-react';

import SectionRegistry from '../../SectionTypes/index';

import styles from './sectionRenderer.less';

class SectionRenderer extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      sidebarVisible: false
    };

    this.toggleSidebarVisibility = () => this.setState({ sidebarVisible: !this.state.sidebarVisible });
  }

  componentWillMount() {
    this.sectionDefinition = SectionRegistry[this.props.section.type];
    this.Component = this.sectionDefinition.component;
    this.Options = this.sectionDefinition.optionsComponent;
  }

  getThemeOptions(themes = this.sectionDefinition.availableThemes) {
    return themes.map(theme => {
      return {
        text: theme,
        value: theme
      };
    });
  }

  render() {
    const { section, onEdit, onDelete } = this.props;
    const { sidebarVisible } = this.state;

    if (section.isDeleted) {
      return (
        <div>
          Section Deleted
        </div>
      )
    }

    return (
      <Sidebar.Pushable>
        <Sidebar
          as={Menu}
          animation="overlay"
          direction="right"
          visible={sidebarVisible}
        >
          <Segment basic>
            <this.Options sectionDefinition={this.sectionDefinition} section={section} onEdit={onEdit} onClose={this.toggleSidebarVisibility} />
          </Segment>
        </Sidebar>
        <Sidebar.Pusher>
          <Container className={styles.storyToolbar} textAlign="right">
            <Dropdown placeholder="Select a Theme" selection options={this.getThemeOptions()} button>
            </Dropdown>
            <Button icon onClick={this.toggleSidebarVisibility} >
              <Icon name="setting" />
            </Button>
            <Button icon onClick={onDelete}>
              <Icon name="trash" />
            </Button>
          </Container>
          <this.Component sectionDefinition={this.sectionDefinition} section={section} onEdit={onEdit} />
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    );
  }
}

export default SectionRenderer;
