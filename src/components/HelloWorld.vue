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
      {name: 'dite-us-kelly-clarkson-001', url: 'https://kellyclarkson01.pages.dev/', verticals: 'US Diet', dec: ''},
      {name: 'ed-cbd-us-5pill-002', url: 'https://5pill-ed1.pages.dev/', verticals: 'US Ed', dec: 'ed1'},
      {name: 'dite-us-0prah-003', url: 'https://0prah-03.pages.dev/', verticals: 'US Diet', dec: 'Diet02'},
      {name: 'ed-cbd-us-enlarge-004', url: 'https://enlarge-ed02.pages.dev/', verticals: 'US Ed', dec: 'ed02'},
      {name: 'ed-cbd-us-sexologis-005', url: 'https://ed03.pages.dev/', verticals: 'US Ed', dec: 'ed03'},
      {name: 'ed-cbd-us-381cm-006', url: 'https://ed04.pages.dev/', verticals: 'US Ed', dec: 'ed04'},
      {name: 'dite-us-dolly-parton-007', url: 'https://dolly-parton04.pages.dev/', verticals: 'US Diet', dec: ''},
      {name: 'cbd-us-reba-mcentire-008', url: 'https://reba-mcentire.pages.dev/', verticals: 'US Cbd', dec: ''},
      {
        name: 'dite-us-rebel-wilson-009',
        url: 'https://dite-us-rebel-wilson-002.pages.dev/',
        verticals: 'US Diet',
        dec: ''
      },
      {
        name: 'dite-us-ree-drummond-010',
        url: 'https://dite-us-ree-drummond-010.pages.dev/',
        verticals: 'US Diet',
        dec: ''
      },
      {
        name: 'cbd-us-whoopi-goldberg-011',
        url: 'https://cbd-us-whoopi-goldberg-011.pages.dev/',
        verticals: 'US Cbd',
        dec: ''
      },
      {
        name: 'dite-us-kelly-clarkson-02-012',
        url: 'https://dite-us-kelly-clarkson-02-012.pages.dev/',
        verticals: 'US Diet',
        dec: ''
      },
      {name: 'dite-us-0prah-02-013', url: 'https://dite-us-0prah-02-013.pages.dev/', verticals: 'US Diet', dec: ''},
      {
        name: 'dite-us-miranda-lambert-014',
        url: 'https://dite-us-miranda-lambert-14.pages.dev/',
        verticals: 'US Diet',
        dec: ''
      },
      {
        name: 'dite-us-shank-tank-015',
        url: 'https://dite-us-emily-senstrom-015.pages.dev/',
        verticals: 'US Diet',
        dec: ''
      },
      {
        name: 'dite-us-shank-tank-02-016',
        url: 'https://dite-us-shank-tank-02-016.pages.dev/',
        verticals: 'US Diet',
        dec: ''
      },
      {
        name: 'dite-us-trisha-earwood-017',
        url: 'https://dite-us-trisha-earwood-017.pages.dev/',
        verticals: 'US Diet',
        dec: ''
      },
      {
        name: 'dite-us-kelly-clarkson-03-018',
        url: 'https://dite-us-kelly-clarkson-03-018.pages.dev/',
        verticals: 'US Diet',
        dec: ''
      }, {
        name: 'dite-us-ina-garten-019',
        url: 'https://dite-us-ina-garten-019.pages.dev/',
        verticals: 'US Diet',
        dec: ''
      },
      {
        name: 'dite-us-raba-mcentire-020',
        url: 'https://dite-us-raba-mcentire-020.pages.dev',
        verticals: 'US Diet',
        dec: ''
      },
      {
        name: 'diet-de-meine-geschichte-021',
        url: 'https://diet-de-meine-geschichte-021.pages.dev/',
        verticals: 'DE Diet',
        dec: ''
      },
      {
        name: 'diet-de-gesundhdeitsportal-022',
        url: 'https://diet-de-gesundhdeitsportal-022.pages.dev/',
        verticals: 'DE Diet',
        dec: ''
      },
      {
        name: 'diet-fr-karine-le-marchand-023',
        url: 'https://diet-fr-karine-le-marchand-023.pages.dev/',
        verticals: 'FR Diet',
        dec: ''
      },
      {
        name: 'diet-de-biggest-loser-024',
        url: 'https://diet-de-biggest-loser-024.pages.dev/',
        verticals: 'DE Diet',
        dec: ''
      },
      {
        name: 'diet-au-sam-025',
        url: 'https://diet-au-sam-025.pages.dev/',
        verticals: 'DE Diet',
        dec: ''
      },
      {
        name: 'skin-us-026',
        url: 'https://skin-us-026.pages.dev/',
        verticals: 'US Skin',
        dec: ''
      },{
        name: 'skin-us-027',
        url: 'https://skin-us-027.pages.dev/',
        verticals: 'US Skin',
        dec: ''
      },
      {
        name: 'ed-us-028',
        url: 'https://ed-us-028.pages.dev/',
        verticals: 'US ED',
        dec: ''
      },{
        name: 'ed-us-029',
        url: 'https://ed-us-029.pages.dev/',
        verticals: 'US ED',
        dec: ''
      },{
        name: 'ed-us-028-1',
        url: 'https://ed-us-028-1.pages.dev/',
        verticals: 'US ED',
        dec: ''
      },{
        name: 'cbd-us-kelly-030',
        url: 'https://cbd-us-kelly-030.pages.dev/',
        verticals: 'US CBD',
        dec: ''
      },{
        name: 'diet-fr-lanrent-031',
        url: 'https://diet-fr-lanrent-031.pages.dev/',
        verticals: 'FR Diet',
        dec: ''
      },{
        name: 'diet-uk-holly-032',
        url: 'https://diet-uk-holly-032.pages.dev/',
        verticals: 'UK Diet',
        dec: ''
      },{
        name: 'cbd-uk-holly-033',
        url: 'https://cbd-uk-bery-033.pages.dev/',
        verticals: 'UK CBD',
        dec: ''
      },{
        name: 'cbd-uk-ciff-034',
        url: 'https://cbd-uk-ciff-034.pages.dev/',
        verticals: 'UK CBD',
        dec: ''
      },{
        name: 'diet-us-shank-035',
        url: 'https://diet-us-shank-035.pages.dev/',
        verticals: 'US Diet',
        dec: ''
      },{
        name: 'diet-us-sandra-036',
        url: 'https://diet-us-sandra-036.pages.dev/',
        verticals: 'US Diet',
        dec: ''
      },{
        name: 'diet-us-adamari-037',
        url: 'https://diet-us-adamari-037.pages.dev/',
        verticals: 'US Diet',
        dec: ''
      },{
        name: 'diet-us-tyrabanks-038',
        url: 'https://cbd-us-tom-038.pages.dev/',
        verticals: 'US CBD',
        dec: ''
      },{
        name: 'cbd-us-reabmcentire-039',
        url: 'https://cbd-us-reabmcentire-039.pages.dev/',
        verticals: 'US CBD',
        dec: ''
      },{
        name: 'cbd-us-retavansusteren-040',
        url: 'https://cbd-us-retavansusteren-040.pages.dev/',
        verticals: 'US CBD',
        dec: ''
      },{
        name: 'diet-us-shankthank-041',
        url: 'https://diet-us-shankthank-041.pages.dev/',
        verticals: 'US Diet',
        dec: ''
      },{
        name: 'diet-us-reba-042',
        url: 'https://diet-us-reba-042.pages.dev/',
        verticals: 'US Diet',
        dec: ''
      },{
        name: 'cbd-ca-kevinoleary-043',
        url: 'https://cbd-ca-kevinoleary-043.pages.dev/',
        verticals: 'CA CBD',
        dec: ''
      },{
        name: 'cbd-ca-lisalaflamme-044',
        url: 'https://cbd-ca-lisalaflamme-044.pages.dev/',
        verticals: 'CA CBD',
        dec: ''
      },{
        name: 'diet-us-inagarten-045',
        url: 'https://diet-us-inagarten-045.pages.dev/',
        verticals: 'US Diet',
        dec: ''
      },{
        name: 'diet-us-fenniferlawrence-046',
        url: 'https://diet-us-fenniferlawrence-046.pages.dev/',
        verticals: 'US Diet',
        dec: ''
      },{
        name: 'diet-uk-deborahmeaden-047',
        url: 'https://diet-us-deborahmeaden-047.pages.dev/',
        verticals: 'UK Diet',
        dec: ''
      },{
        name: 'diet-us-kelly-048',
        url: 'https://diet-us-kelly-048.pages.dev/',
        verticals: 'UK Diet',
        dec: ''
      },{
        name: 'cbd-us-seanhannity-049',
        url: 'https://cbd-us-seanhannity-049.pages.dev/',
        verticals: 'UK Diet',
        dec: ''
      },{
        name: 'diet-de-stefaniegiesinger-050',
        url: 'https://diet-de-stefaniegiesinger-050.pages.dev/',
        verticals: 'DE Diet',
        dec: ''
      },{
        name: 'diet-usmirandalambert-051',
        url: 'https://diet-usmirandalambert-051.pages.dev/',
        verticals: 'US Diet',
        dec: ''
      },{
        name: 'diet-us-usmirandalambert-052',
        url: 'https://diet-us-usmirandalambert-052.pages.dev/',
        verticals: 'US Diet',
        dec: ''
      },{
        name: 'diet-us-usmirandalambert-052',
        url: 'https://diet-uk-dawnfrench-053.pages.dev/',
        verticals: 'UK Diet Diet',
        dec: ''
      },{
        name: 'cbd-ca-waynegretzky0-54',
        url: 'https://cbd-ca-waynegretzky0-54.pages.dev/',
        verticals: 'CA CBD',
        dec: ''
      },
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
