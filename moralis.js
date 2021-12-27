const MORALIS_APP_ID = 'SN6i1NLKWsfpq7cAZMwxU3d8iMdOtcWQ4QDK0cau'
const MORALIS_KEY = 'ZiDjMo0AOyfOGB4M5CiZ1u1oDS6dBErgMnVvPZX8'
const MOLARIS_SERVER_URL = 'https://0c1qeqrih8sk.usemoralis.com:2053/server'

const MoralisFactory = (function () {
  const Moralis = require('moralis')

  function MoralisInstance (applicationId, javascriptKey, url) {
    Moralis.initialize(
      applicationId,
      javascriptKey
    )
    Moralis.serverUrl = url

    return Moralis
  }

  let instance = null

  return () => {
    if (instance == null) {
      instance = MoralisInstance(MORALIS_APP_ID, MORALIS_KEY, MOLARIS_SERVER_URL)
      instance.constructor = null
    }
    return instance
  }
})()

export default MoralisFactory
