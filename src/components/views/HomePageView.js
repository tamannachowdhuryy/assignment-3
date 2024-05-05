import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Typography, Paper, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: '900px',
    margin: 'auto',
    padding: theme.spacing(4),
    textAlign: 'center',
  },
  infoCard: {
    padding: theme.spacing(3),
    marginBottom: theme.spacing(4),
    boxShadow: '0 6px 12px rgba(0,0,0,0.15)',
    borderRadius: '12px',
    backgroundColor: '#ffffff',
    '&:hover': {
      boxShadow: '0 8px 16px rgba(0,0,0,0.2)',
    },
  },
  heading: {
    textDecoration: 'none', 
    fontWeight: 'bold', 
    color: '#333', 
    marginBottom: theme.spacing(3),
  },
  addButton: {
    marginTop: theme.spacing(2),
    backgroundColor: 'rgb(63, 81, 181)', 
    color: 'white',
    '&:hover': {
      backgroundColor: 'rgb(48, 63, 159)',
    },
    padding: theme.spacing(1.5),
    fontSize: '1rem',
    borderRadius: '8px',
  }
}));

const HomePageView = ({ allCampuses, allStudents }) => {
  const classes = useStyles();
  const totalCampuses = allCampuses.length;
  const totalStudents = allStudents.length;

  const sortedCampuses = [...allCampuses].sort((a, b) => b.students.length - a.students.length);
  const mostStudentsCampus = sortedCampuses[0] || { name: 'N/A', students: { length: 0 } };
  const leastStudentsCampus = sortedCampuses[sortedCampuses.length - 1] || { name: 'N/A', students: { length: 0 } };

  return (
    <div className={classes.root}>
      <Typography variant="h4" gutterBottom className={classes.heading}>
        Welcome to the Campus Management Dashboard
      </Typography>
      <Paper className={classes.infoCard}>
        <Typography variant="h6">Total Campuses: {totalCampuses}</Typography>
        <Typography variant="h6">Total Students: {totalStudents}</Typography>
        <Typography variant="h6">
          Campus with Most Students: {mostStudentsCampus.name} ({mostStudentsCampus.students.length})
        </Typography>
        <Typography variant="h6">
          Campus with Least Students: {leastStudentsCampus.name} ({leastStudentsCampus.students.length})
        </Typography>
      </Paper>
      <div>
        <Link to="/campuses">
          <Button variant="contained" color="primary" className={classes.addButton}>
            View All Campuses
          </Button>
        </Link>
        <Link to="/students" style={{ marginLeft: '10px' }}>
          <Button variant="contained" color="secondary" className={classes.addButton}>
            View All Students
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default HomePageView;
