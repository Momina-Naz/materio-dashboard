<template>
  <v-app style="background: #f6f8fb">
    <v-container>
      <v-row justify="center">
        <v-col cols="12" sm="6" md="4" v-for="item in data" :key="item.id">
          <v-card class="pa-4 d-flex align-center py-8" rounded="xl">
            <!-- Avatar on the left -->
            <v-avatar size="48" color="deep-purple-lighten-5" class="me-4">
              <v-icon :icon="item.icon" color="deep-purple-darken-2"></v-icon>
            </v-avatar>

            <!-- Texts stacked vertically -->
            <div>
              <div class="text-h6 font-weight-medium">{{ item.title }}</div>
              <div class="text-subtitle-2 text-grey">{{ item.subtitle }}</div>
            </div>
          </v-card>
        </v-col>
      </v-row>

      <!-- graphs -->

      <v-row>
        <!-- first -->
        <v-col cols="12" md="6">
          <v-card class="mx-auto pa-3 pb-8 rounded-lg">
            <template v-slot:prepend>
              <v-icon
                color="deep-purple-lighten-1"
                icon="mdi-calendar-outline"
                size="32"
              ></v-icon>
              <v-card-title
                class="ms-2 text-deep-purple-lighten-1 font-weight-regular"
              >
                This Month
              </v-card-title>
            </template>
            <template v-slot:append>
              <v-icon
                color="deep-purple-lighten-1"
                icon="mdi-chart-bar"
                size="32"
              ></v-icon>
            </template>
            <!--  -->
            <div class="d-flex align-top">
              <div class="mt-6">
                <v-card-title class="text-h4"> $37.5k </v-card-title>
                <v-card-subtitle>Total Spent</v-card-subtitle>
                <!-- card data -->

                <v-card-subtitle
                  ><div class="d-flex align-baseline">
                    <span
                      class="text-h6 font-weight-bold text-green d-flex align-baseline"
                      >+2.45%
                      <v-icon size="22" class="ms-2"
                        >mdi-check-circle-outline</v-icon
                      >
                    </span>
                    <span class="text-subtitle-2 ms-2">On Track</span>
                  </div></v-card-subtitle
                >
              </div>

              <v-card-text>
                <v-sheet color="white" class="pa-4">
                  <!-- Sparkline chart -->
                  <!-- sparkline one -->
                  <v-sparkline
                    :model-value="range"
                    color="cyan"
                    height="100"
                    stroke-linecap="round"
                    smooth
                  />
                  <!-- sparkline two -->
                  <v-sparkline
                    :model-value="range"
                    color="deep-purple-lighten-1"
                    height="100"
                    stroke-linecap="round"
                    smooth
                  />

                  <!-- Labels under sparkline -->
                  <v-divider></v-divider>
                  <div
                    class="d-flex justify-space-between mt-2 text-caption text-grey"
                  >
                    <span v-for="(month, index) in months" :key="index">{{
                      month
                    }}</span>
                  </div>
                </v-sheet>
              </v-card-text>
            </div>
          </v-card>
        </v-col>
        <!-- second -->
        <v-col cols="12" sm="12" md="6">
          <v-card class="mx-auto pa-2 rounded-lg">
            <template v-slot:prepend>
              <v-card-title class="font-weight-medium">
                Weekly Revenue</v-card-title
              >
            </template>
            <template v-slot:append>
              <v-icon
                color="deep-purple-lighten-1"
                icon="mdi-chart-bar"
                size="32"
              ></v-icon>
            </template>
            <v-card-text>
              <BarChart />
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>

      <!-- data tables -->
      <v-row>
        <!-- first -->
        <v-col cols="12" sm="12" md="6">
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
            >
              <template #item.progress="{ item }">
                <div class="d-flex align-center">
                  <v-progress-linear
                    :model-value="item.progress"
                    height="8"
                    color="deep-purple-lighten-1"
                    rounded="lg"
                  ></v-progress-linear>
                  <div class="text-caption ms-1">{{ item.progress }}%</div>
                </div>
              </template></v-data-table
            >
          </v-card>
        </v-col>
        <!-- second -->
        <v-col cols="12" sm="6" md="3">
          <v-card class="mx-auto pa-2 rounded-lg">
            <template v-slot:prepend>
              <div class="d-flex flex-column">
                <v-card-subtitle>Daily Visitors</v-card-subtitle>
                <div class="d-flex align-baseline">
                  <v-card-title class="font-weight-medium text-h4">
                    2.579</v-card-title
                  >
                  <v-card-subtitle
                    class="text-caption ms-1"
                    color="grey-lighten-2"
                  >
                    Visitors
                  </v-card-subtitle>
                </div>
              </div>
            </template>
            <template v-slot:append>
              <v-card-subtitle class="mb-12"
                ><span
                  class="text-h6 font-weight-bold text-green d-flex align-baseline"
                  >+2.45%
                </span></v-card-subtitle
              >
            </template>
            <BarChart2 />
          </v-card>
        </v-col>
        <!-- pie chart -->
        <v-col cols="12" sm="6" md="3">
          <v-card class="mx-auto pa-2 rounded-lg">
            <template v-slot:prepend>
              <v-card-title class="mb-12" color="black"
                >Your Pie Chart</v-card-title
              >
            </template>
            <template v-slot:append>
              <v-card-subtitle class="mb-12"
                ><span class="text-caption"> yearly </span></v-card-subtitle
              >
            </template>
            <v-card-text>
              <PieChart />
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
      <!-- Last section of  data tables -->
      <v-row class="mb-5">
        <!-- Complex Table -->
        <v-col cols="12" sm="12" md="6">
          <v-card class="mx-auto pa-2 rounded-lg">
            <template v-slot:prepend>
              <v-card-title class="font-weight-bold text-h5">
                Complex Table
              </v-card-title>
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
            >
              <template #item.progress="{ item }">
                <v-progress-linear
                  :model-value="item.progress"
                  height="8"
                  color="deep-purple-lighten-1"
                  rounded="lg"
                ></v-progress-linear>
              </template>
              <template #item.status="{ item }">
                <v-icon size="22" class="me-2" color="deep-purple-lighten-1">
                  mdi-check-circle-outline
                </v-icon>
                <span>{{ item.status }}</span>
              </template>
            </v-data-table>
          </v-card>
        </v-col>

        <!-- Calendar -->
        <v-col cols="12" sm="12" md="6">
          <v-date-picker
            show-adjacent-months
            color="deep-purple-lighten-1"
          ></v-date-picker>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script setup>
import BarChart from "@/components/BarChart.vue";
import BarChart2 from "@/components/BarChart2.vue";
import PieChart from "@/components/PieChart.vue";
import { color } from "chart.js/helpers";
import { ref } from "vue";

const range = [5, 10, 7, 15, 6, 12]; // Numeric values for sparkline
const months = ["SEP", "OCT", "NOV", "DEC", "JAN", "FEB"]; // Corresponding labels
const data = [
  {
    id: "1",
    icon: "mdi-chart-box-outline",
    title: "Earnings",
    subtitle: "$350.4",
  },
  {
    id: "2",
    icon: "mdi-currency-usd",
    title: "Spend this Month",
    subtitle: "$643.39",
  },
  { id: "3", icon: "mdi-cart-variant", title: "Sales", subtitle: "$574.34" },
  {
    id: "4",
    icon: "mdi-flag-outline",
    title: "Your Balance",
    subtitle: "$1,000",
  },
  {
    id: "5",
    icon: "mdi-check-circle-outline",
    title: "New Task",
    subtitle: "154",
  },
  {
    id: "6",
    icon: "mdi-file-outline",
    title: "Total Project",
    subtitle: "2935",
  },
];

const selected = ref([]);
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
const settingsSelection = ref([]);
const listItems = [
  { text: "Landing Page Design" },
  { text: "Dashboard Builder" },
  { text: "Mobile App Design" },
  { text: "Illustrations" },
  { text: "Promotional LP" },
  { text: "Landing Page Design" },
  { text: "Dashboard Builder" },
  { text: "Mobile App Design" },
  { text: "Illustrations" },
];
</script>
