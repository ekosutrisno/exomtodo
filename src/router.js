import {createRouter, createWebHistory} from 'vue-router'
import Home from './pages/Home.vue';
import AboutMe from './pages/AboutMe.vue';
import Question from './pages/Question.vue';
import Blog from './pages/Blog.vue';

const routes = [
   {
     path: '/',
     component: Home
   },
   {
     path: '/about-me',
     component: AboutMe
   },
   {
     path: '/question',
     component: Question
   },
   {
     path: '/blog',
     component: Blog
   },
 ]

 export default createRouter({
  history: createWebHistory(),
  routes: routes
 })

