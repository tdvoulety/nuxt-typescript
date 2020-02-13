<template>
  <div>Error {{ error }}</div>
</template>

<script>

export default {
  props: ['error'],
  head() {
    return {
      htmlAttrs: {
        lang: this.$i18n.locale,
      },
    }
  },
}
</script>
