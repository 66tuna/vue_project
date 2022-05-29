<template>
    <div>
        <h2>Calculator2</h2>
        <div>
            <input type="text" v-model="num1"/>
            <span> + </span>
            <input type="text" v-model="num2"/>
            <span> = </span>
            <span>{{result}}</span>
        </div>
    </div>
</template>

<script>
import { reactive, computed, toRefs } from 'vue' // 컴포지션 api 연동
function plusCalculator () {
  const state = reactive({
    num1: 0,
    num2: 0,
    result: computed(() => parseInt(state.num1) + parseInt(state.num2))
  })
  return toRefs(state)
}
export default {
  name: 'calculator-composition',
  setup () {
    const { num1, num2, result } = plusCalculator()
    return {
      num1, num2, result
    }
  }
}
</script>
