import { Metadata } from 'next';
import { Box, Grid } from '@mui/material';
import GrupoSurLogo from '../../ui/gruposur-logo';
 
export const metadata: Metadata = {
  title: 'Home',
};

export default async function Page() {
  return (
<Grid container display='flex' lg={12} wrap='wrap'>
       
      <Grid item xs={12} sm={6} md={6} lg={6} sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 0,
        marginRight: 0,
        zIndex: 1,
        
      }}>
        <Box sx={{ boxShadow: '0px 7px 30px 0px rgba(8, 94, 162, 0.9)', marginBottom:2, backgroundColor: '#1a97f5', borderRadius: '7px', padding: '10%' }}>
          <GrupoSurLogo />
        </Box>
      </Grid>
    </Grid>
  );
}