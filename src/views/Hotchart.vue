<template>
  <div style="background-color: #fafafa;height: 1600px;">
    <!-- <img src="" style="width: 100%;position: fixed;"> -->
    <div class="container">
      <div class="main1">
        <div style="width: 1173px;height: 56px;border-bottom: 0.01px solid rgb(219, 219, 219);">
          <h2 style="float: left;margin: 10px 10px;width: 112px;height: 56px;">实时风云</h2>
          <!-- <a href="" style="float: right;width: 70px;height: 40px;padding: 10px 10px;">
            <img src="../assets/排行榜.png" alt="" style="float: left;">
            <p style="color: #9a9aaa;text-decoration: none;">排行榜</p>
          </a> -->
        </div>
        <!-- 文章 -->
        <!-- // :href="`/detail/${item.id}`" -->
        <div
        v-for="(item,index) in viewsArticles"
        :key="item.id"
        @click="$router.push(`/detail/${item.id}`)"
        style="width:1173px;height: 142px;border-bottom: 0.01px solid rgb(219, 219, 219);"
        id="xbox">
        <!-- v-for="n in 60" :key="n" -->
          <div style="width: 1353px;height: 102px;padding: 20px 0 20px 0;">
            <!-- <div style="width: 20px;height: 30px;float: left;padding: 25px 15px;text-align: center;font-size: 25px; font-family: STLiti">{{chart[n]}}</div> -->
            <div style="width: 20px;height: 30px;float: left;padding: 25px 15px;padding-top: 35px; text-align: center;font-size: 25px; font-family: Bookman Old Style">{{index+1}}</div>
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
            <div :class="indexjj" style="margin-left: 20px;float: left;width: 82px;">
              <div v-if="index===0" style="width: 82px;height: 82px;margin: 0 auto;"><img src="@/assets/icon/金奖.png" alt="" style="width: 82px;height: 82px;margin: 0 auto;"></div>
              <div v-else-if="index===1" style="width: 82px;height: 82px;margin: 0 auto;"><img src="@/assets/icon/银奖.png" alt="" style="width: 82px;height: 82px;margin: 0 auto;"></div>
              <div v-else-if="index===2" style="width: 82px;height: 82px;margin: 0 auto;"><img src="@/assets/icon/铜奖.png" alt="" style="width: 82px;height: 82px;margin: 0 auto;"></div>
              <div v-else style="width: 82px;height: 82px;margin: 0 auto;"><img src="@/assets/icon/奖牌.png" alt="" style="width: 82px;height: 82px;margin: 0 auto;"></div>
              <div style="text-align: center;margin: 0 auto;">{{item.views}}</div>
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
  name: 'HotchartPage',
  components: {
  },
  data () {
    return {
      articles: [],
      chart: ['', '甲子', '乙丑', '丙寅', '丁卯', '戊辰', '己巳', '庚午', '辛未', '壬申', '癸酉',
        '甲戌', '乙亥', '丙子', '丁丑', '戊寅', '己卯', '庚辰', '辛巳', '壬午', '癸未',
        '甲申', '乙酉', '丙戌', '丁亥', '戊子', '己丑', '庚寅', '辛卯', '壬辰', '癸巳',
        '甲午', '乙未', '丙申', '丁酉', '戊戌', '己亥', '庚子', '辛丑', '壬寅', '癸卯',
        '甲辰', '乙巳', '丙午', '丁未', '戊申', '己酉', '庚戌', '辛亥', '壬子', '癸丑',
        '甲寅', '乙卯', '丙辰', '丁巳', '戊午', '己未', '庚申', '辛酉', '壬戌', '癸亥'],
      i: 0
      // index: 0
    }
  },
  async created () {
    const res = await axios.get('https://mock.boxuegu.com/mock/3083/articles')
    this.articles = res.data.result.rows
  },
  computed: {
    viewsArticles () {
      return this.articles.slice().sort((a, b) => b.views - a.views)
    }
  },
  methods: {
    indexjj () {
      this.index++
      console.log(this.index)
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

<style scoped>
*{
  margin: 0;
  padding: 0;
}
.container{
  position: relative;
  top: 50px;
  width: 1343px;
  height: 1550px;
  margin:0 auto;
  background-color: #ffffff;
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

.ycsl2{
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
    width: 200px;
    cursor: pointer
}

.main1{
  width: 1173px;
  height: 1550px;
  float: left;
  margin-left: 80px;
}
.main2{
  width: 338px;
  height: 1550px;
  float: right;
  background-color: antiquewhite;
}

#xbox:hover{
  background-color: #fafafa;
}
</style>
