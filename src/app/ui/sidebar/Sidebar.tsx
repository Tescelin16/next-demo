'use client'
import { sidebarItems } from "@/app/lib/sidebar/sidebarItems";
import { Drawer, Grid, Icon, List, ListItem, ListItemIcon, ListItemText, Typography } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from "react";

const Sidebar = () =>{
    const [expanded, setExpanded] = useState(false);
    return (
        <Drawer
        onMouseEnter={() => setExpanded(true)}
        onMouseLeave={() => setExpanded(false)}
          variant="permanent"
          sx={{
            width: expanded ? '200px' : '60px',
            '& .MuiDrawer-paper': {
              width: expanded ? '200px' : '60px',
              transition: 'width 0.3s',
            },
            '&:hover': {
          boxShadow: expanded ? '0px 0px 10px rgba(0, 0, 0, 0.8)' : 'none',
        },
            position:'absolute',
          }}
          open
        >
            <Grid container display='flex' flexDirection='column' alignItems='center' sx={{overflowX: 'hidden', padding:0, margin:0}}>
                <Grid item sx={{height:'60px', width:'100%',display:'flex', alignItems:'center', justifyContent:'center',overflowX: 'hidden',}}>
                    <MenuIcon/>
                </Grid>
                <Grid item sx={{justifyContent:'flex-start',width:'100%'}}>
                    <List>
                    {sidebarItems.map((item, index)=>(
                        <ListItem>
                            <ListItemIcon >
                                <item.icon/>
                            </ListItemIcon>
                            {expanded && <ListItemText  primary={<Typography variant="h5">{item.title}</Typography>}/>}
                        </ListItem>
                    ))}
                </List>
                </Grid>
            
            </Grid>
        </Drawer>
    )
}

export default Sidebar;