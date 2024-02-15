import { createParser } from 'eventsource-parser'
// import { ChatError, ErrorCode } from   './errors'

export async function* streamAsyncIterable(stream: ReadableStream) {
  const reader = stream.getReader()
  try {
    while (true) {
      const { done, value } = await reader.read()
      if (done) {
        return
      }
      yield value
    }
  } finally {
    reader.releaseLock()
  }
}

export async function parseSSEResponse(resp: Response, onMessage: (message: string) => void) {
  if (!resp.ok) {
    const error = await resp.json().catch(() => ({}))
    // if (!isEmpty(error)) {
    throw new Error(JSON.stringify(error))
    // }
    // throw new ChatError(`${resp.status} ${resp.statusText}.` , ErrorCode.NETWORK_ERROR)
  }
  const parser = createParser((event) => {
    console.log('parseSSEResponse parser event', event) //event=`{data:'{}',event:'',id='',type=''}`
    if (event.type === 'event') {
      onMessage(event.data)
    }
  })
  for await (const chunk of streamAsyncIterable(resp.body!)) {
    const str = new TextDecoder().decode(chunk)
    console.log('parseSSEResponse str', str) //str=`data:{message:{author:{name="someone"},content:{parts=["sometext"]}}`
    if (str.includes('wss_url')) {
      console.log('parseSSEResponseChatGPT str', str)
      onMessage(str)
    } else {
      parser.feed(str)
    }
  }
}

export async function parseSSEResponse2(resp: Response, onMessage: (message: string) => void) {
  console.log('parseSSEResponse2_resp', resp)
  if (!resp.ok) {
    const error = await resp.json().catch(() => ({}))
    // if (!isEmpty(error)) {
    throw new Error(JSON.stringify(error))
    // }
    // throw new ChatError(`${resp.status} ${resp.statusText}. `, ErrorCode.NETWORK_ERROR)
  }
  for await (const chunk of streamAsyncIterable(resp.body!)) {
    const str = new TextDecoder().decode(chunk)
    console.log('parseSSEResponse2_str', str) //str=`{"text":" sometext","is_finished":false}`
    try {
      const strjson = JSON.parse(str)
      if (strjson.is_finished == true && strjson.finish_reason === 'COMPLETE') {
        onMessage(strjson.text)
        onMessage('[DONE]')
      } else {
        onMessage(strjson.text)
      }
    } catch (ex) {
      console.log(ex)
    }
  }
}
