var mymap2 = L.map('map2').setView([1.2588085492800425, -70.23338287165312], 5);

var osm = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(mymap2);

var OpenTopoMap = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
    maxZoom: 17,
    attribution: 'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
});

var Esri_WorldImagery = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
    attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
});
/*var mineria = L.tilelayer.wms("https://geo2.socioambiental.org/raisg/services/raisg/raisg_mineria/MapServer/WMSServer?", {
    layers: "0",
    format: 'image/png',
    transparent: true
});*/

var territorios = L.tileLayer.wms("https://geo2.socioambiental.org/raisg/services/raisg/raisg_tis/MapServer/WMSServer?", {
    layers: '1',
    format: 'image/png',
    transparent: true,
    attribution: "RAISG",
});

var deforestacion = L.tileLayer.wms("https://geo2.socioambiental.org/raisg/services/raisg/raisg_deforestacion/MapServer/WMSServer?", {
    layers: '0',
    layers: '1',
    layers: "2",
    format: 'image/png',
    transparent: true,
    attribution: 'RAISG',
});

var vias = L.tileLayer.wms("https://geo2.socioambiental.org/raisg/services/raisg/raisg_vias/MapServer/WMSServer?", {
    layers: '0',
    layers: '1',
    format: 'image/png',
    transparent: true,
    attribution: "RAISG",
});

var PaisesWMS = L.tileLayer.wms("http://localhost:8081/geoserver/SIGETI/wms?", {
    layers: 'PaisesAmazonicos',
    format: 'image/png',
    transparent: true
});

var maps = {
    "OpenStreetMaps": osm,
    "OpentoMap": OpenTopoMap,
    "Worldimage": Esri_WorldImagery
};

var capaswms = {
    "Deforestación": deforestacion,
    "Paises": PaisesWMS,
    "Territorios": territorios,
    "Vias": vias,
};

L.control.layers(maps, capaswms).addTo(mymap2);
L.control.scale(1000, 1000).addTo(mymap2);
//L.Control.BigImage({ position: 'topright', title: 'Descargar imagen' }).addTo(mymap);