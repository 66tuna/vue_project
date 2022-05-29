<template>
    
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      naverLogin: null
    }
  },
  mounted () {
    this.naverLogin = new window.naver.LoginWidthNaverId({
        
    })
  }
}
</script>