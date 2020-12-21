const express = require('express')
const config = require('config')
const app = express()
const PORT = config.get('port') || 5050
const mongoose = require('mongoose')
const path = require("path");

app.use(express.json({ extended: true }))
app.use('/api/auth', require('./routs/auth.routes'))
app.use('/api/descr', require('./routs/exp.rotes'))
app.use('/api/done', require('./routs/search.routes'))
app.use('/api/otz',require('./routs/rate.routes'))
app.use('/api/comp',require('./routs/company.routs'))
if (process.env.NODE_ENV === 'production') {
    app.use('/', express.static(path.join(__dirname, 'client', 'build')))

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })
}
async function start(){
    try {
        await mongoose.connect(config.get('mongoURL'),{
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        })
        app.listen(PORT, () => console.log('Server ready'))
    } catch (e) {
        console.log('Server error', e.message)
        process.exit(1)
    }
}

start()