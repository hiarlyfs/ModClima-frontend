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
      <Select
        value={value}
        onChange={onChange}
        className={styles.selectComponent}
      >
        {filterOptions.map((filterOption) => (
          <option value={filterOption}>{filterOption}</option>
        ))}
      </Select>
    </Box>
  );
};

export default React.memo(SearchFilterOptions);
