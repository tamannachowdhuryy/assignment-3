/*==================================================
NewStudentContainer.js

The Container component is responsible for stateful logic and data fetching, and
passes data (if any) as props to the corresponding View component.
If needed, it also defines the component's "connect" function.
================================================== */
import Header from './Header';
import { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import EnrollNewStudentView from '../views/EnrollNewStudentView';
import { addStudentThunk, enrollNewStudentThunk } from '../../store/thunks';

class EnrollNewStudentContainer extends Component {
  // Initialize state
  constructor(props){
    super(props);
    this.state = {
      firstname: "", 
      lastname: "", 
      imageurl: "",
      gpa: 0.0,
      email: "",
      campusId: null, 
      redirect: false, 
      redirectId: null
    };
  }

  // Capture input data when it is entered
  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  // Take action after user click the submit button
  handleSubmit = async event => {
    event.preventDefault();  // Prevent browser reload/refresh after submit.
    let student = {
        firstname: this.state.firstname,
        lastname: this.state.lastname,
        campusId: this.props.location.query.campus_id,
        email: this.state.email,
        imageurl: this.state.imageurl,
        gpa: this.state.gpa
    };
    
    // Add new student in back-end database
    let newStudent = await this.props.addStudent(student);

    // Update state, and trigger redirect to show the new student
    this.setState({
      firstname: "", 
      lastname: "", 
      url: "",
      gpa: 0.0,
      email: "",
      campusId: null, 
      redirect: true, 
      redirectId: student.campusId
    });
  }

  // Unmount when the component is being removed from the DOM:
  componentWillUnmount() {
      this.setState({redirect: false, redirectId: null});
  }

  // Render new student input form
  render() {
    // Redirect to new student's page after submit

    // Display the input form via the corresponding View component
    return (
      <div>
        <Header />
        <EnrollNewStudentView
          campus_id = {this.props.location.query} 
          handleChange = {this.handleChange} 
          handleSubmit={this.handleSubmit}      
        />
        {this.state.redirect && (
            <Redirect to={`/campus/${this.state.redirectId}`} />
        )}
      </div>          
    );
  }
}

// The following input argument is passed to the "connect" function used by "NewStudentContainer" component to connect to Redux Store.
// The "mapDispatch" argument is used to dispatch Action (Redux Thunk) to Redux Store.
// The "mapDispatch" calls the specific Thunk to dispatch its action. The "dispatch" is a function of Redux Store.
const mapDispatch = (dispatch) => {
    return({
        addStudent: (student) => dispatch(addStudentThunk(student)),
        enrollNewStudent: (student) => dispatch(enrollNewStudentThunk(student)),
    })
}

// Export store-connected container by default
// NewStudentContainer uses "connect" function to connect to Redux Store and to read values from the Store 
// (and re-read the values when the Store State updates).
export default connect(null, mapDispatch)(EnrollNewStudentContainer);