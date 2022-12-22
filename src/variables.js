let message = "hello world!"


const LondonAirports = {
    "type": "FeatureCollection",
    "features": [
      {
        "type": "Feature",
        "properties": {
            "airport": "Heathrow"
        },
        "geometry": {
          "coordinates": [
            -0.4591761830025689,
            51.46927877991379
          ],
          "type": "Point"
        }
      },
      {
        "type": "Feature",
        "properties": {
            "airport": "Gatwick"
        },
        "geometry": {
          "coordinates": [
            -0.18592829784597598,
            51.152547801430956
          ],
          "type": "Point"
        }
      },
      {
        "type": "Feature",
        "properties": {
            "airport": "Luton"
        },
        "geometry": {
          "coordinates": [
            -0.37110424252892926,
            51.8770413486867
          ],
          "type": "Point"
        }
      },
      {
        "type": "Feature",
        "properties": {
            "airport": "Stansted"
        },
        "geometry": {
          "coordinates": [
            0.24156252012949153,
            51.8860043747664
          ],
          "type": "Point"
        }
      },
      {
        "type": "Feature",
        "properties": {
            "airport": "City Airport"
        },
        "geometry": {
          "coordinates": [
            0.053382117737868384,
            51.504418506093685
          ],
          "type": "Point"
        }
      }
    ]
  }







const paddingtonGeojson = {
    "type": "FeatureCollection",
    "features": [
      {
        "type": "Feature",
        "properties": {},
        "geometry": {
          "coordinates": [
            -0.17892992151450926,
            51.517886116368174
          ],
          "type": "Point"
        }
      }
    ]
  }


  const attractions_geojson = {
    "type": "FeatureCollection",
    "features": [
      {
        "type": "Feature",
        "properties": {
          "name": "big ben"
        },
        "geometry": {
          "coordinates": [
            -0.12466064329075266,
            51.50067738052945
          ],
          "type": "Point"
        }
      },
      {
        "type": "Feature",
        "properties": {
          "name": "leicester square"
        },
        "geometry": {
          "coordinates": [
            -0.13047682089788282,
            51.51079955591317
          ],
          "type": "Point"
        }
      },
      {
        "type": "Feature",
        "properties": {
          "name": "covent garden"
        },
        "geometry": {
          "coordinates": [
            -0.12237342519685512,
            51.51216238229887
          ],
          "type": "Point"
        }
      },
      {
        "type": "Feature",
        "properties": {
          "name": "south bank"
        },
        "geometry": {
          "coordinates": [
            -0.11125920584558457,
            51.50811603816044
          ],
          "type": "Point"
        }
      }
    ]
  }


  const elizabethLineSt_geojson = {
    "type": "FeatureCollection",
    "features": [
      {
        "type": "Feature",
        "properties": {},
        "geometry": {
          "coordinates": [
            -0.2672647594349087,
            51.517148768253975
          ],
          "type": "Point"
        }
      },
      {
        "type": "Feature",
        "properties": {},
        "geometry": {
          "coordinates": [
            -0.32057049024345474,
            51.51352038105583
          ],
          "type": "Point"
        }
      },
      {
        "type": "Feature",
        "properties": {},
        "geometry": {
          "coordinates": [
            -0.3775241027093159,
            51.50615468154274
          ],
          "type": "Point"
        }
      },
      {
        "type": "Feature",
        "properties": {},
        "geometry": {
          "coordinates": [
            -0.41965666840525273,
            51.50299832364399
          ],
          "type": "Point"
        }
      }
    ]
  }

  const elizabethLine_geojson =  {
    "type": "FeatureCollection",
    "features": [
      {
        "type": "Feature",
        "properties": {},
        "geometry": {
          "coordinates": [
            [
              -0.17778730002905263,
              51.5171145002264
            ],
            [
              -0.18492297126732637,
              51.51879546403683
            ],
            [
              -0.1935916447611703,
              51.51937718241746
            ],
            [
              -0.20973917381809315,
              51.52350188143305
            ],
            [
              -0.22010758721276602,
              51.52529971024484
            ],
            [
              -0.2354902333154314,
              51.52566984265948
            ],
            [
              -0.24466882877931084,
              51.52413641735396
            ],
            [
              -0.25843672197558476,
              51.519747362972936
            ],
            [
              -0.2671053954694287,
              51.5172089215979
            ],
            [
              -0.2746410527413161,
              51.515778436055
            ],
            [
              -0.29138349076362147,
              51.51509089557592
            ],
            [
              -0.3064261888851263,
              51.51445623361502
            ],
            [
              -0.3208739780420444,
              51.51339844402921
            ],
            [
              -0.3386362600053303,
              51.511864605499085
            ],
            [
              -0.3764991008917207,
              51.50639830822111
            ],
            [
              -0.419516206886442,
              51.503280950090634
            ],
            [
              -0.4429275180624117,
              51.506135353437415
            ],
            [
              -0.45156872273723536,
              51.499795941317004
            ],
            [
              -0.4538675576592155,
              51.49105051880429
            ],
            [
              -0.4524170578522728,
              51.47190755761588
            ]
          ],
          "type": "LineString"
        }
      }
    ]
  }


  const picadillyline_geojson = {
    "type": "FeatureCollection",
    "name": "picadilly_line",
    "crs": { "type": "name", "properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" } },
    "features": [
    { "type": "Feature", "properties": { "fid": 303.0, "cat": 304, "id": null, "route": "picadilly" }, "geometry": { "type": "MultiLineString", "coordinates": [ [ [ -0.4527438, 51.4712899 ], [ -0.44689658, 51.4594777 ] ] ] } },
    { "type": "Feature", "properties": { "fid": 304.0, "cat": 305, "id": null, "route": "picadilly" }, "geometry": { "type": "MultiLineString", "coordinates": [ [ [ -0.44689658, 51.4594777 ], [ -0.423035, 51.466988 ] ] ] } },
    { "type": "Feature", "properties": { "fid": 305.0, "cat": 306, "id": null, "route": "picadilly" }, "geometry": { "type": "MultiLineString", "coordinates": [ [ [ -0.423035, 51.466988 ], [ -0.386471, 51.473689 ] ] ] } },
    { "type": "Feature", "properties": { "fid": 306.0, "cat": 307, "id": null, "route": "picadilly" }, "geometry": { "type": "MultiLineString", "coordinates": [ [ [ -0.386471, 51.473689 ], [ -0.365853, 51.47129 ] ] ] } },
    { "type": "Feature", "properties": { "fid": 307.0, "cat": 308, "id": null, "route": "picadilly" }, "geometry": { "type": "MultiLineString", "coordinates": [ [ [ -0.365853, 51.47129 ], [ -0.356, 51.47354 ] ] ] } },
    { "type": "Feature", "properties": { "fid": 308.0, "cat": 309, "id": null, "route": "picadilly" }, "geometry": { "type": "MultiLineString", "coordinates": [ [ [ -0.356, 51.47354 ], [ -0.35196, 51.481569 ] ] ] } },
    { "type": "Feature", "properties": { "fid": 309.0, "cat": 310, "id": null, "route": "picadilly" }, "geometry": { "type": "MultiLineString", "coordinates": [ [ [ -0.35196, 51.481569 ], [ -0.325573, 51.495371 ] ] ] } },
    { "type": "Feature", "properties": { "fid": 310.0, "cat": 311, "id": null, "route": "picadilly" }, "geometry": { "type": "MultiLineString", "coordinates": [ [ [ -0.325573, 51.495371 ], [ -0.313188, 51.499856 ] ] ] } },
    { "type": "Feature", "properties": { "fid": 311.0, "cat": 312, "id": null, "route": "picadilly" }, "geometry": { "type": "MultiLineString", "coordinates": [ [ [ -0.313188, 51.499856 ], [ -0.307856, 51.500801 ] ] ] } },
    { "type": "Feature", "properties": { "fid": 312.0, "cat": 313, "id": null, "route": "picadilly" }, "geometry": { "type": "MultiLineString", "coordinates": [ [ [ -0.307856, 51.500801 ], [ -0.278126, 51.5025 ] ] ] } },
    { "type": "Feature", "properties": { "fid": 313.0, "cat": 314, "id": null, "route": "picadilly" }, "geometry": { "type": "MultiLineString", "coordinates": [ [ [ -0.278126, 51.5025 ], [ -0.222825, 51.492328 ] ] ] } },
    { "type": "Feature", "properties": { "fid": 314.0, "cat": 315, "id": null, "route": "picadilly" }, "geometry": { "type": "MultiLineString", "coordinates": [ [ [ -0.222825, 51.492328 ], [ -0.21434, 51.490281 ] ] ] } },
    { "type": "Feature", "properties": { "fid": 315.0, "cat": 316, "id": null, "route": "picadilly" }, "geometry": { "type": "MultiLineString", "coordinates": [ [ [ -0.21434, 51.490281 ], [ -0.193906, 51.491521 ] ] ] } },
    { "type": "Feature", "properties": { "fid": 316.0, "cat": 317, "id": null, "route": "picadilly" }, "geometry": { "type": "MultiLineString", "coordinates": [ [ [ -0.193906, 51.491521 ], [ -0.172791, 51.494066 ] ] ] } },
    { "type": "Feature", "properties": { "fid": 317.0, "cat": 318, "id": null, "route": "picadilly" }, "geometry": { "type": "MultiLineString", "coordinates": [ [ [ -0.172791, 51.494066 ], [ -0.1603, 51.50169 ] ] ] } },
    { "type": "Feature", "properties": { "fid": 318.0, "cat": 319, "id": null, "route": "picadilly" }, "geometry": { "type": "MultiLineString", "coordinates": [ [ [ -0.1603, 51.50169 ], [ -0.15278, 51.50313 ] ] ] } },
    { "type": "Feature", "properties": { "fid": 319.0, "cat": 320, "id": null, "route": "picadilly" }, "geometry": { "type": "MultiLineString", "coordinates": [ [ [ -0.15278, 51.50313 ], [ -0.14276, 51.50674 ] ] ] } },
    { "type": "Feature", "properties": { "fid": 320.0, "cat": 321, "id": null, "route": "picadilly" }, "geometry": { "type": "MultiLineString", "coordinates": [ [ [ -0.14276, 51.50674 ], [ -0.13392, 51.51022 ] ] ] } },
    { "type": "Feature", "properties": { "fid": 321.0, "cat": 322, "id": null, "route": "picadilly" }, "geometry": { "type": "MultiLineString", "coordinates": [ [ [ -0.13392, 51.51022 ], [ -0.12849, 51.51148 ] ] ] } },
    { "type": "Feature", "properties": { "fid": 322.0, "cat": 323, "id": null, "route": "picadilly" }, "geometry": { "type": "MultiLineString", "coordinates": [ [ [ -0.12849, 51.51148 ], [ -0.12427, 51.51308 ] ] ] } },
    { "type": "Feature", "properties": { "fid": 323.0, "cat": 324, "id": null, "route": "picadilly" }, "geometry": { "type": "MultiLineString", "coordinates": [ [ [ -0.12427, 51.51308 ], [ -0.12055, 51.51711 ] ] ] } },
    { "type": "Feature", "properties": { "fid": 324.0, "cat": 325, "id": null, "route": "picadilly" }, "geometry": { "type": "MultiLineString", "coordinates": [ [ [ -0.12055, 51.51711 ], [ -0.124336, 51.523243 ] ] ] } },
    { "type": "Feature", "properties": { "fid": 325.0, "cat": 326, "id": null, "route": "picadilly" }, "geometry": { "type": "MultiLineString", "coordinates": [ [ [ -0.124336, 51.523243 ], [ -0.12399, 51.53057 ] ] ] } },
    { "type": "Feature", "properties": { "fid": 326.0, "cat": 327, "id": null, "route": "picadilly" }, "geometry": { "type": "MultiLineString", "coordinates": [ [ [ -0.12399, 51.53057 ], [ -0.11802, 51.5485 ] ] ] } },
    { "type": "Feature", "properties": { "fid": 327.0, "cat": 328, "id": null, "route": "picadilly" }, "geometry": { "type": "MultiLineString", "coordinates": [ [ [ -0.11802, 51.5485 ], [ -0.11278, 51.5529 ] ] ] } },
    { "type": "Feature", "properties": { "fid": 328.0, "cat": 329, "id": null, "route": "picadilly" }, "geometry": { "type": "MultiLineString", "coordinates": [ [ [ -0.11278, 51.5529 ], [ -0.10561, 51.55847 ] ] ] } },
    { "type": "Feature", "properties": { "fid": 329.0, "cat": 330, "id": null, "route": "picadilly" }, "geometry": { "type": "MultiLineString", "coordinates": [ [ [ -0.10561, 51.55847 ], [ -0.10543, 51.56498 ] ] ] } },
    { "type": "Feature", "properties": { "fid": 330.0, "cat": 331, "id": null, "route": "picadilly" }, "geometry": { "type": "MultiLineString", "coordinates": [ [ [ -0.10543, 51.56498 ], [ -0.09601, 51.57038 ] ] ] } },
    { "type": "Feature", "properties": { "fid": 331.0, "cat": 332, "id": null, "route": "picadilly" }, "geometry": { "type": "MultiLineString", "coordinates": [ [ [ -0.09601, 51.57038 ], [ -0.10308, 51.59031 ] ] ] } },
    { "type": "Feature", "properties": { "fid": 332.0, "cat": 333, "id": null, "route": "picadilly" }, "geometry": { "type": "MultiLineString", "coordinates": [ [ [ -0.10308, 51.59031 ], [ -0.10939, 51.59709 ] ] ] } },
    { "type": "Feature", "properties": { "fid": 333.0, "cat": 334, "id": null, "route": "picadilly" }, "geometry": { "type": "MultiLineString", "coordinates": [ [ [ -0.10939, 51.59709 ], [ -0.12418, 51.607 ] ] ] } },
    { "type": "Feature", "properties": { "fid": 334.0, "cat": 335, "id": null, "route": "picadilly" }, "geometry": { "type": "MultiLineString", "coordinates": [ [ [ -0.12418, 51.607 ], [ -0.13355, 51.61625 ] ] ] } },
    { "type": "Feature", "properties": { "fid": 335.0, "cat": 336, "id": null, "route": "picadilly" }, "geometry": { "type": "MultiLineString", "coordinates": [ [ [ -0.13355, 51.61625 ], [ -0.12765, 51.6324 ] ] ] } },
    { "type": "Feature", "properties": { "fid": 336.0, "cat": 337, "id": null, "route": "picadilly" }, "geometry": { "type": "MultiLineString", "coordinates": [ [ [ -0.12765, 51.6324 ], [ -0.13192, 51.64739 ] ] ] } },
    { "type": "Feature", "properties": { "fid": 337.0, "cat": 338, "id": null, "route": "picadilly" }, "geometry": { "type": "MultiLineString", "coordinates": [ [ [ -0.13192, 51.64739 ], [ -0.14811, 51.65117 ] ] ] } },
    { "type": "Feature", "properties": { "fid": 338.0, "cat": 339, "id": null, "route": "picadilly" }, "geometry": { "type": "MultiLineString", "coordinates": [ [ [ -0.278126, 51.5025 ], [ -0.28825, 51.50997 ] ] ] } },
    { "type": "Feature", "properties": { "fid": 339.0, "cat": 340, "id": null, "route": "picadilly" }, "geometry": { "type": "MultiLineString", "coordinates": [ [ [ -0.28825, 51.50997 ], [ -0.28838, 51.51807 ] ] ] } },
    { "type": "Feature", "properties": { "fid": 340.0, "cat": 341, "id": null, "route": "picadilly" }, "geometry": { "type": "MultiLineString", "coordinates": [ [ [ -0.28838, 51.51807 ], [ -0.28417, 51.52671 ] ] ] } },
    { "type": "Feature", "properties": { "fid": 341.0, "cat": 342, "id": null, "route": "picadilly" }, "geometry": { "type": "MultiLineString", "coordinates": [ [ [ -0.28417, 51.52671 ], [ -0.30061, 51.54097 ] ] ] } },
    { "type": "Feature", "properties": { "fid": 342.0, "cat": 343, "id": null, "route": "picadilly" }, "geometry": { "type": "MultiLineString", "coordinates": [ [ [ -0.30061, 51.54097 ], [ -0.31598, 51.55093 ] ] ] } },
    { "type": "Feature", "properties": { "fid": 343.0, "cat": 344, "id": null, "route": "picadilly" }, "geometry": { "type": "MultiLineString", "coordinates": [ [ [ -0.31598, 51.55093 ], [ -0.335949, 51.556998 ] ] ] } },
    { "type": "Feature", "properties": { "fid": 344.0, "cat": 345, "id": null, "route": "picadilly" }, "geometry": { "type": "MultiLineString", "coordinates": [ [ [ -0.335949, 51.556998 ], [ -0.3521, 51.56461 ] ] ] } },
    { "type": "Feature", "properties": { "fid": 345.0, "cat": 346, "id": null, "route": "picadilly" }, "geometry": { "type": "MultiLineString", "coordinates": [ [ [ -0.3521, 51.56461 ], [ -0.3724, 51.57534 ] ] ] } },
    { "type": "Feature", "properties": { "fid": 346.0, "cat": 347, "id": null, "route": "picadilly" }, "geometry": { "type": "MultiLineString", "coordinates": [ [ [ -0.3724, 51.57534 ], [ -0.39629, 51.57676 ] ] ] } },
    { "type": "Feature", "properties": { "fid": 347.0, "cat": 348, "id": null, "route": "picadilly" }, "geometry": { "type": "MultiLineString", "coordinates": [ [ [ -0.39629, 51.57676 ], [ -0.41185, 51.57349 ] ] ] } },
    { "type": "Feature", "properties": { "fid": 348.0, "cat": 349, "id": null, "route": "picadilly" }, "geometry": { "type": "MultiLineString", "coordinates": [ [ [ -0.41185, 51.57349 ], [ -0.42157, 51.57146 ] ] ] } },
    { "type": "Feature", "properties": { "fid": 349.0, "cat": 350, "id": null, "route": "picadilly" }, "geometry": { "type": "MultiLineString", "coordinates": [ [ [ -0.42157, 51.57146 ], [ -0.44257, 51.56147 ] ] ] } },
    { "type": "Feature", "properties": { "fid": 350.0, "cat": 351, "id": null, "route": "picadilly" }, "geometry": { "type": "MultiLineString", "coordinates": [ [ [ -0.44257, 51.56147 ], [ -0.45062, 51.55364 ] ] ] } },
    { "type": "Feature", "properties": { "fid": 351.0, "cat": 352, "id": null, "route": "picadilly" }, "geometry": { "type": "MultiLineString", "coordinates": [ [ [ -0.45062, 51.55364 ], [ -0.47725, 51.54687 ] ] ] } }
    ]
    }
    



    const picadillyStation_geojson = {
        "type": "FeatureCollection",
        "name": "picadilly_stations",
        "crs": { "type": "name", "properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" } },
        "features": [
        { "type": "Feature", "properties": { "Name": "Acton Town", "Latitude": "51.502500", "Longitude": "-0.278126", "Platform /": "Platform", "Collected": "User:Gagravarr", "Collecte_1": "24/11/06", "Line": "District, Piccadilly", "Step free": null, "l_Bakerloo": 0, "l_Central": 0, "l_Circle": 0, "l_District": 1, "l_East Lon": 0, "l_Hammersm": 0, "l_Jubilee": 0, "l_Metropol": 0, "l_Northern": 0, "l_Overgrou": 0, "l_Piccadil": 1, "l_Thamesli": 0, "l_Victoria": 0, "l_Waterloo": 0, "seq": 0 }, "geometry": { "type": "Point", "coordinates": [ -0.278126, 51.5025 ] } },
        { "type": "Feature", "properties": { "Name": "Alperton", "Latitude": "51.54097", "Longitude": "-0.30061", "Platform /": "Platform", "Collected": "User:Mattwestcott", "Collecte_1": "28/01/2007", "Line": "Piccadilly", "Step free": null, "l_Bakerloo": 0, "l_Central": 0, "l_Circle": 0, "l_District": 0, "l_East Lon": 0, "l_Hammersm": 0, "l_Jubilee": 0, "l_Metropol": 0, "l_Northern": 0, "l_Overgrou": 0, "l_Piccadil": 1, "l_Thamesli": 0, "l_Victoria": 0, "l_Waterloo": 0, "seq": 0 }, "geometry": { "type": "Point", "coordinates": [ -0.30061, 51.54097 ] } },
        { "type": "Feature", "properties": { "Name": "Arnos Grove", "Latitude": "51.61625", "Longitude": "-0.13355", "Platform /": "Entrance", "Collected": "User:Kake", "Collecte_1": "2007-04-24", "Line": "Piccadilly", "Step free": null, "l_Bakerloo": 0, "l_Central": 0, "l_Circle": 0, "l_District": 0, "l_East Lon": 0, "l_Hammersm": 0, "l_Jubilee": 0, "l_Metropol": 0, "l_Northern": 0, "l_Overgrou": 0, "l_Piccadil": 1, "l_Thamesli": 0, "l_Victoria": 0, "l_Waterloo": 0, "seq": 0 }, "geometry": { "type": "Point", "coordinates": [ -0.13355, 51.61625 ] } },
        { "type": "Feature", "properties": { "Name": "Arsenal", "Latitude": "51.55847", "Longitude": "-0.10561", "Platform /": "outside Gillespie Road exit; the platforms are a long walk west in tunnel", "Collected": "User:Morwen", "Collecte_1": "5/5/2007", "Line": "Piccadilly", "Step free": null, "l_Bakerloo": 0, "l_Central": 0, "l_Circle": 0, "l_District": 0, "l_East Lon": 0, "l_Hammersm": 0, "l_Jubilee": 0, "l_Metropol": 0, "l_Northern": 0, "l_Overgrou": 0, "l_Piccadil": 1, "l_Thamesli": 0, "l_Victoria": 0, "l_Waterloo": 0, "seq": 0 }, "geometry": { "type": "Point", "coordinates": [ -0.10561, 51.55847 ] } },
        { "type": "Feature", "properties": { "Name": "Barons Court", "Latitude": "51.490281", "Longitude": "-0.214340", "Platform /": "Platform", "Collected": "User:Gagravarr", "Collecte_1": "24/11/06", "Line": "Piccadilly, District", "Step free": null, "l_Bakerloo": 0, "l_Central": 0, "l_Circle": 0, "l_District": 1, "l_East Lon": 0, "l_Hammersm": 0, "l_Jubilee": 0, "l_Metropol": 0, "l_Northern": 0, "l_Overgrou": 0, "l_Piccadil": 1, "l_Thamesli": 0, "l_Victoria": 0, "l_Waterloo": 0, "seq": 0 }, "geometry": { "type": "Point", "coordinates": [ -0.21434, 51.490281 ] } },
        { "type": "Feature", "properties": { "Name": "Boston Manor", "Latitude": "51.495371", "Longitude": "-0.325573", "Platform /": "Platform", "Collected": "User:Gagravarr", "Collecte_1": "24/11/06", "Line": "Piccadilly", "Step free": null, "l_Bakerloo": 0, "l_Central": 0, "l_Circle": 0, "l_District": 0, "l_East Lon": 0, "l_Hammersm": 0, "l_Jubilee": 0, "l_Metropol": 0, "l_Northern": 0, "l_Overgrou": 0, "l_Piccadil": 1, "l_Thamesli": 0, "l_Victoria": 0, "l_Waterloo": 0, "seq": 0 }, "geometry": { "type": "Point", "coordinates": [ -0.325573, 51.495371 ] } },
        { "type": "Feature", "properties": { "Name": "Bounds Green", "Latitude": "51.60700", "Longitude": "-0.12418", "Platform /": "Entrance", "Collected": "User:Kake", "Collecte_1": "2007-04-24", "Line": "Piccadilly", "Step free": null, "l_Bakerloo": 0, "l_Central": 0, "l_Circle": 0, "l_District": 0, "l_East Lon": 0, "l_Hammersm": 0, "l_Jubilee": 0, "l_Metropol": 0, "l_Northern": 0, "l_Overgrou": 0, "l_Piccadil": 1, "l_Thamesli": 0, "l_Victoria": 0, "l_Waterloo": 0, "seq": 0 }, "geometry": { "type": "Point", "coordinates": [ -0.12418, 51.607 ] } },
        { "type": "Feature", "properties": { "Name": "Caledonian Road", "Latitude": "51.54850", "Longitude": "-0.11802", "Platform /": "outside Caledonian Road exit", "Collected": "User:Morwen", "Collecte_1": "5/5/2007", "Line": "Piccadilly", "Step free": null, "l_Bakerloo": 0, "l_Central": 0, "l_Circle": 0, "l_District": 0, "l_East Lon": 0, "l_Hammersm": 0, "l_Jubilee": 0, "l_Metropol": 0, "l_Northern": 0, "l_Overgrou": 0, "l_Piccadil": 1, "l_Thamesli": 0, "l_Victoria": 0, "l_Waterloo": 0, "seq": 0 }, "geometry": { "type": "Point", "coordinates": [ -0.11802, 51.5485 ] } },
        { "type": "Feature", "properties": { "Name": "Cockfosters", "Latitude": "51.65117", "Longitude": "-0.14811", "Platform /": "platforms", "Collected": "User:Morwen", "Collecte_1": "2/5/2007", "Line": "Piccadilly", "Step free": null, "l_Bakerloo": 0, "l_Central": 0, "l_Circle": 0, "l_District": 0, "l_East Lon": 0, "l_Hammersm": 0, "l_Jubilee": 0, "l_Metropol": 0, "l_Northern": 0, "l_Overgrou": 0, "l_Piccadil": 1, "l_Thamesli": 0, "l_Victoria": 0, "l_Waterloo": 0, "seq": 0 }, "geometry": { "type": "Point", "coordinates": [ -0.14811, 51.65117 ] } },
        { "type": "Feature", "properties": { "Name": "Covent Garden", "Latitude": "51.51308", "Longitude": "-0.12427", "Platform /": "Long Acre entrance", "Collected": "User:Morwen", "Collecte_1": "28/4/2007", "Line": "Piccadilly", "Step free": "Unsure ( has Lifts )", "l_Bakerloo": 0, "l_Central": 0, "l_Circle": 0, "l_District": 0, "l_East Lon": 0, "l_Hammersm": 0, "l_Jubilee": 0, "l_Metropol": 0, "l_Northern": 0, "l_Overgrou": 0, "l_Piccadil": 1, "l_Thamesli": 0, "l_Victoria": 0, "l_Waterloo": 0, "seq": 0 }, "geometry": { "type": "Point", "coordinates": [ -0.12427, 51.51308 ] } },
        { "type": "Feature", "properties": { "Name": "Ealing Common", "Latitude": "51.50997", "Longitude": "-0.28825", "Platform /": "Platform", "Collected": "User:Mattwestcott", "Collecte_1": "28/01/2007", "Line": "District, Piccadilly", "Step free": null, "l_Bakerloo": 0, "l_Central": 0, "l_Circle": 0, "l_District": 1, "l_East Lon": 0, "l_Hammersm": 0, "l_Jubilee": 0, "l_Metropol": 0, "l_Northern": 0, "l_Overgrou": 0, "l_Piccadil": 1, "l_Thamesli": 0, "l_Victoria": 0, "l_Waterloo": 0, "seq": 0 }, "geometry": { "type": "Point", "coordinates": [ -0.28825, 51.50997 ] } },
        { "type": "Feature", "properties": { "Name": "Earl's Court", "Latitude": "51.491521", "Longitude": "-0.193906", "Platform /": "Platform", "Collected": "User:Gagravarr", "Collecte_1": "24/11/06", "Line": "District, Piccadilly", "Step free": null, "l_Bakerloo": 0, "l_Central": 0, "l_Circle": 0, "l_District": 1, "l_East Lon": 0, "l_Hammersm": 0, "l_Jubilee": 0, "l_Metropol": 0, "l_Northern": 0, "l_Overgrou": 0, "l_Piccadil": 1, "l_Thamesli": 0, "l_Victoria": 0, "l_Waterloo": 0, "seq": 0 }, "geometry": { "type": "Point", "coordinates": [ -0.193906, 51.491521 ] } },
        { "type": "Feature", "properties": { "Name": "Eastcote", "Latitude": "51.57676", "Longitude": "-0.39629", "Platform /": "Platform", "Collected": "User:Mattwestcott", "Collecte_1": "28/01/2007", "Line": "Metropolitan, Piccadilly", "Step free": null, "l_Bakerloo": 0, "l_Central": 0, "l_Circle": 0, "l_District": 0, "l_East Lon": 0, "l_Hammersm": 0, "l_Jubilee": 0, "l_Metropol": 1, "l_Northern": 0, "l_Overgrou": 0, "l_Piccadil": 1, "l_Thamesli": 0, "l_Victoria": 0, "l_Waterloo": 0, "seq": 0 }, "geometry": { "type": "Point", "coordinates": [ -0.39629, 51.57676 ] } },
        { "type": "Feature", "properties": { "Name": "Finsbury Park", "Latitude": "51.56498", "Longitude": "-0.10543", "Platform /": "in bus station, near mainline entrance end", "Collected": "User:Morwen", "Collecte_1": "5/5/2007", "Line": "Piccadilly, Victoria", "Step free": "No (Steps at subsurface level)", "l_Bakerloo": 0, "l_Central": 0, "l_Circle": 0, "l_District": 0, "l_East Lon": 0, "l_Hammersm": 0, "l_Jubilee": 0, "l_Metropol": 0, "l_Northern": 0, "l_Overgrou": 0, "l_Piccadil": 1, "l_Thamesli": 0, "l_Victoria": 1, "l_Waterloo": 0, "seq": 0 }, "geometry": { "type": "Point", "coordinates": [ -0.10543, 51.56498 ] } },
        { "type": "Feature", "properties": { "Name": "Gloucester Road", "Latitude": "51.49408266", "Longitude": "-0.17295341", "Platform /": "C/D platform", "Collected": "User:Gagravarr", "Collecte_1": "8/09/06", "Line": "Circle, District, Piccadilly", "Step free": null, "l_Bakerloo": 0, "l_Central": 0, "l_Circle": 1, "l_District": 1, "l_East Lon": 0, "l_Hammersm": 0, "l_Jubilee": 0, "l_Metropol": 0, "l_Northern": 0, "l_Overgrou": 0, "l_Piccadil": 1, "l_Thamesli": 0, "l_Victoria": 0, "l_Waterloo": 0, "seq": 0 }, "geometry": { "type": "Point", "coordinates": [ -0.17295341, 51.49408266 ] } },
        { "type": "Feature", "properties": { "Name": "Green Park", "Latitude": "51.50674", "Longitude": "-0.14276", "Platform /": "Entrance (south side of Piccadilly)", "Collected": "User:Kake", "Collecte_1": "2007-04-12", "Line": "Jubilee, Piccadilly, Victoria", "Step free": "Unsure ( Certainly escalators at subsurface)", "l_Bakerloo": 0, "l_Central": 0, "l_Circle": 0, "l_District": 0, "l_East Lon": 0, "l_Hammersm": 0, "l_Jubilee": 1, "l_Metropol": 0, "l_Northern": 0, "l_Overgrou": 0, "l_Piccadil": 1, "l_Thamesli": 0, "l_Victoria": 1, "l_Waterloo": 0, "seq": 0 }, "geometry": { "type": "Point", "coordinates": [ -0.14276, 51.50674 ] } },
        { "type": "Feature", "properties": { "Name": "Hammersmith (Dist&Picc Line)", "Latitude": "51.492328", "Longitude": "-0.222825", "Platform /": "Platform", "Collected": "User:Gagravarr", "Collecte_1": "24/11/06", "Line": "District, Piccadilly", "Step free": null, "l_Bakerloo": 0, "l_Central": 0, "l_Circle": 0, "l_District": 1, "l_East Lon": 0, "l_Hammersm": 0, "l_Jubilee": 0, "l_Metropol": 0, "l_Northern": 0, "l_Overgrou": 0, "l_Piccadil": 1, "l_Thamesli": 0, "l_Victoria": 0, "l_Waterloo": 0, "seq": 0 }, "geometry": { "type": "Point", "coordinates": [ -0.222825, 51.492328 ] } },
        { "type": "Feature", "properties": { "Name": "Hatton Cross", "Latitude": "51.466988", "Longitude": "-0.423035", "Platform /": "Entrance", "Collected": "User:Gagravarr", "Collecte_1": "24/11/06", "Line": "Piccadilly", "Step free": null, "l_Bakerloo": 0, "l_Central": 0, "l_Circle": 0, "l_District": 0, "l_East Lon": 0, "l_Hammersm": 0, "l_Jubilee": 0, "l_Metropol": 0, "l_Northern": 0, "l_Overgrou": 0, "l_Piccadil": 1, "l_Thamesli": 0, "l_Victoria": 0, "l_Waterloo": 0, "seq": 0 }, "geometry": { "type": "Point", "coordinates": [ -0.423035, 51.466988 ] } },
        { "type": "Feature", "properties": { "Name": "Heathrow Terminals 1-2-3", "Latitude": "51.4712899", "Longitude": "-0.4527438", "Platform /": "Central Bus Station Entrance", "Collected": "User:Gagravarr", "Collecte_1": "28/02/07", "Line": "Piccadilly", "Step free": null, "l_Bakerloo": 0, "l_Central": 0, "l_Circle": 0, "l_District": 0, "l_East Lon": 0, "l_Hammersm": 0, "l_Jubilee": 0, "l_Metropol": 0, "l_Northern": 0, "l_Overgrou": 0, "l_Piccadil": 1, "l_Thamesli": 0, "l_Victoria": 0, "l_Waterloo": 0, "seq": 0 }, "geometry": { "type": "Point", "coordinates": [ -0.4527438, 51.4712899 ] } },
        { "type": "Feature", "properties": { "Name": "Heathrow Terminal 4", "Latitude": "51.4594777", "Longitude": "-0.44689658", "Platform /": "Terminal Entrance", "Collected": "User:Gagravarr", "Collecte_1": "28/02/07", "Line": "Piccadilly", "Step free": null, "l_Bakerloo": 0, "l_Central": 0, "l_Circle": 0, "l_District": 0, "l_East Lon": 0, "l_Hammersm": 0, "l_Jubilee": 0, "l_Metropol": 0, "l_Northern": 0, "l_Overgrou": 0, "l_Piccadil": 1, "l_Thamesli": 0, "l_Victoria": 0, "l_Waterloo": 0, "seq": 0 }, "geometry": { "type": "Point", "coordinates": [ -0.44689658, 51.4594777 ] } },
        { "type": "Feature", "properties": { "Name": "Hillingdon", "Latitude": "51.55364", "Longitude": "-0.45062", "Platform /": "Platform", "Collected": "User:Mattwestcott", "Collecte_1": "28/01/2007", "Line": "Metropolitan, Piccadilly", "Step free": null, "l_Bakerloo": 0, "l_Central": 0, "l_Circle": 0, "l_District": 0, "l_East Lon": 0, "l_Hammersm": 0, "l_Jubilee": 0, "l_Metropol": 1, "l_Northern": 0, "l_Overgrou": 0, "l_Piccadil": 1, "l_Thamesli": 0, "l_Victoria": 0, "l_Waterloo": 0, "seq": 0 }, "geometry": { "type": "Point", "coordinates": [ -0.45062, 51.55364 ] } },
        { "type": "Feature", "properties": { "Name": "Holborn", "Latitude": "51.51711", "Longitude": "-0.12055", "Platform /": "Entrance", "Collected": "User:Mattwestcott", "Collecte_1": "27/01/2007", "Line": "Central, Piccadilly", "Step free": "Unsure", "l_Bakerloo": 0, "l_Central": 1, "l_Circle": 0, "l_District": 0, "l_East Lon": 0, "l_Hammersm": 0, "l_Jubilee": 0, "l_Metropol": 0, "l_Northern": 0, "l_Overgrou": 0, "l_Piccadil": 1, "l_Thamesli": 0, "l_Victoria": 0, "l_Waterloo": 0, "seq": 0 }, "geometry": { "type": "Point", "coordinates": [ -0.12055, 51.51711 ] } },
        { "type": "Feature", "properties": { "Name": "Holloway Road", "Latitude": "51.55290", "Longitude": "-0.11278", "Platform /": "Entrance", "Collected": "User:Morwen", "Collecte_1": "2007-05-13", "Line": "Piccadilly", "Step free": null, "l_Bakerloo": 0, "l_Central": 0, "l_Circle": 0, "l_District": 0, "l_East Lon": 0, "l_Hammersm": 0, "l_Jubilee": 0, "l_Metropol": 0, "l_Northern": 0, "l_Overgrou": 0, "l_Piccadil": 1, "l_Thamesli": 0, "l_Victoria": 0, "l_Waterloo": 0, "seq": 0 }, "geometry": { "type": "Point", "coordinates": [ -0.11278, 51.5529 ] } },
        { "type": "Feature", "properties": { "Name": "Hounslow Central", "Latitude": "51.471290", "Longitude": "-0.365853", "Platform /": "Platform", "Collected": "User:Gagravarr", "Collecte_1": "24/11/06", "Line": "Piccadilly", "Step free": null, "l_Bakerloo": 0, "l_Central": 0, "l_Circle": 0, "l_District": 0, "l_East Lon": 0, "l_Hammersm": 0, "l_Jubilee": 0, "l_Metropol": 0, "l_Northern": 0, "l_Overgrou": 0, "l_Piccadil": 1, "l_Thamesli": 0, "l_Victoria": 0, "l_Waterloo": 0, "seq": 0 }, "geometry": { "type": "Point", "coordinates": [ -0.365853, 51.47129 ] } },
        { "type": "Feature", "properties": { "Name": "Hounslow East", "Latitude": "51.473540", "Longitude": "-0.356000", "Platform /": "Platform", "Collected": "User:Gagravarr", "Collecte_1": "24/11/06", "Line": "Piccadilly", "Step free": null, "l_Bakerloo": 0, "l_Central": 0, "l_Circle": 0, "l_District": 0, "l_East Lon": 0, "l_Hammersm": 0, "l_Jubilee": 0, "l_Metropol": 0, "l_Northern": 0, "l_Overgrou": 0, "l_Piccadil": 1, "l_Thamesli": 0, "l_Victoria": 0, "l_Waterloo": 0, "seq": 0 }, "geometry": { "type": "Point", "coordinates": [ -0.356, 51.47354 ] } },
        { "type": "Feature", "properties": { "Name": "Hounslow West", "Latitude": "51.473689", "Longitude": "-0.386471", "Platform /": "Platform (North End)", "Collected": "User:Gagravarr", "Collecte_1": "24/11/06", "Line": "Piccadilly", "Step free": "Lift for wheelchair users only.", "l_Bakerloo": 0, "l_Central": 0, "l_Circle": 0, "l_District": 0, "l_East Lon": 0, "l_Hammersm": 0, "l_Jubilee": 0, "l_Metropol": 0, "l_Northern": 0, "l_Overgrou": 0, "l_Piccadil": 1, "l_Thamesli": 0, "l_Victoria": 0, "l_Waterloo": 0, "seq": 0 }, "geometry": { "type": "Point", "coordinates": [ -0.386471, 51.473689 ] } },
        { "type": "Feature", "properties": { "Name": "Hyde Park Corner", "Latitude": "51.50313", "Longitude": "-0.15278", "Platform /": "at main entrance (on northern side of roundabout)", "Collected": "User:Morwen", "Collecte_1": "1/05/07", "Line": "Piccadilly", "Step free": null, "l_Bakerloo": 0, "l_Central": 0, "l_Circle": 0, "l_District": 0, "l_East Lon": 0, "l_Hammersm": 0, "l_Jubilee": 0, "l_Metropol": 0, "l_Northern": 0, "l_Overgrou": 0, "l_Piccadil": 1, "l_Thamesli": 0, "l_Victoria": 0, "l_Waterloo": 0, "seq": 0 }, "geometry": { "type": "Point", "coordinates": [ -0.15278, 51.50313 ] } },
        { "type": "Feature", "properties": { "Name": "Ickenham", "Latitude": "51.56147", "Longitude": "-0.44257", "Platform /": "Platform", "Collected": "User:Mattwestcott", "Collecte_1": "28/01/2007", "Line": "Metropolitan, Piccadilly", "Step free": null, "l_Bakerloo": 0, "l_Central": 0, "l_Circle": 0, "l_District": 0, "l_East Lon": 0, "l_Hammersm": 0, "l_Jubilee": 0, "l_Metropol": 1, "l_Northern": 0, "l_Overgrou": 0, "l_Piccadil": 1, "l_Thamesli": 0, "l_Victoria": 0, "l_Waterloo": 0, "seq": 0 }, "geometry": { "type": "Point", "coordinates": [ -0.44257, 51.56147 ] } },
        { "type": "Feature", "properties": { "Name": "King's Cross St.Pancras", "Latitude": "51.53057", "Longitude": "-0.12399", "Platform /": "between King's Cross exit and main tube entrance", "Collected": "User:Morwen", "Collecte_1": "5/5/2007", "Line": "Piccadilly, Circle, Victoria, Northern, Metropolitan, Hammersmith & City", "Step free": "Unsure (Escaltors to deep level platforms)", "l_Bakerloo": 0, "l_Central": 0, "l_Circle": 1, "l_District": 0, "l_East Lon": 0, "l_Hammersm": 1, "l_Jubilee": 0, "l_Metropol": 1, "l_Northern": 1, "l_Overgrou": 0, "l_Piccadil": 1, "l_Thamesli": 0, "l_Victoria": 1, "l_Waterloo": 0, "seq": 0 }, "geometry": { "type": "Point", "coordinates": [ -0.12399, 51.53057 ] } },
        { "type": "Feature", "properties": { "Name": "Knightsbridge", "Latitude": "51.50169", "Longitude": "-0.16030", "Platform /": "Between Sloane Street and Knightsbridge entrances", "Collected": "User:Morwen", "Collecte_1": "1/05/07", "Line": "Piccadilly", "Step free": null, "l_Bakerloo": 0, "l_Central": 0, "l_Circle": 0, "l_District": 0, "l_East Lon": 0, "l_Hammersm": 0, "l_Jubilee": 0, "l_Metropol": 0, "l_Northern": 0, "l_Overgrou": 0, "l_Piccadil": 1, "l_Thamesli": 0, "l_Victoria": 0, "l_Waterloo": 0, "seq": 0 }, "geometry": { "type": "Point", "coordinates": [ -0.1603, 51.50169 ] } },
        { "type": "Feature", "properties": { "Name": "Leicester Square", "Latitude": "51.51148", "Longitude": "-0.12849", "Platform /": "??", "Collected": "User:Steve", "Collecte_1": "10/2/06", "Line": "Northern, Piccadilly", "Step free": null, "l_Bakerloo": 0, "l_Central": 0, "l_Circle": 0, "l_District": 0, "l_East Lon": 0, "l_Hammersm": 0, "l_Jubilee": 0, "l_Metropol": 0, "l_Northern": 1, "l_Overgrou": 0, "l_Piccadil": 1, "l_Thamesli": 0, "l_Victoria": 0, "l_Waterloo": 0, "seq": 0 }, "geometry": { "type": "Point", "coordinates": [ -0.12849, 51.51148 ] } },
        { "type": "Feature", "properties": { "Name": "Manor House", "Latitude": "51.57038", "Longitude": "-0.09601", "Platform /": "on top of ticket hall", "Collected": "User:Morwen", "Collecte_1": "29/4/07", "Line": "Piccadilly", "Step free": null, "l_Bakerloo": 0, "l_Central": 0, "l_Circle": 0, "l_District": 0, "l_East Lon": 0, "l_Hammersm": 0, "l_Jubilee": 0, "l_Metropol": 0, "l_Northern": 0, "l_Overgrou": 0, "l_Piccadil": 1, "l_Thamesli": 0, "l_Victoria": 0, "l_Waterloo": 0, "seq": 0 }, "geometry": { "type": "Point", "coordinates": [ -0.09601, 51.57038 ] } },
        { "type": "Feature", "properties": { "Name": "North Ealing", "Latitude": "51.51807", "Longitude": "-0.28838", "Platform /": "Platform", "Collected": "User:Mattwestcott", "Collecte_1": "28/01/2007", "Line": "Piccadilly", "Step free": null, "l_Bakerloo": 0, "l_Central": 0, "l_Circle": 0, "l_District": 0, "l_East Lon": 0, "l_Hammersm": 0, "l_Jubilee": 0, "l_Metropol": 0, "l_Northern": 0, "l_Overgrou": 0, "l_Piccadil": 1, "l_Thamesli": 0, "l_Victoria": 0, "l_Waterloo": 0, "seq": 0 }, "geometry": { "type": "Point", "coordinates": [ -0.28838, 51.51807 ] } },
        { "type": "Feature", "properties": { "Name": "Northfields", "Latitude": "51.499856", "Longitude": "-0.313188", "Platform /": "Platform", "Collected": "User:Gagravarr", "Collecte_1": "24/11/06", "Line": "Piccadilly", "Step free": null, "l_Bakerloo": 0, "l_Central": 0, "l_Circle": 0, "l_District": 0, "l_East Lon": 0, "l_Hammersm": 0, "l_Jubilee": 0, "l_Metropol": 0, "l_Northern": 0, "l_Overgrou": 0, "l_Piccadil": 1, "l_Thamesli": 0, "l_Victoria": 0, "l_Waterloo": 0, "seq": 0 }, "geometry": { "type": "Point", "coordinates": [ -0.313188, 51.499856 ] } },
        { "type": "Feature", "properties": { "Name": "Oakwood", "Latitude": "51.64739", "Longitude": "-0.13192", "Platform /": "platforms", "Collected": "User:Morwen", "Collecte_1": "2/5/2007", "Line": "Piccadilly", "Step free": "Yes", "l_Bakerloo": 0, "l_Central": 0, "l_Circle": 0, "l_District": 0, "l_East Lon": 0, "l_Hammersm": 0, "l_Jubilee": 0, "l_Metropol": 0, "l_Northern": 0, "l_Overgrou": 0, "l_Piccadil": 1, "l_Thamesli": 0, "l_Victoria": 0, "l_Waterloo": 0, "seq": 0 }, "geometry": { "type": "Point", "coordinates": [ -0.13192, 51.64739 ] } },
        { "type": "Feature", "properties": { "Name": "Osterley", "Latitude": "51.481569", "Longitude": "-0.351960", "Platform /": "Platform", "Collected": "User:Gagravarr", "Collecte_1": "24/11/06", "Line": "Piccadilly", "Step free": null, "l_Bakerloo": 0, "l_Central": 0, "l_Circle": 0, "l_District": 0, "l_East Lon": 0, "l_Hammersm": 0, "l_Jubilee": 0, "l_Metropol": 0, "l_Northern": 0, "l_Overgrou": 0, "l_Piccadil": 1, "l_Thamesli": 0, "l_Victoria": 0, "l_Waterloo": 0, "seq": 0 }, "geometry": { "type": "Point", "coordinates": [ -0.35196, 51.481569 ] } },
        { "type": "Feature", "properties": { "Name": "Park Royal", "Latitude": "51.52671", "Longitude": "-0.28417", "Platform /": "Platform", "Collected": "User:Mattwestcott", "Collecte_1": "28/01/2007", "Line": "Piccadilly", "Step free": null, "l_Bakerloo": 0, "l_Central": 0, "l_Circle": 0, "l_District": 0, "l_East Lon": 0, "l_Hammersm": 0, "l_Jubilee": 0, "l_Metropol": 0, "l_Northern": 0, "l_Overgrou": 0, "l_Piccadil": 1, "l_Thamesli": 0, "l_Victoria": 0, "l_Waterloo": 0, "seq": 0 }, "geometry": { "type": "Point", "coordinates": [ -0.28417, 51.52671 ] } },
        { "type": "Feature", "properties": { "Name": "Piccadilly Circus", "Latitude": "51.51022", "Longitude": "-0.13392", "Platform /": "Trocadero / Shaftesbury Avenue entrance", "Collected": "User:Kake", "Collecte_1": "2007-04-13", "Line": "Piccadilly, Bakerloo", "Step free": "No (Escalator to Platform level)", "l_Bakerloo": 1, "l_Central": 0, "l_Circle": 0, "l_District": 0, "l_East Lon": 0, "l_Hammersm": 0, "l_Jubilee": 0, "l_Metropol": 0, "l_Northern": 0, "l_Overgrou": 0, "l_Piccadil": 1, "l_Thamesli": 0, "l_Victoria": 0, "l_Waterloo": 0, "seq": 0 }, "geometry": { "type": "Point", "coordinates": [ -0.13392, 51.51022 ] } },
        { "type": "Feature", "properties": { "Name": "Rayners Lane", "Latitude": "51.57534", "Longitude": "-0.37240", "Platform /": "Platform", "Collected": "User:Mattwestcott", "Collecte_1": "28/01/2007", "Line": "Metropolitan, Piccadilly", "Step free": "No (Steps to/from Platform level)", "l_Bakerloo": 0, "l_Central": 0, "l_Circle": 0, "l_District": 0, "l_East Lon": 0, "l_Hammersm": 0, "l_Jubilee": 0, "l_Metropol": 1, "l_Northern": 0, "l_Overgrou": 0, "l_Piccadil": 1, "l_Thamesli": 0, "l_Victoria": 0, "l_Waterloo": 0, "seq": 0 }, "geometry": { "type": "Point", "coordinates": [ -0.3724, 51.57534 ] } },
        { "type": "Feature", "properties": { "Name": "Ruislip", "Latitude": "51.57146", "Longitude": "-0.42157", "Platform /": "Platform", "Collected": "User:Mattwestcott", "Collecte_1": "28/01/2007", "Line": "Metropolitan, Piccadilly", "Step free": null, "l_Bakerloo": 0, "l_Central": 0, "l_Circle": 0, "l_District": 0, "l_East Lon": 0, "l_Hammersm": 0, "l_Jubilee": 0, "l_Metropol": 1, "l_Northern": 0, "l_Overgrou": 0, "l_Piccadil": 1, "l_Thamesli": 0, "l_Victoria": 0, "l_Waterloo": 0, "seq": 0 }, "geometry": { "type": "Point", "coordinates": [ -0.42157, 51.57146 ] } },
        { "type": "Feature", "properties": { "Name": "Ruislip Manor", "Latitude": "51.57349", "Longitude": "-0.41185", "Platform /": "Platform", "Collected": "User:Mattwestcott", "Collecte_1": "28/01/2007", "Line": "Metropolitan, Piccadilly", "Step free": null, "l_Bakerloo": 0, "l_Central": 0, "l_Circle": 0, "l_District": 0, "l_East Lon": 0, "l_Hammersm": 0, "l_Jubilee": 0, "l_Metropol": 1, "l_Northern": 0, "l_Overgrou": 0, "l_Piccadil": 1, "l_Thamesli": 0, "l_Victoria": 0, "l_Waterloo": 0, "seq": 0 }, "geometry": { "type": "Point", "coordinates": [ -0.41185, 51.57349 ] } },
        { "type": "Feature", "properties": { "Name": "Russell Square", "Latitude": "51.523243", "Longitude": "-0.124336", "Platform /": "Entrance", "Collected": "User:Gagravarr", "Collecte_1": "06/04/2007", "Line": "Piccadilly", "Step free": null, "l_Bakerloo": 0, "l_Central": 0, "l_Circle": 0, "l_District": 0, "l_East Lon": 0, "l_Hammersm": 0, "l_Jubilee": 0, "l_Metropol": 0, "l_Northern": 0, "l_Overgrou": 0, "l_Piccadil": 1, "l_Thamesli": 0, "l_Victoria": 0, "l_Waterloo": 0, "seq": 0 }, "geometry": { "type": "Point", "coordinates": [ -0.124336, 51.523243 ] } },
        { "type": "Feature", "properties": { "Name": "South Ealing", "Latitude": "51.500801", "Longitude": "-0.307856", "Platform /": "Platform", "Collected": "User:Gagravarr", "Collecte_1": "24/11/06", "Line": "Piccadilly", "Step free": null, "l_Bakerloo": 0, "l_Central": 0, "l_Circle": 0, "l_District": 0, "l_East Lon": 0, "l_Hammersm": 0, "l_Jubilee": 0, "l_Metropol": 0, "l_Northern": 0, "l_Overgrou": 0, "l_Piccadil": 1, "l_Thamesli": 0, "l_Victoria": 0, "l_Waterloo": 0, "seq": 0 }, "geometry": { "type": "Point", "coordinates": [ -0.307856, 51.500801 ] } },
        { "type": "Feature", "properties": { "Name": "South Harrow", "Latitude": "51.56461", "Longitude": "-0.35210", "Platform /": "Platform", "Collected": "User:Mattwestcott", "Collecte_1": "28/01/2007", "Line": "Piccadilly", "Step free": null, "l_Bakerloo": 0, "l_Central": 0, "l_Circle": 0, "l_District": 0, "l_East Lon": 0, "l_Hammersm": 0, "l_Jubilee": 0, "l_Metropol": 0, "l_Northern": 0, "l_Overgrou": 0, "l_Piccadil": 1, "l_Thamesli": 0, "l_Victoria": 0, "l_Waterloo": 0, "seq": 0 }, "geometry": { "type": "Point", "coordinates": [ -0.3521, 51.56461 ] } },
        { "type": "Feature", "properties": { "Name": "South Kensington", "Latitude": "51.494066", "Longitude": "-0.172791", "Platform /": "C/D Platform", "Collected": "User:Gagravarr", "Collecte_1": "24/11/06", "Line": "Circle, District, Piccadilly", "Step free": "Unsure (Steps from/to 'surface' platforms?).", "l_Bakerloo": 0, "l_Central": 0, "l_Circle": 1, "l_District": 1, "l_East Lon": 0, "l_Hammersm": 0, "l_Jubilee": 0, "l_Metropol": 0, "l_Northern": 0, "l_Overgrou": 0, "l_Piccadil": 1, "l_Thamesli": 0, "l_Victoria": 0, "l_Waterloo": 0, "seq": 0 }, "geometry": { "type": "Point", "coordinates": [ -0.172791, 51.494066 ] } },
        { "type": "Feature", "properties": { "Name": "Southgate", "Latitude": "51.63240", "Longitude": "-0.12765", "Platform /": "entrance", "Collected": "User:Morwen", "Collecte_1": "2/5/2007", "Line": "Piccadilly", "Step free": null, "l_Bakerloo": 0, "l_Central": 0, "l_Circle": 0, "l_District": 0, "l_East Lon": 0, "l_Hammersm": 0, "l_Jubilee": 0, "l_Metropol": 0, "l_Northern": 0, "l_Overgrou": 0, "l_Piccadil": 1, "l_Thamesli": 0, "l_Victoria": 0, "l_Waterloo": 0, "seq": 0 }, "geometry": { "type": "Point", "coordinates": [ -0.12765, 51.6324 ] } },
        { "type": "Feature", "properties": { "Name": "Sudbury Hill", "Latitude": "51.556998", "Longitude": "-0.335949", "Platform /": "Entrance", "Collected": "User:Firefishy", "Collecte_1": "31/10/06", "Line": "Piccadilly", "Step free": null, "l_Bakerloo": 0, "l_Central": 0, "l_Circle": 0, "l_District": 0, "l_East Lon": 0, "l_Hammersm": 0, "l_Jubilee": 0, "l_Metropol": 0, "l_Northern": 0, "l_Overgrou": 0, "l_Piccadil": 1, "l_Thamesli": 0, "l_Victoria": 0, "l_Waterloo": 0, "seq": 0 }, "geometry": { "type": "Point", "coordinates": [ -0.335949, 51.556998 ] } },
        { "type": "Feature", "properties": { "Name": "Sudbury Town", "Latitude": "51.55093", "Longitude": "-0.31598", "Platform /": "Platform", "Collected": "User:Mattwestcott", "Collecte_1": "28/01/2007", "Line": "Piccadilly", "Step free": null, "l_Bakerloo": 0, "l_Central": 0, "l_Circle": 0, "l_District": 0, "l_East Lon": 0, "l_Hammersm": 0, "l_Jubilee": 0, "l_Metropol": 0, "l_Northern": 0, "l_Overgrou": 0, "l_Piccadil": 1, "l_Thamesli": 0, "l_Victoria": 0, "l_Waterloo": 0, "seq": 0 }, "geometry": { "type": "Point", "coordinates": [ -0.31598, 51.55093 ] } },
        { "type": "Feature", "properties": { "Name": "Turnpike Lane", "Latitude": "51.59031", "Longitude": "-0.10308", "Platform /": "entrance", "Collected": "User:Morwen", "Collecte_1": "16/5/2007", "Line": "Piccadilly", "Step free": "No (Escalators)", "l_Bakerloo": 0, "l_Central": 0, "l_Circle": 0, "l_District": 0, "l_East Lon": 0, "l_Hammersm": 0, "l_Jubilee": 0, "l_Metropol": 0, "l_Northern": 0, "l_Overgrou": 0, "l_Piccadil": 1, "l_Thamesli": 0, "l_Victoria": 0, "l_Waterloo": 0, "seq": 0 }, "geometry": { "type": "Point", "coordinates": [ -0.10308, 51.59031 ] } },
        { "type": "Feature", "properties": { "Name": "Uxbridge", "Latitude": "51.54687", "Longitude": "-0.47725", "Platform /": "Platform", "Collected": "User:Mattwestcott", "Collecte_1": "28/01/2007", "Line": "Piccadilly, Metropolitan", "Step free": "Yes ( Flat access from street)", "l_Bakerloo": 0, "l_Central": 0, "l_Circle": 0, "l_District": 0, "l_East Lon": 0, "l_Hammersm": 0, "l_Jubilee": 0, "l_Metropol": 1, "l_Northern": 0, "l_Overgrou": 0, "l_Piccadil": 1, "l_Thamesli": 0, "l_Victoria": 0, "l_Waterloo": 0, "seq": 0 }, "geometry": { "type": "Point", "coordinates": [ -0.47725, 51.54687 ] } },
        { "type": "Feature", "properties": { "Name": "Wood Green", "Latitude": "51.59709", "Longitude": "-0.10939", "Platform /": "Entrance", "Collected": "User:Morwen", "Collecte_1": "26/05/2007", "Line": "Piccadilly", "Step free": "No (Escalators)", "l_Bakerloo": 0, "l_Central": 0, "l_Circle": 0, "l_District": 0, "l_East Lon": 0, "l_Hammersm": 0, "l_Jubilee": 0, "l_Metropol": 0, "l_Northern": 0, "l_Overgrou": 0, "l_Piccadil": 1, "l_Thamesli": 0, "l_Victoria": 0, "l_Waterloo": 0, "seq": 0 }, "geometry": { "type": "Point", "coordinates": [ -0.10939, 51.59709 ] } }
        ]
        }
        