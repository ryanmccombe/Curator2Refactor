import React from 'react';
import { Segment, Form } from 'semantic-ui-react';

export default ({ onEdit, section: { currentContent } }) => {
  return (
    <Segment>
      <Form>
        <Form.Field>
          <label>Background Image</label>
          <Form.Input
            fluid
            placeholder={currentContent.backgroundImage}
            onChange={e => onEdit('backgroundImage', e.target.value)}
          />
        </Form.Field>
      </Form>
    </Segment>
  );
};
