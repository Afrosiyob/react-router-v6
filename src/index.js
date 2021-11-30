import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { AuthProvider, QueryProvider } from './provider/provider';

import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'

const AppLazy = lazy( () => import( "./App" ) )

ReactDOM.render(
  <React.StrictMode>
    <QueryProvider>
      <AuthProvider>
        <Suspense fallback={ <div>loading</div> }>
          <AppLazy />
        </Suspense>
      </AuthProvider>
    </QueryProvider>
  </React.StrictMode>,
  document.getElementById( 'root' )
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
