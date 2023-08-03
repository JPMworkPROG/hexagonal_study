import { inject, injectable } from "tsyringe"
import Product from "../entity/product"
import IProductRepository from "../repository/interface/product"

@injectable()
export default class ProductService {

   constructor(@inject("productRepository") public productRepository: IProductRepository) {
      this.productRepository = productRepository
   }

   async create(entity: Product): Promise<void> {
      await this.productRepository.create(entity)
   }
   async fetch(id: string): Promise<Product> {
      return await this.productRepository.fetch(id)
   }
   async fetchAll(): Promise<Product[]> {
      return await this.productRepository.fetchAll()
   }
}