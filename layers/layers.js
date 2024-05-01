var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_aves_ovar_1 = new ol.format.GeoJSON();
var features_aves_ovar_1 = format_aves_ovar_1.readFeatures(json_aves_ovar_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_aves_ovar_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_aves_ovar_1.addFeatures(features_aves_ovar_1);
var lyr_aves_ovar_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_aves_ovar_1, 
                style: style_aves_ovar_1,
                popuplayertitle: "aves_ovar",
                interactive: true,
    title: 'aves_ovar<br />\
    <img src="styles/legend/aves_ovar_1_0.png" /> chamariz<br />\
    <img src="styles/legend/aves_ovar_1_1.png" /> chapim-azul<br />\
    <img src="styles/legend/aves_ovar_1_2.png" /> chapim-de-popupa<br />\
    <img src="styles/legend/aves_ovar_1_3.png" /> chapim-real<br />\
    <img src="styles/legend/aves_ovar_1_4.png" /> chasco-cinzento<br />\
    <img src="styles/legend/aves_ovar_1_5.png" /> cotovia-arborea<br />\
    <img src="styles/legend/aves_ovar_1_6.png" /> melro<br />\
    <img src="styles/legend/aves_ovar_1_7.png" /> Noitibo-europeu<br />\
    <img src="styles/legend/aves_ovar_1_8.png" /> pega-rabuda<br />\
    <img src="styles/legend/aves_ovar_1_9.png" /> rabirruivo-preto<br />\
    <img src="styles/legend/aves_ovar_1_10.png" /> <br />'
        });

lyr_OSMStandard_0.setVisible(true);lyr_aves_ovar_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_aves_ovar_1];
lyr_aves_ovar_1.set('fieldAliases', {'id': 'id', 'nome': 'nome', 'espécie': 'espécie', 'fenologia': 'fenologia', 'data': 'data', 'estatuto': 'estatuto', 'imagem': 'imagem', 'foto': 'foto', });
lyr_aves_ovar_1.set('fieldImages', {'id': 'TextEdit', 'nome': 'TextEdit', 'espécie': 'TextEdit', 'fenologia': 'TextEdit', 'data': 'DateTime', 'estatuto': 'TextEdit', 'imagem': 'ExternalResource', 'foto': 'TextEdit', });
lyr_aves_ovar_1.set('fieldLabels', {'id': 'no label', 'nome': 'no label', 'espécie': 'no label', 'fenologia': 'no label', 'data': 'no label', 'estatuto': 'no label', 'imagem': 'no label', 'foto': 'no label', });
lyr_aves_ovar_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});