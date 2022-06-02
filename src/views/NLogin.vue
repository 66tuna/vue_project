<template>
    <div id="naver_id_login"></div>
</template>

<script>
export default {
  mounted () {
    const naverIdLogin = new window.Naver_id_login('RTo7CfjxAc1UAFjOnfDs', 'http://localhost:8080/naverlogin')
    const state = naverIdLogin.getUniqState()
    naverIdLogin.setButton('width', 2, 40)
    naverIdLogin.setState(state)
    naverIdLogin.init_naver_id_login()
  }
}
</script>
