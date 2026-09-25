<template>
  <section>
    <LibroForm @agregar-libro="agregarLibro" />
    <div class="encabezado">
      <div>
        <p class="etiqueta">Catálogo</p>
        <h1>Mis libros</h1>
      </div>
      <div class="filtros">
  <input
    v-model.trim="busqueda"
    type="search"
    placeholder="Buscar por título o autor"
  />

  <select v-model="categoriaSeleccionada">
    <option value="">Todas las categorías</option>
    <option>Novela</option>
    <option>Fantasía</option>
    <option>Ciencia ficción</option>
    <option>Historia</option>
    <option>Otro</option>
  </select>
</div>

      <p>{{ libros.length }} libros registrados</p>
    </div>

    <p v-if="librosFiltrados.length === 0" class="sin-libros">
      No se encontraron libros que coincidan con los criterios de búsqueda.
    </p>

    <div v-else class="lista-libros">
      <LibroCard
  v-for="libro in librosFiltrados"
  :key="libro.id"
  :libro="libro"
  @eliminar="eliminarLibro"
/>
    </div>
  </section>
</template>

<script>
import LibroCard from "@/components/LibroCard.vue"
import LibroForm from "@/components/LibroForm.vue"
import { libros } from "@/datos/Libros"

export default {
  name: "ListaLibros",

  components: {
    LibroCard,
    LibroForm
  },

  data() {
    return {
      libros,
      busqueda: "",
      categoriaSeleccionada: ""
    }
  },

  computed: {
    librosFiltrados() {
      const texto = this.busqueda.toLowerCase()

      return this.libros.filter((libro) => {
        const coincideTexto =
          libro.titulo.toLowerCase().includes(texto) ||
          libro.autor.toLowerCase().includes(texto)

        const coincideCategoria =
          this.categoriaSeleccionada === "" ||
          libro.categoria === this.categoriaSeleccionada

        return coincideTexto && coincideCategoria
      })
    }
  },

  methods: {
    agregarLibro(libroNuevo) {
      this.libros.push(libroNuevo)
    },

    eliminarLibro(id) {
      const indice = this.libros.findIndex((libro) => libro.id === id)

      if (indice !== -1) {
        this.libros.splice(indice, 1)
      }
    }
  }
}
</script>

<style scoped>
.encabezado {
  display: flex;
  align-items: end;
  justify-content: space-between;
  margin-bottom: 30px;
}

.encabezado h1 {
  margin: 5px 0;
}

.etiqueta {
  margin: 0;
  color: #6b4f3b;
  font-weight: bold;
  text-transform: uppercase;
}

.lista-libros {
  display: grid;
  gap: 18px;
}

.sin-libros {
  padding: 30px;
  border-radius: 12px;
  background: white;
  text-align: center;
}
.filtros {
  display: flex;
  gap: 12px;
  margin-bottom: 24px;
}

.filtros input,
.filtros select {
  padding: 10px;
  border: 1px solid #d7cdc4;
  border-radius: 8px;
  font: inherit;
}

.filtros input {
  flex: 1;
}

@media (max-width: 600px) {
  .filtros {
    flex-direction: column;
  }
}
</style>