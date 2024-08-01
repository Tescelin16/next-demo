import {AppBar, Grid, IconButton, Toolbar} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
const Header = ( )=>{
    return (
        <AppBar position='fixed' sx={{height:'60px'}}>
            <Toolbar>
                <Grid container>
                    <Grid item>
                        <IconButton>
                            <MenuIcon/>
                        </IconButton>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    )
}

export default Header;