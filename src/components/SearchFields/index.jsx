import React, { useState, useCallback } from 'react';

import Box from '@material-ui/core/Box';

import ShowFields from '../ShowFields';
import WithSearchEntities from '../WithSearchEntities';
import SearchFilterOptions from '../SearchFilterOptions';
import Input from '../Input';
import ButtonSubmit from '../ButtonSubmit';
import FeedbackApi from '../FeedbackApi';

import { ActionTypes } from '../../reducers/searchEntities.reducer';
import { searchFieldByCode } from '../../services/api/apiFields';

import useStyles from './styles';

const SearchFields = ({ searching, error, data, dispatch }) => {
  const [codeFilter, setCodeFilter] = useState('');

  const onChangeCode = useCallback((event) => {
    setCodeFilter(event.target.value);
  }, []);

  const onSubmit = async (event) => {
    event.preventDefault();
    dispatch({ type: ActionTypes.START_SEARCH_ENTITY });
    try {
      const field = await searchFieldByCode(codeFilter);
      dispatch({ type: ActionTypes.SEARCH_ENTITY_SUCCESS, payload: [field] });
    } catch (err) {
      dispatch({ type: ActionTypes.SEARCH_ENTITY_FAILURE, payload: err });
    }
  };

  const styles = useStyles();

  return (
    <form onSubmit={onSubmit} method='get' className={styles.formContainer}>
      <SearchFilterOptions value='code' filterOptions={['code']} />
      <Input value={codeFilter} onChange={onChangeCode} title='Code' />
      <ButtonSubmit btTitle='Search Field' />
      {searching || error ? (
        <FeedbackApi />
      ) : (
        <Box>{data.length > 0 && <ShowFields fields={data} />}</Box>
      )}
    </form>
  );
};

export default WithSearchEntities(SearchFields);
