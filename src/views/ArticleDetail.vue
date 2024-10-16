<template>
    <div style="background-color: #fafafa;" v-if="article.id">
      <div style="width: 1310px;height: 2000px;margin: 0 auto;position: relative;top: 15px;">

        <div style="width: 300px;height: 580px;display: inline-block;margin-right: 8px;">

          <div style="position: fixed;">
            <div style="width: 300px;height: 295px;padding-bottom: 10px;margin-bottom: 8px;background-color: rgb(255, 255, 255);">
              <span
              @click="$router.push(`/userdetail/${article.id}`)"
              style="width: 120px;height: 120px;margin: 90px 90px 0 90px;"><img :src="article.creatorAvatar" alt="" style="width: 120px;height: 120px;border-radius: 100px;"></span>
              <div style="width: 126px;height: 36px;margin: 20px auto;text-align: center;">{{article.creatorName}}</div>
              <div style="width: 240px;height: 50px;margin: 0 auto;">
                <div style="width: 32px;height: 50px;text-align: center;float: left;margin-right: 28px;margin-left: 12px;">
                  <span style="width: 32px;height: 19px;text-align: center;">文章</span>
                  <span style="width: 18px;height: 19px;text-align: center;">{{article.questionBankType}}</span>
                </div>
                <div style="width: 32px;height: 50px;text-align: center;float: left;margin-right: 28px;">
                  <span style="width: 32px;height: 19px;text-align: center;">粉丝</span>
                  <span style="width: 18px;height: 19px;text-align: center;">{{article.questionType}}</span>
                </div>
                <div style="width: 32px;height: 50px;text-align: center;float: left;margin-right: 28px;">
                  <span style="width: 32px;height: 19px;text-align: center;">获赞</span>
                  <span style="width: 18px;height: 19px;text-align: center;">{{article.likeCount}}</span>
                </div>
                <div style="width: 32px;height: 50px;text-align: center;float: left;">
                  <span style="width: 32px;height: 19px;text-align: center;">收藏</span>
                  <span style="width: 18px;height: 19px;text-align: center;">{{article.likeFlag}}</span>
                </div>
              </div>
              <button style="width: 200px;height: 30px;background-color: red;border: none;border-radius: 15px;margin: 5px 50px;color: white;">关注</button>
            </div>

            <div style="width: 300px;height: 48px; margin-bottom: 8px;background-color: rgb(255, 255, 255);">
              <div style="margin: 0px auto;width: 281px;"><input type="text" class="input" placeholder="搜博主文章"><button class="inputbtn">搜索</button></div>
            </div>

            <div style="width: 300px;height: 186px;margin-bottom: 8px;background-color: rgb(255, 255, 255);">
              <div style="width: 268px;height: 38px;padding: 0 16px;"><h4 style="position: relative;top: 6px;">热门文章</h4></div>
              <div style="width: 268px;height: 120px;padding: 12px 16px 16px 16px;border-top: 0.01px solid rgb(219, 219, 219);">
                <div
                v-for="(item,index) in filteredArticles(0,4)"
                :key="item.id"
                @click="shuaxin(item.id)"
                style="width: 268px;height: 24px;padding: 2px 0;">
                  <div style="display: none;">{{ index }}</div>
                  <div href="" style="width: 268px;height: 24px;text-decoration: none;color: #878792;"><p class="ycsl1" style="height: 24px;width: 216px;float: left;">{{item.stem}}</p><p style="width: 48px;height: 24px;float: right;"><img src="../assets/icon/yanjing.png" alt="" style="width: 14px;height: 14px;margin-left: 4px;margin-top: 3px;float: left;">{{item.views}}</p></div>
                </div>

              </div>
            </div>

            <div style="width: 300px;height: 186px;background-color: rgb(255, 255, 255);">
              <div style="width: 268px;height: 38px;padding: 0 16px;"><h4 style="position: relative;top: 6px;">其他文章</h4></div>
              <div style="width: 268px;height: 120px;padding: 12px 16px 16px 16px;border-top: 0.01px solid rgb(219, 219, 219);">
                <div
                v-for="(item,index) in filteredArticles(5,9)"
                :key="item.id"
                @click="$router.push(`/detail/${item.id}`)"
                style="width: 268px;padding: 2px 0;">
                  <div style="display: none;">{{ index }}</div>
                  <div href="" style="width: 268px;height: 24px;text-decoration: none;color: #878792;"><p class="ycsl1" style="height: 24px;width: 216px;float: left;">{{item.stem}}</p><p style="width: 48px;height: 24px;float: right;"><img src="../assets/icon/yanjing.png" alt="" style="width: 14px;height: 14px;margin-left: 4px;margin-top: 3px;float: left;">{{item.views}}</p></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div style="display: inline-block;position: absolute;">
          <div class="article-detail-page">
            <!-- <nav class="nav"><span @click="$router.back()" class="back">&lt;</span> 面经详情</nav> -->
            <header class="header">
              <h1>{{article.stem}}</h1>
              <p>{{article.createdAt}} | {{article.views}} 浏览量 | 44 点赞数</p>
              <!-- <p>
                <img
                  :src="article.creatorAvatar"
                  alt=""
                />
                <span>{{article.creatorName}}</span>
              </p> -->
            </header>
            <main class="body">
              {{article.content}}
            </main>
            <div class="root">
              <div style="margin: 0 auto;width: 100px;height: 24px;">
                <div><button @click="dz" style="width: 30px;height: 30px;float: left;border: none;"><img id="dz" src="../assets/icon/点赞.png" alt="" style="width: 100%;height: 100%;"></button><p style="width: 20px;height: 35px;float: left;margin-top: 5px;margin-left: 5px;">11</p></div>
                <div><button @click="sc" style="width: 30px;height: 30px;float: right;border: none;"><img id="sc" src="../assets/icon/收藏.png" alt="" style="width: 100%;height: 100%;"></button></div>
              </div>
            </div>
          </div>
        </div>

        <!-- <div style="width: 300px;height: 674px;position: relative;bottom: 1000px; float: right;">
          <div style="width: 300px;height: 455px;margin-bottom: 8px;background-color: rgb(0, 0, 0);"></div>
          <div style="width: 300px;height: 186px;background-color: rgb(0, 0, 0);"></div>
        </div> -->

      </div>
    </div>

  </template>

<script>
// 请求地址: https://mock.boxuegu.com/mock/3083/articles/:id
// 请求方式: get
import axios from 'axios'
import { $router } from 'vue-router'

export default {
  name: 'ArticleDetailPage',
  data () {
    return {
      article: {},
      allarticles: []
    }
  },
  async created () {
    const id = this.$route.params.id
    const { data } = await axios.get(`https://mock.boxuegu.com/mock/3083/articles/${id}`)
    this.article = data.result
    console.log(this.article)

    const res = await axios.get('https://mock.boxuegu.com/mock/3083/articles')
    this.allarticles = res.data.result.rows
    console.log(this.allarticles)
  },
  methods: {
    filteredArticles (n, m) {
      const slicedArray = this.allarticles.slice(n, m + 1)
      return slicedArray.reverse()
    },
    dz () {
      if (this.$store.state.log !== 1) {
        alert('请先登录')
        this.$router.push('/logon')
      } else {
        document.getElementById('dz').src = '.../assets/icon/点赞后.png'
      }
    },
    sc () {
      if (this.$store.state.log !== 1) {
        alert('请先登录')
        this.$router.push('/logon')
      } else {
        document.getElementById('sc').src = '.../assets/icon/收藏后.png'
      }
    },
    shuaxin (n) {
      $router.push(`/detail/${n}`)
    }
  }

}
</script>

  <style lang="less" scoped>
  *{
    margin: 0;
    padding: 0;
  }
  .article-detail-page {
    width: 1010px;
    height: 2000px;
    text-align: center;
    // margin: 0 50px;
    padding: 0 24px;
    background-color: white;
    // position: absolute;
    // left:310px;
    // .nav {
    //   height: 44px;
    //   border-bottom: 1px solid #e4e4e4;
    //   line-height: 44px;
    //   text-align: center;
    //   .back {
    //     font-size: 18px;
    //     color: #666;
    //     position: absolute;
    //     left: 10px;
    //     top: 0;
    //     transform: scale(1, 1.5);
    //   }
    // }
    .header {
      padding: 0 15px;
      p {
        color: #999;
        font-size: 12px;
        // display: flex;
        align-items: center;
      }
      img {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        overflow: hidden;
      }
    }
    .body {
      padding: 0 15px;
    }
  }
  .input{
        border: 1px none;
        border-top-left-radius: 15px;
        border-bottom-left-radius: 15px;
        width: 220px;
        height: 30px;
        margin: 10px auto;
        padding-left: 8px;
        background-color: #f5f6f7;
    }
    .inputbtn{
        position: relative;
        top: 2px;
        border-top-right-radius: 15px;
        border-bottom-right-radius: 15px;
        margin-bottom: 15px;
        font-size: 15px;
        width: 50px;
        height: 30px;
        color: white;
        background-color: rgba(160, 160, 160, 0.632);
        border: none;
    }
    .root{
      position: absolute;
      bottom: 5px;
      left: 0;
      width: 1010px;
      height: 30px;
      padding: 17px 24px;
      background-color: #f0f0f0;
      // border-top: 1px #999 solid;
    }
    .ycsl1{
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
    width: 200px;
    cursor: pointer
}
  </style>
