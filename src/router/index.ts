import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/Login.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('@/views/Register.vue')
    },
    {
      path: '/profile',
      name: 'profile',
      component: () => import('@/views/Profile.vue')
    },
    {
      path: '/search',
      name: 'search',
      component: () => import('@/views/Search.vue')
    },
    {
      path: '/booking',
      name: 'booking',
      component: () => import('@/views/Booking.vue')
    },
    {
      path: '/booking_management',
      name: 'booking_management',
      component: () => import('@/views/BookingManagement.vue')
    },
    {
      path: '/seat',
      name: 'seat',
      component: () => import('@/views/Seat.vue')
    },
    {
      path: '/ua',
      name: 'ua',
      component: () => import('@/views/UA.vue')
    }
  ]
})

export default router
