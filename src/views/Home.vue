<template>
  <div>
    <!-- 头部 -->
    <div style="background-color: #fafafa;height: 500px;">
      <div class="header">
        <div
        v-for="(item,index) in filteredArticles(5,5)"
        :key="item.id"
        @click="$router.push(`/detail/${item.id}`)"
        class="header1">
          <div style="width: 420px;height: 24px;margin-bottom: 16px;position: relative;top:0%"><img src="../assets/头条.png" style="float: left;"><h3>头条</h3></div>
          <img src="../assets/宇宙之眼.png" style="width: 420px;height: 232px;">
          <div style="padding-bottom: 10px;">
            <div style="display: none;">{{ index }}</div>
            <div style="width: 421px;height: 51px;margin-top: 8px;"><strong><div class="ycsl2 aactive" href="" style="width: 420px;height: 41px;">{{item.stem}}</div></strong></div>
            <div style="width: 421px;height: 21px;margin-top: 6px;color: rgb(164, 164, 164);"><div class="ycsl1" href="" style="text-decoration: none; width: 420px;height: 21px;">{{item.content}}</div></div>
          </div>
        </div>
        <div class="header2">
          <div style="width: 304px;height: 24px;"></div>
          <div style="width: 304px;height: 340px;padding:0 24px 0 24px;">
            <div
            v-for="(item,index) in filteredArticles(5,9)"
            :key="item.id"
            @click="$router.push(`/detail/${item.id}`)"
            style="width: 256px;height: 49px;margin-top: 16px">
              <div style="display: none;">{{ index }}</div>
              <div href="" class="ycsl1 aactive">{{ item.stem }}</div>
              <div href="" class="ycsl1" style="text-decoration: none; width: 256px;height: 21px;margin-top: 4px;color: rgb(164, 164, 164);">{{item.content}}</div>
            </div>
            <!-- <div style="width: 256px;height: 49px;margin-top: 16px">
              <a href="" class="ycsl1" style="width: 256px;height: 24px;">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure voluptatem magni, eveniet dolor pariatur neque praesentium facere, tempore nulla aspernatur nobis excepturi, optio nihil. Ipsa vitae possimus perspiciatis minima beatae?</a>
              <a href="" class="ycsl1" style="width: 256px;height: 21px;margin-top: 4px;color: rgb(164, 164, 164);">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure voluptatem magni, eveniet dolor pariatur neque praesentium facere, tempore nulla aspernatur nobis excepturi, optio nihil. Ipsa vitae possimus perspiciatis minima beatae?</a>
            </div>
            <div style="width: 256px;height: 49px;margin-top: 16px">
              <a href="" class="ycsl1" style="width: 256px;height: 24px;">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure voluptatem magni, eveniet dolor pariatur neque praesentium facere, tempore nulla aspernatur nobis excepturi, optio nihil. Ipsa vitae possimus perspiciatis minima beatae?</a>
              <a href="" class="ycsl1" style="width: 256px;height: 21px;margin-top: 4px;color: rgb(164, 164, 164);">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure voluptatem magni, eveniet dolor pariatur neque praesentium facere, tempore nulla aspernatur nobis excepturi, optio nihil. Ipsa vitae possimus perspiciatis minima beatae?</a>
            </div>
            <div style="width: 256px;height: 49px;margin-top: 16px">
              <a href="" class="ycsl1" style="width: 256px;height: 24px;">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure voluptatem magni, eveniet dolor pariatur neque praesentium facere, tempore nulla aspernatur nobis excepturi, optio nihil. Ipsa vitae possimus perspiciatis minima beatae?</a>
              <a href="" class="ycsl1" style="width: 256px;height: 21px;margin-top: 4px;color: rgb(164, 164, 164);">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure voluptatem magni, eveniet dolor pariatur neque praesentium facere, tempore nulla aspernatur nobis excepturi, optio nihil. Ipsa vitae possimus perspiciatis minima beatae?</a>
            </div>
            <div style="width: 256px;height: 49px;margin-top: 16px">
              <a href="" class="ycsl1" style="width: 256px;height: 24px;">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure voluptatem magni, eveniet dolor pariatur neque praesentium facere, tempore nulla aspernatur nobis excepturi, optio nihil. Ipsa vitae possimus perspiciatis minima beatae?</a>
              <a href="" class="ycsl1" style="width: 256px;height: 21px;margin-top: 4px;color: rgb(164, 164, 164);">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure voluptatem magni, eveniet dolor pariatur neque praesentium facere, tempore nulla aspernatur nobis excepturi, optio nihil. Ipsa vitae possimus perspiciatis minima beatae?</a>
            </div> -->
          </div>
        </div>
        <div class="header3">
          <div style="width: 256px;height: 24px;padding:0 24px 0 24px;"><img src="../assets/热点.png" alt="" style="float: left;"><h3>热点</h3></div>
          <div style="width: 304px;height: 340px;padding:0 24px 0 24px;">
            <div
            v-for="(item,index) in filteredArticles(0,4)"
            :key="item.id"
            @click="$router.push(`/detail/${item.id}`)"
            style="width: 256px;height: 49px;margin-top: 16px">
              <div style="display: none;">{{ index }}</div>
              <div href="" class="ycsl1 aactive">{{ item.stem }}</div>
              <div href="" class="ycsl1" style="text-decoration: none; width: 256px;height: 21px;margin-top: 4px;color: rgb(164, 164, 164);">{{item.content}}</div>
            </div>
            <!-- <div style="width: 256px;height: 49px;margin-top: 16px">
              <a href="" class="ycsl1" style="width: 256px;height: 24px;">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure voluptatem magni, eveniet dolor pariatur neque praesentium facere, tempore nulla aspernatur nobis excepturi, optio nihil. Ipsa vitae possimus perspiciatis minima beatae?</a>
              <a href="" class="ycsl1" style="width: 256px;height: 21px;margin-top: 4px;color: rgb(164, 164, 164);">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure voluptatem magni, eveniet dolor pariatur neque praesentium facere, tempore nulla aspernatur nobis excepturi, optio nihil. Ipsa vitae possimus perspiciatis minima beatae?</a>
            </div>
            <div style="width: 256px;height: 49px;margin-top: 16px">
              <a href="" class="ycsl1" style="width: 256px;height: 24px;">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure voluptatem magni, eveniet dolor pariatur neque praesentium facere, tempore nulla aspernatur nobis excepturi, optio nihil. Ipsa vitae possimus perspiciatis minima beatae?</a>
              <a href="" class="ycsl1" style="width: 256px;height: 21px;margin-top: 4px;color: rgb(164, 164, 164);">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure voluptatem magni, eveniet dolor pariatur neque praesentium facere, tempore nulla aspernatur nobis excepturi, optio nihil. Ipsa vitae possimus perspiciatis minima beatae?</a>
            </div>
            <div style="width: 256px;height: 49px;margin-top: 16px">
              <a href="" class="ycsl1" style="width: 256px;height: 24px;">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure voluptatem magni, eveniet dolor pariatur neque praesentium facere, tempore nulla aspernatur nobis excepturi, optio nihil. Ipsa vitae possimus perspiciatis minima beatae?</a>
              <a href="" class="ycsl1" style="width: 256px;height: 21px;margin-top: 4px;color: rgb(164, 164, 164);">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure voluptatem magni, eveniet dolor pariatur neque praesentium facere, tempore nulla aspernatur nobis excepturi, optio nihil. Ipsa vitae possimus perspiciatis minima beatae?</a>
            </div>
            <div style="width: 256px;height: 49px;margin-top: 16px">
              <a href="" class="ycsl1" style="width: 256px;height: 24px;">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure voluptatem magni, eveniet dolor pariatur neque praesentium facere, tempore nulla aspernatur nobis excepturi, optio nihil. Ipsa vitae possimus perspiciatis minima beatae?</a>
              <a href="" class="ycsl1" style="width: 256px;height: 21px;margin-top: 4px;color: rgb(164, 164, 164);">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure voluptatem magni, eveniet dolor pariatur neque praesentium facere, tempore nulla aspernatur nobis excepturi, optio nihil. Ipsa vitae possimus perspiciatis minima beatae?</a>
            </div> -->
          </div>
        </div>
        <div class="header4">
          <div style="width: 288px;height: 35px;padding:13px 24px 0 24px;border-bottom: 0.01px solid rgb(219, 219, 219);"><img src="../assets/直播.png" alt="" style="float: left;"><h3>直播</h3></div>
          <div style="width: 336px;height: 344px;padding: 0 24px 24px;">
            <div
            v-for="(item,index) in filteredArticles(4,7)"
            :key="item.id"
            @click="$router.push(`/detail/${item.id}`)"
            style="width: 336px;height: 68px;margin-top: 16px;">
              <div style="display: none;">{{ index }}</div>
              <img src="../assets/正在直播.png" alt="" style="width: 126px;height: 68px;float: left;">
              <div style="width: 160px;height: 68px;float: left;">
                <div href="" class="ycsl1 aactive" style="width: 160px;height: 40px;">{{item.stem}}</div>
                <div href="" class="ycsl1" style="width: 160px;height: 20px;margin-top: 4px;color: rgb(164, 164, 164);">{{item.content}}</div>
              </div>
            </div>
            <!-- <div style="width: 336px;height: 68px;margin-bottom: 15px;">
              <img src="../assets/正在直播.png" alt="" style="width: 126px;height: 68px;float: left;">
              <div style="width: 160px;height: 68px;float: left;">
                <a href="" class="ycsl1" style="width: 160px;height: 40px;">Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur omnis alias magnam, saepe, ab dolore fuga, eaque laboriosam temporibus iure quisquam minus quidem id libero culpa rem dignissimos vitae totam!</a>
                <a href="" class="ycsl1" style="width: 160px;height: 18px;margin-top: 8px;color: rgb(164, 164, 164);">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, ad, blanditiis ducimus recusandae voluptatem iste, architecto debitis sequi eius et maxime ipsum similique at alias quidem dolorem perspiciatis commodi! Delectus?</a>
              </div>
            </div>
            <div style="width: 336px;height: 68px;margin-bottom: 15px;">
              <img src="../assets/正在直播.png" alt="" style="width: 126px;height: 68px;float: left;">
              <div style="width: 160px;height: 68px;float: left;">
                <a href="" class="ycsl1" style="width: 160px;height: 40px;">Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur omnis alias magnam, saepe, ab dolore fuga, eaque laboriosam temporibus iure quisquam minus quidem id libero culpa rem dignissimos vitae totam!</a>
                <a href="" class="ycsl1" style="width: 160px;height: 18px;margin-top: 8px;color: rgb(164, 164, 164);">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, ad, blanditiis ducimus recusandae voluptatem iste, architecto debitis sequi eius et maxime ipsum similique at alias quidem dolorem perspiciatis commodi! Delectus?</a>
              </div>
            </div>
            <div style="width: 336px;height: 68px;margin-bottom: 15px;">
              <img src="../assets/正在直播.png" alt="" style="width: 126px;height: 68px;float: left;">
              <div style="width: 160px;height: 68px;float: left;">
                <a href="" class="ycsl1" style="width: 160px;height: 40px;">Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur omnis alias magnam, saepe, ab dolore fuga, eaque laboriosam temporibus iure quisquam minus quidem id libero culpa rem dignissimos vitae totam!</a>
                <a href="" class="ycsl1" style="width: 160px;height: 18px;margin-top: 8px;color: rgb(164, 164, 164);">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, ad, blanditiis ducimus recusandae voluptatem iste, architecto debitis sequi eius et maxime ipsum similique at alias quidem dolorem perspiciatis commodi! Delectus?</a>
              </div>
            </div> -->
          </div>
        </div>
      </div>
    </div>
    <!-- 主体 -->
    <div class="container">
      <div class="main1">
        <div style="width: 996px;height: 56px;border-bottom: 0.01px solid rgb(219, 219, 219);">
          <h4 style="float: left;margin: 10px 10px;width: 32px;height: 56px;">推荐</h4>
          <div @click="$router.push(`/hotchart`)"
            style="float: right;width: 70px;height: 40px;padding: 10px 10px;">
            <img src="../assets/排行榜.png" alt="" style="float: left;">
            <p style="text-decoration: none;color: #9a9aaa;">排行榜</p>
          </div>
        </div>
        <!-- 文章 -->
        <!-- // :href="`/detail/${item.id}`" -->
        <div
        v-for="item in articles"
        :key="item.id"
        @click="$router.push(`/detail/${item.id}`)"
        style="width:996px;height: 142px;border-bottom: 0.01px solid rgb(219, 219, 219);"
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
        <div style="width: 336px;height: 720px;padding-top: 2px;padding-bottom: 16px;margin-bottom: 16px;border: 0.01px solid rgb(219, 219, 219);">
          <div style="width: 288px;height: 48px;padding-left: 24px;padding-right: 24px;border-bottom: 0.01px solid rgb(219, 219, 219);">
            <h3 style="padding: 12px 0;">向你推荐</h3>
          </div>

          <div
          v-for="(item,index) in filteredArticles(0,9)"
          :key="item.id"
          @click="$router.push(`/detail/${item.id}`)"
          style="width: 288px;height: 28px;padding: 0 24px;margin-top: 14px;">
            <div style="display: none;">{{ index }}</div>
            <img src="../assets/头条.png" alt="" style="width: 28px;height: 28px;float: left;border-radius: 5px;">
            <p class="ycsl1" style="width: 238px;height: 22.5px;margin-left: 8px;float: left;padding-top: 5px;">{{item.stem}}</p>
            <i style="width: 14px;height: 14px;float: left;padding-top: 5px;">＞</i>
          </div>
          <div
          v-for="(item,index) in filteredArticles(4,9)"
          :key="item.id"
          @click="$router.push(`/detail/${item.id}`)"
          style="width: 288px;height: 28px;padding: 0 24px;margin-top: 14px;">
            <div style="display: none;">{{ index }}</div>
            <img src="../assets/头条.png" alt="" style="width: 28px;height: 28px;float: left;border-radius: 5px;">
            <p class="ycsl1" style="width: 238px;height: 22.5px;margin-left: 8px;float: left;padding-top: 5px;">{{item.stem}}</p>
            <i style="width: 14px;height: 14px;float: left;padding-top: 5px;">＞</i>
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
  name: 'HomePage',
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
  // computed: {
  //   filteredArticles (n, m) {
  //     const slicedArray = this.articles.slice(n, m + 1)
  //     return slicedArray.reverse()
  //   }
  // }
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
  margin-top: -16px;
}

.aactive{
  text-decoration: none;
  width: 256px;
  height: 24px;
  color: black;
}
.aactive:hover{
  text-decoration: underline;
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
#xbox:hover{
  background-color: #fafafa;
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
.gz:hover{
  border-color: black;
}
</style>
