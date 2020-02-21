import {HTTP} from "../../http.common";

let actions = {
    createShow({commit}, show) {
        HTTP.post('create_a_show', show)
            .then(res => {
                commit('CREATE_SHOW', res.data)
            }).catch(err => {
            console.log(err)
        })
    },
    fetchShows({commit}) {
        HTTP.get('shows')
            .then(res => {
                commit('FETCH_SHOWS', res.data)
            }).catch(err => {
            console.log(err)
        })
    },
    deleteShow({commit}, show) {
        HTTP.delete(`delete_a_show/${show.id}`)
            .then(res => {
                if (res.data === 'ok')
                    commit('DELETE_SHOW', show)
            }).catch(err => {
            console.log(err)
        })
    },
    fetchsubscription({commit}) {
        HTTP.get('show_subscriptions')
            .then(res => {
                commit('FETCH_SUBSCRIPTIONS', res.data)
            }).catch(err => {
            console.log(err)
        })
    },
    fetchRatings({commit}, show) {
        HTTP.get(`rating/${show.id}`)
            .then(res => {
                commit('FETCH_RATINGS', res.data)
            }).catch(err => {
            console.log(err)
        })
    },
    subcribeShow({commit}, show) {
        HTTP.post(`subscribe_to_a_show/${show.id}`, show)
            .then(res => {
                commit('SUBSCRIBE', res.data)
            }).catch(err => {
            console.log(err)
        })
    },
    deleteSubscription({commit}, show) {
        HTTP.delete(`unsubscribe/${show.id}`)
            .then(res => {
                if (res.data === 'ok')
                    commit('DELETE_SUBSCRIPTION', show)
            }).catch(err => {
            console.log(err)
        })
    },
    rateShow({commit}, rating) {
        HTTP.post(`subscribe_to_a_show/${show.id}`, rating)
            .then(res => {
                commit('RATE_SHOW', res.data)
            }).catch(err => {
            console.log(err)
        })
    },
}
export default actions
