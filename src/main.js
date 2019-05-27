import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/vuetify'
import * as fb from 'firebase'

Vue.config.productionTip = false

new Vue({
    router : router,
    store: store,
  render: h => h(App),
    created: function () {
        fb.initializeApp({
            apiKey: 'AIzaSyDIesodVUgbmZr_ddFjvOizG6oCR0Y4FEM',
            authDomain: 'itc-ads-project-vue.firebaseapp.com',
            databaseURL: 'https://itc-ads-project-vue.firebaseio.com',
            projectId: 'itc-ads-project-vue',
            storageBucket: 'itc-ads-project-vue.appspot.com',
            messagingSenderId: '582476523564',
            appId: '1:582476523564:web:8ab25de9c6254a0c'
        })
      fb.auth().onAuthStateChanged(user => {
        if(user) {
          this.$store.dispatch('autoLoginUser', user)
        }
      })
    }
}).$mount('#app')

