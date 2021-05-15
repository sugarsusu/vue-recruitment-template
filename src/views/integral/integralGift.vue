<template v-if="exchangeList.length > 0">
  <ul class="goods-list"  id="here">
  <li class="item-box" v-for="(item, index) in exchangeList" :key="index">
    <!-- <goods-item
      :item="item"
    >
    </goods-item> -->
  </li>
  </ul>
</template>
<script>
// import GoodsItem from '@/components/goodsItem/index'

export default ({
  data() {
    
  },
  // components: {
  //   GoodsItem
  // }
})
</script>
<style lang="less" scoped>
.goods-list {
  margin-top: 32px;
}
.item-box {
  display: inline-block;
  width: 50%;
  margin-bottom: 26px;
  &:nth-child(2n + 1) {
    padding-right: 10px;
  }
  &:nth-child(2n) {
    padding-left: 10px;
  }
}
</style>
