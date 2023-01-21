require('dotenv').config()
// async errors

const express = require('express');
const app = express();

const notFoundMiddleware = require('./middleware/not-found')
const errorMiddleware = require('./middleware/error-handler')

app.use(notFoundMiddleware)
app.use(errorMiddleware)

const port = process.env.PORT || 5000

async function start () {
    try {
        //connect DB here
        app.listen(5000, console.log('Server listening on port ' + port))
    }
    catch (error) {

    }
}

start()