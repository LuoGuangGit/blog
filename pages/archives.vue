<template>
  <div class="wrapper">
    <div class="archive">
      <div class="archive-list">
        <div class="archive-item">
          <h2 class="archive-time">2020</h2>
          <ul class="article-list">
            <li class=".article-item">
              <span class="article-date">2020年04月19日</span>
              <nuxt-link class="article-link" to="/" title="文章标题">文章标题</nuxt-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.archive {
  padding: 25px 0 15px;
  .archive-list {
    font-size: 15px;
    line-height: 2;
    padding-bottom: .8em;
    .archive-item {
      .archive-time {
        margin: 0;
        font: bold 25px / 1.1 "ff-tisa-web-pro", Cambria, "Times New Roman", Georgia, Times, sans-serif;
      }
      .article-list {
        margin: 15px 0;
        padding-left: 40px;
        .article-item {
          .article-date {
            padding-right: .7em;
          }
        }
      }
    }
  }
}
</style>
