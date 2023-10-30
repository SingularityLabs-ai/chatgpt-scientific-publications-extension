import { ofetch } from 'ofetch'

export async function fetchArkoseTokenFromServer(): Promise<string | undefined> {
  try {
    const resp = await ofetch('https://myserver.app/api/arkose')
    console.error('arkose token from my server', resp)
    return resp.token
  } catch (err) {
    console.error(err)
    return undefined
  }
}
