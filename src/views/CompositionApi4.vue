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
import { plusCalculator } from '../common.js'
export default {
  name: 'calculator-common',
  setup () {
    const { num1, num2, result } = plusCalculator()
    return {
      num1, num2, result
    }
  }
}
</script>
