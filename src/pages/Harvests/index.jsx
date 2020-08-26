import React from 'react';

import Box from '@material-ui/core/Box';

import PageContainer from '../PageContainer';
import AccordionContainer from '../../components/AccordionContainer';
import NewHarvestForm from '../../components/NewHarvestForm';
import SearchHarvests from '../../components/SearchHarvests';

const Harvests = () => {
  return (
    <PageContainer>
      <Box display='flex' flexDirection='column'>
        <AccordionContainer title='Create a new Harvest'>
          <NewHarvestForm />
        </AccordionContainer>
        <AccordionContainer title='Search for harvests'>
          <SearchHarvests />
        </AccordionContainer>
      </Box>
    </PageContainer>
  );
};

export default Harvests;
