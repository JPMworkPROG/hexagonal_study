
export default interface IGenericRepository<T> {
   create(entity: T): Promise<void>
   fetch(id: string): Promise<T>
   fetchAll(): Promise<T[]>
}