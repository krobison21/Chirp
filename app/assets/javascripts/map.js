"use strict"


var map = new mapboxgl.Map({
    container: 'map',
    center: [-90, 70],
    zoom: 2
});

map.on('mousemove', function (e) {
    document.getElementById('info').innerHTML =
        // e.point is the x, y coordinates of the mousemove event relative
        // to the top-left corner of the map
        JSON.stringify(e.point) + '<br />' +
            // e.lngLat is the longitude, latitude geographical position of the event
        JSON.stringify(e.lngLat);
})


//geocoder option

var isDragging;

// Is the cursor over a point? if this
// flag is active, we listen for a mousedown event.
var isCursorOverPoint;

var coordinates = document.getElementById('coordinates');
var locationjav =  document.getElementById('sighting_location');

document.getElementById("location-div").style.display = "none ";


var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v9',
    center: [-90.1203, 29.9412],
    zoom: 15
});

var canvas = map.getCanvasContainer();

var geojson = {
    "type": "FeatureCollection",
    "features": [{
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [0, 0]
        }
    }]
};

/*var longitude = geojson["coordinates"];

window.onclick = function() {
       //when the document is finished loading, replace everything
       //between the <a ...> </a> tags with the value of splitText
   document.getElementById("location").innerHTML=longitude;
}*/ 

var geocoder = new mapboxgl.Geocoder({
    container: 'geocoder-container' // Optional. Specify a unique container for the control to be added to.
});

function mouseDown() {
    if (!isCursorOverPoint) return;

    isDragging = true;

    // Set a cursor indicator
    canvas.style.cursor = 'grab';

    // Mouse events
    map.on('mousemove', onMove);
    map.on('mouseup', onUp);
}

function onMove(e) {
    if (!isDragging) return;
    var coords = e.lngLat;

    // Set a UI indicator for dragging.
    canvas.style.cursor = 'grabbing';

    // Update the Point feature in `geojson` coordinates
    // and call setData to the source layer `point` on it.
    geojson.features[0].geometry.coordinates = [coords.lng, coords.lat];
    map.getSource('single-point').setData(geojson);

}

function onUp(e) {
    if (!isDragging){
        
        return;
    }

    var coords = e.lngLat;
    

    // Print the coordinates of where the point had
    // finished being dragged to on the map.

    coordinates.innerHTML = 'Longitude: ' + coords.lng + '<br />Latitude: ' + coords.lat;
    
    locationjav.innerHTML = coords.lng +  ', ' + coords.lat;
    
    canvas.style.cursor = '';
    isDragging = false;
    document.getElementById("location-div").style.display = "";

}


map.addControl(geocoder);

// After the map style has loaded on the page, add a source layer and default
// styling for a single point.
map.on('load', function() {
    map.addSource('single-point', {
        "type": "geojson",
        "data": {
            "type": "FeatureCollection",
            "features": []
        }
    });

    map.addLayer({
        "id": "point",
        "source": "single-point",
        "type": "circle",
        "paint": {
            "circle-radius": 10,
            "circle-color": "#007cbf"
        }
    });
    
    // If a feature is found on map movement,
    // set a flag to permit a mousedown events.
    map.on('mousemove', function(e) {
        var features = map.queryRenderedFeatures(e.point, { layers: ['point'] });

        // Change point and cursor style as a UI indicator
        // and set a flag to enable other mouse events.
        if (features.length) {
            map.setPaintProperty('point', 'circle-color', '#3bb2d0');
            canvas.style.cursor = 'move';
            isCursorOverPoint = true;
            map.dragPan.disable();
        } else {
            map.setPaintProperty('point', 'circle-color', '#3887be');
            canvas.style.cursor = '';
            isCursorOverPoint = false;
            map.dragPan.enable();
        }
    });

    // Set `true` to dispatch the event before other functions call it. This
    // is necessary for disabling the default map dragging behaviour.
    map.on('mousedown', mouseDown, true);
    

    // Listen for the `geocoder.input` event that is triggered when a user
    // makes a selection and add a symbol that matches the result.
    geocoder.on('result', function(ev) {
        map.getSource('single-point').setData(ev.result.geometry);
    });
});


$("input").keypress(function(event) {
"use strict";
if (event.keyCode == 13)
{
    event.preventDefault();
    var inputs = $(this).parents("form").eq(0).find(":input");
    var idx = inputs.index(this);
    if (idx == inputs.length - 1)
    {
        inputs[0].select()
    }
    else
    {
        inputs[idx + 1].focus();
        inputs[idx + 1].select();
    }
    return false;
}
});
