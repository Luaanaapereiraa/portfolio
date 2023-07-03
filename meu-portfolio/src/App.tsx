import React from 'react';
import Portfolio from './components/Portfolio';
import Header from './components/Header';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './styles/themes/default';
import { GlobalStyle } from './styles/global';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Header />
      <Portfolio />
      <GlobalStyle />
    </ThemeProvider>

  );
};

export default App;