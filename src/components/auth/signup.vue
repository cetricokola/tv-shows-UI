<template>
    <div>
        <div class="ml-auto mr-auto col-md-5 centered mt-5 py-5">
            <form @submit.prevent="register">
                <div class="form-group mb-5">
                    <label for="username">Username</label>
                    <input type="text" class="form-control" id="username" v-model="username">
                </div>
                <div class="form-group mb-5">
                    <label for="email">Email address</label>
                    <input type="email" class="form-control" id="email" v-model="email">
                </div>
                <div class="form-group">
                    <label for="password">Password</label>
                    <input type="password" class="form-control" id="password" v-model="password">
                </div>
                <button type="submit" class="btn btn-primary px-5">Create Account</button>
            </form>
        </div>
    </div>
</template>

<script>
    import {HTTP} from "../../../http.common";
    import router from "../../router";

    export default {
        name: "signup",
        data: function () {
            return {
                username: '',
                email: '',
                password: ''
            }
        },
        methods: {
            register() {
                HTTP.post('user_registration', {
                    username: this.username,
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

</style>
