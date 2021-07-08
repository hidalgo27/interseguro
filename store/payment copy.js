/* ============
 * State of common module
 * ============
 *
 * The initial state of the suggestion module.
 */
import test from './common'
const state = () => ({
    token: null,
    securityCode: '',
    numeroPoliza: '',
    plateNumber: '',
    sessionKey:'',
    provider:'NIUBIZ',
    transactionToken: ''
  })
  /* ============
   * Getters for the common module
   * ============
   *
   * The getters that are available on the
   * user module.
   */
  const getters = {
    token: state => { return state.token },
    securityCode: state => { return state.securityCode },
    numeroPoliza: state => { return state.numeroPoliza }
  }
  
  /* ============
   * Mutations for the common module
   * ============
   *
   * The mutations that are available on the
   * common module.
   */
  const mutations = {
    setToken (state, payload) {
      state.token = payload
    },
    setSessionKey (state, payload) {
      state.sessionKey = payload
    },
    setTransactionToken (state, payload) {
      state.transactionToken = payload
    },
    setSecurityCode (state, payload) {
      state.securityCode = payload
    },
    setNumeroPoliza (state, payload) {
      state.numeroPoliza = payload
    },
    setPlateNumber (state, payload) {
        state.plateNumber = payload
      },
  }

  
  const actions = {
    getSessionKey  ({ commit }, item) {
      return new Promise((resolve, reject) => {
          this.$axios.post('payment-api/api/v2/session',item,{ headers: { 'X-Apikey': 'bf689704-622d-4697-a338-15544c7836a2','X-Provider': 'NIUBIZ' } }).then((res) => {
              if (res) {
                  resolve(res)
              } else {
                  reject(res)
              }
          }).catch(err => {
              reject(err)
          })
      })
  },
    makeSale  ({ commit }, item) {
      return new Promise((resolve, reject) => {
          this.$axios.post('vehicular-api/provider/v3/payment/execute',item ).then((res) => {
              if (res) {
                  resolve(res)
              } else {
                  reject(res)
              }
          }).catch(err => {
              reject(err)
          })
      })
  },
    getTokenCulqi ({ commit }, item) {
      return new Promise((resolve, reject) => {
        this.$axios.$post('https://secure.culqi.com/v2/tokens', item, { headers: { 'Authorization': 'bearer ' + process.env.culqiPK } }).then(res => {
          if (res) {
            resolve(res)
          } else {
            reject(res)
          }
        })
          .catch(err => {
            reject(err)
          })
      })
    },
    getCard ({ commit }, item) {
      return new Promise((resolve, reject) => {
        this.$axios.$post('vehicular-api/culqi/v1/cards', {
            customer_id: item.customer_id,
            details: {
                card_brand: item.card_brand,
                card_category: item.card_category,
                card_number: item.card_number,
                card_type: item.card_type,
                card_bank : item.bank
            },
            token_id: item.id,
            policyId:  item.policyId
        }).then(res => {
          if (res) {
              resolve(res)
            } else {
              reject(res)
            }
        })
        .catch(err => {
            reject(err)
        })
      })
    },
    updatePolicy ({ commit,state }, item) {
        return new Promise((resolve, reject) => {
            this.$axios.$post('vehicular-api/provider/v2/policy/update/'+ item.numeroPoliza,{
                "paymentAmount": item.monto_pagar,
                "commercialValue": item.current,
                "paymentMethodId": item.payment,
                "renew": item.renew
            }).then(res => {
            if (res) {
              resolve(res)
            } else {
              reject(res)
            }
          })
            .catch(err => {
              reject(err)
            })
        })
    },
    paymentExecute ({ commit,state }, item) {
      return new Promise((resolve, reject) => {
          this.$axios.$post('vehicular-api/provider/v2/payment/execute',item).then( res => {
          if (res) {
            resolve(res)
          } else {
            reject(res)
          }
        })
          .catch(err => {
            reject(err)
          })
      })
    }
    /*********************************************************
                * FLUJO ACTUALIZACION Y RENOVACIOM
    *********************************************************/
   
  }
  /* =============
   * Common Module
   * =============
   */
  export default {
    namespaced: true,
    actions,
    getters,
    mutations,
    state
  }
  