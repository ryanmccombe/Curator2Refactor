import React from 'react';
import ReactQuill from 'react-quill';
import { Form, Button, Container } from 'semantic-ui-react';

import Options from './options';

import styles from './TwoColumnQuote.less';

class TwoColumnQuote extends React.PureComponent {
  constructor(props) {
    super(props);

    this.modules = {
      toolbar: [
        ['bold', 'italic', 'underline', 'strike'],
        [{ color: ['white', 'black'] }, { background: ['white', 'black'] }],
        // ['link', 'image']
        ['clean']
      ],
    };
  }

  getStyle(currentContent) {
    const styleObject = {
      main: {
        backgroundImage: `url('${currentContent.backgroundImage}')`,
        paddingTop: `${currentContent.paddingTop}px`,
        paddingBottom: `${currentContent.paddingBottom}px`
      },
      inner: {
        width: `${currentContent.width}%`
      },
      headerContainer: {
        textAlign: currentContent.headerAlignment
      },
      header: {
        width: `${currentContent.headerWidth}%`,
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
      styleObject.inner.float = currentContent.position;
    }

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
              onChange={value => onEdit('quote', value)}
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
