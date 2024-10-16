<template>
    <div style="background-color: #fafafa;" v-if="article.id">
        <div style="width: 1554px;height: 1010px;background-color: #f3f4f6;margin: 0 auto;">
<!-- 头部 -->
      <div style="width: 1554px;height: 265px;">
        <div style="width: 1320px;height: 84px;padding-top: 16px;margin: 0 117px;"></div>
        <div style="width: 1280px;height: 165px;padding-left: 16px;padding-right: 24px;margin: 0 117px;background-color: #ffffff;">

          <div style="width: 1280px;height: 90px;">

            <div style="width: 102px;height: 90px;float: left;">
              <div style="width: 94px;height: 94px;position: relative;top: -12px;">
                <img :src="article.creatorAvatar" alt="" style="width: 94px;height: 94px;border-radius: 100px;border: 4px #f3f4f6 solid;">
              </div>
            </div>

            <div style="width: 1162px;height: 90px;margin-left: 16px;float: left;">
              <div style="width: 1162px;height: 32px;margin-top: 16px;">
                <div style="width: 187px;height: 24px;float: left;"><strong><p style="font-size: larger;">{{article.creatorName}}</p></strong></div>
                <div style="width: 336px;height: 32px;margin-left: 639px;float: right;">
                  <div style="width: 72px;height: 32px;float: right;">
                    <button class="gz">关注</button>
                  </div>
                </div>
              </div>
              <div style="width: 1162px;height: 24px;margin-top: 10px;float: right;">
              <ul style="width: 1162px;height: 24px;text-decoration: none;float: left;">
              <li style="font-size: small;width: 93px;height: 24px;float: left;"><p style="color:rgb(138, 138, 138);float: left;">原创&nbsp;</p><strong><p>1</p></strong></li>
              <li style="font-size: small;width: 93px;height: 24px;float: left;"><p style="color:rgb(138, 138, 138);float: left;">获赞&nbsp;</p><strong><p>{{ article.likeCount }}</p></strong></li>
              <li style="font-size: small;width: 93px;height: 24px;float: left;"><p style="color:rgb(138, 138, 138);float: left;">粉丝&nbsp;</p><strong><p>{{ article.questionType }}</p></strong></li>
              </ul>
            </div>
            </div>

          </div>

          <div style="width: 1162px;height: 75px;padding-left: 118px;">
              <div style="color:rgb(138, 138, 138);font-size: small;width: 1162px;height: 20px;margin-bottom: 10px;"><p style="float: left;">IP属地:&nbsp;</p><p>{{ mrIP }}</p></div>
              <div style="color:rgb(138, 138, 138);font-size: small;width: 1162px;height: 21px;padding-bottom: 24px;"><p style="float: left;">个人简介: &nbsp;</p><p>{{ mrjianjie }}</p></div>
            </div>

        </div>
      </div>
<!-- 主体 -->
      <div style="width: 1554px;height: 735px;">
        <div style="width: 1320px;height: 703px;padding-bottom: 32px;margin: 0 auto;margin-top: 10px;">
<!-- main1 -->
          <div style="width: 338px;height: 703px;margin-right: 10px;float: left;">

            <div style="width: 322px;height: 35px;padding-left: 16px;border-bottom: 0.01px solid rgb(219, 219, 219);background-color: #ffffff;padding-top: 13px;"><strong><p style="float: left;">原力等级</p></strong><p style="float: right;margin-top: 2px;font-size: small;color:rgb(138, 138, 138);padding-right: 15px;">成就></p></div>
            <div style="width: 306px;height: 48px;padding: 16px;background-color: #ffffff;margin-bottom: 10px;">
              <div style="width: 240px;height: 50px;margin: 0 auto;">
                <div style="width: 64px;height: 50px;text-align: center;float: left;margin-right: 25px;">
                  <span style="color:rgb(138, 138, 138);width: 32px;height: 19px;text-align: center;">当前等级</span>
                  <span style="width: 18px;height: 19px;text-align: center;">0</span>
                  <!-- {{article.questionBankType}} -->
                </div>
                <div style="width: 64px;height: 50px;text-align: center;float: left;margin-right: 15px;">
                  <span style="color:rgb(138, 138, 138);width: 32px;height: 19px;text-align: center;">当前积分</span>
                  <span style="width: 18px;height: 19px;text-align: center;">0</span>
                  <!-- {{article.questionType}} -->
                </div>
                <div style="width: 34px;height: 50px;text-align: center;float: left;padding: 0 15px;">
                  <span style="color:rgb(138, 138, 138);width: 32px;height: 19px;text-align: center;">当月</span>
                  <span style="width: 18px;height: 19px;text-align: center;">0</span>
                  <!-- {{article.likeCount}} -->
                </div>
                <!-- <div style="width: 32px;height: 50px;text-align: center;float: left;">
                  <span style="color:rgb(138, 138, 138);width: 32px;height: 19px;text-align: center;">当周</span>
                  <span style="width: 18px;height: 19px;text-align: center;">0</span>
                  {{article.likeFlag}}
                </div> -->
              </div>
            </div>

            <div style="width: 322px;height: 153px;padding: 8px;margin-bottom: 10px;background-color: #ffffff;">
              <div style="width: 302px;height: 18px;padding: 10px 10px;background-color: rgb(255, 223, 162);padding-bottom: 15px;border-radius: 5px;"><p style="font-size: larger;color: rgb(255, 81, 0);float: left;">博客之星 2023</p>&nbsp;<p style="float: left;font-size: smaller;padding-top: 3px;padding-left: 5px;">未入围</p><p style="float: right;margin-top: 2px;font-size: small;">奖励></p></div>
              <div style="width: 306px;height: 79px;padding: 16px 8px 8px 8px;">
                <p style="width: 306px;height: 21px;margin-top: 10px;text-align: center;color:rgb(138, 138, 138);">距离入围还差40篇高质量文章</p>
                <div @click="$router.push(`/creat`)" style="width: 304px;height: 30px;border: 0.6px none;margin: 0 auto; margin-top: 16px;background-color: rgb(255, 92, 5);color: #ffffff;text-align: center;border-radius: 25px;"><p style="padding-top: 3px;">去创作</p></div>
              </div>
            </div>

            <div style="width: 322px;height: 48px;padding-left: 16px;border-bottom: 0.01px solid rgb(219, 219, 219);background-color: #ffffff;"><p style="padding-top: 13px;">个人成就</p></div>
            <div style="width: 306px;height: 116px;padding: 16px;background-color: #ffffff;margin-bottom: 10px;">
              <ul style="width: 306px;height: 90px;">
                <li style="width: 306px;height: 22px;margin-bottom: 12px;"><img src="../assets/icon/dianzan.png" style="width: 22px;height: 22px;margin-right: 10px;float: left;"><p style="color:rgb(138, 138, 138);">获得{{article.likeCount}}次点赞</p></li>
                <li style="width: 306px;height: 22px;margin-bottom: 12px;"><img src="../assets/icon/pinglun.png" style="width: 22px;height: 22px;margin-right: 10px;float: left;"><p style="color:rgb(138, 138, 138);">内容获得0次评论</p></li>
                <li style="width: 306px;height: 22px;margin-bottom: 12px;"><img src="../assets/icon/shoucang.png" style="width: 22px;height: 22px;margin-right: 10px;float: left;"><p style="color:rgb(138, 138, 138);">获得{{article.likeFlag}}次收藏</p></li>
              </ul>
            </div>

          </div>
<!-- main2 -->
          <div style="width: 972px;height: 703px;background-color: #ffffff;float: left;">

            <div style="width: 956px;height: 48px;padding-right: 16px;border-bottom: 0.01px solid rgb(219, 219, 219);">
              <ul class="tabs">
                <li @click="changeTab(0)" class="tab active">最近</li>
                <li @click="changeTab(1)" class="tab">收藏</li>
                <li @click="changeTab(2)" class="tab">历史</li>
              </ul>
            </div>

            <div class="tabbox boxactive" id="tabContent0">

              <div style="width: 924px;height: 607px;">
                <div @click="$router.push(`/detail/${article.id}`)">
                    <div style="width: 924px;height: 102px;padding: 20px 0 20px 0;border-top:0.01px solid rgb(219, 219, 219);border-bottom:0.01px solid rgb(219, 219, 219);">
                        <div style="width: 142px;height: 100px;float: left;margin-right: 16px;padding-top: 2px;">
                        <div href="" style="width: 142px;"><img style="width: 100%;" src="../assets/前端.png" alt=""></div>
                        </div>
                        <div style="width: 766px;height: 102px;float: left;">
                        <div style="width: 766px;height: 61px;">
                            <p class="ycsl2" style="width: 766px;height: 20px;">{{article.stem}}</p>
                            <p class="ycsl2" style="width: 766px;height: 37px;margin-top: 4px;font-size: small;">{{article.content}}</p>
                        </div>
                        <div style="width: 766px;height: 21px;margin-top: 10px;float: left;">
                            <div @click="dz" style="width: 70px;height: 20px;float: left;font-size: small;">
                            <img src="../assets/icon/点赞.png" id="dz" alt="" style="width: 16px;height: 16px;">{{article.likeCount}}赞
                            </div>
                            <!-- <div style="width: 70px;height: 20px;float: left;">
                            <img src="../assets/踩前.png" alt="" style="width: 16px;height: 16px;">踩
                            </div> -->
                            <div style="height: 20px;float: left;font-size: small;">
                            作者：{{ article.creatorName }}
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
                <!-- <div style="height: 500px;width: 800px; margin: 0 auto;"><img src="@/assets/空空如也.jpg" alt="" style="height: 500px;width: 800px; margin: 0 auto;"></div> -->
                <!-- <div @click="$router.push(`/creat`)" style=" width: 304px;height: 30px;border: 0.6px none;margin: 0 auto; margin-top: 300px;background-color: rgb(255, 92, 5);color: #ffffff;text-align: center;border-radius: 25px;"><p style="padding-top: 3px;">写博客</p></div> -->
              </div>

              <!-- <div style="width: 934px;height: 364px;margin-top: 16px;">
                <div style="width: 924px;height: 24px;"></div>
                <div style="width: 940px;height: 324px;margin-top: 16px;margin-left: -8px;margin-right: -8px;"></div>
              </div> -->

            </div>

            <div class="tabbox" id="tabContent1">

            <div style="width: 924px;height: 607px;">
              <div></div>
              <div style="height: 500px;width: 800px; margin: 0 auto;"><img src="@/assets/空空如也.jpg" alt="" style="height: 500px;width: 800px; margin: 0 auto;"></div>
              <!-- <div @click="$router.push(`/collect`)" style="width: 304px;height: 30px;border: 0.6px none;margin: 0 auto; margin-top: 16px;background-color: rgb(255, 92, 5);color: #ffffff;text-align: center;border-radius: 25px;"><p style="padding-top: 3px;">更多收藏</p></div> -->
            </div>

            <!-- <div style="width: 934px;height: 364px;margin-top: 16px;">
              <div style="width: 924px;height: 24px;"></div>
              <div style="width: 940px;height: 324px;margin-top: 16px;margin-left: -8px;margin-right: -8px;"></div>
            </div> -->

            </div>

            <div class="tabbox" id="tabContent2">

            <div style="width: 924px;height: 607px;">
              <div></div>
              <div style="height: 500px;width: 800px; margin: 0 auto;"><img src="@/assets/空空如也.jpg" alt="" style="height: 500px;width: 800px; margin: 0 auto;"></div>
              <!-- <div @click="$router.push(`/history`)" style="width: 304px;height: 30px;border: 0.6px none;margin: 0 auto; margin-top: 16px;background-color: rgb(255, 92, 5);color: #ffffff;text-align: center;border-radius: 25px;"><p style="padding-top: 3px;">其他历史</p></div> -->
            </div>

            <!-- <div style="width: 934px;height: 164px;margin-top: 16px;">
              <div style="width: 924px;height: 24px;"></div>
              <div style="width: 940px;height: 124px;margin-top: 16px;margin-left: -8px;margin-right: -8px;"></div>
            </div> -->

            </div>
          </div>

        </div>
      </div>
    </div>
    </div>

  </template>

<script>
// 请求地址: https://mock.boxuegu.com/mock/3083/articles/:id
// 请求方式: get
import axios from 'axios'
export default {
  name: 'UserDetailPage',
  data () {
    return {
      article: {},
      //   log: store.state.log,
      mrjianjie: '这个人很懒，简介都没有添加',
      mrIP: '未知',
      mrYC: 0,
      mrFS: 0,
      mrHZ: 0
    }
  },
  async created () {
    const id = this.$route.params.id
    const { data } = await axios.get(`https://mock.boxuegu.com/mock/3083/articles/${id}`)
    this.article = data.result
    console.log(this.article)
  },
  methods: {
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
    changeTab (index) {
      const contentElements = document.querySelectorAll('.tabbox')
      contentElements.forEach(element => {
        element.classList.remove('boxactive')
      })
      const selectedContent = document.getElementById(`tabContent${index}`)
      selectedContent.classList.add('boxactive')
      const tabElements = document.querySelectorAll('.tabs li')
      tabElements.forEach(element => {
        element.classList.remove('active')
      })
      const selectedTab = document.querySelector(`.tabs li:nth-child(${index + 1})`)
      selectedTab.classList.add('active')
    }
  }

}
</script>

  <style lang="less" scoped>
  *{
    margin: 0;
    padding: 0;
  }

  ul li{
  list-style: none;
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
    .tabs{
      height: 100%;
    }
    .tab{
      color: rgb(99, 99, 99);
      float: left;
      margin-top: 12px;
      width: 32px;
      height: 36px;
      padding: 0 16px;
    }
    .active{
      color: black;
      border-bottom: 1px solid;
    }

    .tabbox{
      width: 924px;
      height: 607px;
      padding: 24px;
      display: none;
    }
    .boxactive{
      display: block;
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
.gz{
  width: 72px;
  height: 32px;
  background-color: white;
  border-radius: 15px;
  border: 0.01px #a6a6a6 solid;
}
.gz:hover{
  border: 0.01px black solid;
}
  </style>
