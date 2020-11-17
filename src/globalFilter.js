import router from './router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

router.beforeEach((to, from, next) => {
  NProgress.start()
  document.title = to.meta && to.meta.title
  next()
})

router.beforeResolve((to, from, next) => {
  next()
})

router.afterEach(() => {
  NProgress.done()
})
