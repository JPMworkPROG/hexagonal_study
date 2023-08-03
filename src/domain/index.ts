import "reflect-metadata";
import { inject, injectable, } from "tsyringe"
import dependencies from "./dependency/container";
import IDatabase from "./ports/database";
import ProductService from "./service/product";
import Product from "./entity/product";
import { ProductEnum } from "./entity/interfaces/product";

@injectable()
class Main {

   constructor(
      @inject("database") public database: IDatabase,
      @inject("productService") public productService: ProductService
   ) {
      this.database = database
      this.productService = productService
   }
}

const main = dependencies.resolve<Main>(Main);

main.database.connect()
   .then(async () => {
      console.log("Connected!")
      const product = new Product('id', 'name', ProductEnum.ENABLED, 'price')

      await main.productService.create(product)
      const response = await main.productService.fetchAll()

      console.log(response);
   }).catch(error => {
      console.log(error);
   })