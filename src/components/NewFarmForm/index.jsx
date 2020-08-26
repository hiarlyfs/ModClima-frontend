import React, { useState, useCallback } from 'react';

import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

import WithSaveEntity from '../WithSaveEntity';
import ButtonSubmit from '../ButtonSubmit';
import AddEntity from '../AddEntity';
import Input from '../Input';

import { searchFieldByCode } from '../../services/api/apiFields';

import useStyles from './styles';

// TODO: Implement the code to save a farm
const NewFarmForm = () => {
  const [fieldCode, setFieldCode] = useState('');
  const [fields, setFields] = useState([]);

  const onChangeFieldCode = useCallback((event) => {
    setFieldCode(event.target.value);
  }, []);

  const addNewField = async () => {
    try {
      const field = await searchFieldByCode(fieldCode);
      setFields([...fields, field]);
      setFieldCode('');
    } catch (err) {
      alert('There is no field with this code');
    }
  };

  const removeField = (fieldId) => {
    setFields(fields.filter((field) => field.id !== fieldId));
  };

  const styles = useStyles();
  return (
    <form className={styles.container}>
      <Input title='Name' />
      <Input title='Code' />
      <Typography className={styles.fieldsTitle}>Fields</Typography>
      {fields.map(
        ({
          id,
          code,
          coordinates: {
            coordinates: [latitude, longitude],
          },
        }) => (
          <Box
            position='relative'
            marginBottom='10px'
            className={styles.fieldContainer}
            key={id}
          >
            <DeleteForeverIcon
              onClick={() => removeField(id)}
              className={styles.deleteIcon}
            />
            <Box alignItems='center' display='flex' flexDirection='row'>
              <Typography className={styles.fieldTitle}>Code: </Typography>
              <Typography className={styles.fieldValue}>{code}</Typography>
            </Box>
            <Box alignItems='center' display='flex' flexDirection='row'>
              <Typography className={styles.fieldTitle}>Latitude: </Typography>
              <Typography className={styles.fieldValue}>{latitude}</Typography>
            </Box>
            <Box alignItems='center' display='flex' flexDirection='row'>
              <Typography className={styles.fieldTitle}>Longitude: </Typography>
              <Typography className={styles.fieldValue}>{longitude}</Typography>
            </Box>
          </Box>
        )
      )}
      <AddEntity
        value={fieldCode}
        onChange={onChangeFieldCode}
        placeHolder='Type the field code'
        label='Add Field'
        onAdd={addNewField}
      />
      <ButtonSubmit btTitle='Create Farm' />
    </form>
  );
};

export default WithSaveEntity(NewFarmForm);
