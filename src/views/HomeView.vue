<template>
  <div class="home">
    <h1>Willkommen beim Kleiderspende-Portal</h1>
    <p>Wähle eine der folgenden Optionen, um deine Kleiderspende zu registrieren:</p>
    <router-link to="/donate" class="btn">Kleiderspende registrieren</router-link>
  </div>
</template>

<script setup>
// Hier können zusätzliche Skripte importiert werden, falls nötig.
</script>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
}

.btn {
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #4CAF50;
  color: white;
  text-decoration: none;
  border-radius: 5px;
}
.btn:hover {
  background-color: #45a049;
}
</style>