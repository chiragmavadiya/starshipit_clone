const AUTH_KEY = 'starshipit-demo-auth'

export function isAuthenticated() {
  return (
    typeof window !== 'undefined' &&
    (localStorage.getItem(AUTH_KEY) === '1' || sessionStorage.getItem(AUTH_KEY) === '1')
  )
}

/** @param {boolean} [remember=true] */
export function setAuthenticatedSession(data) {
  clearAuthenticatedSession()
  const storage = !!data.remember ? localStorage : sessionStorage
  storage.setItem(AUTH_KEY, '1')
  storage.setItem('username',data.username)
}

export function clearAuthenticatedSession() {
  localStorage.removeItem(AUTH_KEY)
  localStorage.removeItem('username')
  sessionStorage.removeItem(AUTH_KEY)
  sessionStorage.removeItem('username')
}

/**
 * Placeholder auth layer — wire to API in production.
 * @param {{ username: string; password: string; remember?: boolean }} payload
 */
export async function signIn(payload) {
  console.log(payload, 'payload...');
  await new Promise((r) => setTimeout(r, 400))
  setAuthenticatedSession(payload)
  return { ok: true }
}

/** @param {Record<string, unknown>} _payload */
export async function signUp(_payload) {
  await new Promise((r) => setTimeout(r, 400))
  return { ok: true }
}
