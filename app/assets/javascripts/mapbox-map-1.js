mapboxgl.accessToken = 'pk.eyJ1IjoibXBlbGljaGV0IiwiYSI6ImNpZ3doNWVvYzBzNXN2cW0zd2N5ZnBvY2YifQ.2RlTuIjDz1pLYOP4YpdKyw';


var map = new mapboxgl.Map({
    container: 'map2',
    style: 'mapbox://styles/mapbox/streets-v9',
    center: [-90.1203, 29.9412],
    zoom: 11.15
});

var elements = document.getElementsByClassName("locate");

var names = [];

for(var i=0; i < elements.length; i++) {
    names += elements[i].id ;
}

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

var numbers = '';

for(var i=0; i < names.length; i++) {
    
    var number = names[i];
    var negative_number = names.slice(number, number+4);
    if (number === '.' || number === ' ' || number === ',' || number === '-'){
        number === number;
        numbers += number ;
    }
     
    if ((isInt(number) || isInt(negative_number)) === true){
    numbers += number ;
    }
}

/*This separates the latititude and longitude coordinates in the numbers array*/
numbers = numbers.replace(/^\s*?(-?[0-9]+\.?[0-9]+?)\s*,\s*(-?[0-9]+\.?[0-9]+?)\s*$/).split(/[\s,]+/);

for(var i=1; i < numbers.length; i++) {
    parseFloat(numbers[i]);
}

/*document.write(numbers[1]);
document.write(numbers[2]);
document.write(numbers[3]);*/
document.write(numbers[4]);


var geojson = {
    "type": "FeatureCollection",
    "features": [
        {
            "type": "Feature",
            "properties": {
                "message": "Foo",
                "iconSize": [100, 100]
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    numbers[3],
                    numbers[4]
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "message": "Bar",
                "iconSize": [50, 50]
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -61.2158203125,
                    -15.97189158092897
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "message": "Baz",
                "iconSize": [40, 40]
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -63.29223632812499,
                    -18.28151823530889
                ]
            }
        }
    ]
};

geojson.features.forEach(function(marker) {
    // create a DOM element for the marker
    var el = document.createElement('div');
    el.className = 'marker';
    el.style.backgroundImage = 'url(http://www.clker.com/cliparts/3/e/2/9/1194985418834879623uccello_profilo_01_archi_01.svg.med.png)'
    http://www.clker.com/cliparts/3/e/2/9/1194985418834879623uccello_profilo_01_archi_01.svg.med.png
    el.style.width = marker.properties.iconSize[0] + 'px';
    el.style.height = marker.properties.iconSize[1] + 'px';

    el.addEventListener('click', function() {
        window.alert(marker.properties.message);
    });

    // add marker to map
    new mapboxgl.Marker(el, {offset: [-marker.properties.iconSize[0] / 7, -marker.properties.iconSize[1] / 7]})
        .setLngLat(marker.geometry.coordinates)
        .addTo(map);
});



/*var filterGroup = document.getElementById('filter-group');




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
                    "icon-allow-overlap": false
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
});*/