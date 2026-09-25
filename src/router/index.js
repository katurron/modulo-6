import { createRouter, createWebHistory } from "vue-router"
import HomeView from "../views/HomeView.vue"
import ListaLibros from "../views/ListaLibros.vue"
import DetalleLibro from "../views/DetalleLibro.vue"

const routes = [
  {
    path: "/",
    name: "inicio",
    component: HomeView
  },
  {
    path: "/libros",
    name: "libros",
    component: ListaLibros
  },
  {
    path: "/libros/:id",
    name: "detalle-libro",
    component: DetalleLibro ,
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router