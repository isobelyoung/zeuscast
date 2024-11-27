import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import Router from './routes/Router';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <App>
                <RouterProvider router={Router} />
        </App>
    </StrictMode>
);
