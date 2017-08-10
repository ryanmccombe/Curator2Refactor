import React, { PureComponent } from 'react';

import StorylineRenderer from '../StorylineRenderer'

class StorylinesList extends PureComponent {
  static renderStorylines(storylines) {
    return storylines.map((storyline, index) => (
      <StorylineRenderer
        key={storyline.id}
        index={index}
        storyline={storyline}
        layout="horizontal"
      />)
    );
  }
  render() {
    const { storylines } = this.props;
    return (
      <div>
        {StorylinesList.renderStorylines(storylines)}
      </div>
    );
  }
}

export default StorylinesList;
