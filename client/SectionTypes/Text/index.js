import React from 'react';
import ReactQuill from 'react-quill';
import { Button, Form, Container, Label } from 'semantic-ui-react';

import styles from './text.less';

import Options from './options';

class Text extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      body: '<h1>Text Section with Background Image</h1>' +
      '<p>The British arrived in India in the 1600s, establishing trading posts under the British East India Company which gathered its own enormous private army.</p>' +
      '<p>In 1857 a large part of the Indian army rebelled against the British authorities, and a year later, the country came under direct British rule; this began the period known as the Raj, meaning "to rule" or "kingdom" in Hindi.</p>' +
      '<p>The bloody struggle set the tone for the political, social and economic rule established by Britain.</p>'
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(value) {
    this.setState({
      body: value
    });
  }

  getStyleObject(props) {
    const style = {};
    props.backgroundImage ? style.background = `url(${props.backgroundImage}) no-repeat center` : null;
    props.paddingTop ? style.paddingTop = props.paddingTop + 'px' : null;
    props.paddingBottom ? style.paddingBottom = props.paddingBottom + 'px' : null;
    return style;
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
      <div className={styles.storyTypeText + ' ' + styles[this.props.theme]} style={this.getStyleObject(this.props)}>
        <Container className={styles.inner} textAlign={this.props.alignment || 'left'}>
          <div className="editing-container">
            <ReactQuill
              theme="bubble"
              modules={quillModules}
              value={this.state.body}
              onChange={this.handleChange}
            />
          </div>
        </Container>
      </div>
    );
  }
}

// The <Text.options /> subcomponent
Text.options = Options;

export default Text;
