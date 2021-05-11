<template>
  <div class="dashboard-container">
    <div class="dashboard-text">name: 11111</div>
  </div>
</template>

<script>
// import { mapGetters } from 'vuex'

export default {
  name: 'Dashboard'
  // computed: {
  //   ...mapGetters([
  //     'name'
  //   ])
  // },
  // created() {
  //   console.log(this.$store)
  //   this.$store.commit('user/SET_NAME',"123123")
  // }
}
</script>

<style lang="scss" scoped>
.dashboard {
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
</style>
