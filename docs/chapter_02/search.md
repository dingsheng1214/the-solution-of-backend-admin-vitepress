# 搜索方案解析

如果我们想要进行  [模糊搜索](https://fusejs.io/)  的话，那么需要依赖一个第三方的库  [fuse.js](https://fusejs.io/)

1. 安装 [fuse.js](https://fusejs.io/)

   ```sh
   npm install --save fuse.js@6.4.6
   ```

2. 初始化 `Fuse`，更多初始化配置项 [可点击这里](https://fusejs.io/api/options.html)

   ```js
   import Fuse from 'fuse.js'

   /**
    * 搜索库相关
    */
   const fuse = new Fuse(list, {
       // 是否按优先级进行排序
       shouldSort: true,
       // 匹配长度超过这个值的才会被认为是匹配的
       minMatchCharLength: 1,
       // 将被搜索的键列表。 这支持嵌套路径、加权搜索、在字符串和对象数组中搜索。
       // name：搜索的键
       // weight：对应的权重
       keys: [
         {
           name: 'title',
           weight: 0.7
         },
         {
           name: 'path',
           weight: 0.3
         }
       ]
     })

   ```

3. 参考 [Fuse Demo](https://fusejs.io/demo.html) 与 最终效果，可以得出，我们最终期望通过处理左侧菜单栏路由信息得到如下的检索数据源结构

   ```json
   [
       {
           "path":"/my",
           "title":[
               "个人中心"
           ]
       },
       {
           "path":"/user",
           "title":[
               "用户"
           ]
       },
       {
           "path":"/user/manage",
           "title":[
               "用户",
               "用户管理"
           ]
       },
       {
           "path":"/user/info",
           "title":[
               "用户",
               "用户信息"
           ]
       },
       {
           "path":"/article",
           "title":[
               "文章"
           ]
       },
       {
           "path":"/article/ranking",
           "title":[
               "文章",
               "文章排名"
           ]
       },
       {
           "path":"/article/create",
           "title":[
               "文章",
               "创建文章"
           ]
       }
   ]
   ```

  处理过程如下:

  ```ts
  export const generateSearchPool = (routes: RouteRecordRaw[], parent: string[] = []) => {
    const result: SearchPoolItem[] = []
    routes.forEach((route) => {
      const a: SearchPoolItem = {
        path: route.path,
        title: [...parent, generateTitle(route?.meta?.title as string)],
      }
      result.push(a)
      if (route!.children!.length > 0) {
        result.push(...generateSearchPool(route.children || [], a.title))
      }
    })
    return result
  }
  ```

  在vue中添加搜索方法,如下:

  ```ts
     // 搜索结果
   const searchOptions = ref([])
   // 搜索方法
   const querySearch = query => {
     if (query !== '') {
       searchOptions.value = fuse.search(query)
     } else {
       searchOptions.value = []
     }
   }
  ```

## 方案总结

那么到这里整个的 `headerSearch` 我们就已经全部处理完成了，整个 `headerSearch` 我们只需要把握住三个核心的关键点

1. 根据指定内容对所有页面进行检索
2. 以 `select` 形式展示检索出的页面
3. 通过检索页面可快速进入对应页面

保证大方向没有错误，那么具体的细节处理我们具体分析就可以了。

关于细节的处理，可能比较复杂的地方有两个：

1. 模糊搜索
2. 检索数据源

对于这两块，我们依赖于 `fuse.js` 进行了实现，大大简化了我们的业务处理流程。