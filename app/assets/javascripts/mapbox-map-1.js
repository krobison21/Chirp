mapboxgl.accessToken = 'pk.eyJ1IjoibXBlbGljaGV0IiwiYSI6ImNpZ3doNWVvYzBzNXN2cW0zd2N5ZnBvY2YifQ.2RlTuIjDz1pLYOP4YpdKyw';

var map = new mapboxgl.Map({
    container: 'map2',
    style: 'mapbox://styles/mapbox/streets-v9',
    center: [-90.1203, 29.9412],
    zoom: 3
});


var elements = document.getElementsByClassName("locate");

var names = '';

for(var i=0; i < elements.length; i++) {
    names += elements[i].id ;
}

document.write(names);


