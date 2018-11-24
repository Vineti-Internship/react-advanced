import React from 'react';

export const themes = {
  light: {
    foreground: '#ff0000',
    background: '#eeeeee'
  },
  dark: {
    foreground: '#00ff00',
    background: '#222222',
  }
};

export const ThemeContext = React.createContext(themes.dark);