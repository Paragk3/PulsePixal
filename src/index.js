import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css'; // Import the main stylesheet
import App from './App'; // Import the main application component

// Get a reference to the HTML element with the id "root"
const container = document.getElementById('root');

// Create a root element for the React application
const root = createRoot(container);

// Render the React application to the DOM
root.render(
  <React.StrictMode> 
    <App /> 
  </React.StrictMode>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA