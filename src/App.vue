<template>
  <div id="app">
    <header class="barra-navegacion">
      <router-link to="/" class="logo">📚 BookList</router-link>

      <nav>
        <router-link to="/">Inicio</router-link>
        <router-link to="/libros">Libros</router-link>
      </nav>
    </header>

    <main class="contenido">
      <router-view />
    </main>
  </div>
</template>

<style>
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  background: #f5f3ef;
  color: #252525;
  font-family: Arial, sans-serif;
}

.barra-navegacion {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 18px 10%;
  background: #ffffff;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);
}

.logo {
  color: #6b4f3b;
  font-size: 22px;
  font-weight: bold;
  text-decoration: none;
}

nav {
  display: flex;
  gap: 18px;
}

nav a {
  color: #444;
  text-decoration: none;
}

nav a.router-link-exact-active {
  color: #6b4f3b;
  font-weight: bold;
}

.contenido {
  max-width: 1000px;
  margin: auto;
  padding: 40px 20px;
}
</style>
