<template>
<div class="app-container">
  <el-form ref="form" :model="form" label-width="120px" class="">
    <i class="el-icon-back" style="margin-right: 15px" @click="$router.go(-1)">
          <span style="margin-right: 15px;color: #333;cursor: pointer;"> </span>
          <span>当前职位： {{this.$route.query.stationName}}</span>
      </i>
    <h3 class="title text-left" style="margin-top:16px">个人基础信息：</h3>
    <div style="background: #fff;padding-top:20px">
      <div class="m-25">
        <span>姓名：</span>
        <el-input class="el-input-w" v-model="form.recommendedName" placeholder="请输入姓名" />
      </div>
      <div class="m-25">
        <span>电子邮箱：</span>
        <el-input class="w-65" v-model="form.recommendedEmail" placeholder="请输入电子邮箱"/>
      </div>
      <div class="m-25">
        <span>联系方式：</span>
        <el-input class="w-65" v-model="form.recommendedTelephone" placeholder="请输入联系方式"/>
      </div>
      <div class="m-25">
        <span>籍贯：</span>
        <el-input class="el-input-w" v-model="form.recommendedAge" placeholder="请输入籍贯"/>
      </div>
      <div class="m-25">
        <span>性别：</span>
        <el-select class="el-input-w" v-model="form.recommendedPolitical" placeholder="请选择性别">
          <el-option label="男" value="1" />
          <el-option label="女" value="2" />
        </el-select>
      </div>
      <div class="m-25">
        <span>政治面貌：</span>
        <el-select v-model="form.recommendedPolitical" placeholder="请选择政治面貌">
          <el-option label="群众" value="群众" />
          <el-option label="共青团员" value="共青团员" />
          <el-option label="党员" value="党员" />
        </el-select>
      </div>
    </div>
    <h3 class="title text-left">学历信息：</h3>
    <div style="background: #fff;padding-top:20px">
      <div class="m-25">
        <span>就读状况：</span>
        <el-select class="w-65" v-model="form.recommendedAttend" placeholder="请选择就读状况">
          <el-option label="在读中" value="在读中" />
          <el-option label="已毕业" value="已毕业" />
        </el-select>
      </div>
      <div class="m-25">
        <span>学历：</span>
        <el-select class="el-input-w" v-model="form.recommendedEducation" placeholder="请选择学历">
          <el-option label="九年教育" value="1" />
          <el-option label="大专" value="2" />
          <el-option label="本科" value="3" />
          <el-option label="研究生" value="4" />
          <el-option label="硕士" value="5" />
          <el-option label="其他" value="6" />
        </el-select>
      </div>
      <div v-if="form.recommendedAttend == '已毕业'">
        <div class="m-25" >
          <span>毕业院校：</span>
          <el-input v-model="form.recommendedSchool" />
        </div>
        <div class="m-25" >
          <span>毕业时间：</span>
          <el-date-picker v-model="form.recommendedFinalDate" type="date" 
            placeholder="请选择毕业时间" style="width: 100%;" value-format="yyyy-MM-dd hh:mm:ss"/>
        </div>
      </div>
      <div class="m-25">
        <span>所修专业：</span>
        <el-input class="el-input-w" v-model="form.recommendedMajor" placeholder="请输入所修专业" />
      </div>
    </div>
    <h3 class="title text-left">技能荣誉：</h3>
    <div style="background: #fff;padding-top:20px">
      <div class="m-25">
        <span>荣获证书：</span>
        <el-input class="w-77" v-model="form.recommendedGainCertificate" type="textarea" placeholder="请填写1-3个荣誉证书" :rows="4"/>
      </div>
      <div class="m-25">
        <span>专业技能：</span>
        <el-input class="w-77" v-model="form.recommendedProfessionalInfo" type="textarea" placeholder="请填写专业技能" :rows="4"/>
      </div>
    </div>

    <h3 class="title text-left">工作信息：</h3>
    <div style="background: #fff;padding-top:20px">
      <div class="m-25">
        <span>工作经历：</span>
        <el-input class="w-77" v-model="form.recommendedWorkInfo" type="textarea" placeholder="请填写工作经历" :rows="4"/>
      </div>
      <div class="m-25">
        <span>项目经验：</span>
        <el-input class="w-77" v-model="form.recommendedProgramInfo" type="textarea" placeholder="请填写项目经验" :rows="4"/>
      </div>
    </div>
    <h3 class="title text-left">其他信息：</h3>
    <div style="background: #fff;padding-top:20px; padding-bottom: 25px">
      <div class="m-25">
        <span>自我评价：</span>
          <el-input class="w-77" v-model="form.recommendedSelfEvaluation" type="textarea" placeholder="请填写自我评价" :rows="4"/>
      </div>
      <div class="m-25" style="padding-bottom: 30px;">
        <span>简历图片：</span>
        <el-input class="w-77" v-model="form.recommendedPhoto" autocomplete="off" placeholder="图片 URL"></el-input>
        <el-upload
          class="img-upload"
          ref="upload"
          action="http://localhost:8822/march/covers"
          :on-preview="handlePreview"
          :on-remove="handleRemove"
          :before-remove="beforeRemove"
          :on-success="handleSuccess"
          multiple
          :limit="1"
          :on-exceed="handleExceed"
          :file-list="fileList">
          <el-button size="small" type="primary">点击上传</el-button>
          <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
        </el-upload>
      </div>
    </div>

    <!-- <el-form-item label="自我评价以及荣誉情况">
      <el-input v-model="form.recommendedSelfEvaluation" type="textarea" />
    </el-form-item>
    <el-form-item label="专业技能">
      <el-input v-model="form.rcDescribe" type="textarea" />
    </el-form-item> -->
    <div class="submit-button">
      <el-button type="primary" @click="onSubmit" style="width:100%">发送</el-button>
    </div>
    <!-- <div style="width: 100%;display:flex;justify-content: center;">
      <el-form-item style="margin: 10px 0 20px 0">
        <el-button type="primary" @click="onSubmit">发送</el-button>
        <el-button @click="onCancel">取消</el-button>
      </el-form-item>
    </div> -->
    
    
    <!-- <el-form-item prop="image_uri" style="margin-bottom: 30px;">
      <Upload v-model="form.image_uri" />
    </el-form-item> -->
  </el-form>
  </div>
</template>
<script>
import * as getData from '../../service/getData.js'
import Upload from '@/components/Upload/SingleImage3'
import * as global from '../../config/mUtils'

export default {
  components: {
    Upload
  },
  data() {
    return {
      fileList: [],
      form: {
        tjId: '',
        hrId: '',
        recruitId: '',
        recommendedName: '',
        recommendedProvince: '',
        recommendednation: '',
        recommendedEmail: '',
        recommendedBirth: '',
        recommendedPolitical: '',
        recommendedMarital: '',
        recommendedTelephone: '',
        address: '',
        recommendedAttend: '',
        recommendedEducation: '',
        recommendedSchool: '',
        recommendedMajor: '',
        recommendedEnglish: '',
        recommendedComputer: '',
        recommendedProfessionalInfo: '',
        recommendedWorkInfo: '',
        recommendedProgramInfo: '',
        recommendedSelfEvaluation: '',
        recommendedPhoto: '',
        recommendedGainCertificate: '',
        recommendedAge: '',
      },
      url: ''
    }
  },
  mounted() {
    this.form.tjId= sessionStorage.getItem('userId') || 110;
    this.form.hrId = this.$route.query.hrId || 111;
    this.form.recruitId = this.$route.query.recruitId || 1;
  },
  methods: {
    onSubmit() {
      this.form.recommendedGainCertificate = this.form.recommendedGainCertificate.replace('^','\n');
      this.form.recommendedProfessionalInfo = this.form.recommendedProfessionalInfo.replace('^','\n');
      this.form.recommendedWorkInfo = this.form.recommendedWorkInfo.replace('^','\n');
      this.form.recommendedProgramInfo = this.form.recommendedProgramInfo.replace('^','\n');
      this.form.recommendedSelfEvaluation = this.form.recommendedSelfEvaluation.replace('^','\n');


      
      getData.resumetAdd(this.form)
      .then(resp => {
        if (resp.data.code === 200) {
          this.$alert('发布成功', '提示', {
            confirmButtonText: '确定'
          })
          // this.clear()
          this.$emit('onSubmit')
          this.$router.push({ path: '/example/myRecommend' })
        } else {
          this.$alert(resp.data.message, '提示', {
            confirmButtonText: '确定'
          })
        }
      }).catch(failResponse => {})
    },
    onCancel() {
      this.$message({
        message: 'cancel!',
        type: 'warning'
      })
    },
    handleRemove (file, fileList) {
    },

    handlePreview (file) {
    },

    handleExceed (files, fileList) {
      this.$message.warning(`当前限制选择1个文件，本次选择了${files.lenght}个文件，共选择了${files.length + fileList.length}个文件`)
    },

    beforeRemove (file, fileList) {
      return this.$confirm(`确定移除${file.name}?`)
    },

    handleSuccess (response) {
      this.url = response
      this.form.recommendedPhoto = this.url
      this.$message.warning('上传成功')
    }
  }
}
</script>

<style scoped>
.line{
  text-align: center;
}
.title{
  font-size: 20px;
  padding: 5px;
  padding: 0px 0px 5px 20px;
  margin: 10px 0;
}
.el-input-w {
  width: 75%;
}
.w-65 {
  width: 65%;
}
.m-25 {
  margin-left: 37px;
  margin-bottom: 20px;
  display: inline-block;
}
.submit-button {
  position: fixed;
  bottom: 0px;
  width: 100%;
}
.w-77 {
  width: 77%;
}
</style>