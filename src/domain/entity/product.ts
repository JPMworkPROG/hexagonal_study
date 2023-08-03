import IProduct, { ProductEnum } from "./interfaces/product";

export default class Product implements IProduct {
   private _id: string
   private _name: string
   private _status: string
   private _price: string

   constructor(id: string, name: string, status: ProductEnum.ENABLED | ProductEnum.DISABLED, price: string) {
      this._id = id
      this._name = name
      this._status = status
      this._price = price
   }

   isValid(): boolean {
      return this._price === ProductEnum.ENABLED ? true : false
   }
   enable(): void | Error {
      if (this._status === ProductEnum.ENABLED) {
         throw Error("Product is already enabled.")
      }
      this._status = ProductEnum.ENABLED
   }
   disable(): void | Error {
      if (this._status === ProductEnum.DISABLED) {
         throw Error("Product is already disable.")
      }
      this._status = ProductEnum.DISABLED
   }

   get id(): string {
      return this._id
   }

   get name(): string {
      return this._name
   }

   get status(): string {
      return this._status
   }

   get price(): string {
      return this._price
   }
}