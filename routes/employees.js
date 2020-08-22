const express = require("express")
const router = express.Router();
const Employee = require("../models/employee")

router.get('/', async (req, res) => {
    try {
        const employees = await Employee.find()
        res.json(employees)
    }
    catch (error) {
        res.send("Error" + error)
    }
})

router.get('/:id', async (req, res) => {
    try {
        const employee = await Employee.findById(req.params.id)
        res.json(employee)
    }
    catch (error) {
        res.send("Error" + error)
    }
})

router.post('/', async (req, res) => {
    console.log(req.body)

    const employee = new Employee({
        name: req.body.name,
        gender: req.body.gender
    });

    try {
        const a1 = await employee.save()
        res.json(a1)

    } catch (error) {
        res.send(error)

    }
})

module.exports = router