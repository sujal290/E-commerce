import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';
import ShopContextProvider from './Context/ShopContext';

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
    <ShopContextProvider>
    <App />
    </ShopContextProvider>
    </BrowserRouter>,
);