<template>
    <div>
        <div class="ml-auto mr-auto col-md-4 centered py-5">
            <router-link to="/admin_login" class="mb-4">Login is admin<i class="fas fa-arrow-circle-right ml-3"
                                                                         data-toggle="modal"></i></router-link>
            <form @submit.prevent="user_login">
                <p class="text-danger">{{error}}</p>
                <div class="form-group mb-5">
                    <label for="username">Username</label>
                    <input type="text" class="form-control" id="username" v-model="username">
                </div>
                <div class="form-group">
                    <label for="password1">Password</label>
                    <input type="password" class="form-control" id="password1" v-model="user_password">
                </div>
                <button type="submit" class="btn btn-primary px-5">Log in</button>
            </form>
        </div>
    </div>
</template>
<script>
    import {HTTP} from "../../../http.common";
    import router from "../../router";

    export default {
        name: "user_login",
        components: {},
        data: function () {
            return {
                username: '',
                user_password: '',
                error: ''
            };
        },
        methods: {
            user_login() {
                HTTP.post(`user_signin`, {
                    username: this.username,
                    password: this.user_password
                })
                    .then(response => {
                        if (response.data.status === true) {
                            console.log(response.data);
                            router.push('/');
                        } else {
                            this.error = response.data.message;
                        }
                    })
                    .catch(e => {
                        console.log(e);
                        this.errors.push(e);
                    })
            }
        }
    }
</script>
<style scoped>
    .centered {
        position: fixed;
        top: 50%;
        left: 50%;
        /* bring your own prefixes */
        transform: translate(-50%, -50%);
    }
</style>
