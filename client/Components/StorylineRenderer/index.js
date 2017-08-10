import React, { Component } from 'react';

import FullEditor from './fullEditor';
import Horizontal from './horizontal';

class StorylineRenderer extends Component {
  render() {
    const { layout } = this.props;
    if (layout === 'editor') {
      return <FullEditor {...this.props} />;
    } else {
      return <Horizontal {...this.props} />;
    }
  }
}

export default StorylineRenderer;
