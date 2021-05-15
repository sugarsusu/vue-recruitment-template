<template>
  <el-container class="container">
    <transition name="slide-fade">
      <div v-show="isSwitch" class="aside-cont">
        <div class="logo">
          <div class="f-imgtopbox2">
            HR人才推荐系统
            <!-- <transition>
              <img class="img2" src="../assets/images/logo.png" alt />
            </transition> -->
          </div>
        </div>
        <div class="icon_switch" style="right:-15px;" @click="isSwitch=!isSwitch">
          <i :class="isSwitch?'el-icon-caret-left':'el-icon-caret-right'"></i>
        </div>
        <v-left-nav-bar :urlList="childrenNavList"></v-left-nav-bar>
      </div>
    </transition>
    <el-container class="w100 h100" style="min-width: 1040px;">
      <!-- <lang-select class="right-menu-item hover-effect" /> -->
      <el-header class="header flex-box">
        <ul class="main-nav">
          <!-- <li class="main-nav-item">
            <i class="el-icon-setting"></i>
            <p>个人中心</p>
          </li>
          跳转领导层
         
          <li class="main-nav-item">
            <i class="el-icon-setting"></i>
            <p>管控中心</p>
          </li> -->
          
          <!-- <li
            class="main-nav-item"
            @click="goOther(item.path)"
            :class="{active:$route.matched[0].path == item.path}"
            v-for="(item,index) in $router.options.routes"
            :key="index"
            v-if="!item.hidden&&$checkPermissions(item.permission)"
          >
            <i class="iconfont" :class="item.icon"></i>
            <p>{{item.name}}</p>
          </li> -->
          <!-- 跳转领导层 -->
         
          <!-- <li class="main-nav-item" @click="getUrl"  v-if="$checkPermissions('companyGroupManage')">
            <i class="iconfont icon-shouye1"></i>
            <p>管控中心</p>
          </li> -->
        </ul>
        <ul class="header-right flex-box">
          <li>
            <el-dropdown>
            <span class="el-dropdown-link">
              <i class="el-icon-setting"></i>
              {{userName}}
              <!-- <i class="el-icon-arrow-down el-icon--right"></i> -->
            </span>
            <el-dropdown-menu slot="dropdown">
                <div @click="roleChoices" v-show="companytype?companytype.length>1:true">
                  <el-dropdown-item :command="1">切换角色</el-dropdown-item>
                </div>
                <div @click="loginOut">
                  <el-dropdown-item :command="2">退出登录</el-dropdown-item>
                </div>
                <div  @click.stop="openSetings()">
                  <el-dropdown-item>账号设置</el-dropdown-item>
                </div>
                <el-dropdown-item>我的推荐</el-dropdown-item>
                <div  @click.stop="loginOut()">
                  <el-dropdown-item>退出账号</el-dropdown-item>
                </div>
            </el-dropdown-menu>
            </el-dropdown>
          </li>
        </ul>
      </el-header>
      <!-- <router-view></router-view> -->
      <keep-alive>
        <router-view>
          <!-- v-if="$route.meta.keepAlive"这里是会被缓存的视图组件，比如 Home！ -->
        </router-view>
      </keep-alive>

      <!-- <router-view ></router-view> -->
      <!-- v-if="!$route.meta.keepAlive" 这里是不被缓存的视图组件，比如 Edit！ -->
    </el-container>
    <transition name="slide-fade">
      <div v-if="!isSwitch" class="icon_switch" style="left:0;" @click="isSwitch=!isSwitch">
        <i :class=" isSwitch?'el-icon-caret-left':'el-icon-caret-right'"></i>
      </div>
    </transition>
  </el-container>
</template>
<script>
import * as getData from "../service/getData";
// import LangSelect from '../components/LangSelect/index'

export default {
  name: "homeIndex",
  // components: {
  //   LangSelect
  // },
  componentName: "homeIndex",
  data() {
    return {
      userName: "",
      isSwitch: true
    };
  },
  created() {
    // this.companytype=sessionStorage.getItem('companytype');
    this.companytype = 4;
  },
  mounted() {
    // console.log(this.companytype,555);
    // console.log(this.$route)
    console.log(this.childrenNavList);
    
    window.addEventListener("setItem", e => {
      //获取参数
      this.userName = e.newValue;
    });
    this.userName = sessionStorage.getItem("userName");
  },
  methods: {
    // getUrl() {
    //   var url = window.location.href;
    //   // window.location.href = '/back/step/group'
    //     getData_tender.getURL(url).then(res => {
    //     // console.log(res)
    //     window.location.href = res.data.data;
    //   });
    // },
    loginOut() {
      this.$confirm("确认注销吗?", "提示", {
        type: "warning"
      })
        .then(() => {
          // sessionStorage.removeItem("buttonPermission");
          // const indexUrl = this.checkUndefined(
          //   localStorage.getItem("indexUrl")
          // );
          // const channelUrl = this.checkUndefined(this.getChannelUrl());
          // if (indexUrl) {
          //   sessionStorage.clear();
          //   location.href = indexUrl;
          // } else if (channelUrl) {
          //   sessionStorage.clear();
          //   location.href = channelUrl;
          // } else {
          //   this.$message.warning("没有获取到跳转地址，请刷新后重试！");
          // }
          getData.logout().then(res => {
            if(res.data.code == 1){
              window.sessionStorage.clear();
              
            };
          }).catch(_ => {
          console.log(_);
        });
        })
        .catch(() => {});
    },
    // 切换角色
    roleChoices(){
      // this.$router.push('/roleChoices');
    },
    goOther(path) {
      this.$router.push(path);
    },
    openSetings () {
      console.log('456546')
      this.$router.push({path: '/accountSettings'})
    },
    loginOut() {
      this.$confirm("确认注销吗?", "提示", {
        type: "warning"
      })
        .then(() => {
          getData.logout().then(res => {
            if(res.data.code == 200){
              window.sessionStorage.clear();
              this.$router.push({path: '/login'})
            };
          }).catch(_ => {
          console.log(_);
        });
      })
      .catch(() => {});
    },
  },
  computed: {
    childrenNavList() {
      console.log()
      return this.$router.options.routes.filter(item => {
        return item.path == this.$route.matched[0].path;
      })[0].children;
    }
  },
  watch: {}
};
</script>
<style lang="scss" scoped>
@import "../assets/css/mixin";

.fade-enter-active,
.fade-leave-active {
  transition: all 0.2s ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}

.container {
  width: 100%;
  height: 100%;
  background-color: #f8f8f9;
  /*min-width: 1300px;*/
  .header {
    height: 58px;
    padding: 0;
    background-color: #50566b;
    justify-content: space-between;

    .collapse {
      padding: 0 16px;
      height: 50px;
      line-height: 50px;
      cursor: pointer;

      i {
        color: #2a92e7;
        font-size: 20px;
      }

      &:hover {
        background-color: rgba(42, 146, 231, 0.2);
      }
    }

    .g-searchinput {
      margin-left: 35px;
      width: 229px;
      height: 43px;
    }

    .crumb-box {
      flex: 1;
    }

    .user-box {
      margin-right: 30px;

      .btn {
        color: #657984;
        padding: 0 10px;
        height: 50px;
        line-height: 50px;
        cursor: pointer;

        &:hover {
          background-color: rgba(42, 146, 231, 0.2);
        }

        i {
          font-size: 20px;
        }
      }
    }

    .navbar li.el-menu-item:hover {
      background-color: rgb(80, 86, 107);
    }
  }

  .aside-cont {
    position: relative;
    background-color: #333743;

    .logo {
      position: relative;
      height: 90px;
      /*background-color: #f8f8f9;*/
      overflow: hidden;
      position: relative;
      text-align: center;
      padding: 0 10px;

      .f-imgtopbox {
        position: absolute;
        top: 20px;
        left: 50%;
        margin-left: -24px;
        @include wh(45px, 49px);
      }

      .f-imgtopbox2 {
        position: absolute;
        top: 20px;
        left: 50%;
        margin-left: -80px;
        @include wh(160px, 49px);
        color: #ffff;
        font-size: 20px;
        font-family: ui-rounded;
      }

      .img1 {
        width: 45px;
      }

      .img2 {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }

    > .el-menu {
      height: calc(100% - 90px);
      height: -moz-calc(100% - 90px);
      height: -webkit-calc(100% - 90px);
      border-right: none;
      background-color: transparent;
      text-align: left;

      &:not(.el-menu--collapse) {
        width: 270px;
        overflow: auto;
      }
    }

    .g-userinfo {
      position: relative;
      height: 90px;
      border-bottom: 2px solid #333743;

      .imgsboxs {
        position: relative;
        width: 52px;
        height: 52px;
        border: 1px solid #007de3;
        border-radius: 50%;
        margin-right: 20px;

        img {
          width: 52px;
          height: 52px;
          object-fit: cover;
          border-radius: 50%;
        }

        &:after {
          position: absolute;
          content: "";
          right: 0;
          bottom: 6px;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background-color: #007de3;
          border: 1px solid #ffffff;
        }
      }

      .smallimgsboxs {
        position: absolute;
        margin: 0;
        top: 18px;
        left: 50%;
        margin-left: -26px;
      }
    }
  }
  .el-dropdown-link {
    cursor: pointer;
  }
  .main {
    position: relative;
    background: #ebeef2;
    padding: 10px 15px;
    box-sizing: border-box;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    flex: 1;

    .main-box {
      overflow: auto;
      /*padding: 15px;*/
      min-width: 930px;
      padding-bottom: 20px;
      flex: 1;
    }

    > .main-wrap {
      width: 100%;
      height: 100%;
      background: #fff;
      box-sizing: border-box;
    }
  }

  .main1 {
    position: relative;
    flex: 1;

    .main-box {
      overflow: auto;
      min-width: 1030px;
      flex: 1;
    }
  }
}

.img {
  width: 55px;
  height: 35px;
  margin-right: 10px;
}

.content-right {
  flex: 1;
}

.index-side-list {
  padding: 20px 10px;
  padding-left: 0;
  max-height: 100%;
  box-sizing: border-box;
  overflow: auto;

  li {
    display: flex;
    padding: 10px;
    width: 161px;
    border-left: 3px solid #333743;
    margin-top: 4px;

    h3 {
      color: #fff;
      font-size: 12px;
      font-weight: 400;
      line-height: 20px;
    }

    p {
      color: rgba(51, 204, 255, 0.768627450980392);
      font-size: 10px;
    }

    i {
      font-size: 14px;
    }
  }

  .active {
    background: #14161b;
    border-left: 3px solid #0cb1f8;
    color: #fff;

    p {
      i,
      span {
        color: #fff;
      }
    }
  }

  .active2 {
    background: #0babf7;
    border: 1px solid #0babf7;

    p {
      color: #fff;
    }
  }
}

.side-btn {
  background: #333743;
  color: #0babf7;
  border: 1px solid rgba(11, 171, 247, 1);
  width: 100%;
}

.side-btn:hover,
.side-btn:focus {
  background: #333743;
  color: #0babf7;
  border: 1px solid rgba(11, 171, 247, 1);
}

.header-nav {
  /*width: 60%;*/
  margin-left: 20px;

  li {
    /*flex: 1;*/
    text-align: center;
    border-bottom: 4px solid #50566b;
    color: #fff;
    margin-left: 20px;
    padding: 18px 20px;
    cursor: pointer;

    p {
      font-weight: 700;
      font-style: normal;
      font-size: 14px;
    }
  }

  li:hover {
    border-bottom: 4px solid #0babf7;
    color: #0babf7;
  }

  .active {
    border-bottom: 4px solid #0babf7;
    color: #0babf7;
  }
}

.system-name {
  padding-left: 20px;
  text-align: left;
  font-weight: 700;
  font-size: 18px;
  color: #fff;
}

.slide-fade-enter-active {
  transition: all 0.3s ease;
}

.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter, .slide-fade-leave-to
    /* .slide-fade-leave-active for below version 2.1.8 */
 {
  transform: translateX(-200px);
  opacity: 0;
}

.g-elmenu {
  width: 160px;
}

.dialog__checkSystem {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: 0;
  z-index: 1000;
}

.toggle_system {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  background: #3c4152;
  min-height: 126px;

  ul {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    align-content: flex-start;
    padding: 12px;
    padding-top: 2px;

    li {
      width: 108px;
      height: 100px;
      border: 1px solid #3c4152;
      -webkit-border-radius: 10px;
      -moz-border-radius: 10px;
      border-radius: 10px;
      margin-left: 20px;
      margin-top: 10px;
      text-align: center;
      color: #fff;
      cursor: pointer;

      p {
        line-height: 24px;
        font-size: 12px;
        margin-top: -15px;
      }
    }

    .active {
      border: 1px solid #0fc5fc;
    }
  }
}

.system_icon {
  width: 88px;
  height: 88px;
}

.dialog-wrap-show {
  animation: dialog-show 0.3s ease-in-out;
}

.dialog-wrap-hidden {
  animation: dialog-hidden 0.3s ease-in-out;
}

.main-nav {
  display: flex;
  min-width: 608px;

  .main-nav-item {
    height: 100%;
    text-align: center;
    color: #fff;
    margin-left: 20px;
    padding: 8px 20px;
    cursor: pointer;
    box-sizing: border-box;
    transition: all 0.3s ease-in-out;
    background: rgba(255, 255, 255, 0);

    p {
      font-weight: 700;
      font-style: normal;
      font-size: 14px;
    }

    .iconfont {
      font-size: 22px;
    }
  }

  .active {
    background: #0099ff;
    color: #fff;
  }
}

@keyframes dialog-show {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@keyframes dialog-hidden {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0.5;
  }
}
.right-menu {
  float: right;
  height: 100%;
  line-height: 50px;

  &:focus {
    outline: none;
  }

  .right-menu-item {
    display: inline-block;
    padding: 0 8px;
    height: 100%;
    font-size: 18px;
    color: #5a5e66;
    vertical-align: text-bottom;

    &.hover-effect {
      cursor: pointer;
      transition: background .3s;

      &:hover {
        background: rgba(0, 0, 0, .025)
      }
    }
  }

  .avatar-container {
    margin-right: 30px;

    .avatar-wrapper {
      margin-top: 5px;
      position: relative;

      .user-avatar {
        cursor: pointer;
        width: 40px;
        height: 40px;
        border-radius: 10px;
      }

      .el-icon-caret-bottom {
        cursor: pointer;
        position: absolute;
        right: -20px;
        top: 25px;
        font-size: 12px;
      }
    }
  }
}
</style>
