!(function () {
  var local_enforcement = undefined
  var local_pendingPromises = []
  window.useArkoseSetupEnforcement = (enforcement) => {
    if (!enforcement) alert('no enforcement sent')
    local_enforcement = enforcement
    enforcement.setConfig({
      onCompleted: (r) => {
        console.debug('enforcement.onCompleted', r)
        local_pendingPromises.forEach((promise) => {
          promise.resolve(r.token)
        })
        local_pendingPromises = []
      },
      onReady: () => {
        console.debug('enforcement.onReady')
      },
      onError: (r) => {
        console.debug('enforcement.onError', r)
      },
      onFailed: (r) => {
        console.debug('enforcement.onFailed', r)
        local_pendingPromises.forEach((promise) => {
          promise.reject(new Error('Failed to generate arkose token'))
        })
      },
    })
  }

  window.generateArkose = () => {
    if (!local_enforcement) {
      console.error('no enforcement found')
      return
    }
    return new Promise((resolve, reject) => {
      local_pendingPromises = [{ resolve, reject }] // store only one promise for now.
      local_enforcement.run()
    })
  }
})()
