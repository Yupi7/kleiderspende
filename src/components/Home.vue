<template>
  <div class="home">
    <h2>Willkommen bei der Kleiderspende</h2>
    <p>
      Wir sammeln Kleidung für bedürftige Menschen in Krisengebieten. Sie können Ihre Kleidung
      entweder an unserer Geschäftsstelle abgeben oder ein Sammelfahrzeug zur Abholung anfordern.
    </p>
    <router-link to="/spende" class="btn">Spende registrieren</router-link>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style>
.home {
  text-align: center;
  padding: 20px;
}

.home h2 {
  font-size: 2em;
  margin-bottom: 20px;
}

.home p {
  font-size: 1.2em;
  margin-bottom: 30px;
}

.btn {
  display: inline-block;
  padding: 10px 20px;
  background-color: #333;
  color: white;
  text-decoration: none;
  border-radius: 5px;
}

.btn:hover {
  background-color: #555;
}
</style>
