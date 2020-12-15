const {Schema, model} = require('mongoose')

const  schema = new Schema({
    username:{type: String, required: true, unique: true},
    prof: {type: String, required: true},
    exp: {type: String, required: true},
    phone: {type: String, required: true},
    education: {type: String, required: true},
    rate: {type: String},
    date: {type: Date, default: Date.now}
})

module.exports = model('Vac', schema)