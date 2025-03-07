import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css'
import App from './App.jsx'
import ThemeProvider from './context/ThemeContext.jsx';
import ClimateProvider from './context/ClimateContext.jsx';

const Root = () => {
  return (
    <ThemeProvider>
      <ClimateProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ClimateProvider>
    </ThemeProvider>

  );
};

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Root />
  </StrictMode>
);
