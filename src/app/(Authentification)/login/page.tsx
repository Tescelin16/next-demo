import { Box } from '@mui/material';
import LoginForm from '../../ui/forms/loginForm/loginForm';
import GrupoSurLogo from '../../ui/gruposur-logo';

export default function Login() {
  return (
    <>
        <Box sx={{ boxShadow: '0px 7px 30px 0px rgba(8, 94, 162, 0.9)', marginBottom:2, backgroundColor: '#1a97f5', borderRadius: '7px', padding: '10%' }}>
          <GrupoSurLogo />
        </Box>
        <LoginForm />
    </>
  );
}
