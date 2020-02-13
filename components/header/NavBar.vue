<template>
  <div class="side-navbar__wrap">
    <div id="side-navbar" class="navbar side-navbar navbar-expand" :class="{ 'is-visible': sideNavVisible }">
      <ul class="side-navbar__list">
        <li>
          <a
            :href="$t('header.registration.url')"
            id="side-navbar__registration"
            class="side-navbar__action text-info"
          >
            {{ $t('header.registration.title') }}
          </a>
        </li>

        <li class="side-navbar__divider"></li>
      </ul>
    </div>

    <div v-show="sideNavVisible" class="side-navbar__backdrop" @click="$emit('toggleSideNav')"></div>
  </div>
</template>

<script>
export default {
  props: {
    sideNavVisible: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
}
</script>

<style lang="scss" scoped>
/* stylelint-disable declaration-no-important */
.navbar-expand {
  flex-flow: row nowrap;
  justify-content: flex-start;
}

.navbar {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 2px 4px;
}

@include media-breakpoint-down(sm) {
  .side-navbar {
    position: fixed;
    top: 0;
    left: -100%;
    bottom: 0;
    padding: 2rem 0;
    background-color: #fff;
    box-shadow: 0 3px 4px rgba(71,83,91,.25);
    transition-duration: 256ms;
    width: 80%;
    max-width: 320px;
    min-width: 256px;
    z-index: 1049;

    &.is-visible {
      left: 0;
    }

    &__wrap {

      @include media-breakpoint-up(md) {
        height: 6rem;
      }
    }

    &__backdrop {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: rgba(71, 83, 91, .6);
      cursor: pointer;
      z-index: 3;
    }

    &__list {
      display: block;
      width: 100%;
      list-style: none;
      margin: 0;
      opacity: 1;
      padding: 0;

      > li {
        padding: .5rem 1.5rem;

        &.no-padding {
          padding: 0;
        }

        &:first-child {
          margin-bottom: 2rem;
        }
      }
    }

    &__divider {
      border-top: 1px solid grey;
      height: 0;
      line-height: 0;
      margin: .75rem 1.5rem;
    }

    &__action {
      display: block;
      font-size: 1.8rem;
      padding: 1.5rem;
      white-space: normal;
      color: grey;

      &:visited, &:hover, &:focus {
        color: grey !important;
      }

      &.text-info {
        color: blue;

        &:visited, &:hover, &:focus {
          color: blue !important;
        }
      }
    }

    ::v-deep .language-switcher {
      display: block !important;

      .dropdown {

        &__toggle {
          display: none;
        }

        &__menu {
          display: block !important;
          position: inherit !important;
          border: none !important;
          padding: 0 !important;
          margin: 0 !important;
          float: none !important;
          width: 100% !important;

          li {
            display: block !important;
            padding: .5rem 1.5rem;
          }
        }

        &__item {
          @extend .side-navbar__action;

          &:hover, &:focus {
            border-radius: .4rem;
          }
        }
      }
    }
  }
}

@include media-breakpoint-up(md) {
  .side-navbar {
    display: block;
    padding: 0;

    &__list {
      width: 100%;
      list-style: none;
      margin: 0;
      padding: 0;
      text-align: right;
      display: flex;
      flex-wrap: nowrap;
      align-items: center;
      justify-content: flex-end;

      > li {
        display: inline-block;
      }
    }

    &__divider {
      display: none;
    }

    &__action {
      display: block;
      font-size: 1.4rem;
      line-height: 2.8rem;
      padding: 0 1rem;
      color: grey;
      position: relative;
      top: -1px;

      &:visited, &:hover, &:focus {
        color: grey !important;
      }

      &.text-info {
        color: blue;

        &:visited, &:hover, &:focus {
          color: blue !important;
        }
      }
    }

    ::v-deep .language-switcher {
      position: relative;
      top: -1px;

      .dropdown {

        &__item {
          line-height: 1.428571429;
          padding: .3rem 2rem;
        }
      }
    }
  }
}
/* stylelint-enable declaration-no-important */
</style>
