import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './theme/GlobalStyle';
import theme from './theme/mainTheme';

const App: React.FunctionComponent = () => {
  return (
    <div className="App">
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <>Temp</>
      </ThemeProvider>
    </div>
  );
};

export default App;
