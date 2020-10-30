/* eslint-disable @typescript-eslint/explicit-function-return-type */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        createProxyMiddleware('/api', {
            target: process.env.REACT_APP_API_URL ? process.env.REACT_APP_API_URL : 'http://localhost:8000',
            changeOrigin: true,
        }),
    );
};
