<template>
  <h1>Panier</h1>
  <table class="table" v-if="produitStore.nombreProduits != 0">
    <thead>
    <tr>
      <th scope="col">Produit</th>
      <th scope="col">Prix HT</th>
      <th scope="col">Quantité</th>
      <th scope="col">Actions</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="elt in produitStore.lignesCommandes">
      <td>{{ elt.produit.nom }}</td>
      <td>{{ elt.produit.prix }}€</td>


      <td>
        <button class="btn" @click="decrementer(elt.produit.nom)">
          <i class="fa-solid fa-minus"></i>
        </button>
        {{ elt.quantite }}
        <button class="btn" @click="incrementer(elt.produit.nom)">
          <i class="fa-solid fa-plus"></i>
        </button>
      </td>

      <td>
        <button class="btn" @click="supprimerLigneCommande(elt.produit.nom)">
          <i class="fa-solid fa-trash-can" style="color: #da0b20;"></i>
        </button>
      </td>
    </tr>
    </tbody>
    <tfoot>
    <tr>
      <td  class="fw-bold">Total TTC</td>
      <td></td>
      <td></td>
      <td class="fw-bold">
        <PrixComponent :prix="produitStore.totalHT"/>
      </td>
    </tr>

    </tfoot>
  </table>
  <div v-else class="alert alert-danger">
    Votre panier est vide
  </div>
</template>

<script setup>
import {useProduitStore} from "../stores/produit.store.js";
import PrixComponent from "../components/PrixComponent.vue";

const produitStore = useProduitStore();

const supprimerLigneCommande = (nom) => produitStore.supprimerLigneCommande(nom)

const incrementer = (nom) => produitStore.incrementerQuantite(nom)

const decrementer = (nom) => produitStore.decrementerQuantite(nom)
</script>


<style scoped>

</style>