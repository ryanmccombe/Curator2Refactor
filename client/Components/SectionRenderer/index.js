import React, { PureComponent } from 'react';
import { Sidebar, Segment, Button, Icon, Dropdown, Container, Menu, Card } from 'semantic-ui-react';

import SectionDeleted from '../SectionDeleted'
import ThumbnailRenderer from './thumbnailRenderer';

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
    const { section, onEdit, onDelete, onRestore } = this.props;
    const { sidebarVisible } = this.state;

    if (this.props.thumbnail) {
      return <ThumbnailRenderer sectionDefinition={this.sectionDefinition} {...this.props} />
    }

    if (section.isDeleted) {
      return (
        <div>
          <SectionDeleted section={section} onRestore={onRestore} />
        </div>
      )
    }

    return (
      <Sidebar.Pushable>
        <Sidebar
          width="wide"
          as={Container}
          animation="overlay"
          direction="right"
          visible={sidebarVisible}
          style={{boxShadow: 'none'}}
        >
          <Segment basic>
            <this.Options sectionDefinition={this.sectionDefinition} section={section} onEdit={onEdit} onClose={this.toggleSidebarVisibility} />
          </Segment>
        </Sidebar>
        <Sidebar.Pusher>
          <div className={styles.storyToolbar} textAlign="right">
            <Dropdown placeholder="Select a Theme" selection options={this.getThemeOptions()} button>
            </Dropdown>
            <Button icon secondary onClick={this.toggleSidebarVisibility} >
              <Icon name="setting" />
            </Button>
            <Button icon negative onClick={onDelete}>
              <Icon name="trash" />
            </Button>
            <Button disabled icon color="orange" onClick={onDelete}>
              <Icon name="undo" />
            </Button>
            <Button disabled icon positive onClick={onDelete}>
              <Icon name="save" />
            </Button>
          </div>
          <this.Component sectionDefinition={this.sectionDefinition} section={section} onEdit={onEdit} />
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    );
  }
}

export default SectionRenderer;
