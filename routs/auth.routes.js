const {Router} = require('express')
const router = Router()
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const {check, validationResult} = require('express-validator')
const User = require('../models/User')


router.post(
    '/register',
    [
        check('email','Incorrect email').isEmail(),
        check('password','Min 4 things').isLength({min:4})
    ],
    async (req, res) =>{
        try{
        const errors = validationResult(req)
        if (!errors.isEmpty()){
            return res.status(400).json({
                errors: errors.array(),
                message: 'Некорректные данные при регистрации, попробуйте снова'
            })
        }
        const {email, password} = req.body

        const candidate = await User.findOne({ email })

        if (candidate) {
            return res.status(400).json({message: 'Вы уже зарегистроированы'})
        }

        const hashB = await bcrypt.hash(password, 10)
        const user = new User({ email, password: hashB})

        await user.save()
        res.status(200).json({message: 'Пользователь зарегистрирован'})

    } catch (e) {
        res.status(500).json({message: "Incorrect answer"})
    }
})

router.post(
    '/login',
    [
        check('email','Input correct email').isEmail(),
        check('password','Input password').isLength({min:4})
    ],
    async (req, res) =>{
        try{
            const errors = validationResult(req)
            if (!errors.isEmpty()){
                return res.status(400).json({
                    errors: errors.array(),
                    message: 'Не те данные, попробуйте снова'
                })
            }
            const {email, password} = req.body

            const user = await User.findOne({ email })


            if (!user) {
                return res.status(400).json({message: 'У нас нет этого пользователя'})
            }
            const isEqual = await bcrypt.compare(password, user.password)


            if (!isEqual){
                return res.status(400).json({message: 'Неправильный пароль, попробуйте снова'})
            }

            const token = jwt.sign({userId: user.id}, "secret", {expiresIn: '1h'})

            res.json({token, userId: user.id})

        } catch (e) {
            res.status(500).json({message: "Что-то не так на сервере"})
        }

})


module.exports = router