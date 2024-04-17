<template>
    <h1>Détails de la personne {{ id }}</h1>
    <ul>
        <li>Nom : {{ personne.nom }}</li>
        <li>Prénom : {{ personne.prenom }}</li>
        <li>Âge : {{ personne.age }}</li>
    </ul>
  <button @click="$router.push('/personne')">
    Retour
  </button>
  
</template>
<script>
import axios from "axios";
export default {
    data() {
        return {
          personne : {}
        }
    },
    props: ['id'],
    created() {
       axios
           .get(`http://localhost:5555/personnes/${this.id}`)
           .then(res => this.personne = res.data)
    }
}
</script>
<style></style>