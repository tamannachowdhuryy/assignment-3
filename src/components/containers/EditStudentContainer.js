import Header from './Header';
import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchStudentThunk, editStudentThunk } from "../../store/thunks";
import { EditStudentView } from "../views";
import { Redirect } from 'react-router-dom';

class EditStudentContainer extends Component {
  // Get student data from back-end database
  componentDidMount() {
    this.props.fetchStudent(this.props.match.params.id);
  }

  // Initialize state
  constructor(props) {
    console.log(props);
    super(props);
    this.state = {
      redirect:null
    };
  }

  // Update state when input values change
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  // Handle form submission
  handleSubmit = async (event) => {
    event.preventDefault();
  
    const updatedStudent = {
      firstname: this.state.firstname || this.props.student.firstname,
      lastname: this.state.lastname || this.props.student.lastname,
      email: this.state.email || this.props.student.email,
      imageUrl: this.state.imageUrl || this.props.student.imageUrl,
      gpa: parseFloat(this.state.gpa) || this.props.student.gpa,
      campusId: this.state.campusId || this.props.student.campusId,
      id: this.props.student.id
    };
  
    // Check for valid GPA input
    if (isNaN(updatedStudent.gpa)) {
      alert("Please enter a valid GPA.");
      return;
    }
  
    // Dispatch the action to update the student
    await this.props.editStudent(updatedStudent);
    this.setState({ redirect: true });
  };

  render() {
    return (
      <div>
        <Header />
        <EditStudentView
          student={this.props.student}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        {this.state.redirect && (
            <Redirect to={`/students`} />
        )}
      </div>
    );
  }
}

const mapState = (state) => {
  return {
    student: state.student,
  };
};

const mapDispatch = (dispatch) => {
  return {
    fetchStudent: (id) => dispatch(fetchStudentThunk(id)),
    editStudent: (student) => dispatch(editStudentThunk(student)),
  };
};

export default connect(mapState, mapDispatch)(EditStudentContainer);