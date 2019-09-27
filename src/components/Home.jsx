import React from 'react';
import Grid from '@material-ui/core/Grid';
import MUIDataTable from 'mui-datatables';

const Home = ({ rows, columns }) => (
  <Grid container>
    <MUIDataTable
      data={rows}
      columns={columns}
      options={{ responsive: 'stacked', selectableRows: 'none', download: false, print: false }}
    />
  </Grid>
);

export default Home;
