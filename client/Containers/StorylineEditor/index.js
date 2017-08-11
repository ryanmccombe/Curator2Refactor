import React, { Component } from 'react';

// Redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addSection } from '../../Redux/Actions/index';

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
    const { storyline, addSection, match: { params: { id } } } = this.props;
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
    storyline: state.storylines[ownProps.match.params.id]
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    addSection
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(StorylineEditor);
