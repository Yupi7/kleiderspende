<template>
  <div class="confirmation">
    <h1>Bestätigung Ihrer Kleiderspende</h1>
    <p>Vielen Dank für Ihre Spende! Hier sind die Details Ihrer Spende:</p>
    <ul>
      <li>Spendenart: {{ donationType }}</li>
      <li>Abholadresse: {{ address }}</li>
      <li>Art der Kleidung: {{ clothingType }}</li>
      <li>Krisengebiet: {{ region }}</li>
      <li>Datum und Uhrzeit: {{ datetime }}</li>
    </ul>
    <router-link to="/" class="btn">Zurück zur Startseite</router-link>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

const donationType = computed(() => route.query.donationType);
const address = computed(() => route.query.address);
const clothingType = computed(() => route.query.clothingType);
const region = computed(() => route.query.region);
const datetime = computed(() => new Date().toLocaleString());
</script>

<style scoped>
.confirmation {
  padding: 20px;
  text-align: center;
}
.confirmation ul {
  list-style-type: none;
  padding: 0;
}
.confirmation li {
  margin-bottom: 10px;
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