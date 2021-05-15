<template>
  <el-container>
    <el-aside style="width: 200px;margin-top: 20px">
      <switch></switch>
      <v-LibrarySideMenv @indexSelect="listByCategory" ref="sideMenu"></v-LibrarySideMenv>
        <!-- SideMenu -->
    </el-aside>
    <el-main>
      <!-- books -->
      <v-LibraryBooks class="books-area" ref="booksArea"></v-LibraryBooks>
    </el-main>
  </el-container>
</template>
<script>
import * as getData from '../../service/getData'
export default {
  name: 'AppLibrary',
  data () {
    return {}
  },
  methods: {
    listByCategory () {
      let cid = this.$refs.sideMenu.cid
      getData.categoriesBooks(cid).then(resp => {
        if (resp && resp.status === 200) {
          this.$refs.booksArea.books = resp.data
        }
      })
    }
  }
}
</script>
<style scoped>
.books-area {
  width: 990px;
  margin-left: auto;
  margin-right: auto;
}
</style>
