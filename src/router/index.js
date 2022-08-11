import { createRouter, createWebHistory } from 'vue-router'


const routes = [
  {
      path: '/',
      name: 'Home',
      component: () => import(/* webpackChunkName: "Home" */ '@/components/ListCards.vue')
  },
  {
    path: '/:idCharacter',
    name: 'Character',
    component: () => import(/* webpackChunkName: "Character" */ '@/components/CharacterPerfil.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
