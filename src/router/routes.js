import Home from '../pages/Home.vue';
import AboutMe from '../pages/AboutMe.vue';
import Question from '../pages/Question.vue';
import Blog from '../pages/Blog.vue';
import Portfolio from '../pages/Portfolio.vue';

// Auth Layouts
import LoginPage from '../pages/LoginPage.vue';
import DragTest from '../pages/apps/DragTest.vue';

// Layouts
import WebLayout from '../layouts/WebLayout.vue';
import AppLayout from '../layouts/AppLayout.vue';
import AuthLayout from '../layouts/AuthLayout.vue';

// Apps Components
import Dashboard from '../pages/apps/Dashboard.vue';

export const routes = [
  {
    path: '/app',
    component: AppLayout,
    children: [
      {
        path: '/dashboard',
        component: Dashboard
      },
    ]
  },
  {
    path: '/auth',
    component: AuthLayout,
    children: [
      {
        path: '/login',
        component: LoginPage
      },
      {
        path: '/register',
        component: LoginPage
      },
      {
        path: '/drag',
        component: DragTest
      },
      {
        path: '/portfolio',
        component: Portfolio
      },
    ]
  },
  {
    path: '/web',
    component: WebLayout,
    children: [
      {
        path: '/',
        component: Home
      },
      {
        path: '/question',
        component: Question
      },
      {
        path: '/about-me',
        component: AboutMe
      },
      {
        path: '/blog',
        component: Blog
      },
     
    ]
  },
]
