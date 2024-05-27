import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import {Provider} from "react-redux";
import store from './redux/store';
import {Toaster} from "react-hot-toast"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
      <Provider store={store}>
        <BrowserRouter>
        <div onContextMenu={(e) => e.preventDefault()}>
          <App />
        </div>
          <Toaster/>
        </BrowserRouter>
      </Provider>
    </React.StrictMode>
);

