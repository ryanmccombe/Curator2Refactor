import React, { Component } from 'react';

import SectionEditor from '../../Containers/SectionEditor';

class StorylineRendererFullEditor extends Component {
  renderSections(sections) {
    return sections.map(section =>
      <SectionEditor storyId={this.props.storyline.id} key={section.id} section={section} />
    );
  }
  render() {
    const { storyline } = this.props;

    return (
      <div>
        {this.renderSections(storyline.sections)}
      </div>
    );
  }
}

export default StorylineRendererFullEditor;
