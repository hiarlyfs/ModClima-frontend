import React from 'react';

import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import ShowFarms from '../ShowFarms';

import useStyles from './styles';

const ShowHarvests = ({ harvests, removeHarvest }) => {
  const styles = useStyles();

  return (
    <>
      {harvests.map(({ code, id, start, end, farms }) => (
        <Box key={id} className={styles.farmContainer}>
          {removeHarvest && (
            <DeleteForeverIcon
              onClick={() => removeHarvest(id)}
              className={styles.deleteIcon}
            />
          )}
          <Box alignItems='center' display='flex' flexDirection='row'>
            <Typography className={styles.farmLineTitle}>Code:{` `}</Typography>
            <Typography className={styles.farmLineValue}>{code}</Typography>
          </Box>
          <Box alignItems='center' display='flex' flexDirection='row'>
            <Typography className={styles.farmLineTitle}>
              Start Harvest:{` `}
            </Typography>
            <Typography className={styles.farmLineValue}>{start}</Typography>
          </Box>
          <Box alignItems='center' display='flex' flexDirection='row'>
            <Typography className={styles.farmLineTitle}>
              End Harvest:{` `}
            </Typography>
            <Typography className={styles.farmLineValue}>{end}</Typography>
          </Box>
          {farms && farms.length > 0 && (
            <Box marginTop='20px' display='flex' flexDirection='column'>
              <Typography className={styles.farmLineTitle}>Farms</Typography>
              <ShowFarms farms={farms} />
            </Box>
          )}
        </Box>
      ))}
    </>
  );
};

export default ShowHarvests;
