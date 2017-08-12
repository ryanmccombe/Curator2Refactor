import component from './component';
import optionsComponent from './options';

export default {
  title: 'Two Column Quote',
  description: 'Two Column Quote',
  component,
  optionsComponent,
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
    headerWidth: 70,
    headerAlignment: 'center',
    paddingTop: 150,
    paddingBottom: 150,
    showFooter: true,
    footerAlignment: 'left',
    animationLayer: 'https://femmebot.github.io/google-type/images/wind.png',
    animationOpacity: 100

  },
  availableThemes: [
    'Partition'
  ]
};
