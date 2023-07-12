import React from 'react';
import Portfolio from './pages/Portfolio';
import Header from './components/Header';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './styles/themes/default';
import { GlobalStyle } from './styles/global';
import Home from './pages/Home';
import Skills from './pages/Skills';
import Contact from './pages/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Header />
      <Home/>
      <Skills/>
      <Portfolio />
      <Contact/>
      <Footer/>
      <GlobalStyle />
    </ThemeProvider>
  );
};

export default App;