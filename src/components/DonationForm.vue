<template>
  <div class="donation-form">
    <h2>Kleiderspende registrieren</h2>
    <form @submit.prevent="submitForm">
      <label>
        Übergabeoption:
        <select v-model="donationType">
          <option value="store">Übergabe an der Geschäftsstelle</option>
          <option value="pickup">Abholung</option>
        </select>
      </label>

      <div v-if="donationType === 'pickup'">
        <label>
          Abholadresse:
          <input type="text" v-model="address" required />
        </label>
      </div>

      <label>
        Art der Kleidung:
        <input type="text" v-model="clothingType" required />
      </label>

      <label>
        Krisengebiet:
        <select v-model="crisisArea" required>
          <option value="Nordafrika">Nordafrika</option>
          <option value="Zentralafrika">Zentralafrika</option>
          <option value="Südafrika">Südafrika</option>
          <option value="Naher-Osten">Naher-Osten</option>
          <option value="Mittelost-Asien">Mittelost-Asien</option>
        </select>
      </label>

      <button type="submit">Spende registrieren</button>
    </form>

    <div v-if="success">
      <h3>Registrierung erfolgreich!</h3>
      <p>Art der Kleider: {{ clothingType }}</p>
      <p>Krisengebiet: {{ crisisArea }}</p>
      <p>Datum: {{ new Date().toLocaleDateString() }}</p>
      <p>Uhrzeit: {{ new Date().toLocaleTimeString() }}</p>
      <p>Ort: {{ donationType === 'pickup' ? address : 'IU Kleiderspende Durlacher Straße 93 68219 Mannheim' }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      donationType: 'store',
      address: '',
      clothingType: '',
      crisisArea: '',
      success: false
    };
  },
  methods: {
    submitForm() {
      if (this.donationType === 'pickup' && !this.isAddressValid()) {
        alert('Die Abholadresse liegt nicht in der Nähe der Geschäftsstelle.');
        return;
      }
      this.success = true;
    },
    isAddressValid() {
      const storeZipCode = '68219'; // Beispiel-PLZ der Geschäftsstelle
      return this.address.startsWith(storeZipCode.slice(0, 2));
    }
  }
}
</script>

<style>
.donation-form {
  max-width: 600px;
  margin: auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  background-color: #f9f9f9;
}

form label {
  display: block;
  margin-bottom: 10px;
}

form input, form select {
  width: 100%;
  padding: 8px;
  margin-bottom: 20px;
}

button {
  padding: 10px 20px;
  background-color: #333;
  color: white;
  border: none;
  cursor: pointer;
}

button:hover {
  background-color: #555;
}
</style>
