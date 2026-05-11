<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  beforeImage: {
    type: String,
    required: true
  },
  afterImage: {
    type: String,
    required: true
  },
  beforeLabel: {
    type: String,
    default: '治理前'
  },
  afterLabel: {
    type: String,
    default: '治理后'
  }
})

const sliderRef = ref(null)
const sliderPosition = ref(50)
const isDragging = ref(false)

const handleMove = (event) => {
  if (!isDragging.value || !sliderRef.value) return
  
  const rect = sliderRef.value.getBoundingClientRect()
  const x = Math.max(0, Math.min(event.clientX - rect.left, rect.width))
  sliderPosition.value = (x / rect.width) * 100
}

const startDrag = () => {
  isDragging.value = true
}

const stopDrag = () => {
  isDragging.value = false
}

// 触摸事件支持
const handleTouchMove = (event) => {
  if (!isDragging.value || !sliderRef.value || !event.touches[0]) return
  
  const rect = sliderRef.value.getBoundingClientRect()
  const x = Math.max(0, Math.min(event.touches[0].clientX - rect.left, rect.width))
  sliderPosition.value = (x / rect.width) * 100
}

onMounted(() => {
  window.addEventListener('mouseup', stopDrag)
  window.addEventListener('touchend', stopDrag)
})

onUnmounted(() => {
  window.removeEventListener('mouseup', stopDrag)
  window.removeEventListener('touchend', stopDrag)
})
</script>

<template>
  <div 
    class="relative w-full h-64 md:h-96 overflow-hidden rounded-xl cursor-ew-resize select-none group"
    ref="sliderRef"
    @mousedown="startDrag"
    @mousemove="handleMove"
    @touchstart="startDrag"
    @touchmove.prevent="handleTouchMove"
  >
    <!-- After Image (治理后 - 底层) -->
    <img :src="afterImage" alt="After" class="absolute inset-0 w-full h-full object-cover" draggable="false" />
    <div class="absolute top-4 right-4 bg-eco-green/80 text-white px-3 py-1 rounded shadow-sm backdrop-blur-sm text-sm pointer-events-none">
      {{ afterLabel }}
    </div>

    <!-- Before Image (治理前 - 顶层裁剪) -->
    <div 
      class="absolute inset-0 w-full h-full"
      :style="{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }"
    >
      <img :src="beforeImage" alt="Before" class="absolute inset-0 w-full h-full object-cover" draggable="false" />
      <div class="absolute top-4 left-4 bg-earth-brown/80 text-white px-3 py-1 rounded shadow-sm backdrop-blur-sm text-sm pointer-events-none">
        {{ beforeLabel }}
      </div>
    </div>

    <!-- Slider Line & Handle -->
    <div 
      class="absolute inset-y-0 w-1 bg-white shadow-[0_0_5px_rgba(0,0,0,0.5)] cursor-ew-resize flex items-center justify-center pointer-events-none"
      :style="{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }"
    >
      <div class="w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center text-gray-400 group-hover:scale-110 transition-transform">
        <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l4-4 4 4m0 6l-4 4-4-4" transform="rotate(90 12 12)" />
        </svg>
      </div>
    </div>
  </div>
</template>