<template>
    <div>
        <input type="text" @keyup.enter="enter()" v-model="val">
        <input type="text" @keydown="tab()" v-model="val">
        <p>{{val}}</p>
    </div>
</template>

<script>
export default {
  data () {
    return {
      val: ''
    }
  },
  methods: {
    enter () {
      alert('enter')
    },
    tab () {
      alert('tab')
    }
  }
}
</script>
