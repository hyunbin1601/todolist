import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';
import GlobalStyle from './globalStyles';

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement!);

root.render(
  <Provider store={store}>
    <GlobalStyle />
    <App />
  </Provider>
);
