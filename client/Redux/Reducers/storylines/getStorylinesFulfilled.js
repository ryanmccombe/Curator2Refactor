// Storylines are the only thing we have in state currently,
// so we just replace the entire state with the API response
export default function (state, action) {
  // Copying "originalContent" from the API over to "currentContent' for every section of every storyline
  action.payload.map(storyline => {
    storyline.sections.map(section => {
      section.currentContent = section.originalContent;
    });
  });

  return action.payload;
}
