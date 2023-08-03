import Product from "../../entity/product";
import IGenericRepository from "./generic"

export default interface IProductRepository extends IGenericRepository<Product> {
   
}