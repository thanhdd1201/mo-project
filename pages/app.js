import Vue from 'vue'
import VueRouter from 'vue-router'
import PhotoDetail from "@/pages/photography/PhotoDetail";

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/photography/detail/:name',
      name: 'photoDetail',
      component: PhotoDetail
    }
  ]
})
