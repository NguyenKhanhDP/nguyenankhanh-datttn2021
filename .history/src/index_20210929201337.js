import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import const context = useContext(contextValue)

ReactDOM.render(
    <React.StrictMode>
        <Context>
            <App />
        </Context>
    </React.StrictMode>
)