import SearchBar from '@/app/ui/reservation/SearchBar';
import { Grid } from '@mui/material';
import { Metadata } from 'next';
 
export const metadata: Metadata = {
  title: 'Reservations',
};
 
export default async function Reservation() {

  return (
   <Grid container display='flex' lg={12} wrap='wrap' justifyContent='center'>
    <Grid item xs={12} lg={12} sx={{display:'flex', justifyContent:'center'}}>
      <SearchBar/>
    </Grid>

   </Grid>
  );
}