// import { reject } from "lodash"

const getDefaultState = () => {
    return {
    //GLOBALES
    placa01: false,
    urlGlobal: '',
    montoPagar:0,
    code_sku:0,
    flagCloseListon: 1,
    appDiscountURL: false,
    appDiscount: false,
    flujoDetectado: 'interseguro',
    codeRmkt: 0,
    plateNumber: null,
    email: null,
    documentoLocal: null,
    numeroTelefono: null,
    itemElegido: {},
    checkgss: 0,
    emisionROOT: false,
    cuentasueldo: 'N',
    tarjetaoh: 'N',
    discountType: '',
    nuevoProducto: false,
    //  SOAT
    origenCliente: 1,/* NORMAL ES 1 | - | SOAT ES 2 |  */
    clienteSOAT : {}, /* CUANDO VIENE DE SOAT LO GUARDAMOS ACA POR SI NO LLEGA A ID */
    //ESTADOS
    vehicleState: 0,
    clientState: 0,
    clientStateGA: false,
    //COTIZADOR
    entidadFinanciera: {
        id: 0,
        name: ''
    },
    planSeleccionado: 3,    
    current: null,
    pantallaFlujo: 0,
    fechaVigencia: '',
    businessId: 1,
    promocion : false,
    objVehiculo : {
        activePolicy: false,
        appDiscount: false,
        brand: "",
        brandId: 0,
        category: "",
        categoryId: 0,
        client: Object,
        exists: false,
        id: 0,
        model: '',
        modelId: 0,
        modelYear: 0,
        plateNumber: '',
        remarketingId: 0,
        serialNumber: 0,
        useType: 0,
        useTypeId: 0,
        vehicleIBK: 0
    },
    objCliente: {
        address: '',
        birthDate: '',
        documentNumber: '',
        documentType: '',
        emailAddress: '',
        externalId: '',
        firstLastName: '',
        firstName: '',
        id: '',
        intercorp: '',
        phoneNumber: '',
        secondLastName: ''
    },
    // monthly: 0,
    // quarterly: 0,
    // annual: 0,
    //LISTAS
    listaCotizacion: {
        policy: {}
    },
    policy_id : '',
    objectDigodat: {},
    frecuenciaPago: 1,
    //ACTIALIZACION Y RENOVACION
    // placaNoRenovar: '',
    // objrenovacion: {},
    // fechaVigenciaRenovacion: '',
    
    //CODIGO REMARKETING
    codigoRemarketingGenerado: '',

    // Modal de abandono
    leaveMessage: 0,
    leaveMessage1: 0,
    //Geolocalizacion
    geolocation: {},
    agent: ""
    }
}

const state = getDefaultState()

const getters = {
    getPlateNumber: (state) => {
        return state.plateNumber
    }
}

const mutations = {
    resetState (state) {
        Object.assign(state, getDefaultState())
    },
    setAppDiscountURL (state, payload){
        state.appDiscountURL = payload
    },
    setCode_sku (state, payload){
        state.code_sku = payload
    },
    setFlagCloseListon (state, payload){
        state.flagCloseListon = payload
    },
    
    setMontoPagar (state, payload){
        state.montoPagar = payload
    },
    setUrlGlobal (state, payload){
        state.urlGlobal = payload
    },
    
    setPlaca01 (state, payload){
        state.placa01 = payload
    },
    setAppDiscount (state, payload){
        state.appDiscount = payload
    },
    setFlujoDetectado (state, payload){
        state.flujoDetectado = payload
    },
    setPantallaFlujo (state, payload){
        state.pantallaFlujo = payload
    },
    setPlacaNoRenovar (state, payload){
        state.placaNoRenovar = payload
    },
    setEmisionROOT (state, payload) {
        state.emisionROOT = payload
    },    
    setNuevoProducto (state, payload) {
        state.nuevoProducto = payload
    },
    setDiscountType (state, payload) {
        state.discountType = payload
    },
    setCuentasueldo (state, payload) {
        state.cuentasueldo = payload
    },
    setTarjetaoh (state, payload) {
        state.tarjetaoh = payload
    },
    setPlateNumber (state, payload) {
        state.plateNumber = payload
    },
    setCheckgss (state , payload) {
        state.checkgss = payload
    },
    setClienteSOAT (state, payload) {
        state.clienteSOAT = payload
    },
    setOrigenCliente (state , payload) {
        state.origenCliente = payload
    },
    setSaveVehicle(state, payload) {
        state.saveVehicle = payload
    },
    setEmail (state, payload) {
        state.email = payload
    },
    setEntidadFinanciera (state, payload) {
        state.entidadFinanciera = payload
    },
    setDocumentoLocal (state, payload) {
        state.documentoLocal = payload
    },
    setNumeroTelefono (state, payload) {
        state.numeroTelefono = payload
    },
    setBusinessId (state, payload) {
        state.businessId = payload
    },
    setPromocion (state, payload) {
        state.promocion = payload
    },
    setVehicleState (state, payload) {
        state.vehicleState = payload
    },
    setClientState (state, payload) {
        state.clientState = payload
    },
    setClientStateGA (state, payload) {
        state.clientStateGA = payload
    },
    setCodeRmkt (state, payload) {
        state.codeRmkt = payload
    },
    setCodigoRemarketingGenerado (state, payload) {
        state.codigoRemarketingGenerado = payload
    },
    setCurrent (state, payload) {
        state.current = payload
    },
    setFechaVigencia (state, payload) {
        state.fechaVigencia = payload
    },
    setPlanSeleccionado (state, payload) {
        state.planSeleccionado = payload
    },
    setObjCliente(state, payload){        
        state.objCliente = JSON.parse(JSON.stringify(payload))
    },
    setObjVehiculo(state, payload){
        state.objVehiculo = JSON.parse(JSON.stringify(payload))
    },
    setListaCotizacion(state, payload){
        state.listaCotizacion = JSON.parse(JSON.stringify(payload))
    },
    setItemElegido(state, payload){
        state.itemElegido = payload
    },
    setFrecuenciaPago (state, payload) {
        state.frecuenciaPago = payload
    },
    setPolicy_id (state, payload) {
        state.policy_id = payload
    },
    setObjectDigodat (state, payload) {
        state.objectDigodat = payload
    },
    setSaveClient (state, payload) {
        state.saveClient.numeroDocumento = payload.numeroDocumento
        state.saveClient.nombre = payload.nombre
        state.saveClient.apellidoPaterno = payload.apellidoPaterno
        state.saveClient.apellidoMaterno = payload.apellidoMaterno
        state.saveClient.fechaNacimiento = payload.fechaNacimiento
        state.saveClient.sexo = payload.sexo
        state.saveClient.numeroTelefono = payload.numeroTelefono
        state.saveClient.email = payload.email
    },
    setFechaVigenciaRenovacion (state, payload) {
        state.fechaVigenciaRenovacion = payload
    },
    
    setObjRenovacion(state, payload){
        state.objrenovacion = payload
    },
    setLeaveMessage (state, payload) {
        state.leaveMessage = payload
    },
    setLeaveMessage1 (state, payload) {
        state.leaveMessage1 = payload
    },
    setGeolocation(state, payload){
        state.geolocation = payload
    },
    setAgent(state, payload){
        state.agent = payload
    },
}

const actions = {
    /*********************************************************
                            * FLUJO BASICO
    *********************************************************/
   enviarMsjCelular  ({ commit, state }, item) {
        return new Promise((resolve, reject) => {
            this.$axios.post('provider/v2/sms/send-message/'+item).then((res) => {
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
    getVehicle ({ commit, state }, item) {
        return new Promise((resolve, reject) => {
            this.$axios.post('provider/v1/vehicle/plate/' + item.plateNumber, {
                email: item.email
            }).then(res => {
                if (res) {                                      
                    resolve(res)
                }
            }).catch(err => {
                reject(err)
            })
        })
    },
    createVehicle ({ commit, state }, item) {
        return new Promise((resolve, reject) => {
          this.$axios.put("provider/v1/vehicle", {
              brandId: item.brandId,
              modelId: item.modelId,
              modelYear: item.modelYear,
              useTypeId: 1,
              plateNumber: state.plateNumber
            })
            .then(res => {
                if ( res ) {
                    commit('setVehicleState', 1)
                    resolve(res)
                }else{
                    reject(res)
                }            
            })
            .catch(function(err) {
              reject(err)
            })
        })
    },
    eventoErrores ({ commit, state }, item) {
        return new Promise((resolve, reject) => {
          this.$axios.post("trace/v1/element/save", 
          {
            "page":item.page,
            "flow" : state.flujoDetectado,
            "path":item.url,
            "messageError": item.message,
            "documentNumber":"",
            "plateNumber": state.plateNumber,
            "detail":{
                "objServicio":{
                "nombre":"",
                "tipo": "",
                "ruta": item.url,
                "msj": item.message,
                "solucion": ""
                },
                "objCliente":{
                "documento": "",
                "nombre":"",
                "celular": "",
                "correo": ""
                },
                "objAuto":{
                "placa": state.plateNumber,
                "marca": "",
                "modelo": "",
                "anio": "",
                "valorComercial": ""
                },
                "objEnviado":item.objEnviado
            }
        }
        )
            .then(res => {
                if ( res ) {
                    commit('setVehicleState', 1)
                    resolve(res)
                }else{
                    reject(res)
                }            
            })
            .catch(function(err) {
              reject(err)
            })
        })
    },
    updateVehicle ({ commit, state }, item) {
        return new Promise((resolve, reject) => {
          this.$axios.put("provider/v1/vehicle", {
              brandId: item.brandId,
              modelId: item.modelId,
              modelYear: item.modelYear,
              useTypeId: 1,
              plateNumber: state.plateNumber
            })
            .then( res => {
                if (res) {              
                    resolve(res)
                }else{
                    reject(res)
                }            
            })
            .catch(function(err) {
              reject(err)
            })
        })
    },
    getComentarios ({ commit, state }, item) {
        return new Promise((resolve, reject) => {
          let url =  "provider/v1/vehicle/feedback"
          this.$axios
            .post(url,
              {
                "plateNumber": state.plateNumber,
                "documentNumber":item.documentoLocal,
                "stars": item.estrellas,
                "comment": item.comentario
              }
            )
            .then(res => {
              if (res.data.code == 0) {
                resolve(res)
              } else if (res.data.code == 213) {
                resolve(res)
              } else {
                resolve(res)
              }
            })
            .catch(err => {              
              reject(err);
            });
        });
    },
    getCotizacionSP ({ commit, state }, item) {
        return new Promise((resolve, reject) => {
          let url =  "provider/v2/policy/price-plans-by-model/"
          this.$axios
            .post(url,
              {
              "modelId": item.modelId,
              "modelYear": item.modelYear,
              "assignedPrice": item.assignedPrice,
              "remarketingId": item.codeRmkt,
              "businessId" : state.businessId
              }
            )
            .then(res => {
              if (res.data.code == 0) {
                resolve(res)
              } else if (res.data.code == 213) {
                resolve(res)
              } else {
                resolve(res)
              }
            })
            .catch(err => {              
              reject(err);
            });
        });
    },
    getCotizacion ({ commit, state }, item) {
        return new Promise((resolve, reject) => {
            let url = item.assignedPrice == null
            ? 'provider/v2/policy/price-plans/' + state.plateNumber + '/' + item.year + '?remarketingId=' + state.codeRmkt
            : 'provider/v2/policy/price-plans/' + state.plateNumber + '/' + item.year + '?remarketingId=' + state.codeRmkt + '&assignedPrice=' + item.assignedPrice +'&documentNumber='+state.documentoLocal
            this.$axios.get( url + "&discountType=" + item.discountType + "&businessId=" + item.businessId ).then( res => {
                if ( res ) {
                    resolve(res)
                } else  {
                    reject(res)
                }
            })
            .catch(err => {
              reject(err)
            });
        });
    },
    getCotizacionRenovacion ({ commit, state }, item) {
        return new Promise((resolve, reject) => { 
            let url = item.assignedPrice == null
            ? 'provider/v2/policy/renew/price-plans/' + state.plateNumber + '/' + item.year + '?remarketingId=' + state.codeRmkt
            : 'provider/v2/policy/renew/price-plans/' + state.plateNumber + '/' + item.year + '?remarketingId=' + state.codeRmkt + '&assignedPrice=' + item.assignedPrice +'&documentNumber='+state.documentoLocal
            this.$axios.get( url + "&discountType=" + item.discountType + "&businessId=" + item.businessId ).then( res => {
                if ( res ) {
                    resolve(res)
                } else  {
                    reject(res)
                }
            })
            .catch(err => {
              reject(err)
            });
        });
    },
    getBrand ({ commit, dispatch }) {
        return new Promise((resolve, reject) => {
            this.$axios.get('provider/v1/other/brand/group')
            .then(res => {
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
    getYear ({ commit, dispatch }) {
        return new Promise((resolve, reject) => {
            this.$axios.get('provider/v1/other/years').then(res => {
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
    getFinancialInstitution ({ commit, dispatch }) {
        return new Promise((resolve, reject) => {
            this.$axios.get('provider/v1/other/financial-institution').then(res => {
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
    enviarMailing  ({ commit, state }, item){
        return new Promise((resolve, reject) => {
            this.$axios.post('manage/v1/email/price-to-client/'+ state.plateNumber+'/'+ state.businessId,{
                email: state.email
            }).then(res => {
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
    enviarMailingConfirmacion({commit, state}, item){
        return new Promise((resolve, reject) => {
            this.$axios.post('manage/v1/email/confirm-to-client/'+ item +'/'+ state.businessId,{
            }).then(res => {
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
    sendRemarketing  ({ commit, state }, item) {
        return new Promise((resolve, reject) => {
            this.$axios.post(process.env.url_remarketing+'digital-api/api/v2/sesiones/activaciones/', item ).then((res) => {
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
    getDataRmkt ({ commit, state }, item) {
        return new Promise((resolve, reject) => {
            this.$axios.get(process.env.url_remarketing+'digital-api/api/v2/sesiones/'+ item ).then((res) => {
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
    /********************** HASTA AHORA SOLO ES PARA CREAR NO TENGO PLACA************************/
    getcreateRemarketing ({ commit, state }, item) {
        return new Promise((resolve, reject) => {
          this.$axios
            .post("/provider/v1/vehicle/create-remarketing", {
              email: item
            })
            .then(res => {
              if (res) {                
                resolve(res);
              } else {
                reject(res);
              }
            })
            .catch(err => {
              reject(err);
            });
        });
    },
    /*************************************************************/
    getModelLocal ({ commit, state }, item) {
        return new Promise((resolve, reject) => {
            this.$axios.post('provider/v1/other/models-available/' + item.brandId + '/' + item.year).then( res => {
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
    getModel ({ commit, state }, item) {
        return new Promise((resolve, reject) => {
            this.$axios.post('provider/v1/other/models-available/' + item.brandId + '/' + item.modelYear,
            {
                externalModel: item.model
            }).then(res => {
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
    
    getUses ({ commit }) {
        return new Promise((resolve, reject) => {
            this.$axios.get('provider/v1/other/uses').then( res => {
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
    getClient ({ commit, state }, item) {
        return new Promise((resolve, reject) => {
            this.$axios.get("provider/v1/client/" + item.documentoLocal+"?discountType="+item.discountType )
            .then(res => {
                if (res) {                                      
                    resolve(res)
                }
            }).catch(err => {
                reject(err)
            })
        })
    },
    updateClient ({ commit, state }, item) {
        return new Promise((resolve, reject) => {
          this.$axios.put("provider/v2/client/"+state.businessId+"/"+state.planSeleccionado+'/'+state.plateNumber,
            {
                clientModel:{
                    firstName: item.firstName,
                    firstLastName: item.firstLastName,
                    secondLastName: item.secondLastName,
                    phoneNumber: item.phoneNumber,
                    emailAddress: item.emailAddress.trim().replace(/ /g,''),
                    documentNumber: item.documentNumber,
                    remarketingId: state.codeRmkt
                  },
                priceModel: state.listaCotizacion
            } )
            .then(res => {
              if (res) {
                resolve(res);
              } else {
                reject(res)
              }
            })
            .catch(function(error) {
                reject(error)
            })
        })
    },
    updateRuc ({ commit, state }, item){
        return new Promise((resolve, reject) => {
            this.$axios.put("provider/v2/client/"+state.businessId+"/"+state.planSeleccionado+'/'+state.plateNumber,
            {
                clientModel:{
                    firstName: item.firstName,
                    address: item.address,
                    phoneNumber: item.phoneNumber,
                    emailAddress: item.emailAddress.trim().replace(/ /g,''),
                    documentNumber: state.documentoLocal,
                    remarketingId: state.codeRmkt
                },
                priceModel: state.listaCotizacion
            })
            .then((res) => {
                if (res) {
                    resolve(res)
                } else {
                    reject(res)
                }
            })
            .catch(function(error) {
                reject(error)
            })
        })
    },
    createRuc ({ commit, state }, item){
        return new Promise((resolve, reject) => {
            /*
            ESTA LINEA GENERO UN ERROR NO LALAMBA AL SERVICIO Y NO LO ATRABA EL CACTH
            ERA POR EL METODO CAPITALIZE QUE NO ERA ENCONTRADO PERO EL NAVEGADOR NO MOSTRABA ERROR
            firstName: this.capitalize(item.firstName),
            */
           this.$axios.put("provider/v2/client/"+state.businessId+"/"+state.planSeleccionado+'/'+state.plateNumber,
            {
                clientModel:{
                    firstName: item.firstName,
                    address: item.address,
                    phoneNumber: item.phoneNumber,
                    emailAddress: item.emailAddress.trim().replace(/ /g,''),
                    documentNumber: state.documentoLocal,
                    remarketingId: state.codeRmkt
                },
                priceModel: state.listaCotizacion
            })
            .then((res) => {
                if (res) {
                    resolve(res)
                } else {
                    reject(res)
                }
            })
            .catch(function(error) {
                reject(error)
            })
        })
    },
    createClient ({ commit, state }, item){
        return new Promise((resolve, reject) => {
            this.$axios.put("provider/v2/client/"+state.businessId+"/"+state.planSeleccionado+'/'+state.plateNumber,
                {
                    clientModel:{
                        firstName: item.firstName,
                        firstLastName: item.firstLastName,
                        secondLastName: item.secondLastName,
                        phoneNumber: item.phoneNumber,
                        emailAddress: item.emailAddress,
                        documentNumber: state.documentoLocal,
                        remarketingId: state.codeRmkt
                    },
                    priceModel: state.listaCotizacion
                }
            )
            .then(res => {
                if (res) {
                    resolve(res)
                } else {
                    reject(res)
                }
            })
            .catch(function(error) {
                reject(error)
            })
        })
    },
    getSoat ({ commit, state }, item){
        return new Promise((resolve, reject) => {
            this.$axios.post("/provider/v1/vehicle/external/data", {
                brandId: item.brandId,
                modelId: item.modelId,
                modelYear: item.modelYear,
                documentNumber: item.documentNumber,
                plateNumber: item.plateNumber,
                source: 1
            }).then(res => {
                if (res.data.code == 0) {
                    resolve(res)
                } else {
                    reject(res)
                }
            })
            .catch(err => {
                reject(err)
            });
        });
    },
    getPagoProcesado ({ commit, state }, item){
        return new Promise((resolve, reject) => {
            this.$axios.get("manage/v1/policy/details/" + state.policy_id )
            .then(res => {
              if (res.data.code == 0) {
                resolve(res);
              } else {
              }
            })
            .catch(err => {
              reject(err);
            });
        });
      },
    /*********************************************************
                * FLUJO ACTUALIZACION Y RENOVACIOM
    *********************************************************/
    obtenerDatos ({ commit, state }, item){
        return new Promise((resolve, reject) => {
        this.$axios.get("provider/v2/policy/renew/find/"+ item)
            .then(res => {
                if (res) {
                    commit('setObjRenovacion', res.data.body)
                    resolve(res);
                } else {
                reject(res)
                }
            })
            .catch(function(error) {
                reject(error)
            })
        })
    },
    obtenerDatosRenovaciones ({ commit, state }, item){
        return new Promise((resolve, reject) => {
        this.$axios.get("provider/v2/policy/renew/price-plans/"+ item.placa +"/"+item.anio)
            .then(res => {
                if (res) {
                    commit('setObjRenovacion', res.data.body)
                    resolve(res);
                } else {
                reject(res)
                }
            })
            .catch(function(error) {
                reject(error)
            })
        })
    },
    /*********************************************************
                * FLUJO BACKEND A-CELE
    *********************************************************/
    getbackend ({ commit, state }, item){
        return new Promise((resolve, reject) => {
          this.$axios
            .post("manage/v2/policy/complete-emission/" + item.poliza, {
              vin: item.vin,
              color: item.color,
              address: item.address,
              birthDate: item.birthDate,
              gender: item.gender,
              engineNumber: item.engineNumber,
              plateNumber: item.plateNumber,
              documentNumber: item.documentNumber
            })
            .then(res => {
              if (res.data.code == 0) {
                resolve(res);
              } else {
                reject(res)
              }
            })
            .catch(err => {
              reject(err);
            });
        });
    },

    remarketingv2 ({ commit, state }, item){
        return new Promise((resolve, reject) => {
          this.$axios        
            .get(process.env.url_remarketing+"digital-api/api/v2/sesiones/cancelaciones/"+ item)
            .then(function(response) {            
              resolve(response)
            })
            .catch(function(error) {})
        })
    },
    /*********************************************************
                * Obtener IP Publica del usuario
    *********************************************************/
     getGeolocationUser ({ commit, state }) {
        return new Promise((resolve, reject) => {
            this.$axios.get('https://api.ipify.org/?format=json').then((res) => {
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
}

export default  {
    
    namespaced: true,
    actions,
    getters,
    mutations,
    state
}
