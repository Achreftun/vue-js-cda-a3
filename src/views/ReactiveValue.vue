<template>
    <h1>Valeurs réactives</h1>
    <div>
        {{ valeur1 }} + {{ valeur2 }} = {{ resultat }}
    </div>
</template>
<script>
export default {
    data() {
        return {
            valeur1: 2,
            valeur2: 5,
        }
    },
    computed: {
        resultat() {
            return this.valeur1 + this.valeur2
        }
    },
    mounted() {
        setInterval(
            () => this.valeur1 += 10,
            2000
        );
    },
}
</script>
<style></style>