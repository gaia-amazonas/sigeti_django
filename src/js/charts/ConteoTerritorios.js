var labels = ConteoGTerritorios.jsonarray.map(function (e) {
    return e.territorio;
});
var personas = ConteoGTerritorios.jsonarray.map(function (e) {
    return e.numero_personas;
});
const ctx = document.getElementById('canvas-apaporis');
new Chart(ctx, {
    type: 'bar',
    data: {
        labels: labels,
        datasets: [{
            label: 'Número de habitantes',
            data: personas,
            borderWidth: 1,
            backgroundColor: ['rgba(140, 188, 185, 0.7',

            ]
        }]
    },
    options: {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'Número de habitantes por territorio',
                padding: {
                    top: 10,
                    bottom: 30,

                }
            }
        },
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
ctx.width = 500;


