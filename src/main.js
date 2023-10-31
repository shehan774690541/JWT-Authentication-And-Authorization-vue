import Vue from 'vue'
import App from './App.vue'
import router from './router'

import Buefy from 'buefy'
import 'buefy/dist/buefy.css'

import {createPinia,PiniaVuePlugin} from "pinia"
Vue.use(PiniaVuePlugin)
const pinia = createPinia()

Vue.use(Buefy)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')


pinia.use((context)=>{
  console.log(context)
  const useStoreId = context.store.$id
  console.log(useStoreId)

  // sync data from store ---------------
  const fromLocalStorageProducts = JSON.parse(localStorage.getItem(useStoreId))
  if(fromLocalStorageProducts){
    context.store.$patch(fromLocalStorageProducts)
  }

  // listen to changes and update local storage --------------
  context.store.$subscribe((mutation,state)=>{
    localStorage.setItem(useStoreId,JSON.stringify(state))
  })
})

Vue.config.productionTip = false;

new Vue({
  pinia,
  el: '#app',
  router,
  render:(h)=>h(App)
}).$mount("#app");