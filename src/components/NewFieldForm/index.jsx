import React, { useState, useCallback } from 'react';

import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

import RoomIcon from '@material-ui/icons/Room';
import GoogleMapReact from 'google-map-react';

import { saveField } from '../../services/api/apiFields';

import { ActionTypes } from '../../reducers/saveEntity.reducer';

import WithSaveEntity from '../WithSaveEntity';
import ButtonSubmit from '../ButtonSubmit';
import Input from '../Input';
import FeedbackApi from '../FeedbackApi';

import useStyles from './styles';

const NewFieldForm = ({ dispatch, saving, error, entity }) => {
  const [code, setCode] = useState();
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);

  const clearInputInformations = () => {
    setCode('');
    setLatitude(null);
    setLongitude(null);
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    dispatch({ type: ActionTypes.START_SAVE_ENTITY });
    try {
      const field = await saveField({
        code,
        coordinates: {
          latitude,
          longitude,
        },
      });
      dispatch({
        type: ActionTypes.SAVE_ENTITY_SUCCESS,
        payload: field,
      });
      clearInputInformations();
    } catch (err) {
      dispatch({ type: ActionTypes.SAVE_ENTITY_FAILURE, payload: err });
    }
  };

  const onClickMap = useCallback(({ lat, lng }) => {
    setLatitude(lat);
    setLongitude(lng);
  }, []);

  const onChangeCode = useCallback((event) => {
    setCode(event.target.value);
  }, []);

  const styles = useStyles();
  return (
    <form onSubmit={onSubmit} className={styles.container}>
      <Input value={code} onChange={onChangeCode} title='Code' />
      <Box className={styles.mapConatiner}>
        <Typography className={styles.selectFieldPlace}>
          Select the field place
        </Typography>
        <GoogleMapReact
          onClick={onClickMap}
          bootstrapURLKeys={{
            key: process.env.REACT_APP_GOOGLE_MAPS_KEY,
          }}
          defaultCenter={{
            lat: -10.6624675,
            lng: -55.6508041,
          }}
          defaultZoom={4}
        >
          {latitude && longitude && (
            <Box lat={latitude} lng={longitude}>
              <RoomIcon className={styles.roomIcon} text='My Marker' />
            </Box>
          )}
        </GoogleMapReact>
        <ButtonSubmit btTitle='Create a new Field' />
        <FeedbackApi loading={saving} error={error} />
      </Box>
    </form>
  );
};

export default WithSaveEntity(NewFieldForm);
