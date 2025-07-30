<template>
  <div class="text-center">
    <Pie :data="chartData" :options="chartOptions" />

    <!-- Custom Legends -->
    <div class="mt-8 d-flex flex-column ga-5 justify-center gap-4">
      <div class="d-flex align-center">
        <span class="legend-dot" :style="{ backgroundColor: cyan }"></span>
        <span class="ms-2">Your Files</span>
      </div>
      <div class="d-flex align-center">
        <span
          class="legend-dot"
          :style="{ backgroundColor: deepPurple }"
        ></span>
        <span class="ms-2">Your System</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Pie } from "vue-chartjs";
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement } from "chart.js";

ChartJS.register(Title, Tooltip, Legend, ArcElement);

// Vuetify theme colors
const cyan = "#00bcd4";
const deepPurple = "#9575CD"; // Deep purple lighten-1
const empty = "#e0e0e0"; // Light gray for "empty" slice

const chartData = {
  labels: ["Your Files", "Your System", ""],
  datasets: [
    {
      data: [40, 30, 30], // 30% empty
      backgroundColor: [cyan, deepPurple, empty],
      borderWidth: 0,
    },
  ],
};

const chartOptions = {
  responsive: true,
  cutout: "0%", // Full pie
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      callbacks: {
        label: function (tooltipItem) {
          const value = chartData.labels[tooltipItem.dataIndex];
          return value
            ? `${value}: ${chartData.datasets[0].data[tooltipItem.dataIndex]}%`
            : "";
        },
      },
    },
  },
};
</script>

<style scoped>
.legend-dot {
  width: 16px;
  height: 16px;
  border-radius: 50%;
  display: inline-block;
}
</style>
