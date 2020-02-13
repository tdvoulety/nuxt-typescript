import Vue from 'vue'
import { GLOBAL_COMPONENTS } from '@/constants/global'

GLOBAL_COMPONENTS.forEach((item) => {
  Vue.component(item.key, item.component)
})
