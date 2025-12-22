import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { initializeSecurity } from './utils/securityInit';

// Initialize security measures
initializeSecurity();

createRoot(document.getElementById('root')!).render(<App />);
