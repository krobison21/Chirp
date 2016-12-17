mapboxgl.accessToken = 'pk.eyJ1IjoibXBlbGljaGV0IiwiYSI6ImNpZ3doNWVvYzBzNXN2cW0zd2N5ZnBvY2YifQ.2RlTuIjDz1pLYOP4YpdKyw';

/*var map = new mapboxgl.Map({
    container: 'map2',
    style: 'mapbox://styles/mapbox/streets-v9',
    center: [-90.1203, 29.9412],
    zoom: 3
});*/



var elements = document.getElementsByClassName("locate");

var names = [];

for(var i=0; i < elements.length; i++) {
    names += elements[i].id ;
}

/*document.write(names);*/

function isFloat(val) {
    var floatRegex = /^-?\d+(?:[.,]\d*?)?$/;
    if (!floatRegex.test(val))
        return false;

    val = parseFloat(val);
    if (isNaN(val))
        return false;
    return true;
}

function isInt(val) {
    var intRegex = /^-?\d+$/;
    if (!intRegex.test(val))
        return false;

    var intVal = parseInt(val, 10);
    
    return parseFloat(val) == intVal && !isNaN(intVal);
}

var numbers = [];

for(var i=0; i < names.length; i++) {
    
    var number = names[i];
    var negative_number = names.slice(number, number+4);
    if (number === '.' || number === ' ' || number === ','){
        number === number;
        numbers += number ;
    }
     
    if ((isInt(number) || isInt(negative_number)) === true){
    numbers += number ;
    }
}

/*document.write(numbers);*/

var latlong = numbers
var coords = latlong.match(/\((-?[0-9\.]+), (-?[0-9\.]+)\)/);

var lat = coords[1];
document.write(lat);

var long = coords[2];
document.write(long);

alert('lat: ' + lat);
alert('long: ' + long);

var places = {
    "type": "FeatureCollection",
    "features": [{
        "type": "Feature",
        "properties": {
            "icon": "theatre"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-77.038659, 38.931567]
        }
    }, {
        "type": "Feature",
        "properties": {
            "icon": "theatre"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-77.003168, 38.894651]
        }
    }, {
        "type": "Feature",
        "properties": {
            "icon": "bar"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-77.090372, 38.881189]
        }
    }, {
        "type": "Feature",
        "properties": {
            "icon": "bicycle"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-77.052477, 38.943951]
        }
    }, {
        "type": "Feature",
        "properties": {
            "icon": "music"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-77.031706, 38.914581]
        }
    }, {
        "type": "Feature",
        "properties": {
            "icon": "music"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-77.020945, 38.878241]
        }
    }, {
        "type": "Feature",
        "properties": {
            "icon": "music"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-77.007481, 38.876516]
        }
    }]
};

var filterGroup = document.getElementById('filter-group');

var map = new mapboxgl.Map({
    container: 'map2',
    style: 'mapbox://styles/mapbox/light-v9',
    center: [-77.04, 38.907],
    zoom: 11.15
});

map.on('load', function() {
    // Add a GeoJSON source containing place coordinates and information.
    map.addSource("places", {
        "type": "geojson",
        "data": places
    });

    places.features.forEach(function(feature) {
        var symbol = feature.properties['icon'];
        var layerID = 'poi-' + symbol;

        // Add a layer for this symbol type if it hasn't been added already.
        if (!map.getLayer(layerID)) {
            map.addLayer({
                "id": layerID,
                "type": "symbol",
                "source": "places",
                "layout": {
                    "icon-image": symbol + "-15",
                    "icon-allow-overlap": true
                },
                "filter": ["==", "icon", symbol]
            });

            // Add checkbox and label elements for the layer.
            var input = document.createElement('input');
            input.type = 'checkbox';
            input.id = layerID;
            input.checked = true;
            filterGroup.appendChild(input);

            var label = document.createElement('label');
            label.setAttribute('for', layerID);
            label.textContent = symbol;
            filterGroup.appendChild(label);

            // When the checkbox changes, update the visibility of the layer.
            input.addEventListener('change', function(e) {
                map.setLayoutProperty(layerID, 'visibility',
                    e.target.checked ? 'visible' : 'none');
            });
        }
    });
});