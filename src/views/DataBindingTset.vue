<template>
    <div>
        <input type="text" v-model="test"> <br>
        <span>{{test}}</span>
    </div>
</template>

<script>
export default {
  data () {
    return {
      test: ''
    }
  }
}
</script>
