import { Grid } from "@mui/material";
import Header from "../ui/header/Header";
import Sidebar from "../ui/sidebar/Sidebar";
import { Metadata } from "next";



export default function BackOfficeLayout ({children}:{children: React.ReactNode}){
    return (
        <Grid container display='flex' sx={{height: '100vh', width: '100%', padding:0}}>
            <Grid>
                <Sidebar/>
            </Grid>
            <Grid item sx={{height:'60px', padding:0}}>
                <Header />
            </Grid>
            <Grid item sx={{flex:1, paddingTop:'60px', paddingLeft:'60px'}}>
                {children}
            </Grid>
    </Grid>
    )
}