const {Schema, model} = require('mongoose')

const  schema = new Schema({
    compname:{type: String, required: true},
    description: {type: String, required: true},
    vac: {type: String, required: true},
    phone: {type: String, required: true},
    location: {type: String, required: true},
    date: {type: Date, default: Date.now}
})

module.exports = model('Comp', schema)