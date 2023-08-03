import mongoose, { Schema } from 'mongoose'

const productSchema = new Schema({
   id: { type: String, required: true },
   name: { type: String, required: true },
   price: { type: String, required: true },
   status: { type: String, required: true },
}
)

const productModel = mongoose.model('Item', productSchema)
const productDocument = new productModel()
export { productModel, productDocument }