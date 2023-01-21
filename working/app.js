require('dotenv').config()
// async errors

const express = require('express');
const app = express();

const connectDB = require('./db/connect')

const notFoundMiddleware = require('./middleware/not-found')
const errorMiddleware = require('./middleware/error-handler')

// routes

app.get('/', (req, res) => {
    res.send('<h1>Store API</h1><a href="/api/v1/products">products route</a>')
})

// products route

app.use(notFoundMiddleware)
app.use(errorMiddleware)

const port = process.env.PORT || 5000

async function start () {
    try {
        //connect DB here
        await connectDB(process.env.MONGO_URI)
        app.listen(5000, console.log('Server listening on port ' + port))
    }
    catch (error) {

    }
}

start()