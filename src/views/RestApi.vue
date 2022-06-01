<template>
    <div class="vuex">
    <h1>Sample 화면 입니다.</h1>
    totalItems : {{ totalItems }} <br />
    totalPages : {{ totalPages }} <br />
    <ul>
      <li v-for="(row, i) in items" :key="'result_table_' + i">{{ row }}</li>
    </ul>
  </div>
</template>

<script>
import http from 'axios'
export default {
  data () {
    return {
      list: [],
      totalItems: 0,
      totalPages: 0
    }
  },
  methods: {
    delete (id) {
      http.delete('../api' + id).then(response => {
        const { data } = response
        console.log(data)
      }).catch(error => {
        alert(error)
      })
    },
    create (id, params) {
      http.post('../api', params).then(response => {
        const { data } = response
        console.log(data)
      }).catch(error => {
        alert(error)
      })
    },
    update (id, params) {
      http.put('../api' + id, {
        params: params
      }).then(response => {
        const { data } = response
        console.log(data)
      }).catch(error => {
        alert(error)
      })
    },
    read () {
      const params = {}
      http.get('../api', {
        params: params
      }).then(response => {
        const { data } = response
        console.log(data)
        this.items = data.items
        this.totalItems = data.totalItems
        this.totalPages = data.totalPages
      }).catch(error => {
        alert(error)
      })
    },
    created () {
      console.log(http)
    }
  }
}
</script>

<style scoped>
  .main {
    border: solid 5px #000;
    padding: 100px;
  }
</style>
