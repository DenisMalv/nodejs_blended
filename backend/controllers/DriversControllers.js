const asyncHandler = require('express-async-handler')
const Driver = require('../models/driver')

class DriversController {

    save = asyncHandler( async (req,res) => {
        // zapros na bd
        // console.log("req.body",req.body)
        const {email} = req.body
        const isExists = await Driver.findOne({email}) 
        if(isExists){
            res.status(400)
            throw new Error("User already exist")
        }

        const newDriver = await Driver({...req.body})
        if(!newDriver){
           res.status(400)
           throw new Error("BAD REQUEST")
        }
        // console.log(newDriver)
        await newDriver.save()
        res.status(201).json({code:201,data:newDriver})
        }
    )
    getAll = asyncHandler( async (req,res) => {
        // zapros na bd
         res.send('getAll')
        }
    )
    getOne = asyncHandler( async (req,res) => {
        // zapros na bd
         res.send('getOne')
        }
    )
    update = asyncHandler( async (req,res) => {
        // zapros na bd
         res.send('update')
        }
    )
    remove = asyncHandler( async (req,res) => {
        // zapros na bd
         res.send('delete')
        }
    )
}

module.exports = new DriversController();