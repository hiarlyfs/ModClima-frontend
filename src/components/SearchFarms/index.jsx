import React, { useState, useCallback } from 'react';

import Box from '@material-ui/core/Box';

import WithSearchEntities from '../WithSearchEntities';
import SearchFilterOptions from '../SearchFilterOptions';
import Input from '../Input';
import ButtonSubmit from '../ButtonSubmit';
import FeedbackApi from '../FeedbackApi';
import ShowFarms from '../ShowFarms';

import { ActionTypes } from '../../reducers/searchEntities.reducer';

import { searchFarms } from '../../services/api/apiFarms';

import useStyles from './styles';

const SearchFarms = ({ searching, error, data, dispatch }) => {
  const [filterOption, setFilterOption] = useState('name');
  const [filterValue, setFilterValue] = useState('');

  const onChangeFilterOption = useCallback((event) => {
    setFilterOption(event.target.value);
  }, []);

  const onChangeFilterValue = useCallback((event) => {
    setFilterValue(event.target.value);
  }, []);

  const onSubmit = async (event) => {
    event.preventDefault();
    dispatch({ type: ActionTypes.START_SEARCH_ENTITY });
    try {
      const fields = await searchFarms(filterOption, filterValue);
      dispatch({ type: ActionTypes.SEARCH_ENTITY_SUCCESS, payload: fields });
    } catch (err) {
      dispatch({ type: ActionTypes.SEARCH_ENTITY_FAILURE, payload: err });
    }
  };

  const styles = useStyles();
  return (
    <Box display='flex' flexDirection='column'>
      <form onSubmit={onSubmit} className={styles.formContainer}>
        <SearchFilterOptions
          value={filterOption}
          onChange={onChangeFilterOption}
          filterOptions={['name', 'code']}
        />
        <Input
          title={filterOption}
          value={filterValue}
          onChange={onChangeFilterValue}
        />
        <ButtonSubmit btTitle='Search farms' />
        <FeedbackApi loading={searching} error={error} />
      </form>
      <ShowFarms farms={data} />
    </Box>
  );
};

export default WithSearchEntities(SearchFarms);
