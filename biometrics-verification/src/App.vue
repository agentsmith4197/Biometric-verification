<!-- <script setup>
import Home from './components/Home/Home.vue'
</script>
<template>
  <div>
     <Home /> 
  </div>

  </template>
  
  <!-- <script>
  import Navbar from './components/Navbar.vue';
  import Sidebar from './components/Sidebar.vue';
  
  export default {
    name: 'App',
    components: {
      Navbar,
      Sidebar,
    },
  };
  </script>-->
  
  <style>
  /* Add any additional styling here if needed */
  </style> -->

<template>
  <div id="app">
    <Home />
  </div>
</template>

<script>
import Home from './views/Home.vue';

export default {
  name: 'App',
  components: {
    Home
  }
};
</script>

<style>
/* Add any global styles here */
</style>
