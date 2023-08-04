import { ProductEnum } from "../entity/interfaces/product";
import Product from "../entity/product";

export default class ProductDTO {
   static toDomain(data: productExternalType): Product {
      return new Product(data.id, data.name, data.status as ProductEnum, data.price)
   }
   
   static fromDomain(data: Product): productExternalType {
      return new Product(data.id, data.name, data.status as ProductEnum, data.price)
   }
}

type productExternalType = {
   id: string,
   name: string,
   price: string,
   status: string
}