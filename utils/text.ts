export const lowerCaseFirstLetter = (value: string) => (value ? value.charAt(0).toLowerCase() + value.slice(1) : '')

export const upperCaseFirstLetter = (value: string) => (value ? value.charAt(0).toUpperCase() + value.slice(1) : '')
