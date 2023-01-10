import joi from 'joi'

const userValidation = (req, res, next) =>{
//   const pattern = "/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/";
    const userSchema = joi.object().keys({
        names:joi.string().required().min(5).max(200),

        email:joi.string().required(),

        password:joi.string()
        // .regex(RegExp(pattern)) // you have to put it in this way and it will work :)
        .required()
        .min(8)
        .max(20),
                  
        role:joi.string().required(),
       
    })
    console.log(req.body)
    const value = userSchema.validate(req.body);
    if(value.error){
        return res.status(400).json({
            message:value.error.details[0].message,
        })
    }else {
        return next()
    }
}

export default userValidation