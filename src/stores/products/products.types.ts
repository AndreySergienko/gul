import type {IApiResponse} from '@type/api.types'

export interface IProduct {
  id: number;
  // Наименование товара
  title: string;
  // Цена за единицу
  price: number;
}

export interface IResponseGetAllProducts extends IApiResponse {
  products: IProduct[]
}

export interface IResponseSaveOrder extends IApiResponse {
  code: string
}

export interface IOrder {
  /** Такое лучше не допускать, для этого мэппаем данные **/
  product_id: number
  quantity: number
}
