import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  formContainer: {
    display: 'flex',
    flexDirection: 'column',
  },

  fieldTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },

  fieldContainer: {
    display: 'flex',
    flexDirection: 'column',
    boxShadow:
      '0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12)',
    marginTop: 10,
    padding: 10,
  },

  fieldLineTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },

  fieldLineValue: {
    fontSize: 20,
  },
});

export default useStyles;
