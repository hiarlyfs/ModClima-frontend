import React from 'react';

import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import ShowHarvests from '../ShowHarvests';

import useStyles from './styles';

const ShowMils = ({ mills, removeMill }) => {
  const styles = useStyles();

  return (
    <>
      {mills.map(({ id, name, harvests }) => (
        <Box key={id} className={styles.millContainer}>
          {removeMill && (
            <DeleteForeverIcon
              onClick={() => removeMill(id)}
              className={styles.deleteIcon}
            />
          )}
          <Box
            alignItems='center'
            marginBottom='15px'
            display='flex'
            flexDirection='row'
          >
            <Typography className={styles.millLineTitle}>
              Mill name:{` `}
            </Typography>
            <Typography className={styles.millLineValue}>{name}</Typography>
          </Box>
          {harvests && harvests.length > 0 && (
            <Box display='flex' flexDirection='column'>
              <Typography className={styles.millLineTitle}>Harvests</Typography>
              <ShowHarvests harvests={harvests} />
            </Box>
          )}
        </Box>
      ))}
    </>
  );
};

export default ShowMils;
