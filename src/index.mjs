import express from 'express'
import config from 'config'

const app = express()

app
  // Support JsonBody
  .use(express.json())
  // Handle Request
  .use((req, res) => {
    const data = {
      method: req.method,
      path: req.path,
      body: req.body,
      hostname: req.hostname,
      originalUrl: req.originalUrl,
      protocol: req.protocol,
      query: req.query,
    }

    console.log(JSON.stringify(data))

    res.json(data)
  })

app.listen(config.get('http.port'), config.get('http.hostname'), () => {
  console.log(
    `Server ready at http://${config.get('http.hostname')}:${config.get(
      'http.port',
    )}`,
  )
})
