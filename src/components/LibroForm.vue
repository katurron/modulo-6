<template>
  <section class="formulario-contenedor">
    <form @submit.prevent="agregarLibro">
      <h2>Agregar libro</h2>

      <label for="titulo">Título</label>
      <input
        id="titulo"
        v-model.trim="nuevoLibro.titulo"
        type="text"
        placeholder="Ej: Don Quijote de la Mancha"
      />

      <label for="autor">Autor</label>
      <input
        id="autor"
        v-model.trim="nuevoLibro.autor"
        type="text"
        placeholder="Ej: Miguel de Cervantes"
      />

      <label for="categoria">Categoría</label>
      <select id="categoria" v-model="nuevoLibro.categoria">
        <option value="">Selecciona una categoría</option>
        <option>Novela</option>
        <option>Fantasía</option>
        <option>Ciencia ficción</option>
        <option>Historia</option>
        <option>Otro</option>
      </select>

      <label for="descripcion">Descripción</label>
      <textarea
        id="descripcion"
        v-model.trim="nuevoLibro.descripcion"
        rows="4"
        placeholder="Escribe una breve descripción"
      ></textarea>

      <button type="submit">Guardar libro</button>
    </form>

    <aside class="vista-previa">
      <p class="etiqueta">Vista previa</p>
      <h3>{{ nuevoLibro.titulo || "Título del libro" }}</h3>
      <p>por {{ nuevoLibro.autor || "Autor" }}</p>
      <span>{{ nuevoLibro.categoria || "Categoría" }}</span>
      <p>
        {{ nuevoLibro.descripcion || "La descripción aparecerá aquí." }}
      </p>
    </aside>
  </section>
</template>

<script>
export default {
  name: "LibroForm",

  emits: ["agregar-libro"],

  data() {
    return {
      nuevoLibro: {
        titulo: "",
        autor: "",
        categoria: "",
        descripcion: "",
        portada: ""
      }
    }
  },

  methods: {
    agregarLibro() {
      if (
        !this.nuevoLibro.titulo ||
        !this.nuevoLibro.autor ||
        !this.nuevoLibro.categoria
      ) {
        alert("Completa título, autor y categoría.")
        return
      }

      this.$emit("agregar-libro", {
        id: Date.now(),
        fechaRegistro: new Date().toLocaleDateString("sv-SE"),
        ...this.nuevoLibro
      })

      this.nuevoLibro = {
        titulo: "",
        autor: "",
        categoria: "",
        descripcion: "",
        portada: ""
      }
    }
  }
}
</script>

<style scoped>
.formulario-contenedor {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
}

form,
.vista-previa {
  padding: 20px;
  border-radius: 12px;
  background: #f8f5f2;
}

label {
  display: block;
  margin: 14px 0 6px;
  font-weight: bold;
}

input,
select,
textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #d7cdc4;
  border-radius: 8px;
  font: inherit;
}

button {
  margin-top: 18px;
  padding: 11px 16px;
  border: 0;
  border-radius: 8px;
  background: #6b4f3b;
  color: white;
  cursor: pointer;
}

.etiqueta {
  color: #6b4f3b;
  font-weight: bold;
  text-transform: uppercase;
}

.vista-previa span {
  display: inline-block;
  padding: 5px 10px;
  border-radius: 20px;
  background: #eee7e1;
  color: #6b4f3b;
}

@media (max-width: 700px) {
  .formulario-contenedor {
    grid-template-columns: 1fr;
  }
}
</style>