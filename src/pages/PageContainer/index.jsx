import React from 'react';

import Box from '@material-ui/core/Box';
import useStyles from './styles';

const PageContainer = ({ children }) => {
  const styles = useStyles();

  return <Box className={styles.container}>{children}</Box>;
};

export default PageContainer;
