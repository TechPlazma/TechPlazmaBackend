const express = require('express')
express()
const Joi = require('joi')
const jwt = require('jsonwebtoken')

const validInfo = information => {

    const regUser = Joi.object({

        name: Joi.string().min(1).required(),
        email: Joi.string().email().required(),
        phoneno:Joi.string().length(10).required(),
        visitormessage: Joi.string().min(1).required()

    })
    return regUser.validate(information)
}

module.exports.validInfo = validInfo
