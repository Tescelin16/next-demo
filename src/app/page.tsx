import { Box, Grid } from '@mui/material';
import Image from 'next/image';
import FondoEmpresa from '../../public/background/colectivo grupo sur.jpg';
import LoginForm from './ui/forms/loginForm/loginForm';
import GrupoSurLogo from './ui/gruposur-logo';

export default function Page() {
  return (
    <Grid container display='flex' lg={12} wrap='wrap' sx={{ height: '100vh', width: '100%'}}>
        <Grid item xs={12} sm={6} md={6} lg={6} sx={{
        display: 'flex',
        justifyContent: 'center',
        padding: 0,
        margin: 0,
        height: { xs: '100vh', sm: '100vh' },
        position: { xs: 'absolute', sm: 'relative' },
        width: { xs: '100%', sm: '50%' },
        zIndex: { xs: 1, sm: 0 },
      }}>
        <Box sx={{ height: '100%', width: '100%', position:'relative'}}>
          <Image src={FondoEmpresa} alt="Background Image"  layout='fill'  objectFit='cover' />
        </Box>
      </Grid>
      <Grid item xs={12} sm={6} md={6} lg={6} sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 0,
        marginRight: 0,
        position: 'relative',
        zIndex: 1,
        
      }}>
        <Box sx={{ boxShadow: '0px 7px 30px 0px rgba(8, 94, 162, 0.9)', marginBottom:2, backgroundColor: '#1a97f5', borderRadius: '7px', padding: '10%' }}>
          <GrupoSurLogo />
        </Box>
        <LoginForm />
      </Grid>
    </Grid>
  );
}
