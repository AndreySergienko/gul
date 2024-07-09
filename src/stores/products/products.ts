import {ref, shallowRef} from 'vue'
import { defineStore } from 'pinia'
import marketApi from '@modules/api/market'
import type {IOrder, IProduct, IResponseGetAllProducts, IResponseSaveOrder} from '@/stores/products/products.types'

/** Стор для работы с карточками пользователей */
export const useProductsStore = defineStore('global/products', () => {
  /** Состояние загрузки */
  const isLoading = shallowRef<boolean>(false)

  /** Список продуктов */
  const products = ref<IProduct[]>()

  /** Получить продукцию асинхронно */
  const fetchAllProducts = async () => {
    try {
      isLoading.value = true
      const data = await marketApi.getAllProduct<IResponseGetAllProducts>()
      if (!data.status) throw new Error('data is not defined')
      products.value = data.products
    } catch (e) {
      // Обработка ошибки/Вызов алёрта
    } finally {
      // isLoading.value = false
    }
  }

  /** Сохранить заказ */
  const saveOrders = async () => {
    try {
      const data = await marketApi.saveOrder<IResponseSaveOrder, IOrder>({ products: [] })
      if (!data.status) throw new Error('data is not defined')
    } catch (e) {
      // Обработка ошибки/Вызов алёрта
    }
  }
  return {
    products,
    fetchAllProducts,
    saveOrders,
    isLoading,
  }
})
