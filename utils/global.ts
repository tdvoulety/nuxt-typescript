// @ts-nocheck
export const isInteger = (value) => typeof value === 'number' && Number.isFinite(value) && Math.floor(value) === value

export const isPromise = (value) => Boolean(value && typeof value.then === 'function')

export const isFunction = (value) => Boolean(value && typeof value === 'function')

export const isNumeric = (value) => !Number.isNaN(parseFloat(value)) && Number.isFinite(value)

export const cloneDeep = (value) => {
  if (value === null || value === undefined) {
    return value
  }

  return JSON.parse(JSON.stringify(value))
}

export const elementIsVisible = (element) => element && element.offsetWidth > 0 && element.offsetHeight > 0
