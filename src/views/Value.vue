<script setup>
// 获取 Vite 配置的 base，确保部署后图片路径正确
const base = import.meta.env.BASE_URL

const galleryItems = [
  { id: 1, title: '高山云雾茶', desc: '利用石漠化治理区的小气候，发展生态茶园，每亩产值过万元。', image: base + 'static/pic/微信图片_20260505231704_78_1391.png' },
  { id: 2, title: '石漠核桃', desc: '核桃树根系发达，既能固土保水，其果实又是村民的“摇钱树”。', image: base + 'static/pic/微信图片_20260505231701_77_1391.png' },
  { id: 3, title: '红心火龙果', desc: '耐旱抗瘠薄的火龙果，在石山间绽放红色生机，带动村集体经济增收。', image: base + 'static/pic/微信图片_20260505231656_76_1391.png' },
  { id: 4, title: '中药材种植', desc: '林下套种黄精、重楼等中药材，实现生态效益与经济效益双丰收。', image: 'https://images.unsplash.com/photo-1611077544903-8833357fb80a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' },
  { id: 5, title: '生态康养旅游', desc: '昔日“地球癌症”蜕变为“国家森林公园”，吸引游客，带动农家乐发展。', image: 'https://images.unsplash.com/photo-1506012787146-f92b2d7d6d96?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' },
  { id: 6, title: '碳汇交易', desc: '通过造林增汇，参与国家核证自愿减排量(CCER)交易，实现“卖空气”赚钱。', image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' }
]

const processSteps = [
  { icon: 'M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15', title: '1. 石漠化修复', desc: '封山育林，退耕还林，工程措施与生物措施结合，恢复地表植被。' },
  { icon: 'M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z', title: '2. 生态资源保育', desc: '涵养水源，保持水土，改善局部小气候，提升生态系统稳定性。' },
  { icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z', title: '3. 生态价值转化', desc: '发展生态农业、林下经济、生态旅游及碳汇交易，将资源变资产。' },
  { icon: 'M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5', title: '4. 富民惠民', desc: '带动当地群众就业增收，消除绝对贫困，实现生态振兴与乡村振兴的统一。' }
]
</script>

<template>
  <div class="py-12 bg-white min-h-screen">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

      <!-- 概念科普区 -->
      <div class="text-center mb-16">
        <h1 class="text-4xl font-bold text-gray-900 mb-4">生态产品价值实现</h1>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto">
          绿水青山就是金山银山。生态产品价值实现，是指将良好的生态环境及其提供的物质产品、调节服务和文化服务，通过市场化或政府补偿机制转化为经济效益的过程。
        </p>
      </div>

      <!-- 转化模式流程图 -->
      <div class="mb-24">
        <h2 class="text-2xl font-bold text-center text-eco-dark mb-10">石漠化治理的价值转化路径</h2>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          <!-- 连接线 (仅PC端) -->
          <div class="hidden lg:block absolute top-1/2 left-0 w-full h-1 bg-eco-light -translate-y-1/2 z-0"></div>

          <div v-for="(step, index) in processSteps" :key="index" class="relative z-10 bg-white p-6 rounded-xl border-2 border-eco-light hover:border-eco-green transition-colors shadow-sm text-center group">
            <div class="w-16 h-16 mx-auto bg-eco-green text-white rounded-full flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform">
              <svg class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="step.icon" />
              </svg>
            </div>
            <h3 class="text-xl font-bold text-gray-800 mb-3">{{ step.title }}</h3>
            <p class="text-gray-600 text-sm leading-relaxed">{{ step.desc }}</p>
          </div>
        </div>
      </div>

      <!-- 生态物产与资源画廊 (纯展示) -->
      <div>
        <div class="text-center mb-10">
          <h2 class="text-3xl font-bold text-gray-900 mb-2">大地的馈赠</h2>
          <p class="text-gray-500">（本站为纯公益科普展示，不提供任何商业交易及售卖功能）</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="item in galleryItems" :key="item.id" class="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-gray-100">
            <div class="relative h-48 overflow-hidden">
              <div class="absolute inset-0 bg-eco-green/20 group-hover:bg-transparent transition-colors z-10"></div>
              <img :src="item.image" :alt="item.title" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
            <div class="p-6">
              <h3 class="text-xl font-bold text-gray-800 mb-2 group-hover:text-eco-green transition-colors">{{ item.title }}</h3>
              <p class="text-gray-600 text-sm leading-relaxed">{{ item.desc }}</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>