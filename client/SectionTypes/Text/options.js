import React, { PureComponent } from 'react';
import { Button, Label, Form } from 'semantic-ui-react';

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
    const { onEdit, onClose, section: { currentContent } } = this.props;

    return (
      <Form>
        <Label>Alignment</Label>
        <Form.Select
          fluid
          selection
          defaultValue={currentContent.alignment}
          onChange={(e, { value }) => onEdit('alignment', value)}
          options={this.alignmentOptions}
        />

        <Label>Background Image</Label>
        <Form.Input
          placeholder={currentContent.backgroundImage}
          onChange={e => onEdit('backgroundImage', e.target.value)}
        />

        <Label>Space Above Content</Label>
        <Slider
          value={currentContent.paddingTop}
          min={1}
          max={1200}
          orientation="horizontal"
          onChange={value => onEdit('paddingTop', value)}
        />

        <Label>Space Below Content</Label>
        <Slider
          value={currentContent.paddingBottom}
          min={1}
          max={1200}
          orientation="horizontal"
          onChange={val => onEdit('paddingBottom', val)}
        />

        <Button type="submit" onClick={onClose}>Close</Button>
      </Form>
    );
  }
}

export default TextOptions;
