import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './App.css';
import { store } from './app/store';
import { Provider } from 'react-redux';
import { useCart , CartProvider } from './context/cart';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(   
       <Provider store={store}> <App /> </Provider> 
);





