<template>
    <h1>Full Name: {{fullName}}</h1>
</template>

<script>
export default {
  name: 'computedComponents',
  data () {
    return {
      firstName: 'Seungwon',
      lastName: 'Go'
    }
  },
  computed: {
    fullName () {
      return this.firstName + ' ' + this.lastName
    }
  }
}
</script>
