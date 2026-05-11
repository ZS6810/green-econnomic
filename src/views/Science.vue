<script setup>
import { ref } from 'vue'

const tabs = ['定义与成因', '等级分类', '分布范围', '生态危害', '基础修复']
const activeTab = ref(0)

const content = [
  {
    title: '什么是石漠化？',
    desc: '石漠化（Rocky Desertification）全称石质荒漠化，是指在喀斯特脆弱生态环境下，由于人类不合理社会经济活动的干扰破坏，造成植被破坏、水土流失，导致岩石大面积裸露，土地生产力衰退甚至丧失的地表退化过程。它被称为“地球癌症”。',
    causes: ['自然因素：喀斯特地貌碳酸盐岩成土极慢（一万年可能才形成1厘米土层），降水集中且多暴雨。', '人为因素：过度开垦、过度放牧、乱砍滥伐等导致植被破坏，加剧水土流失。']
  },
  {
    title: '石漠化等级分类',
    levels: [
      { name: '轻度石漠化', desc: '岩石裸露率 30%-50%，植被覆盖度 30%-50%。' },
      { name: '中度石漠化', desc: '岩石裸露率 50%-70%，植被覆盖度 10%-30%。' },
      { name: '重度石漠化', desc: '岩石裸露率 70%-90%，植被覆盖度 <10%。' },
      { name: '极重度石漠化', desc: '岩石裸露率 >90%，几乎无植被，完全丧失土地生产力。' }
    ]
  },
  {
    title: '我国石漠化分布情况',
    desc: '中国是世界上喀斯特地貌分布最广的国家之一。石漠化主要集中在西南地区，包括贵州、云南、广西、湖南、湖北、重庆、四川、广东等8个省（区、市）。其中，滇黔桂三省区交界处是石漠化最为严重的区域。',
    image: '/static/pic/微信图片_20260505232817_80_1391.jpg'
  },
  {
    title: '石漠化的生态危害',
    hazards: [
      { icon: 'M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z', text: '水土流失加剧，水源涵养能力下降。' },
      { icon: 'M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z', text: '土地生产力衰退，导致当地群众贫困。' },
      { icon: 'M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z', text: '生物多样性锐减，生态系统失衡。' },
      { icon: 'M13 10V3L4 14h7v7l9-11h-7z', text: '自然灾害频发，如旱涝、滑坡、泥石流。' }
    ]
  },
  {
    title: '基础生态修复知识',
    desc: '石漠化治理需要坚持“保护优先、自然恢复为主，人工修复为辅”的原则。',
    methods: [
      { name: '封山育林', desc: '依靠自然力量恢复植被，是最经济有效的措施。' },
      { name: '退耕还林还草', desc: '在坡度大于25度的陡坡地停止耕种，恢复林草植被。' },
      { name: '水土保持工程', desc: '修建坡改梯、挡土墙、蓄水池等小型水利水保工程。' },
      { name: '生态经济型林业', desc: '种植核桃、花椒、火龙果等既有生态效益又有经济效益的植物，实现生态与富民双赢。' }
    ]
  }
]
</script>

<template>
  <div class="py-12 bg-white min-h-screen">
    <div class="max-w-4xl mx-auto px-4">
      <div class="text-center mb-16">
        <h1 class="text-4xl font-bold text-gray-900 mb-4">认识“地球癌症”</h1>
        <p class="text-xl text-gray-600">普及石漠化知识，唤起生态保护意识</p>
      </div>

      <!-- Tabs Navigation -->
      <div class="flex flex-wrap justify-center gap-2 mb-12 border-b border-gray-200 pb-4">
        <button 
          v-for="(tab, index) in tabs" 
          :key="index"
          @click="activeTab = index"
          class="px-6 py-2 rounded-full text-sm font-medium transition-all duration-300"
          :class="activeTab === index ? 'bg-eco-green text-white shadow-md' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'"
        >
          {{ tab }}
        </button>
      </div>

      <!-- Tab Content -->
      <div class="bg-eco-light/20 rounded-2xl p-8 md:p-12 shadow-sm border border-eco-light transition-all duration-500">
        
        <!-- 定义与成因 -->
        <div v-show="activeTab === 0" class="animate-fade-in">
          <h2 class="text-2xl font-bold text-eco-dark mb-6">{{ content[0].title }}</h2>
          <p class="text-gray-700 text-lg leading-relaxed mb-8">{{ content[0].desc }}</p>
          
          <div class="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
            <h3 class="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
              <svg class="w-6 h-6 text-earth-brown" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
              成因分析
            </h3>
            <ul class="space-y-4">
              <li v-for="(cause, i) in content[0].causes" :key="i" class="flex items-start gap-3">
                <span class="w-2 h-2 mt-2 rounded-full bg-earth-brown flex-shrink-0"></span>
                <span class="text-gray-600 leading-relaxed">{{ cause }}</span>
              </li>
            </ul>
          </div>
        </div>

        <!-- 等级分类 -->
        <div v-show="activeTab === 1" class="animate-fade-in">
          <h2 class="text-2xl font-bold text-eco-dark mb-8">{{ content[1].title }}</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div v-for="(level, i) in content[1].levels" :key="i" 
                 class="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:border-eco-green/50 transition-colors">
              <h3 class="text-lg font-bold text-gray-800 mb-2" 
                  :class="{'text-yellow-600': i===0, 'text-orange-500': i===1, 'text-red-500': i===2, 'text-red-800': i===3}">
                {{ level.name }}
              </h3>
              <p class="text-gray-600 text-sm leading-relaxed">{{ level.desc }}</p>
            </div>
          </div>
        </div>

        <!-- 分布范围 -->
        <div v-show="activeTab === 2" class="animate-fade-in">
          <h2 class="text-2xl font-bold text-eco-dark mb-6">{{ content[2].title }}</h2>
          <p class="text-gray-700 text-lg leading-relaxed mb-8">{{ content[2].desc }}</p>
          <div class="rounded-xl overflow-hidden shadow-md">
            <!-- 使用占位图代表地图分布 -->
            <img :src="content[2].image" alt="分布区域示意" class="w-full h-64 object-cover" />
            <div class="bg-gray-800 text-gray-300 text-xs p-2 text-center">图示：西南喀斯特地区地形风貌</div>
          </div>
        </div>

        <!-- 生态危害 -->
        <div v-show="activeTab === 3" class="animate-fade-in">
          <h2 class="text-2xl font-bold text-eco-dark mb-8">{{ content[3].title }}</h2>
          <div class="space-y-4">
            <div v-for="(hazard, i) in content[3].hazards" :key="i" 
                 class="flex items-center gap-4 bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
              <div class="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center flex-shrink-0">
                <svg class="w-6 h-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="hazard.icon" />
                </svg>
              </div>
              <p class="text-gray-700">{{ hazard.text }}</p>
            </div>
          </div>
        </div>

        <!-- 基础修复 -->
        <div v-show="activeTab === 4" class="animate-fade-in">
          <h2 class="text-2xl font-bold text-eco-dark mb-6">{{ content[4].title }}</h2>
          <p class="text-gray-700 text-lg leading-relaxed mb-8">{{ content[4].desc }}</p>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div v-for="(method, i) in content[4].methods" :key="i" 
                 class="bg-white p-6 rounded-xl border-l-4 border-eco-green shadow-sm">
              <h3 class="text-lg font-bold text-gray-800 mb-2">{{ method.name }}</h3>
              <p class="text-gray-600 text-sm leading-relaxed">{{ method.desc }}</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<style scoped>
.animate-fade-in {
  animation: fadeIn 0.5s ease-in-out;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>