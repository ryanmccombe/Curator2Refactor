# 2. Adding Section Types - Editable Sections

After doing the minimal setup to get a working section type, the next step is to make that section editable.  By the end of this page, the caption of the section will be editable by users

![Caption Editable](./images/editable.png?raw=true "Caption Editable")

This is broken down into 3 parts:

  - How the editor stores section content
  - How the editor provides section content
  - How to edit content

### a. How the Editor Stores Section Content
The data storage needs of any section is defined as a simple JavaScript object - any section can create any keys on that object, therefore, each section defines its own schema.

By understanding what parts of our section will be editable, we can identify what data needs to be extracted into that object.  When section content is not being recovered from the database (eg, the user has just added a new section to their story), the editor will provide default content.

The default content for each editable section are properties of the `defaultContent` object of the section definition created earlier.

Lets extract the caption into the section defintion, by adding the `defaultContent` property.  `defaultContent` is an object with a property for each piece of dynamic content we want in our section.   For now, that is just the caption:

```js
// client/SectionTypes/image/index.js
import component from './component';

export default {
  title: 'Image',
  description: 'A section type for displaying images with headers',
  component,
  defaultContent: {
    caption: 'Deerum ipsum dolor sit amet, consectetur adipiscing elit'
  }
};
```

### b. How the Editor Provides Section Content
Now that the editor knows what content we want our section to be provided with, we need to update our section to actually show that content, instead of hardcoding the caption.

When the editor loads your section, it is provided with an object containing a lot of properties.  This is the first argument of the function we exported as our component - the standard React `props` convention.

As the component we created is a basic functional component, `props` are passed as the first argument to that function.  The current content that the section needs to render is stored in that object as `section.currentContent`.

When the section is first added, that object will have the defaults from the section definition defined earlier, so we would expect that object to have a `caption` property with the value we specified in the previous step

Lets update our component to destructure `section` off that incoming argument, then further destructure `currentContent` off the section object (line 5).  We then update the `<h1>` to use the caption on `currentContent`, instead of what we had previously hardcoded (line 8)

```js
// client/SectionTypes/image/component.js
import React from 'react';
import styles from './image.less';

export default ({ section: { currentContent} }) => {
  return (
    <div className={styles.image}>
      <h1>{currentContent.caption}</h1>
    </div>
  );
};
```
Your section should behave identically, with the added benefit that the caption is now being controlled by the editor framework, instead of hardcoded

### c. How to Edit Content
In order to make content editable, the editor provides a function on the same properties argument we used previously.  This function, called `onEdit`, can be called any time something needs updated.  This function accepts 2 arguments - the `property` to change, and the value to set it to.

Lets destructure this function off our function argument (line 5) and then replace the `<h1>` with an `<input>` that allows the user to edit the content.  On that input, we will call `onEdit` when the content changes, informing the framework that what we want to change is the `caption` property, and it needs changed to the value of the input (line 8):

```js
// client/SectionTypes/image/component.js
import React from 'react';
import styles from './image.less';

export default ({ onEdit, section: { currentContent } }) => {
  return (
    <div className={styles.image}>
      <input value={currentContent.caption}
             onChange={event => onEdit('caption', event.target.value)}
      />
    </div>
  );
};
```
This is what is considered a "controlled input" in React - we're not changing the value of the input - it is always set to currentContent.caption.

However, behind the scenes, every call to `onEdit` is updating `currentContent`, therefore, the illusion that the input is being directly edited is maintained.

After making CSS updates to cause the previous `<h1>` styling now apply to this new input, the component should behave exactly as before, with the benefit that the caption can be edited, and the editor is made aware of any changes.

![Caption Editable](./images/editable.png?raw=true "Caption Editable")

Note: any changes that your section needs saved to the database need to be sent through the onEdit function.  Changes the editor is not made aware of in this manner will not be saved.

The pattern of relying on the currentContent mechanism to show the current state rather than implementing any internal component state is therefore recommended - anything in currentContent will be saved when the user saves.

[Next Step: Adding more options to the editor shelf](./3_EditorShelf.md)