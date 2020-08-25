import React from 'react';

import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Select from '@material-ui/core/Select';

import useStyles from './styles';

const SearchFilterOptions = ({ filterOptions, value, onChange }) => {
  const styles = useStyles();

  return (
    <Box className={styles.container}>
      <Typography className={styles.title}>Filter by:</Typography>
      {filterOptions.map((filterOption) => (
        <Select
          value={value}
          onChange={onChange}
          className={styles.selectComponent}
        >
          <option value={filterOption}>{filterOption}</option>
        </Select>
      ))}
    </Box>
  );
};

export default SearchFilterOptions;
