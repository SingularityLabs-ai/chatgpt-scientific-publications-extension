// import dayjs from 'dayjs'
// import ExpiryMap from 'expiry-map'
// import { v4 as uuidv4 } from 'uuid'
// import Browser from 'webextension-polyfill'
// import { ADAY, APPSHORTNAME, HALFHOUR } from '../../utils/consts'
// import { isDate } from '../../utils/parse'
// import { fetchSSE } from '../fetch-sse'
// import { GenerateAnswerParams, Provider } from '../types'
// dayjs().format()

// async function request(token: string, method: string, path: string, data?: unknown) {
//   return fetch(`https://chat.openai.com/backend-api${path}`, {
//     method,
//     headers: {
//       'Content-Type': 'application/json',
//       Authorization: `Bearer ${token}`,
//     },
//     body: data === undefined ? undefined : JSON.stringify(data),
//   })
// }

// export async function sendMessageFeedback(token: string, data: unknown) {
//   await request(token, 'POST', '/conversation/message_feedback', data)
// }

// export async function setConversationProperty(
//   token: string,
//   conversationId: string,
//   propertyObject: object,
// ) {
//   await request(token, 'PATCH', `/conversation/${conversationId}`, propertyObject)
// }

// const browsertabIdConversationIdMap = new Map()
// const windowIdConversationIdMap = new Map()

// function deleteRecentConversations(token, data) {
//   const now = dayjs()
//   const startTime = dayjs(performance.timeOrigin)
//   console.log('startTime', startTime)
//   const convs = data.items
//   console.log('convs', convs)
//   for (let i = 0; i < convs.length; i++) {
//     const conv_i_time = dayjs(convs[i].create_time)
//     console.log(
//       'conv' + i,
//       convs[i].id,
//       conv_i_time,
//       conv_i_time - startTime,
//       now - conv_i_time,
//       now - conv_i_time < ADAY,
//     )
//     if (
//       HALFHOUR < now - conv_i_time &&
//       now - conv_i_time < ADAY &&
//       convs[i].title.indexOf(APPSHORTNAME + ':') != -1
//     ) {
//       setTimeout(function () {
//         console.log('Deleting', token != null, convs[i].id)
//         setConversationProperty(token, convs[i].id, { is_visible: false })
//         const cloneBTCMap = new Map(browsertabIdConversationIdMap)
//         cloneBTCMap.forEach((ConversationId, tabId, map) => {
//           console.log('Looking for', ConversationId, tabId, 'in', map)
//           if (ConversationId == convs[i].id) {
//             console.log('Deleting ', ConversationId, tabId, 'from', map)
//             browsertabIdConversationIdMap.delete(tabid)
//             console.log(
//               'browsertabIdConversationIdMap after Deleting ',
//               browsertabIdConversationIdMap,
//             )
//           }
//         })
//         const cloneWCMap = new Map(windowIdConversationIdMap)
//         cloneWCMap.forEach((conversationIdsConcatinated, windowId, map) => {
//           console.log('Looking for', conversationIdsConcatinated, windowId, 'in', map)
//           if (conversationIdsConcatinated.indexOf(convs[i].id) != -1) {
//             console.log('Deleting ', convs[i].id, windowId, 'from', map)
//             conversationIdsConcatinated = conversationIdsConcatinated.replace(convs[i].id, '')
//             conversationIdsConcatinated = conversationIdsConcatinated.replace(',,', ',')
//             windowIdConversationIdMap.set(windowid, conversationIdsConcatinated)
//             console.log('windowIdConversationIdMap after Deleting ', windowIdConversationIdMap)
//           }
//         })
//       }, i * 1000)
//     }
//   }
// }

// const KEY_ACCESS_TOKEN = 'accessToken'

// const cache = new ExpiryMap(10 * 1000)

// export async function getChatGPTAccessToken(): Promise<string> {
//   if (cache.get(KEY_ACCESS_TOKEN)) {
//     return cache.get(KEY_ACCESS_TOKEN)
//   }
//   const resp = await fetch('https://chat.openai.com/api/auth/session')
//   if (resp.status === 403) {
//     throw new Error('CLOUDFLARE')
//   }
//   const data = await resp.json().catch(() => ({}))
//   if (!data.accessToken) {
//     throw new Error('UNAUTHORIZED')
//   }
//   cache.set(KEY_ACCESS_TOKEN, data.accessToken)
//   return data.accessToken
// }

// export class ChatGPTProvider implements Provider {
//   constructor(private token: string) {
//     this.token = token
//     Browser.tabs.onRemoved.addListener(function (tabid, removed) {
//       console.log('tab closed', tabid, removed)
//       const delConversationId = browsertabIdConversationIdMap.get(tabid)
//       console.log('delete conversation', delConversationId)
//       if (delConversationId) {
//         console.log('deleting conversation', delConversationId, 'token=', token)
//         try {
//           setConversationProperty(token, delConversationId, { is_visible: false })
//           browsertabIdConversationIdMap.delete(tabid)
//           console.log('deleted conversation', delConversationId)
//         } catch (e) {
//           console.error(
//             'deletion of conversation',
//             delConversationId,
//             'token=',
//             token,
//             'failed with error',
//             e,
//           )
//         }
//       }

//       //Brute:
//       request(
//         token,
//         'GET',
//         '/conversations?offset=0&limit=100&order=updated',
//         undefined,
//         deleteRecentConversations,
//       )
//     })

//     Browser.windows.onRemoved.addListener(function (windowid) {
//       console.log('window closed', windowid)
//       let delConversationIdsConcatinated = windowIdConversationIdMap.get(windowid)
//       console.log('delete delConversationIdsConcatinated', delConversationIdsConcatinated)
//       if (delConversationIdsConcatinated) {
//         const delConversationIdsArray = delConversationIdsConcatinated.split(',')
//         for (let i = 0; i < delConversationIdsArray.length; i++) {
//           console.log('deleting conversation', delConversationIdsArray[i], 'token=', token)
//           try {
//             setConversationProperty(token, delConversationIdsArray[i], { is_visible: false })
//             delConversationIdsConcatinated = delConversationIdsConcatinated.replace(
//               delConversationIdsArray[i],
//               '',
//             )
//             delConversationIdsConcatinated = delConversationIdsConcatinated.replace(',,', ',')
//             windowIdConversationIdMap.set(windowid, delConversationIdsConcatinated)
//             console.log('deleted conversation:', delConversationIdsArray[i])
//           } catch (e) {
//             console.error(
//               'deletion of conversation',
//               delConversationId,
//               'token=',
//               token,
//               'failed with error',
//               e,
//             )
//           }
//         }
//         if (
//           windowIdConversationIdMap.get(windowid) == '' ||
//           windowIdConversationIdMap.get(windowid) == ','
//         ) {
//           windowIdConversationIdMap.delete(windowid)
//           console.log('deleted all conversations:', delConversationIdsArray)
//         }
//       }
//     })
//   }

//   private async fetchModels(): Promise<
//     { slug: string; title: string; description: string; max_tokens: number }[]
//   > {
//     const resp = await request(this.token, 'GET', '/models').then((r) => r.json())
//     return resp.models
//   }

//   private async getModelName(): Promise<string> {
//     try {
//       const models = await this.fetchModels()
//       return models[0].slug
//     } catch (err) {
//       console.error(err)
//       return 'text-davinci-002-render'
//     }
//   }

//   async generateAnswer(params: GenerateAnswerParams) {
//     let conversationId: string | undefined

//     const countWords = (text) => {
//       console.log('counting words in ', text, '=')
//       console.log('counted words=', text.trim().split(/\s+/).length)
//       return text.trim().split(/\s+/).length
//     }

//     const rememberConversationTab = (convId: string) => {
//       Browser.tabs.query({ active: true, lastFocusedWindow: true }).then(async (tabs) => {
//         console.log('tabs:', tabs)
//         for (let i = 0; i < tabs.length; i++) {
//           if (tabs[i].active == true) {
//             const oldConvId = browsertabIdConversationIdMap.get(tabs[i].id)
//             if (oldConvId && oldConvId != convId) {
//               console.log(
//                 'Already this tab has some conversationId.',
//                 oldConvId,
//                 'We have to delete that conversationTab first',
//               )
//               try {
//                 setConversationProperty(this.token, oldConvId, { is_visible: false })
//               } catch (e) {
//                 console.log('Deletion of ', oldConvId, ' failed with error', e)
//               }
//             }
//             browsertabIdConversationIdMap.set(tabs[i].id, convId)
//           }
//         }
//         console.log(
//           'rememberConversationTab:browsertabIdConversationIdMap:',
//           browsertabIdConversationIdMap,
//         )
//       })
//     }

//     const rememberConversationWindow = (convId: string) => {
//       Browser.windows.getAll({}).then(async (windows) => {
//         console.log('windows:', windows)
//         for (let i = 0; i < windows.length; i++) {
//           if (windows[i].focused == true) {
//             const alreadyConversationIdsInWindow = windowIdConversationIdMap.get(windows[i].id)
//             if (alreadyConversationIdsInWindow) {
//               if (alreadyConversationIdsInWindow.indexOf(convId) == -1)
//                 windowIdConversationIdMap.set(
//                   windows[i].id,
//                   alreadyConversationIdsInWindow + ',' + convId,
//                 )
//             } else {
//               windowIdConversationIdMap.set(windows[i].id, convId)
//             }
//           }
//         }
//         console.log(
//           'rememberConversationWindow:windowIdConversationIdMap:',
//           windowIdConversationIdMap,
//         )
//       })
//     }

//     const getConversationTitle = (bigtext: string) => {
//       let ret = bigtext.split('\n', 1)[0]
//       try {
//         ret = ret.split('for summarizing :')[1]
//       } catch (e) {
//         console.log(e)
//       }
//       ret = ret.split('.', 1)[0]
//       try {
//         ret = APPSHORTNAME + ':' + ret.split(':')[1].trim()
//       } catch (e) {
//         console.log(e)
//         ret = APPSHORTNAME + ':' + ret.trim().slice(0, 8) + '..'
//       }
//       return ret
//     }

//     const renameConversationTitle = (convId: string) => {
//       const titl: string = getConversationTitle(params.prompt)
//       console.log('renameConversationTitle:', this.token, convId, titl)
//       setConversationProperty(this.token, convId, { title: titl })
//     }

//     const cleanup = () => {
//       if (conversationId) {
//         setConversationProperty(this.token, conversationId, { is_visible: false })
//       }
//     }

//     const modelName = await this.getModelName()
//     console.log('Using model:', modelName, params.conversationId, params.parentMessageId)

//     const callfetchSSE = async (conversationId: string, with_conversation_id: bool) => {
//       try {
//         await fetchSSE('https://chat.openai.com/backend-api/conversation', {
//           method: 'POST',
//           signal: params.signal,
//           headers: {
//             'Content-Type': 'application/json',
//             Authorization: `Bearer ${this.token}`,
//           },
//           body: JSON.stringify({
//             action: 'next',
//             messages: [
//               {
//                 id: uuidv4(),
//                 role: 'user',
//                 content: {
//                   content_type: 'text',
//                   parts: [params.prompt],
//                 },
//               },
//             ],
//             model: modelName,
//             parent_message_id: params.parentMessageId || uuidv4(),
//             conversation_id: with_conversation_id ? params.conversationId : undefined,
//             arkose_token: params.arkoseToken,
//           }),
//           onMessage(message: string) {
//             console.debug(
//               'sse message',
//               message,
//               browsertabIdConversationIdMap,
//               windowIdConversationIdMap,
//             )
//             if (message === '[DONE]') {
//               params.onEvent({ type: 'done' })
//               return
//             }
//             let data
//             try {
//               data = JSON.parse(message)
//             } catch (err) {
//               if (isDate(message)) {
//                 console.log("known error, It's date", message)
//               } else {
//                 console.error(err)
//               }
//               return
//             }
//             console.debug('sse message.message', data.message)
//             console.log('sse message.conversation_id:', data.conversation_id)
//             const text = data.message?.content?.parts?.[0] + '✏'
//             if (text) {
//               if (countWords(text) == 1 && data.message.author.role == 'assistant') {
//                 if (
//                   data.conversation_id &&
//                   ((conversationId && conversationId != data.conversation_id) ||
//                     conversationId == null)
//                 ) {
//                   if (params.prompt.indexOf('for summarizing :') !== -1) {
//                     renameConversationTitle(data.conversation_id)
//                   }
//                 }
//                 rememberConversationTab(data.conversation_id)
//                 rememberConversationWindow(data.conversation_id)
//               }
//               if (data.message.author.role == 'assistant') {
//                 conversationId = data.conversation_id
//                 params.onEvent({
//                   type: 'answer',
//                   data: {
//                     text,
//                     messageId: data.message.id,
//                     conversationId: data.conversation_id,
//                     parentMessageId: data.parent_message_id,
//                   },
//                 })
//               }
//             }
//           },
//         })
//       } catch (e) {
//         if (e.message.indexOf('Only one message at a time') != -1) {
//           console.log('known error, Only one message at a time', e.message)
//           params.onEvent({
//             type: 'error',
//             data: {
//               error:
//                 'Only one message at a time. Please reload the page once the active message completes',
//               conversationId: conversationId,
//             },
//           })
//         } else if (e.message.indexOf('ve reached our limit of messages per hour') != -1) {
//           console.log('known error, Reached our limit of messages per hour', e.message)
//           params.onEvent({
//             type: 'error',
//             data: {
//               error: 'You have reached our limit of messages per hour. Please try again later',
//               conversationId: conversationId,
//             },
//           })
//         } else {
//           console.error(e.message)
//           if (e.message.indexOf('conversation_not_found') != -1) {
//             throw new Error(e.message)
//           }
//         }
//       }
//     }

//     let retry_due_to_conversation_not_found: bool = false
//     callfetchSSE(conversationId, true)
//       .then((r) => {
//         console.log(r)
//       })
//       .catch((e) => {
//         console.error(e.message)
//         if (e.message.indexOf('conversation_not_found') !== -1) {
//           retry_due_to_conversation_not_found = true
//           console.log('Lets retry_due_to_conversation_not_found')
//         }
//         if (retry_due_to_conversation_not_found) {
//           cleanup()
//           callfetchSSE(conversationId, false)
//             .then((r) => {
//               console.log(r)
//               retry_due_to_conversation_not_found = false
//             })
//             .catch((e) => {
//               console.error(e.message)
//               if (e.message.indexOf('conversation_not_found') !== -1) {
//                 retry_due_to_conversation_not_found = true
//                 console.log('Its still conversation_not_found')
//               }
//             })
//         }
//       })
//     return { cleanup }
//   }
// }
