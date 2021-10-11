export interface IConnectionOther {

  put: (tableName: string, item: { [key: string]: any }) => Promise<any>

  get: (tableName: string, id: string) => Promise<any>

}
