import React from 'react';
import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: '800px',
    margin: 'auto',
    padding: theme.spacing(3),
    textAlign: 'center',
  },
  studentCard: {
    display: 'flex',
    flexDirection: 'row', 
    alignItems: 'center',
    justifyContent: 'space-between', 
    padding: theme.spacing(2),
    marginBottom: theme.spacing(3),
    boxShadow: '0 3px 6px rgba(0,0,0,0.12)',
    borderRadius: '8px',
    backgroundColor: '#ffffff',
    transition: 'transform 0.3s ease-in-out',
    '&:hover': {
      transform: 'scale(1.02)',
      boxShadow: '0 5px 15px rgba(0,0,0,0.2)',
    },
  },
  studentDetails: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'left'
  },
  studentImage: {
    width: '100px',
    height: '100px',
    borderRadius: '50%',
    objectFit: 'cover',
    marginRight: theme.spacing(2), 
  },
  studentName: {
    textDecoration: 'underline',
    cursor: 'pointer',
  },
  deleteButton: {
    color: 'white',
    backgroundColor: theme.palette.error.main,
    '&:hover': {
      backgroundColor: theme.palette.error.dark,
    },
  },
  addButton: {
    marginTop: theme.spacing(2),
  },
  heading: {
    textDecoration: 'underline',
    marginBottom: theme.spacing(2),
  }
}));

const AllStudentsView = ({ students, deleteStudent }) => {
  const classes = useStyles();

  const formatGPA = (gpa) => {
    return gpa && !isNaN(Number(gpa)) ? Number(gpa).toFixed(2) : "Unknown";
  };

  if (!students.length) {
    return (
      <div className={classes.root}>
        <Typography variant="h6">There are no students.</Typography>
        <Link to={`newstudent`}>
          <Button variant="contained" color="primary" className={classes.addButton}>
            Add New Student
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <div className={classes.root}>
      <Typography variant="h4" gutterBottom className={classes.heading}>All Students</Typography>
      {students.map((student) => {
        let name = `${student.firstname} ${student.lastname}`;
        return (
          <Paper key={student.id} className={classes.studentCard}>
            <div className={classes.studentDetails}>
              <Link to={`/student/${student.id}`} style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
                <img src={student.imageUrl || "https://www.pngfind.com/pngs/m/163-1631127_student-school-study-skills-college-test-students-pictures.png"} alt={name} className={classes.studentImage} />
                <div>
                  <Typography variant="h5" color="primary" className={classes.studentName}>{name}</Typography>
                  <Typography variant="body1">{student.email || "Unknown"}</Typography>
                  <Typography variant="body2">GPA: {formatGPA(student.gpa)}</Typography>
                </div>
              </Link>
            </div>
            <Button 
              variant="contained" 
              className={classes.deleteButton}
              onClick={() => deleteStudent(student.id)}
            >
              Delete
            </Button>
          </Paper>
        );
      })}
      <Link to={`/newstudent`}>
        <Button variant="contained" color="primary" className={classes.addButton}>
          Add New Student
        </Button>
      </Link>
    </div>
  );
};

export default AllStudentsView;
