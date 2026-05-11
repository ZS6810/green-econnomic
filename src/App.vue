<script setup>
import { RouterView } from 'vue-router'
import Navbar from './components/layout/Navbar.vue'
import Footer from './components/layout/Footer.vue'
</script>

<template>
  <div class="min-h-screen flex flex-col font-sans text-gray-800 bg-eco-light/30">
    <Navbar />
    
    <main class="flex-grow">
      <RouterView />
    </main>

    <Footer />
  </div>
</template>
