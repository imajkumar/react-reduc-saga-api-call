import { hot } from 'react-hot-loader/root';
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Router, Switch, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import styled, { css, ThemeProvider } from 'styled-components';
import treeChanges from 'tree-changes';

import history from 'modules/history';
import theme, { headerHeight } from 'modules/theme';
import { utils } from 'styled-minimal';

import config from 'config';
import { showAlert } from 'actions';

import Home from 'routes/Home';
import Private from 'routes/Private';
import NotFound from 'routes/NotFound';

import Header from 'components/Header';
import SystemAlerts from 'components/SystemAlerts';

import Footer from 'components/Footer';
import GlobalStyles from 'components/GlobalStyles';
import RoutePublic from 'components/RoutePublic';
import RoutePrivate from 'components/RoutePrivate';
import {register} from './actions/register';


const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  opacity: 1 !important;
  position: relative;
  transition: opacity 0.5s;
`;

const MainPrivate = ({ isAuthenticated }) =>
  isAuthenticated &&
  css`
    padding: ${utils.px(headerHeight)} 0 0;
  `;

const Main = styled.main`
  min-height: 100vh;

  ${MainPrivate};
`;

export class App extends React.Component {
  
  onHandleRegistration = (event) => {
    event.preventDefault();

  
    let email = event.target.email.value;
    let password = event.target.password.value;

    const payload = {
      email, password
    };
    //console.log(payload);
    this.props.dispatch(register(payload));
  }

  render() {
    

    return (
      <Router history={history}>
        <ThemeProvider theme={theme}>
          <AppWrapper>
           
            <h1>welcome</h1>

          <form onSubmit={this.onHandleRegistration}>
          
          <div>
            <label htmlFor="email">Email</label>
            <input type="email"  name="email" id="email" />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" />
          </div>
          <div>
            <button>Register</button>
          </div>
        </form>

           
            <GlobalStyles />
          </AppWrapper>
        </ThemeProvider>
      </Router>
    );
  }
}




export default hot(connect()(App));

