import { Box, Grid } from '@mui/material';
import Image from 'next/image';
import FondoEmpresa from '../../../public/background/colectivo grupo sur.jpg';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Authentification',
}

export default function LoginLayout ({children}:{children: React.ReactNode}){
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
                {children}
            </Grid>
        </Grid>
    )
}