import React, { Component } from 'react';
import _ from 'lodash';

// Redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addSection } from '../../Redux/Actions/storylines';

// Components
import Header from '../../Components/MainMenu';
import StorylineHeader from '../../Components/StorylineMenu';
import StorylineRenderer from '../../Components/StorylineRenderer';
import AddSection from '../../Components/AddSection';


class StorylineEditor extends Component {
  constructor(props) {
    super(props);

    this.onAdd = this.onAdd.bind(this);
  }

  onAdd(sectionType) {
    const { addSection, storyline: { id } } = this.props;

    addSection({
      id,
      sectionType
    });
  }

  render() {
    const { storyline, match: { params: { id } } } = this.props;
    return (
      <div>
        <Header activePage="storylines" />
        <StorylineHeader storyline={storyline} />
        <StorylineRenderer
          index={id}
          storyline={storyline}
          layout="editor"
        />
        <AddSection onAdd={this.onAdd} />
      </div>
    );
  }
}


function mapStateToProps(state, ownProps) {
  return {
    // TODO: Get from API
    // /storylines container is getting the storylines - they won't exist if user comes here
    // directly so in that case, we just let them edit the first storyline in state for now
    storyline:  _.find(state.storylines, { id: ownProps.match.params.id }) || state.storylines[0]
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    addSection
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(StorylineEditor);
