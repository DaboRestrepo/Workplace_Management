import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './routes/Routes';
import 'bootstrap/dist/css/bootstrap.min.css';

const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App tab="home" />);
