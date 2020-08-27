import React, { useState, useCallback } from 'react';

import Box from '@material-ui/core/Box';

import SubmitButton from '../ButtonSubmit';
import SearchFilterOptions from '../SearchFilterOptions';
import Input from '../Input';
import ShowMills from '../ShowMills';
import WithSearchEntities from '../WithSearchEntities';
import FeedbackApi from '../FeedbackApi';

import { ActionTypes } from '../../reducers/searchEntities.reducer';

import { searchMillsByName } from '../../services/api/apiMills';

import useStyles from './styles';

const SearchMills = ({ searching, error, data, dispatch }) => {
  const [name, setName] = useState('');

  const onChangeName = useCallback((event) => {
    setName(event.target.value);
  }, []);

  const onSubmit = async (event) => {
    event.preventDefault();
    dispatch({ type: ActionTypes.START_SEARCH_ENTITY });
    try {
      const mills = await searchMillsByName(name);
      dispatch({ type: ActionTypes.SEARCH_ENTITY_SUCCESS, payload: mills });
    } catch (err) {
      dispatch({ type: ActionTypes.SEARCH_ENTITY_FAILURE, payload: err });
    }
  };

  const styles = useStyles();

  return (
    <Box className={styles.container}>
      <form onSubmit={onSubmit} className={styles.container}>
        <SearchFilterOptions value='name' filterOptions={['name']} />
        <Input value={name} onChange={onChangeName} title='Name' />
        <SubmitButton btTitle='Search Mills' />
        <FeedbackApi loading={searching} error={error} />
      </form>
      <ShowMills mills={data} />
    </Box>
  );
};

export default WithSearchEntities(SearchMills);
