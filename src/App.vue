<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <header class="top">
    <nav>
      <ul>
        <li><a href="#opening-products"><RouterLink to="/">Home</RouterLink></a></li>
        <li><a href="#judul-product">  <RouterLink to="/about">About</RouterLink></a></li>
      </ul>
    </nav>
  </header>
  <div id="all-container">
    <RouterView />
  </div>
</template>

<style scoped>
#all-container{
  background-color: #F0EDCC;
}
header {
  line-height: 1.5;
  max-height: 100vh;
}


nav{
  background-color: #2E3C7E;
  position: sticky;
  top: 0;
}

nav ul{
  display: flex;
  flex-direction: row;
  list-style-type: none;
  padding: 1rem 2rem;
  margin: 0;
  justify-content: center;
}

nav ul a{
  text-decoration: none;
  color: #F0EDCC;
  margin-inline: 2rem;
}



nav a.router-link-exact-active {
  font-weight: bold;
}


</style>
