import type {IProduct} from '@/stores/products/products.types'

interface IProductsSlot {
  products: IProduct[]
}

export interface IProductsControllerSlots {
  'products'(props: IProductsSlot): void
  'loading'(props: void): void
}
