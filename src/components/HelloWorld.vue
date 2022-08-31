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
      {name: 'dite-us-kelly-clarkson-001', url: 'https://kellyclarkson01.pages.dev/', verticals: 'US Diet', dec: '' },
      {name: 'ed-cbd-us-5pill-002', url: 'https://5pill-ed1.pages.dev/', verticals: 'US Ed', dec: 'ed1' },
      {name: 'dite-us-0prah-003', url: 'https://0prah-03.pages.dev/', verticals: 'US Diet', dec: 'Diet02' },
      {name: 'ed-cbd-us-enlarge-004', url: 'https://enlarge-ed02.pages.dev/', verticals: 'US Ed', dec: 'ed02' },
      {name: 'ed-cbd-us-sexologis-005', url: 'https://ed03.pages.dev/', verticals: 'US Ed', dec: 'ed03' },
      {name: 'ed-cbd-us-381cm-006', url: 'https://ed04.pages.dev/', verticals: 'US Ed', dec: 'ed04' },
      {name: 'dite-us-dolly-parton-007', url: 'https://dolly-parton04.pages.dev/', verticals: 'US Diet', dec: '' },
      {name: 'cbd-us-reba-mcentire-008', url: 'https://reba-mcentire.pages.dev/', verticals: 'US Cbd', dec: '' },
      {name: 'dite-us-rebel-wilson-009', url: 'https://dite-us-rebel-wilson-002.pages.dev/', verticals: 'US Diet', dec: '' },
      {name: 'dite-us-ree-drummond-010', url: 'https://dite-us-ree-drummond-010.pages.dev/', verticals: 'US Diet', dec: '' },
      {name: 'cbd-us-whoopi-goldberg-011', url: 'https://cbd-us-whoopi-goldberg-011.pages.dev/', verticals: 'US Cbd', dec: '' },
      {name: 'dite-us-kelly-clarkson-02-012', url: 'https://dite-us-kelly-clarkson-02-012.pages.dev/', verticals: 'US Diet', dec: '' },
      {name: 'dite-us-0prah-02-013', url: 'https://dite-us-0prah-02-013.pages.dev/', verticals: 'US Diet', dec: '' },
      {name: 'dite-us-miranda-lambert-014', url: 'https://dite-us-miranda-lambert-14.pages.dev/', verticals: 'US Diet', dec: '' },
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
