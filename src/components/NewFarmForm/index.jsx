import React, { useState, useCallback } from 'react';

import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

import WithSaveEntity from '../WithSaveEntity';
import ButtonSubmit from '../ButtonSubmit';
import AddEntity from '../AddEntity';
import Input from '../Input';
import FeedbackApi from '../FeedbackApi';

import { searchFieldByCode } from '../../services/api/apiFields';
import { createFarm } from '../../services/api/apiFarms';
import { ActionTypes } from '../../reducers/saveEntity.reducer';

import useStyles from './styles';

const NewFarmForm = ({ saving, error, entity, dispatch, actionTypes }) => {
  const [fieldCode, setFieldCode] = useState('');
  const [fields, setFields] = useState([]);
  const [name, setName] = useState('');
  const [code, setCode] = useState('');

  const onChangeFieldCode = useCallback((event) => {
    setFieldCode(event.target.value);
  }, []);

  const onChangeName = useCallback((event) => {
    setName(event.target.value);
  }, []);

  const onChangeCode = useCallback((event) => {
    setCode(event.target.value);
  }, []);

  const clearAllInputs = () => {
    setName('');
    setCode('');
    setFieldCode('');
    setFields([]);
  };

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

  const onSubmit = async (event) => {
    event.preventDefault();
    dispatch({ type: ActionTypes.START_SAVE_ENTITY });
    try {
      const fieldIds = fields.map((field) => field.id);
      console.log(fieldIds);
      const farm = await createFarm({ fieldIds, name, code });
      dispatch({ type: ActionTypes.SAVE_ENTITY_SUCCESS, payload: farm });
      clearAllInputs();
    } catch (err) {
      dispatch({ type: ActionTypes.SAVE_ENTITY_FAILURE, payload: err });
    }
  };

  const styles = useStyles();
  return (
    <form onSubmit={onSubmit} className={styles.container}>
      <Input value={name} onChange={onChangeName} title='Name' />
      <Box marginTop='15px'>
        <Input value={code} onChange={onChangeCode} title='Code' />
      </Box>
      <Typography className={styles.fieldsTitle}>Fields</Typography>
      <AddEntity
        value={fieldCode}
        onChange={onChangeFieldCode}
        placeHolder='Type the field code'
        label='Add Field'
        onAdd={addNewField}
      />
      {fields.map(
        ({
          id,
          code: codeField,
          coordinates: {
            coordinates: [latitude, longitude],
          },
        }) => (
          <Box
            position='relative'
            marginTop='10px'
            className={styles.fieldContainer}
            key={id}
          >
            <DeleteForeverIcon
              onClick={() => removeField(id)}
              className={styles.deleteIcon}
            />
            <Box alignItems='center' display='flex' flexDirection='row'>
              <Typography className={styles.fieldTitle}>Code: </Typography>
              <Typography className={styles.fieldValue}>{codeField}</Typography>
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
      <ButtonSubmit btTitle='Create Farm' />
      <FeedbackApi loading={saving} error={error} />
    </form>
  );
};

export default WithSaveEntity(NewFarmForm);
