import React, { PureComponent } from 'react';
import { Form, Segment, Divider } from 'semantic-ui-react';

import Slider from 'react-rangeslider';

class TextOptions extends PureComponent {
  constructor(props) {
    super(props);
    this.alignmentOptions = [
      {
        key: 'left',
        text: 'Left',
        value: 'left',
      }, {
        key: 'center',
        text: 'Center',
        value: 'center',
      }, {
        key: 'right',
        text: 'Right',
        value: 'right',
      },
    ];
  }

  render() {
    const { onEdit, section: { currentContent } } = this.props;

    return (
      <Segment>
        <Form>
          <Form.Field>
            <label>Alignment</label>
            <Form.Select
              fluid
              selection
              defaultValue={currentContent.alignment}
              onChange={(e, { value }) => onEdit('alignment', value)}
              options={this.alignmentOptions}
            />
          </Form.Field>

          <Divider />

          <Form.Field>
            <label>Background Image</label>
            <Form.Input
              placeholder={currentContent.backgroundImage}
              onChange={e => onEdit('backgroundImage', e.target.value)}
            />
          </Form.Field>

          <Divider />

          <Form.Field>
            <label>Space Above Content</label>
            <Slider
              value={currentContent.paddingTop}
              min={1}
              max={1200}
              orientation="horizontal"
              onChange={value => onEdit('paddingTop', value)}
            />
          </Form.Field>

          <Divider />

          <Form.Field>
            <label>Space Below Content</label>
            <Slider
              value={currentContent.paddingBottom}
              min={1}
              max={1200}
              orientation="horizontal"
              onChange={val => onEdit('paddingBottom', val)}
            />
          </Form.Field>
        </Form>
      </Segment>
    );
  }
}

export default TextOptions;
