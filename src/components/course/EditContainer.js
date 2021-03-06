/* @flow */

import React, { Component } from 'react';
import { connect } from 'react-redux';
//component Tabble
import CourseForm from './CourseForm';
import { EditItemData } from '../../action';

class AddOrEditCourseContainer extends Component {
  constructor() {
		super();
    this.handleSave = this.handleSave.bind(this);
		this.handleCancel = this.handleCancel.bind(this);
	}
  handleCancel(event) {
		event.preventDefault();
		this.props.history.replace('/PageTable');
	}

  handleSave(values){
    this.props.EditItemData(values);
    this.props.history.push('/PageTable');;
  }

  render() {
    const { initialValues } = this.props;
    return (
      <div className="container">
        <h1>EDIT FORM</h1>
				<CourseForm
          handleCancel={this.handleCancel}
          handleSave={this.handleSave}
          initialValues={initialValues}
				/>
			</div>
    );
  }
}

function mapStateToProps(state) {
  return {
    initialValues: state.EditReducer.data
  }
}
export default connect(mapStateToProps,{EditItemData})(AddOrEditCourseContainer);
