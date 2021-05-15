<template>
    <div id="index" class="flex_direction_box">
    <el-header style="text-align: right; font-size: 12px">
      <el-dropdown>
        <i class="el-icon-back" style="margin-right: 15px" @click="$router.go(-1)">
          <span style="margin-right: 15px;color: #333;cursor: pointer;">返回首页</span>
        </i>
        <!-- <el-dropdown-menu slot="dropdown">
          <div  @click.stop="openSetings()">
            <el-dropdown-item>账号设置</el-dropdown-item>
          </div>
          <el-dropdown-item>我的推荐</el-dropdown-item>
          <div  @click.stop="loginOut()">
            <el-dropdown-item>退出账号</el-dropdown-item>
          </div>
        </el-dropdown-menu> -->
      </el-dropdown>
      <span>{{username}}</span>
    </el-header>
    <div class="index_header flex-box">
      <h3 class="title">账号设置</h3>
    </div>
    <div class="table" style="margin-top: 20px;overflow: auto;">
      <div class="user_info" style="min-width: 700px;">
        <div class="nav">
          <!-- <ul class="center_nav flex-box">
            <li @click="changeContractType(item,index)" :class="isActive==item.value?'active':''"
                v-for="(item,index) in customType" :key="index">
              <p>{{item.label}}</p>
            </li>
          </ul> -->
          <div class="pull-right">
            <el-button size="small" @click="isEdit=false;" v-if="isEdit">取消
            </el-button>
            <el-button type="success" size="small" @click="save()" v-if="isEdit">保存</el-button>
            <i class="el-icon-edit-outline icon" @click="isEdit=true;" v-if="!isEdit"></i>
          </div>
        </div>
        <el-form label-width="200px" size="mini" :disabled="!isEdit">
          <el-row style="margin-top: 30px;">
            <el-col :span="20" :offset="2">
              <el-row>
                <el-col :span="16">
                  <el-form-item label="用户名:" label-width="120px" prop="username">
                    <label>{{form.username}}</label>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="我的总积分:" label-width="120px" prop="sumPoints">
                    <label>{{form.sumPoints}}</label>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-form-item label="真实姓名：" prop="name">
                <el-input v-model="form.name" placeholder="请输入姓名" maxlength="10"></el-input>
              </el-form-item>
              <el-form-item label="性别:" prop="sex">
                <el-select v-model="form.sex" placeholder="请选择性别">
                  <el-option label="男" :value="0"></el-option>
                  <el-option label="女" :value="1"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="出生日期：" prop="birthDate">
                  <el-date-picker
                    v-model="form.birthDate"
                    format="yyyy-mm-dd 00:00:00"
                    type="date"
                    placeholder="请选择出生日期">
                  </el-date-picker>
              </el-form-item>
              <el-form-item label="邮箱：" prop="email">
                <el-input v-model="form.email" placeholder="请输入邮箱"></el-input>
              </el-form-item>
              <el-form-item label="手机号：" prop="phone">
                <el-input v-model="form.phone" placeholder="请输入手机号"></el-input>
              </el-form-item>
              <!-- <el-form-item label="所属职务:" prop="sex">
                <el-select v-model="form.userPosition" placeholder="请选择性别">
                  <el-option label="管理员" :value="0"></el-option>
                  <el-option label="员工" :value="1"></el-option>
                </el-select>
              </el-form-item> -->
            </el-col>
          </el-row>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
import * as getData from '../service/getData'
import * as global from '../config/mUtils'
export default {
  components: {},
  props: {},
  data () {
    return {
      form: {
        name: 'jt',
        sex: 1,
        birthDate: '2020-1-19',
        email: '26028',
        phone: '1306753820',
        userPosition: 0
      },
      isEdit: true,
      username: ''
    }
  },
  created () {},
  mounted () {
    this.username = global.getSession('userName')
    this.init()
  },
  methods: {
    init () {
      getData.userDetail(this.username).then(res => {
        if (res.data.code === 200) {
          this.form = res.data.data
          this.$message({
            type: 'success',
            message: '查询成功'
          })
        } else {
          this.$message = res.data.message
        }
      }).catch(() => {})
    },
    save () {
      getData.userInfoEdit(this.form).then(res => {
        if (res.data.code === 200) {
          this.$message({
            type: 'success',
            message: '保存成功'
          })
          this.init()
        } else {
          this.$message = res.data.message
        }
        this.isEdit = false
      }).catch(() => {})
    }
  },
  computed: {},
  watch: {}
}
</script>
<style scoped lang="scss">
.pull-right {
  margin: 0;
  padding-top: 20px;
}
#index {
  min-width: 997px;
  background: #ebeef2;
  width: 100%;
  height: 100%;
  padding: 20px;
  box-sizing: border-box;
}
.index_header {
  width: 100%;
  background: #fff;
  padding: 0 20px;
  box-sizing: border-box;
  height: 63px;
  justify-content: space-between;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  .title {
    font-weight: 700;
    font-style: normal;
    font-size: 16px;
    color: #333;
  }
}
.table {
  flex: 1;
  margin-top: 20px;
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
}
.user_info {
  width: 60%;
  margin: 20px auto 0;
  background: #fff;
  padding-bottom: 20px;

  .user_info_header {
    padding: 0 20px;
    border-bottom: 1px solid #e4e4e4;

    .title {
      font-size: 18px;
      color: #333;
      margin: 0 40px 0 20px;
      font-weight: 700;
    }

    .user_info_avatar {
      width: 70px;
      height: 70px;
    }
  }

  .user_content {
    padding: 30px 20px;
    box-sizing: border-box;
    min-height: 324px;
    overflow: auto;

    .user_content_box {
      border-right: 1px solid #e4e4e4;
      padding: 0 9%;
    }

    .el-form-item {
      padding: 15px 0px;
      /*padding-left: 60px;*/
      margin-bottom: 0;
      margin-top: -8px;

      span {
        display: inline-block;
        font-size: 13px;
        color: #333333;
      }

      .title {
        font-size: 13px;
        color: #333333;
        font-weight: 700;
        line-height: 26px;
        width: 120px;
      }

      div.text-right {
        width: 50px;

        span {
          width: 100%;
        }
      }

      .advance {
        width: 40px;
      }
    }

    .user_content_left {
      flex: 1;

    }

    .user_content_right {
      flex: 1;
    }
  }
}

  .icon {
    font-size: 32px;
    line-height: 34px;
    cursor: pointer;
  }

  .open-secrecy {
    padding: 20px;
    box-sizing: border-box;
  }
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }
</style>
