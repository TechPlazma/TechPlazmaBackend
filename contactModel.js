const mongoose = require('mongoose')

const contactModel = mongoose.Schema({
    name:String,
    email:String,
    phoneno:String,
    visitormessage:String
})

module.exports = mongoose.model("contact_information", contactModel)