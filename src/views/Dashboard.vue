<script setup>
import { computed } from 'vue'
import BaseChart from '../components/charts/BaseChart.vue'
import { trendData, gepData, compareData } from '../mock/dashboardData'

// 1. 历年石漠化面积与植被覆盖率动态折线图/柱状图
const trendOption = computed(() => ({
  title: { text: '全国石漠化面积与植被覆盖率趋势', left: 'center', textStyle: { color: '#1f2937', fontSize: 16 } },
  tooltip: { trigger: 'axis', axisPointer: { type: 'cross' } },
  legend: { data: ['石漠化面积 (万公顷)', '植被覆盖率 (%)'], bottom: 0 },
  grid: { left: '3%', right: '4%', bottom: '10%', containLabel: true },
  xAxis: [
    { type: 'category', data: trendData.years, axisPointer: { type: 'shadow' } }
  ],
  yAxis: [
    { type: 'value', name: '面积', min: 0, max: 1500, interval: 300, axisLabel: { formatter: '{value}' } },
    { type: 'value', name: '覆盖率', min: 0, max: 100, interval: 20, axisLabel: { formatter: '{value} %' } }
  ],
  series: [
    {
      name: '石漠化面积 (万公顷)',
      type: 'bar',
      itemStyle: { color: '#8D6E63' },
      data: trendData.area
    },
    {
      name: '植被覆盖率 (%)',
      type: 'line',
      yAxisIndex: 1,
      itemStyle: { color: '#2E7D32' },
      lineStyle: { width: 3 },
      symbolSize: 8,
      data: trendData.coverage
    }
  ]
}))

// 2. GEP（生态产品总值）公益核算雷达图
const gepOption = computed(() => ({
  title: { text: '典型治理区 GEP 核算对比', left: 'center', textStyle: { color: '#1f2937', fontSize: 16 } },
  tooltip: { trigger: 'item' },
  legend: { data: ['治理前 (2015)', '治理后 (2024)'], bottom: 0 },
  radar: {
    indicator: gepData.indicator,
    center: ['50%', '50%'],
    radius: '65%',
    splitArea: { areaStyle: { color: ['rgba(46, 125, 50, 0.05)', 'rgba(46, 125, 50, 0.1)', 'rgba(46, 125, 50, 0.15)', 'rgba(46, 125, 50, 0.2)'] } }
  },
  series: [
    {
      name: 'GEP 构成',
      type: 'radar',
      data: [
        {
          value: gepData.data[0].value,
          name: '治理前 (2015)',
          itemStyle: { color: '#D7CCC8' },
          areaStyle: { opacity: 0.3 }
        },
        {
          value: gepData.data[1].value,
          name: '治理后 (2024)',
          itemStyle: { color: '#2E7D32' },
          areaStyle: { opacity: 0.4 }
        }
      ]
    }
  ]
}))

// 3. 石漠化退化减轻 vs 生态价值逐年提升的对比趋势图（双Y轴混合图表）
const compareOption = computed(() => ({
  title: { text: '退化指数与生态价值转化趋势', left: 'center', textStyle: { color: '#1f2937', fontSize: 16 } },
  tooltip: { trigger: 'axis' },
  legend: { data: ['生态退化指数 (越低越好)', '生态产品价值 (亿元)'], bottom: 0 },
  grid: { left: '3%', right: '4%', bottom: '10%', containLabel: true },
  xAxis: { type: 'category', data: compareData.years },
  yAxis: [
    { type: 'value', name: '退化指数', min: 0, max: 100 },
    { type: 'value', name: '生态价值 (亿元)', min: 0, max: 400 }
  ],
  series: [
    {
      name: '生态退化指数 (越低越好)',
      type: 'line',
      smooth: true,
      areaStyle: {
        color: {
          type: 'linear',
          x: 0, y: 0, x2: 0, y2: 1,
          colorStops: [
            { offset: 0, color: 'rgba(141, 110, 99, 0.8)' },
            { offset: 1, color: 'rgba(141, 110, 99, 0.1)' }
          ]
        }
      },
      itemStyle: { color: '#8D6E63' },
      data: compareData.degradation
    },
    {
      name: '生态产品价值 (亿元)',
      type: 'bar',
      yAxisIndex: 1,
      itemStyle: {
        color: {
          type: 'linear',
          x: 0, y: 0, x2: 0, y2: 1,
          colorStops: [
            { offset: 0, color: '#4CAF50' },
            { offset: 1, color: '#1B5E20' }
          ]
        },
        borderRadius: [4, 4, 0, 0]
      },
      data: compareData.value
    }
  ]
}))

// 4. 区域公益分布交互地图 (简化版：使用散点图模拟，因完整 GeoJSON 较大)
// 实际项目中应引入 china.json 并使用 type: 'map'
import { mapScatterData } from '../mock/dashboardData'
const mapOption = computed(() => ({
  title: { text: '西南喀斯特地区典型治理示范点', left: 'center', textStyle: { color: '#1f2937', fontSize: 16 } },
  tooltip: {
    trigger: 'item',
    formatter: function (params) {
      return `<div class="p-2">
                <div class="font-bold text-eco-green mb-1">${params.name}</div>
                <div class="text-sm text-gray-600">综合评分: ${params.value[2]}</div>
                <div class="text-xs text-gray-500 mt-1 border-t pt-1">${params.data.desc}</div>
              </div>`;
    }
  },
  geo: {
    map: 'china', // 注意：需先注册地图 echarts.registerMap('china', geoJson)，此处用空底图示意
    roam: true,
    center: [106.5, 26.5], // 聚焦西南地区
    zoom: 5,
    itemStyle: {
      areaColor: '#E8F5E9',
      borderColor: '#A5D6A7'
    },
    emphasis: { itemStyle: { areaColor: '#C8E6C9' } }
  },
  series: [
    {
      name: '示范点',
      type: 'effectScatter',
      coordinateSystem: 'geo',
      data: mapScatterData,
      symbolSize: function (val) {
        return val[2] / 5; // 根据评分决定点大小
      },
      itemStyle: { color: '#2E7D32', shadowBlur: 10, shadowColor: '#2E7D32' },
      rippleEffect: { brushType: 'stroke' },
      label: { formatter: '{b}', position: 'right', show: true, textStyle: { color: '#1B5E20', fontWeight: 'bold' } }
    }
  ]
}))

// 注意：为了让地图正常显示，我们临时在组件挂载前注册一个极其简化的中国西南部分边界GeoJSON，或者使用一张底图。
// 这里我们使用一个带有背景网格的散点图来模拟地图分布，避免依赖庞大的 GeoJSON 文件。
const scatterMapOption = computed(() => ({
  title: { text: '西南典型治理示范点 (相对经纬度分布)', left: 'center', textStyle: { color: '#1f2937', fontSize: 16 } },
  tooltip: {
    trigger: 'item',
    formatter: function (params) {
      return `<div class="font-bold text-eco-green mb-1">${params.name}</div>
              <div class="text-xs text-gray-600">${params.data.desc}</div>`;
    }
  },
  xAxis: { type: 'value', min: 102, max: 110, name: '经度', splitLine: { show: false } },
  yAxis: { type: 'value', min: 22, max: 30, name: '纬度', splitLine: { show: false } },
  series: [
    {
      type: 'effectScatter',
      symbolSize: 20,
      itemStyle: { color: '#2E7D32' },
      data: mapScatterData,
      label: { show: true, formatter: '{b}', position: 'top', color: '#1f2937' }
    }
  ]
}))
</script>

<template>
  <div class="py-12 bg-gray-50 min-h-screen">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-12">
        <h1 class="text-4xl font-bold text-gray-900 mb-4">动态生态数据监测</h1>
        <p class="text-xl text-gray-600">用数据讲述石漠化治理的中国故事</p>
      </div>

      <!-- 第一排：趋势图与雷达图 -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        <div class="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <BaseChart :option="trendOption" height="400px" />
        </div>
        <div class="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <BaseChart :option="gepOption" height="400px" />
        </div>
      </div>

      <!-- 第二排：双Y轴对比图 -->
      <div class="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 mb-8 hover:shadow-md transition-shadow">
        <BaseChart :option="compareOption" height="400px" />
        <div class="mt-4 text-center text-sm text-gray-500 bg-eco-light/30 py-3 rounded-lg border border-eco-light">
          数据解读：随着生态退化指数的逐年下降（治理成效显现），该区域的生态产品总值呈现出显著的上升趋势，实现了“绿水青山就是金山银山”的转化。
        </div>
      </div>

      <!-- 第三排：区域分布图 (简化散点版) -->
      <div class="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow relative overflow-hidden">
        <!-- 装饰性背景，模拟等高线 -->
        <div class="absolute inset-0 opacity-[0.03] pointer-events-none" style="background-image: repeating-linear-gradient(0deg, transparent, transparent 19px, #2E7D32 19px, #2E7D32 20px), repeating-linear-gradient(90deg, transparent, transparent 19px, #2E7D32 19px, #2E7D32 20px);"></div>
        <BaseChart :option="scatterMapOption" height="500px" />
        <p class="text-center text-xs text-gray-400 mt-2">* 示意图：展示云贵川渝桂部分典型石漠化治理示范区的相对地理位置分布</p>
      </div>

    </div>
  </div>
</template>