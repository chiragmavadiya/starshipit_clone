const AUTH_KEY = 'starshipit-demo-auth'

export function isAuthenticated() {
  return (
    typeof window !== 'undefined' &&
    (localStorage.getItem(AUTH_KEY) === '1' || sessionStorage.getItem(AUTH_KEY) === '1')
  )
}

/** @param {boolean} [remember=true] */
export function setAuthenticatedSession(remember = true) {
  clearAuthenticatedSession()
  const storage = remember ? localStorage : sessionStorage
  storage.setItem(AUTH_KEY, '1')
}

export function clearAuthenticatedSession() {
  localStorage.removeItem(AUTH_KEY)
  sessionStorage.removeItem(AUTH_KEY)
}

/**
 * Placeholder auth layer — wire to API in production.
 * @param {{ username: string; password: string; remember?: boolean }} payload
 */
export async function signIn(payload) {
  await new Promise((r) => setTimeout(r, 400))
  setAuthenticatedSession(payload.remember !== false)
  return { ok: true }
}

/** @param {Record<string, unknown>} _payload */
export async function signUp(_payload) {
  await new Promise((r) => setTimeout(r, 400))
  return { ok: true }
}
