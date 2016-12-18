mapboxgl.accessToken = 'pk.eyJ1IjoibXBlbGljaGV0IiwiYSI6ImNpZ3doNWVvYzBzNXN2cW0zd2N5ZnBvY2YifQ.2RlTuIjDz1pLYOP4YpdKyw';


var map = new mapboxgl.Map({
    container: 'map2',
    style: 'mapbox://styles/mapbox/streets-v9',
    center: [-90.1203, 29.9412],
    zoom: 15
});



map.addControl(new mapboxgl.NavigationControl());

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

var iconSize =  [60,60];

var geojson = {
    "type": "FeatureCollection",
    "features": [
        {
            "type": "Feature",
            "properties": {
                "message": "<strong>Maket Mount Pleasant</strong>",
                "iconSize":iconSize
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    numbers[1],
                    numbers[2]
                ],
                
            },

        },
        {
            "type": "Feature",
            "properties": {
                "message": "Foo",
                "iconSize": iconSize
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
                "message": "Foo",
                "iconSize": iconSize
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    numbers[5],
                    numbers[6]
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "message": "Foo",
                "iconSize": iconSize
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    numbers[7],
                    numbers[8]
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "message": "Foo",
                "iconSize": iconSize
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    numbers[9],
                    numbers[10]
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "message": "Foo",
                "iconSize": iconSize
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    numbers[11],
                    numbers[12]
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "message": "Foo",
                "iconSize": iconSize
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    numbers[13],
                    numbers[14]
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "message": "Foo",
                "iconSize":iconSize
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    numbers[15],
                    numbers[16]
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "message": "Foo",
                "iconSize": iconSize
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    numbers[17],
                    numbers[18]
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "message": "Foo",
                "iconSize": iconSize
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    numbers[19],
                    numbers[20]
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "message": "Foo",
                "iconSize": iconSize
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    numbers[21],
                    numbers[22]
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "message": "Foo",
                "iconSize": iconSize
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    numbers[23],
                    numbers[24]
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "message": "Foo",
                "iconSize": iconSize
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    numbers[25],
                    numbers[26]
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "message": "Foo",
                "iconSize": iconSize
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    numbers[27],
                    numbers[28]
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "message": "Foo",
                "iconSize": iconSize
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    numbers[29],
                    numbers[30]
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "message": "Foo",
                "iconSize": iconSize
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    numbers[31],
                    numbers[32]
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "message": "Foo",
                "iconSize": iconSize
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    numbers[33],
                    numbers[34]
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "message": "Foo",
                "iconSize": iconSize
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    numbers[35],
                    numbers[36]
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "message": "Foo",
                "iconSize": iconSize
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    numbers[37],
                    numbers[38]
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "message": "Foo",
                "iconSize": iconSize
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    numbers[39],
                    numbers[40]
                ]
            }
        },
        
        {
            "type": "Feature",
            "properties": {
                "message": "Foo",
                "iconSize": iconSize
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    numbers[41],
                    numbers[42]
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "message": "Foo",
                "iconSize": iconSize
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    numbers[43],
                    numbers[44]
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "message": "Foo",
                "iconSize": iconSize
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    numbers[45],
                    numbers[46]
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "message": "Foo",
                "iconSize": iconSize
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    numbers[47],
                    numbers[48]
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "message": "Foo",
                "iconSize": [60,60]
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    numbers[49],
                    numbers[50]
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "message": "Foo",
                "iconSize": iconSize
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    numbers[51],
                    numbers[52]
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "message": "Foo",
                "iconSize": iconSize
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    numbers[53],
                    numbers[54]
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "message": "Foo",
                "iconSize": iconSize
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    numbers[55],
                    numbers[56]
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "message": "Foo",
                "iconSize": iconSize
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    numbers[57],
                    numbers[58]
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "message": "Foo",
                "iconSize": iconSize
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    numbers[59],
                    numbers[60]
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "message": "Foo",
                "iconSize": iconSize
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    numbers[61],
                    numbers[62]
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "message": "Foo",
                "iconSize": iconSize
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    numbers[63],
                    numbers[64]
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "message": "Foo",
                "iconSize": iconSize
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    numbers[65],
                    numbers[66]
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "message": "Foo",
                "iconSize": iconSize
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    numbers[67],
                    numbers[68]
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "message": "Foo",
                "iconSize": iconSize
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    numbers[69],
                    numbers[10]
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "message": "Foo",
                "iconSize": iconSize
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    numbers[71],
                    numbers[72]
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "message": "Foo",
                "iconSize": iconSize
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    numbers[73],
                    numbers[74]
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "message": "Foo",
                "iconSize": iconSize
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    numbers[75],
                    numbers[76]
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "message": "Foo",
                "iconSize": iconSize
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    numbers[77],
                    numbers[78]
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "message": "Foo",
                "iconSize": iconSize
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    numbers[79],
                    numbers[80]
                ]
            }
        },
        
    ]
};

geojson.features.forEach(function(marker) {
    // create a DOM element for the marker
    var el = document.createElement('div');
    el.className = 'marker';
    el.style.backgroundImage = 'url(https://s24.postimg.org/yg2froix1/23_birds_flying_silhouette_free_cliparts_that_yo.png) ';
    el.style.width = marker.properties.iconSize[0] + 'px';
    el.style.height = marker.properties.iconSize[1] + 'px';

    el.addEventListener('click', function() {
    });

    // add marker to map
    new mapboxgl.Marker(el, {offset: [-marker.properties.iconSize[0] / 2, -marker.properties.iconSize[1] / 2]})
        .setLngLat(marker.geometry.coordinates)
        .addTo(map);
});




var filterGroup = document.getElementById('filter-group');


var birds = document.getElementsByClassName('marker mapboxgl-marker');
