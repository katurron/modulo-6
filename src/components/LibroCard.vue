<template>
  <article class="libro-card">
    <div class="portada">
      <img
        v-if="libro.portada"
        :src="libro.portada"
        :alt="`Portada de ${libro.titulo}`"
      />

      <span v-else>📖</span>
    </div>

    <div class="informacion">
      <span class="categoria">{{ libro.categoria }}</span>

      <h2>{{ libro.titulo }}</h2>
      <p class="autor">por {{ libro.autor }}</p>

      <p v-show="libro.descripcion" class="descripcion">
        {{ libro.descripcion }}
      </p>

      <router-link
        class="boton-detalle"
        :to="{ name: 'detalle-libro', params: { id: libro.id } }"
      >
        Ver detalle
      </router-link>

      <button class="boton-eliminar" @click="$emit('eliminar', libro.id)">
        Eliminar
      </button>
    </div>
  </article>
</template>

<script>
export default {
  name: "LibroCard",

  emits: ["eliminar"],

  props: {
    libro: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.libro-card {
  display: flex;
  gap: 20px;
  padding: 20px;
  background: white;
  border-radius: 14px;
  box-shadow: 0 3px 12px rgba(0, 0, 0, 0.08);
}

.portada {
  display: grid;
  flex-shrink: 0;
  width: 100px;
  height: 140px;
  place-items: center;
  overflow: hidden;
  border-radius: 8px;
  background: #eadfd6;
  font-size: 45px;
}

.portada img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.informacion {
  flex: 1;
}

.categoria {
  display: inline-block;
  padding: 5px 10px;
  border-radius: 20px;
  background: #eee7e1;
  color: #6b4f3b;
  font-size: 13px;
  font-weight: bold;
}

h2 {
  margin-bottom: 6px;
}

.autor {
  margin-top: 0;
  color: #666;
}

.descripcion {
  color: #555;
  line-height: 1.5;
}
 
.boton-detalle {
  display: inline-block;
  margin-right: 8px;
  padding: 9px 13px;
  border-radius: 8px;
  background: #6b4f3b;
  color: white;
  text-decoration: none;
}
.boton-eliminar {
  padding: 9px 13px;
  border: 0;
  border-radius: 8px;
  background: #b83a3a;
  color: white;
  cursor: pointer;
}

.boton-eliminar:hover {
  background: #942d2d;
}

</style>
