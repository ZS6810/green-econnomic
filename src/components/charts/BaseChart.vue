<script setup>
import { ref, onMounted, onBeforeUnmount, watch, shallowRef } from 'vue'
import * as echarts from 'echarts'
import { useResizeObserver } from '@vueuse/core'

const props = defineProps({
  option: {
    type: Object,
    required: true
  },
  theme: {
    type: [String, Object],
    default: null
  },
  height: {
    type: String,
    default: '400px'
  }
})

const chartRef = ref(null)
const chartInstance = shallowRef(null)

const initChart = () => {
  if (!chartRef.value) return
  
  // 销毁旧实例
  if (chartInstance.value) {
    chartInstance.value.dispose()
  }
  
  chartInstance.value = echarts.init(chartRef.value, props.theme)
  chartInstance.value.setOption(props.option)
}

// 监听 option 变化重新渲染
watch(() => props.option, (newOption) => {
  if (chartInstance.value) {
    chartInstance.value.setOption(newOption, true)
  }
}, { deep: true })

// 监听容器大小变化
useResizeObserver(chartRef, () => {
  if (chartInstance.value) {
    chartInstance.value.resize()
  }
})

onMounted(() => {
  initChart()
})

onBeforeUnmount(() => {
  if (chartInstance.value) {
    chartInstance.value.dispose()
    chartInstance.value = null
  }
})

defineExpose({
  getInstance: () => chartInstance.value
})
</script>

<template>
  <div ref="chartRef" :style="{ width: '100%', height: height }" class="w-full"></div>
</template>