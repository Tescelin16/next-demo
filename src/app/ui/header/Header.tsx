'use client'
import {AppBar, Box, Grid, IconButton, Toolbar} from '@mui/material'
import LogoutIcon from '@mui/icons-material/Logout';
import { useRouter } from 'next/navigation';
const Header = ( )=>{
    const router = useRouter();
    const handleLogOut = () => {
        router.push('/')
    }
    return (
        <Box sx={{ flexGrow: 1 }}>
        <AppBar position='fixed' sx={{height:'60px', padding:0}}>
             <Toolbar sx={{ display: 'flex', justifyContent: 'flex-end', flexGrow:1, marginRight:-2 }}>
                <Grid container display='flex' flexDirection='row-reverse'>
                    <Grid item sx={{display:'flex', justifyContent:'flex-end'}}>
                        <IconButton onClick={handleLogOut}>
                            <LogoutIcon/>
                        </IconButton>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
        </Box>
    )
}

export default Header;