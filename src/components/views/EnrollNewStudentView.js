import React from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    formContainer: {
      width: '500px',
      padding: theme.spacing(2),
      backgroundColor: '#f0f0f5',
      borderRadius: '5px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.12)',
      margin: 'auto',
      marginTop: theme.spacing(4),
    },
    formTitle: {
      backgroundColor: '#c5c8d6',
      marginBottom: theme.spacing(2),
      textAlign: 'center',
      borderRadius: '5px 5px 0 0',
      padding: theme.spacing(1),
      color: '#11153e',
      fontWeight: 'bold',
      fontFamily: 'Courier, sans-serif',
      fontSize: '20px',
    },
    input: {
      width: '100%',
      padding: '10px 15px',
      margin: '8px 0',
      display: 'inline-block',
      border: '1px solid #ccc',
      borderRadius: '4px',
      boxSizing: 'border-box',
      transition: 'border-color .3s',
      '&:focus': {
        borderColor: '#3f51b5',
        boxShadow: '0 0 8px rgba(63, 81, 181, 0.5)',
      }
    },
    label: {
      color: '#11153e',
      fontWeight: 'bold',
      display: 'block',
      marginBottom: theme.spacing(0.5),
    },
    button: {
      marginTop: theme.spacing(2),
      padding: theme.spacing(1),
      fontSize: '16px',
      width: '100%',
    }
  }));
  
  const EnrollNewStudentView = ({ campus_id, handleChange, handleSubmit }) => {
    const classes = useStyles();
  
    return (
      <div>
        <Typography variant="h4" style={{ textAlign: 'center', margin: '20px 0' }}>
          Enroll New Student
        </Typography>
        <div className={classes.formContainer}>
          <div className={classes.formTitle}>
            Student Details
          </div>
          <form onSubmit={handleSubmit} style={{ textAlign: 'center' }}>
            <label className={classes.label}>First Name:</label>
            <input className={classes.input} type="text" name="firstname" required onChange={handleChange} />
  
            <label className={classes.label}>Last Name:</label>
            <input className={classes.input} type="text" name="lastname" required onChange={handleChange} />
  
            <label className={classes.label}>Email:</label>
            <input className={classes.input} type="email" name="email" required onChange={handleChange} />
  
            <label className={classes.label}>Image URL:</label>
            <input className={classes.input} type="text" name="imageurl" onChange={handleChange} />
  
            <label className={classes.label}>GPA:</label>
            <input className={classes.input} type="number" step="0.1" min="0" max="4" name="gpa" onChange={handleChange} />
  
            <label className={classes.label}>Campus Id:</label>
            <input className={classes.input} type="text" name="campusId" onChange={handleChange} />
  
            <Button className={classes.button} variant="contained" color="primary" type="submit">
              Submit
            </Button>
          </form>
        </div>
      </div>
    );
  };
  
  export default EnrollNewStudentView;
  
