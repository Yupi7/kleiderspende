<template>
  <footer>
    <p>&copy; 2024 IU Kleiderspende e.V. - Alle Rechte vorbehalten.</p>
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

<script>
export default {
  name: 'Footer',
  data() {
    return {
      facebookUrl: 'https://www.facebook.com',
      instagramUrl: 'https://www.instagram.com/yourprofile',
    };
  }
}
</script>

<style>
footer {
  background-color: #e1e8ed;
  color: black;
  text-align: center;
  padding: 10px;
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
