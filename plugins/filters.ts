import Vue from 'vue'
import { Plugin } from '@nuxt/types'

// @ts-ignore
const plugin: Plugin = () => {
  Vue.filter('roundDecimal', (value: number, decimalPlaces: number) => (Number.isNaN(value) ? '' : value.toFixed(decimalPlaces) || ''))
}

export default plugin
