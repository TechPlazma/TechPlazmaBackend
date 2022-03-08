const router = require('express').Router()
const { validInfo } = require('./validations')
const contactModel = require('./contactModel')

router.get('/', (req,res) => {
    res.json("Hi")
})

router.post('/', async(req,res)=>{

    //VALIDATIONS   
    const {error} = validInfo(req.body)
    if(error) return res.status(400).json({message:error.details[0].message})

    //IF USER ALREADY EXIST
    const user = await contactModel.findOne({email:req.body.email})
    if(user) return res.status(400).json({message:"User Exists"})

    const contactInfo = new contactModel({
        name:req.body.name,
        email:req.body.email,
        phoneno:req.body.phoneno,
        visitormessage:req.body.visitormessage
    })

    try{
        const savedInfo = await contactInfo.save()
        res.status(200).json({message: "Information Saved"})
    }catch(err){
        res.status(400).json({message:err})
    }

})

module.exports = router