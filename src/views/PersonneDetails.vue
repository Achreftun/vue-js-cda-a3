<template>
    <h1>Détails de la personne {{ id }}</h1>
    <ul>
        <li>Nom : {{ personne.nom }}</li>
        <li>Prénom : {{ personne.prenom }}</li>
        <li>Âge : {{ personne.age }}</li>
    </ul>
</template>
<script>
export default {
    
    data() {
        return {
            personnes: [
                { id: 1, nom: 'Wick', prenom: 'John', age: 45 },
                { id: 2, nom: 'Dalton', prenom: 'Jack', age: 40 },
                { id: 3, nom: 'Dupont', prenom: 'Sophie', age: 30 }
            ]
        }
    },
    props: ['id'],
    computed: {
        personne() {
            return this.personnes.find(elt => elt.id == this.$route.params.id)
        }
    }
}
</script>
<style></style>