import React from 'react';

import Box from '@material-ui/core/Box';
import PageContainer from '../PageContainer';
import AccordionContainer from '../../components/AccordionContainer';

import NewMillForm from '../../components/NewMillForm';
import SearchMills from '../../components/SearchMills';

const Mills = () => {
  return (
    <PageContainer>
      <Box display='flex' flexDirection='column'>
        <AccordionContainer title='Crate a new Mill'>
          <NewMillForm />
        </AccordionContainer>
        <AccordionContainer title='Search for Mills'>
          <SearchMills />
        </AccordionContainer>
      </Box>
    </PageContainer>
  );
};

export default Mills;
