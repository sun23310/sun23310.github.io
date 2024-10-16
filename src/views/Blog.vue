<template>
  <div style="background-color: #fafafa;">
    <div class="container">
      <div class="main1">
        <div style="width: 996px;height: 56px;border-bottom: 0.01px solid rgb(219, 219, 219);padding-left: 25px;padding-right: 25px;">
          <h2 style="float: left;margin: 10px 10px;width: 112px;height: 56px;">精选文篇</h2>
          <div style="width: 100%;">
            <div @click="$router.push(`/hotchart`)"
              style="float: right;width: 70px;height: 40px;padding: 10px 10px;">
              <img src="../assets/排行榜.png" alt="" style="float: left;">
              <p style="text-decoration: none;color: #9a9aaa;">排行榜</p>
            </div>
          </div>
        </div>
        <!-- 文章 -->
        <!-- // :href="`/detail/${item.id}`" -->
        <div
        v-for="item in articles"
        :key="item.id"
        @click="$router.push(`/detail/${item.id}`)"
        style="width:996px;height: 142px;border-bottom: 0.01px solid rgb(219, 219, 219);padding-left: 25px;padding-right: 25px;"
        id="xbox">
          <div style="width: 996px;height: 102px;padding: 20px 0 20px 0;">
            <div style="width: 178px;height: 100px;float: left;margin-right: 16px;padding-top: 2px;">
              <div href="" style="width: 178px;height: 100px;"><img src="../assets/前端.png" alt=""></div>
            </div>
            <div style="width: 802px;height: 102px;float: left;">
              <div style="width: 802px;height: 71px;">
                <p class="ycsl2" style="width: 802px;height: 25px;">{{item.stem}}</p>
                <p class="ycsl2" style="width: 802px;height: 42px;margin-top: 4px;">{{item.content}}</p>
              </div>
              <div style="width: 802px;height: 21px;margin-top: 10px;float: left;">
                <div @click="dz" style="width: 70px;height: 20px;float: left;">
                  <img src="../assets/icon/点赞.png" id="dz" alt="" style="width: 16px;height: 16px;">{{item.likeCount}}赞
                </div>
                <!-- <div style="width: 70px;height: 20px;float: left;">
                  <img src="../assets/踩前.png" alt="" style="width: 16px;height: 16px;">踩
                </div> -->
                <div style="height: 20px;float: left;">
                  作者：{{ item.creatorName }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="main2">
        <div style="width: 336px;height: 670px;padding-top: 2px;padding-bottom: 16px;margin-bottom: 16px;border: 0.01px solid rgb(219, 219, 219);">
          <div style="width: 288px;height: 53px;padding-left: 24px;padding-right: 24px;border-bottom: 0.01px solid rgb(219, 219, 219);">
            <h3 style="padding: 12px 0;">作者推荐</h3>
          </div>

         <div style="width: 288px;height: 600px;padding: 24px 24px 8px 24px;">

            <div
            v-for="(item,index) in filteredArticles(0,9)"
            :key="item.id"
            @click="$router.push(`/userdetail/${item.id}`)"
            style="width: 288px;height: 44px;margin-bottom: 16px;">
              <div style="display: none;">{{ index }}</div>
              <div style="width: 52px;height: 44px;float: left;"><img src="../assets/CSDN.png" alt="" style="width: 42px;height: 42px;margin-right: 8px;border-radius:20px;"></div>
              <div style="width: 172px;height: 37px;margin-left: 8px;float: left;">
                <p class="ycsl1" style="width: 172px;">{{item.stem}}</p>
                <p class="ycsl1" style="width: 172px;color: #9a9aaa;font-size: 3px;">它很懒，还没有设置个人简介</p>
              </div>
              <div class="gz">关注</div>
            </div>

         </div>
        </div>

        <div style="width: 336px;height: 670px;padding-top: 2px;padding-bottom: 16px;margin-bottom: 16px;border: 0.01px solid rgb(219, 219, 219);">
          <div style="width: 288px;height: 53px;padding-left: 24px;padding-right: 24px;border-bottom: 0.01px solid rgb(219, 219, 219);">
            <h3 style="padding: 12px 0;">官方博客</h3>
          </div>

         <div style="width: 288px;height: 600px;padding: 24px 24px 8px 24px;">

            <div
            v-for="item in articles"
            :key="item.id"
            @click="$router.push(`/userdetail/${item.id}`)"
            style="width: 288px;height: 44px;margin-bottom: 16px;">
              <!-- <div style="display: none;">{{ index }}</div> -->
              <div style="width: 52px;height: 44px;float: left;"><img src="../assets/CSDN.png" alt="" style="width: 42px;height: 42px;margin-right: 8px;border-radius:20px;"></div>
              <div style="width: 172px;height: 37px;margin-left: 8px;float: left;">
                <p class="ycsl1" style="width: 172px;">{{item.stem}}</p>
                <p class="ycsl1" style="width: 172px;color: #9a9aaa;font-size: 3px;">它很懒，还没有设置个人简介</p>
              </div>
              <div class="gz">关注</div>
            </div>

         </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'BlogPage',
  components: {
  },
  data () {
    return {
      articles: []

    }
  },
  async created () {
    const res = await axios.get('https://mock.boxuegu.com/mock/3083/articles')
    this.articles = res.data.result.rows
  },
  methods: {
    filteredArticles (n, m) {
      const slicedArray = this.articles.slice(n, m + 1)
      return slicedArray.reverse()
    },
    dz () {
      if (this.$store.state.log !== 1) {
        alert('请先登录')
        this.$router.push('/logon')
      } else {
        document.getElementById('dz').src = '../assets/icon/点赞后.png'
      }
      event.stopPropagation()
    }
  }
}
</script>

<style lang="less" scoped>
*{
  margin: 0;
  padding: 0;
}
.container{
  position: relative;
  top: 25px;
  width: 1383px;
  height: 1550px;
  margin:0 auto;
  background-color: white;
}
.header{
  position: relative;
  top: 70px;
  margin:0 auto;
  width: 1383px;
  height: 400px;
  background-color: #fafafa;
}
.header1{
  width: 420px;
  height: 400px;
  float: left;
}
.header2{
  width: 304px;
  height: 400px;
  float: left;
}
.header3{
  width: 304px;
  height: 400px;
  float: left;
}
.header4{
  width: 338px;
  height: 400px;
  margin-left: 10px;
  float: right ;
  border: 0.01px solid rgb(227, 227, 227);
}

.ycsl1{
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
    width: 200px;
    cursor: pointer
}

.ycsl2{
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
    width: 200px;
    cursor: pointer
}
.main1{
  width: 996px;
  height: 1550px;
  float: left;
}
.main2{
  width: 338px;
  height: 1550px;
  float: right;
}
.gz{
  width: 46px;
  height: 19px;
  border-radius: 50px;
  margin-left: 12px;
  text-align: center;
  font-size: 5px;
  padding-top: 3px;
  float: right;
  border: 0.6px #c6c6c6 solid;
  background-color: white;
  position: relative;
  bottom: 35px;
}
#xbox:hover{
  background-color: #fafafa;
}
.gz:hover{
  border-color: black;
}
</style>
