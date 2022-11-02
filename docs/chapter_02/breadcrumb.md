# 动态面包屑

对于面包屑来说，他分成了两个组件：

1. `el-breadcrumb`：包裹性质的容器
2. `el-breadcrumb-item`：每个单独项

如果我们想要完成动态的，那么就需要 **依据动态数据，渲染 `el-breadcrumb-item`**

所以说接下来我们需要做的事情就很简单了

1. 动态数据
2. 渲染 `el-breadcrumb-item`

那么这一小节咱们先来看 **动态数据如何制作**

我们希望可以制作出一个 **数组**，数组中每个 `item` 都表示一个 **路由信息**：

创建一个方法，用来生成数组数据，在这里我们要使用到 [route.match](https://next.router.vuejs.org/zh/api/#matched) 属性来：**获取与给定路由地址匹配的[标准化的路由记录](https://next.router.vuejs.org/zh/api/#routerecord)数组**

```vue
<script setup>
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
// 生成数组数据
const breadcrumbData = ref([])
const getBreadcrumbData = () => {
  breadcrumbData.value = route.matched.filter(
    item => item.meta && item.meta.title
  )
  console.log(breadcrumbData.value)
}
// 监听路由变化时触发
watch(
  route,
  () => {
    getBreadcrumbData()
  },
  {
    immediate: true
  }
)
</script>
```

## 依据动态数据，渲染面包屑

有了数据之后，根据数据来去渲染面包屑就比较简单了。

```vue
<template>
  <el-breadcrumb class="breadcrumb" separator="/">
    <el-breadcrumb-item
      v-for="(item, index) in breadcrumbData"
      :key="item.path"
    >
      <!-- 不可点击项 -->
      <span v-if="index === breadcrumbData.length - 1" class="no-redirect">{{
        item.meta.title
      }}</span>
      <!-- 可点击项 -->
      <a v-else class="redirect" @click.prevent="onLinkClick(item)">{{
        item.meta.title
      }}</a>
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script setup>
...

// 处理点击事件
const router = useRouter()
const onLinkClick = item => {
  console.log(item)
  router.push(item.path)
}

// 将来需要进行主题替换，所以这里获取下动态样式
const store = useStore()
// eslint-disable-next-line
const linkHoverColor = ref(store.getters.cssVar.menuBg)
</script>

<style lang="scss" scoped>
.breadcrumb {
 ...

  .redirect {
    color: #666;
    font-weight: 600;
  }

  .redirect:hover {
    // 将来需要进行主题替换，所以这里不去写死样式
    color: v-bind(linkHoverColor);
  }
}
</style>

```

## 动画处理

vue3对 [动画](https://v3.cn.vuejs.org/guide/transitions-overview.html#%E5%9F%BA%E4%BA%8E-class-%E7%9A%84%E5%8A%A8%E7%94%BB%E5%92%8C%E8%BF%87%E6%B8%A1) 进行了一些修改（[vue 动画迁移文档](https://v3.cn.vuejs.org/guide/migration/transition.html#%E6%A6%82%E8%A7%88)）

主要的修改其实只有两个：

1. 过渡类名 `v-enter` 修改为 `v-enter-from`
2. 过渡类名 `v-leave` 修改为 `v-leave-from`

那么依据修改之后的动画，我们来为面包屑增加一些动画样式：

1. 在 `Breadcrumb/index` 中增加 `transition-group`

   ```vue
   <template>
     <el-breadcrumb class="breadcrumb" separator="/">
       <transition-group name="breadcrumb">
         ...
       </transition-group>
     </el-breadcrumb>
   </template>
   ```

2. 新建 `styles/transition` 样式文件

   ```scss
   .breadcrumb-enter-active,
   .breadcrumb-leave-active {
     transition: all 0.5s;
   }

   .breadcrumb-enter-from,
   .breadcrumb-leave-active {
     opacity: 0;
     transform: translateX(20px);
   }

   .breadcrumb-leave-active {
     position: absolute;
   }
   ```

3. 在 `styles/index` 中导入

   ```scss
   @import './transition.scss';
   ```
