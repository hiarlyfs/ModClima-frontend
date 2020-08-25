import React from 'react';

import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

import PageContainer from '../PageContainer';

import useStyles from './styles';

const Home = () => {
  const styles = useStyles();

  return (
    <PageContainer>
      <Box className={styles.container}>
        <Typography className={styles.welcomeText}>
          Welcome to the ModClima panel.
        </Typography>
        <Typography className={styles.welcomeText}>
          Here you can save e search for entities.
        </Typography>
        <Typography className={styles.welcomeText}>
          Select one option in the Menu above.
        </Typography>
      </Box>
    </PageContainer>
  );
};

export default Home;
