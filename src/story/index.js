import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    username: window.localStorage.getItem('user' || '[]') == null ? '' : JSON.parse(window.localStorage.getItem('user' || '[]')).username,
    adminMenus: [],
  },
  mutations: {
    initAdminMenu (state, menus) {
      state.adminMenus = menus
    },
    login (state, user) {
      state.user = user
      window.localStorage.setItem('user', JSON.stringify(user))
    }
  }
}
)
