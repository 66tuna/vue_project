import axios from 'axios'
// axios.defaults.baseURL = 'http:/localhost:3000'
// axios.defaults.headers.post['Content-Type'] = 'application/json'
// axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*'  // 이것들이vue.config.js의 proxy 설정 없이 개발환경이나 운영환경에서 cors문제를 해결할 수 있다

export default {
  methods: {
    async $api (url, method, data) {
      return (await axios({
        method: method,
        url,
        data
      }).catch(e => {
        console.log(e)
      })).data
    }
  }
}
