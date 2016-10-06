@implement_map = Map.all
@geojson = Array.new

@implement_map.each do |map|
  @geojson << {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [map.longitude, map.latitude]
    },
    properties: {
      name: map.name,
      address: happy_hour.street,
      :'marker-color' => '#00607d',
      :'marker-symbol' => 'circle',
      :'marker-size' => 'medium'
    }
  }
end