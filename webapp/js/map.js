var map;
var diaryLayer, ruskinLayer;

loadMap();

function loadMap() {
	map = new ol.Map({
		target: 'map',
	    layers: [
	             new ol.layer.Tile({
	            	source: new ol.source.TileArcGISRest({
	            		 extent: [-13884991, 2870341, -7455066, 6338219],
	            		 url:  'http://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer'
					})
		         })
		],
		
		view: new ol.View({
			center: ol.proj.transform([8, 48], 'EPSG:4326', 'EPSG:3857'),
		    zoom: 5
		})
	});
}

function loadFeatureLayers() {
//  var featureCollection = {
//      "layerDefinition": null,
//      "featureSet": {
//          "features": [],
//          "geometryType": "esriGeometryPoint"
//      }
//  };
//  featureCollection.layerDefinition = {
//      "geometryType": "esriGeometryPoint",
//      "objectIdField": "ObjectID",
//      "drawingInfo": {
//          "renderer": {
//              "type": "simple",
//              "symbol": {
//                  "type": "esriPMS",
//                  "url": "resources/markers/StaticIcon1.png",
//                  "contentType": "resources/markers/png",
//                  "width": 15,
//                  "height": 15
//              }
//          }
//      },
//      "fields": [{
//          "name": "ObjectID",
//          "alias": "ObjectID",
//          "type": "esriFieldTypeOID"
//      }, {
//          "name": "description",
//          "alias": "Description",
//          "type": "esriFieldTypeString"
//      }, {
//          "name": "title",
//          "alias": "Title",
//          "type": "esriFieldTypeString"
//      }]
//  };
  diaryLayer = new ol.layer.Vector(
//		  featureCollection, 
		  {
      id: "DiaryLayer",
//      mode: FeatureLayer.MODE_SNAPSHOT,
//      outFields: ["*"]
      Console.log("Layer " + id);
  });
//
//  var featureCollection2 = {
//      "layerDefinition": null,
//      "featureSet": {
//          "features": [],
//          "geometryType": "esriGeometryPolyline"
//      }
//  };
//  featureCollection2.layerDefinition = {
//      "geometryType": "esriGeometryPolyline",
//      "objectIdField": "ObjectID",
//      "drawingInfo": {
//          "renderer": {
//              "type": "simple",
//              "symbol": {
//                  "type": "esriSLS",
//                  "style": "STYLE_SOLID",
//                  "color": ([24,143,17]),
//                  "width":.75
//              }
//          }
//      },
//      "fields": [{
//          "name": "ObjectID",
//          "alias": "ObjectID",
//          "type": "esriFieldTypeOID"
//      }, {
//          "name": "description",
//          "alias": "Description",
//          "type": "esriFieldTypeString"
//      }, {
//          "name": "title",
//          "alias": "Title",
//          "type": "esriFieldTypeString"
//      }]
//  };
	
  ruskinLayer = new ol.layer.Vector(
//		  featureCollection2, 
		  {
      id: "RuskinLayer",
//      mode: FeatureLayer.MODE_SNAPSHOT,
//      outFields: ["*"]
  });

//  map.on("layers-add-result", function (evt) {
//      requestData();
//      requestLines();
//  });
//
//  featureLayer.on("edits-complete", function (event) {
//     //searchBar();
//  });
//
  map.addLayers([ruskinLayer, diaryLayer]);
}
//
//function loadCSVLayers() {
//  //this CSV file will be our own
//  layer1 = new CSVLayer("CSV/2.5_week.csv", {
//      copyright: "USGS.gov"
//  });
//  var marker = new PictureMarkerSymbol("resources/markers/StaticIcon1.png", 18, 18);
//  var renderer = new SimpleRenderer(marker);
//  layer1.setRenderer(renderer);
//  var template = new InfoTemplate("${type}", "${place}");
//  layer1.setInfoTemplate(template);
//  ;
//  map.addLayer(layer1);
//
//  layer2 = new CSVLayer("CSV/places_mockup2.csv");
//  var marker2 = new PictureMarkerSymbol("resources/markers/StaticIcon2.png", 20, 20);
//  var renderer2 = new SimpleRenderer(marker2);
//  layer2.setRenderer(renderer2);
//  var template2 = new InfoTemplate("${place_name}", "${place_note}");
//  layer2.setInfoTemplate(template2);
//  map.addLayer(layer2);
//}
//
//function requestData(){
//  var requestHandle = esriRequest({
//      url: "GeoJsonData/AllPoints.json",
//		handleAs: "json",
//		timeout: 0,			
//      callbackParamName: "jsoncallback",
//  });
//  requestHandle.then(requestDataSucceed, requestFailed);
//}

//function requestLines(){
//  var requestHandle = esriRequest({
//      url : "GeoJsonData/data.json",
//      handleAs: "json",
//      timeout : 0,
//      callbackParamName: "jsoncallback"
//  });
//  requestHandle.then(requestLinesSucceed, requestFailed);
//}

//function requestLinesSucceed(response, io) {
//  //loop through the items and add to the feature layer
//  var features = [];
//  var geometry;
//  array.forEach(response.features, function(item) {
//			geometry = new Polyline;
			//create a polyline of size (item.geometry.coordinates.length
			//loop through adding item.geometry.coordinates[i] until reached
			// length-1
//      graphic = new Graphic(geometry);
//      features.push(graphic);
//  });
//  featureLayer2.applyEdits(features, null, null);
//}
//
//function requestDataSucceed(response, io) {
//  var count = 1;
//  var features = [];
//  //loop through the items and add to the feature layer
//  array.forEach(response.features, function(item) {
//
//      var attr = {};
//		attr["properties"] = item.properties.City_Names.toString();
//      //pull in any additional attributes if required
//
//      var geometry = new Point(item.geometry.coordinates[0], item.geometry.coordinates[1]);
//      featureLayerTemplate = new InfoTemplate("Point Information","City_Name: "+ item.properties.City_Names.toString() + "</br>" + "Latitude: " + item.properties.y_latitude + "</br>" + "Longitude: " + item.properties.x_longitude);
//      var pms = new PictureMarkerSymbol("Ruskin2.0/resources/markers/green/NumberIcong"+ count +".png", 20, 20);
//      graphic = new Graphic(geometry,pms,null,featureLayerTemplate);
//      graphic.setAttributes(attr);
//      features.push(graphic);
//      count++;
//
//
//
//  });
//  featureLayer.applyEdits(features, null, null);
//}
//
//function requestFailed(error) {
//  console.log('failed');
//}
//});
