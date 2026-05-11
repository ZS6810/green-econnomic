# 石漠化治理与生态产品价值实现 - 技术架构文档 (Architecture)

## 1. 技术栈选择
- **前端框架**：Vue 3 (Composition API, `<script setup>`)
- **路由管理**：Vue Router 4
- **样式方案**：Tailwind CSS (快速构建响应式与UI组件)
- **数据可视化**：ECharts (用于数据监测面板的复杂图表)
- **图标库**：Heroicons 或类似 SVG 图标库
- **数据来源**：纯前端 Mock 数据 (JSON 格式)

## 2. 目录结构规划
```text
src/
├── assets/            # 静态资源 (图片, 全局CSS)
├── components/        # 公共/基础组件
│   ├── layout/        # 布局组件 (Header, Footer)
│   ├── charts/        # ECharts 封装组件
│   ├── ui/            # UI 组件 (Slider, Card, Modal)
│   └── ...
├── mock/              # 结构化的 Mock 数据 (JSON/JS)
├── router/            # Vue Router 配置
├── views/             # 页面视图 (对应 8 大模块)
│   ├── Home.vue
│   ├── Science.vue
│   ├── Cases.vue
│   ├── Dashboard.vue
│   ├── Value.vue
│   ├── Stories.vue
│   ├── Community.vue
│   └── About.vue
├── App.vue
└── main.js
```

## 3. 核心模块技术实现

### 3.1 路由规划
- `/` -> `Home.vue`
- `/science` -> `Science.vue`
- `/cases` -> `Cases.vue`
- `/dashboard` -> `Dashboard.vue`
- `/value` -> `Value.vue`
- `/stories` -> `Stories.vue`
- `/community` -> `Community.vue`
- `/about` -> `About.vue`

### 3.2 数据 Mock 与状态
由于无后端，将在 `src/mock/` 下创建各个模块所需的假数据。例如 `cases.js`, `dashboardData.js`, `stories.js` 等，通过 ES Module 导出，直接在组件中 import 使用。

### 3.3 图表组件封装 (ECharts)
创建通用的 `BaseChart.vue`，接收 `option` props，内部处理窗口 resize 事件。针对 Dashboard 的四种图表：
- `LineBarChart.vue`
- `RadarChart.vue`
- `DualYAxisChart.vue`
- `MapChart.vue`

### 3.4 关键组件实现
- **数字滚动动画**：使用 `vueuse` 的 `useTransition` 或手写 `requestAnimationFrame` 实现数字递增效果。
- **前后对比滑块**：利用两个绝对定位的 `div` 和 `clip-path`，监听 `mousemove` 或 `touchmove` 事件改变裁剪区域宽度。
- **响应式设计**：重度依赖 Tailwind 的 `md:`, `lg:` 等断点前缀，确保移动端优先并完美适配 PC。

## 4. 样式主题配置 (Tailwind)
在 `tailwind.config.js` 中配置主题色：
```javascript
theme: {
  extend: {
    colors: {
      'eco-green': '#2E7D32',
      'eco-light': '#E8F5E9',
      'earth-brown': '#8D6E63',
      'earth-light': '#D7CCC8'
    }
  }
}
```
