<template>
  <div class="wrapper">
    <article class="article">
      <h1 class="article-title">
        <a class="link" href="/">测试文章</a>
      </h1>
      <div class="article-meta">2020年06月28日</div>
      <div class="article-content">
        随着年纪的增长，惰性真是越来越强，目测今年的更新数量不会超过5篇了。但实际上每天花在电脑上的时间一点也不少，总有折腾不完的东西——VPS，路由器，手机，PC，电视盒子……并且每次涉足点什么的时候总是废寝忘食，仿佛为此而生，如果工作上能有这一半的劲头，也不至于总是这副听天由命混吃等死的咸鱼样。
      </div>
      <div class="article-more">
        <a class="link" href="/">阅读全文</a>
      </div>
    </article>
    <nav class="navigator">
      <pager :hide-if-one-page="false" :total-page="50" :current-page.sync="currentPage" @update:currentPage="updatePage" />
    </nav>
  </div>
</template>

<script>
import Pager from '@/components/Pager'

export default {
  components: {
    Pager
  },
  data () {
    return {
      currentPage: 1
    }
  },
  methods: {
    updatePage(page) {
      this.currentPage = page
      // TODO: get article list data
    }
  }
};
</script>

<style lang="scss" scoped>
.article {
  padding: 25px 0 15px;
  .article-title {
    margin: 0;
    color: #555;
    text-align: left;
    font: bold 25px/1.1 "ff-tisa-web-pro", Cambria, "Times New Roman", Georgia, Times, sans-serif;
    .link {
      color: #555;
    }
  }
  .article-meta {
    padding: 0;
    margin: 15px 0 0;
    color: #6E7173;
    text-indent: .15em;
    &::before {
      font-family: "FontAwesome";
      content: "\f073";
      padding-right: 0.3em;
    }
  }
  .article-content {
    font-size: 15px;
    line-height: 1.77;
    color: #444;
    padding-top: 15px;
    text-align: justify;
    text-justify: distribute;
    word-break: normal;
  }
  .article-more {
    display: flex;
    justify-content: flex-end;
    margin-top: 10px;
    .link {
      font-size: 14px;
      color: #444;
      padding: 5px 10px;
      border: 1px solid #ddd;
      border-radius: 5px;
      &::after {
        font-family: "FontAwesome";
        content: "\f101";
        padding-left: 0.3em;
      }
      &:hover {
        background: #F8F8F8;
      }
    }
  }
}
.navigator {
  border-top: 1px solid #ddd;
  list-style: none;
  margin-top: 25px;
  padding: 25px 0 0;
  font-size: 14px;
  text-align: center;
}
</style>
