import { GLOBAL_COMPONENTS } from '@/constants/global'

const components = {
  'client-only': '<div class="client-only-stub"></div>',
  'nuxt-link': '<a class="nuxt-link-stub"></a>',
  'router-link': '<a class="router-link-stub"></a>',
  nuxt: '<div class="nuxt-stub"></div>',
}

GLOBAL_COMPONENTS.forEach((item) => {
  components[item.key] = item.component
})

export default components
