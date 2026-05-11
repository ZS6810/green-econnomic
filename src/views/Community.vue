<script setup>
import { ref } from 'vue'

const formData = ref({
  nickname: '',
  content: ''
})

const isSubmitting = ref(false)
const showSuccess = ref(false)

// 初始模拟留言数据
const messages = ref([
  { id: 1, nickname: '绿叶使者', content: '感谢科普！石漠化治理真的不易，希望更多人关注西南地区的生态保护。', date: '2026-04-28 10:23', avatar: 'bg-green-100 text-green-600' },
  { id: 2, nickname: '山川守护者', content: '西畴精神太让人感动了，在石头缝里种出绿洲，向所有的生态治理者致敬！', date: '2026-04-25 14:15', avatar: 'bg-blue-100 text-blue-600' },
  { id: 3, nickname: 'EcoFan', content: '那个前后对比滑块做得很直观，数据监测面板也让我看到了国家在生态治理上的决心和成效。', date: '2026-04-20 09:45', avatar: 'bg-yellow-100 text-yellow-600' },
  { id: 4, nickname: '大自然的孩子', content: '绿水青山就是金山银山，只有保护好生态，才能实现真正的可持续发展。', date: '2026-04-18 16:30', avatar: 'bg-purple-100 text-purple-600' },
  { id: 5, nickname: '寻路人', content: '希望能有更多这样的纯公益科普网站，界面很清新，内容很扎实。', date: '2026-04-15 11:20', avatar: 'bg-pink-100 text-pink-600' }
])

const avatarColors = [
  'bg-red-100 text-red-600', 'bg-orange-100 text-orange-600', 'bg-amber-100 text-amber-600', 
  'bg-emerald-100 text-emerald-600', 'bg-teal-100 text-teal-600', 'bg-cyan-100 text-cyan-600', 
  'bg-indigo-100 text-indigo-600'
]

const getRandomAvatarColor = () => {
  return avatarColors[Math.floor(Math.random() * avatarColors.length)]
}

const handleSubmit = () => {
  if (!formData.value.nickname.trim() || !formData.value.content.trim()) return
  
  isSubmitting.value = true
  
  // 模拟网络请求
  setTimeout(() => {
    const now = new Date()
    const formattedDate = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')} ${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`
    
    // 添加到留言墙首位
    messages.value.unshift({
      id: Date.now(),
      nickname: formData.value.nickname,
      content: formData.value.content,
      date: formattedDate,
      avatar: getRandomAvatarColor(),
      isNew: true
    })
    
    // 重置表单并显示成功状态
    formData.value.nickname = ''
    formData.value.content = ''
    isSubmitting.value = false
    showSuccess.value = true
    
    // 3秒后隐藏成功提示
    setTimeout(() => {
      showSuccess.value = false
    }, 3000)
  }, 800)
}
</script>

<template>
  <div class="bg-gray-50 min-h-screen">
    
    <!-- 公益倡议横幅 (Hero) -->
    <section class="relative bg-eco-dark text-white py-24 overflow-hidden">
      <div class="absolute inset-0 z-0 opacity-20" style="background-image: url('https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80'); background-size: cover; background-position: center; filter: grayscale(100%);"></div>
      <div class="max-w-4xl mx-auto px-4 relative z-10 text-center">
        <div class="inline-block p-4 bg-white/10 rounded-full mb-6 backdrop-blur-sm">
          <svg class="w-12 h-12 text-eco-light" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h1 class="text-4xl md:text-5xl font-bold mb-6 tracking-tight">守护绿水青山，你我皆是力量</h1>
        <p class="text-xl md:text-2xl text-eco-light leading-relaxed max-w-3xl mx-auto">
          石漠化治理不仅是一项国家工程，更是关乎子孙后代的生态责任。
          <br class="hidden md:block">
          了解、关注并传播，就是对生态保护最大的支持。
        </p>
      </div>
    </section>

    <!-- 留言互动区 -->
    <section class="py-16 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 relative z-20">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        <!-- 左侧：简约留言表单 -->
        <div class="lg:col-span-5 bg-white rounded-2xl shadow-lg p-8 border border-gray-100 sticky top-24">
          <div class="mb-8">
            <h2 class="text-2xl font-bold text-gray-900 mb-2">留下您的环保寄语</h2>
            <p class="text-sm text-gray-500">（本站为纯前端展示，留言内容仅在当前浏览器页面有效，刷新后重置，不会收集您的任何隐私数据。）</p>
          </div>
          
          <form @submit.prevent="handleSubmit" class="space-y-6">
            <div>
              <label for="nickname" class="block text-sm font-medium text-gray-700 mb-1">您的昵称</label>
              <input 
                type="text" 
                id="nickname" 
                v-model="formData.nickname" 
                required
                placeholder="例如：环保先行者"
                class="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-eco-green/50 focus:border-eco-green transition-colors bg-gray-50 focus:bg-white"
              />
            </div>
            
            <div>
              <label for="content" class="block text-sm font-medium text-gray-700 mb-1">寄语内容</label>
              <textarea 
                id="content" 
                v-model="formData.content" 
                required
                rows="4"
                placeholder="写下您对石漠化治理或生态保护的看法..."
                class="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-eco-green/50 focus:border-eco-green transition-colors bg-gray-50 focus:bg-white resize-none"
              ></textarea>
            </div>
            
            <button 
              type="submit" 
              :disabled="isSubmitting || !formData.nickname.trim() || !formData.content.trim()"
              class="w-full py-3 px-6 rounded-lg text-white font-medium transition-all flex items-center justify-center gap-2"
              :class="isSubmitting || !formData.nickname.trim() || !formData.content.trim() ? 'bg-gray-400 cursor-not-allowed' : 'bg-eco-green hover:bg-eco-dark shadow-md hover:shadow-lg'"
            >
              <svg v-if="isSubmitting" class="animate-spin -ml-1 mr-2 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              <svg v-else class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
              {{ isSubmitting ? '提交中...' : '发表寄语' }}
            </button>
            
            <!-- 成功提示 -->
            <div v-show="showSuccess" class="p-4 bg-green-50 text-green-700 rounded-lg text-sm flex items-center gap-2 animate-fade-in">
              <svg class="w-5 h-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              寄语发表成功！感谢您的参与。
            </div>
          </form>
        </div>

        <!-- 右侧：虚拟滚动留言墙 -->
        <div class="lg:col-span-7 space-y-6">
          <div class="flex items-center justify-between mb-4">
            <h3 class="text-xl font-bold text-gray-800 flex items-center gap-2">
              <svg class="w-6 h-6 text-earth-brown" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
              </svg>
              公益寄语墙
            </h3>
            <span class="bg-eco-light text-eco-dark px-3 py-1 rounded-full text-xs font-bold">{{ messages.length }} 条寄语</span>
          </div>
          
          <div class="space-y-4 max-h-[600px] overflow-y-auto pr-2 custom-scrollbar pb-4">
            <transition-group name="list">
              <div 
                v-for="msg in messages" 
                :key="msg.id" 
                class="bg-white p-5 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow relative"
                :class="{'ring-2 ring-eco-green ring-opacity-50': msg.isNew}"
              >
                <div v-if="msg.isNew" class="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full z-10 animate-pulse">NEW</div>
                
                <div class="flex items-start gap-4">
                  <div :class="`w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0 ${msg.avatar}`">
                    {{ msg.nickname.charAt(0) }}
                  </div>
                  <div class="flex-grow">
                    <div class="flex justify-between items-baseline mb-2">
                      <h4 class="font-bold text-gray-900">{{ msg.nickname }}</h4>
                      <span class="text-xs text-gray-400">{{ msg.date }}</span>
                    </div>
                    <p class="text-gray-700 leading-relaxed text-sm md:text-base">{{ msg.content }}</p>
                  </div>
                </div>
              </div>
            </transition-group>
          </div>
        </div>

      </div>
    </section>
  </div>
</template>

<style scoped>
.animate-fade-in {
  animation: fadeIn 0.3s ease-out;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(-10px); }
  to { opacity: 1; transform: translateY(0); }
}

/* 列表动画 */
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}
.list-enter-from {
  opacity: 0;
  transform: translateY(-30px);
}
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

/* 自定义滚动条 */
.custom-scrollbar::-webkit-scrollbar {
  width: 6px;
}
.custom-scrollbar::-webkit-scrollbar-track {
  background: #f1f5f9;
  border-radius: 4px;
}
.custom-scrollbar::-webkit-scrollbar-thumb {
  background: #cbd5e1;
  border-radius: 4px;
}
.custom-scrollbar::-webkit-scrollbar-thumb:hover {
  background: #94a3b8;
}
</style>