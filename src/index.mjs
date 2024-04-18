import express from 'express'
import config from 'config'

const app = express()

app.use(express.json())

app.use((req, res) => {
  res.json({
    method: req.method,
    path: req.path,
    body: req.body,
    hostname: req.hostname,
    originalUrl: req.originalUrl,
    protocol: req.protocol,
  })
})

app.listen(config.get('http.port'), config.get('http.hostname'), () => {
  console.log(
    `Server ready at http://${config.get('http.hostname')}:${config.get(
      'http.port',
    )}`,
  )
})
