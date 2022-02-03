import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    borderRadius: string;
    colors: {
      bg: string;
      main: string;
      secondary: string;
      textClr: string;
      borderClr: string;
      cardShadow: string;
    };
  }
}

const themes = {
  light: {
    borderRadius: '15px',
    colors: {
      bg: 'hsl(240, 69%, 95%)',
      main: 'hsl(0, 0%, 100%)',
      secondary: 'hsl(241, 44%, 20%)',
      textClr: 'hsl(241, 44%, 20%)',
      borderClr: 'hsl(240, 51%, 85%)',
      cardShadow: 'hsl(240, 40%, 89%)',
    },
  },

  dark: {
    borderRadius: '50px',
    colors: {
      bg: 'hsl(240, 26%, 22%)',
      main: 'hsl(240, 31%, 18%)',
      secondary: 'hsl(241, 52%, 52%)',
      textClr: 'hsl(240, 69%, 90%)',
      borderClr: 'hsl(241, 30%, 52%)',
      cardShadow: 'hsl(240, 26%, 17%)',
    },
  },
};

export { themes };
