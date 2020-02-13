<template>
  <div class="app">
    <AppHeader />

    <div class="app-body">
      <main class="main">
        <nuxt ref="page" />
      </main>
    </div>
  </div>
</template>

<script>
import AppHeader from '@/components/header/Header'
import {
  GLOBAL_CLICK_EVENT,
  GLOBAL_RESIZE_EVENT,
} from '@/constants/global'

export default {
  components: {
    AppHeader,
  },
  head() {
    return {
      htmlAttrs: {
        lang: this.$i18n.locale,
      },
    }
  },
  mounted() {
    document.onclick = (e) => {
      this.$root.$emit(GLOBAL_CLICK_EVENT, e)
    }

    window.onresize = (e) => {
      this.$nextTick(() => {
        this.$root.$emit(GLOBAL_RESIZE_EVENT, e)
      })
    }
  },
}
</script>

<style lang="scss" scoped>
.app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  &-body {
    display: block;
    flex: 1 auto;
  }
}
</style>
