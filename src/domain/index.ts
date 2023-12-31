import "reflect-metadata";
import { inject, injectable, } from "tsyringe"
import dependencies from "./dependency/container";
import IDatabase from "./ports/database";
import ProductService from "./service/product";

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
      // const product = new Product('id', 'name', ProductEnum.ENABLED, 'price')

      // await main.productService.create(product)
      const response1 = await main.productService.fetch('id')
      const response2 = await main.productService.fetchAll()

      console.log(response1);
      console.log(response2);
   }).catch(error => {
      console.log(error);
   })