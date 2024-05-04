import React from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  formContainer: {
    width: '500px',
    padding: theme.spacing(3),
    backgroundColor: '#f0f0f5',
    borderRadius: '5px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.12)',
    margin: 'auto',
    marginTop: theme.spacing(5),
  },
  formTitle: {
    backgroundColor: '#c5c8d6',
    marginBottom: theme.spacing(3),
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
    padding: '12px 15px',
    margin: '10px 0',
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
    marginBottom: theme.spacing(1),
  },
  button: {
    marginTop: theme.spacing(4),
    padding: theme.spacing(1.5),
    fontSize: '16px',
    width: '100%',
  }
}));

const NewCampusView = ({ handleChange, handleSubmit }) => {
  const classes = useStyles();

  return (
    <div>
      <Typography variant="h4" style={{ textAlign: 'center', margin: '20px 0' }}>
        Add New Campus
      </Typography>
      <div className={classes.formContainer}>
        <div className={classes.formTitle}>
          Campus Details
        </div>
        <form onSubmit={handleSubmit} style={{ textAlign: 'center' }}>
          <label className={classes.label}>Name:</label>
          <input className={classes.input} type="text" name="name" required onChange={handleChange} />
          
          <label className={classes.label}>Image URL:</label>
          <input className={classes.input} type="text" name="imageurl" onChange={handleChange} />

          <label className={classes.label}>Address:</label>
          <input className={classes.input} type="text" name="address" required onChange={handleChange} />

          <label className={classes.label}>Description:</label>
          <textarea className={classes.input} name="description" onChange={handleChange} rows="4" style={{ resize: 'none' }} />

          <Button className={classes.button} variant="contained" color="primary" type="submit">
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
};

export default NewCampusView;
