<template>
  <button type="button" @click="naverLogin">네이버 로그인</button>
</template>

<script>
export default {
  methods () {
    this.naverLogin = new window.naver.LoginWithNaverId(
      {
        clientId: 'RTo7CfjxAc1UAFjOnfDs',
        callbackUrl: 'http://localhost:8080/login/naver',
        isPopup: false,
        loginButton: { color: 'green', type: 3, height: 60 }
      }
    )
    this.naverLogin.init()
    this.naverLogin.getLoginStatus((status) => {
      if (status) {
        console.log(status)
        console.log(this.naverLogin.user)

        const email = this.naverLogin.user.getEmail()
        if (email === undefined || email == null) {
          alert('이메일은 필수 정보입니다. 정보 제공을 동의해주세요')
          this.naverLogin.reprompt()
        } else {
          console.log('callback 처리에 실패하였습니다')
        }
      }
    //   const naverIdLogin = new window.NaverIdLogin('RTo7CfjxAc1UAFjOnfDs', 'http://localhost:8080/login/naver')
    // const state = naverIdLogin.getUniqState()
    // naverIdLogin.setButton('white', 2, 40)
    // naverIdLogin.setState(state)
    // naverIdLogin.init_naver_id_login()
    // console.log(naverIdLogin)
    })
  }
}
</script>
