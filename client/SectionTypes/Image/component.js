// client/SectionTypes/image/component.js
import React from 'react';

import styles from './image.less';

export default ({ onEdit, section: { currentContent } }) => {
  return (
    <div className={styles.image}>
      <input value={currentContent.caption}
             onChange={event => onEdit('caption', event.target.value)}
      />
    </div>
  );
};
