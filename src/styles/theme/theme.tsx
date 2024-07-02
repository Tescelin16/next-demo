'use client'
import _ from 'lodash';
import { createTheme } from '@mui/material/styles';
import { themesOptions } from './themesOptions';
import { esES } from '@mui/material/locale';
import baseTheme from './baseTheme';

export interface ConfigTheme {theme: string; direction: string;}


export default function buildTheme (config: ConfigTheme) {
  let themeOption = themesOptions.find((theme) => theme.name === config.theme);
  const customizer ={activeMode:'light'} // este puede venir de un redux para hacer los cambios de tema

  const baseMode = {
    palette: {
      mode: customizer.activeMode,
      background: {
        default: customizer.activeMode === 'dark' ? '#20232a' : '#fafbfb',
        dark: customizer.activeMode === 'dark' ? '#1c2025' : '#ffffff',
        paper: customizer.activeMode === 'dark' ? '#282C34' : '#ffffff',
      },
      text: {
        primary: customizer.activeMode === 'dark' ? '#e6e5e8' : 'rgba(0, 0, 0, 0.87)',
        secondary: customizer.activeMode === 'dark' ? '#adb0bb' : '#777e89',
      },
    },
  };
  if (!themeOption) {
    console.warn(new Error(`The theme ${config.theme} is not valid`));
  }

  const theme = createTheme(
    _.merge({}, baseTheme, baseMode, themeOption, {
      direction: config.direction,
    }),
    esES,
  );
  return theme;
};


const theme = buildTheme({ theme: 'BLUE_THEME', direction: 'ltr' });

export {theme}

