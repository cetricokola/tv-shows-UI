import Vue from 'vue'
import router from 'vue-router'
import Admin_login from "./components/auth/Admin_login";
import Home from "./components/Home";
import user_login from "./components/auth/user_login";
import signup from "./components/auth/signup";

Vue.use(router);

let Router = new router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'Home',
            component: ()=> import('./components/Home'),
        },
        {
            path: '/admin_login',
            name: 'Admin_login',
            component:  Admin_login,
        },
        {
            path: '/login',
            name: 'user_login',
            component: user_login,
        },
        {
            path: '/signup',
            name: 'user_signup',
            component: signup,
        },
        {
            path: '/create_show',
            name: 'Create_shows',
            component: ()=> import('./components/Create_shows'),
        }
    ]
})
export default Router;
