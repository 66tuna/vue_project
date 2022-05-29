import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// import store from './store'
import mixins from './mixins'
import store from './store'

// createApp(App).use(store).use(router).mount('#app')
const app = createApp(App)
app.use(router, store)
app.mixin(mixins)
app.mount('#app')
app.directive('focus', {
  mounted (el) {
    el.focus()
  }
})

window.Kakao.init('41abc0888d4f8d6ce5eb1e04e5ee8bd3')
