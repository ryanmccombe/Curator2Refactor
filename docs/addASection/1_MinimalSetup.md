# 1. Adding Section Types - Minimal Setup

The storyline editor system was set up to allow new section types to be added with minimal changes to the underlying systems.  At the end of this document, we will have added a new static section type, with later pages making this new type editable by users

TODO: Image: Basic Component Added

This guide outlines the 3 steps required to get the most basic form of new section into the editor:

  - Create a section (React Component)
  - Create a section definition (a simple JS object that defines your section - title, description, etc)
  - Add it to the section registry in /client/SectionTypes/index.js

### a. Create a Section
A section is a standard React component.  The editor is unopinionated about how these are created, but the existing section types each have their own directory in /client/SectionTypes and I recommend following that pattern

We'll create a section for showing a basic image with a header, so our component might look something like this:

```js
// client/SectionTypes/image/component.js
import React from 'react';

// This component has been styled in this file
import styles from './image.less';

export default () => {
  return (
    <div className={styles.image}>
      <h1>Deerum ipsum dolor sit amet, consectetur adipiscing elit</h1>
    </div>
  );
};
```
This component has been styled in the imported `./image.less` file.
CSS is out of scope for this document, but if it's of interest, the final CSS properties can be seen within the solution here:

TODO: Link to CSS

### b. Create a Section Definition
A section definition is what is imported into the section registry, which allows the editor to make use of the section, and includes information on its use.  It's recommended section definitions sit in the directory you created, alongside all the other section files.  This is the minimal section definition:

```js
// client/SectionTypes/image/index.js
import component from './component';

export default {
  title: 'Image',
  description: 'A section type for displaying images with headers',
  component
};
```

### c. Add your section definition to the registry
The final step involves making the editor "aware" of your section.  This is done by updating the registry at client/SectionTypes/index.js to import your section definition, then adding it to the object in that file

```js
import text from './Text/';
import twoColumnQuote from './TwoColumnQuote/';
import image from './Image'; // <-- Importing your definition

export default {
  text,
  twoColumnQuote,
  image // <-- Added definition to this registry
};
```
Your new section should now be visible and functional within the editor

TODO: Image: Basic Component Added

Next Step: Making the section dynamic