<template>
  <div id="naverIdLogin"></div>
  <button type="button" @click="logout()">로그아웃</button>
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
    this.naverLogin = new window.naver.LoginWithNaverId(
      {
        clientId: 'RTo7CfjxAc1UAFjOnfDs',
        callbackUrl: 'http://localhost:8080/naverlogin',
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
  },
  methods: {
    logout () {
      const accessToken = this.naverLogin.accessToken.accessToken
      console.log(this.naverLogin)
      const url = `/oauth2.0/token?grant_type=delete&client_id=RTo7CfjxAc1UAFjOnfDs&client_secret=4l2oMBiuwS&access_token=${accessToken}&service_provider=NAVER`
      axios.get(url).then((res) => {
        console.log(res.data)
      })
    }
  }
}
</script>
