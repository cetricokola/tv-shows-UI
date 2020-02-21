<template>
    <div>
        <h2>Home Page</h2>
        <router-link to="/create_show">Create Show</router-link>
        <div v-for="show in shows">
            <h1>{{show.show_name}}</h1>
            <h4>{{show.show_time}}</h4>
            <h6>{{show.genre}}</h6>
            <p>{{show.show_description}}</p>
            {{show.id}}
            <div>
                <div>
                    <button type="button" @click="subscribe(show)" class="btn btn-outline-primary">Subscribe</button>
                </div>
                <div class="accordion" id="accordionExample">
                    <div class="card">
                        <div class="card-header" id="headingThree">
                            <h2 class="mb-0">
                                <button class="btn btn-link collapsed" type="button" data-toggle="collapse"
                                        data-target="#collapseThree" aria-expanded="false"
                                        aria-controls="collapseThree">
                                    Rate Show
                                </button>
                            </h2>
                        </div>
                        <div id="collapseThree" class="collapse" aria-labelledby="headingThree"
                             data-parent="#accordionExample">
                            <div class="card-body">
                                <button type="button" class="btn btn-outline-primary">1</button>
                                <button type="button" class="btn btn-outline-primary">2</button>
                                <button type="button" class="btn btn-outline-primary">3</button>
                                <button type="button" class="btn btn-outline-primary">4</button>
                                <button type="button" class="btn btn-outline-primary">5</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <button class="btn btn-danger" @click="deleteAShow(show)"><i style="color:white" class="fa fa-trash"></i>
        </button>
    </div>
</template>
<script>
    import {mapGetters} from 'vuex'
    import router from "../router";

    export default {
        name: "Home",
        data: function () {
            return {
            }
        },
        computed: {
            ...mapGetters([
                'shows'
            ])
        },
        methods: {
            deleteAShow(show) {
                this.$store.dispatch('deleteShow', show);
                router.push('/')
            },
            subscribe(show){
                this.$store.dispatch('subcribeShow', show)
            }
        },
        created() {
            this.$store.dispatch('fetchShows');
        }
    }
</script>

<style scoped>

</style>
