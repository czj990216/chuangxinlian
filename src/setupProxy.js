const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function (app) {
  app.use(
    createProxyMiddleware(
      '/api/chunk',
      {
        target: process.env.NODE_ENV === "development" ? 'http://coininn.iquntv.com' : "http://coininn.iquntv.com",
        changeOrigin: true
      }
    )
  )
}