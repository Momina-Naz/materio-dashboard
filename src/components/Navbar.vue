<template>
  <!-- Drawer -->
  <v-navigation-drawer
    v-if="route.path !== '/signin'"
    v-model="drawer"
    app
    width="300"
  >
    <!-- Drawer content -->
    <v-list-item class="px-8 pt-6 pb-4">
      <div class="d-flex align-baseline">
        <img src="/image.png" alt="Logo" style="height: 34px" class="me-2" />
        <v-list-item-title class="text-h4 font-weight-bold text-grey-darken-5">
          Materio
        </v-list-item-title>
      </div>
    </v-list-item>

    <v-divider />

    <v-list class="pa-4 py-8">
      <v-list-item
        v-for="link in links"
        :key="link.text"
        :to="link.route"
        density="compact"
        color="transparent"
        class="mb-1"
        :class="{ 'active-link': $route.path === link.route }"
      >
        <template #prepend>
          <v-icon
            size="20"
            :color="
              $route.path === link.route
                ? 'deep-purple-darken-2'
                : 'grey-darken-3'
            "
          >
            {{ link.icon }}
          </v-icon>
        </template>

        <v-list-item-title
          :class="[
            'text-body-2 font-weight-bold',
            $route.path === link.route
              ? 'text-deep-purple-darken-2'
              : 'text-grey-darken-3',
          ]"
        >
          {{ link.text }}
        </v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>

  <!-- App Bar -->
  <v-app-bar
    v-if="route.path !== '/signin'"
    app
    flat
    height="100"
    style="background: #f6f8fb; opacity: 0.9"
  >
    <v-app-bar-nav-icon @click="toggleDrawer" />
    <!-- title  -->
    <div class="d-flex flex-column align-top ms-3">
      <span class="mb-1">{{ currentFilePath }}</span>
      <v-app-bar-title class="font-weight-bold text-h5 text-grey-darken-5">
        {{ currentTitle }}
      </v-app-bar-title>
    </div>

    <v-spacer />

    <!-- Right side: search + icons -->
    <!-- Hides on xs and sm screens -->
    <div
      class="d-none d-md-flex align-center px-2 me-4 bg-white rounded-pill elevation-1"
      style="width: 400px"
    >
      <v-text-field
        flat
        variant="solo"
        density="compact"
        hide-details
        placeholder="Search"
        prepend-inner-icon="mdi-magnify"
        rounded
        bg-color="grey-lighten-4"
        class="ma-2 text-black elevation-0"
        style="max-width: 300px"
      />
      <v-btn icon color="grey-darken-1">
        <v-icon>mdi-lightbulb-outline</v-icon>
      </v-btn>
      <v-btn icon color="grey-darken-1">
        <v-icon>mdi-bell-outline</v-icon>
      </v-btn>
      <v-btn icon color="grey-darken-1">
        <v-icon>mdi-account-outline</v-icon>
      </v-btn>
      <v-avatar size="38" color="deep-purple-darken-2">AP</v-avatar>
    </div>
  </v-app-bar>
</template>

<script setup>
import { ref } from "vue";
import { computed } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const drawer = ref(true);
const currentTitle = computed(() => {
  return routeTitles[route.path] || "";
});
const currentFilePath = computed(() => {
  return filepaths[route.path] || "pages/unknown";
});

const links = [
  {
    icon: "mdi-view-dashboard-outline",
    text: "Main Dashboard",
    route: "/dashboard",
  },
  { icon: "mdi-store-outline", text: "MarketPlace", route: "/marketplace" },
  { icon: "mdi-table", text: "Data Tables", route: "/datatables" },
  { icon: "mdi-account-outline", text: "Profile", route: "/profile" },
  { icon: "mdi-login", text: "Sign In", route: "/signin" },
];

const toggleDrawer = () => {
  drawer.value = !drawer.value;
};

//  Route-to-Title Mapping
const routeTitles = {
  "/dashboard": "Main Dashboard",
  "/marketplace": "MarketPlace",
  "/datatables": "Data Tables",
  "/profile": "Profile",
  "/signin": "",
};
const filepaths = {
  "/dashboard": "Pages/dashboard",
  "/marketplace": "Pages/marketplace",
  "/datatables": "Pages/datatables",
  "/profile": "Pages/profile",
  "/signin": "Pages/signin",
};
</script>

<style scoped>
.active-link {
  border-right: 3px solid #6c63ff;
  background: #ede7f6;
  color: black;
}
</style>


