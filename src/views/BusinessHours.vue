<script>
export default {
  name: 'BusinessHours'
}
</script>

<template>
    <div class="business-hours-box">
        <h2><u>Unsere Öffnungszeiten</u></h2>
        <ul>
            <li>Montag - Freitag: 9:00 - 18:00 Uhr</li>
            <li>Samstag: 10:00 - 16:00 Uhr</li>
            <li>Sonn- & Feiertage: Geschlossen<br /></li>
        </ul>
        <ul>   
            <li>Standort:</li>     
            <li>IU Kleiderspende e.V.</li>
            <li>Durlacher Straße 93</li>
            <li>68219 Mannheim</li>
        </ul>
    </div>
</template>

<style>
.business-hours-box {
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 300px;
  text-align: center;
}

.business-hours-box h2 {
  margin-bottom: 15px;
  font-size: 1.5em;
}

.business-hours-box ul {
  list-style: none;
  padding: 0;
}

.business-hours-box li {
  margin: 10px 0;
  font-size: 1.1em;
}
</style>