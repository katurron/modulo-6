<template>
  <div v-if="mostrarBienvenida" class="modal-fondo">
  <form class="modal" @submit.prevent="guardarUsuario">
    <span class="modal-icono">📚</span>
    <h2>¡Bienvenido a BookList!</h2>
    <p>Antes de comenzar, ¿cómo te llamas?</p>

    <input
      v-model.trim="nombreTemporal"
      type="text"
      placeholder="Escribe tu nombre"
      autofocus
    />

    <button type="submit">Comenzar</button>
  </form>
</div>
  <section class="inicio">
    <p class="etiqueta">Editorial Nova</p>
    <p v-if="nombreUsuario" class="saludo">
  Hola, {{ nombreUsuario }} 👋
</p>

    <h1>Organiza tu biblioteca en un solo lugar</h1>

    <p class="descripcion">
      Registra, consulta y administra tus libros de manera simple.
    </p>

    <router-link to="/libros" class="boton-catalogo">
      <span class="icono-libros">📚</span>

      <span>
        <strong>Explorar catálogo</strong>
        <small>Ver y administrar mis libros</small>
      </span>

      <span class="flecha">→</span>
    </router-link>

    <button
      class="boton-acordeon"
      type="button"
      @click="formularioVisible = !formularioVisible"
    >
      <span class="icono-agregar">✚</span>

      <span>
        <strong>
          {{ formularioVisible ? "Ocultar formulario" : "Agregar un libro" }}
        </strong>
        <small>Registra un nuevo libro en tu catálogo</small>
      </span>

      <span class="flecha">
        {{ formularioVisible ? "⌃" : "⌄" }}
      </span>
    </button>

    <div v-show="formularioVisible" class="panel-formulario">
      <LibroForm @agregar-libro="agregarLibro" />
    </div>

    <section class="contador">
      <span class="icono-contador">✨</span>

      <div>
        <p class="titulo-contador">Libros agregados hoy</p>
        <p class="numero">{{ librosAgregadosHoy }}</p>
      </div>
    </section>
  </section>
</template>

<script>
import LibroForm from "@/components/LibroForm.vue"
import { libros } from "@/datos/Libros"

export default {
  name: "HomeView",

  components: {
    LibroForm
  },

data() {
  const usuarioGuardado = localStorage.getItem("booklist_usuario") || ""

  return {
    formularioVisible: false,
    nombreUsuario: usuarioGuardado,
    nombreTemporal: "",
    mostrarBienvenida: !usuarioGuardado
  }
},

  computed: {
    librosAgregadosHoy() {
      const hoy = new Date().toLocaleDateString("sv-SE")

      return libros.filter((libro) => libro.fechaRegistro === hoy).length
    }
  },

  methods: {
    guardarUsuario() {
  if (!this.nombreTemporal) {
    return
  }

  this.nombreUsuario = this.nombreTemporal
  localStorage.setItem("booklist_usuario", this.nombreUsuario)
  this.mostrarBienvenida = false
},
    agregarLibro(libroNuevo) {
      libros.push(libroNuevo)
      this.formularioVisible = false
    }
  }
}
</script>

<style scoped>
.inicio {
  max-width: 700px;
  margin: 40px auto;
  text-align: center;
}

.etiqueta {
  margin: 0;
  color: #6b4f3b;
  font-weight: bold;
  text-transform: uppercase;
}

h1 {
  margin: 10px 0;
  font-size: 42px;
}

.descripcion {
  color: #666;
  font-size: 18px;
}

.boton-catalogo,
.boton-acordeon {
  display: flex;
  width: 100%;
  align-items: center;
  gap: 18px;
  padding: 20px 24px;
  border: 0;
  border-radius: 16px;
  color: white;
  text-align: left;
  text-decoration: none;
  cursor: pointer;
}

.boton-catalogo {
  margin: 35px auto 14px;
  background: #6b4f3b;
  box-shadow: 0 8px 18px rgba(107, 79, 59, 0.25);
}

.boton-catalogo:hover {
  background: #4e392a;
}

.boton-acordeon {
  background: #b86b45;
  font: inherit;
}

.boton-acordeon:hover {
  background: #9c5533;
}

.boton-catalogo strong,
.boton-catalogo small,
.boton-acordeon strong,
.boton-acordeon small {
  display: block;
}

.boton-catalogo strong,
.boton-acordeon strong {
  font-size: 21px;
}

.boton-catalogo small,
.boton-acordeon small {
  margin-top: 4px;
  opacity: 0.85;
}

.icono-libros,
.icono-agregar {
  font-size: 40px;
}

.flecha {
  margin-left: auto;
  font-size: 30px;
}

.panel-formulario {
  margin: 14px 0;
  padding: 22px;
  border-radius: 16px;
  background: #ffffff;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
  text-align: left;
}

:deep(.formulario-contenedor) {
  margin-bottom: 0;
}

.contador {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  padding: 22px;
  border-radius: 16px;
  background: white;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
}

.icono-contador {
  font-size: 32px;
}

.titulo-contador {
  margin: 0;
  color: #666;
  font-weight: bold;
}

.numero {
  margin: 4px 0 0;
  color: #6b4f3b;
  font-size: 38px;
  font-weight: bold;
}
.modal-fondo {
  position: fixed;
  z-index: 10;
  inset: 0;
  display: grid;
  place-items: center;
  padding: 20px;
  background: rgba(37, 37, 37, 0.55);
}

.modal {
  width: min(100%, 420px);
  padding: 34px;
  border-radius: 18px;
  background: white;
  text-align: center;
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.25);
}

.modal-icono {
  font-size: 46px;
}

.modal input {
  width: 100%;
  margin: 16px 0;
  padding: 12px;
  border: 1px solid #d7cdc4;
  border-radius: 8px;
  font: inherit;
}

.modal button {
  width: 100%;
  padding: 12px;
  border: 0;
  border-radius: 8px;
  background: #6b4f3b;
  color: white;
  font: inherit;
  font-weight: bold;
  cursor: pointer;
}

.saludo {
  margin: 12px 0 0;
  color: #6b4f3b;
  font-weight: bold;
}
</style>