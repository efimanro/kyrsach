document.addEventListener("DOMContentLoaded", () => {
    const ctx = document.getElementById('militaryChart').getContext('2d');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Танки', 'Літаки', 'Кораблі', 'Солдати'],
            datasets: [{
                label: 'Кількість',
                data: [2000, 350, 25, 1000000],
                backgroundColor: ['#0078d4', '#00a2ff', '#00e5ff', '#00509e']
            }]
        },
        options: {
            scales: {
                y: { beginAtZero: true }
            }
        }
    });
});
