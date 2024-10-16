<template>
<div style="background-color: #fafafa;">
    <div class="container">
      <header class="header">
        <h1>创作!!!</h1>
      </header>
      <main class="main">
        <div class="editor">
          <h2>编辑器</h2>
          <textarea name="" id="" cols="30" rows="1" placeholder="在这里输入标题" class="textarea1"></textarea>
          <textarea v-model="editorContent" placeholder="在这里输入内容" class="textarea2"></textarea>
        </div>
        <div class="preview">
          <h2>预览</h2>
          <div v-html="previewContent" style="border: 0.2px solid;"></div>
        </div>
      </main>
      <div v-show="show" class="tjbq">
        <div style="width: 379px;height: 27.5px;text-align: center;padding: 10px auto;border-bottom: 0.01px rgb(223, 223, 223) solid;">标签 <span @click="noshowbq" style="float: right;margin: 3px;">×</span></div>
        <div style="width: 100%;padding: 9px 14px 12px 14px;">
          <div @click="creatbox" class="xbq" style="">python</div>
          <div @click="creatbox" class="xbq" style="">python</div>
          <div @click="creatbox" class="xbq" style="">python</div>
          <div @click="creatbox" class="xbq" style="">python</div>
          <div @click="creatbox" class="xbq" style="">python</div>
          <div @click="creatbox" class="xbq" style="">python</div>
          <div @click="creatbox" class="xbq" style="">python</div>
          <div @click="creatbox" class="xbq" style="">python</div>
          <div @click="creatbox" class="xbq" style="">python</div>
          <div @click="creatbox" class="xbq" style="">python</div>
          <div @click="creatbox" class="xbq" style="">python</div>
          <div @click="creatbox" class="xbq" style="">python</div>
          <div @click="creatbox" class="xbq" style="">python</div>
        </div>
      </div>
      <div class="xq">
        <div style="width: 100%;height: 40px;margin-top: 16px;margin-bottom: 8px;">
          <label for="" style="width: 78px;height: 40px;padding-right: 12px;float: left;">文章标签</label>
          <div style="width: 598px;height: 40px;margin-left: 90px;">
            <div style="float: left;"><div id="boxmom" style="display: flex;"></div></div>
            <div style="width: 119px;height: 40px;float: left;"><button class="bq" @click="showbq" style="border:1px #cacaca solid;">+添加文章标签</button></div>
          </div>
        </div>

        <div style="width: 688px;height: 91px;margin-top: 16px;margin-bottom: 8px;">
          <label for="" style="width: 78px;height: 40px;padding-right: 12px;float: left;">添加封面</label>
          <div style="width: 598px;height: 91px;margin-left: 90px;">
            <img src="" alt="" id="imgs" style="width: 158px;height: 88px;border: 0.6px none;border-radius: 5px;">
            <input type="file" id="files" @click="addimg" style="width: 158px;height: 88px;border: 0.6px none;border-radius: 5px;" placeholder="添加文章封面">
          </div>
        </div>

        <div style="width: 688px;height: 91px;margin-top: 16px;margin-bottom: 8px;">
          <label for="" style="width: 78px;height: 40px;padding-right: 12px;float: left;">文章摘要</label>
          <div style="width: 598px;height: 58px;margin-left: 90px;">
            <textarea style="width: 580px;height: 42px;background-color: #fafafa;border: 0.6px solid #dbdbdbfe;" placeholder="摘要：帮助读者快速了解内容"></textarea>
          </div>
        </div>
      </div>

    </div>
    <footer class="footer">
      <div class="ftbt">
        <button @click="publish" style="width: 64px;height: 42px;padding: 10px 12px;text-align: center;margin:0 30px;">发布</button>
        <button @click="publish" style="width: 64px;height: 42px;padding: 10px 12px;text-align: center;margin:0 30px;">保存</button>
      </div>
    </footer>
</div>
</template>

<style scoped>
*{
  margin: 0;
  padding: 0;
}
.container {
  max-width: 1000px;
  margin: 0 auto;
  padding: 20px 0;
}

.header {
  padding: 10px 0;
  margin-bottom: 20px;
  width: 1000px;
  height: 70px;
  text-align: center;
  background-color: #ffffff;
}
.header h1{
  padding-left: 10px;
}

.main {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-top: 20px;
  background-color: #ffffff;
}

.editor {
  width: 55%;
  padding-right: 20px;
}

.textarea1{
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}
.textarea2 {
  width: 100%;
  height: 300px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.preview {
  width: 40%;
  height: 300px;
}
.preview div{
  width: 100%;
  height: 360px;
  border: 1px solid #e5e5e5;
  border-radius: 5px;
}

.tjbq{
  width: 379px;
  height: 297px;
  background-color: white;
  border: 0.01px rgb(228, 228, 228) solid;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.xq{
  width: 872px;
  height: 300px;
  padding: 8px 64px 24px 64px;
  margin: 24px 0;
  background-color: #ffffff;
}
.bq{
  width: 110px;
  height: 26px;
  padding: 0 8px;
  border: 0.01px rgb(255, 255, 255) solid;
  background-color: white;
}

.xbq{
  width: 39px;
  height: 24px;
  padding:0 8px;
  margin-bottom: 10px;
  margin-right: 16px;
  background-color: #ecf2f7;
  color: #5e7f9e;
  float: left;
  font-size: 1px;
  text-align: center;
}
.footer {
  padding: 20px 0;
  position: fixed;
  bottom: 0;
  height: 50px;
  width: 100%;
  border-top: 1px solid #e5e5e5;
  background-color: #ffffff;
}
.ftbt{
  margin: 0 auto;
  width: 300px;
}

.boxx{
  width: 39px !important;
  height: 24px !important;
  padding:0 8px !important;
  margin-bottom: 10px !important;
  margin-right: 16px !important;
  background-color: #ecf2f7 !important;
  color: #5e7f9e !important;
  float: left !important;
  font-size: 1px !important;
  text-align: center !important;
}

.bq:hover{
  background-color: rgb(231, 231, 231);
  color: rgb(0, 0, 255);
}
</style>

<script>
import store from '@/store'
export default {
  name: 'CreatPage',
  data () {
    return {
      editorContent: '',
      previewContent: '',
      fmimg: store.state.fmimg,
      show: 0
    }
  },
  watch: {
    editorContent () {
      // 监听编辑器内容变化，在每次变化时更新预览内容
      this.updatePreview()
    }
  },
  methods: {
    updatePreview () {
      // 更新预览内容
      this.previewContent = this.editorContent
    },
    publish () {
      // 处理发布逻辑，例如将内容发送到服务器保存
      // 在这里可以添加相应的 Axios 或者 Fetch 请求
      // 示例中只输出内容到控制台
      console.log(this.editorContent)
    },
    addimg () {
      const files = document.getElementById('files')
      const imgs = document.getElementById('imgs')
      files.onchange = function () {
        imgs.src = URL.createObjectURL(this.files[0])
      }
    },
    showbq () {
      this.show = 1
      console.log(this.show)
    },
    noshowbq () {
      this.show = 0
    },
    creatbox () {
      const box = document.createElement('div')

      // 设置盒子的样式和类名
      box.className = 'boxx' // 添加类名
      box.textContent = 'python'

      // 获取文档中的容器元素
      const container = document.getElementById('boxmom')

      // 将盒子添加到容器中
      container.appendChild(box)
    }
  },
  created () {
    if (this.$store.state.log !== 1) {
      alert('请先登录')
      this.$router.push('/loginform')
    }
  }
}
</script>
