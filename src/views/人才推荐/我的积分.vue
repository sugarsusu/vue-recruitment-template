<template>
  <div>
    <!-- <el-row style="margin: 18px 0px 0px 18px ">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/admin/dashboard' }">管理中心</el-breadcrumb-item>
        <el-breadcrumb-item>个人中心</el-breadcrumb-item>
        <el-breadcrumb-item>我的积分</el-breadcrumb-item>
      </el-breadcrumb>
    </el-row> -->
    <!-- <v-bulk-registration @onSubmit="listUsers()"></v-bulk-registration> -->
    <div class="bg-blue">
    </div>
    <el-card style="margin: 0 42px;
    width: 78%;
    position: absolute;
    top: 184px;">

      <div style="margin: 16px">
        积分总值：
        <span>{{sumPoint}}</span>
      </div>
    </el-card>
    <div class="gift-warp-fonts">奖励明细</div>
    <div>
      <el-table
        :data="allPointList"
        :max-height="tableHeight">
        <el-table-column
          prop="eventTime"
          label="日期"
          show-overflow-tooltip
          fit>
        </el-table-column>
        <el-table-column
          prop="pointsNum"
          label="积分值"
          show-overflow-tooltip
          fit>
          <template slot-scope="scope">
            <span v-if="scope.row.changeType == 0">{{scope.row.pointsNum?'-'+scope.row.pointsNum: 0}}</span>
            <span v-if="scope.row.changeType == 1">{{scope.row.pointsNum?scope.row.pointsNum: 0}}</span>
          </template>
        </el-table-column>
        <el-table-column
          prop="name"
          label="被推荐人"
          >
        </el-table-column>
        <el-table-column
          label="变动原因"
          sortable
          width="100">
          <template slot-scope="scope">
            <span v-if="scope.row.eventType == 0">上传简历1次</span>
            <span v-if="scope.row.eventType == 1">HR初审通过</span>
            <span v-if="scope.row.eventType == 3">待面试</span>
            <span v-if="scope.row.eventType == 4">面试通过</span>
            <span v-if="scope.row.eventType == 5">进入公司</span>
          </template>
        </el-table-column>
      </el-table>
      <!-- <div v-for="(item, index) in allPointList" :key="index" class="">

      </div> -->
    </div>
  </div>
</template>

<script>
import * as getData from '../../service/getData'
export default {
  data () {
    return {
      users: [
        {
          id: '1',
          username: '滑动',
          name: 'jiangting',
          phone: '123456',
          pointsNum: '1',
          eventTime: '2021-4-24',
          reason: 1
        },
        {
          id: '1',
          username: '滑动',
          name: 'jiangting',
          phone: '123456',
          pointsNum: '2',
          eventTime: '2021-4-24',
          reason: 2
        },
        {
          id: '1',
          username: '滑动',
          name: 'jiangting',
          phone: '123456',
          pointsNum: '3',
          eventTime: '2021-4-24',
          reason: 3
        },
      ],
      roles: [],
      dialogFormVisible: false,
      selectedUser: [],
      selectedRolesIds: [],
      resetPasswordDialog: false,
      password: '',
      allPointList: [],
      sumPoint: 0,
    }
  },
  created() {
    // this.listUsers()
    this.getPointsList()
  },
  computed: {
    tableHeight () {
      return window.innerHeight - 320
    }
  },
  methods: {
    listUsers () {
      console.log('8888')
      getData.userList().then(resp => {
        if (resp && resp.data.code === 200) {
          this.list = resp.data.data
        }
      })
    },
    getPointsList() {
      let userId = sessionStorage.getItem('userId')
      getData.pointsIdList({userId: userId}).then(resp => {
        if (resp && resp.data.code === 200) {
          this.allPointList = resp.data.data
          this.allPointList.forEach(item => {
            if(item.changeType == 1){
              this.sumPoint += item.pointsNum
            } else {
              this.sumPoint -= item.pointsNum
            }
            
          })
        }
      })
    },
  }
}
</script>

<style scoped>
.bg-blue {
  background: rgb(107, 107, 241);
  height: 180px;
}
.gift-warp-fonts {
  font-size: 18px;
  margin-top: 67px;
  margin-left: 20px;
}

</style>
