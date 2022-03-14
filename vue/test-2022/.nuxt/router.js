import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _676012fa = () => interopDefault(import('../pages/compare.vue' /* webpackChunkName: "pages/compare" */))
const _8b3191f8 = () => interopDefault(import('../pages/comparison.vue' /* webpackChunkName: "pages/comparison" */))
const _32d79036 = () => interopDefault(import('../pages/extra.vue' /* webpackChunkName: "pages/extra" */))
const _63c4d323 = () => interopDefault(import('../pages/heroes.vue' /* webpackChunkName: "pages/heroes" */))
const _8488e7da = () => interopDefault(import('../pages/me.vue' /* webpackChunkName: "pages/me" */))
const _60fc218b = () => interopDefault(import('../pages/results.vue' /* webpackChunkName: "pages/results" */))
const _ec996d66 = () => interopDefault(import('../pages/test.vue' /* webpackChunkName: "pages/test" */))
const _a38e14c8 = () => interopDefault(import('../pages/question/_slug.vue' /* webpackChunkName: "pages/question/_slug" */))
const _74e8c8b2 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/partmonitor.hu/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/compare",
    component: _676012fa,
    name: "compare"
  }, {
    path: "/comparison",
    component: _8b3191f8,
    name: "comparison"
  }, {
    path: "/extra",
    component: _32d79036,
    name: "extra"
  }, {
    path: "/heroes",
    component: _63c4d323,
    name: "heroes"
  }, {
    path: "/me",
    component: _8488e7da,
    name: "me"
  }, {
    path: "/results",
    component: _60fc218b,
    name: "results"
  }, {
    path: "/test",
    component: _ec996d66,
    name: "test"
  }, {
    path: "/question/:slug?",
    component: _a38e14c8,
    name: "question-slug"
  }, {
    path: "/",
    component: _74e8c8b2,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
