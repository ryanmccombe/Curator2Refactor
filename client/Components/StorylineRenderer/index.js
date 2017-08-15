import React, { Component } from 'react';

import FullEditor from './fullEditor';
import Horizontal from './horizontal';
import Card from './card';

class StorylineRenderer extends Component {
  render() {
    const { layout } = this.props;
    if (layout === 'editor') {
      return <FullEditor {...this.props} />;
    } else if (layout === 'card') {
      return <Card {...this.props} />;
    } else {
      return <Horizontal {...this.props} />;
    }
  }
}

export default StorylineRenderer;
