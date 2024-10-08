'use client'
import { Box, Paper, styled } from '@mui/material';
import PageContainer from '@/app/(DashboardLayout)/components/container/PageContainer';
// components
import SalesOverview from '../components/dashboard/SalesOverview';
import YearlyBreakup from '../components/dashboard/YearlyBreakups';
import MonthlyEarnings from '../components/dashboard/MonthlyEarning';
import RecentTransactions from '../components/dashboard/RecentTransations';
import ProductPerformance from '../components/dashboard/ProductPerformance';
import Grid from '@mui/material/Grid2';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));

const Dashboard = () => {
  return (
    <PageContainer title="Dashboard" description="this is Dashboard">
      <Box>
        <Grid container spacing={3}>
          <Grid size={{ xs: 12, lg: 8 }}>
            <><SalesOverview /></>
          </Grid>
          <Grid size={{ xs: 12, lg: 4 }} >
            <Grid container spacing={3}>
              <Grid size={{ xs: 12 }}>
                <YearlyBreakup />
              </Grid>
              <Grid size={{ xs: 12 }}>
                <MonthlyEarnings />
              </Grid>
            </Grid>
          </Grid>
          <Grid size={{ xs: 12, lg: 4 }} >
            <RecentTransactions />
          </Grid>
          <Grid size={{ xs: 12, lg: 8 }}>
            <ProductPerformance />
          </Grid>
        </Grid>
      </Box>
    </PageContainer>
  )
}

export default Dashboard;
