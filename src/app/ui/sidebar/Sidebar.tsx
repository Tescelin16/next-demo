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
            <Grid container display='flex' flexDirection='column' alignItems='center' sx={{overflowX: 'hidden',}}>
                <Grid item sx={{height:'60px', display:'flex', alignItems:'center', backgroundColor:'#1046c1',overflowX: 'hidden',}}>
                    <MenuIcon/>
                </Grid>
                <Grid item>
                    <List>
                    {sidebarItems.map((item, index)=>(
                        <ListItem>
                            <ListItemIcon>
                                <item.icon/>
                            </ListItemIcon>
                            {expanded && <ListItemText primary={<Typography>{item.title}</Typography>}/>}
                        </ListItem>
                    ))}
                </List>
                </Grid>
            
            </Grid>
        </Drawer>
    )
}

export default Sidebar;