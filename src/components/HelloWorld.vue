<template>
  <vxe-table
      border
      show-header-overflow
      show-overflow
      :row-config="{isHover: true}"
      :data="tableData2">
    <!--    <vxe-column type="seq" title="序号" width="60"></vxe-column>-->
    <vxe-column field="name" title="名人"></vxe-column>
    <vxe-column field="verticals" title="类目"></vxe-column>
    <vxe-column field="url" title="预览链接"></vxe-column>
    <vxe-column field="dec" title="备注"></vxe-column>
  </vxe-table>
</template>

<script>
import {defineComponent, ref} from 'vue'

export default defineComponent({
  setup() {
    const tableData2 = ref([
      {name: 'kelly clarkson', url: 'https://kellyclarkson01.pages.dev/', verticals: 'US Diet', dec: ''},
    ])
    return {
      tableData2
    }
  }
})
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
