<template>
  <div class="chart-wrapper">
    <Bar :data="chartData" :options="chartOptions" />
  </div>
</template>

<script setup>
import { Bar } from "vue-chartjs";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
);

const chartData = {
  labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
  datasets: [
    {
      label: "Actual",
      backgroundColor: "#9575CD", // purple
      data: [400, 600, 550, 700],
      borderRadius: 6,
      maxBarThickness: 40,
    },
    {
      label: "Target",
      backgroundColor: "#00BCD4", // cyan
      data: [500, 650, 600, 750],
      borderRadius: 6,
      maxBarThickness: 40,
    },
  ],
};

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Weekly Performance Chart",
    },
  },
  scales: {
    y: {
      beginAtZero: true,
      title: {
        display: true,
        text: "Value",
      },
    },
    x: {
      title: {
        display: true,
        text: "Weeks",
      },
    },
  },
};
</script>

<style scoped>
.chart-wrapper {
  max-width: 700px;
  margin: auto;
}
canvas {
  height: 300px !important;
}
</style>
