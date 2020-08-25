import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  mapConatiner: {
    display: 'flex',
    flexDirection: 'column',
    width: '700px',
    height: '600px',
    marginTop: 20,
  },

  roomIcon: {
    color: '#160',
    fontSize: 40,
    position: 'relative',
    bottom: 35,
    right: 20,

    '&:hover': {
      transform: 'scale(1.2)',

      '& + div': {
        display: 'flex',
      },
    },
  },

  infoFieldContainer: {
    position: 'relative',
    display: 'none',
    flexDirection: 'column',
    bottom: 165,
    right: 30,
  },

  infoFieldLine: {
    display: 'flex',
    flexDirection: 'row',
  },

  infoFieldTitle: {
    fontSize: 14,
    fontWeight: 'bold',
  },

  infoFieldValue: {
    fontSize: 12,
  },
});

export default useStyles;
