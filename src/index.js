import express from 'express'
import config from 'config'

// Expressのアプリケーション本体となるオブジェクトの作成
const app = express()

// ルーティングの設定
app.get('/', (req, res) => {
  res.send('Welcome to Express!')
})

app.use('/_healthcheck', (req, res) => {
  res.json({
    code: 200,
    message: 'OK',
  })
})
listen(config.get('http.port'), () => {
  console.log('Start server port:3000')
})
