<template>
  <div style="background-color: #f3f4f6;">
    <!-- 个人中心 -->
    <div v-show="show" class="tjbq">
        <div style="width: 479px;height: 27.5px;text-align: center;padding: 10px auto;border-bottom: 0.01px rgb(223, 223, 223) solid;">标签 <span @click="noshowsz" style="float: right;margin: 3px;">×</span></div>
        <div style="width: 100%;padding: 9px 14px 12px 14px;">
          <div style="width: 479px;height: 91px;">
            <label for="" style="width: 78px;height: 40px;padding-left: 12px;float: left;padding-top: 25px;"><h3>添加头像</h3></label>
            <img src="../assets/icon/登录默认.png" alt="" id="imgs" style="width: 88px;height: 88px;border: 0.6px black none;border-radius: 50px;margin-left: 35px;">
            <input type="file" id="files" @click="addimg" style="width: 158px;height: 88px;border: 0.6px none;border-radius: 5px;" placeholder="添加头像">
          </div>
          <div style="width: 479px;height: 70px;margin-top: 30px;">
            <label for="" style="width: 78px;height: 40px;padding-left: 12px;float: left;padding-bottom: 25px;"><h3>IP地址</h3></label>
            <div style="width: 398px;height: 58px;margin-left: 100px;">
            <textarea style="width: 330px;height: 21px;background-color: #fafafa;border: 0.6px solid #dbdbdbfe;margin-top: 5px;padding-left: 3px;padding-top: 2px;" placeholder="你来自哪儿？"></textarea>
            </div>
          </div>
          <div style="width: 479px;height: 80px;margin-top: 10px;">
            <label for="" style="width: 78px;height: 40px;padding-left: 12px;float: left;padding-top: 5px;"><h3>个人简介</h3></label>
            <div style="width: 398px;height: 58px;margin-left: 100px;">
            <textarea style="width: 330px;height: 42px;background-color: #fafafa;border: 0.6px solid #dbdbdbfe;padding-left: 3px; " placeholder="快向大家介绍一下自己吧！"></textarea>
            </div>
          </div>
          <div @click="$router.push(`/creat`)" style=" width: 304px;height: 30px;border: 0.6px none;margin: 0 auto;margin-bottom: 16px;background-color: rgb(255, 92, 5);color: #ffffff;text-align: center;border-radius: 25px;"><p style="padding-top: 3px;">保存</p></div>
          <div @click="tc" style=" width: 304px;height: 30px;border: 0.6px none;margin: 0 auto;margin-top: 16px;background-color: rgb(255, 5, 5);color: #ffffff;text-align: center;border-radius: 25px;"><p style="padding-top: 3px;">退出登录</p></div>
        </div>
      </div>
    <div v-if="log" style="width: 1554px;height: 1010px;background-color: #f3f4f6;margin: 0 auto;">
<!-- 头部 -->
      <div >
        <!-- v-if="foundPost.id" -->
        <div style="width: 1554px;height: 265px;">
          <div style="width: 1320px;height: 84px;padding-top: 16px;margin: 0 117px;"></div>
          <div style="width: 1280px;height: 165px;padding-left: 16px;padding-right: 24px;margin: 0 117px;background-color: #ffffff;">

            <div style="width: 1280px;height: 90px;">

              <div style="width: 102px;height: 90px;float: left;">
                <div style="width: 94px;height: 94px;position: relative;top: -12px;">
                  <img src="../assets/icon/登录默认.png" alt="" style="width: 94px;height: 94px;border-radius: 100px;border: 4px #f3f4f6 solid;">
                </div>
              </div>

              <div style="width: 1162px;height: 90px;margin-left: 16px;float: left;">
                <div style="width: 1162px;height: 32px;margin-top: 16px;">
                  <div style="width: 187px;height: 24px;float: left;"><strong><p style="font-size: larger;">LiShang</p></strong></div>
                  <div style="width: 336px;height: 32px;margin-left: 639px;float: right;">
                    <div style="width: 72px;height: 32px;float: right;">
                      <button @click="showsz" class="sz">设置</button>
                    </div>
                  </div>
                </div>
                <div style="width: 1162px;height: 24px;margin-top: 10px;float: right;">
                <ul style="width: 1162px;height: 24px;text-decoration: none;float: left;">
                <li style="font-size: small;width: 93px;height: 24px;float: left;"><p style="color:rgb(138, 138, 138);float: left;">原创&nbsp;</p><strong><p>{{ mrYC }}</p></strong></li>
                <li style="font-size: small;width: 93px;height: 24px;float: left;"><p style="color:rgb(138, 138, 138);float: left;">获赞&nbsp;</p><strong><p>{{ mrHZ }}</p></strong></li>
                <li style="font-size: small;width: 93px;height: 24px;float: left;"><p style="color:rgb(138, 138, 138);float: left;">粉丝&nbsp;</p><strong><p>{{ mrFS }}</p></strong></li>
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
                  <li style="width: 306px;height: 22px;margin-bottom: 12px;"><img src="../assets/icon/dianzan.png" style="width: 22px;height: 22px;margin-right: 10px;float: left;"><p style="color:rgb(138, 138, 138);">获得0次点赞</p></li>
                  <li style="width: 306px;height: 22px;margin-bottom: 12px;"><img src="../assets/icon/pinglun.png" style="width: 22px;height: 22px;margin-right: 10px;float: left;"><p style="color:rgb(138, 138, 138);">内容获得0次评论</p></li>
                  <li style="width: 306px;height: 22px;margin-bottom: 12px;"><img src="../assets/icon/shoucang.png" style="width: 22px;height: 22px;margin-right: 10px;float: left;"><p style="color:rgb(138, 138, 138);">获得0次收藏</p></li>
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
                  <div></div>
                  <div style="height: 500px;width: 800px; margin: 0 auto;"><img src="../assets/icon/这里空空如也.png" alt="" style="height: 500px;width: 800px; margin: 0 auto;"></div>
                  <div @click="$router.push(`/creat`)" style=" width: 304px;height: 30px;border: 0.6px none;margin: 0 auto; margin-top: 16px;background-color: rgb(255, 92, 5);color: #ffffff;text-align: center;border-radius: 25px;"><p style="padding-top: 3px;">写博客</p></div>
                </div>

                <!-- <div style="width: 934px;height: 364px;margin-top: 16px;">
                  <div style="width: 924px;height: 24px;"></div>
                  <div style="width: 940px;height: 324px;margin-top: 16px;margin-left: -8px;margin-right: -8px;"></div>
                </div> -->

              </div>

              <div class="tabbox" id="tabContent1">

              <div style="width: 924px;height: 607px;">
                <div></div>
                <div style="height: 500px;width: 800px; margin: 0 auto;"><img src="../assets/icon/这里空空如也.png" alt="" style="height: 500px;width: 800px; margin: 0 auto;"></div>
                <div @click="$router.push(`/collect`)" style="width: 304px;height: 30px;border: 0.6px none;margin: 0 auto; margin-top: 16px;background-color: rgb(255, 92, 5);color: #ffffff;text-align: center;border-radius: 25px;"><p style="padding-top: 3px;">更多收藏</p></div>
              </div>

              <!-- <div style="width: 934px;height: 364px;margin-top: 16px;">
                <div style="width: 924px;height: 24px;"></div>
                <div style="width: 940px;height: 324px;margin-top: 16px;margin-left: -8px;margin-right: -8px;"></div>
              </div> -->

              </div>

              <div class="tabbox" id="tabContent2">

              <div style="width: 924px;height: 607px;">
                <div></div>
                <div style="height: 500px;width: 800px; margin: 0 auto;"><img src="../assets/icon/这里空空如也.png" alt="" style="height: 500px;width: 800px; margin: 0 auto;"></div>
                <div @click="$router.push(`/history`)" style="width: 304px;height: 30px;border: 0.6px none;margin: 0 auto; margin-top: 16px;background-color: rgb(255, 92, 5);color: #ffffff;text-align: center;border-radius: 25px;"><p style="padding-top: 3px;">其他历史</p></div>
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
    <!-- 登录 -->
    <!--  id="building" -->
    <div v-else style="width: 100%;height: 100%;margin: 0 auto;">
      <video data-v-cd0725ea="" autoplay="autoplay" muted="muted" loop="loop" style="width: 100%;position: fixed;">
        <source src="@/assets/video/hutao.mp4" type="video/mp4">
      </video>
        <form action="">
          <div class="log">
              <div class="login">
                  <li><p style="">登录可享更多权益！</p></li>
                  <li><input v-model="postOb.username" placeholder="请输入用户名" style="padding-left: 10px;"></li>
                  <li><input v-model="postOb.password" placeholder="请输入密码" style="padding-left: 10px;" id="password"><img id="eye" @click="kaieye" src="https://tse1-mm.cn.bing.net/th/id/OIP-C.euPiqSmZf5OzTSsN-dQnGAAAAA?w=174&h=180&c=7&r=0&o=5&dpr=1.8&pid=1.7" style="width: 28px;height: 28px;float: right;position: relative;right: 25px;bottom: 90px;"></li>
                  <li><button @click="denglu" style="width: 420px;text-align: center;height: 40px;margin-top: 30px;border-radius: 15px;font-size: 18px;background-color: rgb(16, 23, 63);color:white">登录</button></li>
                  <li><button @click="zhuce" style="width: 420px;text-align: center;height: 40px;margin-top: 30px;border-radius: 15px;font-size: 18px;background-color: rgb(16, 23, 63);color:white">注册</button></li>
              </div>

              <!-- <div class="login">
                  <li><p style="">登录可享更多权益！</p></li>
                  <li><input type="username" placeholder="请输入用户名" style="padding-left: 10px;"></li>
                  <li><input type="password" placeholder="请输入密码" style="padding-left: 10px;" id="password"><img id="eye" @click="kaieye" src="https://tse1-mm.cn.bing.net/th/id/OIP-C.euPiqSmZf5OzTSsN-dQnGAAAAA?w=174&h=180&c=7&r=0&o=5&dpr=1.8&pid=1.7" style="width: 28px;height: 28px;float: right;position: relative;right: 25px;bottom: 90px;"></li>
                  <li><input type="submit" value="登录" method="post" action="/Lonon" style="width: 420px;text-align: center;height: 40px;margin-top: 30px;border-radius: 15px;font-size: 18px;background-color: rgb(16, 23, 63);color:white"></li>
                  <li><input type="submit" value="注册" method="post" action="/Lonon" style="width: 420px;text-align: center;height: 40px;margin-top: 30px;border-radius: 15px;font-size: 18px;background-color: rgb(16, 23, 63);color:white"></li>
              </div> -->
          </div>
        </form>
    </div>
  </div>
</template>

<script src="js/axios.js"></script>
<script src="js/vue.js"></script>
<script>
axios.defaults.baseURL = "http://localhost:3010";
import axios from 'axios'
import store from '@/store'
export default {
  name: 'LoginFormPage',
  data () {
    return {
      log: store.state.log,
      mrjianjie: '这个人很懒，简介都没有添加',
      mrIP: '未知',
      mrYC: 0,
      mrFS: 0,
      mrHZ: 0,
      x: 0,
      show:0,
      postOb:{
        username:'',
        password:'',
        mrtx:'../assets/icon/登录默认.png',
        mrjianjie: '这个人很懒，简介都没有添加',
        mrIP: '未知',
        mrYC: 0,
        mrFS: 0,
        mrHZ: 0
      },
      user:[],
      foundPost:[],
      data:{}
    }
  },
  methods: {
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
    },
    kaieye () {
      const eye = document.getElementById('eye')
      const password = document.getElementById('password')
      if (this.x === 0) {
        password.type = 'Text'
        eye.src = 'https://tse4-mm.cn.bing.net/th/id/OIP-C.IG0cxIBH5HoSFKuhwRmZeAAAAA?w=174&h=180&c=7&r=0&o=5&dpr=1.8&pid=1.7'
        this.x = 1
      } else {
        password.type = 'password'
        eye.src = 'https://tse1-mm.cn.bing.net/th/id/OIP-C.euPiqSmZf5OzTSsN-dQnGAAAAA?w=174&h=180&c=7&r=0&o=5&dpr=1.8&pid=1.7'
        this.x = 0
      }
    },
    search(){
      axios.get('/posts')
      .then(
        res=>{
          console.log(res);
          this.postList=res.data;
          this.postOb.username=''
          this.postOb.password=''
          this.$store.commit('log')
        }
      )
    },
    // async denglu(){
    //   const data=await axios.get('http://localhost:3010')
    //   const user = data.find(function(user) {
    //     return user.username === this.username && user.password === this.password;
    //   })
    //   if (user) {
    //     this.$store.commit('log')
    //   } else {
    //     alert('用户名或密码错误');
    //   }
    // },
    async zhuce(){
      axios.post("/posts",this.postOb)
      this.search()

    },
    showsz () {
      this.show = 1
    },
    noshowsz () {
      this.show = 0
    },
    addimg () {
      const files = document.getElementById('files')
      const imgs = document.getElementById('imgs')
      files.onchange = function () {
        imgs.src = URL.createObjectURL(this.files[0])
      }
    },
    tc(){
      localStorage.clear()
      // this.$store.commit('log')
      window.location.reload()
    }
  }
}
</script>

<style scoped>
*{
  margin: 0;
  padding: 0;
}
#building{
  background:url("https://pic2.zhimg.com/v2-ffde7ff5e016b8481b8449ddaf9d6ceb_1440w.jpg?source=172ae18b");
  width:100%;
  height:100%;
  position:fixed;
  background-size:100% 100%;
}

ul li{
  list-style: none;
}
  .log{
        margin: 0 auto;
        position: fixed;
        margin-top: 20px;
        top: 50%;
        left: 30%;
        transform: translate(-50%, -50%);
        /* background: rgb(0, 0, 0,0.1); */
        width: 500px;
        height: 500px;
        border: 0px solid;
    }
    .login{
        margin: 0px auto;
        margin-top: 25px;
        margin-bottom: 25px;
        padding: 5px;
        width: 450px;
        height: 450px;
        background: rgb(0, 0, 0,0.1);
        border-radius: 15px;
    }
    .login li{
        margin: 20px auto;
        list-style: none;
        width: 100%;
        height: 30px;
        padding: 15px;
    }
    .login li input{
        margin: 20px auto;
        margin-bottom: 50px;
        width: 420px;
        height: 49px;
        border-radius: 10px;
        font-size: 17px;
        background-color: gery;
    }
    .login li p{
      width: 100%;
      text-align: center;
      font-size: 30px;
      color: white;
      margin-top: 10px;
      text-align: center;
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
    .sz{
  width: 72px;
  height: 32px;
  background-color: white;
  border-radius: 15px;
  border: 0.01px #a6a6a6 solid;
}
.sz:hover{
  border: 0.01px black solid;
}

.tjbq{
  width: 479px;
  height: 427px;
  background-color: white;
  border: 0.01px rgb(228, 228, 228) solid;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
