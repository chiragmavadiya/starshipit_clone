/** Shared Ant Design Form rules for signup */

/** @param {string} label e.g. "first name" */
export const nameFieldRules = (label) => [
  { required: true, message: `Enter ${label}` },
  { whitespace: true, message: 'Cannot be only spaces' },
  { min: 2, max: 80, message: 'Use 2–80 characters' },
]

export const emailFieldRules = [
  { required: true, message: 'Enter email' },
  { type: 'email', message: 'Enter a valid email address' },
]

export const phoneFieldRules = [
  { required: true, message: 'Enter phone number' },
  {
    validator(_, value) {
      const digits = String(value ?? '').replace(/\D/g, '')
      if (digits.length < 8 || digits.length > 15) {
        return Promise.reject(new Error('Use 8–15 digits'))
      }
      return Promise.resolve()
    },
  },
]

export const passwordFieldRules = [
  { required: true, message: 'Enter password' },
  { min: 8, max: 128, message: 'Use 8–128 characters' },
  {
    pattern: /^(?=.*[A-Za-z])(?=.*\d)/,
    message: 'Include at least one letter and one number',
  },
]

/** Optional field: empty OK, otherwise must be a valid http(s) URL */
export const optionalStoreUrlRules = [
  {
    validator(_, value) {
      const raw = String(value ?? '').trim()
      if (!raw) return Promise.resolve()
      let candidate = raw
      if (!/^https?:\/\//i.test(candidate)) {
        candidate = `https://${candidate}`
      }
      try {
        const u = new URL(candidate)
        if (!['http:', 'https:'].includes(u.protocol)) {
          return Promise.reject(new Error('URL must use http or https'))
        }
        return Promise.resolve()
      } catch {
        return Promise.reject(new Error('Enter a valid URL'))
      }
    },
  },
]
