import { memo } from 'react'
import { APP_NAME, getExtensionVersion, GITHUB_HOME, WEBSITE_HOME, WEBSTORE_HOME } from '../utils'
const GITHUB_HOME_TROUBLESHOOT = GITHUB_HOME + '#troubleshooting'
const GITHUB_HOME_DSC = GITHUB_HOME + '/discussions'
const WEBSTORE_HOME_RATE = WEBSTORE_HOME + '/reviews'

function ExtensionFeedback() {
  return (
    <div className="answer-footer flex flex-row p-4 rounded-[10px] items-center gap-2 justify-evenly text-xs">
      <span>
        <a href={WEBSITE_HOME} target="_blank" rel="noreferrer">
          {APP_NAME}(v{getExtensionVersion()})
        </a>
      </span>
      <span>
        <a href={WEBSTORE_HOME_RATE} target="_blank" rel="noreferrer">
          Rate us 5-Star
        </a>
      </span>
      <span>
        <a href={GITHUB_HOME_DSC} target="_blank" rel="noreferrer">
          Discuss Ideas
        </a>
      </span>
    </div>
  )
}

export default memo(ExtensionFeedback)
