import joi from 'joi'

const commentValidation = (req, res, next) =>{
    const commentSchema = joi.object().keys({
        comment:joi.string().required(),
        email:joi.string().required(),
        userId: joi.string(),
        blogId: joi.string(),
       
    })
    console.log(req.body)
    const value = commentSchema.validate(req.body);
    if(value.error){
        return res.status(400).json({
            message:value.error.details[0].message,
        })
    }else {
        return next()
    }
}

export default commentValidation