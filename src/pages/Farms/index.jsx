import React from 'react';

import Box from '@material-ui/core/Box';

import NewFarmForm from '../../components/NewFarmForm';
import SearchFarms from '../../components/SearchFarms';

import PageContainer from '../PageContainer';
import AccordionContainer from '../../components/AccordionContainer';

const Farms = () => {
  return (
    <PageContainer>
      <Box display='flex' flexDirection='column'>
        <AccordionContainer title='Create a new Farm'>
          <NewFarmForm />
        </AccordionContainer>
        <AccordionContainer title='Search for Farms'>
          <SearchFarms />
        </AccordionContainer>
      </Box>
    </PageContainer>
  );
};

export default Farms;
