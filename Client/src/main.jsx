import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { AppProvider } from "./context/AppContext.jsx";
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <AppProvider>
            <BrowserRouter>
              <App />
            </BrowserRouter>
        </AppProvider>
    </React.StrictMode>
)
