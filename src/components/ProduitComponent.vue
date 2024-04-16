<template>
    <li>
        {{ produit.nom }}, {{ produit.prix }}€, {{ produit.quantite }}
        <span>
            <input type="number" v-model="quantiteReservee">
            <button :disabled @click="envoyer">Ajouter dans le panier</button>
        </span>
    </li>
</template>
<script>
export default {
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