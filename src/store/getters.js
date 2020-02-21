let getters = {
    shows: state => {
        return state.shows
    },
    actors: state=>{
        return state.actors
    },
    subscriptions: state=>{
        return state.subscriptions
    },
    ratings: state=>{
        return state.ratings
    }
}
export default  getters
