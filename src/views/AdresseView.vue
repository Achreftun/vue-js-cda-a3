<template>
  <h1>Adresse</h1>
  <ul>
    <li>Rue : {{ adresse.rue }}</li>
    <li>Ville : {{ adresse.ville }}</li>
    <li>Code postal : {{ adresse.cp }}</li>
  </ul>
</template>

<script setup>
// composable
import {useRoute} from "vue-router";
import {computed} from "vue";

const route = useRoute();

const adresse = computed (() => route.query)
</script>
<style></style>