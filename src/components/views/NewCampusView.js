import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  formContainer: {
    width: '500px',
    backgroundColor: '#f0f0f5',
    borderRadius: '5px',
    margin: 'auto',
  },
  formTitle: {
    backgroundColor: '#c5c8d6',
    marginBottom: '15px',
    textAlign: 'center',
    borderRadius: '5px 5px 0px 0px',
    padding: '3px'
  },
}));

const NewCampusView = (props) => {
  const { handleChange, handleSubmit } = props;
  const classes = useStyles();

  return (
    <div>
      <h1>New Campus</h1>

      <div className={classes.formContainer}>
        <div className={classes.formTitle}>
          <Typography style={{ fontWeight: 'bold', fontFamily: 'Courier, sans-serif', fontSize: '20px', color: '#11153e' }}>
            Add a Campus
          </Typography>
        </div>
        <form style={{ textAlign: 'center' }} onSubmit={(e) => handleSubmit(e)}>
          <label style={{ color: '#11153e', fontWeight: 'bold' }}>Campus Name: </label>
          <input type="text" name="name" onChange={(e) => handleChange(e)} />
          <br />
          <br />

          {/* Additional input fields for campus address, description, image URL, etc. */}

          <Button variant="contained" color="primary" type="submit">
            Submit
          </Button>
        </form>
      </div>
    </div>
  )
}

export default NewCampusView;
