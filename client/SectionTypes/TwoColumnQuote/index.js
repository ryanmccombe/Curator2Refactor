import React from 'react';
import ReactQuill from 'react-quill'
import { Form, Button, Container } from 'semantic-ui-react';

import Options from './options';

import styles from './TwoColumnQuote.less';

class TwoColumnQuote extends React.PureComponent {
  constructor(props) {
    super(props);

    this.modules = {
      toolbar: [
        ['bold', 'italic', 'underline','strike'],
        [{ 'color': ['white', 'black'] }, { 'background': ['white', 'black'] }],
        // ['link', 'image']
        ['clean']
      ],
    };
  }

  getStyle(currentContent) {
    console.log(currentContent.backgroundImage);
    const styleObject = {

      main: {
        backgroundImage: `url('${currentContent.backgroundImage}')`,
        paddingTop: currentContent.paddingTop + 'px',
        paddingBottom: currentContent.paddingBottom + 'px'
      },
      inner: {
        width: currentContent.width + '%'
      },
      headerContainer: {
        textAlign: currentContent.headerAlignment
      },
      header: {
        width: currentContent.headerWidth + '%',
      },
      footer: {
        display: currentContent.showFooter ? 'initial' : 'none',
        textAlign: currentContent.footerAlignment
      },
      animation: {
        opacity: currentContent.animationOpacity / 100,
        background: `url('${currentContent.animationLayer}')`
      }
    };

    if (currentContent.position === 'center') {
      styleObject.inner.margin = '0 auto';
    } else {
      console.log(currentContent.position)
      styleObject.inner.float = currentContent.position;
    }
    console.log(styleObject.main.background);

    return styleObject;
  }

  render() {
    const { onEdit, section: { currentContent } } = this.props;
    const style = this.getStyle(currentContent);
    return (
      <div className={styles.twoColumnQuote} style={style.main}>
        <Container className={styles.inner} >
          <div style={style.inner}>
          <div style={style.headerContainer}>
          <ReactQuill
            className={styles.storyHeader}
            style={style.header}
            theme="bubble"
            modules={this.modules}
            value={currentContent.title}
            onChange={value => onEdit('title', value)}
          />
          </div>

          <ReactQuill
            className={styles.storyBody}
            theme="bubble"
            modules={this.modules}
            value={currentContent.body}
            onChange={value => onEdit('body', value)}
          />

          <ReactQuill
            className={styles.quote}
            style={style.footer}
            theme="bubble"
            modules={this.modules}
            value={currentContent.quote}
            onChange={value => {

              // TODO: Null check here because for some reason Quill is calling
              // onChange on this editor on initialisation
              // Causes an exception on the thumbnail renderer as onEdit is not passed
              // Shouldn't be a problem once read only mode is implemented
              onEdit && onEdit('quote', value);
            }
            }
          />
          <div className={styles.wind} style={style.animation} />
          </div>
        </Container>
      </div>
    );
  }
}

TwoColumnQuote.Options = Options;

export default TwoColumnQuote;
