import React from 'react';
import { Link } from 'react-router-dom';

import Box from '@material-ui/core/Box';

import useStyles from './styles';

const Menu = () => {
  const styles = useStyles();

  return (
    <Box className={styles.container}>
      <Link className={styles.link} to='/'>
        Home
      </Link>
      <Link className={styles.link} to='/fields'>
        Fields
      </Link>
      <Link className={styles.link} to='/farms'>
        Farms
      </Link>
      <Link className={styles.link} to='/harvests'>
        Harvests
      </Link>
      <Link className={styles.link} to='/mill'>
        Mills
      </Link>
    </Box>
  );
};

export default Menu;
