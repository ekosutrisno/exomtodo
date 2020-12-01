import {createRouter, createWebHistory} from 'vue-router'
import Home from './pages/Home.vue';
import Example from './pages/Example.vue';
import Question from './pages/Question.vue';
import Blog from './pages/Blog.vue';

const routes = [
   {
     path: '/',
     component: Home
   },
   {
     path: '/example',
     component: Example
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

