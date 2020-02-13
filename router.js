import Vue from 'vue'
import Router from 'vue-router'
import config from '@/config/env'
import routes from '@/routes'
import { getLocalizedRoutes } from '@/utils/router'

Vue.use(Router)
// eslint-disable-next-line import/prefer-default-export
export const createRouter = () => (
  new Router({
    mode: 'history',
    routes: getLocalizedRoutes(routes, config),
  })
)
