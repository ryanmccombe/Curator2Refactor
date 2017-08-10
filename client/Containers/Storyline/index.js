import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Segment } from 'semantic-ui-react';

// Connect is a higher order component (HOC)
// Higher order components are a pattern of component composition - they take in a component,
// and return a new component that has additional functionality.  The Connect HOC adds redux
// functionality to the base component - receiving state updates, and dispatching actions
// TODO: This container is not yet needing redux
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
// import { someAction } from '../../Redux/Actions/index';

import Header from '../../Components/MainMenu';
import StorylineHeader from '../../Components/StorylineMenu';
import StorylineRenderer from '../../Components/StorylineRenderer';

// This is a "container" / "stateful" / "smart" component that is concerned with business logic
// for a clearly defined area of the application, and communicates with the redux store
// It orchestrates presentation by deferring to presentational components
class Storyline extends Component {
  render() {
    return (
      <div>
        <Header activePage="storylines" />
        <StorylineHeader />
        This page is NYI
        <Link to={`/storyline/${this.props.match.params.id}/english/edit`}>Editor</Link>
      </div>
    );
  }
}

// mapStateToProps is a function passed to the connect HOC that determines which parts
// of the global state object this component cares about.
// This function receives the global state object, and then has the opportunity to map
// parts of that state to properties of this component
// TODO: This container is not yet needing redux
function mapStateToProps(state, ownProps) {
  return {
    storyline: state.storylines[ownProps.match.params.id]
  };
}

// Function that is passed to connect to determine what actions the component can dispatch
// TODO: This container is not yet needing redux
// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({
//     someAction
//   }, dispatch);
// }

// TODO: This container is not yet needing redux
export default connect(mapStateToProps)(Storyline);
