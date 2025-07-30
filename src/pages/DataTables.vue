<template>
  <v-app style="background: #f6f8fb">
    <v-container>
      <v-row>
        <!-- Devlopment Table -->
        <v-col col="12" lg="6">
          <v-card class="mx-auto pa-2 rounded-lg">
            <template v-slot:prepend>
              <v-card-title class="font-weight-bold text-h5">
                Development Table</v-card-title
              >
            </template>
            <template v-slot:append>
              <v-icon
                color="grey-lighten-1"
                icon="mdi-dots-horizontal"
                size="30"
              ></v-icon>
            </template>
            <v-data-table
              :headers="developmentheaders"
              v-model="selected"
              :items="developmentitems"
              item-value="name"
              hide-default-footer
            >
              <!-- eslint-disable-next-line vue/valid-v-slot -->
              <template #item.progress="{ item }">
                <v-progress-linear
                  :model-value="item.progress"
                  height="8"
                  color="deep-purple-lighten-1"
                  rounded
                ></v-progress-linear>
              </template>
              <!-- eslint-disable-next-line vue/valid-v-slot -->
              <template #item.tech>
                <v-icon color="grey-lighten-1">mdi-apple</v-icon>
                <v-icon color="grey-lighten-1">mdi-microsoft-windows</v-icon>
              </template></v-data-table
            >
          </v-card>
        </v-col>
        <!-- Check Table -->
        <v-col col="12" lg="6">
          <v-card class="mx-auto pa-2 rounded-lg">
            <template v-slot:prepend>
              <v-card-title class="font-weight-bold text-h5">
                Check Table</v-card-title
              >
            </template>
            <template v-slot:append>
              <v-icon
                color="grey-lighten-1"
                icon="mdi-dots-horizontal"
                size="30"
              ></v-icon>
            </template>
            <v-data-table
              :headers="headers"
              v-model="selected"
              :items="items"
              item-value="name"
              show-select
              hide-default-footer
            >
              <!-- eslint-disable-next-line vue/valid-v-slot -->
              <template #item.progress="{ item }">
                <div class="d-flex align-center">
                  <v-progress-linear
                    :model-value="item.progress"
                    height="8"
                    color="deep-purple-lighten-1"
                    rounded
                  ></v-progress-linear>
                  <div class="text-caption ms-1">{{ item.progress }}%</div>
                </div>
              </template></v-data-table
            >
          </v-card>
        </v-col>
      </v-row>
      <v-row>
        <!-- 4-column Table -->
        <v-col col="12" lg="6">
          <v-card class="mx-auto pa-2 rounded-lg">
            <template v-slot:prepend>
              <v-card-title class="font-weight-bold text-h5">
                4-column Table</v-card-title
              >
            </template>
            <template v-slot:append>
              <v-icon
                color="grey-lighten-1"
                icon="mdi-dots-horizontal"
                size="30"
              ></v-icon>
            </template>
            <v-data-table
              :headers="fourcolheaders"
              :items="fourcolitems"
              item-value="name"
              hide-default-footer
            >
            </v-data-table>
          </v-card>
        </v-col>
        <!-- Complex Table -->
        <v-col cols="12" lg="6">
          <v-card class="mx-auto pa-2 rounded-lg">
            <template v-slot:prepend>
              <v-card-title class="font-weight-bold text-h5">
                Complex Table</v-card-title
              >
            </template>
            <template v-slot:append>
              <v-icon
                color="grey-lighten-1"
                icon="mdi-dots-horizontal"
                size="30"
              ></v-icon>
            </template>
            <v-data-table
              :headers="complexheaders"
              v-model="selected"
              :items="complexitems"
              item-value="name"
              hide-default-footer
            >
              <!-- eslint-disable-next-line vue/valid-v-slot -->
              <template #item.progress="{ item }">
                <v-progress-linear
                  :model-value="item.progress"
                  height="8"
                  color="deep-purple-lighten-1"
                  rounded
                ></v-progress-linear>
              </template>
              <!-- eslint-disable-next-line vue/valid-v-slot -->
              <template #item.status="{ item }">
                <v-icon size="22" class="me-2" color="deep-purple-lighten-1"
                  >mdi-check-circle-outline</v-icon
                >
                <span>{{ item.status }}</span>
              </template></v-data-table
            >
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script setup>
import { ref } from "vue";
const developmentheaders = [
  { title: "Feature Name", key: "name" },
  { title: "Tech", key: "tech" },
  { title: "Date", key: "date" },
  { title: "Progress", key: "progress" },
];
const selected = ref([]);
const developmentitems = [
  {
    name: "MarketPlace",
    progress: 80,
    status: "",
    date: "2025-07-27",
  },
  {
    name: "Venus DB PRO",
    progress: 65,
    status: "",
    date: "2025-07-25",
  },
  {
    name: "Venus DS",
    progress: 90,
    status: "",
    date: "2025-07-28",
  },
  {
    name: "Venus 3D Asset",
    progress: 50,
    status: "",
    date: "2025-07-23",
  },
  {
    name: "MarketPlace",
    progress: 50,
    status: "",
    date: "2025-07-23",
  },
];
const headers = [
  { title: "Feature Name", key: "name" },
  { title: "Progress", key: "progress" },
  { title: "Quantity", key: "quantity" },
  { title: "Date", key: "date" },
];
const items = [
  {
    name: "Weekly Update",
    progress: 80,
    quantity: 7, // updates this week
    date: "2025-07-27",
  },
  {
    name: "3D Venus Model",
    progress: 65,
    quantity: 12, // assets or views
    date: "2025-07-25",
  },
  {
    name: "Analytics Overview",
    progress: 90,
    quantity: 340, // total metrics
    date: "2025-07-28",
  },
  {
    name: "AI Suggestions",
    progress: 50,
    quantity: 24, // suggestions generated
    date: "2025-07-23",
  },
  {
    name: "Data Sync Logs",
    progress: 70,
    quantity: 18, // logs processed
    date: "2025-07-26",
  },
];
const fourcolheaders = [
  { title: "Feature Name", key: "name" },
  { title: "Progress", key: "progress" },
  { title: "Quantity", key: "quantity" },
  { title: "Date", key: "date" },
];
const fourcolitems = [
  {
    name: "Weekly Update",
    progress: "80%",
    quantity: 7,
    date: "2025-07-27",
  },
  {
    name: "3D Venus Model",
    progress: "65%",
    quantity: 12,
    date: "2025-07-25",
  },
  {
    name: "Analytics Overview",
    progress: "90%",
    quantity: 340,
    date: "2025-07-28",
  },
  {
    name: "AI Suggestions",
    progress: "50%",
    quantity: 24,
    date: "2025-07-23",
  },
];
const complexheaders = [
  { title: "Feature Name", key: "name" },
  { title: "Status", key: "status" },
  { title: "Date", key: "date" },
  { title: "Progress", key: "progress" },
];
const complexitems = [
  {
    name: "MarketPlace",
    progress: 80,
    status: "Approved",
    date: "2025-07-27",
  },
  {
    name: "MarketPlace",
    progress: 65,
    status: "Approved",
    date: "2025-07-25",
  },
  {
    name: "MarketPlace",
    progress: 90,
    status: "Approved",
    date: "2025-07-28",
  },
  {
    name: "MarketPlace",
    progress: 50,
    status: "Approved",
    date: "2025-07-23",
  },
];
</script>

<style>
</style>