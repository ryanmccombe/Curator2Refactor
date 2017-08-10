import React, { PureComponent } from 'react';
import { Button, Label, Form } from 'semantic-ui-react';

import Slider from 'react-rangeslider';
import 'react-rangeslider/lib/index.css';

class TextOptions extends PureComponent {
  constructor(props) {
    super(props);
    this.options = [
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
    this.state = {
      paddingTop: 40,
      paddingBottom: 80
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(prop, val) {
    this.setState({
      [prop]: val
    });
    this.props.onChange(prop, val);
  }


  render() {
    return (
      <Form>
        <Label>Alignment</Label>
        <Form.Select
          fluid
          selection
          defaultValue="left"
          onChange={(e, { value }) => this.props.onChange('alignment', value)}
          options={this.options}
        />

        <Label>Background Image</Label>
        <Form.Input
          placeholder="https://femmebot.github.io/google-type/images/indigo-sea.jpg"
          onChange={e => this.props.onChange('backgroundImage', e.target.value)}
        />

        <Label>Space Above Content</Label>
        <Slider
          value={this.state.paddingTop}
          min={1}
          max={1200}
          orientation="horizontal"
          onChange={val => this.handleChange('paddingTop', val)}
        />

        <Label>Space Below Content</Label>
        <Slider
          value={this.state.paddingBottom}
          min={1}
          max={1200}
          orientation="horizontal"
          onChange={val => this.handleChange('paddingBottom', val)}
        />

        <Button type="submit" onClick={this.props.onClose}>Save</Button>
      </Form>
    );
  }
}

export default TextOptions;
