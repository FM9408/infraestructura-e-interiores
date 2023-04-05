import * as React from 'react';
import { Pagination, Stack } from '@mui/material';


export default function NavPagination({currentPage, totalPages, handleChange}) {
    
  const [page, setPage] = React.useState(1);
  

    React.useEffect(() => {
        setPage(currentPage)
    }, [currentPage])
  return (
    <Stack spacing={2}>
      <Pagination count={totalPages} page={page} onChange={handleChange} />
    </Stack>
  );
}