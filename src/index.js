import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

// fetch(url, {
//      method: "get", 
//      headers: new Headers({ 
//         "ngrok-skip-browser-warning": "69440", 
//      }), 
//     }) 
//      .then((response) => response.json()) 
//      .then((data) => console.log(data)) 
//      .catch((err) => console.log(err));





// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
