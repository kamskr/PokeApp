import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './theme/GlobalStyle';
import theme from './theme/mainTheme';
import PokemonList from './views/PokemonList';

const App: React.FC = () => {
  return (
    <div className="App">
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <PokemonList />
      </ThemeProvider>
    </div>
  );
};
export default App;
