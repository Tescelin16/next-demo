import { ThemeOptions } from "@mui/material";
import shadows from "./shadowsTheme";
import typography from "./typographyTheme";
import components from "./componentsTheme";

const baseTheme: ThemeOptions = {
    direction: 'ltr',
    palette: {
      primary: {
        main: '#1a97f5',
        light: '#e6f4ff',
        dark: '#0078D3',
      },
      secondary: {
        main: '#1e4db7',
        light: '#ddebff',
        dark: '#173f98',
      },
      success: {
        main: '#60AF44',
        light: '#ebfaf2',
        dark: '#00964b',
        contrastText: '#ffffff',
      },
     
      info: {
        main: '#0bb2fb',
        light: '#a7e3f4',
      },
      error: {
        main: '#CA4122',
        light: '#fdf3f5',
        dark: '#e45a68',
      },
      warning: {
        main: '#fec90f',
        light: '#fff4e5',
        dark: '#dcb014',
        contrastText: '#ffffff',
      },
      text: {
        secondary: '#777e89',
      },
      grey: {
        A100: '#ecf0f2',
        A200: '#99abb4',
        A400: '#767e89',
        A700: '#e6f4ff',
      },
      action: {
        disabledBackground: 'rgba(73,82,88,0.12)',
        hoverOpacity: 0.02,
      },
    },
  
    shape: {
      borderRadius: 5,
    },
    mixins: {
      toolbar: {
        color: '#949db2',
        '@media(min-width:1280px)': {
          minHeight: 70,
          padding: '0 30px',
        },
        '@media(max-width:1280px)': {
          minHeight: '64px',
        },
      },
    },
    typography,
    components,
    shadows
  };

export default baseTheme;