import Vue from 'vue';
import VueRouter from 'vue-router'
import Home from '@/view/Home'
import About from '@/view/About'
import Blog from '@/view/Blog'

Vue.use(VueRouter);


const routes = [
{ path: '/', name: 'Home', component: Home},
{ path: '/blog', name: 'Blog', component: Blog},
{ path: '/about', name: 'About', component: About},
]

export default routes;