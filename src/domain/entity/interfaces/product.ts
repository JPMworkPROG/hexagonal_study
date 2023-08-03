export default interface IProduct {
   isValid(): boolean
   enable(): void | Error
   disable(): void | Error
}

export enum ProductEnum {
   ENABLED = 'enabled',
   DISABLED = 'disabled'
}