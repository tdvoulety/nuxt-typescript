<template>
  <div class="language-switcher">
    <div v-if="selectedLocale" class="language-switcher__current">
      <span>{{ selectedLocale.name }}</span>
    </div>

    <Dropdown
      :text="(selectedLocale && selectedLocale.name) || ''"
      :items="links"
      @onClick="handleClickOnLocale"
    />
  </div>
</template>

<script>
export default {
  components: {
    Dropdown: () => import('@/components/global/Dropdown'),
  },
  computed: {
    locales() {
      const { config: { i18n: { locales } } } = this.$store.state

      return locales
    },
    selectedLocale() {
      if (this.locales) {
        return this.locales.find((item) => item.code === this.$i18n.locale)
      }

      return null
    },
    links() {
      if (this.locales && this.selectedLocale) {
        const filteredLocales = this.locales.filter((item) => item.code !== this.selectedLocale.code)

        return filteredLocales.map((item) => {
          const isDev = process.env.NODE_ENV !== 'production'
          const port = isDev ? `:${process.env.DEV_PORT || 3000}` : ''

          return {
            code: item.code,
            value: `http://${item.domain}${port}`,
            text: item.name,
          }
        })
      }

      return []
    },
  },
  methods: {
    handleClickOnLocale({ value }) {
      window.location.assign(value)
    },
  },
}
</script>

<style lang="scss" scoped>
.language-switcher {

  ::v-deep .dropdown {

    &__toggle, &__toggle:active, &__toggle:focus {
      color: grey;
      background: transparent;
      border: 0;
      font-size: 1.4rem;
      line-height: 2.8rem;
      padding: 0 1rem;

      &:after {
        margin-left: .4em;
        vertical-align: .155em;
      }
    }

    &__item {
      font-size: 1.4rem;
      line-height: 1.428571429;
      padding: 0;

      @include media-breakpoint-up(md) {
        padding: .25rem 2.5rem;
        line-height: 1.428571429;

        &:hover {
          text-decoration: none;
        }
      }
    }
  }

  &__current {
    display: block;
    margin: .5rem 1.5rem;
    span {
      display: block;
      padding: 1.5rem;
      font-size: 1.8rem;
      text-align: left;
      background: grey;
      color: grey;
      border-radius: .4rem;
    }
    @include media-breakpoint-up(md) {
      display: none;
    }
  }
}
</style>
