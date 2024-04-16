<template>
  <img alt="Vue logo" class="logo" src="./assets/vue.svg">
  <img alt="Vite logo" class="logo" src="/vite.svg"> {{ pays }}
  <HelloWorld ville="Marseille" @sendData="afficherPays" ref="enfant" />
  <HelloWorld>John</HelloWorld>
  <HelloWorld v-for="ville in villes" :ville />
  <PrimeurComponent />
  <PaysComponent />
</template>

<script>
import PrimeurComponent from './components/PrimeurComponent.vue'
import HelloWorld from './components/HelloWorld.vue'
import PaysComponent from './components/PaysComponent.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    PrimeurComponent,
    PaysComponent
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