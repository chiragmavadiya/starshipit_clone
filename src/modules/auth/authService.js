/**
 * Placeholder auth layer — wire to API in production.
 * @param {{ username: string; password: string; remember?: boolean }} _payload
 */
export async function signIn(_payload) {
  await new Promise((r) => setTimeout(r, 400))
  return { ok: true }
}

/** @param {Record<string, unknown>} _payload */
export async function signUp(_payload) {
  await new Promise((r) => setTimeout(r, 400))
  return { ok: true }
}
