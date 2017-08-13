# 3. Adding Content to the Editor Shelf
The editor provides a mechanism for modifying section properties that do not make sense to edit within the section layout itself.

Section definitions can include an additional optionsComponent property, that will be placed in the shelf to the right of the section, below the theme selection dropdown.

![Empty Shelf](./images/yourOptionsHere.png?raw=true "Empty Shelf")

By the end of this document, we will make the background image URL editable by providing a form in that shelf.

![Final Shelf View](./images/finalShelfView.png?raw=true "Final Shelf View")

There are 3 steps involved:

  - Update the section definition to use a scaffolded component
  - Create an options component
  - Make the section use the provided background image

### a. Update the Section Definition
Lets scaffold a placeholder component to import to the section definition.  The recommendation is to create this component within the directory you have created for your section ("group by feature")

```js
// client/SectionTypes/image/options.js
import React from 'react';

export default () => {
  return (
    <h1>
      Hello World
    </h1>
  );
};
```

Lets update the section definition to import this new component (line 3) and reference it as the optionsComponent (line 10).

As we're going to be making the background image dynamic, we'll also import the default background image we're going to be making editable (line 4) and create a defaultContent property for it (line 13) like we did for the caption previously

```js
// client/SectionTypes/image/index.js
import component from './component';
import optionsComponent from './options';
import deer from './deer.jpg';

export default {
  title: 'Image',
  description: 'A section type for displaying images with headers',
  component,
  optionsComponent,
  defaultContent: {
    caption: 'Deerum ipsum dolor sit amet, consectetur adipiscing elit',
    backgroundImage: deer
  }
};
```

You should now see your scaffolded options component within the shelf of any sections using your type

![Options Scaffold](./images/optionsScaffold.png?raw=true "Options Scaffold")

### b. Create an Options Component
The Options component you create will be provided with the same properties as the section component - it will therefore have access to the `section.currentContent`, as well as the `onEdit` function to make changes.

As we did for the main component, lets destructure these properties from the first function parameter (line 5) and use them to drive a form input (line 11),

```js
// client/SectionTypes/image/options.js
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
```

Note this is using the Segment and Form components from the semantic-ui-react library - these are entirely presentational

This form should now be shown alongside any sections of the type you're making.

![Options Complete](./images/optionsComplete.png?raw=true "Options Complete")

Changing the background image will have no effect as that is still being hardcoded within the section component.  Lets fix that now.

### c. Make the Section use the Specified Background Image
The background image is currently being hardcoded in the CSS file of the new section.

Now that the background image is editable and being provided through the properties object at  `section.currentContent.backgroundImage`, we need to update the main component to use that dynamic value.  We destructure it from currentContent (line 7), use it to build a CSS value (line 9) then apply that to our element (line 13)

```js
// client/SectionTypes/image/component.js
import React from 'react';

import styles from './image.less';

export default ({ onEdit, section: { currentContent } }) => {
  const { backgroundImage } = currentContent;
  const dynamicStyle = {
    backgroundImage: `url('${backgroundImage}')`
  };

  return (
    <div className={styles.image} style={dynamicStyle}>
      <input value={currentContent.caption}
             onChange={event => onEdit('caption', event.target.value)}
      />
    </div>
  );
};
```

We should now have a completed new "Image" section with both the image and caption being editable

### Completed Section

[The final code is available here](https://github.com/ryanmccombe/Curator2Refactor/tree/fbea2d58884030ec2c8a9536b8581ad2b13f71d1/client/SectionTypes/Image), and the completed full size section with both properties edited, along with the "Add Section" thumbnail using the default properties can be seen below:

![Preview](./images/preview.png?raw=true "Preview")