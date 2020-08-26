import React from 'react';

import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import ShowFields from '../ShowFields';

import useStyles from './styles';

const ShowFarms = ({ farms, removeFarm }) => {
  const styles = useStyles();

  return (
    <>
      {farms.map(({ code, id, name, fields }) => (
        <Box key={id} className={styles.farmContainer}>
          {removeFarm && (
            <DeleteForeverIcon
              onClick={() => removeFarm(id)}
              className={styles.deleteIcon}
            />
          )}
          <Box alignItems='center' display='flex' flexDirection='row'>
            <Typography className={styles.farmLineTitle}>Code:{` `}</Typography>
            <Typography className={styles.farmLineValue}>{code}</Typography>
          </Box>
          <Box
            alignItems='center'
            marginBottom='15px'
            display='flex'
            flexDirection='row'
          >
            <Typography className={styles.farmLineTitle}>
              Farm name:{` `}
            </Typography>
            <Typography className={styles.farmLineValue}>{name}</Typography>
          </Box>
          {fields && fields.length > 0 && (
            <Box display='flex' flexDirection='column'>
              <Typography className={styles.farmLineTitle}>Fields</Typography>
              <ShowFields fields={fields} />
            </Box>
          )}
        </Box>
      ))}
    </>
  );
};

export default ShowFarms;
