import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  container: { display: 'flex', flexDirection: 'column' },

  selectFieldPlace: {
    fontSize: 18,
    marginBottom: 10,
    fontWeight: 'bold',
  },

  mapConatiner: {
    display: 'flex',
    flexDirection: 'column',
    width: '700px',
    height: '600px',
    marginTop: 20,
  },

  roomIcon: {
    color: '#900',
    fontSize: 40,
    position: 'relative',
    bottom: 35,
    right: 20,
  },
});

export default useStyles;
