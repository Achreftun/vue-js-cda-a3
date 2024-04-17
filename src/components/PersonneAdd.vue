<template>
  <h2>Ajouter une nouvelle personne</h2>
  <Form @submit="ajouterPersonne">
    <div>
      <label for="nom">Nom</label>
      <Field id="nom" name="nom" :rules="validateNom" />
      <ErrorMessage  name="nom" />
    </div>
    <div>
      <label for="prenom">Prénom</label>
      <Field id="prenom" name="prenom"  :rules="validatePrenom" />
      <ErrorMessage  name="prenom" />
    </div>
    <div>
      <label for="age">Âge</label>
      <Field id="age" name="age"  :rules="'minMax:18,120'" />
      <ErrorMessage  name="age" />
    </div>
    <div>
      <button>Ajouter</button>
    </div>
  </Form>
</template>
<script>
import {Field, Form, ErrorMessage} from "vee-validate";
import * as yup from  'yup'
export default {
  components: {
    Field, Form, ErrorMessage
  },
  data() {
    return {
      validateNom: yup
          .string()
          .required()
          .matches(/^[A-Z]{1}.*/, 'Ce champ doit commencer par une majuscule'),
      validateAge: yup.number().required().min(1).max(150),
      validatePrenom: yup.string().required().matches(/^[A-Z]{1}.*/)
    }
  },
  methods: {
    ajouterPersonne(values, actions) {
      console.log(values);
      actions.resetForm()
    }
  }
}
</script>
<style scoped></style>