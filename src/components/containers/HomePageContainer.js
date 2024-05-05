/*==================================================
/src/components/containers/HomePageContainer.js

The Container component is responsible for stateful logic and data fetching, and
passes data (if any) as props to the corresponding View component.
If needed, it also defines the component's "connect" function.
================================================== */
import React, { Component } from 'react';
import Header from './Header';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchAllCampusesThunk, fetchAllStudentsThunk } from '../../store/thunks';
import HomePageView from '../views/HomePageView';

class HomePageContainer extends Component {
  componentDidMount() {
    this.props.fetchAllCampuses();
    this.props.fetchAllStudents();
  }

  render() {
    return (
      <div>
        <Header />
        <HomePageView
          allCampuses={this.props.allCampuses}
          allStudents={this.props.allStudents}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  allCampuses: state.allCampuses,  // Get the State object from Reducer "allCampuses"
  allStudents: state.allStudents,  // Get the State object from Reducer "allStudents"
});

const mapDispatchToProps = (dispatch) => ({
  fetchAllCampuses: () => dispatch(fetchAllCampusesThunk()),
  fetchAllStudents: () => dispatch(fetchAllStudentsThunk()),
});

HomePageContainer.propTypes = {
  allCampuses: PropTypes.array.isRequired,
  allStudents: PropTypes.array.isRequired,
  fetchAllCampuses: PropTypes.func.isRequired,
  fetchAllStudents: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePageContainer);
