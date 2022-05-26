<template>
    <div>
        <h1><slot name="header"></slot></h1>
        <slot></slot>
        <slot name="footer"></slot>
    </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '페이지 제목입니다'
    }
  }
}
</script>
