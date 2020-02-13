<template>
  <div class="dropdown" :class="{ 'show': opened, 'disabled': disabled }">
    <button type="button" class="dropdown__toggle" :id="dropdownId" :disabled="disabled">
      <span :id="dropdownTextId">{{ text }}</span>
    </button>

    <ul role="menu" tabindex="-1" class="dropdown__menu" :class="{ 'show': opened }" @click.stop>
      <li v-for="item in items" :key="item.value">
        <button type="button" class="dropdown__item" @click="handleClickOnItem(item)">
          {{ item.text }}
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
import { GLOBAL_CLICK_EVENT } from '@/constants/global'

export default {
  props: {
    text: {
      type: [String, Number],
      required: true,
      default: '',
    },
    items: {
      type: Array,
      required: true,
      default: () => [],
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  data() {
    return {
      opened: false,
      id: null,
    }
  },
  computed: {
    dropdownId() {
      return `dropdown-${this.id}`
    },
    dropdownTextId() {
      return `${this.dropdownId}__text`
    },
  },
  methods: {
    toggleMenu() {
      this.opened = !this.opened
    },
    handleGlobalClickEvent(e) {
      if (!this.disabled && e && (e.target.id === this.dropdownId || e.target.id === this.dropdownTextId)) {
        this.toggleMenu()
        e.stopPropagation()
      } else {
        this.hideMenu()
      }
    },
    hideMenu() {
      this.opened = false
    },
    handleClickOnItem(item) {
      this.hideMenu()
      this.$emit('onClick', item)
    },
  },
  mounted() {
    // eslint-disable-next-line no-underscore-dangle
    this.id = this._uid
    this.$root.$on(GLOBAL_CLICK_EVENT, this.handleGlobalClickEvent)
  },
  destroyed() {
    this.$root.$off(GLOBAL_CLICK_EVENT, this.handleGlobalClickEvent)
  },
}
</script>

<style scoped lang="scss">
.dropdown {
  position: relative;
  vertical-align: middle;

  &__toggle {
    font-family: 'Source Sans Pro', sans-serif;
    font-size: 1.4rem;
    white-space: nowrap;
    outline: none;
    cursor: pointer;
    margin: 0;
    padding: 0;
    border: 0;
    background: 0;
    color: inherit;

    &:hover, &:focus {
      outline: none;
    }

    &:after {
      display: inline-block;
      margin-left: .255em;
      vertical-align: .1em;
      content: '';
      border-top: .3em solid;
      border-right: .3em solid transparent;
      border-bottom: 0;
      border-left: .3em solid transparent;
    }
  }

  &__menu {
    position: absolute;
    top: 100%;
    left: auto;
    right: 0;
    bottom: auto;
    z-index: 1000;
    display: none;
    float: left;
    min-width: 10rem;
    padding: .5rem 0;
    margin: .125rem 0 0;
    font-size: 1rem;
    text-align: left;
    list-style: none;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid rgba(0,0,0,.15);
    border-radius: .4rem;

    &.show {
      display: block;
    }
  }

  &__item {
    font-family: 'Source Sans Pro', sans-serif;
    display: block;
    width: 100%;
    padding: .25rem 1.5rem;
    clear: both;
    font-size: 1.4rem;
    text-align: inherit;
    white-space: nowrap;
    background-color: transparent;
    border: 0;
    cursor: pointer;

    &:hover {
      background: grey;
      color: currentColor;
    }

    &:focus, &:hover {
      text-decoration: none;
      background-color: #ecedee;
      outline: none;
    }
  }

  &.disabled {

    .dropdown__toggle {
      cursor: default;

      &:after {
        opacity: .5;
      }
    }
  }
}
</style>
