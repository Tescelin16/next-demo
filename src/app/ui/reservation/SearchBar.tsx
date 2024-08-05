import { Box, Grid, Typography } from "@mui/material";

const SearchBar = () =>{
    
    return (
        <Box sx={{borderBottom: '3px solid rgba(0, 0, 0, 0.1)', display:'flex',flexDirection:'row', justifyContent: 'center', alignItems:'center', height:'41',width:'1141px'}}>
            <Grid container display='flex' justifyContent='center'>
                <Grid item>
                    <Typography>Barra debusqueda</Typography>
                </Grid>
            </Grid>
        </Box>    
    )
}

export default SearchBar;