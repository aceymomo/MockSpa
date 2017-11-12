import Vue from 'vue'
const state = {
    orderList: [],
    params: {}
}

const getters = {
    getOrderList: state => state.orderList
}

const actions = {
    fetchOrderList({ commit, params }) {
        Vue.http.post('/api/getOrderList', state.params)
            .then(res => {
                commit('updateOrderList', res.data.list)
            })
            .catch(error => {

            })
    }
}

const mutations = {
    updateOrderList(state, payload) {
        state.orderList = payload
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}