import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { editSection, deleteSection } from '../../Redux/Actions/index';

import SectionRenderer from '../../Components/SectionRenderer';


class SectionEditor extends Component {
  constructor(props) {
    super(props);
    this.onEdit = this.onEdit.bind(this);
    this.onDelete = this.onDelete.bind(this);
  }

  onEdit(property, value) {
    this.props.editSection({
      storyId: this.props.storyId,
      sectionId: this.props.section.id,
      property,
      value
    });
  }

  onDelete() {
    this.props.deleteSection({
      storyId: this.props.storyId,
      sectionId: this.props.section.id
    });
  }

  render() {
    return (
      <SectionRenderer section={this.props.section} onEdit={this.onEdit} onDelete={this.onDelete} />
    );
  }
}

// Function that is passed to connect to determine what actions the component can dispatch
function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    editSection,
    deleteSection
  }, dispatch);
}

export default connect(null, mapDispatchToProps)(SectionEditor);
