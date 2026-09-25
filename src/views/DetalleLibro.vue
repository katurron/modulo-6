<template>
  <section v-if="libro" class="detalle">
    <router-link to="/libros" class="volver">
      ← Volver al catálogo
    </router-link>

    <p class="categoria">{{ libro.categoria }}</p>
    <h1>{{ libro.titulo }}</h1>
    <p class="autor">por {{ libro.autor }}</p>

    <p v-if="libro.descripcion" class="descripcion">
      {{ libro.descripcion }}
    </p>

    <p v-else class="descripcion">
      Este libro no tiene descripción.
    </p>
  </section>

  <section v-else class="no-encontrado">
    <h1>Libro no encontrado</h1>
    <router-link to="/libros">Volver al catálogo</router-link>
  </section>
</template>

<script>
import { libros } from "@/datos/Libros"

export default {
  name: "DetalleLibro",

  props: {
    id: {
      type: String,
      required: true
    }
  },

  computed: {
    libro() {
      return libros.find((item) => item.id === Number(this.id))
    }
  }
}
</script>

<style scoped>
.detalle,
.no-encontrado {
  max-width: 700px;
  margin: 40px auto;
  padding: 35px;
  border-radius: 16px;
  background: white;
}

.volver {
  color: #6b4f3b;
  text-decoration: none;
}

.categoria {
  display: inline-block;
  padding: 5px 10px;
  border-radius: 20px;
  background: #eee7e1;
  color: #6b4f3b;
  font-weight: bold;
}

.autor {
  color: #666;
  font-size: 18px;
}

.descripcion {
  line-height: 1.7;
}
</style>