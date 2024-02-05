// Function to initialize Google Map
function initMap() {
    var mapOptions = {
        zoom: 15,
        center: {lat: 52.376297, lng: 4.913034}
    };
    var map = new google.maps.Map(document.getElementById('map'), mapOptions);

    var trafficLayer = new google.maps.TrafficLayer();
    trafficLayer.setMap(map);
}

// Initialization code for HERE Map
function initHereMap() {
    const platform = new H.service.Platform({
        apikey: 'pcn3RhIBA4_ZWGumeB5vpTYHMpbsJyX3_izMmyPPwQ8'
    });
    const defaultLayers = platform.createDefaultLayers();

    const hereMap = new H.Map(
        document.getElementById('mapContainer'),
        defaultLayers.vector.normal.map,
        {
            center: { lat: 52.376297, lng: 4.913034 },
            zoom: 15
        }
    );

    const behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(hereMap));

    hereMap.addLayer(defaultLayers.vector.traffic.map);
}

// Ensure the HERE Map is initialized only after the page has loaded
document.addEventListener('DOMContentLoaded', function() {
    initHereMap();
});
