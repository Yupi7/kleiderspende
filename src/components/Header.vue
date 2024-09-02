<template>
  <header>
    <div class="logo">
      <img src="@/assets/logo.png" alt="Logo" />
      <h1>IU Kleiderspende - Wir helfen Menschen</h1>
    </div>
    <nav>
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/kriesengebiete">Kriesengebiete</router-link></li>
        <li><router-link to="/spende">Spende registrieren</router-link></li>
        <li><router-link to="/kontakt">Kontakt</router-link></li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #e1e8ed;
  color: black;
  padding: 10px;
}

.logo {
  display: flex;
  align-items: center;
}

.logo img {
  height: 120px;
  margin-right: 10px;
}

nav ul {
  list-style: none;
  display: flex;
}

nav li {
  margin-right: 20px;
}

nav a {
  color: black;
  text-decoration: none;
}

nav a:hover {
  text-decoration: underline;
}
</style>
