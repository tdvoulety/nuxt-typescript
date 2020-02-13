import { createRenderer } from 'vue-server-renderer'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import StubComponent from '@/test/unit/StubComponent'

export const mountComponent = (component = null, data = {}) => {
  const {
    attachToDocument = false,
    propsData = {},
    methods = {},
    state = {},
    actions = {},
    mutations = {},
    filters = {},
    directives = {},
    mocks = {},
    stubs = [],
  } = data

  if (component) {
    const localVue = createLocalVue()

    localVue.use(Vuex)

    Object.keys(filters).forEach((key) => {
      localVue.filter(key, filters[key])
    })

    Object.keys(directives).forEach((key) => {
      localVue.directive(key, directives[key])
    })

    const store = new Vuex.Store({ state, actions, mutations })

    store.commit = jest.fn()
    store.dispatch = jest.fn().mockReturnValue(Promise.resolve())

    // workaround for vue-test-utils bug https://github.com/vuejs/vue-test-utils/issues/1279
    if (component.components) {
      Object.keys(component.components).forEach((key) => {
        if (!stubs[key] && Boolean(typeof component.components[key] === 'function')) {
          // eslint-disable-next-line no-param-reassign
          component.components[key] = StubComponent
        }
      })
    }

    const options = {
      attachToDocument,
      store,
      localVue,
      propsData,
      methods,
      mocks,
      stubs,
    }

    const wrapper = shallowMount(component, options)

    return { wrapper, store }
  }

  return null
}

export const rendersToSnapshot = (wrapper) => {
  createRenderer().renderToString(wrapper.vm, (err, str) => {
    if (err) {
      throw new Error(err)
    }

    expect(str).toMatchSnapshot()
  })
}

// eslint-disable-next-line object-curly-newline
export const getMockAction = ({ commit, dispatch, state = {}, rootState = {}, context = {}, bind = {} }) => {
  const mockContext = {
    commit,
    dispatch,
    state,
    rootState,
    ...context,
  }

  return ({
    action = null,
    payload = null,
    result = null,
    success = true,
  }) => action.bind({
    $axios: {
      $get: jest.fn(() => (success ? Promise.resolve(result) : Promise.reject(new Error()))),
      $post: jest.fn(() => (success ? Promise.resolve(result) : Promise.reject(new Error()))),
      $put: jest.fn(() => (success ? Promise.resolve(result) : Promise.reject(new Error()))),
      $delete: jest.fn(() => (success ? Promise.resolve(result) : Promise.reject(new Error()))),
    },
    ...bind,
  })(mockContext, payload)
}
