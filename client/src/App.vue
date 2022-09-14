<script setup>
import { RouterLink, RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'
import FooterBar from './components/FooterBar.vue'

</script>

<template>
  <NavBar />
  <RouterView />
  <FooterBar />
</template>
