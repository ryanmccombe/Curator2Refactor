import React from 'react';
import { Container, Header } from 'semantic-ui-react';

import styles from './titlePage.less';

import BBCLogo from '../../Components/BBCLogo';

export default ({ section: { currentContent: { videoPoster, backgroundVideo } } }) => {
  return (
    <div className={styles.titlePage}>
      <div className={styles.bgVideo}>
        <video poster={videoPoster} playsInline autoPlay muted loop>
          <source type="video/mp4" src={backgroundVideo} />
        </video>
      </div>

      <div className={styles.lightenBackground} />
      <div className={styles.darkenBackground} />

      <div className={styles.bgVideo}>
        <video poster={videoPoster} playsInline autoPlay muted loop>
          <source type="video/mp4" src={backgroundVideo} />
        </video>
      </div>

      <Container className={styles.content + ' ' + styles.partition}>
        <div className={styles.header}>
          Header
        </div>

        <div className={styles.center}>
          <BBCLogo width="70px" />
          <Header as="h1">Partition of India</Header>
          <p>
            The partition of India and the birth of Pakistan shaped the lives of generations of&nbsp;families.
          </p>
          <p>
            In the era of the Raj, India was the jewel in Britain's imperial crown, but in 1947 everything&nbsp;changed.
          </p>
        </div>

        <div className={styles.footer}>
          Scroll down to take a journey through the key events of the last 70 years and beyond
        </div>
      </Container>
    </div>
  );
}