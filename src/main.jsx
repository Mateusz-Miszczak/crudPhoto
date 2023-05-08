import React from 'react';
import ReactDOM from 'react-dom/client';

import { Provider } from './context/cards';
import App from './App.jsx';

const el = document.getElementById('root');
const root = ReactDOM.createRoot(el);

root.render(
  <Provider>
    <App />
  </Provider>
);
