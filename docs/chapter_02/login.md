# 登录方案解析

对于登录操作在后台项目中是一个通用的解决方案，具体可以分为以下几点：

1. 封装 `axios` 模块
2. 封装 接口请求 模块
3. 封装登录请求动作, 登录页面触发请求动作并保存服务端返回的 `token`
4. 登录鉴权

这些内容就共同的组成了一套 **后台登录解决方案**

## 配置环境变量封装axios模块

我们希望封装出来的 `axios` 模块，至少需要具备一种能力，那就是：**根据当前模式的不同，设定不同的 `BaseUrl`** ，因为通常情况下企业级项目在 **开发状态** 和 **生产状态** 下它的 `baseUrl` 是不同的。

一般来说,一个项目至少会有下面两种不同的模式

1. `development`
2. `production`

根据我们前面所提到的 **开发状态和生产状态** 那么此时我们的 `axios` 必须要满足：**在 开发 || 生产 状态下，可以设定不同 `BaseUrl` 的能力**

那么想要解决这个问题，就必须要使用到 `vite` 所提供的 [环境变量](https://cn.vitejs.dev/guide/env-and-mode.html) 来去进行实现。
我们可以在项目中创建两个文件：

1. `.env.development`
2. `.env.production`

它们分别对应 **开发状态** 和 **生产状态**。
**`.env.development`**：

```
# 标志
ENV = 'development'

# base api
VITE_BASE_API = '/api'
```

**`.env.production`：**

```
# 标志
ENV = 'production'

# base api
VITE_BASE_API = '/prod-api'
```

有了这两个文件之后，我们就可以创建对应的 `axios` 模块

创建 `utils/request.js` ，写入如下代码：

```js
import axios from 'axios'

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000
})

export default service
```

## 封装请求动作

有了 `axios` 模块之后，接下来我们就可以

1. 封装接口请求模块
2. 封装登录请求动作

**封装接口请求模块：**

创建 `api` 文件夹，创建 `sys.js`：

```js
import request from '@/utils/request'

/**
 * 登录
 */
export const login = data => {
  return request({
    url: '/sys/login',
    method: 'POST',
    data
  })
}
```

**封装登录请求动作：**

该动作我们期望把它封装到 `Pinia` 的 `actions` 中

```ts
actions: {
  /**
   * 登录请求动作
   * @param loginData
   * @returns
   */
  async login(loginData: { username: string; password: string }) {
    const { username, password } = loginData
    const res = await login({ username, password })
    if (res.status === 200) {
      this.setToken(res.token)
      this.setUserInfo(res.data)
      // 跳转
      router.push('/')
      return Promise.resolve(res.data)
    }
    return Promise.reject(res.statusText)
  },
}
```

## 登录鉴权

在处理了登陆后操作之后，接下来我们就来看一下最后的一个功能，也就是 **登录鉴权**

首先我们先去对 **登录鉴权** 进行一个定义，什么是  **登录鉴权** 呢？

> 当用户未登陆时，不允许进入除 `login` 之外的其他页面。
>
> 用户登录后，`token` 未过期之前，不允许进入 `login`,`401`等白名单页面

而想要实现这个功能，那么最好的方式就是通过 [路由守卫](https://router.vuejs.org/zh/guide/advanced/navigation-guards.html#%E5%85%A8%E5%B1%80%E5%89%8D%E7%BD%AE%E5%AE%88%E5%8D%AB) 来进行实现。

那么明确好了 **登录鉴权** 的概念之后，接下来就可以去实现一下

在 `main.ts` 平级，创建 `permission.ts` 文件，并在 `main.ts` 中进行导入

```ts
// 处理路由守卫
import router from '@/router'
import { getItem } from '@/assets/js/utils/storage'
import { TOKEN } from '@/assets/js/utils/constant'

const whiteList = ['/login']
/**
 * 路由前置守卫
 * to: 要到哪里去
 * from: 从哪里来
 * next: 是否要去?
 */
router.beforeEach((to, from, next) => {
  const token = getItem(TOKEN)
  const { path: toPath } = to
  if (token) {
    // 1 已登录 -> 不允许进入 Login页面
    if (toPath === '/login') next('/')
    else next()
  }
  // 2 未登录 -> 只能进入白名单页面
  else if (whiteList.indexOf(toPath) > -1) {
    next()
  } else {
    next('/login')
  }
})
```
