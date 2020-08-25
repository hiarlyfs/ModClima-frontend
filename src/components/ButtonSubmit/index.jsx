import React from 'react';

import Button from '@material-ui/core/Button';

const ButtonSubmit = ({ btTitle }) => {
  return (
    <Button
      type='submit'
      style={{
        marginTop: 15,
        backgroundColor: '#e9e9e9',
        color: '#000',
      }}
      variant='contained'
    >
      {btTitle}
    </Button>
  );
};

export default ButtonSubmit;
