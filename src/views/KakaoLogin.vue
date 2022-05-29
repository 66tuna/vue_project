<template>
    <div>
        <button type="button" id="custom-login-btn" @click="kakaoLogin()">카카오 로그인</button>
    </div>
</template>

<script>
export default {
  methods: {
    kakaoLogin () {
      window.Kakao.Auth.login({
        scope: 'profile, account_email',
        success: this.getKakaoAccount
      })
    },
    getKakaoAccount () {
      window.Kakao.API.request({
        url: '/v2/user/me',
        success: res => {
          const kakaoAccount = res.kakao_account
          const nickname = kakaoAccount.profile.nickname // 카카오 닉네임
          const image = kakaoAccount.profile.image // 프로필 이미지
          const email = kakaoAccount.account.email // 카카오 이메일
          console.log('nickname', nickname)
          console.log('image', image)
          console.log('email', email)

          // 로그인 처리 구현
          alert('로그인 성공!')
        },
        fail: error => {
          console.log(error)
        }
      })
    }
  }
}
</script>
