!(function () {
  async function f1() {
    const token = await window.generateArkose()
    console.log('generated Arkose token', token)
    window.localStorage.removeItem('arkoseToken')
    window.localStorage.setItem('arkoseToken', token)
    console.log('generated window.localStorage.arkoseToken', window.localStorage.arkoseToken)
  }
  f1()
})()
