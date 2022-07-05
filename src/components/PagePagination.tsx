import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const PagePagination = () => {
  return (
    <Stack  className='pagination' style={{alignItems: 'center', margin: 35}}>
      <Pagination count={5} color="primary" />
    </Stack>
  );
}

export default PagePagination
