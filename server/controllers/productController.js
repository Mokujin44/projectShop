const uuid = require('uuid')
const path = require('path')
const {Product} = require('../models/models')
const ApiError = require('../error/ApiError')

class ProductController{
    async create(req,res,next){
        try{
            const {name, price, brandId,typeId,info} = req.body
            const {img} = req.files
            let fileName = uuid.v4() + ".jpg" 
            img.mv(path.resolve(__dirname,'..','static',fileName))


            const product = await Product.create({name, price, brandId, typeId, img: fileName})
        
            return res.json(product)
        }catch (e){
           next(ApiError.badRequest(e.message)) 
        }
    }

    async getAll(req,res){

    }
    async getOne(req,res){

    }
    
}

module.exports = new ProductController()