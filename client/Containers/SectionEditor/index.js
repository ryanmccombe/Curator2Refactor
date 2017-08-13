import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { editSection, deleteSection, restoreSection, revertSection } from '../../Redux/Actions/index';

import SectionRenderer from '../../Components/SectionRenderer';


class SectionEditor extends Component {
  constructor(props) {
    super(props);
    this.onEdit = this.onEdit.bind(this);
    this.onDelete = this.onDelete.bind(this);
    this.onRestore = this.onRestore.bind(this);
    this.onRevert = this.onRevert.bind(this);
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

  onRestore() {
    this.props.restoreSection({
      storyId: this.props.storyId,
      sectionId: this.props.section.id
    });
  }

  onRevert() {
    this.props.revertSection({
      storyId: this.props.storyId,
      sectionId: this.props.section.id
    });
  }

  render() {
    return (
      <SectionRenderer
        section={this.props.section}
        onEdit={this.onEdit}
        onDelete={this.onDelete}
        onRestore={this.onRestore}
        onRevert={this.onRevert}
      />
    );
  }
}

// Function that is passed to connect to determine what actions the component can dispatch
function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    editSection,
    deleteSection,
    restoreSection,
    revertSection
  }, dispatch);
}

export default connect(null, mapDispatchToProps)(SectionEditor);
