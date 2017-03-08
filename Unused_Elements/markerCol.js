L.Control.Gps = L.Control.extend({

	includes: L.Mixin.Events,
	//
	//Managed Events:
	//	Event			Data passed			Description
	//
	//	gps:located		{latlng, marker}	fired after gps marker is located
	//	gps:disabled							fired after gps is disabled
	//
	//Methods exposed:
	//	Method 			Description
	//
	//  getLocation		return Latlng and marker of current position
	//  activate		active tracking on runtime
	//  deactivate		deactive tracking on runtime
	//
	options: {
		autoActive: false,		//activate control at startup
		autoCenter: false,		//move map when gps location change
		maxZoom: null,			//max zoom for autoCenter
		textErr: null,			//error message on alert notification
		callErr: null,			//function that run on gps error activating
		style: {				//default L.CircleMarker styles
			radius: 5,
			weight: 2,
			color: '#0003cc',
			opacity: 1,
			fillColor: '#f23',
			fillOpacity: 1
		},
		marker: null,			//L.Marker used for location, default use a L.CircleMarker
		accuracy: true,		//show accuracy Circle
		title: 'Center map on your location',
		position: 'topleft',
		transform: function(latlng) { return latlng },
		setView: false
		//TODO add gpsLayer
		//TODO timeout autoCenter
	}