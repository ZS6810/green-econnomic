<script setup>
import { ref, computed } from 'vue'

const categories = ['全部', '人物事迹', '乡村蝶变', '模式科普']
const activeCategory = ref('全部')

const articles = [
  {
    id: 1,
    title: '“当代愚公”毛相林：绝壁凿天路，苦熬变苦干',
    category: '人物事迹',
    date: '2026-04-12',
    summary: '在重庆市巫山县下庄村，村支书毛相林带领村民历时7年，在悬崖绝壁上凿出了一条长达8公里的“天路”，不仅打破了闭塞，更在贫瘠的石山上种出了致富的柑橘林。',
    image: '/static/pic/微信图片_20260505231609_73_1391.jpg'
  },
  {
    id: 2,
    title: '海雀村的绿色账本：从“吃救济”到“卖风景”',
    category: '乡村蝶变',
    date: '2026-04-05',
    summary: '贵州赫章县海雀村曾是极度贫困的代名词。经过30多年的植树造林，万亩荒山变林海。如今，村民不仅靠林下种天麻赚了钱，还吃上了“生态旅游饭”。',
    image: '/static/pic/微信图片_20260505231604_71_1391.png'
  },
  {
    id: 3,
    title: '图解：什么是“顶林-腰果-底草”的立体修复模式？',
    category: '模式科普',
    date: '2026-03-28',
    summary: '针对不同坡度和石漠化程度，科研人员总结出了立体修复模式：山顶封山育林保水土，山腰种植经济果林促增收，山底种草养畜循环发展，实现了生态与经济的良性循环。',
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 4,
    title: '一粒猕猴桃种子的奇幻漂流：西畴石漠化治理启示录',
    category: '乡村蝶变',
    date: '2026-03-15',
    summary: '云南西畴县将乱石堆炸碎填土，硬生生造出台地。在这片曾被认为无法耕种的土地上，试种猕猴桃获得成功，结出了“生态果”和“致富果”。',
    image: '/static/pic/微信图片_20260505231608_72_1391.png'
  },
  {
    id: 5,
    title: '让石头开花的人：科技工作者扎根喀斯特二十年',
    category: '人物事迹',
    date: '2026-03-02',
    summary: '他们是把论文写在祖国大地上的科研人员。二十年来，他们踏遍西南的每一座石山，寻找最适合喀斯特地貌生长的植物，为石漠化治理提供科学方案。',
    image: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  }
]

const filteredArticles = computed(() => {
  if (activeCategory.value === '全部') {
    return articles
  }
  return articles.filter(a => a.category === activeCategory.value)
})

// 模拟详情页状态 (弹窗形式展示)
const selectedArticle = ref(null)
</script>

<template>
  <div class="py-12 bg-gray-50 min-h-screen">
    <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-12">
        <h1 class="text-4xl font-bold text-gray-900 mb-4">生态振兴公益故事</h1>
        <p class="text-xl text-gray-600">每一个被治愈的荒山背后，都有一段不屈的奋斗史</p>
      </div>

      <!-- 分类筛选 -->
      <div class="flex flex-wrap justify-center gap-3 mb-12">
        <button 
          v-for="cat in categories" 
          :key="cat"
          @click="activeCategory = cat"
          class="px-5 py-2 rounded-full text-sm font-medium transition-colors"
          :class="activeCategory === cat ? 'bg-eco-green text-white shadow-md' : 'bg-white text-gray-600 border border-gray-200 hover:border-eco-green hover:text-eco-green'"
        >
          {{ cat }}
        </button>
      </div>

      <!-- 文章列表 -->
      <div class="grid grid-cols-1 gap-8">
        <div 
          v-for="article in filteredArticles" 
          :key="article.id"
          @click="selectedArticle = article"
          class="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 overflow-hidden cursor-pointer group flex flex-col md:flex-row"
        >
          <div class="md:w-1/3 h-48 md:h-auto relative overflow-hidden">
            <img :src="article.image" :alt="article.title" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            <div class="absolute top-4 left-4 bg-eco-green text-white text-xs font-bold px-3 py-1 rounded-full">
              {{ article.category }}
            </div>
          </div>
          <div class="p-6 md:p-8 md:w-2/3 flex flex-col justify-center">
            <h2 class="text-2xl font-bold text-gray-900 mb-3 group-hover:text-eco-green transition-colors">{{ article.title }}</h2>
            <p class="text-gray-600 mb-4 line-clamp-2 md:line-clamp-3">{{ article.summary }}</p>
            <div class="flex items-center justify-between mt-auto pt-4 border-t border-gray-50">
              <span class="text-sm text-gray-400 flex items-center gap-1">
                <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                {{ article.date }}
              </span>
              <span class="text-eco-green text-sm font-medium flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                阅读全文 <span aria-hidden="true">&rarr;</span>
              </span>
            </div>
          </div>
        </div>
      </div>

      <!-- 空状态 -->
      <div v-if="filteredArticles.length === 0" class="text-center py-20">
        <p class="text-gray-500">暂无该分类下的文章。</p>
      </div>

    </div>

    <!-- 简易文章详情弹窗 (Modal) -->
    <div v-if="selectedArticle" class="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
      <div class="absolute inset-0 bg-black/60 backdrop-blur-sm" @click="selectedArticle = null"></div>
      <div class="relative bg-white rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl">
        <button 
          @click="selectedArticle = null"
          class="absolute top-4 right-4 z-10 w-10 h-10 bg-black/20 hover:bg-black/40 text-white rounded-full flex items-center justify-center backdrop-blur-md transition-colors"
        >
          <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        
        <img :src="selectedArticle.image" alt="Cover" class="w-full h-64 md:h-80 object-cover" />
        
        <div class="p-8 md:p-12">
          <div class="flex items-center gap-3 mb-6">
            <span class="bg-eco-light text-eco-dark px-3 py-1 rounded-full text-sm font-medium">{{ selectedArticle.category }}</span>
            <span class="text-gray-500 text-sm">{{ selectedArticle.date }}</span>
          </div>
          
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-8">{{ selectedArticle.title }}</h2>
          
          <div class="prose prose-lg prose-green max-w-none text-gray-700">
            <p class="lead text-xl text-gray-600 mb-8 font-medium border-l-4 border-eco-green pl-4">
              {{ selectedArticle.summary }}
            </p>
            <p>（此处为科普文章正文内容模拟展示。本站作为纯前端公益项目，文章数据来源于前端Mock。）</p>
            <p>石漠化被称为“地球癌症”，是指在喀斯特脆弱生态环境下，由于人类不合理社会经济活动的干扰破坏，造成植被破坏、水土流失、岩石大面积裸露、土地生产力衰退的极端地表退化过程。</p>
            <p>面对这片看似无法治愈的土地，无数基层干部、科研工作者和当地村民并没有放弃。他们用汗水、智慧甚至生命，在绝壁上凿路，在石缝中种树，硬生生地在不毛之地上创造了绿色奇迹。</p>
            <blockquote>
              <p>“只要精神不滑坡，办法总比困难多。”</p>
            </blockquote>
            <p>这句话不仅是一句口号，更是西南喀斯特地区人民抗击石漠化的真实写照。如今，绿水青山正逐步转化为金山银山，曾经的穷山恶水，正焕发出新的生机与活力。</p>
          </div>
          
          <div class="mt-12 pt-8 border-t border-gray-100 flex justify-center">
            <button @click="selectedArticle = null" class="px-6 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-full transition-colors">
              关闭文章
            </button>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>