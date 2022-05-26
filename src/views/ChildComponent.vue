<template>
    <button type="button" @click="childFun()" ref="btn">click</button>
</template>

<script>
export default {
  methods: {
    childFun () {
      console.log('부모 컨포넌트에서 직접 발생시킨 이벤트')
    }
  }
}
</script>
