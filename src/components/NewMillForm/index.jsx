import React, { useState, useCallback } from 'react';

import Typography from '@material-ui/core/Typography';

import Input from '../Input';
import AddEntity from '../AddEntity';
import ButtonSubmit from '../ButtonSubmit';
import ShowHarvests from '../ShowHarvests';
import FeedbackApi from '../FeedbackApi';
import WithSaveEntity from '../WithSaveEntity';

import { searchHarvest } from '../../services/api/apiHarvests';
import { createMill } from '../../services/api/apiMills';

import { ActionTypes } from '../../reducers/saveEntity.reducer';

import useStyles from './styles';

const NewMillForm = ({ saving, error, dispatch }) => {
  const [name, setName] = useState();
  const [harvestCode, setHarvestCode] = useState();
  const [harvests, setHarvests] = useState([]);

  const onChangeName = useCallback((event) => {
    setName(event.target.value);
  }, []);

  const onChangeHarvestCode = useCallback((event) => {
    setHarvestCode(event.target.value);
  }, []);

  const clearInputs = useCallback((event) => {
    setName('');
    setHarvests([]);
    setHarvestCode('');
  }, []);

  const addHarvest = async () => {
    try {
      const harvest = await searchHarvest({ code: harvestCode });
      setHarvests([...harvest, ...harvests]);
    } catch (err) {
      alert('There is no harvest with this code');
    }
  };

  const removeHarvest = (id) => {
    setHarvests(harvests.filter((harvest) => harvest.id !== id));
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    dispatch({ type: ActionTypes.START_SAVE_ENTITY });
    try {
      const harvestIds = harvests.map((harvest) => harvest.id);
      const harvest = await createMill({ name, harvestIds });
      clearInputs();
      dispatch({ type: ActionTypes.SAVE_ENTITY_SUCCESS, payload: harvest });
    } catch (err) {
      dispatch({ type: ActionTypes.SAVE_ENTITY_FAILURE, payload: err });
    }
  };

  const styles = useStyles();

  return (
    <form onSubmit={onSubmit} className={styles.formContainer}>
      <Input value={name} onChange={onChangeName} title='name' />
      <Typography className={styles.harvestsTitle}>Harvests</Typography>
      <AddEntity
        value={harvestCode}
        onChange={onChangeHarvestCode}
        placeHolder='Type the harvest Code'
        label='Harvest Code'
        onAdd={addHarvest}
      />
      <ShowHarvests harvests={harvests} removeHarvest={removeHarvest} />
      <ButtonSubmit btTitle='Create Harvest' />
      <FeedbackApi loading={saving} error={error} />
    </form>
  );
};

export default WithSaveEntity(NewMillForm);
