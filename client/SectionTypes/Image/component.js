// client/SectionTypes/image/component.js
import React from 'react';

import styles from './image.less';

export default ({ onEdit, section: { currentContent } }) => {
  const { backgroundImage } = currentContent;
  const dynamicStyle = {
    backgroundImage: `url('${backgroundImage}')`
  };

  return (
    <div className={styles.image} style={dynamicStyle}>
      <input value={currentContent.caption}
             onChange={event => onEdit('caption', event.target.value)}
      />
    </div>
  );
};
