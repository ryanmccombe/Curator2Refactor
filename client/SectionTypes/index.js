import Text from './Text';
import TwoColumnQuote from './TwoColumnQuote';

const sectionTypeRegistry = {
  text: {
    title: 'Text',
    description: 'Text Section Type',
    component: Text,
    optionsComponent: Text.options,
    availableThemes: [
      'Partition'
    ]
  },

  twoColumnQuote: {
    title: 'Two Column Quote',
    description: 'Two Column Quote',
    component: TwoColumnQuote,
    optionsComponent: TwoColumnQuote.options,
    availableThemes: [
      'Partition'
    ]
  }
};

export default sectionTypeRegistry;

