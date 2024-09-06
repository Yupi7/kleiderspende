<script>
export default {
  name: 'Footer',
  data() {
    return {
      facebookUrl: 'https://www.facebook.com',
      instagramUrl: 'https://www.instagram.com',
    };
  }
}
</script>

<template>
  <footer>
    <p>&copy; 2024 IU Kleiderspende e.V. - Alle Rechte vorbehalten.</p>
    <nav>
      <ul>
        <li><router-link to="/impressum">Impressum</router-link></li>
        <li><router-link to="/datenschutz">Datenschutz</router-link></li>
      </ul>
    </nav>
    <div class="social-links">
      <a :href="facebookUrl" target="_blank" rel="noopener noreferrer">
        <img src="@/assets/facebook-icon.png" alt="Facebook" />
      </a>
      <a :href="instagramUrl" target="_blank" rel="noopener noreferrer">
        <img src="@/assets/instagram-icon.png" alt="Instagram" />
      </a>
    </div>
  </footer>
</template>

<style>
footer {
  background-color: #e1e8ed;
  color: black;
  text-align: center;
  padding: 10px;
}

nav ul {
  list-style: none;
  padding: 0;
  display: flex;
  justify-content: center;
  margin: 10px 0;
}

nav ul li {
  margin: 0 7px;
}

nav a {
  color: black;
  text-decoration: none;
}

nav a:hover {
  text-decoration: underline;
}

.social-links {
  margin-top: 10px;
}

.social-links a {
  margin: 0 10px;
  display: inline-block;
}

.social-links img {
  width: 24px;
  height: 24px;
}
</style>
