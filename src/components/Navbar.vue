import { navRouter } from '../router/index';
<script setup lang="ts">
import { navRouter } from "@/router";
</script>

<template>
  <div class="header-menu">
    <div class="menu-list">
      <router-link v-for="link of navRouter" :key="link.path" :to="link.path">{{
        link.title
      }}</router-link>
    </div>
  </div>
</template>

<style lang="sass" scoped>
.header-menu
    height: 123px
    min-width: 1460px
    box-sizing: border-box
    background-color: #251d1d
    border: 1px solid #bbb
    .menu-list
        width: 1460px
        margin: 0 auto
        height: 100%
</style>