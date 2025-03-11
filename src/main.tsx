import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { Provider } from 'react-redux';
import store from './store/index.ts';
import { BrowserRouter } from 'react-router';
import ErrorBoundary from './components/ErrorBoundaries/ErrorBoundaries.tsx';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme/theme.ts';
import { ToastProvider } from './providers/ToastProvider.tsx';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error('Root element not found');
}
createRoot(rootElement).render(
  <StrictMode>
    <ErrorBoundary>
      <ThemeProvider theme={theme}>
        <ToastProvider>
          <BrowserRouter>
            <Provider store={store}>
              <App />
            </Provider>
          </BrowserRouter>
        </ToastProvider>
      </ThemeProvider>
    </ErrorBoundary>
  </StrictMode>
);
