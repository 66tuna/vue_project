<template>
    <table>
        <tr :key="i" v-for="(product, i) in productList">
            <td>{{product.product_name}}</td>
            <td>{{product.price}}</td>
            <td>{{product.category}}</td>
            <td>{{product.delivery_price}}</td>
        </tr>
    </table>
</template>

<script>
import ApiMixin from '../api.js'
export default {
  name: 'mixinsApi',
  mixins: [ApiMixin],
  data () {
    return {
      productList: []
    }
  },
  unmounted () {
    console.log('컴포넌트 unmounted')
    // 믹스인 mounted
    // 컴포넌트 mounted
  },
  async mounted () {
    this.productList = await this.$callAPI('https://2ecb7f07-a9bf-4bf8-87c7-e7bd3a538821.mock.pstmn.io/list', 'get')
    console.log(this.productList)
    console.log('컴폰넌트 mounted')
  }
}
</script>
