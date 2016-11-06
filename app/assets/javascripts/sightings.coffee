# Place all the behaviors and hooks related to the matching controller here.
# All this logic will automatically be available in application.js.
# You can use CoffeeScript in this file: http://coffeescript.org/

mouseDown = ->
  if !isCursorOverPoint
    return
  isDragging = true
  # Set a cursor indicator
  canvas.style.cursor = 'grab'
  # Mouse events
  map.on 'mousemove', onMove
  map.on 'mouseup', onUp
  return

onMove = (e) ->
  if !isDragging
    return
  coords = e.lngLat
  # Set a UI indicator for dragging.
  canvas.style.cursor = 'grabbing'
  # Update the Point feature in `geojson` coordinates
  # and call setData to the source layer `point` on it.
  geojson.features[0].geometry.coordinates = [
    coords.lng
    coords.lat
  ]
  map.getSource('single-point').setData geojson
  return

onUp = (e) ->
  if !isDragging
    return
  coords = e.lngLat
  # Print the coordinates of where the point had
  # finished being dragged to on the map.
  coordinates.style.display = 'block'
  coordinates.innerHTML = 'Longitude: ' + coords.lng + '<br />Latitude: ' + coords.lat
  canvas.style.cursor = ''
  isDragging = false
  return

mapboxgl.accessToken = 'pk.eyJ1IjoibXBlbGljaGV0IiwiYSI6ImNpZ3doNWVvYzBzNXN2cW0zd2N5ZnBvY2YifQ.2RlTuIjDz1pLYOP4YpdKyw'
map = new (mapboxgl.Map)(
  container: 'map'
  style: 'mapbox://styles/mapbox/streets-v9'
  center: [
    -74.50
    40
  ]
  zoom: 9)
map.on 'mousemove', (e) ->
  document.getElementById('info').innerHTML = JSON.stringify(e.point) + '<br />' + JSON.stringify(e.lngLat)
  return
#geocoder option
isDragging = undefined
# Is the cursor over a point? if this
# flag is active, we listen for a mousedown event.
isCursorOverPoint = undefined
coordinates = document.getElementById('coordinates')
map = new (mapboxgl.Map)(
  container: 'map'
  style: 'mapbox://styles/mapbox/streets-v9'
  center: [
    0
    0
  ]
  zoom: 2)
canvas = map.getCanvasContainer()
geojson = 
  'type': 'FeatureCollection'
  'features': [ {
    'type': 'Feature'
    'geometry':
      'type': 'Point'
      'coordinates': [
        0
        0
      ]
  } ]
geocoder = new (mapboxgl.Geocoder)(container: 'geocoder-container')
map.addControl geocoder
# After the map style has loaded on the page, add a source layer and default
# styling for a single point.
map.on 'load', ->
  map.addSource 'single-point',
    'type': 'geojson'
    'data':
      'type': 'FeatureCollection'
      'features': []
  map.addLayer
    'id': 'point'
    'source': 'single-point'
    'type': 'circle'
    'paint':
      'circle-radius': 10
      'circle-color': '#007cbf'
  # If a feature is found on map movement,
  # set a flag to permit a mousedown events.
  map.on 'mousemove', (e) ->
    features = map.queryRenderedFeatures(e.point, layers: [ 'point' ])
    # Change point and cursor style as a UI indicator
    # and set a flag to enable other mouse events.
    if features.length
      map.setPaintProperty 'point', 'circle-color', '#3bb2d0'
      canvas.style.cursor = 'move'
      isCursorOverPoint = true
      map.dragPan.disable()
    else
      map.setPaintProperty 'point', 'circle-color', '#3887be'
      canvas.style.cursor = ''
      isCursorOverPoint = false
      map.dragPan.enable()
    return
  # Set `true` to dispatch the event before other functions call it. This
  # is necessary for disabling the default map dragging behaviour.
  map.on 'mousedown', mouseDown, true
  # Listen for the `geocoder.input` event that is triggered when a user
  # makes a selection and add a symbol that matches the result.
  geocoder.on 'result', (ev) ->
    map.getSource('single-point').setData ev.result.geometry
    return
  return