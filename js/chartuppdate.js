export function updateChart(attempts) {
  let myChart; // a variable to store the chart instance
  const x = attempts.map((attempt, index) => index + 1);
  const wpm = attempts.map((attempt) => attempt.wpm);
  const accuracy = attempts.map((attempt) => parseFloat(attempt.accuracy));
  const ctx = document.getElementById('myChart').getContext('2d');

  if (myChart) {
    // If the chart instance already exists, the data will be uppdated 
    myChart.data.labels = x;
    myChart.data.datasets[0].data = wpm;
    myChart.data.datasets[1].data = accuracy;
    myChart.update(); // Update the chart
  } else {
    // If the chart instance doesn't exist, the new Chart will be created
    myChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: x,
        datasets: [
          {
            label: 'WPM',
            data: wpm,
            backgroundColor: 'rgba(142, 124, 195, 0.5)',
            borderColor: 'rgb(142, 124, 195)',
            borderWidth: 1,
          },
          {
            label: 'Accuracy',
            data: accuracy,
            backgroundColor: 'rgba(255, 217, 102, 0.5)',
            borderColor: 'rgb(255, 217, 102)',
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
            title: {
              display: true,
              text: 'Accuracy',
            },
          },
          y2: {
            beginAtZero: true,
            position: 'right',
            title: {
              display: true,
              text: 'WPM',
            },
            suggestedMin: 0,
            suggestedMax: 100,
          },
        },
        plugins: {
          legend: {
            position: 'top',
          },
        },
      },
    });
  }
}