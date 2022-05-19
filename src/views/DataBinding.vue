<template>
    <h1>{{h}}, {{title}}</h1>
    <div>{{htmlString}}</div>
    <div v-html="htmlString"></div>
</template>

<script>
export default {
  data () {
    return {
      h: 'hello',
      title: 'World',
      htmlString: '<p style="color:red;">This is a red String</p>'
    }
  }
}
</script>
