import mongoose from "mongoose";
import IDatabase from "../../domain/ports/database";
import { injectable } from "tsyringe";

@injectable()
export default class MongoDb implements IDatabase {
   async connect(): Promise<void> {
      await mongoose.connect('mongodb://admin:12345@localhost:27017/?authMechanism=DEFAULT')
   }

}