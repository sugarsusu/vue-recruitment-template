
<template>
  <div>
    <el-row style="margin: 18px 0px 0px 18px ">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item>我的推荐</el-breadcrumb-item>
      </el-breadcrumb>
    </el-row>
    <el-card
      v-for="(item, index) in myList"
      :key="index"
      class="ss"
      style="margin: 18px 2%;width: 95%;position: relative; font-size: 14px;"
    >
      <div class="detail-name">
        <span>姓名：{{item.recommendedName}}</span>
      </div>
      <div class="detail-font">
        <span>简历审核状态：</span>
        <span v-if="item.examineType == 0">待审核</span>
        <span v-if="item.examineType == 1">HR初审</span>
        <span v-if="item.examineType == 2">待面试</span>
        <span v-if="item.examineType == 3">面试通过</span>
        <span v-if="item.examineType == 4">主管初审</span>
      </div>
      <div class="detail-font">
        <span>受教育程度：</span>
        <span v-if="item.recommendedEducation === 1">大专</span>
        <span v-if="item.recommendedEducation === 2">本科</span>
        <span v-if="item.recommendedEducation === 3">硕士</span>
        <span v-if="item.recommendedEducation === 4">博士</span>
      </div>
      <div class="detail-font">
        <span>手机号：{{item.recommendedTelephone}}</span>
      </div>
      <div class="detail-font">
        <span>邮箱：{{item.recommendedEmail}}</span>
      </div>
      <div class="edit">
        <el-button
          @click="editUser(scope.row)"
          type="text"
          size="small">
          取消审核
        </el-button>
        <el-button
        @click="resumetDel(item.resumeId)"
          type="text"
          size="small">
          移除
        </el-button>
      </div>
    </el-card>
  </div>
</template>

<script>
import * as getData from '../../service/getData'
export default {
  data () {
    return {
      users: [],
      roles: [],
      dialogFormVisible: false,
      selectedUser: [],
      selectedRolesIds: [],
      resetPasswordDialog: false,
      password: '',
      myList:[],
      tableList:[
        {
          recommendTime:"2020-12-02",
          candidatesName:"长相",
          candidatesSex:1,
          candidatesPhone:"123456789",
          candidatesEmail:"123456789@jjj.com",
          examineType:0,
        },,
      ]
    }
  },
  mounted () {
    this.listUsers()
    this.listRoles()
    this.getMyResumeInfo()
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
          this.users = resp.data.data
        }
      })
    },
    listRoles () {
      getData.roleList().then(resp => {
        if (resp && resp.data.code === 200) {
          this.roles = resp.data.data
        }
      })
    },
    getMyResumeInfo(){
      const userId = sessionStorage.getItem('userId')
      getData.myResumeInfo(userId).then(res => {
        if (res.data.code === 200) {
          console.log(res.data.data)
          this.myList = res.data.data
        } else {
          this.getRecruitList();
        }
      })
    },
    commitStatusChange (value, user) {
      if (user.username !== 'admin') {
        getData.statusUpdate
        ({
          enabled: value,
          username: user.username
        }).then(resp => {
          if (resp && resp.data.code === 200) {
            if (value) {
              this.$message('用户 [' + user.username + '] 已启用')
            } else {
              this.$message('用户 [' + user.username + '] 已禁用')
            }
          }
        })
      } else {
        user.enabled = true
        this.$alert('不能禁用管理员账户')
      }
    },
    onSubmit (user) {
      let _this = this
      // 根据视图绑定的角色 id 向后端传送角色信息
      let roles = []
      for (let i = 0; i < _this.selectedRolesIds.length; i++) {
        for (let j = 0; j < _this.roles.length; j++) {
          if (_this.selectedRolesIds[i] === _this.roles[j].id) {
            roles.push(_this.roles[j])
          }
        }
      }
      this.$axios.put('/admin/user', {
        username: user.username,
        name: user.name,
        phone: user.phone,
        email: user.email,
        roles: roles
      }).then(resp => {
        if (resp && resp.data.code === 200) {
          this.$alert('用户信息修改成功')
          this.dialogFormVisible = false
          // 修改角色后重新请求用户信息，实现视图更新
          this.listUsers()
        } else {
          this.$alert(resp.data.message)
        }
      })
    },
    editUser (user) {
      this.dialogFormVisible = true
      this.selectedUser = user
      let roleIds = []
      if (user.roles) {
        for (let i = 0; i < user.roles.length; i++) {
          roleIds.push(user.roles[i].id)
        }
      }
      this.selectedRolesIds = roleIds
    },
    resumetDel(row) {
      console.log(row)
      getData.resumetDel(row).then(res => {
        // Toast.success('成功文案');
        // debugger
        if (res.data.code === 200) {
          // this.$toast({
          //   duration: 3000,
          //   content: '这是一条消息提示'
          // });
          this.$alert('删除成功')
          this.getMyResumeInfo()
        }
      })
    },
    resetPassword (username) {
      this.resetPasswordDialog = true
      this.password = ''
      // this.$axios.put('/admin/user/password', {
      //   username: username
      // }).then(resp => {
      //   if (resp && resp.data.code === 200) {
      //     this.$alert('密码已重置为 123')
      //   }
      // })
    },
    definePassword () {
      getData.resetPassword({
        username: this.selectedUser.username,
        password: this.password
      }).then(res => {
        if (res && res.data.code === 200) {
          this.$alert('密码已重置成功')
        }
      })
    }
  }
}
</script>

<style scoped>
.edit {
  position: absolute;
  right: 20px;
  top: 4px
}
.detail-font {
  line-height: 20px;
}
.detail-name {
  margin-bottom: 9px;
  border-bottom: 1px solid rgb(206 206 206);
  height: 28px;
}
</style>

