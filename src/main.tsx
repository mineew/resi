import React from 'react';
import { createRoot } from 'react-dom/client';

import App from '@/App';
import '@/i18n/i18n';
import '@/preload-error';
import '@/utils/polyfills/showOpenFilePicker';

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
