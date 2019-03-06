Package.describe({
  name: 'lef:alerts',
  version: '2.2.2',
  summary: 'Basic alert system using Bootstrap 4 and React.'
})

Package.onUse(api => {
  api.use(['ecmascript', 'mongo', 'react-meteor-data'])
  api.mainModule('alerts.js', 'client')
})
