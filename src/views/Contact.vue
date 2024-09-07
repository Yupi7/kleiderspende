<script>
export default {
  data() {
    return {
      name: '',
      email: '',
      message: '',
      formSubmitted: false,
    };
  },
  methods: {
    submitForm() {
      console.log({
        name: this.name,
        email: this.email,
        message: this.message,
      });
      this.formSubmitted = true;
      this.name = '';
      this.email = '';
      this.message = '';
    },
  },
};
</script>

<template>
  <div class="contact-form">
    <h2><u>Kontaktieren Sie uns</u></h2>
    <form @submit.prevent="submitForm">
      <div class="form-group">
        <label for="name">Name</label>
        <input type="text" id="name" v-model="name" required />
      </div>
      
      <div class="form-group">
        <label for="email">E-Mail</label>
        <input type="email" id="email" v-model="email" required />
      </div>
      
      <div class="form-group">
        <label for="message">Nachricht</label>
        <textarea id="message" v-model="message" required></textarea>
      </div>
      
      <button type="submit">Absenden</button>
    </form>
    
    <div v-if="formSubmitted">
      <p>Vielen Dank für Ihre Nachricht. Wir werden uns bald bei Ihnen melden!</p>
    </div>
  </div>
</template>

<style scoped>
.contact-form {
  background-color: #f9f9f9;
  max-width: 300px;
  margin: 0 auto;
  padding: 40px;
  border: 1px solid #ddd;
  border-radius: 10px;
}

.form-group {
  margin-bottom: 20px;
}

.form-group label {
  display: block;
  margin-bottom: 5px;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

button {
  padding: 10px 20px;
  background-color: #333;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #555;
}
</style>
