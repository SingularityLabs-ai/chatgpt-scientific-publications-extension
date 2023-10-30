import { arkoseTokenGenerator } from './generator'

export async function getArkoseToken() {
  // if (window.localStorage.arkoseToken)
  //   return window.localStorage.arkoseToken
  const token = await arkoseTokenGenerator.generate()
  if (window.localStorage.arkoseToken) return window.localStorage.arkoseToken
  // return fetchArkoseTokenFromServer()
}
