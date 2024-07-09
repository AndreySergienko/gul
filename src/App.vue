<script setup lang="ts">
import ProductsController from '@controller/ProductsController/ProductsController.vue'
import AppLoader from '@component/AppLoader/AppLoader.vue'
import AppHeader from '@component/AppHeader/AppHeader.vue'
import {headerData} from '@component/AppHeader/AppHeader.data'
</script>

<template>
  <AppHeader :nav-list="headerData" />
  <main class="main">
    <ProductsController>
      <template #loading>
        <AppLoader />
      </template>
      <template #products>
      </template>
    </ProductsController>
  </main>
  <footer></footer>
</template>

<style scoped>
.main {
  margin: var(--gap-m) 0;

  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
