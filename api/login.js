import api from '~/axios/index.js'
export function login(params) {
    return api.post('/login/dtsLogin', params).then(res => {
      if (typeof res === 'undefined') {
        return null
      } else {
        return res.data
      }
    })
  }