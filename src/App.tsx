import React from 'react'
import {BrowserRouter as Router, Switch} from 'react-router-dom';
import {GlobalStyles} from './assets/GlobalStyles'
import AuthState from './context/auth/AuthState';
import Layout from './layouts/Layout'
import {ThemeProvider } from 'styled-components';
import { normalTheme } from './assets/ThemeStyle';

const App: React.FC = () => {


    return (
      <ThemeProvider theme={normalTheme}>
      <AuthState>
      <Router>
        <GlobalStyles />
        <Switch>
         
      <Layout>

      </Layout>

      </Switch>
      </Router>
      </AuthState>
      </ThemeProvider>
     
    );
}

export default App;