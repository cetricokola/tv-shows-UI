let mutations = {
    CREATE_SHOW(state, show) {
        state.shows.unshift(show)
    },
    FETCH_SHOWS(state, show) {
        return state.shows = show
    },
    DELETE_SHOW(state, show) {
        let index = state.shows.findIndex(item => item.id === show.id);
        Vue.delete(state.shows, index);
        // state.shows.splice(index, 1)
    },
    FETCH_SUBSCRIPTIONS(state, subscription){
        return state.subscriptions = subscription
    },
    FETCH_RATINGS(state, ratings){
        return state.ratings = ratings
    },
    SUBSCRIBE(state, show){
        state.subscriptions.unshift(show)
    },
    DELETE_SUBSCRIPTION(state, subscription){
        let index = state.subscriptions.findIndex(item => item.id === subscription.id);
        Vue.delete(state.subscriptions, index);
    },
    RATE_SHOW(state, rating){
        state.ratings.unshift(rating)
    }
};
export default mutations
