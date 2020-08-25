import React from 'react';

import Box from '@material-ui/core/Box';

import AccordionContainer from '../../components/AccordionContainer';
import NewFieldForm from '../../components/NewFieldForm';
import SearchFields from '../../components/SearchFields';

import PageContainer from '../PageContainer';

const Fields = () => {
  return (
    <PageContainer>
      <Box display='flex' flexDirection='column'>
        <AccordionContainer title='Create a new Field'>
          <NewFieldForm />
        </AccordionContainer>
        <AccordionContainer title='Search for fields'>
          <SearchFields />
        </AccordionContainer>
      </Box>
    </PageContainer>
  );
};

export default Fields;
