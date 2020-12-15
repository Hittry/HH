const {Router} = require('express')
const router = Router()
const Vac = require('../models/Vac')


router.post(
    '/rat',
    async (req, res) =>{
        try{
            const {username ,rate} = req.body

            const vac = await Vac.findOne({ username })
            if (!vac) {
                return res.status(400).json({message: 'Такого пользователя не существует'})
            }

            vac.rate =vac.rate + `\n` + 'Новый отзыв: '+ rate
            console.log(vac.rate)

            await vac.save()

            res.status(201).json({message: "Отзыв добавлен. Спасибо, что поддерживаете активность"})

        } catch (e) {
            res.status(500).json({message: "Что-то с сервером!!!!"})
        }

    })

module.exports = router