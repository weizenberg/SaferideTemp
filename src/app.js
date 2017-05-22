import http from 'http'
import { env, mongo, port, ip } from './config'
import mongoose from './services/mongoose'
import express from './services/express'
import api from './api'

const app = express(api)
const server = http.createServer(app)

//mongoose.connect(mongo.uri)

var log4js = require('log4js');
log4js.configure({
  "appenders": [
    {
      "category": "info",
      "type": "logLevelFilter",
      "level": "INFO",
      "indexName": "logstash",
      "layout": { type: 'logstash' },
      "appender": {
        "type": "log4js-elasticsearch",
        "url": "http://134.168.58.2:9200"
      }
    },
    {
      "category": "info",
      "type": "console"
    }
  ],
  "levels": {
    "info":  "INFO"
  }
});

setImmediate(() => {
  server.listen(port, ip, () => {
    console.log('Express server listening on http://%s:%d, in %s mode', ip, port, env)
  })
})

export default app
