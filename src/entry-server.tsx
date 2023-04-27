import React from 'react';
import { renderToPipeableStream } from 'react-dom/server';
import App from './App';
import { StaticRouter } from 'react-router-dom/server';
import { Provider } from 'react-redux';
import store from './store';

export function render(url: string, opts?: object) {
  return renderToPipeableStream(
    <React.StrictMode>
      <Provider store={store}>
        <StaticRouter location={url}>
          <App />
        </StaticRouter>
      </Provider>
    </React.StrictMode>,
    opts
  );
}

// export function render(url: string | Partial<Location>) {
//   const html = ReactDOMServer.renderToString(
//     <React.StrictMode>
//       <Provider store={store}>
//         <StaticRouter location={url}>
//           <App />
//         </StaticRouter>
//       </Provider>
//     </React.StrictMode>
//   );
//   return { html };
// }
