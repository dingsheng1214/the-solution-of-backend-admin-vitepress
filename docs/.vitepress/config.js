import {defineConfig} from 'vitepress'

export default defineConfig({
  base: '/the-solution-of-backend-admin-vitepress/',
  title: 'Vue3通用后台前端解决方案',
  description: 'Vue3通用后台前端解决方案',
  lang: 'zh-cn',
  lastUpdated: true,
  themeConfig: {
    // 侧边栏
    sidebar: [
      {
        text: '编程规范解决方案',
        items: [
          {text: '为什么需要编程规范', link: 'chapter_01/00_why'},
          {
            text: '代码检测 ESLint',
            link: 'chapter_01/01_eslint',
          },
          {text: '代码格式化 Prettier', link: 'chapter_01/02_prettier'},
          {
            text: '约定式提交规范 Commitizen',
            link: 'chapter_01/03_约定式提交规范',
          },
          {text: 'Git Hooks', link: 'chapter_01/04_githooks'},
          {text: '总结', link: 'chapter_01/总结'},
        ],
      },
      {
        text: '业务解决方案',
        items: [
          {text: '自定义Svg图标组件-SvgIcon', link: 'chapter_02/svg.md'},
          {text: '登录方案解析', link: 'chapter_02/login.md'},
          {text: '退出方案解析', link: 'chapter_02/logout.md'},
          {text: '面包屑方案解析', link: 'chapter_02/breadcrumb.md'},
          {text: '国际化解决方案', link: 'chapter_02/i18n.md'},
        ],
      },
    ],
  },
})
