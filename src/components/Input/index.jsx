import React from 'react';

import TextField from '@material-ui/core/TextField';

import useStyles from './styles';

const Input = ({ title, value, onChange }) => {
  const styles = useStyles();

  return (
    <TextField
      value={value}
      onChange={onChange}
      required
      label={title}
      className={styles.textField}
      placeholder={`${title}...`}
      variant='standard'
      fullWidth
    />
  );
};

export default React.memo(Input);
