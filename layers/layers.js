var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleTerrainHybrid_1 = new ol.layer.Tile({
            'title': 'Google Terrain Hybrid',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=p&x={x}&y={y}&z={z}'
            })
        });
var lyr_JanuaryAve_2001_2005_2010_2 = new ol.layer.Image({
                            opacity: 1,
                            title: "January Ave_2001_2005_2010",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/JanuaryAve_2001_2005_2010_2.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [13898641.966471, 3906202.644218, 14579370.660057, 4666509.921289]
                            })
                        });
var lyr_FebruaryAve_2001_2005_2010_3 = new ol.layer.Image({
                            opacity: 1,
                            title: "February Ave_2001_2005_2010",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/FebruaryAve_2001_2005_2010_3.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [13898641.966471, 3906202.644218, 14579370.660057, 4666509.921289]
                            })
                        });
var lyr_MarchAve_2001_2005_2010_4 = new ol.layer.Image({
                            opacity: 1,
                            title: "March Ave_2001_2005_2010",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/MarchAve_2001_2005_2010_4.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [13898641.966471, 3906202.644218, 14579370.660057, 4666509.921289]
                            })
                        });
var lyr_AprilAve_2001_2005_2010_5 = new ol.layer.Image({
                            opacity: 1,
                            title: "April Ave_2001_2005_2010",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/AprilAve_2001_2005_2010_5.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [13898641.966471, 3906202.644218, 14579370.660057, 4666509.921289]
                            })
                        });
var lyr_MayAve_2001_2005_2010_6 = new ol.layer.Image({
                            opacity: 1,
                            title: "May Ave_2001_2005_2010",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/MayAve_2001_2005_2010_6.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [13898641.966471, 3906202.644218, 14579370.660057, 4666509.921289]
                            })
                        });
var lyr_JuneAve_2001_2005_2010_7 = new ol.layer.Image({
                            opacity: 1,
                            title: "June Ave_2001_2005_2010",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/JuneAve_2001_2005_2010_7.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [13898641.966471, 3906202.644218, 14579370.660057, 4666509.921289]
                            })
                        });
var lyr_JulyAve_2001_2005_2010_8 = new ol.layer.Image({
                            opacity: 1,
                            title: "July Ave_2001_2005_2010",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/JulyAve_2001_2005_2010_8.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [13898641.966471, 3906202.644218, 14579370.660057, 4666509.921289]
                            })
                        });
var lyr_AugustAve_2001_2005_2010_9 = new ol.layer.Image({
                            opacity: 1,
                            title: "August Ave_2001_2005_2010",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/AugustAve_2001_2005_2010_9.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [13898641.966471, 3906202.644218, 14579370.660057, 4666509.921289]
                            })
                        });
var lyr_SeptemberAve_2001_2005_2010_10 = new ol.layer.Image({
                            opacity: 1,
                            title: "September Ave_2001_2005_2010",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/SeptemberAve_2001_2005_2010_10.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [13898641.966471, 3906202.644218, 14579370.660057, 4666509.921289]
                            })
                        });
var lyr_OctoberAve_2001_2005_2010_11 = new ol.layer.Image({
                            opacity: 1,
                            title: "October Ave_2001_2005_2010",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/OctoberAve_2001_2005_2010_11.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [13898641.966471, 3906202.644218, 14579370.660057, 4666509.921289]
                            })
                        });
var lyr_NovemberAve_2001_2005_2010_12 = new ol.layer.Image({
                            opacity: 1,
                            title: "November Ave_2001_2005_2010",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/NovemberAve_2001_2005_2010_12.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [13898641.966471, 3906202.644218, 14579370.660057, 4666509.921289]
                            })
                        });
var lyr_DecemberAve_2001_2005_2010_13 = new ol.layer.Image({
                            opacity: 1,
                            title: "December Ave_2001_2005_2010",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/DecemberAve_2001_2005_2010_13.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [13898641.966471, 3906202.644218, 14579370.660057, 4666509.921289]
                            })
                        });
var lyr_EvapotranspirationRedhighmmmonth2001_2005_2010_14 = new ol.layer.Image({
                            opacity: 1,
                            title: "Evapotranspiration (Red=high) (mm/month) 2001_2005_2010",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/EvapotranspirationRedhighmmmonth2001_2005_2010_14.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [13898641.966471, 3906202.644218, 14579370.660057, 4666509.921289]
                            })
                        });
var group_AllyearsMask = new ol.layer.Group({
                                layers: [lyr_GoogleSatellite_0,lyr_GoogleTerrainHybrid_1,lyr_JanuaryAve_2001_2005_2010_2,lyr_FebruaryAve_2001_2005_2010_3,lyr_MarchAve_2001_2005_2010_4,lyr_AprilAve_2001_2005_2010_5,lyr_MayAve_2001_2005_2010_6,lyr_JuneAve_2001_2005_2010_7,lyr_JulyAve_2001_2005_2010_8,lyr_AugustAve_2001_2005_2010_9,lyr_SeptemberAve_2001_2005_2010_10,lyr_OctoberAve_2001_2005_2010_11,lyr_NovemberAve_2001_2005_2010_12,lyr_DecemberAve_2001_2005_2010_13,lyr_EvapotranspirationRedhighmmmonth2001_2005_2010_14,],
                                title: "All years Mask"});

lyr_GoogleSatellite_0.setVisible(true);lyr_GoogleTerrainHybrid_1.setVisible(true);lyr_JanuaryAve_2001_2005_2010_2.setVisible(true);lyr_FebruaryAve_2001_2005_2010_3.setVisible(true);lyr_MarchAve_2001_2005_2010_4.setVisible(true);lyr_AprilAve_2001_2005_2010_5.setVisible(true);lyr_MayAve_2001_2005_2010_6.setVisible(true);lyr_JuneAve_2001_2005_2010_7.setVisible(true);lyr_JulyAve_2001_2005_2010_8.setVisible(true);lyr_AugustAve_2001_2005_2010_9.setVisible(true);lyr_SeptemberAve_2001_2005_2010_10.setVisible(true);lyr_OctoberAve_2001_2005_2010_11.setVisible(true);lyr_NovemberAve_2001_2005_2010_12.setVisible(true);lyr_DecemberAve_2001_2005_2010_13.setVisible(true);lyr_EvapotranspirationRedhighmmmonth2001_2005_2010_14.setVisible(true);
var layersList = [group_AllyearsMask];
