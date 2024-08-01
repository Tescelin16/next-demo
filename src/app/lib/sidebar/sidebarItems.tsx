import { SidebarItem } from "./types";
import HomeIcon from '@mui/icons-material/Home';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';

export const sidebarItems: SidebarItem[] = [
    {
        title: 'Inicio',
        href:'/Inicio',
        icon: HomeIcon
    },
    {
        title: 'Reservas',
        href:'/reservas',
        icon: EventAvailableIcon
    }
]