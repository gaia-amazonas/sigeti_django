
var labels = comunidadGJ.jsonarray.map(function (e) {
        return e.properties.NOMB_TI
});

var personas = comunidadGJ.jsonarray.map(function (e) {
    return e.properties.PERSONAS;
});

var mujeres = comunidadGJ.jsonarray.map(function (e) {
    return e.properties.MUJERES;
});
var hombres = comunidadGJ.jsonarray.map(function (e) {
    return e.properties.HOMBRES;
});
const ctx = document.getElementById('canvaHM-macro');
new Chart(ctx, {
    type: 'bar',
    data: {
        labels: labels,
        datasets: [{
            label: 'Número de habitantes',
            data: personas,
            borderWidth: 1,
            backgroundColor: ['rgba(140, 188, 185, 0.7',]
        },
        {
            label: 'Número de hombres',
            data: hombres,
            borderWidth: 1,
            backgroundColor: ['rgba(60, 131, 140, 0.7',]
        },
        {
            label: 'Número de mujeres',
            data: mujeres,
            borderWidth: 1,
            backgroundColor: ['rgba(236, 170, 148, 0.7',]
        }]
    },
    options: {
        //indexAxis: 'y',
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


