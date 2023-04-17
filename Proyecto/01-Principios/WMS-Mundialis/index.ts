import { Map, tileLayer } from 'leaflet';

const map = new Map('map').setView([9.9983, -84.117], 13);

tileLayer.wms("http://ows.mundialis.de/services/service?", {
    layers: 'TOPO-OSM-WMS',
    format: 'image/png',
    transparent: true,
    attribution: "© OpenStreetMap contributions"
}).addTo(map);