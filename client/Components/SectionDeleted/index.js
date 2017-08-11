import React, { Component } from 'react';
import { Message, Button, Grid } from 'semantic-ui-react';

import SectionRenderer from '../SectionRenderer';

import styles from './sectionDeleted.less';

class SectionDeleted extends Component {
  render() {
    const { section, onRestore } = this.props;
    return (
      <Message attached warning size="large">
        <Grid container>
          <Grid.Column width={4}>
            <div className={styles.thumbnailWrapper}>
              <SectionRenderer thumbnail section={section} />
            </div>
          </Grid.Column>
          <Grid.Column width={12}>
            <Message.Header>Deleted Section</Message.Header>
            <p>This section will be permanently lost if you save this storyline</p>
            <div className={styles.messageButtons}>
              <Button secondary onClick={onRestore}>Restore Section</Button>
              <Button negative disabled>Save Now</Button>
            </div>
          </Grid.Column>
        </Grid>
      </Message>
    );
  }
}

export default SectionDeleted;

