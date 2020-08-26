import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },

  textFieldInput: {
    height: 35,

    '& .MuiOutlinedInput-root': {
      height: 35,
    },

    '& .MuiOutlinedInput-input': {
      marginTop: 1,
    },

    '& .MuiInputLabel-outlined': {
      position: 'absolute',
      top: -10,
    },

    '& .MuiInputLabel-outlined.MuiInputLabel-shrink': {
      position: 'absolute',
      top: 0,
    },
  },

  circleIcon: {
    fontSize: 24,
    marginLeft: 5,
    color: '#090',
  },
});

export default useStyles;
