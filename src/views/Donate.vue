<template>
  <div class="donate">
    <h1>Kleiderspende registrieren</h1>
    <form @submit.prevent="submitForm">
      <label for="donation-type">Spendenart:</label>
      <select id="donation-type" v-model="donationType">
        <option disabled value="">Bitte wählen</option>
        <option value="office">Übergabe an der Geschäftsstelle</option>
        <option value="pickup">Abholung</option>
      </select>

      <div v-if="donationType === 'pickup'">
        <label for="address">Abholadresse:</label>
        <input type="text" id="address" v-model="address" required>
      </div>

      <label for="clothing-type">Art der Kleidung:</label>
      <select id="clothing-type" v-model="clothingType" required>
        <option disabled value="">Bitte wählen</option>
        <option value="shirts">Shirts</option>
        <option value="pants">Hosen</option>
        <!-- Weitere Optionen hinzufügen -->
      </select>

      <label for="region">Krisengebiet:</label>
      <select id="region" v-model="region" required>
        <option disabled value="">Bitte wählen</option>
        <option value="area1">Gebiet 1</option>
        <option value="area2">Gebiet 2</option>
        <!-- Weitere Optionen hinzufügen -->
      </select>

      <button type="submit">Registrieren</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const donationType = ref('');
const address = ref('');
const clothingType = ref('');
const region = ref('');

const submitForm = () => {
  // Logik zur Formularverarbeitung
  console.log('Formular gesendet:', { donationType: donationType.value, address: address.value, clothingType: clothingType.value, region: region.value });
};
</script>

<style scoped>
.donate form {
  display: flex;
  flex-direction: column;
  max-width: 400px;
  margin: auto;
}
.donate label {
  margin-top: 10px;
}
.donate input, .donate select {
  padding: 8px;
  margin-top: 5px;
}
.donate button {
  margin-top: 20px;
  padding: 10px;
  background-color: #4CAF50;
  color: white;
  border: none;
  cursor: pointer;
}
</style>