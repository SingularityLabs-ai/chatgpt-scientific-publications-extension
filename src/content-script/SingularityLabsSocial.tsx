import { memo } from 'react'

import discordIcon from '../assets/icons/discord-black-thin.svg'
export const DISCORD_HOME = 'https://discord.gg/jc4xtF58Ve'

import githubIcon from '../assets/icons/github-black-thin.svg'
export const GITHUB_HOME = 'https://github.com/SingularityLabs-ai'

import twitterIcon from '../assets/icons/twitter-black-thin.svg'
export const TWITTER_HOME = 'https://twitter.com/labssingularity'

import linkedinIcon from '../assets/icons/linkedin-black-thin.svg'
export const LINKEDIN_HOME = 'https://www.linkedin.com/company/singularity-labs-ai'

function IconButton(props: { icon: string; onClick?: () => void }) {
  return (
    <div
      className="p-[2px] rounded-[8px] w-fit cursor-pointer hover:opacity-80 bg-secondary bg-opacity-20"
      onClick={props.onClick}
    >
      <img src={props.icon} className="w-4 h-4" />
    </div>
  )
}

function SingularityLabsSocial() {
  return (
    <div className="footer flex flex-row p-4 rounded-[10px] items-center gap-2 justify-evenly">
      <span>
        <a href={DISCORD_HOME} target="_blank" rel="noreferrer">
          <IconButton icon={discordIcon} />
        </a>
      </span>
      <span>
        <a href={GITHUB_HOME} target="_blank" rel="noreferrer">
          <IconButton icon={githubIcon} />
        </a>
      </span>
      <span>
        <a href={TWITTER_HOME} target="_blank" rel="noreferrer">
          <IconButton icon={twitterIcon} />
        </a>
      </span>
      <span>
        <a href={LINKEDIN_HOME} target="_blank" rel="noreferrer">
          <IconButton icon={linkedinIcon} />
        </a>
      </span>
    </div>
  )
}

export default memo(SingularityLabsSocial)
