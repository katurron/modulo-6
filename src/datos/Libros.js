import { reactive } from "vue"

export const libros = reactive([
  {
    id: 1,
    titulo: "Cien años de soledad",
    autor: "Gabriel García Márquez",
    categoria: "Novela",
    descripcion: "La historia de la familia Buendía en Macondo.",
    portada: "",
    fechaRegistro: ""
  },
  {
    id: 2,
    titulo: "El principito",
    autor: "Antoine de Saint-Exupéry",
    categoria: "Fantasía",
    descripcion: "Un viaje que habla sobre amistad, amor y crecimiento.",
    portada: "",
    fechaRegistro: ""
  },
  {
    id: 3,
    titulo: "1984",
    autor: "George Orwell",
    categoria: "Ciencia ficción",
    descripcion: "",
    portada: "",
    fechaRegistro: ""
  }
])