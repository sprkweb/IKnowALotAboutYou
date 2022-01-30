const https = require('https')

const apiKey = process.env.API_KEY

exports.handler = function (event, context) {
  let ip = event.headers['client-ip']
  if (ip == '::1') ip = ''
  const api = `https://api.ipdata.co/${ip}?api-key=${apiKey}`
  console.log(api)

  const apiRequest = new Promise((resolve, reject) => {
    https.get(api, (response) => {
      let data = ''
      response.on('data', chunk => data += chunk)
      response.on('end', () => resolve(data))
    }).on("error", err => reject(err))
  })

  return apiRequest
    .then((response) => {
      console.log(response)
      return {
        statusCode: 200,
        body: response
      }
    })
    .catch((err) => {
      console.log(err)
      return {
        statusCode: 500,
      }
    })
}
