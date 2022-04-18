import React, {Suspense} from 'react';
import './index.css';
import ReactDOM from 'react-dom';
import {I18nextProvider} from 'react-i18next';
import App from './App';
import initializeI18next from './i18n';

const i18n = initializeI18next();

ReactDOM.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18n}>
      <Suspense fallback={<div>Loading...</div>}>
        <App />
      </Suspense>
    </I18nextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
