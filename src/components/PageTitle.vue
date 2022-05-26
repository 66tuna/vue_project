<template>
    <h2>{{title}}</h2>
    <p>{{level}}</p>
    <p>{{isShow}}/</p>
    <p>{{commentIds}}</p>
    <p>{{author}}</p>
    <p>{{post}}</p>
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
    },
    isShow: {
      type: Boolean,
      default: false
    },
    commentIds: {
      type: Array
    },
    author: {
      type: Object
    },
    post: {
      type: Object
    }
  }
}
</script>
