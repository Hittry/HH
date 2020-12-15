const {Router} = require('express')
const router = Router()
const Vac = require('../models/Vac')


router.post(
    '/professor',

    async (req, res) =>{
        try{
            const { prof } = req.body

            const vac = await Vac.findOne({ prof })
            if (!vac) {
                return res.status(400).json({message: 'Сначала ввидите изначальные данные'})
            }
            res.status(201).json(vac)

        } catch (e) {
            res.status(500).json({message: "Что-то с сервером"})
        }

    })


router.get('/:prof', async (req,res) => {
    try{
        const vac = await Vac.find({prof : req.params.prof})
        res.status(201).json(vac)
    }catch (e) {
        res.status(500).json({message: "Что-то с сервером"})
    }
})



module.exports = router