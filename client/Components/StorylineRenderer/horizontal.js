import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class StorylineRendererHorizontal extends Component {
  render() {
    const { storyline, index } = this.props;
    return (
      <Link to={`/storyline/${index}`}>
        {storyline.title}
      </Link>
    );
  }
}

export default StorylineRendererHorizontal;
