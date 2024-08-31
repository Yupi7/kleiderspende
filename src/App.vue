<template>
  <div id="app">
    <Header />
    <main>
      <h1>Hello Konya</h1>
      <p>Hier ist der Konya-Bereich deiner Webseite.</p>
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    Footer
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

main {
  padding: 2rem;
  min-height: 80vh;
}
</style>