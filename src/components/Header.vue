<template>
  <header>
    <nav>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style scoped>
header {
  background-color: #333;
  color: #fff;
  padding: 1rem;
}

nav ul {
  display: flex;
  list-style: none;
  justify-content: space-around;
}

nav ul li a {
  color: #fff;
  text-decoration: none;
}
</style>
