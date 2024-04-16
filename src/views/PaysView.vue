<template>
    <h1>
        Pays : {{ villes }}
    </h1>
    <ul>
        <VilleComponent v-for="(ville, ind) in villes" v-model:ville="villes[ind]" />
    </ul>

</template>
<script>
import VilleComponent from '../components/VilleComponent.vue'
export default {
    components: {
        VilleComponent
    },
    data() {
        return {
            villes: ['Marseille', 'Lyon', 'Paris']
        }
    },

}
</script>
<style></style>