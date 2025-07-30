<template>
  <v-app tyle="background: #f6f8fb">
    <Navbar />
    <v-main>
      <router-view />
      <v-footer class="pa-6 app" v-if="route.path !== '/signin'"
        ><div
          class="flex-1-0-100 text-center mt-2 text-sm"
          color="grey-lighten-1"
        >
          © {{ new Date().getFullYear() }} Materio UI. All Rights Reserved.
        </div></v-footer
      >
    </v-main>
  </v-app>
</template>
  


<script setup>
import Navbar from "./components/Navbar.vue";
import { useRoute } from "vue-router";

const route = useRoute();

//
</script>
