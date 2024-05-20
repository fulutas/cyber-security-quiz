import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { MantineProvider } from '@mantine/core';
import { RouterProvider } from 'react-router-dom'
import router from './router'

import '@mantine/core/styles.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient()

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <QueryClientProvider client={queryClient}>
    <MantineProvider>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </MantineProvider>
  </QueryClientProvider>
);

