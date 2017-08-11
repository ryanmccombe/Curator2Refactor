import React, { Component } from 'react';

import styles from './sectionRenderer.less';

class ThumbnailRenderer extends Component {
  render() {
    const Component = this.props.sectionDefinition.component;
    return (
      <div className={styles.wrapper}>
        <div className={styles.thumbnailRenderer}>
          <Component section={this.props.section} />
        </div>
      </div>
    );
  }
}

export default ThumbnailRenderer;