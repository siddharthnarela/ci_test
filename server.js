import express from 'express'

const app = express()


app.get('/', (req, res) => {
    res.json({
        message: 'Hello from Express.js'
    })
})


app.get('/hello', (req, res) => {

    res.json({
        message: "Hello",
        message: "Test",
        message: "Test"
    })
})

app.listen(3000, ()=>{
    console.log('Server is running on port 3000')
})