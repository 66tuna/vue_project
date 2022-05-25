<template>
    <div>
        <button type="button" @click="one(), two()">click</button>
    </div>
</template>

<script>
export default {
  data () {
    return {
      num: 0
    }
  },
  methods: {
    one () {
      alert('One')
    },
    two () {
      alert('Two')
    }
  }
}
</script>
