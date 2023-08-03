import { container } from "tsyringe";
import IDatabase from "../ports/database";
import MongoDb from "../../infra/adapters/mongodb";
import IProductRepository from "../repository/interface/product";
import ProductRepository from "../../infra/database/mongodb/repository/product";
import ProductService from "../service/product";

const dependencies = container
dependencies.register<IDatabase>("database", { useClass: MongoDb });
dependencies.register<ProductService>("productService", { useClass: ProductService });
dependencies.register<IProductRepository>("productRepository", { useClass: ProductRepository });

export default dependencies