<script setup lang="ts">
import ProductsController from '@controller/ProductsController/ProductsController.vue'
import AppLoader from '@component/AppLoader/AppLoader.vue'

</script>

<template>
  <header></header>
  <main>
    <ProductsController>
      <template #loading>
        <AppLoader />
      </template>
      <template #cards>
      </template>
    </ProductsController>
  </main>
  <footer></footer>
</template>
