<script setup>
import BeforeAfterSlider from '../components/ui/BeforeAfterSlider.vue'

const cases = [
  {
    id: 1,
    title: '云南西畴：“等不是办法，干才有希望”',
    subtitle: '从“基本失去人类生存条件”到“生态绿洲”的涅槃',
    desc: '西畴县曾是云南省石漠化最严重的地区之一，全县99.9%的面积属于山区，石漠化面积占75.4%。面对恶劣环境，西畴人民创造了“西畴精神”，炸石造地，植树造林。',
    beforeImg: '/static/pic/微信图片_20260505231152_64_1391.png', // 荒芜山石示意
    afterImg: '/static/pic/微信图片_20260505231154_65_1391.png',  // 绿水青山示意
    achievements: [
      { year: '2000前', event: '乱砍滥伐，石漠化严重，吃水难、行路难。' },
      { year: '2010年', event: '全面启动石漠化综合治理工程，实施封山育林。' },
      { year: '2020年', event: '森林覆盖率提升至54.8%，石漠化面积大幅减少。' },
      { year: '2025年', event: '发展猕猴桃、中药材等林下经济，实现生态富民。' }
    ]
  },
  {
    id: 2,
    title: '贵州海雀：荒山秃岭变“绿色银行”',
    subtitle: '赫章县海雀村的绿色奇迹',
    desc: '海雀村曾被联合国专家评定为“不具备人类生存条件的地方”。老支书文朝荣带领村民在光秃秃的石山上种下万亩林海，如今这里已成为国家级生态文明教育基地。',
    beforeImg: '/static/pic/微信图片_20260505231113_61_1391.png',
    afterImg: '/static/pic/微信图片_20260505231116_62_1391.png',
    achievements: [
      { year: '1985年', event: '森林覆盖率仅为5%，水土流失严重，村民食不果腹。' },
      { year: '1995年', event: '完成万亩荒山造林，生态恶化趋势得到初步遏制。' },
      { year: '2015年', event: '森林覆盖率达到77%，林木价值超过亿元。' },
      { year: '2025年', event: '依托良好生态发展乡村旅游和林下种植，人均收入显著提升。' }
    ]
  }
]
</script>

<template>
  <div class="py-12 bg-eco-light/10 min-h-screen">
    <div class="max-w-5xl mx-auto px-4">
      <div class="text-center mb-16">
        <h1 class="text-4xl font-bold text-gray-900 mb-4">典型公益治理案例</h1>
        <p class="text-xl text-gray-600">见证绝境中的绿色奇迹与人类不屈的奋斗</p>
      </div>

      <div class="space-y-20">
        <div v-for="caseItem in cases" :key="caseItem.id" class="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div class="p-8 md:p-10 border-b border-gray-100 bg-gradient-to-r from-eco-light/30 to-white">
            <h2 class="text-3xl font-bold text-eco-dark mb-2">{{ caseItem.title }}</h2>
            <p class="text-lg text-earth-brown font-medium mb-6">{{ caseItem.subtitle }}</p>
            <p class="text-gray-700 leading-relaxed">{{ caseItem.desc }}</p>
          </div>

          <div class="p-8 md:p-10">
            <h3 class="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
              <svg class="w-6 h-6 text-eco-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              治理前后生态对比
            </h3>
            
            <div class="mb-12 shadow-lg rounded-xl">
              <BeforeAfterSlider 
                :before-image="caseItem.beforeImg" 
                :after-image="caseItem.afterImg" 
                before-label="治理前 (石漠化)"
                after-label="治理后 (绿水青山)"
              />
              <p class="text-sm text-center text-gray-500 mt-3 flex items-center justify-center gap-1">
                <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l4-4 4 4m0 6l-4 4-4-4" transform="rotate(90 12 12)" />
                </svg>
                拖动滑块查看对比效果
              </p>
            </div>

            <h3 class="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
              <svg class="w-6 h-6 text-earth-brown" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              治理时间轴与成效
            </h3>

            <div class="relative border-l-2 border-eco-green/30 ml-3 md:ml-6 space-y-8 py-2">
              <div v-for="(achievement, i) in caseItem.achievements" :key="i" class="relative pl-8 md:pl-10">
                <!-- Timeline Dot -->
                <div class="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-white border-2 border-eco-green flex items-center justify-center">
                  <div class="w-1.5 h-1.5 rounded-full bg-eco-green" v-if="i === caseItem.achievements.length - 1"></div>
                </div>
                
                <div class="bg-gray-50 rounded-lg p-4 border border-gray-100 hover:border-eco-green/30 hover:shadow-sm transition-all">
                  <span class="inline-block px-3 py-1 bg-eco-light text-eco-dark text-sm font-bold rounded-full mb-2">{{ achievement.year }}</span>
                  <p class="text-gray-700">{{ achievement.event }}</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>