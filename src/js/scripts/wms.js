var mapwms = L.map('map').setView([-0.614368, -70.322637], 7);

//Mapas base
var osm = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(mapwms);
var Esri_WorldImagery = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
    attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community',
    maxZoom: 32
}).addTo(mapwms);
var Esri_WorldStreetMap = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}', {
    attribution: 'Tiles &copy; Esri &mdash; Source: Esri, DeLorme, NAVTEQ, USGS, Intermap, iPC, NRCAN, Esri Japan, METI, Esri China (Hong Kong), Esri (Thailand), TomTom, 2012'
}).addTo(mapwms);

//Capas WMS

var TerritoriosWMS = L.tileLayer.wms("http://localhost:8081/geoserver/SIGETI/wms?", {
    layers: 'TerritoriosIndígenas',
    format: 'image/png',
    transparent: true,
    attribution: "Fundación GAIA",
}).addTo(mapwms);

var ComunidadesWMS = L.tileLayer.wms("http://localhost:8081/geoserver/SIGETI/wms?", {
    layers: 'Comunidades Indígenas',
    format: 'image/png',
    transparent: true,
    attribution: "Fundación GAIA",
}).addTo(mapwms);

var RiosWMS = L.tileLayer.wms("http://localhost:8081/geoserver/SIGETI/wms?", {
    layers: 'RiosPrincipales',
    format: 'image/png',
    transparent: true,
    attribution: "Fundación GAIA",
}).addTo(mapwms);

var MunicipiosWMS = L.tileLayer.wms("http://localhost:8081/geoserver/SIGETI/wms?", {
    layers: 'Áreas no municipalizadas',
    format: 'image/png',
    transparent: true,
    attribution: "Fundación GAIA",
}).addTo(mapwms);

var LimiteWMS = L.tileLayer.wms("http://localhost:8081/geoserver/SIGETI/wms?", {
    layers: 'LimitesAmazonasGAIA',
    format: 'image/png',
    transparent: true,
    attribution: "Fundación GAIA",
}).addTo(mapwms);
var ResguardosWMS = L.tileLayer.wms("http://localhost:8081/geoserver/SIGETI/wms?", {
    layers: 'ResguardosIndigenas',
    format: 'image/png',
    transparent: true,
    attribution: "Fundación GAIA",
}).addTo(mapwms);

var RunapWMS = L.tileLayer.wms("http://localhost:8081/geoserver/SIGETI/wms?", {
    layers: 'RUNAP',
    format: 'image/png',
    transparent: true,
    attribution: "Fundación GAIA",
}).addTo(mapwms);

var maps = {
    "Worldimage": Esri_WorldImagery,
    "OpenStreetMaps": osm,
    "Esri World Street": Esri_WorldStreetMap,
};

var capas = {
    "Límite Amazonas GAIA": LimiteWMS,
    "Áreas no municipalizadas": MunicipiosWMS,
    "Territorios": TerritoriosWMS,
    "Ríos Principales": RiosWMS,
    "Comunidades": ComunidadesWMS,

};


L.control.layers(maps, capas, {
    position: 'topright',
    collapsed: true,
    sortLayers: true
}).addTo(mapwms);

L.control.scale({
    maxWidth: 250,
    imperial: false,
}).addTo(mapwms);

// MINIMAPA
// Agregar minimapa y su mapa base
var carto_light = L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png',
    { attribution: '©OpenStreetMap, ©CartoDB', subdomains: 'abcd', maxZoom: 24 });
// Agregar plugin MiniMap
var minimap = new L.Control.MiniMap(carto_light,
    {
        toggleDisplay: true,
        minimized: false,
        position: "bottomright"
    }).addTo(mapwms);