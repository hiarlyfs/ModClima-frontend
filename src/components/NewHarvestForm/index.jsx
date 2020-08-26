import React, { useState, useCallback } from 'react';

import Typography from '@material-ui/core/Typography';

import ShowFarms from '../ShowFarms';
import Input from '../Input';
import InputData from '../InputData';
import AddEntity from '../AddEntity';
import WithSaveEntity from '../WithSaveEntity';
import FeedbackApi from '../FeedbackApi';
import ButtonSubmit from '../ButtonSubmit';

import { searchFarms } from '../../services/api/apiFarms';
import { createHarvest } from '../../services/api/apiHarvests';

import { ActionTypes } from '../../reducers/saveEntity.reducer';

import useStyles from './styles';

const NewHarvestForm = ({ saving, error, dispatch }) => {
  const styles = useStyles();
  const [start, setStart] = useState(new Date());
  const [end, setEnd] = useState(new Date());
  const [farmCode, setFarmCode] = useState('');
  const [farms, setFarms] = useState([]);
  const [code, setCode] = useState('');

  const onChangeFarmCode = useCallback((event) => {
    setFarmCode(event.target.value);
  }, []);

  const onChangeStart = useCallback((date) => {
    setStart(date);
  }, []);

  const onChangeEnd = useCallback((date) => {
    setEnd(date);
  }, []);

  const onChangeCode = useCallback((event) => {
    setCode(event.target.value);
  }, []);

  const clearInputs = () => {
    setStart(new Date());
    setEnd(new Date());
    setFarms([]);
    setFarmCode('');
    setCode('');
  };

  const addFarm = async () => {
    try {
      const newFarm = await searchFarms('code', farmCode);
      if (newFarm.length > 0) setFarms([...farms, ...newFarm]);
    } catch (err) {
      alert('There is no farm with this code');
    }
  };

  const removeFarm = (id) => {
    setFarms(farms.filter((f) => f.id !== id));
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    dispatch({ type: ActionTypes.START_SAVE_ENTITY });
    try {
      const farmIds = farms.map((farm) => farm.id);
      const harvest = await createHarvest({
        farmIds,
        start,
        end,
        code,
      });
      clearInputs();
      dispatch({ type: ActionTypes.SAVE_ENTITY_SUCCESS, payload: harvest });
    } catch (err) {
      dispatch({ type: ActionTypes.SAVE_ENTITY_FAILURE, payload: err });
    }
  };

  return (
    <form onSubmit={onSubmit} className={styles.container}>
      <Input value={code} onChange={onChangeCode} title='code' />
      <InputData label='Start Date' value={start} onChange={onChangeStart} />
      <InputData label='End Date' value={end} onChange={onChangeEnd} />
      <Typography className={styles.farmsTitle}>Farms</Typography>
      <AddEntity
        value={farmCode}
        onChange={onChangeFarmCode}
        placeHolder='Type de farm code'
        label='Farm Code'
        onAdd={addFarm}
      />
      <ShowFarms farms={farms} removeFarm={removeFarm} />
      <ButtonSubmit btTitle='Create harvest' />
      <FeedbackApi loading={saving} error={error} />
    </form>
  );
};

export default WithSaveEntity(NewHarvestForm);
