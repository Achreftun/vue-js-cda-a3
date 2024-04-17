<template>
  <h1>Gestion de personnes</h1>
  <PersonneAdd @send-data="ajouterPersonne"/>
  <h2>Liste de personnes </h2>
  <ul>
    <li v-for='elt in personnes'>
      {{ elt.prenom }} {{ elt.nom }}
      <router-link :to="{ name: 'personne-details', params: { id: elt.id } }">
        détails
      </router-link>
    </li>
  </ul>
</template>
<script>
import PersonneAdd from '../components/PersonneAdd.vue';
import axios from "axios";

export default {
  components: {
    PersonneAdd
  },
  data() {
    return {
      personnes: [
        // { id: 1, nom: 'Wick', prenom: 'John', age: 45 },
        // { id: 2, nom: 'Dalton', prenom: 'Jack', age: 40 },
        // { id: 3, nom: 'Dupont', prenom: 'Sophie', age: 30 }
      ]
    }
  },
  methods: {
    ajouterPersonne(data) {
      this.personnes.push(data);
    }
  },
  created() {
    // axios({
    //   method: 'get',
    //   url:`http://localhost:5555/personnes`
    // })
    //     .then(res => this.personnes = res.data)
    axios
        .get(`http://localhost:5555/personnes`)
        .then(res => this.personnes = res.data)
  }

}
</script>
<style>

</style>