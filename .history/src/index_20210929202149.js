import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import Context from './components/pages/context/Context'

ReactDOM.render(
    <React.StrictMode>
    <Context
        <App />
    </React.StrictMode>,
    document.getElementById("root")
);