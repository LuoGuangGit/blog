<template>
  <aside class="aside">
    <div class="wrapper">
      <div class="widget">
        <input class="search" type="text" placeholder="Search" maxlength="20" />
      </div>
      <div class="widget">
        <div class="widget-title">
          <i class="fa fa-folder-o"> 分类</i>
        </div>
        <ul class="category-list">
          <li class="category-list-item">
            <a class="link" href="/">测试分类1</a>
          </li>
          <li class="category-list-item">
            <a class="link" href="/">测试分类2</a>
          </li>
          <li class="category-list-item">
            <a class="link" href="/">测试分类3</a>
          </li>
          <li class="category-list-item">
            <a class="link" href="/">测试分类4</a>
          </li>
        </ul>
      </div>
      <div class="widget">
        <div class="widget-title">
          <i class="fa fa-tag"> 标签</i>
        </div>
        <div class="tag-list">
          <a class="tag-item" href="/">JavaScript</a>
          <a class="tag-item" href="/">CSS</a>
          <a class="tag-item" href="/">HTML</a>
          <a class="tag-item" href="/">Vue</a>
          <a class="tag-item" href="/">React</a>
          <a class="tag-item" href="/">Webpack</a>
          <a class="tag-item" href="/">HTTP</a>
          <a class="tag-item" href="/">Nuxt</a>
          <a class="tag-item" href="/">Node</a>
          <a class="tag-item" href="/">Koa</a>
          <a class="tag-item" href="/">Mongodb</a>
        </div>
      </div>
      <div class="widget">
        <div class="widget-title">
          <i class="fa fa-file-o"> 最近文章</i>
        </div>
        <ul class="article-list">
          <li class="article-list-item">
            <a class="link" href="/">文章1</a>
          </li>
          <li class="article-list-item">
            <a class="link" href="/">文章2</a>
          </li>
          <li class="article-list-item">
            <a class="link" href="/">文章3</a>
          </li>
          <li class="article-list-item">
            <a class="link" href="/">文章4</a>
          </li>
        </ul>
      </div>
      <div class="widget">
        <div class="widget-title">
          <i class="fa fa-external-link"> 友情链接</i>
        </div>
        <ul class="friend-list">
          <li class="friend-list-item">
            <a class="link" title="链接1" href="/" target="_blank">链接1</a>
          </li>
          <li class="friend-list-item">
            <a class="link" title="链接2" href="/" target="_blank">链接2</a>
          </li>
          <li class="friend-list-item">
            <a class="link" title="链接3" href="/" target="_blank">链接3</a>
          </li>
          <li class="friend-list-item">
            <a class="link" title="链接4" href="/" target="_blank">链接4</a>
          </li>
        </ul>
      </div>
    </div>
  </aside>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.aside {
  width: 25%;
  padding-top: 40px;
  .wrapper {
    border-left: 1px solid #ddd;
    padding-left: 35px;
    padding-bottom: 20px;
    word-wrap: break-word;
    .widget {
      margin-bottom: 30px;
      .search {
        background: #fff 8px 8px no-repeat
          url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAANCAYAAABy6%2BR8AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAG11AABzoAAA%2FN0AAINkAABw6AAA7GgAADA%2BAAAQkOTsmeoAAAESSURBVHjajNCxS9VRGMbxz71E4OwgoXPQxVEpXCI47%2BZqGP0LCoJO7UVD3QZzb3SwcHB7F3Uw3Zpd%2FAPCcJKG7Dj4u%2FK7Pwp94HDg5Xyf5z1Pr9YKImKANTzFXxzjU2ae6qhXaxURr%2FAFl9hHDy%2FwEK8z89sYVEp5gh84wMvMvGiSJ%2FEV85jNzLMR1McqfmN5BEBmnmMJFSvtpH7jdJiZv7q7Z%2BZPfMdcF6rN%2FT%2F1m2LGBkd4HhFT3dcRMY2FpskxaLNpayciHrWAGeziD7b%2BVfkithuTk8bkGa4wgWFmbrSTZOYeBvjc%2BucQj%2FEe6xHx4Taq1nrnKaW8K6XUUsrHWuvNevdRRLzFGwzvDbXAB9cDAHvhedDruuxSAAAAAElFTkSuQmCC);
        padding: 7px 11px 7px 28px;
        line-height: 16px;
        border: 1px solid #bbb;
        width: 85%;
        border-radius: 5px;
        box-shadow: none;
        outline: none;
      }
      .widget-title {
        color: #6E7173;
        line-height: 2.7;
        margin-top: 0;
        font-size: 16px;
        border-bottom: 1px solid #ddd;
      }
      ul {
        list-style: none;
        padding: 0;
        margin: 14px 0;
        li {
          margin: 5px 0;
          line-height: 1.5;
          /* .link {
            color: #6E7173;
            &:hover {
              color: #444;
            }
          } */
        }
      }
      .tag-list {
        display: flex;
        flex-wrap: wrap;
        margin: 14px 0;
        .tag-item {
          line-height: 26px;
          padding: 0px 5px;
          margin: 3px;
          border: 1px solid #808080;
          border-radius: 5px;
          color: #aaa;
          &:hover {
            color: #fff;
            border: 1px solid #808080;
            background: #808080;
          }
        }
      }
    }
  }
}
@media print, screen and (max-width: 48em) {
  .aside {
    display: none;
    .wrapper {
      border-left-width: 0px;
    }
  }
}
</style>
