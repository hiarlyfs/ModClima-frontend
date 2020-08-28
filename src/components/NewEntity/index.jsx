import React from 'react';

import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

import ShowFields from '../ShowFields';
import ShowFarms from '../ShowFarms';
import ShowHarvests from '../ShowHarvests';
import ShowMills from '../ShowMills';

import useStyles from './styles';

const NewEntity = ({ entity: { entityName, entityData } }) => {
  const styles = useStyles();

  return (
    <Box className={styles.container}>
      <Typography className={styles.entityName}>
        New {entityName} successfully created.
      </Typography>
      {entityName === 'field' && entityData && (
        <ShowFields fields={[entityData]} />
      )}

      {entityName === 'farm' && entityData && (
        <ShowFarms farms={[entityData]} />
      )}

      {entityName === 'harvest' && entityData && (
        <ShowHarvests harvests={[entityData]} />
      )}

      {entityName === 'mill' && entityData && (
        <ShowMills mills={[entityData]} />
      )}
    </Box>
  );
};

export default NewEntity;
