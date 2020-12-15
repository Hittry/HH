const {Router} = require('express')
const router = Router()
const Vac = require('../models/Vac')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const User = require('../models/User')

router.post('/exp', async (req, res) => {
    try{
        const {username, prof, rate, exp, phone, education} = req.body
        const vaca = new Vac({
            username, prof,rate, exp, phone, education
        })
        await vaca.save()
        //res.status(201).json({ vaca })
        res.status(201).json({message: 'Ваше объявление создано'})
    } catch (e) {
        res.status(500).json({message: "Что-то с сервером"})
    }
})

router.get('/vacantion', async (req,res) => {
    try{
        const vac = await Vac.find()
        res.status(201).json(vac)
    }catch (e) {
        res.status(500).json({message: "Incorrect answer!!!"})
    }
})

router.get('/:username', async (req,res) => {
    try{
        const vac = await Vac.find({username : req.params.username})
        res.status(201).json(vac)
    }catch (e) {
        res.status(500).json({message: "Incorrect answer!!!"})
    }
})

router.post(
    '/change',

    async (req, res) =>{
        try{
            const {email, password} = req.body

            const hashB = await bcrypt.hash(password, 10)

            const user = await User.findOne({ email })
            if (!user) {
                return res.status(400).json({message: 'У нас нет этого пользователя'})
            }
            user.password = hashB

            await user.save()

            const token = jwt.sign({userId: user.id}, "secret", { expiresIn: '1h'})

            res.json({token, userId: user.id})

        } catch (e) {
            res.status(500).json({message: "Incorrect answer"})
        }

    })

router.post(
    '/info',

    async (req, res) =>{
        try{
            const {username ,prof, rate, exp, phone, education} = req.body

            const vac = await Vac.findOne({ username })
            if (!vac) {
                return res.status(400).json({message: 'Сначала ввидите изначальные данные'})
            }
            vac.username = username
            vac.prof = prof
            vac.rate = rate
            vac.exp = exp
            vac.phone = phone
            vac.education = education

            await vac.save()

            res.status(201).json({message: "Ваше описание вакансии обновлено"})

        } catch (e) {
            res.status(500).json({message: "Что-то с сервером"})
        }

    })

router.post(
    '/find',

    async (req, res) =>{
        try{
            const {username} = req.body

            const vac = await Vac.findOne({ username })
            if (!vac) {
                return res.status(400).json({message: 'Сначала ввидите изначальные данные'})
            }
            res.status(201).json(vac)

        } catch (e) {
            res.status(500).json({message: "что-то с сервером"})
        }

    })


module.exports = router