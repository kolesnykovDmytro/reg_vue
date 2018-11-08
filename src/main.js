import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vuetify from 'vuetify'
import VuetifyConfirm from 'vuetify-confirm'
import 'vuetify/dist/vuetify.min.css'
import firebaseConfig from './config/firebse.js'
import firebase from 'firebase'

Vue.use(Vuetify)

Vue.use(VuetifyConfirm, {
  buttonTrueText: 'OK',
  buttonFalseText: 'On, ho',
  width: 400
})

Vue.config.productionTip = false
firebase.initializeApp(firebaseConfig);

new Vue({
  router,
  store,
  render: h => h(App),
  created(){
    let vm = this
    firebase.auth().onAuthStateChanged(function(user) {
      vm.$store.dispatch('STATE_CHANGED', user)
    });
  }
}).$mount('#app')
