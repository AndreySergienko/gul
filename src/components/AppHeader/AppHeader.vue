<template>
  <header class="header">
    <div class="header__inner">
      <nav class="nav">
<!--   В идеале декомпозировать из хедера, интегрировать сюда составные части, т.к шапка может меняться     -->
        <ul class="nav__list">
          <li class="nav__item" v-for="nav in navList" :key="nav.title">
            <a :href="nav.link" class="nav__link">{{ nav.title }}</a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
import type {IAppHeaderProps} from '@component/AppHeader/AppHeader.types'

defineProps<IAppHeaderProps>()
</script>

<style scoped>
.header {
  background: var(--brown);
  padding: var(--gap-m);
  border: 1px solid black;

  /** TODO вынести в mixin */
  -webkit-box-shadow: 4px 4px 8px 0 rgba(0, 0, 0, 0.2);
  -moz-box-shadow: 4px 4px 8px 0 rgba(0, 0, 0, 0.2);
  box-shadow: 4px 4px 8px 0 rgba(0, 0, 0, 0.2);
}

.nav__list {
  display: flex;
  justify-content: center;
  gap: var(--gap-m);

  list-style: none;
}

.nav__link {
  color: white;
  font-size: 20px;
  text-decoration: none;

  -webkit-text-fill-color: white;
  text-shadow:
    -1px -1px 0 black,
    1px -1px 0 black,
    -1px 1px 0 black,
    1px 1px 0 black;
}

/* TODO сделать mixin */
@media(max-width: 720px) {
  .header {
    border: none;
  }

  .nav__link {
    font-size: 14px;
    text-shadow: none;
  }
}
</style>
