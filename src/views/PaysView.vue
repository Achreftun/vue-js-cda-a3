<template>
    <h1>
        Pays : {{ villes }}
    </h1>
    <ul>
        <VilleComponent v-for="(ville, ind) in villes" v-model:ville="villes[ind]" />
    </ul>

</template>
<script setup>
import VilleComponent from '../components/VilleComponent.vue'
import {reactive} from "vue";

const villes = reactive(['Marseille', 'Lyon', 'Paris'])
</script>
<style></style>