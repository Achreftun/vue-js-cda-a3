<template>
    <h1>Gestion de personnes</h1>
    <PersonneAdd/>
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

export default {
    components: {
        PersonneAdd
    },
    data() {
        return {
            personnes: [
                { id: 1, nom: 'Wick', prenom: 'John', age: 45 },
                { id: 2, nom: 'Dalton', prenom: 'Jack', age: 40 },
                { id: 3, nom: 'Dupont', prenom: 'Sophie', age: 30 }
            ]
        }
    },

}
</script>
<style>

</style>