import React, { useState, useCallback } from 'react';

import Box from '@material-ui/core/Box';
import Input from '../Input';
import InputData from '../InputData';
import SearchFilterOptions from '../SearchFilterOptions';
import WithSearchEntities from '../WithSearchEntities';
import ButtonSubmit from '../ButtonSubmit';
import FeedbackApi from '../FeedbackApi';
import ShowHarvests from '../ShowHarvests';

import { searchHarvest } from '../../services/api/apiHarvests';
import { ActionTypes } from '../../reducers/searchEntities.reducer';

import useStyles from './styles';

const SearchHarvests = ({ searching, error, data, dispatch }) => {
  const [filterOption, setFilterOption] = useState('code');
  const [code, setCode] = useState('');
  const [start, setStart] = useState(new Date());
  const [end, setEnd] = useState(new Date());

  const onChangeFilterOption = useCallback((event) => {
    setFilterOption(event.target.value);
  }, []);

  const onChangeCode = useCallback((event) => {
    setCode(event.target.value);
  }, []);

  const onChangeStart = useCallback((event) => {
    setStart(event.target.value);
  }, []);

  const onChangeEnd = useCallback((event) => {
    setEnd(event.target.value);
  }, []);

  const onSubmit = async (event) => {
    event.preventDefault();
    dispatch({ type: ActionTypes.START_SEARCH_ENTITY });
    try {
      const harvests =
        filterOption === 'code'
          ? await searchHarvest({ code })
          : await searchHarvest({
              start: start.toISOString(),
              end: end.toISOString(),
            });
      dispatch({ type: ActionTypes.SEARCH_ENTITY_SUCCESS, payload: harvests });
    } catch (err) {
      dispatch({ type: ActionTypes.SEARCH_ENTITY_FAILURE, payload: err });
    }
  };

  const styles = useStyles();

  return (
    <Box width='100%'>
      <form onSubmit={onSubmit} className={styles.formContainer}>
        <SearchFilterOptions
          value={filterOption}
          onChange={onChangeFilterOption}
          filterOptions={['code', 'start and end data']}
        />
        {filterOption === 'code' ? (
          <Input value={code} onChange={onChangeCode} title='code' />
        ) : (
          <Box display='flex' flexDirection='column'>
            <InputData
              label='Start data'
              value={start}
              onChange={onChangeStart}
            />
            <InputData lable='End data' value={end} onChange={onChangeEnd} />
          </Box>
        )}
        <ButtonSubmit harvest={data} btTitle='Search for harvests' />
        <FeedbackApi loading={searching} error={error} />
      </form>
      <ShowHarvests harvests={data} />
    </Box>
  );
};

export default WithSearchEntities(SearchHarvests);
