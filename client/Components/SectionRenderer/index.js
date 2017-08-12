import React, { PureComponent } from 'react';
import { Sidebar, Segment, Button, Icon, Dropdown, Container, Menu, Card } from 'semantic-ui-react';

import SectionDeleted from '../SectionDeleted';
import ThumbnailRenderer from './thumbnailRenderer';

import SectionRegistry from '../../SectionTypes/index';

import styles from './sectionRenderer.less';

class SectionRenderer extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      sidebarVisible: false
    };

    this.toggleSidebarVisibility = () =>
      this.setState({ sidebarVisible: !this.state.sidebarVisible });
  }

  componentWillMount() {
    this.sectionDefinition = SectionRegistry[this.props.section.type];
    this.Component = this.sectionDefinition.component;
    this.Options = this.sectionDefinition.optionsComponent;
    this.availableThemes = this.sectionDefinition.availableThemes || ['Default'];
  }

  getThemeOptions(themes = this.availableThemes) {
    return themes.map(theme => ({
      text: theme,
      value: theme
    }));
  }

  render() {
    const { section, onEdit, onDelete, onRestore } = this.props;
    const { sidebarVisible } = this.state;

    if (this.props.thumbnail) {
      return <ThumbnailRenderer sectionDefinition={this.sectionDefinition} {...this.props} />;
    }

    if (section.isDeleted) {
      return (
        <div>
          <SectionDeleted section={section} onRestore={onRestore} />
        </div>
      );
    }

    return (
      <Sidebar.Pushable>
        <Sidebar
          width="wide"
          as={Card}
          animation="overlay"
          direction="right"
          visible={sidebarVisible}
          style={{ backgroundColor: 'rgba(255,255,255,.2)' }}
        >
          <Segment basic>
            <Button.Group fluid size="large">
              <Button icon negative onClick={onDelete}>
                <Icon name="trash" />
              </Button>
              <Button disabled icon color="orange" onClick={onDelete}>
                <Icon name="undo" />
              </Button>
              <Button disabled icon positive onClick={onDelete}>
                <Icon name="save" />
              </Button>
              <Button floated="right" icon secondary onClick={this.toggleSidebarVisibility} >
                <Icon name="close" />
              </Button>
            </Button.Group>
            <Dropdown
              className="ui segment"
              fluid
              placeholder="Select a Theme"
              selection
              options={this.getThemeOptions()}
              button
            />
            {this.Options ? (
              <this.Options
                sectionDefinition={this.sectionDefinition}
                section={section}
                onEdit={onEdit}
                onClose={this.toggleSidebarVisibility}
              />
            ) : null}
          </Segment>
        </Sidebar>
        <Sidebar.Pusher>
          {!sidebarVisible ? (
            <Container className={styles.storyToolbar} textAlign="right">
              <Dropdown
                size="large"
                placeholder="Select a Theme"
                selection
                options={this.getThemeOptions()}
                button
              />
              <Button icon negative onClick={onDelete}>
                <Icon name="trash" />
              </Button>
              <Button disabled icon color="orange" onClick={onDelete}>
                <Icon name="undo" />
              </Button>
              <Button disabled icon positive onClick={onDelete}>
                <Icon name="save" />
              </Button>
              <Button icon secondary onClick={this.toggleSidebarVisibility} >
                <Icon name="setting" />
              </Button>
            </Container>
          ) : null}
          <this.Component
            sectionDefinition={this.sectionDefinition}
            section={section}
            onEdit={onEdit}
          />
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    );
  }
}

export default SectionRenderer;
