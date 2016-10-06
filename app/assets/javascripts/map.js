// JavaScript File

map = L.mapbox.map('map', 'your-map-id').setView([45.52086, -122.679523]

$.ajax
  dataType: 'text'
  url: 'happy_hours/happening_now.json'
  success: (data) ->
    geojson = $.parseJSON(data)
    map.featureLayer.setGeoJSON(geojson)