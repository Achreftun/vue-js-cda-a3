<template>
    <h1>Tableau</h1>

    <div>
        <router-link :to="{ name: 'tableau', params: { id: previous } }">Précédent</router-link>
        Tableau[{{ id }}] = {{ numbers[id] }}
        <router-link :to="{ name: 'tableau', params: { id: next } }">Suivant</router-link>
    </div>
</template>
<script>
export default {
    data() {
        return {
            numbers: [2, 3, 8, 1]
        }
    },
    props: ['id'],
    computed: {
        previous() {
            return Number(this.id) === 0 ? this.numbers.length - 1 : Number(this.id) - 1
        },
        next() {
            return Number(this.id) === this.numbers.length - 1 ? 0 : Number(this.id) + 1
        }
    }
}
</script>
<style></style>