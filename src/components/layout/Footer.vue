<template>
  <footer class="bg-gray-900 text-gray-300 py-12">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <!-- 网站简介 -->
        <div class="col-span-1">
          <div class="flex items-center gap-2 mb-4">
            <div class="w-8 h-8 rounded-full bg-eco-green flex items-center justify-center">
              <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <span class="font-bold text-xl text-white">石漠化治理公益科普</span>
          </div>
          <p class="text-sm text-gray-400 leading-relaxed">
            本站是一个纯公益性质的科普平台，致力于传播石漠化治理知识，展示生态修复成果，探讨生态产品价值实现路径。
          </p>
        </div>

        <!-- 快速链接 -->
        <div class="col-span-1 md:ml-12">
          <h3 class="text-lg font-semibold text-white mb-4">快速链接</h3>
          <ul class="space-y-2 text-sm">
            <li><RouterLink to="/science" class="hover:text-eco-green transition-colors">石漠化科普</RouterLink></li>
            <li><RouterLink to="/cases" class="hover:text-eco-green transition-colors">治理案例</RouterLink></li>
            <li><RouterLink to="/dashboard" class="hover:text-eco-green transition-colors">数据监测</RouterLink></li>
            <li><RouterLink to="/value" class="hover:text-eco-green transition-colors">价值实现</RouterLink></li>
          </ul>
        </div>

        <!-- 公益声明 -->
        <div class="col-span-1">
          <h3 class="text-lg font-semibold text-white mb-4">公益声明</h3>
          <p class="text-sm text-gray-400 mb-4">
            本站不涉及任何商业行为。所有数据仅供科普展示，数据来源参考相关公开科研报告及统计年鉴。
          </p>
          <div class="flex space-x-4">
            <!-- 社交占位图标 -->
            <a href="#" class="text-gray-400 hover:text-white transition-colors">
              <span class="sr-only">Email</span>
              <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      
      <div class="border-t border-gray-800 mt-8 pt-8 text-sm text-center text-gray-500">
        <p>&copy; 2026 石漠化治理公益科普项目. 保留所有权利.</p>
      </div>
    </div>
  </footer>
</template>