const {Router} = require('express')
const router = Router()
const Comp = require('../models/Company')

router.post('/companyCreate', async (req, res) => {
    try{
        const {compname, description, vac, phone, location} = req.body
        const company_alert = new Comp({
            compname, description, vac, phone, location
        })
        await company_alert.save()
        //res.status(201).json({ vaca })
        res.status(201).json({message: 'Ваше объявление от компании создано'})
    } catch (e) {
        res.status(500).json({message: "Что-то с сервером"})
    }
})

router.get('/companyVac', async (req,res) => {
    try{
        const company_all = await Comp.find()
        res.status(201).json(company_all)
    }catch (e) {
        res.status(500).json({message: "Сервер отвалился"})
    }
})

router.post(
    '/findCompany',

    async (req, res) =>{
        try{
            const {compname} = req.body

            const your_company_vac = await Comp.findOne({ compname })
            if (!your_company_vac) {
                return res.status(400).json({message: 'Сначала ввидите изначальные данные'})
            }
            res.status(201).json(your_company_vac)

        } catch (e) {
            res.status(500).json({message: "что-то с сервером"})
        }

    })


router.get('/:compname', async (req,res) => {
    try{
        const own_company = await Comp.find({compname : req.params.compname})
        res.status(201).json(own_company)
    }catch (e) {
        res.status(500).json({message: "Сервер отлетел"})
    }
})


router.post(
    '/infoCompany',

    async (req, res) =>{
        try{
            const {compname, phone, location} = req.body

            const find_your_company = await Comp.findOne({ compname })
            if (!find_your_company) {
                return res.status(400).json({message: 'Такой компании нет, или вы ввели что-то не так'})
            }

            find_your_company.phone = phone
            find_your_company.location = location

            await find_your_company.save()

            res.status(201).json({message: "Ваше описание компании обновлено"})

        } catch (e) {
            res.status(500).json({message: "Что-то с сервером"})
        }

    })


router.post(
    '/deleteCompany',

    async (req, res) =>{
        try{
            const {compname, description} = req.body

            const your_company_for_delete = await Comp.findOne({ compname, description })
            if (!your_company_for_delete) {
                return res.status(400).json({message: 'Такой вакансии нет'})
            }

            await your_company_for_delete.delete()

            res.status(201).json({message: "Ваше объявление удалено"})

        } catch (e) {
            res.status(500).json({message: "что-то с сервером"})
        }

    })




module.exports = router