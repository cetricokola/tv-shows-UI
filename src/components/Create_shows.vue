<template>
    <div class="container">
        <div class="col-md-9 my-5">
            <form @submit.prevent="createShow(show)">
                <div class="form-group row">
                    <label for="name" class="col-sm-2 col-form-label">Show name</label>
                    <div class="col-sm-10">
                        <input type="text" class="form-control" id="name" v-model="show.show_name"></div>
                </div>
                <div class="form-group row">
                    <label for="date" class="col-sm-2 col-form-label">ShowTime</label>
                    <div class="col-sm-10">
                        <input type="text" class="form-control" id="date" v-model="show.time"></div>
                </div>
                <div class="form-group row">
                    <label for="name" class="col-sm-2 col-form-label">Genre</label>
                    <div class="col-sm-10" v-for="genre in genres">
                        <select class="custom-select" id="genre" v-model="show.genre_id">
                            <option v-bind:value=genre.id>{{genre.name}}</option>
                        </select>
                    </div>
                </div>
                <div class="form-group row">
                    <label for="name" class="col-sm-2 col-form-label">Description</label>
                    <div class="col-sm-10">
                        <textarea class="form-control" id="description" rows="3" v-model="show.description"></textarea>
                    </div>
                </div>
                <button type="submit" class="btn btn-primary px-5 text-center">Save</button>
            </form>
        </div>
    </div>
</template>
<script>
    import {HTTP} from "../../http.common";
    import router from "../router";

    export default {
        name: "Create_shows",
        data: function () {
            return {
                show: {
                    show_name: '',
                    description: '',
                    time: '',
                    genre_id: ''
                },
                genres: []
            }
        },
        methods: {
            createShow(show){
                this.$store.dispatch('createShow', show);
                router.push('/');

            },
        },
        created() {
            HTTP.get('genres')
                .then(response => {
                    this.genres = response.data
                })
                .catch(e => {
                    this.errors.push(e)
                })
        }
    }
</script>

<style scoped>

</style>
