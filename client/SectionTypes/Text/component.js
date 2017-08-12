import React from 'react';
import ReactQuill from 'react-quill';
import _ from 'lodash';
import { Container } from 'semantic-ui-react';

import styles from './text.less';

import Options from './options';

class Text extends React.PureComponent {
  // Dynamic styling based on things the user can change
  getStyle(currentContent) {
    return {
      background: `url(${currentContent.backgroundImage}) no-repeat center`,
      paddingTop: currentContent.paddingTop + 'px',
      paddingBottom: currentContent.paddingBottom + 'px'
    };
  }

  // TODO: Not here
  getColourPalette(theme = this.props.theme) {
    if (theme === 'partition') {
      return [
        'black',
        'white',
        '#7cb342',
        '#6e80e2',
        '#bb1919'
      ];
    }
    return ['black', 'white'];
  }

  render() {
    const { section, onEdit } = this.props;
    const { currentContent } = section;

    const quillModules = {
      toolbar: [
        [{ 'header': [1, false] }],
        ['bold', 'italic', 'underline','strike', 'blockquote'],
        // [{'list': 'ordered'}, {'list': 'bullet'}],
        [{ 'color': this.getColourPalette() }, { 'background': this.getColourPalette() }],
        // ['link', 'image']
        ['clean']
      ]
    };


    return (
      <div className={styles.storyTypeText + ' ' + styles[this.props.theme]} style={this.getStyle(currentContent)}>
        <Container className={styles.inner} textAlign={currentContent.alignment}>
          <div className={styles.editingContainer}>
            <ReactQuill
              theme="bubble"
              modules={quillModules}
              value={currentContent.body}
              onChange={value => onEdit('body', value)}
            />
          </div>
        </Container>
      </div>
    );
  }
}

// The <Text.options /> subcomponent
Text.Options = Options;

export default Text;
