<template>
  <div class="py-16 bg-white min-h-screen">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- 页面标题 -->
      <div class="text-center mb-16">
        <div class="w-20 h-20 bg-eco-green rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
          <svg class="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h1 class="text-4xl font-bold text-gray-900 mb-4">关于本站</h1>
        <p class="text-xl text-gray-600">纯公益科普平台，致力于生态保护理念传播</p>
      </div>

      <div class="space-y-12">
        <!-- 建站初衷 -->
        <section class="bg-eco-light/30 rounded-2xl p-8 md:p-10 border border-eco-light">
          <h2 class="text-2xl font-bold text-eco-dark mb-6 flex items-center gap-2">
            <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
            建站初衷
          </h2>
          <div class="prose prose-lg text-gray-700">
            <p>
              “石漠化”被称为“地球癌症”，但在公众视野中，它的认知度远低于“沙漠化”或“雾霾”。西南喀斯特地区的石漠化治理，是一部充满血泪与汗水的抗争史，也是中国生态文明建设的重要篇章。
            </p>
            <p>
              本站的建立，旨在搭建一个**完全无商业行为**的纯前端公益科普平台。我们希望通过可视化的数据、生动的案例和结构化的科普内容，让更多人了解石漠化的危害，见证治理的成效，并深刻理解“绿水青山就是金山银山”的生态产品价值转化路径。
            </p>
          </div>
        </section>

        <!-- 平台定位声明 -->
        <section class="bg-white rounded-2xl p-8 md:p-10 border border-gray-100 shadow-sm">
          <h2 class="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
            <svg class="w-6 h-6 text-earth-brown" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            平台性质声明
          </h2>
          <ul class="space-y-4 text-gray-700">
            <li class="flex items-start gap-3">
              <span class="w-1.5 h-1.5 mt-2 rounded-full bg-red-500 flex-shrink-0"></span>
              <span><strong>无商业行为：</strong> 本站不包含任何售卖、预约、广告或捐款等商业功能。</span>
            </li>
            <li class="flex items-start gap-3">
              <span class="w-1.5 h-1.5 mt-2 rounded-full bg-eco-green flex-shrink-0"></span>
              <span><strong>纯前端架构：</strong> 网站采用纯前端技术（Vue3 + Tailwind CSS + ECharts）构建，所有数据均为前端 Mock（模拟）数据，用于演示效果。</span>
            </li>
            <li class="flex items-start gap-3">
              <span class="w-1.5 h-1.5 mt-2 rounded-full bg-blue-500 flex-shrink-0"></span>
              <span><strong>隐私保护：</strong> 留言板等互动功能仅在本地浏览器端运行，不会收集、存储或上传用户的任何个人隐私信息。</span>
            </li>
          </ul>
        </section>

        <!-- 数据来源说明 -->
        <section class="bg-gray-50 rounded-2xl p-8 md:p-10 border border-gray-200">
          <h2 class="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
            <svg class="w-6 h-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            数据与素材来源
          </h2>
          <div class="text-gray-600 space-y-3 text-sm leading-relaxed">
            <p>1. 本站展示的“历年石漠化面积”、“植被覆盖率”、“GEP核算”等图表数据，均为**根据真实治理趋势模拟生成的结构化 Mock 数据**，仅用于科普演示，不具备学术引用价值。</p>
            <p>2. 真实的统计数据请参考中国国家林业和草原局发布的历次《中国岩溶地区石漠化状况公报》。</p>
            <p>3. 网站使用的配图均来源于 Unsplash 等免版权图库，作为场景示意，并非特指某地真实景象。</p>
          </div>
        </section>

        <!-- 联系我们 -->
        <section class="text-center pt-8 border-t border-gray-100">
          <h2 class="text-xl font-bold text-gray-800 mb-4">联系交流</h2>
          <p class="text-gray-600 mb-6">如果您对石漠化治理科普有任何建议，欢迎与我们交流讨论。</p>
          <a href="mailto:public-welfare@example.com" class="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gray-900 hover:bg-gray-800 text-white rounded-lg font-medium transition-colors">
            <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            发送邮件联系
          </a>
        </section>
      </div>

    </div>
  </div>
</template>