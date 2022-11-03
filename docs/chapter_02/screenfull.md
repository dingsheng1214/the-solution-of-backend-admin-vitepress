# screenfull 原理及方案分析

接下来我们来看 `screenfull （全屏）` 功能实现

对于 `screenfull` 和之前一样 ，我们还是先分析它的原理，然后在制定对应的方案实现

**原理：**

对于 `screenfull` 而言，浏览器本身已经提供了对用的 `API`，[点击这里即可查看](https://developer.mozilla.org/zh-CN/docs/Web/API/Fullscreen_API)，这个 `API` 中，主要提供了两个方法：

1. [`Document.exitFullscreen()`](https://developer.mozilla.org/zh-CN/docs/Web/API/Document/exitFullscreen)：该方法用于请求从全屏模式切换到窗口模式
2. [`Element.requestFullscreen()`](https://developer.mozilla.org/zh-CN/docs/Web/API/Element/requestFullScreen)：该方法用于请求浏览器（user agent）将特定元素（甚至延伸到它的后代元素）置为全屏模式
   1. 比如我们可以通过 `document.getElementById('app').requestFullscreen()` 在获取 `id=app` 的 `DOM` 之后，把该区域置为全屏

但是该方法存在一定的小问题，比如：

1. `appmain` 区域背景颜色为黑色

所以通常情况下我们不会直接使用该 `API` 来去实现全屏效果，而是会使用它的包装库 [screenfull](https://www.npmjs.com/package/screenfull)


## 方案落地：screenfull

明确好了方案之后，接下来我们就落地该方案

**封装 `screenfull` 组件：**

1. 下来依赖包  [screenfull](https://www.npmjs.com/package/screenfull)

   ```sh
   npm i screenfull@5.1.0
   ```

2. 创建 `components/Screenfull/index`

   ```vue
   <template>
     <div>
       <svg-icon
         :icon="isFullscreen ? 'exit-fullscreen' : 'fullscreen'"
         @click="onToggle"
       />
     </div>
   </template>

   <script setup>
   import { ref, onMounted, onUnmounted } from 'vue'
   import screenfull from 'screenfull'

   // 是否全屏
   const isFullscreen = ref(false)

   // 监听变化
   const change = () => {
     isFullscreen.value = screenfull.isFullscreen
   }

   // 切换事件
   const onToggle = () => {
     screenfull.toggle()
   }

   // 设置侦听器
   onMounted(() => {
     screenfull.on('change', change)
   })

   // 删除侦听器
   onUnmounted(() => {
     screenfull.off('change', change)
   })
   </script>

   <style lang="scss" scoped></style>

   ```
