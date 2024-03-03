import { useState } from 'react'
import useSWRImmutable from 'swr/immutable'
import { TriggerMode } from '../config'
import ChatGPTCard from './ChatGPTCard'
import { QueryStatus } from './ChatGPTQuery'
import SimplifiedSingularityLabsSocial from './SimplifiedSingularityLabsSocial'

interface Props {
  question: string
  promptSource: string
  triggerMode: TriggerMode
  arkoseToken: string
}

function ChatGPTContainer(props: Props) {
  const [queryStatus, setQueryStatus] = useState<QueryStatus>()
  const query = useSWRImmutable(
    queryStatus === 'success' ? 'promotion' : undefined,
    // fetchPromotion,
    { shouldRetryOnError: false },
  )
  return (
    <>
      <div className="chat-gpt-card">
        <ChatGPTCard
          question={props.question}
          promptSource={props.promptSource}
          arkoseToken={props.arkoseToken}
          triggerMode={props.triggerMode}
          onStatusChange={setQueryStatus}
        />
        <SimplifiedSingularityLabsSocial />
      </div>
    </>
  )
}

export default ChatGPTContainer
