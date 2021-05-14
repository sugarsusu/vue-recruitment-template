<template>
  <div class="app-container" style="width: 100%;margin-bottom: 50px;position: relative;background:rgb(245 245 245);; padding: 20px">
    <!-- <el-table
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
        width="95"
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
      <el-table-column label="地点">
        <template slot-scope="scope">
          {{ scope.row.workPlace }}
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
          <el-tag :type="scope.row.status | statusFilter">{{ scope.row.departmentState }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column align="center" prop="created_at" label="职位描述" width="200">
        <template slot-scope="scope">
          <i class="el-icon-time" />
          <span>{{ scope.row.rcDescribe }}</span>
        </template>
      </el-table-column>
    </el-table> -->
    <div class="rightBlock" style="overflow:auto">
      <div class="borderContainer">
        <div class="sofiaBold listTitle">
          <div style="margin-top: 5px; display: flex;justify-content: center;align-items: center">
            <el-input
              @keyup.enter.native="searchClick"
              placeholder="通过工作地址或岗位搜索..."
              prefix-icon="el-icon-search"
              size="small"
              style="width: 100%;margin-right: 10px"
              v-model="name">
            </el-input>
            <el-button size="small" type="primary" icon="el-icon-search" @click="searchClick">搜索</el-button>
          </div>
          <!-- <span class="searchInput">
            <i class="el-icon-searatsx-inputch"></i>
            <input autocomplete="off" class="" data-test="searchBlockInput" placeholder="搜索职位" type="text" value="">
            <span class="atsx-input-suffix"><button type="button" data-test="searchBlockBtn" class="atsx-btn searchAction__1yMqt search-searchAction sofiaBold atsx-btn-primary"><span>搜索</span></button></span>
          </span> -->
        </div>
        <ul class="listItems">
          <li class="positionItem" v-for="(item, index) in list" :key="index" @click="goDetail(item.recruitId)">
            <div class="positionItem-title">
              <span class="positionItem-title-text">{{item.stationTitle}}</span>
            </div>
            <div class="subTitle positionItem-subTitle">{{item.workPlace}}
              <div class="lineDevider"></div>{{item.stationName}}
              <div class="lineDevider"></div><p v-if="item.departmentState == 1">急招</p><p v-else>长期招</p>
            </div>
            <div class="jobDesc positionItem-jobDesc">
              <p class="job-fonts">{{item.rcDescribe}}</p>
              
            </div>
          </li>
          <!-- <li class="positionItem">
            <div class="positionItem-title">
              <span class="positionItem-title-text">电商美妆行业运营专家-红人店方向</span>
            </div>
            <div class="subTitle positionItem-subTitle">上海
              <div class="lineDevider"></div>运营 - 产品运营
              <div class="lineDevider"></div>社招
            </div>
            <div class="jobDesc positionItem-jobDesc">
              1、负责抖音电商红人美妆店铺的运营工作，助力红人店铺发展；
              2、设计美妆红人店铺直播解决方案，根据行业发展特征和消费者洞察力，输出美妆红人店铺打法及落地；
              3、和主播进行美妆货品结构方向的沟通，帮助红人通过直播加速商品流通。
            </div>
          </li>
          <li class="positionItem">
            <div class="positionItem-title">
              <span class="positionItem-title-text">电商美妆行业运营专家-红人店方向</span>
            </div>
            <div class="subTitle positionItem-subTitle">上海
              <div class="lineDevider"></div>运营 - 产品运营
              <div class="lineDevider"></div>社招
            </div>
            <div class="jobDesc positionItem-jobDesc">
              1、负责抖音电商红人美妆店铺的运营工作，助力红人店铺发展；
              2、设计美妆红人店铺直播解决方案，根据行业发展特征和消费者洞察力，输出美妆红人店铺打法及落地；
              3、和主播进行美妆货品结构方向的沟通，帮助红人通过直播加速商品流通。
            </div>
          </li>
          <li class="positionItem">
            <div class="positionItem-title">
              <span class="positionItem-title-text">电商美妆行业运营专家-红人店方向</span>
            </div>
            <div class="subTitle positionItem-subTitle">上海
              <div class="lineDevider"></div>运营 - 产品运营
              <div class="lineDevider"></div>社招
            </div>
            <div class="jobDesc positionItem-jobDesc">
              1、负责抖音电商红人美妆店铺的运营工作，助力红人店铺发展；
              2、设计美妆红人店铺直播解决方案，根据行业发展特征和消费者洞察力，输出美妆红人店铺打法及落地；
              3、和主播进行美妆货品结构方向的沟通，帮助红人通过直播加速商品流通。
            </div>
          </li>
          <li class="positionItem">
            <div class="positionItem-title">
              <span class="positionItem-title-text">电商美妆行业运营专家-红人店方向</span>
            </div>
            <div class="subTitle positionItem-subTitle">上海
              <div class="lineDevider"></div>运营 - 产品运营
              <div class="lineDevider"></div>社招
            </div>
            <div class="jobDesc positionItem-jobDesc">
              1、负责抖音电商红人美妆店铺的运营工作，助力红人店铺发展；
              2、设计美妆红人店铺直播解决方案，根据行业发展特征和消费者洞察力，输出美妆红人店铺打法及落地；
              3、和主播进行美妆货品结构方向的沟通，帮助红人通过直播加速商品流通。
            </div>
          </li> -->
        </ul>
        </div>
    </div>
  </div>
</template>

<script>
import * as getData from '../../service/getData.js'
export default {
  components: {},
  filters: {
    statusFilter(status) {
      const statusMap = {
        published: 'success',
        draft: 'gray',
        deleted: 'danger',
        name: "",
        id: "",
      }
      return statusMap[status]
    }
  },
  props: {},
  data() {
    return {
      list: [],
      listLoading: true,
      name: "",
      id: 0,
    }
  },
  created() {
    this.getRecruitList()
  },
  methods: {
    getRecruitList() {
      this.listLoading = true
      // this.$message({ message: 'success', type: 'success' })
      // this.$notify({
      //   title: 'Fail',
      //   message: 'Delete Successfully',
      //   type: 'success',
      //   duration: 2000
      // })
      getData.recruitList({name: this.name, id: this.id}).then(res => {
        if (res.data.code === 200) {
          console.log(res.data.data)
          this.list = res.data.data
        } else {
          this.getRecruitList();
        }
      })
      this.listLoading = false
    },
    goDetail(recruitId) {
      // window.location.href = `./detail?recruitId=${recruitId}`
      this.$router.push({ name: 'detail', params: { recruitId: recruitId }})
      // sessionStorage.setItem("item",item)
    },
    searchClick() {
      this.getRecruitList();
    }
  },
}
</script>
<style scoped lang="scss">
  .rightBlock{
    width: 100%;
    flex-shrink: 0;
    .borderContainer{
      .listTitle{
        margin-top: 20px;
        // display: flex;
        // justify-content: space-between;
        align-items: center;
        height: 36px;
        line-height: 36px;
        font-size: 30px;
        font-weight: 700;
        color: #1f2329;
        margin-bottom: 18px;
        // margin-left: 16px;
      }
      .g-top-nav{
        // margin: 70px auto;
        margin-right: 20px;
        // width:860px;
        // height:60px;
        height: 50px;
        width: 500px;
        background:rgba(255,255,255,1);
        border-radius:10px;
        display: flex;
        justify-content: space-between;
        box-shadow: 0 8px 24px 0 rgba(187,191,196,0.2);
        .g-left-text{
            img{
                margin: 20px 10px;
                width: 20px;
                height: 20px;
            }

            span{
                font-size:22px;
                color:rgba(170,170,170,1);
                line-height: 60px;
            } 
        }
        .nav-btn{
            width:70px;
            height:50px;
            background:rgba(0,116,226,1);
            border-radius:0px 6px 6px 0px;
            font-size:22px;
            color:rgba(255,255,255,1)

        }
    }
      .listItems{
        margin-top: 22px;
        padding:0;
      }
      .positionItem{
        display: block;
        margin-bottom: 26px;
        background: #fff;
        padding: 14px;
        border-radius: 9px;
        // &:nth-child(2n + 1) {
        //   padding-right: 10px;
        // }
        // &:nth-child(2n) {
        //   padding-left: 10px;
        // }
        // padding: 22px 8px 18px 16px;
        // transition: box-shadow .5s;
        // cursor: pointer;
        // border: 1px solid rgba(0,0,0,0);
        // box-shadow: 0 8px 24px 0 rgba(187,191,196,0.2);
        .positionItem-title{
          color: #1f2329;
          font-weight: 600;
        }
        .positionItem-title-text{
          flex-shrink: 1;
          flex-grow: 0;
          text-overflow: ellipsis;
          white-space: nowrap;
          overflow: hidden;
        }
        .subTitle{
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          font-size: 16px;
          font-weight: 500;
          line-height: .15;
          color: #1f2329;
        }
        .positionItem-subTitle{
          color: #646a73;
        }
        .lineDevider{
          display: inline-block;
          width: 1px;
          height: 12px;
          background-color: #bbbfc4;
          margin: 0 8px;
        }
        .jobDesc{
          width: 100%;
          max-height: 44px;
          font-size: 14px;
          font-weight: 500;
          font-style: normal;
          font-stretch: normal;
          line-height: 1.57;
          letter-spacing: normal;
          color: #646a73;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: pre-line;
        }
        .positionItem-jobDesc{
          color: #8f959e;
        }
      }
    }
  }
  .searchInput{
    width: 500px;
    box-shadow: 0 8px 24px 0 rgba(187,191,196,0.2);
    border-radius: 30px;
    height: 50px;
    margin: 0 50px;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    color: #1f2329;
    font-size: 14px;
    font-variant: tabular-nums;
    line-height: 1.5;
    list-style: none;
    font-feature-settings: "tnum";
    position: relative;
    display: inline-block;
    width: 100%;
    text-align: start;
    i{
      width: 20px;
      font-size: 16px;
      position: absolute;
      top: 50%;
      z-index: 2;
      line-height: 0;
      color: #9ca2a9;
      transform: translateY(-50%);
    }
    .atsx-input{
      padding-left: 46px;
      padding-right: 200px;
      font-size: 16px;
      border: 1px solid rgba(0,0,0,0);
      text-align: left;
    }
  }
  .job-fonts {
    margin: 3px 0px;
  }
  .atsx-input-suffix{
    z-index: 2;
    line-height: 0;
    color: #9ca2a9;
    font-size: 16px;
    position: absolute;
    right: 13px;
    top: 0;
    right: 0;
    bottom: 0;
    transform: none;
  }
</style>
