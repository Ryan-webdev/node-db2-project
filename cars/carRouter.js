const express = require('express');

const db = require('../data/db-config');

const router = express.Router();

router.get('/', async (req, res, next) => {
    try {

        const cars = await db.select('*').from('cars')
        res.status(200).json(cars)

    } catch (error) {

        next(error)

    }
})

router.get('/:id', async(req, res, next)=> {
    try {

        const [car] = await db.select('*')
        .from('cars')
        .where('id', req.params.id)
        .limit(1)
        res.status(200).json(car)

    } catch (error) {

        next(error)

    }
})

router.post('/', async(req, res, next) => {
    try {
        const [id] = await db.insert({
           vin: req.body.vin,
           make: req.body.make,
           model: req.body.model,
           mileage: req.body.mileage,
           transmission: req.body.transmission,
           title: req.body.title,
        })
        .into('cars')

        const car = await db('cars')
        .where('id', id)
        .first()
        res.status(201).json(car)

    } catch (error) {

        next(error)

    }
})

router.put('/:id', async(req, res, next)=>{
    try {
        await db('cars')
        .update({
            vin: req.body.vin,
           make: req.body.make,
           model: req.body.model,
           mileage: req.body.mileage,
           transmission: req.body.transmission,
           title: req.body.title,
        })
        .where('id', req.params.id)

        const car = await db('cars')
        .where('id', req.params.id)
        .first()

        res.status(201).json(car)

    } catch (error) {
        next(error)
    }
})

router.delete('/:id', async(req, res, next)=> {
    try {
        await db('cars')
        .where('id', req.params.id)
        .del()
        
        res.status(204).end()
        
    } catch (error) {
        next(error)
    }
})

module.exports = router;