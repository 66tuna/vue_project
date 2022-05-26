<template>
    <child-component ref="child_component" />
</template>

<script>
import ChildComponent from './ChildComponent.vue'
export default {
  components: {
    'child-component': ChildComponent
  },
  mounted () {
    this.$refs.child_component.$refs.btn.click() // 두번째 $refs가 unknown이 뜨는지 모르겠다
  }
}
</script>
