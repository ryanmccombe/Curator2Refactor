import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Segment } from 'semantic-ui-react';

// Connect is a higher order component (HOC)
// Higher order components are a pattern of component composition - they take in a component,
// and return a new component that has additional functionality.  The Connect HOC adds redux
// functionality to the base component - receiving state updates, and dispatching actions
import { connect } from 'react-redux';

// TODO: This container is not yet dispatching actions
// import { bindActionCreators } from 'redux';
// import { someAction } from '../../Redux/Actions/index';

import Header from '../../Components/MainMenu';
import StorylinesList from '../../Components/StorylinesList';

// This is a "container" / "stateful" / "smart" component that is concerned with business logic
// for a clearly defined area of the application, and communicates with the redux store
// It orchestrates presentation by deferring to presentational components
class Storylines extends Component {
  render() {
    const { storylines } = this.props;
    return (
      <div>
        <Header activePage="storylines" />
        <StorylinesList storylines={storylines} />
      </div>
    );
  }
}

// mapStateToProps is a function passed to the connect HOC that determines which parts
// of the global state object this component cares about.
// This function receives the global state object, and then has the opportunity to map
// parts of that state to properties of this component
function mapStateToProps({ storylines }) {
  return {
    storylines
  };
}

// Function that is passed to connect to determine what actions the component can dispatch
// TODO: This container is not yet dispatching actions
// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({
//     someAction
//   }, dispatch);
// }

export default connect(mapStateToProps)(Storylines);

