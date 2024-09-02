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
          <option value="Westafrika">Westafrika</option>
          <option value="Ostafrika">Ostafrika</option>
          <option value="Südafrika">Südafrika</option>
          <option value="Naher-Osten">Naher-Osten</option>
          <option value="Südasien">Südasien</option>
          <option value="Südostasien">Südostasien</option>
        </select>
      </label>
      
    <div v-if="crisisArea === 'Nordafrika'">
      <label>
        <select v-model="country">
          <option value="Marokko">Marokko</option>
          <option value="Tunesien">Tunesien</option>
          <option value="Ägypten">Ägypten</option>
          <option value="Algerien">Algerien</option>
          <option value="Lybien">Lybien</option>
        </select>
      </label>
    </div>

    <div v-if="crisisArea === 'Zentralafrika'">
      <label>
        <select v-model="country">
          <option value="Angola">Angola</option>
          <option value="Kamerun">Kamerun</option>
          <option value="Gabun">Gabun</option>
        </select>
      </label>
    </div>

     <div v-if="crisisArea === 'Ostafrika'">
      <label>
        <select v-model="country">
          <option value="Kenia">Kenia</option>
          <option value="Tansania">Tansania</option>
          <option value="Burundi">Burundi</option>
          <option value="Dschibuti">Dschibuti</option>
          <option value="Somalia">Somalia</option>
          <option value="Äthiopien">Äthiopien</option>
          <option value="Mauritius">Mauritius</option>
        </select>
      </label>
    </div>

    <div v-if="crisisArea === 'Westafrika'">
      <label>
        <select v-model="country">
          <option value="Ghana">Ghana</option>
          <option value="Mali">Mali</option>
          <option value="Nigeria">Nigeria</option>
          <option value="Gambia">Gambia</option>
          <option value="Senegal">Senegal</option>
          <option value="Sierra-Leone">Sierra-Leone</option>
        </select>
      </label>
    </div>

    <div v-if="crisisArea === 'Südafrika'">
      <label>
        <select v-model="country">
          <option value="Mosambik">Mosambik</option>
          <option value="Simbabwe">Simbabwe</option>
          <option value="Sambia">Sambia</option>
          <option value="Südafrika">Südafrika</option>
        </select>
      </label>
    </div>

    <div v-if="crisisArea === 'Naher-Osten'">
      <label>
        <select v-model="country">
          <option value="Palästina">Palästina</option>
          <option value="Syrien">Syrien</option>
          <option value="Jordanien">Jordanien</option>
        </select>
      </label>
    </div>

    <div v-if="crisisArea === 'Südasien'">
      <label>
        <select v-model="country">
          <option value="Bangladesh">Bangladesh</option>
          <option value="Bhudan">Bhudan</option>
          <option value="Nepal">Nepal</option>
          <option value="Pakistan">Pakistan</option>
        </select>
      </label>
    </div>

    <div v-if="crisisArea === 'Südostasien'">
      <label>
        <select v-model="country">
          <option value="Brunei Darussalam">Brunei Darussalam</option>
          <option value="Indonesien">Indonesien</option>
          <option value="Malaysia">Malaysia</option>
          <option value="Thailand">Thailand</option>
          <option value="Vietnam">Vietnam</option>
        </select>
      </label>
    </div>

      <button type="submit">Spende registrieren</button>
    </form>

    <div v-if="success">
      <h3>Registrierung erfolgreich!</h3>
      <p>Art der Kleider: {{ clothingType }}</p>
      <p>Krisengebiet: {{ crisisArea }}</p>
      <p>Land: {{ country }}</p>
      <p>Datum: {{ new Date().toLocaleDateString() }}</p>
      <p>Uhrzeit: {{ new Date().toLocaleTimeString() }}</p>
      <p>Ort: {{ donationType === 'pickup' ? address : 'IU Kleiderspende, Durlacher Straße 93, 68219 Mannheim' }}</p>
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
  padding: 7px;
  margin-bottom: 10px;
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
