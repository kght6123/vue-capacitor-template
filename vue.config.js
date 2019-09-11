module.exports = {
  publicPath: process.env.APP_MODE === 'electron'
  ? './'
  : '/'
}