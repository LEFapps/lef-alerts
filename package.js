Package.describe({
  name: 'lef:alerts',
  version: '2.2.0',
  summary: 'Basic alert system using Bootstrap 4 and React.'
})

Package.onUse(api => {
  api.use(['ecmascript', 'mongo', 'react-meteor-data'])
  api.mainModule('alerts.js', 'client')
})

Npm.depends({
  react: '16.5.0'
})
