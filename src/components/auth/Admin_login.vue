<template>
    <div>
        <div class="ml-auto mr-auto col-md-4 centered py-5">
            <form @submit.prevent="user_login">
                <p class="text-danger">{{error}}</p>
                <div class="form-group mb-5">
                    <label for="email">Email Address</label>
                    <input type="email" class="form-control" id="email" v-model="email">
                </div>
                <div class="form-group">
                    <label for="password1">Password</label>
                    <input type="password" class="form-control" id="password1" v-model="password">
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
                email: '',
                password: '',
                error: ''
            };
        },
        methods: {
            user_login() {
                HTTP.post(`login`, {
                    email: this.email,
                    password: this.password
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
