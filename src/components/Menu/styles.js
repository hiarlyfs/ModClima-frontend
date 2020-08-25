import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  container: {
    position: 'absolute',
    display: 'flex',
    flexDirection: 'row',
    width: '100vw',
    justifyContent: 'center',
    marginTop: 30,
  },

  link: {
    textDecoration: 'none',
    color: '#000',
    fontSize: 30,
    fontWeight: 'bold',
    padding: 20,

    '&:hover': {
      backgroundColor: '#f1f1f1',
    },
  },
});

export default useStyles;
