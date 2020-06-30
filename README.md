# blog

个人博客，纯静态，支持Markdown格式，基于Vue、Nuxt等技术构建

## 介绍

从入行前端以来，一直都不知道该用什么做自己的博客写作平台，从大学开始，先后折腾过hexo、hugo、vuepress等等静态网站生成工具，甚至自己用Vue写过一个简易的静态博客，但以上种种方案，从可维护性、可拓展性等方面来讲，都不如人意

偶然接触到Nuxt这个基于Vue的SSR框架后，发现用它来做为静态博客的开发工具非常合适，故诞生了本项目

核心逻辑非常简单，有想法的人可以使用本项目作为模板来进行二次开发

博客界面的UI参考自`maupassant`这个hexo主题，并进行了一些修改和定制，个人非常喜欢这种“大道至简”的风格，在个人的其他项目中也多次采用了这种黑白灰的万能配色模式，故选它作为自己博客的界面模板

> PS:之所以博客不使用Vue+Koa+MongoDB这样的全栈开发方案，一是因为个人对Node相关的后台技术栈还不太熟悉，二是服务器相关的维护成本太高

## 使用

克隆本项目，运行如下命令，即可使用

```bash
# 安装
$ npm install

# 启动
$ npm run dev

# 构建
$ npm run build
$ npm run start

# 生成
$ npm run generate
```

## 参考

[田勇的博客](https://github.com/tianyong90/blog)
[Deswan's Blog](https://github.com/deswan/blog-static)
[nuxt-markdown-blog-starter](https://github.com/marinaaisa/nuxt-markdown-blog-starter)
[nuxt-blog-frontmatter-markdown-loader](https://github.com/regenrek/nuxt-blog-frontmatter-markdown-loader)
[starter-for-nuxt-markdown-blog](https://github.com/jennapederson/starter-for-nuxt-markdown-blog)
[maupassant-hexo](https://github.com/tufu9441/maupassant-hexo)
[blog-nuxt](https://gitee.com/chinesee/blog-nuxt)
