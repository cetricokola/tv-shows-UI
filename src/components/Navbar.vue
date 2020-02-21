<template>
    <div>
        <nav class="navbar navbar-expand-md navbar-dark bg-dark shadow-sm text-white">
            <router-link to="/" class="navbar-brand">
                Okla Tv-Show
            </router-link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item mr-4">
                        <router-link to="/about_us" class="nav-link">About Us</router-link>
                    </li>
                    <li class="nav-item mr-4">
                        <router-link to="/contact_us" class="nav-link">Write to Us</router-link>
                    </li>
                </ul>
                <ul class="navbar-nav">
                    <li class="nav-item mr-4">
                        <router-link to="/login" class="nav-link " id="notReady">
                            <i class="mr-auto ml-auto"></i>Login
                        </router-link>
                    </li>
                </ul>
                <ul class="navbar-nav nav-flex-icons">
                    <li class="nav-item">
                        <router-link to="/signup"
                                     class="nav-link m-0 px-3 hoverable text-capitalize btn login-btn border border-white  admin-btn btn">
                            Create Account
                        </router-link>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
</template>

<script>
    export default {
        name: "Navbar"
    }
</script>

<style scoped>

</style>
