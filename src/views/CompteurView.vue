<template>
  <h1>Compteur</h1>
  <div>
    <button @click="decrementer">-</button>
    {{ compteur }}
    <button @click="incrementer">+</button>
  </div>
</template>

<script>
import {ref} from "vue";

export default {
  setup() {
    const compteur = ref(0)
    const incrementer = () => {
      compteur.value++
    }
    const decrementer = () => {
      compteur.value--
    }
    return {
      compteur,
      incrementer,
      decrementer
    }
  }
}
// export default {
//   data() {
//     return {
//       compteur: 0
//     }
//   },
//   methods: {
//     incrementer() {
//       this.compteur++
//     },
//     decrementer() {
//       this.compteur--
//     }
//   }
// }
</script>


<style scoped>

</style>