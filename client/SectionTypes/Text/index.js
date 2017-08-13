import component from './component';
import optionsComponent from './options';

export default {
  title: 'Text',
  description: 'Text Section Type',
  component,
  optionsComponent,
  defaultContent: {
    body: '<h1>Text Section with Background Image</h1>' +
    '<p>The British arrived in India in the 1600s, establishing trading posts under the British East India Company which gathered its own enormous private army.</p>' +
    '<p>In 1857 a large part of the Indian army rebelled against the British authorities, and a year later, the country came under direct British rule; this began the period known as the Raj, meaning "to rule" or "kingdom" in Hindi.</p>' +
    '<p>The bloody struggle set the tone for the political, social and economic rule established by Britain.</p>',
    backgroundImage: 'https://femmebot.github.io/google-type/images/indigo-sea.jpg',
    paddingTop: 120,
    paddingBottom: 120,
    alignment: 'left'
  },
  availableThemes: [
    'Default'
  ]
};
