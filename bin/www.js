#!/usr/bin/env node
const app = require('../app').set('port', process.env.PORT || 8000)

let server = app.listen(app.get('port'), () => {
  console.log('API listening on http://[' + server.address().address + ']:' + server.address().port)
})