import Vue from 'vue'
import jsdom from 'jsdom'
import { config } from '@vue/test-utils'
import VueCompositionApi from '@vue/composition-api'
import BootstrapVue from 'bootstrap-vue'

import mocks from '@/test/unit/mocks'
import stubs from '@/test/unit/stubs'

Vue.use(VueCompositionApi)
Vue.use(BootstrapVue)

Vue.config.productionTip = false

config.mocks = mocks
config.stubs = stubs

/* eslint-disable */
global.window = new jsdom.JSDOM().window;
global.document = window.document;
global.dataLayer = []
$nuxt = { $router: { push: () => {} } }
window.URL.createObjectURL = () => {}
