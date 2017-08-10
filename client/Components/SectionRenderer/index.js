import React, { PureComponent } from 'react';

import SectionRegistry from '../../SectionTypes/index';

class SectionRenderer extends PureComponent {
  componentWillMount() {
    this.sectionDefinition = SectionRegistry[this.props.section.type];
    this.Component = this.sectionDefinition.component;
  }
  render() {
    const { section } = this.props;

    return (
      <div>
        <this.Component />
      </div>
    );
  }
}

export default SectionRenderer;
