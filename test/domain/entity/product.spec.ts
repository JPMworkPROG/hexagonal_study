import { ProductEnum } from "../../../src/domain/entity/interfaces/product"
import Product from "../../../src/domain/entity/product"

describe("Product entity unit tests", () => {
   describe("Should throw error when:", () => {
      test('activate an already activated product.', () => {
         expect(() => {
            new Product('id', 'name', ProductEnum.ENABLED, 'price').enable()
         }).toThrowError("Product is already enabled.")
      })

      test('disable an already disabled product.', () => {
         expect(() => {
            new Product('id', 'name', ProductEnum.DISABLED, 'price').disable()
         }).toThrowError("Product is already disable.")
      })
   })

   describe("Should sucess when:", () => {
      test("activate an already disabled product.", () => {
         const product = new Product('id', 'name', ProductEnum.ENABLED, 'price')
         product.disable()

         expect(product.status).toBe(ProductEnum.DISABLED)
      })

      test("disable an already activated product.", () => {
         const product = new Product('id', 'name', ProductEnum.DISABLED, 'price')
         product.enable()

         expect(product.status).toBe(ProductEnum.ENABLED)
      })
   })
})

export default {}