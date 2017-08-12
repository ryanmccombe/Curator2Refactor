# 3. Adding Content to the Editor Shelf
The editor provides a mechanism for modifying section properties that do not make sense to edit within the section layout itself.

Section definitions can include an additional optionsComponent property, that will be placed in the shelf to the right of the section.

In this document, we will make the background image URL editable by providing a form in that shelf, in 3 steps:

  - Update the section definition to use a scaffolded component
  - Create an options component
  - Make the section use the provided background image

### a. Update the Section Definition
Lets scaffold a placeholder component to import to the section definition.  The recommendation is to create this component within the directory you have created for your section ("group by feature")

TODO: Code

Lets update the section definition to specify this new component as the optionsComponent.  We'll also create a defaultContent property for the image we're going to make editable

TODO: Code

This new component should now be appearing on the shelf next to sections that use your section type

TODO: Image

### b. Create an Options Component
The Options component you create will be provided with the same properties as the section component - it will therefore have access to the `section.currentContent`, as well as the `onEdit` function to make changes.

TODO: Code

Note this is using the Segment and Form components from the semantic-ui-react library - these are entirely presentational

This form should now be shown alongside any sections of the type you're making.

TODO: Image

Changing the background image will have no effect as that is still being hardcoded within the section component.  Lets fix that now.

### c. Make the Section use the Specified Background Image

TODO: All