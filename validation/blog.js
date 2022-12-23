import joi from 'joi'

const blogValidation = (req, res, next) =>{
    const blogSchema = joi.object().keys({
        title:joi.string().required().messages({
            "any.required":"blog title is required",
        }),
        description:joi.string().required().messages({
            "any.required":"blog description is required",
        }),
        content:joi.string().required(),
        comment:joi.string(),
        like:joi.string(),
        image:joi.object(),
    })
    console.log(req.body)
    const value = blogSchema.validate({...req.body,...req.files});
    if(value.error){
        return res.status(400).json({
            message:value.error.details[0].message,
        })
    }else {
        return next()
    }
}

export default blogValidation