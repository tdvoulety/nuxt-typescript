// @ts-nocheck
import {
  isInteger,
  isPromise,
  isFunction,
  isNumeric,
  cloneDeep,
  elementIsVisible,
} from '@/utils/global'

describe('global utils', () => {
  describe('isInteger', () => {
    it('for integer', () => {
      expect(isInteger(10)).toEqual(true)
    })

    it('for text', () => {
      expect(isInteger('test')).toEqual(false)
    })
  })

  describe('isPromise', () => {
    it('for promise', () => {
      const promise = new Promise((resolve) => {
        resolve('test')
      })

      expect(isPromise(promise)).toEqual(true)
    })

    it('for function', () => {
      expect(isPromise(() => {})).toEqual(false)
    })
  })

  describe('isFunction', () => {
    it('for function', () => {
      expect(isFunction(() => {})).toEqual(true)
    })

    it('for object', () => {
      expect(isFunction({ name: 'test' })).toEqual(false)
    })
  })

  describe('isNumeric', () => {
    it('for number', () => {
      expect(isNumeric(10)).toEqual(true)
    })

    it('for text', () => {
      expect(isNumeric('test')).toEqual(false)
    })
  })

  it('cloneDeep', () => {
    const object = { name: 'test', surname: 'test 2' }

    expect(cloneDeep(object)).toEqual(object)
  })

  describe('elementIsVisible', () => {
    it('for visible element', () => {
      const element = { offsetWidth: 10, offsetHeight: 20 }

      expect(elementIsVisible(element)).toEqual(true)
    })

    it('for not visible element', () => {
      const element = { offsetWidth: 0, offsetHeight: 0 }

      expect(elementIsVisible(element)).toEqual(false)
    })
  })
})
