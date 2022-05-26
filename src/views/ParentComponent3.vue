<template>
    <child-component ref='child_component' /> <!-- 3 -->
    <button type="button" @click="changeChildData">Change Child Data</button>
</template>

<script>
import ChildComponent from './ChildComponent3.vue' // 1
export default {
  components: {
    'child-component': ChildComponent // 2
  },
  methods: {
    changeChildData () {
      this.$refs.child_component.msg = '부모 컴포넌트가 변경한 데이터' // 4
    }
  }
}
</script>
