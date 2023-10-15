export function updateChart(arg1) {
  const attempts = arg1;
  const x = attempts.map((attempt, index) => index + 1); // Attempt numbers starting from 1
  const wpm = attempts.map((attempt) => attempt.wpm);
  const accuracy = attempts.map((attempt) => parseFloat(attempt.accuracy)); //Chart.js expects numerical data for line charts, not str
  const ctx = document.getElementById('myChart').getContext('2d');

  const data = {
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
  };

  const options = {
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
        suggestedMin: 0,  // Set the minimum value to 0
        suggestedMax: 100, // Set the maximum value to 100
      },
    },
    plugins: {
      legend: {
        position: 'top',
      },
    },
  };
  Chart.defaults.font.size = 16;
  new Chart(ctx, {
    type: 'line',
    data: data,
    options: options,
    
  });
}