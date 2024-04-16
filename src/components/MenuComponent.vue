<template>
    <nav>
        <ul>
            <li><router-link to="./">Accueil</router-link></li> |
            <li><router-link to="./about">About</router-link></li> |
            <li><router-link to="./primeur">Primeur</router-link></li> |
            <li><router-link to="./pays">Pays</router-link></li> |
            <li><router-link to="./reactive">Reactive</router-link></li>
        </ul>
    </nav>
</template>

<style>
li {
    list-style-type: none;
    display: inline;
}
</style>