# Guide 引导页方案解析

1. 导入 [driver.js](https://kamranahmed.info/driver.js/)

   ```sh
   npm i driver.js@0.9.8
   ```

2. 在 `guide.vue` 中初始化 `driiver`

   ```vue
   <script setup>
   import Driver from 'driver.js'
   import 'driver.js/dist/driver.min.css'
   import { onMounted } from 'vue'
   import { useI18n } from 'vue-i18n'

   const i18n = useI18n()

   let driver = null
   onMounted(() => {
     driver = new Driver({
       // 禁止点击蒙版关闭
       allowClose: false,
       closeBtnText: i18n.t('msg.guide.close'),
       nextBtnText: i18n.t('msg.guide.next'),
       prevBtnText: i18n.t('msg.guide.prev')
     })
   })
   </script>
   ```

3. 创建 **步骤** `steps.js`

   ```js
   // 此处不要导入 @/i18n 使用 i18n.global ，因为我们在 router 中 layout 不是按需加载，所以会在 Guide 会在 I18n 初始化完成之前被直接调用。导致 i18n 为 undefined
   const steps = i18n => {
     return [
       {
         element: '#guide-start',
         popover: {
           title: i18n.t('msg.guide.guideTitle'),
           description: i18n.t('msg.guide.guideDesc'),
           position: 'bottom-right'
         }
       },
       {
         element: '#guide-hamburger',
         popover: {
           title: i18n.t('msg.guide.hamburgerTitle'),
           description: i18n.t('msg.guide.hamburgerDesc')
         }
       },
       {
         element: '#guide-breadcrumb',
         popover: {
           title: i18n.t('msg.guide.breadcrumbTitle'),
           description: i18n.t('msg.guide.breadcrumbDesc')
         }
       },
       {
         element: '#guide-search',
         popover: {
           title: i18n.t('msg.guide.searchTitle'),
           description: i18n.t('msg.guide.searchDesc'),
           position: 'bottom-right'
         }
       },
       {
         element: '#guide-full',
         popover: {
           title: i18n.t('msg.guide.fullTitle'),
           description: i18n.t('msg.guide.fullDesc'),
           position: 'bottom-right'
         }
       },
       {
         element: '#guide-theme',
         popover: {
           title: i18n.t('msg.guide.themeTitle'),
           description: i18n.t('msg.guide.themeDesc'),
           position: 'bottom-right'
         }
       },
       {
         element: '#guide-lang',
         popover: {
           title: i18n.t('msg.guide.langTitle'),
           description: i18n.t('msg.guide.langDesc'),
           position: 'bottom-right'
         }
       },
       {
         element: '#guide-tags',
         popover: {
           title: i18n.t('msg.guide.tagTitle'),
           description: i18n.t('msg.guide.tagDesc')
         }
       },
       {
         element: '#guide-sidebar',
         popover: {
           title: i18n.t('msg.guide.sidebarTitle'),
           description: i18n.t('msg.guide.sidebarDesc'),
           position: 'right-center'
         }
       }
     ]
   }
   export default steps
   ```

4. 在 `guide` 中导入“步骤”

   ```vue
   <template>
     ...
     <svg-icon icon="guide" @click="onClick" />
     ...
   </template>

   <script setup>
   ...
   import steps from './steps'
   ...
   const onClick = () => {
     driver.defineSteps(steps(i18n))
     driver.start()
   }
   </script>

   <style scoped></style>

   ```

5. 为 **引导高亮区域增加 ID**

6. 在 `components/Guide/index` 中增加

   ```html
   <svg-icon id="guide-start" icon="guide" @click="onClick" />
   ```

7. 在 `components/Hamburger/index` 增加

   ```html
   <svg-icon id="guide-hamburger" class="hamburger" :icon="icon"></svg-icon>
   ```

8. 在 `src/layout/components` 增加

   ```html
   <breadcrumb id="guide-breadcrumb" class="breadcrumb-container" />
   ```

9. 在 `components/HeaderSearch/index` 增加

   ```html
    <svg-icon
         id="guide-search"
         class-name="search-icon"
         icon="search"
         @click.stop="onShowClick"
       />
   ```

10. 在 `components/Screenfull/index` 增加

    ```html
    <svg-icon
          id="guide-full"
          :icon="isFullscreen ? 'exit-fullscreen' : 'fullscreen'"
          @click="onToggle"
        />
    ```

11. 在 `components/ThemePicker/index` 增加

    ```html
    <svg-icon id="guide-theme" icon="change-theme" />
    ```

12. 在 `components/LangSelect/index` 增加

    ```html
    <svg-icon id="guide-lang" icon="language" />
    ```

13. 在 `layout/index` 增加

    ```html
    <tags-view id="guide-tags"></tags-view>
    ```

14. 在 `layout/index` 增加

    ```html
    <sidebar
          id="guide-sidebar"
          class="sidebar-container"
          :style="{ backgroundColor: $store.getters.cssVar.menuBg }"
        />
    ```
