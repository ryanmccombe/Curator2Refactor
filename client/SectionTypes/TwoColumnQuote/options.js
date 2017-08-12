import React, { PureComponent } from 'react';
import { Form, Button, Label, Checkbox, Accordion, Icon, Divider } from 'semantic-ui-react';
import Slider from 'react-rangeslider';

class Options extends PureComponent {
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
      <Form>
        <Accordion styled fluid>
          <Accordion.Title>
            <Icon name='dropdown' /> Overall
          </Accordion.Title>
          <Accordion.Content>
            <Form.Field inline>
              <label>Width</label>
              <Slider
                value={currentContent.width}
                min={30}
                max={100}
                orientation="horizontal"
                onChange={value => onEdit('width', value)}
              />
            </Form.Field>

            <Divider />

            <Form.Field inline>
              <label>Position</label>
              <Form.Select
                fluid
                selection
                defaultValue={currentContent.position}
                onChange={(e, { value }) => onEdit('position', value)}
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
          </Accordion.Content>

          <Accordion.Title>
            <Icon name='dropdown' /> Header
          </Accordion.Title>
          <Accordion.Content>
            <Form.Field>
              <label>Header Alignment</label>
              <Form.Select
                fluid
                selection
                defaultValue={currentContent.headerAlignment}
                onChange={(e, { value }) => onEdit('headerAlignment', value)}
                options={this.alignmentOptions}
              />
            </Form.Field>

            <Divider />

            <Form.Field>
              <label>Header Width</label>
              <Slider
                value={currentContent.headerWidth}
                min={30}
                max={100}
                orientation="horizontal"
                onChange={value => onEdit('headerWidth', value)}
              />
            </Form.Field>
          </Accordion.Content>

          <Accordion.Title>
            <Icon name='dropdown' /> Footer
          </Accordion.Title>
          <Accordion.Content>
            <Form.Field inline>
              <label>Show Footer</label>
              <Checkbox
                checked={currentContent.showFooter}
                onChange={(e, { checked }) => onEdit('showFooter', checked)}
              />
            </Form.Field>

            <Divider />

            <Form.Field>
              <label>Footer Alignment</label>
              <Form.Select
                fluid
                selection
                defaultValue={currentContent.footerAlignment}
                onChange={(e, { value }) => onEdit('footerAlignment', value)}
                options={this.alignmentOptions}
              />
            </Form.Field>
          </Accordion.Content>

          <Accordion.Title>
            <Icon name='dropdown' /> Animation
          </Accordion.Title>
          <Accordion.Content>
            <Form.Field>
              <label>Animation Layer</label>
              <Form.Input
                placeholder={currentContent.animationLayer}
                onChange={e => onEdit('animationLayer', e.target.value)}
              />
            </Form.Field>

            <Divider />

            <Form.Field>
              <label>Animation Opacity</label>
              <Slider
                value={currentContent.animationOpacity}
                min={0}
                max={100}
                orientation="horizontal"
                onChange={value => onEdit('animationOpacity', value)}
              />
            </Form.Field>
          </Accordion.Content>
        </Accordion>
      </Form>
    );
  }
}

export default Options;
