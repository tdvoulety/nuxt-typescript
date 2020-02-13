<template>
  <header class="app-header">
    <b-container>
      <NavBar
        :sideNavVisible="sideNavVisible"
        @toggleSideNav="toggleSideNav"
      />

      <button type="button" class="app-header__navbar-toggler" @click="toggleSideNav">
        <img :data-src="require('~/assets/img/header/mobile-toggle.svg')" alt="" title="" class="lazyload"/>
      </button>

      <a :href="$t('routes./home')" class="app-header__logo">
        <img :data-src="require('~/assets/img/header/logo.svg')" alt="" title="" class="lazyload" />
      </a>
    </b-container>
  </header>
</template>

<script lang="ts">
import { MUTATIONS } from '@/constants/store'

export default {
  components: {
    NavBar: () => import('@/components/header/NavBar.vue'),
  },
  computed: {
    sideNavVisible(): any {
      // @ts-ignore
      return this.$store.state.sideNavVisible
    },
  },
  methods: {
    toggleSideNav(): void {
      // @ts-ignore
      this.$store.commit(MUTATIONS.SET_SIDE_NAV_VISIBILITY, !this.sideNavVisible)
    },
  },
}
</script>

<style lang="scss" scoped>
.app-header {
  display: block;
  background: #aaffc4;

  &__navbar-toggler {
    position: absolute;
    right: .8rem;
    top: -.3rem;
    width: 6.2rem;
    height: 6rem;
    line-height: 6rem;
    padding: 0;
    background-color: transparent;
    border: 0;
    color: grey;
    cursor: pointer;

    &:hover, &:focus {
      outline: none !important; // stylelint-disable-line declaration-no-important
      box-shadow: none !important; // stylelint-disable-line declaration-no-important
    }

    @include media-breakpoint-up(md) {
      display: none;
      top: 0;
      right: 0;
    }
  }

  &__logo {
    font-size: 4rem;
    height: 1em;
    width: 1.5em;
    padding: 0;

    @include media-breakpoint-up(md) {
      font-size: 6.667rem;
      order: 1;
      top: 5rem;
    }

    img {
      display: block;
      height: inherit;
      width: inherit;
    }
  }
}
</style>
