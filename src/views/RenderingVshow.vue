<template>
    <div>
        <h1 v-show="type=='A'">A</h1>
        <h1 v-show="type=='B'">B</h1>
        <h1 v-show="type!=='A'">C</h1>
    </div>
</template>

<script>
export default {
  data () {
    return {
      type: 'B'
    }
  }
}
</script>
