<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';
</script>

<template>
  <Navbar></Navbar>
  <router-view></router-view>
  <Footer></Footer>
</template>

<style lang="sass">
html
  width: 100%
  height: 100%
  
  body
    width: 100%
    height: 100%

    #app
      width: 100%
      height: 100%
</style>
