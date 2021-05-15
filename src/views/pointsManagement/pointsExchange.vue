<template>
<div class="app-container">
  <el-form ref="form" :model="form" label-width="120px">
    <el-row>
      <el-col :span="8">
        <el-form-item label="物品名称">
          <el-input v-model="form.stationName" />
        </el-form-item>
      </el-col>
      <el-col :span="6">
        <el-form-item label="所需兑换积分">
          <el-input v-model="form.stationName" />
        </el-form-item>
      </el-col>
    </el-row>
    <el-form-item label="物品兑换说明">
      <el-input v-model="form.rcDescribe" type="textarea" />
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">发送</el-button>
      <el-button @click="onCancel">取消</el-button>
    </el-form-item>
    <el-form-item prop="image_uri" style="margin-bottom: 30px;">
      <Upload v-model="form.image_uri" />
    </el-form-item>
  </el-form>
  </div>
</template>
<script>
import * as getData from '../../service/getData.js'
import Upload from '@/components/Upload/SingleImage3'
export default {
  components: {
    Upload
  },
  data() {
    return {
      form: {
        stationName: '',  //JOB name
        workPlace: '', //工作地点
        date1: '',
        date2: '',
        delivery: false, //紧急
        type: [],
        resource: 0,
        eductionClass: '', //教育等级
        rcEndTime: '',  //结束日期
        rcDescribe: '内容选填', //职位描述
        positionTypeId: '',  //职位类型
        rcDepartmentNum: '', //岗位人数需求

      }
    }
  },
  methods: {
    formatEducation(data) {
    if(data === "junior college" || data === "大专"){
      return 1
    } else if(data === "undergraduate" || data === "本科"){
      return 2
    } else if(data ==="master" || data === "硕士"){
      return 3
    } else if(data === "doctor" || data ==="博士") {
      return 4
    }
   },
    onSubmit() {
      this.form.eductionClass = this.formatEducation(this.form.eductionClass)
      getData.recruitAdd({
        stationName: this.form.stationName,
        workPlace: this.form.workPlace,
        delivery: this.form.delivery,
        rcEndTime: this.form.rcEndTime,
        // email: this.form.email,
        rcDescribe: this.form.rcDescribe,
        rcDepartmentNum: this.form.rcDepartmentNum,
        eductionClass: this.form.eductionClass
      })
      .then(resp => {
        if (resp.data.code === 200) {
          this.$alert('发布成功', '提示', {
            confirmButtonText: '确定'
          })
          // this.clear()
          this.$emit('onSubmit')
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
    }
  }
}
</script>

<style scoped>
.line{
  text-align: center;
}
</style>