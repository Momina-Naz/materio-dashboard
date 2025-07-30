<template>
  <v-col cols="12" md="12">
    <canvas ref="barChart"></canvas>
  </v-col>
</template>

<script setup>
import { ref, onMounted } from "vue";
import {
  Chart,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
} from "chart.js";

Chart.register(BarElement, CategoryScale, LinearScale, Tooltip);

const barChart = ref(null);

onMounted(() => {
  new Chart(barChart.value, {
    type: "bar",
    data: {
      labels: [0, 4, 8, 12, 16, 20, 24],
      datasets: [
        {
          data: [5, 10, 7, 12, 9, 14, 6],
          backgroundColor: "#9575CD",
          maxBarThickness: 30,
          categoryPercentage: 0.6,
          barPercentage: 0.9,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false },
        tooltip: { enabled: true },
      },
      scales: {
        x: {
          ticks: {
            color: "#F0ECF8", // optional styling
            font: { size: 12 },
          },
          grid: { display: false }, // removes vertical grid lines
        },
        y: {
          display: false, // hides Y axis and labels
          grid: { display: false },
        },
      },
    },
  });
});
</script>

<style scoped>
canvas {
  height: 310px; /* adjust height to fit layout */
}
</style>

