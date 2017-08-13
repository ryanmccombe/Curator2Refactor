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
