import React from 'react';
import { createRoot } from 'react-dom/client';

import App from '@/App';

import '@/i18n/i18n';
import '@/preload-error';
import '@/utils/polyfills/showOpenFilePicker';

const container = document.getElementById('root');

if (container) {
  createRoot(container).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  );
}
