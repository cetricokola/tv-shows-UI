
import Vue from "vue";
import App from "./App.vue";
import router from './router'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import store from './store/store'
new Vue({
    router,
    el: "#app",
    render: h => h(App),
    store
});
