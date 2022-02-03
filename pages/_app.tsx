import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';

import { Provider } from 'react-redux';
import { GlobalStyle } from '@Styles/global';
import { themes } from '@Styles/themes';
import { store } from 'redux/store';
import {
  useState,
  createContext,
  useContext,
  Dispatch,
  SetStateAction,
} from 'react';

type Themes = 'light' | 'dark';

interface State {
  theme: Themes;
  setTheme: Dispatch<SetStateAction<Themes>>;
}

const state: State = {
  theme: 'light',
  setTheme: theme => theme,
};
const Theme = createContext(state);

export const useThemeContext = () => {
  return useContext(Theme);
};

function MyApp({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState(state.theme);

  return (
    <Theme.Provider
      value={{
        theme,
        setTheme,
      }}
    >
      <Provider store={store}>
        <ThemeProvider theme={themes[theme]}>
          <GlobalStyle />
          <Component {...pageProps} />
        </ThemeProvider>
      </Provider>
    </Theme.Provider>
  );
}

export default MyApp;
