const Resume = require('../resume/models/Resume')

const validateResume = (req, res, next) =>{
    try {
        let errors = {}
        if(!req.body.first_name || req.body.first_name.length === 0){
            errors.first_name = 'Поле Имя обязательное'
        }
        if(!req.body.last_name || req.body.last_name.length === 0){
            errors.last_name = 'Поле Фамилия обязательное'
        }
        if(!req.body.phone || req.body.phone.length === 0){
            errors.phone = 'Поле Телефон обязательное'
        }
        if(!req.body.position || req.body.position.length === 0){
            errors.position = 'Поле Желаемая должность обязательное'
        }
        if(!req.body.about || req.body.about.length === 0){
            errors.about = 'Поле О себе обязательное'
        }

        if(JSON.stringify(errors) !== JSON.stringify({})){
            res.status(400).send(errors)
        }else{
            next()
        }
    } catch (error) {
        res.status(500).send(error)
    }
}

const isAuthorOfResume = async(req, res, next) =>{
    try {
        const id = req.params.id || req.body.id
        const resume = await Resume.findByPk(id)
        if(!resume) res.status(400).send({message: "Resume with that id not found"})
        else if(resume && req.user.id === resume.user_id) next();
        else res.status(403).send({message: 'Access forbiden'})
    } catch (error) {
        res.status(500).send(error)
    }
}

module.exports = {
    validateResume,
    isAuthorOfResume
}