<template>
  <body id="paper">
    <el-form
      v-loading="loading"
      class="login-container"
      label-position="left"
      abel-width="0px"
    >
      <h3 class="login_title">用户注册</h3>
      <el-form-item>
        <el-input
          v-model="loginForm.username"
          type="text"
          auto-complete="off"
          placeholder="账号"
        />
      </el-form-item>
      <el-form-item>
        <el-input
          v-model="loginForm.password"
          type="password"
          auto-complete="off"
          placeholder="密码"
        />
      </el-form-item>
        <el-button type="primary" style="width: 100%;background: #505458;border: none" @click="register">注册</el-button>
    </el-form>
  </body>
</template>
<script>
export default {
  data() {
    return {
      checked: true,
      loginForm: {
        username: '',
        password: ''
      },
      loading: false
    }
  },
  methods: {
    register() {
      var _this = this
      this.$axios
        .post('/register', {
          username: this.loginForm.username,
          password: this.loginForm.password
        })
        .then(resp => {
          if (resp.data.code === 200) {
            this.$alert('注册成功', '提示', {
              confirmButtonText: '确定'
            })
            _this.$router.replace('/login')
          } else {
            this.$alert(resp.data.message, '提示', {
              confirmButtonText: '确定'
            })
          }
        })
        .catch(failResponse => {})
    }
  }
}
</script>
<style>
  #paper {
    background:url("http://assets.2dfire.com/frontend/e0478e33658a6590374945ea5f992253.jpg") no-repeat;
    background-position: center;
    height: 100%;
    width: 100%;
    background-size: cover;
    position: fixed;
  }
  body{
    margin: -5px 0px;
  }
  .login-container {
    border-radius: 15px;
    background-clip: padding-box;
    margin: 90px auto;
    width: 350px;
    padding: 35px 35px 15px 35px;
    background: #fff;
    border: 1px solid #eaeaea;
    box-shadow: 0 0 25px #cac6c6;
  }
  .login_title {
    margin: 0px auto 40px auto;
    text-align: center;
    color: #505458;
  }
</style>

