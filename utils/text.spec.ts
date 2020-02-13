// @ts-nocheck
/* eslint-disable no-useless-escape */
import {
  lowerCaseFirstLetter,
  upperCaseFirstLetter,
} from '@/utils/text'

describe('text utils', () => {
  describe('lowerCaseFirstLetter', () => {
    it('for text', () => {
      expect(lowerCaseFirstLetter('Test')).toEqual('test')
    })
  })

  describe('upperCaseFirstLetter', () => {
    it('for text', () => {
      expect(upperCaseFirstLetter('test')).toEqual('Test')
    })
  })
})
