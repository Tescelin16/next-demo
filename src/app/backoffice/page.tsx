//import RevenueChart from '@/app/backoffice/revenue-chart';
//import LatestInvoices from '@/app/backoffice/latest-invoices';
import { Suspense } from 'react';
import { RevenueChartSkeleton, LatestInvoicesSkeleton, CardsSkeleton } from '@/app/ui/skeletons';
//import CardWrapper from '@/app/backoffice/cards';
import { Metadata } from 'next';
import { lusitana } from '@/styles/fonts';
import { Box, Grid } from '@mui/material';
import Image from 'next/image';
import FondoEmpresa from '../../../public/background/colectivo grupo sur.jpg';
import GrupoSurLogo from '../ui/gruposur-logo';
 
export const metadata: Metadata = {
  title: 'Backoffice',
};

export default async function Page() {
  return (
<Grid container display='flex' lg={12} wrap='wrap' sx={{ }}>
       
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