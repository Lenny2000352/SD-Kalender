
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://Lenny2000352.github.io/SD-Kalender/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/SD-Kalender"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 541, hash: '26453816a18938c6b1df7fa6a61f36e3959d7435765696c824c99dd0da143aff', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1054, hash: 'd4bebc4ec2f5c1b8b4bbae61c8615fd1f56953353576683dca4e3c531aaa8e4a', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 20889, hash: 'c98fd180bcd82728c6654ed5c7ca46a541033c828050ffe10401e1bbfb2cf9b5', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
