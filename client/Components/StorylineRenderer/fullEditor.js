import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import SectionRenderer from '../SectionRenderer/'
class StorylineRendererFullEditor extends Component {
  static renderSections(sections) {
    return sections.map(section =>
      <SectionRenderer key={section.id} section={section} />
    );
  }
  render() {
    const { storyline } = this.props;
    return (
      <div>
        {StorylineRendererFullEditor.renderSections(storyline.sections)}
      </div>
    );
  }
}

export default StorylineRendererFullEditor;
