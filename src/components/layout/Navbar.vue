<script setup>
import { ref } from 'vue'
import { RouterLink, useRoute } from 'vue-router'

const route = useRoute()
const isMenuOpen = ref(false)

const navItems = [
  { name: '首页', path: '/' },
  { name: '公益科普', path: '/science' },
  { name: '典型案例', path: '/cases' },
  { name: '数据监测', path: '/dashboard' },
  { name: '价值实现', path: '/value' },
  { name: '公益故事', path: '/stories' },
  { name: '倡议留言', path: '/community' },
  { name: '关于本站', path: '/about' }
]

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}
</script>

<template>
  <header class="bg-white shadow-sm sticky top-0 z-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16">
        <!-- Logo -->
        <div class="flex-shrink-0 flex items-center">
          <RouterLink to="/" class="flex items-center gap-2">
            <div class="w-8 h-8 rounded-full bg-eco-green flex items-center justify-center">
              <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <span class="font-bold text-xl text-eco-green hidden sm:block">石漠化治理公益科普</span>
          </RouterLink>
        </div>

        <!-- Desktop Menu -->
        <nav class="hidden md:flex space-x-1 lg:space-x-4 items-center">
          <RouterLink 
            v-for="item in navItems" 
            :key="item.path" 
            :to="item.path"
            class="px-3 py-2 rounded-md text-sm font-medium transition-colors"
            :class="route.path === item.path ? 'text-eco-green bg-eco-light' : 'text-gray-600 hover:text-eco-green hover:bg-eco-light/50'"
          >
            {{ item.name }}
          </RouterLink>
        </nav>

        <!-- Mobile menu button -->
        <div class="flex items-center md:hidden">
          <button 
            @click="toggleMenu" 
            class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none"
          >
            <span class="sr-only">打开主菜单</span>
            <svg class="h-6 w-6" v-if="!isMenuOpen" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <svg class="h-6 w-6" v-else fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Menu -->
    <div v-show="isMenuOpen" class="md:hidden bg-white border-t border-gray-100">
      <div class="px-2 pt-2 pb-3 space-y-1">
        <RouterLink 
          v-for="item in navItems" 
          :key="item.path" 
          :to="item.path"
          @click="isMenuOpen = false"
          class="block px-3 py-2 rounded-md text-base font-medium"
          :class="route.path === item.path ? 'text-eco-green bg-eco-light' : 'text-gray-600 hover:text-eco-green hover:bg-eco-light/50'"
        >
          {{ item.name }}
        </RouterLink>
      </div>
    </div>
  </header>
</template>