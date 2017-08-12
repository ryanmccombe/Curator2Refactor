import Text from './Text';
import TwoColumnQuote from './TwoColumnQuote';

const sectionTypeRegistry = {
  text: {
    title: 'Text',
    description: 'Text Section Type',
    component: Text,
    optionsComponent: Text.Options,
    defaultContent: {
      body: '<h1>Text Section with Background Image</h1>' +
      '<p>The British arrived in India in the 1600s, establishing trading posts under the British East India Company which gathered its own enormous private army.</p>' +
      '<p>In 1857 a large part of the Indian army rebelled against the British authorities, and a year later, the country came under direct British rule; this began the period known as the Raj, meaning "to rule" or "kingdom" in Hindi.</p>' +
      '<p>The bloody struggle set the tone for the political, social and economic rule established by Britain.</p>',
      backgroundImage: 'https://femmebot.github.io/google-type/images/indigo-sea.jpg',
      paddingTop: 80,
      paddingBottom: 40,
      alignment: 'left'
    },
    availableThemes: [
      'Partition'
    ]
  },

  twoColumnQuote: {
    title: 'Two Column Quote',
    description: 'Two Column Quote',
    component: TwoColumnQuote,
    optionsComponent: TwoColumnQuote.Options,
    defaultContent: {
      title: '<h1>Two Column Section with Quote</h1>',
      body: '<p>Within months of independence, India and Pakistan were at war in Kashmir, which lies between the two countries.</p>' +
      '<p>Under the partition law, Kashmir was free to accede to India or Pakistan. It had a Muslim majority, but a Hindu princely ruler chose to join India.</p>' +
      '<p>In 1857 a large part of the Indian army rebelled against the British authorities, and a year later, the country came under direct British rule; this began the period known as the Raj, meaning "to rule" or "kingdom" in Hindi.</p>' +
      '<p>War broke out in October 1947 after Pakistan supported a Muslim insurgency in Kashmir.</p>' +
      '<p>It lasted until 1 January 1949, with the establishment of a ceasefire line.</p>',
      quote: '"Any idea of a united India could never have worked, and in my judgement, it would have led us to a terrific disaster"',
      width: 70,
      position: 'center',
      backgroundImage: 'https://femmebot.github.io/google-type/images/valley.jpg',
      headerWidth: 100,
      headerAlignment: 'center',
      paddingTop: 250,
      paddingBottom: 200,
      showFooter: true,
      footerAlignment: 'left',
      animationLayer: 'https://femmebot.github.io/google-type/images/wind.png',
      animationOpacity: 100

    },
    availableThemes: [
      'Partition'
    ]
  }
};

export default sectionTypeRegistry;

