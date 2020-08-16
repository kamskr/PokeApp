import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './theme/GlobalStyle';
import theme from './theme/mainTheme';
import PokemonDisplay from './components/molecules/PokemonDisplay';
import PokemonList from './views/PokemonList';

const App: React.FunctionComponent = () => {
  return (
    <div className="App">
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <>
          <PokemonDisplay
            imageSource="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
            name="Pikatchu"
            elements={['electric']}
          />
          <PokemonList />
        </>
      </ThemeProvider>
    </div>
  );
};
export default App;
