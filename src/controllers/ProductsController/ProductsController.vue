<template>
  <div class="products">
    <div class="products__form">
      <slot name="form" />
    </div>

    <slot v-if="productsStore.isLoading" name="loading" />
    <slot v-else-if="productsStore.products" name="products" :products="productsStore.products" />
    <p v-else><b>Пусто!</b></p>
  </div>
</template>

<script setup lang="ts">
import {useProductsStore} from '@/stores/products/products'
import {onMounted} from 'vue'
import type {IProductsControllerSlots} from '@controller/ProductsController/ProductsController.types'

defineSlots<IProductsControllerSlots>()

const productsStore = useProductsStore()
onMounted(productsStore.fetchAllProducts)
</script>
