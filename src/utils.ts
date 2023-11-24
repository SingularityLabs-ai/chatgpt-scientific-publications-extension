import Browser from 'webextension-polyfill'
import { Theme } from './config'

export const APP_NAME = 'SciGPT'
export const GITHUB_HOME =
  'https://github.com/SingularityLabs-ai/chatgpt-scientific-publications-extension'
export const TWITTER_HOME = 'https://twitter.com/labssingularity'
export const DISCORD_HOME = 'https://discord.gg/jc4xtF58Ve'
export const WEBSTORE_HOME =
  'https://chromewebstore.google.com/detail/scigpt/paahiifbajkfokamacmmaakejigmgoke'
export const WEBSITE_HOME = GITHUB_HOME

export function detectSystemColorScheme() {
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    return Theme.Dark
  }
  return Theme.Light
}

export function getExtensionVersion() {
  return Browser.runtime.getManifest().version
}
