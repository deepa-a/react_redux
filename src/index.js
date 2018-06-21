/**
 * Created by daravind on 07/06/2018.
 */
/* eslint-disable import/default */
import '../node_modules/babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import configureStore from './store/configureStore';
import {Provider} from 'react-redux';
import{ Router, browserHistory } from 'react-router';
import routes from './routes';
import {loadCourses} from './actions/courseAction';
import {loadAuthors} from './actions/authorAction';
import './styles/styles.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/toastr/build/toastr.min.css';

const store = configureStore();
store.dispatch(loadCourses());
store.dispatch(loadAuthors());

render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById('app')
);