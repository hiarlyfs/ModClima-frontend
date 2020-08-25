import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    alignItems: 'center',
    marginTop: 20,
  },

  errorMsg: {
    color: '#900',
    fontSize: 16,
  },
});

export default useStyles;
