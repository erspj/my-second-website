// script.js

// Function to toggle the visibility of the stats section
function toggleStats() {
  const stats = document.getElementById('stats-info');
  if (stats.style.display === "none") {
    stats.style.display = "block";
  } else {
    stats.style.display = "none";
  }
}

// Chart.js: Malaria infections chart over the past 6 years
const ctx = document.getElementById('malariaChart').getContext('2d');
const malariaChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['2019', '2020', '2021', '2022', '2023', '2024'], // Year labels
    datasets: [{
      label: 'Malaria Infections (per 100,000 people)',
      data: [300, 270, 210, 160, 120, 90], // Sample data (number of malaria cases)
      fill: false,
      borderColor: 'rgba(0, 132, 69, 1)',
      tension: 0.1
    }]
  },
  options: {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Malaria Infections Over the Last 6 Years'
      }
    },
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});
