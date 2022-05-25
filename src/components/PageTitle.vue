<template>
    <h2>{{title}}</h2>
    <p>{{level}}</p>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '페이지 제목입니다.'
    },
    level: {
      type: Number,
      default: 0
    }
  }
}
</script>
