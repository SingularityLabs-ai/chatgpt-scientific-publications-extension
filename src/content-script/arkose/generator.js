import Browser from 'webextension-polyfill'

class ArkoseTokenGenerator {
  constructor() {
    this.injectfn()
    this.injectScript()
  }

  injectfn() {
    console.log('inject setuparkose')
    const fnscript = document.createElement('script')
    fnscript.src = Browser.runtime.getURL('/js/setuparkose.js')
    fnscript.async = true
    fnscript.defer = true
    document.body.appendChild(fnscript)
  }

  injectScript() {
    const apiscript = document.createElement('script')
    // apiscript.src = "https://tcr9i.chat.openai.com/v2/35536E1E-65B4-4D96-9D97-6ADB7EFF8147/api.js";
    apiscript.src = Browser.runtime.getURL('/js/v2/35536E1E-65B4-4D96-9D97-6ADB7EFF8147/api.js')
    apiscript.async = true
    apiscript.defer = true
    apiscript.setAttribute('data-callback', 'useArkoseSetupEnforcement')
    document.body.appendChild(apiscript)
  }

  async generate() {
    setTimeout(() => {
      console.log('injecting callgeneratearkose generate')
      const genscript = document.createElement('script')
      genscript.src = Browser.runtime.getURL('/js/callgeneratearkose.js')
      genscript.async = true
      genscript.defer = true
      document.body.appendChild(genscript)
      console.log('post generated window.localStorage.arkoseToken', window.localStorage.arkoseToken)
    }, 5000)
  }
}

export const arkoseTokenGenerator = new ArkoseTokenGenerator()
