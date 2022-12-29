import joi from 'joi'

const messageValidation = (req, res, next) =>{
    const messageSchema = joi.object().keys({
        message:joi.string().required(),
        email:joi.string().required(),
       
    })
    console.log(req.body)
    const value = messageSchema.validate(req.body);
    if(value.error){
        return res.status(400).json({
            message:value.error.details[0].message,
        })
    }else {
        return next()
    }
}

export default messageValidation