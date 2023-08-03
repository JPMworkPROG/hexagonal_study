import Product from '../../../../domain/entity/product';
import IProductRepository from '../../../../domain/repository/interface/product'
import { productModel } from '../model/product';

export default class ProductRepository implements IProductRepository {
   async create(entity: Product): Promise<void> {
      await productModel.create({id:entity.id, name: entity.name, price: entity.price, status: entity.status})
   }
   async fetch(id: string): Promise<Product> {
      return await productModel.findById(id)
   }
   async fetchAll(): Promise<Product[]> {
      return await productModel.find({})
   }
}