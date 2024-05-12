import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Button, Typography, Paper, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: '800px',
    margin: 'auto',
    padding: theme.spacing(3),
    textAlign: 'center',
  },
  campusCard: {
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
  campusDetails: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'left',
    flexGrow: 1,
  },
  campusImage: {
    width: '250px',
    height: '160px',
    borderRadius: '4px',
    objectFit: 'cover',
    marginRight: theme.spacing(2),
  },
  campusName: {
    textDecoration: 'underline',
    cursor: 'pointer',
  },
  addButton: {
    marginTop: theme.spacing(2),
    backgroundColor: 'rgb(85, 26, 139)',
    color: 'white',
    '&:hover': {
      backgroundColor: 'rgb(100, 31, 164)',
    },
    padding: theme.spacing(1),
    fontSize: '1rem',
  },
  heading: {
    textDecoration: 'underline',
    marginBottom: theme.spacing(2),
  }
}));

const AllCampusesView = ({ allCampuses }) => {
  const classes = useStyles();

  if (!allCampuses.length) {
    return (
      <div className={classes.root}>
        <Typography variant="h6">There are no campuses.</Typography>
        <Link to="/newcampus">
          <Button className={classes.addButton}>Add New Campus</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className={classes.root}>
      <Typography variant="h4" gutterBottom className={classes.heading}>
        All Campuses
      </Typography>
      {allCampuses.map((campus) => (
        <Paper key={campus.id} className={classes.campusCard}>
          <Link to={`/campus/${campus.id}`} style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
            <img src={campus.imageurl || 'https://pbs.twimg.com/profile_images/1676600958153904131/OSV4hFd7_400x400.png'} alt={`Campus - ${campus.name}`} className={classes.campusImage} />
            <div className={classes.campusDetails}>
              <Typography gutterBottom variant="h5" component="h2" className={classes.campusName}>
                {campus.name}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Campus ID: {campus.id} | Total Students: {campus.students ? campus.students.length : 0}
              </Typography>
            </div>
          </Link>
          <Button variant="contained" color="primary" component={Link} to={`/campus/${campus.id}`}>
            Learn More
          </Button>
        </Paper>
      ))}
      <Link to="/newcampus">
        <Button className={classes.addButton}>Add New Campus</Button>
      </Link>
    </div>
  );
};

AllCampusesView.propTypes = {
  allCampuses: PropTypes.array.isRequired,
};

export default AllCampusesView;
