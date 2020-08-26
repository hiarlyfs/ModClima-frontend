import React from 'react';

import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import AddCircleIcon from '@material-ui/icons/AddCircle';

import useStyles from './styles';

const AddEntity = ({ value, onChange, placeHolder, label, onAdd }) => {
  const styles = useStyles();

  return (
    <Box className={styles.container}>
      <TextField
        fullWidth
        className={styles.textFieldInput}
        variant='outlined'
        placeholder={placeHolder}
        label={label}
        value={value}
        onChange={onChange}
      />
      <AddCircleIcon onClick={onAdd} className={styles.circleIcon} />
    </Box>
  );
};

export default React.memo(AddEntity);
