<template>
  <div class="home">
    <h2><u>Willkommen bei der IU Kleiderspende</u></h2>
    <p>
      Wir haben es uns zur Aufgabe gemacht, Menschen in Not zu helfen.
      Sie können nun ein Teil davon werden!
    </p>
    <p>
      Sie haben Klamotten, die Sie nicht mehr benötigen, aber nicht wissen, wohin damit?
      Wir nehmen sie Ihnen gerne ab!
    </p>
    <p>
      Sie können Ihre Kleidung entweder an unserer Geschäftsstelle abgeben oder ein Sammelfahrzeug zur Abholung anfordern.
    </p>
    <router-link to="/spende" class="btn">Jetzt Spenden</router-link>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style>
.home {
  text-align: center;
  padding: 20px;
}

.home h2 {
  font-size: 2em;
  margin-bottom: 20px;
}

.home p {
  font-size: 1.2em;
  margin-bottom: 30px;
}

.btn {
  display: inline-block;
  padding: 10px 20px;
  background-color: #333;
  color: white;
  text-decoration: none;
  border-radius: 5px;
}

.btn:hover {
  background-color: #555;
}
</style>
