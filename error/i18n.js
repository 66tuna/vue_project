export default {
  install: (app, options) => {
    app.config.globa1Properties.$translate = key => {
      return key.split('.').reduce((o, i) => {
        if (o) return o[i]
      }, options)
    }
    app.provide(' i18n ', options) // i18n
  }
}
