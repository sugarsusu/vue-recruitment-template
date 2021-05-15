<template>
<div class="app-container">
  <el-form ref="form" :model="form" label-width="120px">
    <el-form-item label="job name">
      <el-input v-model="form.stationName" />
    </el-form-item>
    <el-form-item label="job zone">
      <el-select v-model="form.workPlace" placeholder="please select your zone">
        <el-option label="上海" value="上海" />
        <el-option label="北京" value="北京" />
        <el-option label="杭州" value="杭州" />
        <el-option label="广州" value="广州" />
      </el-select>
    </el-form-item>
    <el-form-item label="job time">
        <el-date-picker v-model="form.rcEndTime" type="date" placeholder="Pick a date" style="width: 100%;" />
    </el-form-item>
    <el-form-item  label="Number of recruits">
      <el-input  style="width: 30%;" v-model="form.rcDepartmentNum" />
    </el-form-item>
    <el-form-item label="紧急">
      <el-switch v-model="form.delivery" />
    </el-form-item>
    <el-form-item label="job type">
      <el-checkbox-group v-model="form.type">
        <el-checkbox label="视频面试" name="type" />
        <el-checkbox label="电话面试" name="type" />
        <el-checkbox label="线下面试" name="type" />
      </el-checkbox-group>
    </el-form-item>
    <el-form-item label="education">
      <el-radio-group v-model="form.eductionClass">
        <el-radio label="junior college" value="1"/>
        <el-radio label="undergraduate" value="2"/>
        <el-radio label="master" value="3"/>
        <el-radio label="doctor" value="4"/>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="岗位状态">
      <el-radio-group v-model="form.departmentState">
        <el-radio :label="1">急招</el-radio>
        <el-radio :label="2">长期招</el-radio>
        <el-radio :label="3">短期招</el-radio>
        <!-- <el-radio label="急招" value="1"/>
        <el-radio label="长期招" value="2"/>
        <el-radio label="短期招" value="3"/> -->
        <!-- <el-radio label="doctor" value="4"/> -->
      </el-radio-group>
    </el-form-item>
    <el-form-item label="job form">
      <el-input v-model="form.rcDescribe" type="textarea" />
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">发布</el-button>
      <el-button @click="onCancel">取消</el-button>
    </el-form-item>
    
  </el-form>
  </div>
</template>
<script>
// import { date } from '../../config/mUtils.js'
import * as getData from '../../service/getData.js'
import * as global from '../../config/mUtils'

export default {
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
        rcEndTime: new Date().format("yyyy-MM-dd hh:mm:ss"),  //结束日期
        rcDescribe: '', //职位描述
        positionTypeId: '',  //职位类型
        rcDepartmentNum: 0, //岗位人数需求
        departmentState: 0 //岗位状态

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
      let des = this.form.rcDescribe.replace("\n","^")
      getData.recruitAdd({
        stationName: this.form.stationName,
        workPlace: this.form.workPlace,
        // delivery: this.form.delivery,
        rcEndTime: new Date(this.form.rcEndTime).format("yyyy-MM-dd hh:mm:ss"),
        departmentState: this.form.departmentState,
        // email: this.form.email,
        rcDescribe: des,
        rcDepartmentNum: this.form.rcDepartmentNum,
        eductionClass: this.form.eductionClass,
        hrId: parseInt(sessionStorage.getItem("userId"))
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