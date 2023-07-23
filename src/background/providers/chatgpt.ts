import dayjs from 'dayjs'
import ExpiryMap from 'expiry-map'
import { v4 as uuidv4 } from 'uuid'
import { ADAY, APPSHORTNAME, HALFHOUR } from '../../utils/consts'
import { fetchSSE } from '../fetch-sse'
import { GenerateAnswerParams, Provider } from '../types'
dayjs().format()

async function request(token: string, method: string, path: string, data?: unknown) {
  return fetch(`https://chat.openai.com/backend-api${path}`, {
    method,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: data === undefined ? undefined : JSON.stringify(data),
  })
}

async function request_new(
  token: string,
  method: string,
  path: string,
  data?: unknown,
  callback?: unknown,
) {
  return fetch(`https://chat.openai.com/backend-api${path}`, {
    method,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: data === undefined ? undefined : JSON.stringify(data),
  })
    .then(function (response) {
      console.log('fetch', token != null, method, path, 'response', response)
      return response.json()
    })
    .then(function (data) {
      console.log('response data', data)
      if (callback) callback(token, data)
    })
    .catch((error) => {
      console.error('fetch', token, method, path, 'error', error)
    })
}

export async function sendMessageFeedback(token: string, data: unknown) {
  await request(token, 'POST', '/conversation/message_feedback', data)
}

export async function setConversationProperty(
  token: string,
  conversationId: string,
  propertyObject: object,
) {
  await request(token, 'PATCH', `/conversation/${conversationId}`, propertyObject)
}

const browsertabIdConversationIdMap = new Map()
const windowIdConversationIdMap = new Map()

function deleteRecentConversations(token, data) {
  const now = dayjs()
  const startTime = dayjs(performance.timeOrigin)
  console.log('startTime', startTime)
  const convs = data.items
  console.log('convs', convs)
  for (let i = 0; i < convs.length; i++) {
    const conv_i_time = dayjs(convs[i].create_time)
    console.log(
      'conv' + i,
      convs[i].id,
      conv_i_time,
      conv_i_time - startTime,
      now - conv_i_time,
      now - conv_i_time < ADAY,
    )
    if (
      HALFHOUR < now - conv_i_time &&
      now - conv_i_time < ADAY &&
      convs[i].title.indexOf(APPSHORTNAME + ':') != -1
    ) {
      setTimeout(function () {
        console.log('Deleting', token != null, convs[i].id)
        setConversationProperty(token, convs[i].id, { is_visible: false })
        const cloneBTCMap = new Map(browsertabIdConversationIdMap)
        cloneBTCMap.forEach((ConversationId, tabId, map) => {
          console.log('Looking for', ConversationId, tabId, 'in', map)
          if (ConversationId == convs[i].id) {
            console.log('Deleting ', ConversationId, tabId, 'from', map)
            browsertabIdConversationIdMap.delete(tabid)
            console.log(
              'browsertabIdConversationIdMap after Deleting ',
              browsertabIdConversationIdMap,
            )
          }
        })
        const cloneWCMap = new Map(windowIdConversationIdMap)
        cloneWCMap.forEach((conversationIdsConcatinated, windowId, map) => {
          console.log('Looking for', conversationIdsConcatinated, windowId, 'in', map)
          if (conversationIdsConcatinated.indexOf(convs[i].id) != -1) {
            console.log('Deleting ', convs[i].id, windowId, 'from', map)
            conversationIdsConcatinated = conversationIdsConcatinated.replace(convs[i].id, '')
            conversationIdsConcatinated = conversationIdsConcatinated.replace(',,', ',')
            windowIdConversationIdMap.set(windowid, conversationIdsConcatinated)
            console.log('windowIdConversationIdMap after Deleting ', windowIdConversationIdMap)
          }
        })
      }, i * 1000)
    }
  }
}

const KEY_ACCESS_TOKEN = 'accessToken'

const cache = new ExpiryMap(10 * 1000)

export async function getChatGPTAccessToken(): Promise<string> {
  if (cache.get(KEY_ACCESS_TOKEN)) {
    return cache.get(KEY_ACCESS_TOKEN)
  }
  const resp = await fetch('https://chat.openai.com/api/auth/session')
  if (resp.status === 403) {
    throw new Error('CLOUDFLARE')
  }
  const data = await resp.json().catch(() => ({}))
  if (!data.accessToken) {
    throw new Error('UNAUTHORIZED')
  }
  cache.set(KEY_ACCESS_TOKEN, data.accessToken)
  return data.accessToken
}

export class ChatGPTProvider implements Provider {
  constructor(private token: string) {
    this.token = token
    //Brute:
    request_new(
      token,
      'GET',
      '/conversations?offset=0&limit=100&order=updated',
      undefined,
      deleteRecentConversations,
    )
  }

  private async fetchModels(): Promise<
    { slug: string; title: string; description: string; max_tokens: number }[]
  > {
    const resp = await request(this.token, 'GET', '/models').then((r) => r.json())
    return resp.models
  }

  private async getModelName(): Promise<string> {
    try {
      const models = await this.fetchModels()
      return models[0].slug
    } catch (err) {
      console.error(err)
      return 'text-davinci-002-render'
    }
  }

  async generateAnswer(params: GenerateAnswerParams) {
    let conversationId: string | undefined

    const countWords = (text) => {
      return text.trim().split(/\s+/).length
    }

    const getConversationTitle = (bigtext: string) => {
      let ret = bigtext.split('\n', 1)[0]
      try {
        ret = ret.split('for summarizing :')[1]
      } catch (e) {
        console.log(e)
      }
      ret = ret.split('.', 1)[0]
      try {
        ret = APPSHORTNAME + ':' + ret.split(':')[1].trim()
      } catch (e) {
        console.log(e)
        ret = APPSHORTNAME + ':' + ret.trim().slice(0, 8) + '..'
      }
      return ret
    }

    const renameConversationTitle = (convId: string) => {
      const titl: string = getConversationTitle(params.prompt)
      console.log('renameConversationTitle:', this.token, convId, titl)
      setConversationProperty(this.token, convId, { title: titl })
    }
    const cleanup = () => {
      if (conversationId) {
        // setConversationProperty(this.token, conversationId, { is_visible: false })
      }
    }

    const modelName = await this.getModelName()
    console.debug('Using model:', modelName)

    await fetchSSE('https://chat.openai.com/backend-api/conversation', {
      method: 'POST',
      signal: params.signal,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${this.token}`,
      },
      body: JSON.stringify({
        action: 'next',
        messages: [
          {
            id: uuidv4(),
            role: 'user',
            content: {
              content_type: 'text',
              parts: [params.prompt],
            },
          },
        ],
        model: modelName,
        parent_message_id: params.parentMessageId || uuidv4(),
        conversation_id: params.conversationId,
      }),
      onMessage(message: string) {
        console.debug('sse message', message)
        if (message === '[DONE]') {
          params.onEvent({ type: 'done' })
          cleanup()
          return
        }
        let data
        try {
          data = JSON.parse(message)
        } catch (err) {
          console.error(err)
          return
        }
        const text = data.message?.content?.parts?.[0]
        if (text) {
          if (countWords(text) == 1 && data.message?.author?.role == 'assistant') {
            if (params.prompt.indexOf('for summarizing :') !== -1) {
              renameConversationTitle(data.conversation_id)
            }
          }
          conversationId = data.conversation_id
          params.onEvent({
            type: 'answer',
            data: {
              text,
              messageId: data.message.id,
              parentMessageId: data.parent_message_id,
              conversationId: data.conversation_id,
            },
          })
        }
      },
    })
    return { cleanup }
  }
}
