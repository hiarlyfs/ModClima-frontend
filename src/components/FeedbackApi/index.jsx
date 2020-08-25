import React from 'react';

import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';

import useStyles from './styles';

const FeedbackApi = ({ loading, error }) => {
  const styles = useStyles();

  return (
    <Box className={styles.container}>
      {loading && <CircularProgress />}
      {!loading && error && (
        <Typography className={styles.errorMsg}>{error.message}</Typography>
      )}
    </Box>
  );
};

export default FeedbackApi;
