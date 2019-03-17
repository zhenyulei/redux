import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux'
import store from './store'
const MyApp = (
    <Provider store={store}>
        <App/>
    </Provider>
)
ReactDOM.render(MyApp, document.getElementById('root'));


