<template>
    <li>
        {{ produit.nom }}, <PrixComponent :prix="produit.prix"/>, {{ produit.quantite }}
        <span>
            <input type="number" v-model="quantiteReservee">
            <button :disabled @click="envoyer">Ajouter dans le panier</button>
        </span>
    </li>
</template>
<script>
import PrixComponent from "./PrixComponent.vue";

export default {
  components: {PrixComponent},
    data() {
        return {
            quantiteReservee: null,
            disabled: false,
        }
    },
    props: {
        produit: {
            nom: String,
            prix: Number,
            quantite: Number
        }
    },
    methods: {
        envoyer() {
            this.$emit('sendData', this.quantiteReservee)
            this.disabled = true
        }
    },
    emits: ['sendData']
}
</script>
<style></style>