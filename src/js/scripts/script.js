var mymap = L.map('map').setView([-0.614368, -70.322637], 8);

mymap.createPane('pane_1').style.zIndex = 499; // Comunidades
mymap.createPane('pane_2').style.zIndex = 498; // Rios
mymap.createPane('pane_3').style.zIndex = 496; // Territorios
mymap.createPane('pane_4').style.zIndex = 495; // Resguardos
mymap.createPane('pane_5').style.zIndex = 494; // Runap
mymap.createPane('pane_6').style.zIndex = 493; // AATIS
mymap.createPane('pane_7').style.zIndex = 492; // Municipios
mymap.createPane('pane_8').style.zIndex = 491; // Amazonia
mymap.createPane('pane_9').style.zIndex = 490; // Departamentos
mymap.createPane('pane_10').style.zIndex = 489; //Paises

//Mapa base inicial
var OpenStreetMap = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(mymap);

// COMPLEMENTO DEL SELECT PARA LA UBICACIÓN DE LOS TERRITORIOS 
document.getElementById('select-location').addEventListener('change', function (e) {
    let coords = e.target.value.split(",");
    mymap.flyTo(coords, 9).sort();
});

// MAPAS BASE
var OpenTopoMap = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
    maxZoom: 17,
    attribution: 'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
});
var Esri_WorldImagery = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
    attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community',
    maxZoom: 32,
    minZoom: 5,
});

//CAPAS EN FORMATO GEOJSON
var ComunidadesIndigenas = L.geoJson(comunidadGJ, {
    pointToLayer: function (geoJsonPoint, latlng) { return L.circleMarker(latlng, { pane: 'pane_1' }) },
    style: {
        opacity: 1.0,
        fillOpacity: 1.0,
        radius: 3.50,
        weight: 1.0,
        color: 'rgba(0, 0, 0, 1.00)',
        fillColor: 'rgba(255, 255, 255, 0.00)',
    },
    onEachFeature: function (feature, layer) {
        layer.on({
            click: function (e) {
                var contenidoPopup =
                    '<strong>COMUNIDAD INDÍGENA</strong><br/>' +
                    '<b>Nombre comunidad:</b>&ensp;' + feature.properties['NOMB_CNIDA'] + '<br/>' +
                    '<b>Territorio:</b>&ensp;' + feature.properties['Abrev_TI'] + '<br/>' +
                    '<b>Ambito:</b>&ensp;' + feature.properties['AMBITO_TI'] + '<br/>' +
                    '<b>AATI:</b>&ensp;' + feature.properties['AATI_TI'] + '<br/>' +
                    '<b>Número de familias:</b>&ensp;' + feature.properties['FAMILIAS'] + '<br/>' +
                    '<b>Población:</b>&ensp;' + feature.properties['PERSONAS'] + '<br/>' +
                    '<b>Mujeres:</b>&ensp;' + feature.properties['MUJERES'] + '<br/>' +
                    '<b>Hombres:</b>&ensp;' + feature.properties['HOMBRES'] + '<br/>'
                layer.bindPopup(contenidoPopup)
            }
        });
    }
}).addTo(mymap);

var SitiosSagrados = L.geoJSON(SitiosSagrados, {
    pointToLayer: function (geoJsonPoint, latlng) { return L.circleMarker(latlng, { pane: 'pane_1' }) },
    style: {
        opacity: 1.0,
        fillOpacity: 1.0,
        radius: 2.5,
        weight: 1.0,
        color: 'rgb(0, 0, 0)',
        fillColor: 'rgb(206, 141, 42)',
    },
    onEachFeature: function (feature, layer) {
        layer.on({
            mouseOver: function (e) {
                var contenidoPopup =
                    '<b>Sitio Sagrado</b><br/>' +
                    '<b>Nombre:</b>&ensp;' + feature.properties['Nomb_Pri_1'] + '<br/>' +
                    '<b>Tipo:</b>&ensp;' + feature.properties['Sit_TipObv'] + '<br/>'
                layer.bindPopup(contenidoPopup)
            }
        });
    }
});
var TerritoriosIndigenas = L.geoJson(territoriosGJ, {
    pane: 'pane_3',
    style: function (feature) {
        if (feature.properties["id"] == '14') {
            return {//Arica
                opacity: 1.0,
                fillOpacity: 0.5,
                weight: 1.25,
                color: 'rgba(125, 125, 125, 1.00)',
                fillColor: 'rgba(201, 217, 121, 1.00)'
            }
        } else if (feature.properties["id"] == '13') {
            return {//PANÍ
                opacity: 1.0,
                fillOpacity: 0.5,
                weight: 1.25,
                color: 'rgba(125, 125, 125, 1.00)',
                fillColor: 'rgba(255, 232, 194, 1.00)'
            }
        } else if (feature.properties["id"] == '3') {
            return {//Medio Río Guaínia
                opacity: 1.0,
                fillOpacity: 0.5,
                weight: 1.25,
                color: 'rgba(125, 125, 125, 1.00)',
                fillColor: 'rgba(177, 139, 180, 1.00)'
            }
        } else if (feature.properties["id"] == '6') {
            return {//Río TIquié
                opacity: 1.0,
                fillOpacity: 0.5,
                weight: 1.25,
                color: 'rgba(125, 125, 125, 1.00)',
                fillColor: 'rgba(236, 236, 157, 1.00)'
            }
        } else if (feature.properties["id"] == '7') {
            return {//Pirá Paraná
                opacity: 1.0,
                fillOpacity: 0.5,
                weight: 1.25,
                color: 'rgba(125, 125, 125, 1.00)',
                fillColor: 'rgba(213, 145, 150, 1.00)'
            }
        } else if (feature.properties["id"] == '9') {
            return {//Mirití Paraná
                opacity: 1.0,
                fillOpacity: 0.5,
                weight: 1.25,
                color: 'rgba(125, 125, 125, 1.00)',
                fillColor: 'rgba(187, 175, 123, 1.00)'
            }
        } else if (feature.properties["id"] == '1') {
            return {//Ríos Isana y Surubí
                opacity: 1.0,
                fillOpacity: 0.5,
                weight: 1.25,
                color: 'rgba(125, 125, 125, 1.00)',
                fillColor: 'rgba(217, 181, 232, 1.00)'
            }
        } else if (feature.properties["id"] == '12') {
            return {//Bajo Río Caquetá - Amazonas
                opacity: 1.0,
                fillOpacity: 0.5,
                weight: 1.25,
                color: 'rgba(125, 125, 125, 1.00)',
                fillColor: 'rgba(236, 169, 138, 1.00)'
            }
        } else if (feature.properties["id"] == '11') {
            return {//UITIBOC
                opacity: 1.0,
                fillOpacity: 0.5,
                weight: 1.25,
                color: 'rgba(125, 125, 125, 1.00)',
                fillColor: 'rgba(76, 133, 180, 1.00)'
            }
        } else if (feature.properties["id"] == '10') {
            return {//CIMTAR
                opacity: 1.0,
                fillOpacity: 0.5,
                weight: 1.25,
                color: 'rgba(125, 125, 125, 1.00)',
                fillColor: 'rgba(135, 135, 126, 1.00)'
            }
        } else if (feature.properties["id"] == '4') {
            return {//Bajo Río Guaínia
                opacity: 1.0,
                fillOpacity: 0.5,
                weight: 1.25,
                color: 'rgba(125, 125, 125, 1.00)',
                fillColor: 'rgba(140, 188, 185, 1.00)'
            }
        } else if (feature.properties["id"] == '5') {
            return {//Atabapo - Inirída
                opacity: 1.0,
                fillOpacity: 0.5,
                weight: 1.25,
                color: 'rgba(125, 125, 125, 1.00)',
                fillColor: 'rgba(40, 179, 204, 1.00)'
            }
        } else if (feature.properties["Aid"] == '2') {
            return {//Alto Río Guainía
                opacity: 1.0,
                fillOpacity: 0.5,
                weight: 1.25,
                color: 'rgba(125, 125, 125, 1.00)',
                fillColor: 'rgba(45, 190, 185, 1.00)'
            }
        } else if (feature.properties["id"] == '8') {
            return { //Yaigojé Apaporis
                opacity: 1,
                fillOpacity: 0.5,
                weight: 1.25,
                color: 'rgba(125, 125, 125, 1.00)',
                fillColor: 'rgba(152, 193, 130, 1.00)'
            }
        } else {
            return {
                opacity: 1.0,
                fillOpacity: 0.5,
                weight: 1.25,
                color: 'rgba(125, 125, 125, 1.00)',
                fillColor: 'rgba(83, 201, 32, 1.00)'
            }
        }
    },
    onEachFeature: function (feature, layer) {
        layer.on({ click: clickedFeature });
        layer.bindPopup(function (layer) {
            return '<b>TERRITORIOS INDÍGENAS</b><br/>' +
                '<b>ID Territorio:</b>&ensp;' + feature.properties['ID_TI'] + '<br/>' +
                '<b>Abreviatura:</b>&ensp;' + feature.properties['ABREV_TI_1'] + '<br/>' +
                '<b>Nombre Territorio:</b>&ensp;' + feature.properties['NOMBRE_TI'] + '<br/>' +
                '<b>Ambito:</b>&ensp;' + feature.properties['AMBITO_TI'] + '<br/>' +
                '<b>Río TI:</b>&ensp;' + feature.properties['RIO_TI'] + '<br/>'
        });
    }
}).addTo(mymap);

var Rios = L.geoJSON(RiosPr, {
    pane: 'pane_2',
    style: {
        opacity: 1.0,
        fillOpacity: 1.0,
        weight: 1.75,
        color: 'rgba(100, 152, 210, 1.00)'
    },
});

var ResguardosIndigenas = L.geoJSON(ResguardosIndigenasGJ, {
    pane: 'pane_9',
    style: {
        opacity: 0.6,
        fillOpacity: 0.7,
        weight: 2.25,
        color: 'rgba(206, 141, 42, 1.00)',
        fillColor: 'rgba(235, 186, 118, 1.00)'
    },
});

var RUNAP = L.geoJSON(RUNAPGJ, {
    pane: 'pane_5',
    attribution: "2023 © Parques Nacionales Naturales de Colombia",
    style: {
        opacity: 1.0,
        fillOpacity: 0.7,
        weight: 1.75,
        color: 'rgba(121, 136, 66, 1.00)',
        fillColor: 'rgba(140, 198, 121, 1.00)'
    },
});

var AATIS = L.geoJSON(AATISGJ, {
    pane: 'pane_6',
    style: {
        opacity: 1.0,
        fillOpacity: 0.7,
        weight: 1.3,
        color: 'rgba(111, 56, 115, 1.00)',
        fillColor: 'rgba(191, 144, 193, 1.00)'
    },
    onEachFeature: function (feature, layer) {
        layer.on({
            click: function (e) {
                var contenidoPopup =
                    '<strong>AATI</strong><br/>' +
                    '<b>Nombre AATI:</b>&ensp;' + feature.properties['AATI_NOMB'] + '<br/>' +
                    '<b>Abreviatura AATI:</b>&ensp;' + feature.properties['AATI_ABREV'] + '<br/>'
                layer.bindPopup(contenidoPopup)
            },
        });
    }
});

var MunicipiosNM = L.geoJSON(MunicipiosNoMunicipalizados, {
    pane: 'pane_7',
    style: {
        opacity: 1.0,
        fillOpacity: 0.7,
        weight: 1.3,
        color: 'rgba(121, 136, 66, 1.00)',
        fillColor: 'rgba(230, 236, 160, 1.00)'
    },
});

var LimiteAmazonasGAIA = L.geoJSON(LimiteAmazonasGAIAGJ, {
    pane: 'pane_8',
    style: {
        opacity: 1,
        fillOpacity: 0.3,
        weight: 2.4,
        color: 'rgba(82, 118, 31, 1.00)',
        //fillColor: 'rgba(165, 182, 77, 1.00)'
    },
});

var Departamentos = L.geoJson(departamentos, {
    pane: 'pane_9',
    attribution: 'DEPARTAMENTO ADMINISTRATIVO NACIONAL DE ESTADÍSTICA - DANE ',
    style: {
        opacity: 1.0,
        fillOpacity: 0.3,
        weight: 1,
        color: 'rgba(0, 0, 0, 1.00)',
        fillColor: 'rgba(196, 60, 57, 0.00)'
    }
});

var Paises = L.geoJSON(paises, {
    pane: 'pane_10',
    style: function (feature) {
        if (feature.properties["PAIS"] == 'BOLIVIA') {
            return {
                opacity: 0.5,
                fillOpacity: 0.2,
                weight: 3.0,
                color: 'rgba(0, 0, 0, 1.00)',
                fillColor: 'rgba(236, 209, 86, 1.00)'
            }
        } else if (feature.properties["PAIS"] == 'BRASIL') {
            return {
                opacity: 0.5,
                fillOpacity: 0.2,
                weight: 3.0,
                color: 'rgba(0, 0, 0, 1.00)',
                fillColor: 'rgba(22, 54, 213, 1.00)'
            }
        } else if (feature.properties["PAIS"] == 'COLOMBIA') {
            return {
                opacity: 0.5,
                fillOpacity: 0.2,
                weight: 3.0,
                color: 'rgba(0, 0, 0, 1.00)',
                fillColor: 'rgba(26, 206, 32, 1.00)'
            }
        } else if (feature.properties["PAIS"] == 'ECUADOR') {
            return {
                opacity: 0.5,
                fillOpacity: 0.2,
                weight: 3.0,
                color: 'rgba(0, 0, 0, 1.00)',
                fillColor: 'rgba(168, 128, 220, 1.00)'
            }
        } else if (feature.properties["PAIS"] == 'GUYANA') {
            return {
                opacity: 0.5,
                fillOpacity: 0.2,
                weight: 3.0,
                color: 'rgba(0, 0, 0, 1.00)',
                fillColor: 'rgba(187, 237, 116, 1.00)'
            }
        } else if (feature.properties["PAIS"] == 'GUYANA FRANCESA') {
            return {
                opacity: 0.5,
                fillOpacity: 0.2,
                weight: 3.0,
                color: 'rgba(0, 0, 0, 1.00)',
                fillColor: 'rgba(234, 128, 98, 1.00)'
            }
        } else if (feature.properties["PAIS"] == 'PERÚ') {
            return {
                opacity: 0.5,
                fillOpacity: 0.2,
                weight: 3.0,
                color: 'rgba(0, 0, 0, 1.00)',
                fillColor: 'rgba(233, 63, 128, 1.00)'
            }
        } else if (feature.properties["PAIS"] == 'SURINAM') {
            return {
                opacity: 0.5,
                fillOpacity: 0.2,
                weight: 3.0,
                color: 'rgba(0, 0, 0, 1.00)',
                fillColor: 'rgba(15, 181, 231, 1.00)'
            }
        } else if (feature.properties["PAIS"] == 'VENEZUELA') {
            return {
                opacity: 0.5,
                fillOpacity: 0.2,
                weight: 3.0,
                color: 'rgba(0, 0, 0, 1.00)',
                fillColor: 'rgba(215, 113, 212, 1.00)'
            }
        } else {
            return {
                opacity: 0.5,
                fillOpacity: 0.2,
                weight: 3.0,
                color: 'rgba(0, 0, 0, 1.00)',
                fillColor: 'rgba(46, 200, 144, 1.00)'
            }
        }
    },
});

//Capas wms
var ComunidadesWMS = L.tileLayer.wms("http://localhost:8081/geoserver/SIGETI/wms?", {
    layers: 'Comunidades Indígenas',
    format: 'image/png',
    transparent: true
}).addTo(mymap);

/*var RiosWMS = L.tileLayer.wms("http://localhost:8081/geoserver/SIGETI/wms?", {

    layers: 'RiosPrincipales',
    format: 'image/png',
    transparent: true,
    attribution: "Fundación GAIA",
});

var MunicipiosWMS = L.tileLayer.wms("http://localhost:8081/geoserver/SIGETI/wms?", {
    layers: 'AreasNoMunicipalizadas',
    format: 'image/png',
    transparent: true,
    attribution: "Fundación GAIA",
});

var LimiteWMS = L.tileLayer.wms("http://localhost:8081/geoserver/SIGETI/wms?", {
    layers: 'LimitesAmazonasGAIA',
    format: 'image/png',
    transparent: true,
    attribution: "Fundación GAIA",
}).addTo(mymap);

var ResguardosWMS = L.tileLayer.wms("http://localhost:8081/geoserver/SIGETI/wms?", {
    layers: 'ResguardosIndigenas',
    format: 'image/png',
    transparent: true,
    attribution: "Fundación GAIA",
});

var RunapWMS = L.tileLayer.wms("http://localhost:8081/geoserver/SIGETI/wms?", {
    layers: 'RUNAP',
    format: 'image/png',
    transparent: true,
    attribution: "2023 © Parques Nacionales Naturales de Colombia",
});

var AatisWMS = L.tileLayer.wms("http://localhost:8081/geoserver/SIGETI/wms?", {
    layers: 'AATIS',
    format: 'image/png',
    transparent: true,
    attribution: "Fundación GAIA",
});

var DepartamentosWMS = L.tileLayer.wms("http://localhost:8081/geoserver/SIGETI/wms?", {
    layers: 'Departamentos',
    format: 'image/png',
    transparent: true,
    attribution: "Fundación GAIA",
});

var PaisesWMS = L.tileLayer.wms("http://localhost:8081/geoserver/SIGETI/wms?", {
    layers: 'PaisesAmazonicos',
    format: 'image/png',
    transparent: true,
    attribution: "Fundación GAIA",
});*/
//Función que al dar click en un GeoJson, se traslada hacía las cordenadas del punto central.
function clickedFeature(e) {
    var feature = e.target;
    if (feature.feature.geometry.type == 'Point') {
        mymap.setView(feature.getLatLng(), 16);
    } else {
        mymap.fitBounds(feature.getBounds());
    }
};

var maps = {
    "Mapas base": {
        "Worldimage": Esri_WorldImagery,
        "TopoMap": OpenTopoMap,
        "OpenStreetMap": OpenStreetMap,
    }
};

var capas = {
    "Información geográfica": {
        "Países": Paises,
        "RUNAP": RUNAP,
        "Límite Amazonas": LimiteAmazonasGAIA,
        "Áreas no municipalizadas": MunicipiosNM,
        "AATIS": AATIS,
        "Resguardos Indígenas": ResguardosIndigenas,
        "Departamentos": Departamentos,
        "Territorios": TerritoriosIndigenas,
        "Ríos Principales": Rios,
        "Comunidades": ComunidadesIndigenas,
        "Comunidades": ComunidadesWMS,
    },
    "Yaigojé Apaporis": {
        "Sitios Sagrados": SitiosSagrados,
    }

};

// MINIMAPA
// Agregar minimapa y su mapa base
var carto_light = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png',
    {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        subdomains: 'abcd',
        maxZoom: 24,
    });

// Agregar plugin MiniMap
var minimap = new L.Control.MiniMap(carto_light,
    {
        toggleDisplay: true,
        minimized: false,
        position: "bottomright",
        title: "Mini Mapa",
        zoomLevelOffset: -3,
        zoomAnimation: true,

    }).addTo(mymap);

mymap.addControl(new L.Control.CategorizedLayers(maps, capas, {
    position: 'topright',
    collapsed: true,
    sortLayers: true
}));

L.control.scalefactor({
    updateWhenIdle: false,
}).addTo(mymap);

L.control.scale({
    maxWidth: 250,
    imperial: false
}).addTo(mymap);

//Impresión
L.control.browserPrint({
    position: 'topleft',
    title: 'Imprime tu mapa',
    documentTitle: 'Map printed using leaflet.browser.print plugin',
}).addTo(mymap);







