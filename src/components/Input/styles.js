import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
  },

  textField: {
    height: 45,

    '& .MuiOutlinedInput-root': {
      height: 45,
    },

    '& .MuiOutlinedInput-input': {
      marginTop: 2,
    },
  },
});

export default useStyles;
