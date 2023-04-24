import React from 'react';
import ReactDOMServer, { RenderToPipeableStreamOptions } from 'react-dom/server';
import App from './App';
import { StaticRouter } from 'react-router-dom/server';
import { Location } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

export function render(url: string | Partial<Location>, opts: RenderToPipeableStreamOptions) {
  const html = ReactDOMServer.renderToPipeableStream(
    <React.StrictMode>
      <Provider store={store}>
        <StaticRouter location={url}>
          <App />
        </StaticRouter>
      </Provider>
    </React.StrictMode>,
    opts
  );
  return { html };
}
