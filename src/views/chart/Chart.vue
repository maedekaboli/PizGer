<script setup >
import { ref } from 'vue'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Pie } from 'vue-chartjs'
ChartJS.register(ArcElement, Tooltip, Legend)

const chartData = ref({
    labels: ['Pizza', 'Burger'],
    datasets: [{
        data: [40, 20], backgroundColor: ['#41B883', '#E46651'], borderWidth: '5', hoverBorderWidth: '0'
    }]
})
const options = ref({
    responsive: true,
    maintainAspectRatio: false
})


</script>

<template>
    <v-col cols="12">
        <v-card>
            <Pie id="my-chart-id" :options="options" :data="chartData" />
        </v-card>
    </v-col>
</template>