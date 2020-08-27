import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  millTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },

  millContainer: {
    display: 'flex',
    flexDirection: 'column',
    boxShadow: '0 0 5px 2px rgba(0,0,0,0.25)',
    marginTop: 10,
    padding: 10,
    position: 'relative',
  },

  millLineTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },

  fieldLineValue: {
    fontSize: 20,
  },

  deleteIcon: {
    position: 'absolute',
    right: 5,
  },
});

export default useStyles;
