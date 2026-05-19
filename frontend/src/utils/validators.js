export const isValidEmail = (value) => /^\S+@\S+\.\S+$/.test(value)

export const isRequired = (value) => Boolean(value && value.toString().trim())
