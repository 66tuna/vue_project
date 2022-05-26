<template>
    <child-component ref='child_component' />
</template>

<script>
import ChildComponent2 from './ChildComponent2.vue'
export default {
  components: {
    'child-component': ChildComponent2
  },
  mounted () {
    this.$refs.child_component.callFromParent()
  }
}
</script>
