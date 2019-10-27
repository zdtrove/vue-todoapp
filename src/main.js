import Vue from 'vue'
import vuetify from './plugins/vuetify.js'
import VueRouter from 'vue-router'
import axios from 'axios'

import store from './store/store'

import App from './App.vue'
import Login from './components/Auth/Login'
import Signup from './components/Auth/Signup'
import Todo from './components/Todo'
import Tasks from './components/Tasks/Tasks'
import NotesModal from './components/Modals/NotesModal'

Vue.config.productionTip = false
Vue.use(VueRouter)
axios.defaults.baseUrl = 'http://localhost:8000/api/'

const routes = [
    {
        path: '/',
        component: Todo,
        name: 'todo',
        children: [
            {
                path: '/list/:id',
                components: { tasks: Tasks },
                name: 'tasks',
                children: [
                    {
                        path: 'task/:taskId',
                        components: { notes: NotesModal },
                        name: 'notes'
                    }
                ]
            }
        ]
    },
    {
        path: '/login',
        component: Login,
        name: 'login'
    },
    {
        path: '/signup',
        component: Signup,
        name: 'signup'
    }
];

const router = new VueRouter({
    mode: 'history',
    routes,
    base: '/'
})

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App),
}).$mount('#app')
