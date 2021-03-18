import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _6c2a125d = () => interopDefault(import('..\\pages\\layout' /* webpackChunkName: "" */))
const _09b23cd2 = () => interopDefault(import('..\\pages\\home' /* webpackChunkName: "" */))
const _2ccda5d6 = () => interopDefault(import('..\\pages\\login' /* webpackChunkName: "" */))
const _092258d6 = () => interopDefault(import('..\\pages\\profile' /* webpackChunkName: "" */))
const _a72e5ad4 = () => interopDefault(import('..\\pages\\settings' /* webpackChunkName: "" */))
const _605b38a0 = () => interopDefault(import('..\\pages\\editor' /* webpackChunkName: "" */))
const _2026c7ba = () => interopDefault(import('..\\pages\\article' /* webpackChunkName: "" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/",
    component: _6c2a125d,
    name: "layout",
    children: [{
      path: "",
      component: _09b23cd2,
      name: "home"
    }, {
      path: "/login",
      component: _2ccda5d6,
      name: "login"
    }, {
      path: "/register",
      component: _2ccda5d6,
      name: "register"
    }, {
      path: "/profile/:username",
      component: _092258d6,
      name: "profile"
    }, {
      path: "/settings",
      component: _a72e5ad4,
      name: "settings"
    }, {
      path: "/editor",
      component: _605b38a0,
      name: "editor"
    }, {
      path: "/editor/:slug",
      component: _605b38a0,
      name: "editor"
    }, {
      path: "/article/:slug",
      component: _2026c7ba,
      name: "article"
    }]
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config.app && config.app.basePath) || routerOptions.base
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
