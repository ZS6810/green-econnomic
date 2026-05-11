<script setup>
import { ref, onMounted } from 'vue'
import { RouterLink } from 'vue-router'
import { useTransition } from '@vueuse/core'

// 模拟数据
const features = [
  { id: 1, title: '石漠化科普', desc: '认识地球癌症，了解生态危机', icon: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253', link: '/science' },
  { id: 2, title: '治理案例', desc: '见证西畴海雀等示范村落蜕变', icon: 'M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9', link: '/cases' },
  { id: 3, title: '数据监测', desc: '直观感受生态修复背后的数据力量', icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z', link: '/dashboard' },
  { id: 4, title: '价值实现', desc: '探寻绿水青山转化为金山银山的路径', icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z', link: '/value' }
]

const news = [
  { id: 1, title: '西南地区喀斯特地貌石漠化治理取得显著成效', date: '2026-04-15', category: '治理动态' },
  { id: 2, title: '最新生态价值核算报告：绿水青山就是金山银山', date: '2026-04-10', category: '科研成果' },
  { id: 3, title: '从“不毛之地”到“生态绿洲”：西畴精神的当代回响', date: '2026-04-05', category: '典型事迹' }
]

// 动画数据
const targetArea = ref(0)
const targetValue = ref(0)
const targetPeople = ref(0)

const displayArea = useTransition(targetArea, { duration: 2000 })
const displayValue = useTransition(targetValue, { duration: 2000 })
const displayPeople = useTransition(targetPeople, { duration: 2000 })

onMounted(() => {
  // 模拟数据加载后触发动画
  setTimeout(() => {
    targetArea.value = 3450 // 万公顷
    targetValue.value = 125 // 亿元 (GEP)
    targetPeople.value = 560 // 万人 (受益人口)
  }, 300)
})
</script>

<template>
  <div class="home">
    <!-- Hero Section -->
    <section class="relative h-[80vh] flex items-center justify-center overflow-hidden">
      <div class="absolute inset-0 z-0">
        <!-- 占位背景图 -->
        <img src="https://images.unsplash.com/photo-1542224566-6e85f2e6772f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" alt="生态风光" class="w-full h-full object-cover" />
        <div class="absolute inset-0 bg-black/40"></div>
      </div>
      
      <div class="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 class="text-4xl md:text-6xl font-bold mb-6 drop-shadow-lg">让石漠披绿，让生态生金</h1>
        <p class="text-xl md:text-2xl mb-10 text-gray-200 drop-shadow-md">
          探索石漠化治理的中国智慧，见证“地球癌症”向“绿水青山”的美丽蜕变。
        </p>
        <RouterLink to="/science" class="inline-block bg-eco-green hover:bg-eco-dark text-white font-bold py-3 px-8 rounded-full transition-colors text-lg shadow-lg">
          开启探索之旅
        </RouterLink>
      </div>
    </section>

    <!-- 公益简介 -->
    <section class="py-20 bg-white">
      <div class="max-w-4xl mx-auto px-4 text-center">
        <h2 class="text-3xl font-bold text-eco-green mb-8 relative inline-block">
          公益使命
          <span class="absolute bottom-0 left-1/4 w-1/2 h-1 bg-earth-brown rounded-full"></span>
        </h2>
        <p class="text-lg text-gray-600 leading-relaxed">
          本站是一个致力于石漠化治理科普与生态产品价值实现理念传播的纯公益平台。<br>
          我们希望通过真实的数据、生动的案例和直观的可视化，让更多人了解石漠化这一“地球癌症”的严峻性，
          同时展示生态修复带来的不仅是环境的改善，更是切实的生态价值转化。
        </p>
      </div>
    </section>

    <!-- 核心栏目快捷入口 -->
    <section class="py-16 bg-eco-light/30">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <RouterLink 
            v-for="item in features" 
            :key="item.id"
            :to="item.link"
            class="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow group flex flex-col items-center text-center border border-gray-100 hover:border-eco-green/30"
          >
            <div class="w-16 h-16 rounded-full bg-eco-light flex items-center justify-center mb-6 group-hover:bg-eco-green transition-colors">
              <svg class="w-8 h-8 text-eco-green group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :d="item.icon"></path>
              </svg>
            </div>
            <h3 class="text-xl font-bold text-gray-800 mb-3 group-hover:text-eco-green transition-colors">{{ item.title }}</h3>
            <p class="text-gray-500 text-sm">{{ item.desc }}</p>
          </RouterLink>
        </div>
      </div>
    </section>

    <!-- 公益动态数据概览 -->
    <section class="py-20 bg-earth-brown text-white relative overflow-hidden">
      <!-- 背景装饰 -->
      <div class="absolute inset-0 opacity-10 pattern-dots"></div>
      
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="text-center mb-16">
          <h2 class="text-3xl font-bold mb-4">治理成果概览</h2>
          <p class="text-earth-light">用数据见证生态环境的持续向好</p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          <div class="p-6">
            <div class="text-5xl font-bold mb-4 flex justify-center items-baseline gap-1">
              {{ Math.round(displayArea) }}<span class="text-xl text-earth-light">万公顷</span>
            </div>
            <p class="text-lg">累计治理石漠化面积</p>
          </div>
          
          <div class="p-6 border-y md:border-y-0 md:border-x border-earth-light/30">
            <div class="text-5xl font-bold mb-4 flex justify-center items-baseline gap-1">
              {{ Math.round(displayValue) }}<span class="text-xl text-earth-light">亿元</span>
            </div>
            <p class="text-lg">生态产品总值 (GEP) 提升</p>
          </div>
          
          <div class="p-6">
            <div class="text-5xl font-bold mb-4 flex justify-center items-baseline gap-1">
              {{ Math.round(displayPeople) }}<span class="text-xl text-earth-light">万人</span>
            </div>
            <p class="text-lg">生态治理惠及群众</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 最新公益资讯 -->
    <section class="py-20 bg-white">
      <div class="max-w-4xl mx-auto px-4">
        <div class="flex justify-between items-end mb-10">
          <h2 class="text-3xl font-bold text-gray-800">最新资讯</h2>
          <RouterLink to="/stories" class="text-eco-green hover:underline text-sm font-medium">查看更多 &rarr;</RouterLink>
        </div>
        
        <div class="space-y-6">
          <div v-for="item in news" :key="item.id" class="group block bg-white border border-gray-100 rounded-lg p-6 hover:shadow-md transition-all">
            <div class="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <span class="inline-block px-3 py-1 bg-eco-light text-eco-dark text-xs rounded-full mb-3">{{ item.category }}</span>
                <h3 class="text-xl font-semibold text-gray-800 group-hover:text-eco-green transition-colors cursor-pointer">{{ item.title }}</h3>
              </div>
              <div class="text-sm text-gray-400 whitespace-nowrap">
                {{ item.date }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.pattern-dots {
  background-image: radial-gradient(#ffffff 2px, transparent 2px);
  background-size: 30px 30px;
}
</style>