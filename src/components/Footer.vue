<template>
  <footer>
    <p>© 2024 Dein Unternehmen. Alle Rechte vorbehalten.</p>
    <p><a href="#">Impressum</a> | <a href="#">Datenschutz</a></p>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped>
footer {
  background-color: #333;
  color: #fff;
  text-align: center;
  padding: 1rem;
  position: fixed;
  bottom: 0;
  width: 100%;
}

footer a {
  color: #fff;
  text-decoration: none;
  margin: 0 0.5rem;
}
</style>
