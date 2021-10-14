import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import Context from './components/pages/context/Context'
import context from 'react-bootstrap/esm/AccordionContext';

ReactDOM.render(
    <React.StrictMode>
    <context
        <App />
    </React.StrictMode>,
    document.getElementById("root")
);