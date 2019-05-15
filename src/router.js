import Vue from 'vue'
import Router from 'vue-router'
import Foo from '@/views/Foo'
import Bar from '@/views/Bar'
import CommonLayout from '@/components/layouts/CommonLayout'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '',
      component: CommonLayout,
      children: [
        {
          path: '',
          name: 'foo',
          component: Foo
        },
        {
          path: '/bar',
          name: 'bar',
          component: Bar
        }
      ]
    }
  ]
})
