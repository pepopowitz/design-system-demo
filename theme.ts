import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  colors: {
    brand: {
      100: '#f7fafc',
      200: '#f7fafc',
      300: '#f7fafc',
      400: '#f7fafc',
      500: '#f7fafc',
      600: '#f7fafc',
      700: '#f7fafc',
      800: '#f7fafc',
      // ...
      900: '#1380b1',
    },
    alternate: {
      100: '#f06721',
      200: '#f06721',
      300: '#f06721',
      400: '#f06721',
      500: '#f06721',
      600: '#f06721',
      700: '#f06721',
      800: '#f06721',
      900: '#f06721',
    },
  },
  radii: {
    none: '0',
    sm: '0.125rem',
    base: '0.25rem',
    md: '0.375rem',
    lg: '0.5rem',
    xl: '0.75rem',
    '2xl': '1rem',
    '3xl': '1.5rem',
    full: '9999px',
  },
});
