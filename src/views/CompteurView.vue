<template>
  <h1>Compteur</h1>
  <div>
    <button @click="decrementer">-</button>
    {{ compteur }}
    <button @click="incrementer">+</button>
  </div>
</template>

<script setup>
import {ref} from "vue";

const compteur = ref(0)
const incrementer = () => {
  compteur.value++
}
const decrementer = () => {
  compteur.value--
}
</script>


<style scoped>

</style>