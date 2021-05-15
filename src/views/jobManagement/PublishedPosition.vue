<template>
  <div class="app-container">
    <el-button class="add-button" type="success" @click="$router.push('/index/NewPosition')">新增职位</el-button>
    <div class="filter-container">
      <!-- <el-input v-model="listQuery.title" placeholder="Title" style="width: 200px;" class="filter-item" @keyup.enter.native="handleFilter" />
      <el-select v-model="listQuery.importance" placeholder="Imp" clearable style="width: 90px" class="filter-item">
        <el-option v-for="item in importanceOptions" :key="item" :label="item" :value="item" />
      </el-select>
      <el-select v-model="listQuery.type" placeholder="Type" clearable class="filter-item" style="width: 130px">
        <el-option v-for="item in calendarTypeOptions" :key="item.key" :label="item.display_name+'('+item.key+')'" :value="item.key" />
      </el-select>
      <el-select v-model="listQuery.sort" style="width: 140px" class="filter-item" @change="handleFilter">
        <el-option v-for="item in sortOptions" :key="item.key" :label="item.label" :value="item.key" />
      </el-select>
      <el-button v-waves class="filter-item" type="primary" icon="el-icon-search" @click="handleFilter">
        Search
      </el-button> -->
      <!-- <el-button class="filter-item" style="margin-left: 10px;" type="primary" icon="el-icon-edit" @click="handleCreate">
        Add
      </el-button>
      <el-button v-waves :loading="downloadLoading" class="filter-item" type="primary" icon="el-icon-download" @click="handleDownload">
        Export
      </el-button> -->
      <!-- <el-checkbox v-model="showReviewer" class="filter-item" style="margin-left:15px;" @change="tableKey=tableKey+1">
        reviewer
      </el-checkbox> -->
    </div>
    <el-table
      v-loading="listLoading"
      :data="list"
      element-loading-text="Loading"
      border
      fit
      highlight-current-row
    >
      <el-table-column
        align="center"
        label="ID"
        width="85"
      >
        <div slot-scope="scope">
          {{ scope.$index }}
        </div>
      </el-table-column>
      <el-table-column label="职位">
        <template slot-scope="scope">
          {{ scope.row.stationName }}
        </template>
      </el-table-column>
      <el-table-column label="职位描述">
        <template slot-scope="scope">
          {{ scope.row.rcDescribe }}
        </template>
      </el-table-column>
      <el-table-column label="学历要求" width="110" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.eductionClass }}</span>
        </template>
      </el-table-column>
      <el-table-column label="所需人数" width="110" align="center">
        <template slot-scope="scope">
          {{ scope.row.rcDepartmentNum }}
        </template>
      </el-table-column>
      <el-table-column class-name="status-col" label="状态" width="110" align="center">
        <template slot-scope="scope">
          <el-tag :type="scope.row.departmentState | statusFilter">{{ scope.row.departmentState }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column align="center" prop="created_at" label="地点" width="200">
        <template slot-scope="scope">
          <i class="el-icon-time" />
          <span>{{ scope.row.workPlace }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="Operations">
        <template slot-scope="scope">
          <el-button  v-show="scope.row.enabled" type="primary" size="small" @click="commitStatusChange(scope.row.recruitId)">使过期</el-button>
          <el-button type="danger" size="small" @click="handleDelete(scope.row.recruitId)">删除</el-button>
          <el-button type="danger" size="small" @click="goHrResume(scope.row)">查看我收到的简历</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import * as getData from '../../service/getData.js'
export default {
  components: {},
  filters: {
    statusFilter(status) {
      const statusMap = {
        0: 'success',
        1: 'gray',
        2: 'danger'
      }
      return statusMap[status]
    }
  },
  data() {
    return {
      list: null,
      listLoading: true,
      listQuery: {
        page: 1,
        limit: 20,
        importance: undefined,
        title: undefined,
        type: undefined,
        sort: '+id'
      },
    }
  },
  created() {
    this.getRecruitList()
  },
  methods: {
    formatEducation(data) {
      if(data === 1){
        return "junior college"
      } else if(data === 2){
        return "undergraduate"
      } else if(data ===3){
        return "master"
      } else if(data === 4) {
        return "doctor"
      } else {
        return "none"
      }
    },
    getRecruitList() {
      this.listLoading = true
      // this.$message({ message: 'success', type: 'success' })
      // this.$notify({
      //   title: 'Fail',
      //   message: 'Delete Successfully',
      //   type: 'success',
      //   duration: 2000
      // })
      const hrId = sessionStorage.getItem("userId")
      getData.hrPosition(hrId).then(res => {
        if (res.data.code === 200) {
          console.log(res.data.data)
          this.list =res.data.data
        } else {
          
        }
      })
      this.listLoading = false
    },
    goHrResume(row) {
      this.$router.push({ path: '/index/HrResume', query: { recruitId: row.recruitId ,hrId: row.hrId }})
    },
    handleDelete(recruitId) {
      this.$confirm('确定要删除这个职位吗?', 'warning', 
      {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
      .then(async() => {
        await getData.deleRecruit(recruitId).then(res => {
          if(res && res.data.code === 200) {
            this.getRecruitList()
            this.$message({
              type: 'success',
              message: '删除成功!'
            })
          }
        })
      })
      .catch(err => { console.error(err) })
    },
    commitStatusChange (recruitId) {
      getData.recruitsUpdate({
        recruitId: recruitId,
      }).then(resp => {
        if (resp && resp.data.code === 200) {
          this.getRecruitList()
        }
      })
    },
    handleFilter() {
      this.listQuery.page = 1
      this.getList()
    },
  },
}
</script>
<style scoped lang='scss'>
.filter-container {
  padding-bottom: 10px;
  .filter-item {
    display: inline-block;
    vertical-align: middle;
    margin-bottom: 10px;
  }
}
</style>
