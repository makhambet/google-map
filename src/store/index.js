import { createStore } from 'vuex'
import api from '@/utils/api'

export default createStore({
  state: {
    informationList: [],
    monitoringList: [],
    routeList: []
  },
  mutations: {
    setInformationList (state, payload) {
      state.informationList = payload
    },
    setMonitoringList (state, payload) {
      state.monitoringList = payload
    },
    setRouteList (state, payload) {
      state.routeList = payload
    }
  },
  actions: {
    getInformationList: async ({ commit }, payload) => {
      try {
        const { data } = await Promise.resolve(
            api.get('/shipment/information', {
              params: payload
            })
        )
        await commit('setInformationList', data)
      } catch (e) {
        console.log(e)
        throw new Error('Внутреняя ошибка сервера, сообщите администратору')
      }
    },
    setMonitoringList: async ({ commit }, payload) => {
      try {
        const { data } = await Promise.resolve(
            api.get('/shipment/monitoring', {
              params: payload
            })
        )
        await commit('setMonitoringList', data)
      } catch (e) {
        console.log(e)
        throw new Error('Внутреняя ошибка сервера, сообщите администратору')
      }
    },
    setRouteList: async ({ commit }, payload) => {
      try {
        const { data } = await Promise.resolve(
            api.get('/shipment/route', {
              params: payload
            })
        )
        await commit('setRouteList', data)
      } catch (e) {
        console.log(e)
        throw new Error('Внутреняя ошибка сервера, сообщите администратору')
      }
    },
  },
  getters: {
    INFORMATIONS: state => state.informationList,
    MONITORINGS: state => state.monitoringList,
    ROUTES: state => state.routeList
  }
})
