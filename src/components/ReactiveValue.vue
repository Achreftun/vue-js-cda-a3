<template>
    <h1>Valeurs réactives</h1>
    <div>
        {{ valeur1 }} + {{ valeur2 }} = {{ resultat }}
    </div>
</template>
<script>
import { computed } from 'vue'
export default {
    data() {
        return {
            valeur1: 2,
            valeur2: 5,
            resultat: null
        }
    },
    created() {
        this.resultat = computed(() => this.valeur1 + this.valeur2)
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