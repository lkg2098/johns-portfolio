import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

if (!root) {
    throw new Error('root element was not found!');
}

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
