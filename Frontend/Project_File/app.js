
	// set up the map
	var map = new L.Map('mapid');

	// create the tile layer with correct attribution
	var osmUrl='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
	var osmAttrib='Map data © <a href="https://openstreetmap.org">OpenStreetMap</a> contributors';


  var osm = new L.TileLayer(osmUrl, {minZoom: 8, maxZoom: 20, attribution: osmAttrib});

	// start the map in South-East England
	map.setView(new L.LatLng(51.3, 0.7),12);

  map.addLayer(osm);



var marker = L.marker([51.3, 0.7]).addTo(map);
marker.bindPopup("<b>Hello world!</b><br/> This is a pop up.").openPopup();
