import Vue from 'vue'
import VueRouter from 'vue-router'
import  store from '@/store/store'
import Pipeline from '@/helpers/middlewarePipeline' 
import routes from '@/router/routes'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes
})
//  base: process.env.BASE_URL,

router.beforeEach((to, from, next) => {
  const middleware = to.meta.middleware
  const context = { to, from, next, router, store }

  if (!middleware) {
    console.log("router - index");
    return next()
  }

  middleware[0]({
    ...context,
    next: Pipeline(context, middleware, 1),
  });
  

});

export default router
