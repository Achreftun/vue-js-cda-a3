<template>
    {{ pays }}
    <HelloWorld ville="Marseille" @sendData="afficherPays" ref="enfant" />
    <HelloWorld>John</HelloWorld>
    <HelloWorld v-for="ville in villes" :ville />
</template>

<script>
import HelloWorld from '../components/HelloWorld.vue'

export default {
    components: {
        HelloWorld,
    },
    data() {
        return {
            villes: ['Lille', 'Lyon', 'Annecy'],
            pays: null
        }
    },
    methods: {
        afficherPays(value) {
            this.pays = value
        }
    },
    mounted() {
        console.log(this.$refs.enfant.msg);
    },
}
</script>
<style scoped>
.logo {
    height: 6em;
    will-change: filter;
    transition: filter 300ms;
}
</style>