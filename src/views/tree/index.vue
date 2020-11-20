// tree
<template>
  <div class="app-container">
    <el-input v-model="filterText" placeholder="Filter keyword" style="margin-bottom:30px;" />
    <el-tree
      ref="tree2"
      :data="data2"
      :props="defaultProps"
      :filter-node-method="filterNode"
      class="filter-tree"
      default-expand-all
    />

  </div>
</template>

<script>
export default {

  data() {
    return {
      filterText: '',
      data2: [{
        id: 1,
        label: 'A 1',
        children: [{
          id: 4,
          label: 'A 1-1',
          children: [{
            id: 9,
            label: 'A 1-1-1'
          }, {
            id: 10,
            label: 'A 1-1-2'
          }]
        }]
      }, {
        id: 2,
        label: 'B 2',
        children: [{
          id: 5,
          label: 'B 2-1'
        }, {
          id: 6,
          label: 'B 2-2'
        }]
      }, {
        id: 3,
        label: 'C 3',
        children: [{
          id: 7,
          label: 'C 3-1'
        }, {
          id: 8,
          label: 'C 3-2'
        }]
      }],
      defaultProps: {
        children: 'children',
        label: 'label'
      }
    }
  },
  watch: {
    filterText(val) {
      this.$refs.tree2.filter(val)
    }
  },

  methods: {
    filterNode(value, data) {
      if (!value) return true
      return data.label.indexOf(value) !== -1
    }
  }
}
</script>

