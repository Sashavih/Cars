import React from 'react'
import ReactDOM from 'react-dom/client';
import './assets/styles/global.scss';
import './index.css';
import Router from './assets/components/ui/Router.jsx';
import AuthProvider from './assets/providers/AuthProvider';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  < React.StrictMode >
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <Router />
      </AuthProvider>
    </QueryClientProvider>
  </ React.StrictMode>,
)
