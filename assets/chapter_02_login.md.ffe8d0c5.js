import{_ as s,c as n,o as a,a as l}from"./app.1d44f645.js";const C=JSON.parse('{"title":"\u901A\u7528\u540E\u53F0\u767B\u5F55\u65B9\u6848\u89E3\u6790","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u914D\u7F6E\u73AF\u5883\u53D8\u91CF\u5C01\u88C5axios\u6A21\u5757","slug":"\u914D\u7F6E\u73AF\u5883\u53D8\u91CF\u5C01\u88C5axios\u6A21\u5757","link":"#\u914D\u7F6E\u73AF\u5883\u53D8\u91CF\u5C01\u88C5axios\u6A21\u5757","children":[]},{"level":2,"title":"\u5C01\u88C5\u8BF7\u6C42\u52A8\u4F5C","slug":"\u5C01\u88C5\u8BF7\u6C42\u52A8\u4F5C","link":"#\u5C01\u88C5\u8BF7\u6C42\u52A8\u4F5C","children":[]},{"level":2,"title":"\u767B\u5F55\u9274\u6743","slug":"\u767B\u5F55\u9274\u6743","link":"#\u767B\u5F55\u9274\u6743","children":[]}],"relativePath":"chapter_02/login.md","lastUpdated":1667276002000}'),p={name:"chapter_02/login.md"},o=l(`<h1 id="\u901A\u7528\u540E\u53F0\u767B\u5F55\u65B9\u6848\u89E3\u6790" tabindex="-1">\u901A\u7528\u540E\u53F0\u767B\u5F55\u65B9\u6848\u89E3\u6790 <a class="header-anchor" href="#\u901A\u7528\u540E\u53F0\u767B\u5F55\u65B9\u6848\u89E3\u6790" aria-hidden="true">#</a></h1><p>\u5BF9\u4E8E\u767B\u5F55\u64CD\u4F5C\u5728\u540E\u53F0\u9879\u76EE\u4E2D\u662F\u4E00\u4E2A\u901A\u7528\u7684\u89E3\u51B3\u65B9\u6848\uFF0C\u5177\u4F53\u53EF\u4EE5\u5206\u4E3A\u4EE5\u4E0B\u51E0\u70B9\uFF1A</p><ol><li>\u5C01\u88C5 <code>axios</code> \u6A21\u5757</li><li>\u5C01\u88C5 \u63A5\u53E3\u8BF7\u6C42 \u6A21\u5757</li><li>\u5C01\u88C5\u767B\u5F55\u8BF7\u6C42\u52A8\u4F5C, \u767B\u5F55\u9875\u9762\u89E6\u53D1\u8BF7\u6C42\u52A8\u4F5C\u5E76\u4FDD\u5B58\u670D\u52A1\u7AEF\u8FD4\u56DE\u7684 <code>token</code></li><li>\u767B\u5F55\u9274\u6743</li></ol><p>\u8FD9\u4E9B\u5185\u5BB9\u5C31\u5171\u540C\u7684\u7EC4\u6210\u4E86\u4E00\u5957 <strong>\u540E\u53F0\u767B\u5F55\u89E3\u51B3\u65B9\u6848</strong></p><h2 id="\u914D\u7F6E\u73AF\u5883\u53D8\u91CF\u5C01\u88C5axios\u6A21\u5757" tabindex="-1">\u914D\u7F6E\u73AF\u5883\u53D8\u91CF\u5C01\u88C5axios\u6A21\u5757 <a class="header-anchor" href="#\u914D\u7F6E\u73AF\u5883\u53D8\u91CF\u5C01\u88C5axios\u6A21\u5757" aria-hidden="true">#</a></h2><p>\u6211\u4EEC\u5E0C\u671B\u5C01\u88C5\u51FA\u6765\u7684 <code>axios</code> \u6A21\u5757\uFF0C\u81F3\u5C11\u9700\u8981\u5177\u5907\u4E00\u79CD\u80FD\u529B\uFF0C\u90A3\u5C31\u662F\uFF1A<strong>\u6839\u636E\u5F53\u524D\u6A21\u5F0F\u7684\u4E0D\u540C\uFF0C\u8BBE\u5B9A\u4E0D\u540C\u7684 <code>BaseUrl</code></strong> \uFF0C\u56E0\u4E3A\u901A\u5E38\u60C5\u51B5\u4E0B\u4F01\u4E1A\u7EA7\u9879\u76EE\u5728 <strong>\u5F00\u53D1\u72B6\u6001</strong> \u548C <strong>\u751F\u4EA7\u72B6\u6001</strong> \u4E0B\u5B83\u7684 <code>baseUrl</code> \u662F\u4E0D\u540C\u7684\u3002</p><p>\u4E00\u822C\u6765\u8BF4,\u4E00\u4E2A\u9879\u76EE\u81F3\u5C11\u4F1A\u6709\u4E0B\u9762\u4E24\u79CD\u4E0D\u540C\u7684\u6A21\u5F0F</p><ol><li><code>development</code></li><li><code>production</code></li></ol><p>\u6839\u636E\u6211\u4EEC\u524D\u9762\u6240\u63D0\u5230\u7684 <strong>\u5F00\u53D1\u72B6\u6001\u548C\u751F\u4EA7\u72B6\u6001</strong> \u90A3\u4E48\u6B64\u65F6\u6211\u4EEC\u7684 <code>axios</code> \u5FC5\u987B\u8981\u6EE1\u8DB3\uFF1A<strong>\u5728 \u5F00\u53D1 || \u751F\u4EA7 \u72B6\u6001\u4E0B\uFF0C\u53EF\u4EE5\u8BBE\u5B9A\u4E0D\u540C <code>BaseUrl</code> \u7684\u80FD\u529B</strong></p><p>\u90A3\u4E48\u60F3\u8981\u89E3\u51B3\u8FD9\u4E2A\u95EE\u9898\uFF0C\u5C31\u5FC5\u987B\u8981\u4F7F\u7528\u5230 <code>vite</code> \u6240\u63D0\u4F9B\u7684 <a href="https://cn.vitejs.dev/guide/env-and-mode.html" target="_blank" rel="noreferrer">\u73AF\u5883\u53D8\u91CF</a> \u6765\u53BB\u8FDB\u884C\u5B9E\u73B0\u3002 \u6211\u4EEC\u53EF\u4EE5\u5728\u9879\u76EE\u4E2D\u521B\u5EFA\u4E24\u4E2A\u6587\u4EF6\uFF1A</p><ol><li><code>.env.development</code></li><li><code>.env.production</code></li></ol><p>\u5B83\u4EEC\u5206\u522B\u5BF9\u5E94 <strong>\u5F00\u53D1\u72B6\u6001</strong> \u548C <strong>\u751F\u4EA7\u72B6\u6001</strong>\u3002 <strong><code>.env.development</code></strong>\uFF1A</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;"># \u6807\u5FD7</span></span>
<span class="line"><span style="color:#A6ACCD;">ENV = &#39;development&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># base api</span></span>
<span class="line"><span style="color:#A6ACCD;">VITE_BASE_API = &#39;/api&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p><strong><code>.env.production</code>\uFF1A</strong></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;"># \u6807\u5FD7</span></span>
<span class="line"><span style="color:#A6ACCD;">ENV = &#39;production&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># base api</span></span>
<span class="line"><span style="color:#A6ACCD;">VITE_BASE_API = &#39;/prod-api&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u6709\u4E86\u8FD9\u4E24\u4E2A\u6587\u4EF6\u4E4B\u540E\uFF0C\u6211\u4EEC\u5C31\u53EF\u4EE5\u521B\u5EFA\u5BF9\u5E94\u7684 <code>axios</code> \u6A21\u5757</p><p>\u521B\u5EFA <code>utils/request.js</code> \uFF0C\u5199\u5165\u5982\u4E0B\u4EE3\u7801\uFF1A</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> axios </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">axios</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> service </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> axios</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">create</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">baseURL</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> process</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">env</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">VUE_APP_BASE_API</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">timeout</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">5000</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">default</span><span style="color:#A6ACCD;"> service</span></span>
<span class="line"></span></code></pre></div><h2 id="\u5C01\u88C5\u8BF7\u6C42\u52A8\u4F5C" tabindex="-1">\u5C01\u88C5\u8BF7\u6C42\u52A8\u4F5C <a class="header-anchor" href="#\u5C01\u88C5\u8BF7\u6C42\u52A8\u4F5C" aria-hidden="true">#</a></h2><p>\u6709\u4E86 <code>axios</code> \u6A21\u5757\u4E4B\u540E\uFF0C\u63A5\u4E0B\u6765\u6211\u4EEC\u5C31\u53EF\u4EE5</p><ol><li>\u5C01\u88C5\u63A5\u53E3\u8BF7\u6C42\u6A21\u5757</li><li>\u5C01\u88C5\u767B\u5F55\u8BF7\u6C42\u52A8\u4F5C</li></ol><p><strong>\u5C01\u88C5\u63A5\u53E3\u8BF7\u6C42\u6A21\u5757\uFF1A</strong></p><p>\u521B\u5EFA <code>api</code> \u6587\u4EF6\u5939\uFF0C\u521B\u5EFA <code>sys.js</code>\uFF1A</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> request </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@/utils/request</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">/**</span></span>
<span class="line"><span style="color:#676E95;"> * \u767B\u5F55</span></span>
<span class="line"><span style="color:#676E95;"> */</span></span>
<span class="line"><span style="color:#89DDFF;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> login </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">data</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">request</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    url</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">/sys/login</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">    method</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">POST</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">data</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p><strong>\u5C01\u88C5\u767B\u5F55\u8BF7\u6C42\u52A8\u4F5C\uFF1A</strong></p><p>\u8BE5\u52A8\u4F5C\u6211\u4EEC\u671F\u671B\u628A\u5B83\u5C01\u88C5\u5230 <code>Pinia</code> \u7684 <code>actions</code> \u4E2D</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki"><code><span class="line"><span style="color:#FFCB6B;">actions</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#676E95;">/**</span></span>
<span class="line"><span style="color:#676E95;">   * \u767B\u5F55\u8BF7\u6C42\u52A8\u4F5C</span></span>
<span class="line"><span style="color:#676E95;">   * </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">param</span><span style="color:#676E95;"> </span><span style="color:#A6ACCD;">loginData</span></span>
<span class="line"><span style="color:#676E95;">   * </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">returns</span></span>
<span class="line"><span style="color:#676E95;">   */</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">async</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">login</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">loginData</span><span style="color:#F07178;">: </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> username</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">string</span><span style="color:#F07178;">; </span><span style="color:#A6ACCD;">password</span><span style="color:#F07178;">: </span><span style="color:#A6ACCD;">string</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">username</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">password</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">loginData</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">res</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">await</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">login</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">username</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">password</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">if</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">res</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">status</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">===</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">200</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">this.</span><span style="color:#82AAFF;">setToken</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">res</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">token</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">this.</span><span style="color:#82AAFF;">setUserInfo</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">res</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">data</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">      </span><span style="color:#676E95;">// \u8DF3\u8F6C</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#A6ACCD;">router</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">push</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">/</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">Promise</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">resolve</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">res</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">data</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">Promise</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">reject</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">res</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">statusText</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="\u767B\u5F55\u9274\u6743" tabindex="-1">\u767B\u5F55\u9274\u6743 <a class="header-anchor" href="#\u767B\u5F55\u9274\u6743" aria-hidden="true">#</a></h2><p>\u5728\u5904\u7406\u4E86\u767B\u9646\u540E\u64CD\u4F5C\u4E4B\u540E\uFF0C\u63A5\u4E0B\u6765\u6211\u4EEC\u5C31\u6765\u770B\u4E00\u4E0B\u6700\u540E\u7684\u4E00\u4E2A\u529F\u80FD\uFF0C\u4E5F\u5C31\u662F <strong>\u767B\u5F55\u9274\u6743</strong></p><p>\u9996\u5148\u6211\u4EEC\u5148\u53BB\u5BF9 <strong>\u767B\u5F55\u9274\u6743</strong> \u8FDB\u884C\u4E00\u4E2A\u5B9A\u4E49\uFF0C\u4EC0\u4E48\u662F <strong>\u767B\u5F55\u9274\u6743</strong> \u5462\uFF1F</p><blockquote><p>\u5F53\u7528\u6237\u672A\u767B\u9646\u65F6\uFF0C\u4E0D\u5141\u8BB8\u8FDB\u5165\u9664 <code>login</code> \u4E4B\u5916\u7684\u5176\u4ED6\u9875\u9762\u3002</p><p>\u7528\u6237\u767B\u5F55\u540E\uFF0C<code>token</code> \u672A\u8FC7\u671F\u4E4B\u524D\uFF0C\u4E0D\u5141\u8BB8\u8FDB\u5165 <code>login</code>,<code>401</code>\u7B49\u767D\u540D\u5355\u9875\u9762</p></blockquote><p>\u800C\u60F3\u8981\u5B9E\u73B0\u8FD9\u4E2A\u529F\u80FD\uFF0C\u90A3\u4E48\u6700\u597D\u7684\u65B9\u5F0F\u5C31\u662F\u901A\u8FC7 <a href="https://router.vuejs.org/zh/guide/advanced/navigation-guards.html#%E5%85%A8%E5%B1%80%E5%89%8D%E7%BD%AE%E5%AE%88%E5%8D%AB" target="_blank" rel="noreferrer">\u8DEF\u7531\u5B88\u536B</a> \u6765\u8FDB\u884C\u5B9E\u73B0\u3002</p><p>\u90A3\u4E48\u660E\u786E\u597D\u4E86 <strong>\u767B\u5F55\u9274\u6743</strong> \u7684\u6982\u5FF5\u4E4B\u540E\uFF0C\u63A5\u4E0B\u6765\u5C31\u53EF\u4EE5\u53BB\u5B9E\u73B0\u4E00\u4E0B</p><p>\u5728 <code>main.ts</code> \u5E73\u7EA7\uFF0C\u521B\u5EFA <code>permission.ts</code> \u6587\u4EF6\uFF0C\u5E76\u5728 <code>main.ts</code> \u4E2D\u8FDB\u884C\u5BFC\u5165</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;">// \u5904\u7406\u8DEF\u7531\u5B88\u536B</span></span>
<span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> router </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@/router</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">getItem</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@/assets/js/utils/storage</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">TOKEN</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@/assets/js/utils/constant</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> whiteList </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> [</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">/login</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">]</span></span>
<span class="line"><span style="color:#676E95;">/**</span></span>
<span class="line"><span style="color:#676E95;"> * \u8DEF\u7531\u524D\u7F6E\u5B88\u536B</span></span>
<span class="line"><span style="color:#676E95;"> * to: \u8981\u5230\u54EA\u91CC\u53BB</span></span>
<span class="line"><span style="color:#676E95;"> * from: \u4ECE\u54EA\u91CC\u6765</span></span>
<span class="line"><span style="color:#676E95;"> * next: \u662F\u5426\u8981\u53BB?</span></span>
<span class="line"><span style="color:#676E95;"> */</span></span>
<span class="line"><span style="color:#A6ACCD;">router</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">beforeEach</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">to</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">from</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">next</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">token</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">getItem</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">TOKEN</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> path</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">toPath</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">to</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">if</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">token</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;">// 1 \u5DF2\u767B\u5F55 -&gt; \u4E0D\u5141\u8BB8\u8FDB\u5165 Login\u9875\u9762</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">if</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">toPath</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">===</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">/login</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">) </span><span style="color:#82AAFF;">next</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">/</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">else</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">next</span><span style="color:#F07178;">()</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;">// 2 \u672A\u767B\u5F55 -&gt; \u53EA\u80FD\u8FDB\u5165\u767D\u540D\u5355\u9875\u9762</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">else</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">if</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">whiteList</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">indexOf</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">toPath</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">&gt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">-</span><span style="color:#F78C6C;">1</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#82AAFF;">next</span><span style="color:#F07178;">()</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">else</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#82AAFF;">next</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">/login</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span></code></pre></div>`,35),e=[o];function t(c,r,y,F,D,i){return a(),n("div",null,e)}const d=s(p,[["render",t]]);export{C as __pageData,d as default};
