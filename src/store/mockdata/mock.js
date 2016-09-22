

function mocker() {
    const md=new Map();

    md.set(60432515,{
  "$self" : "/VERDIS_GRUNDIS.KASSENZEICHEN/3270",
  "id" : 3270,
  "datum_erfassung" : "2003-01-01",
  "datum_veranlagung" : "03/01",
  "bemerkung" : null,
  "sperre" : true,
  "bemerkung_sperre" : "beim letzten Speichern nicht veranlagt",
  "dms_urls" : [ {
    "$self" : "/VERDIS_GRUNDIS.DMS_URL/3",
    "id" : 3,
    "typ" : 0,
    "name" : "DMS",
    "description" : "DMS Link",
    "url_id" : {
      "$self" : "/VERDIS_GRUNDIS.URL/3",
      "id" : 3,
      "url_base_id" : {
        "$self" : "/VERDIS_GRUNDIS.URL_BASE/1",
        "id" : 1,
        "prot_prefix" : "http://",
        "server" : "s4021029",
        "path" : "/weblink/default.asp?Mode=SearchDirect&Channel=WTAL&Archive=VORN&Query="
      },
      "object_name" : ""
    }
  }, {
    "$self" : "/VERDIS_GRUNDIS.DMS_URL/238705",
    "id" : 238705,
    "typ" : 2,
    "name" : "02.02.2006 EF",
    "description" : null,
    "url_id" : {
      "$self" : "/VERDIS_GRUNDIS.URL/53922",
      "id" : 53922,
      "url_base_id" : {
        "$self" : "/VERDIS_GRUNDIS.URL_BASE/303",
        "id" : 303,
        "prot_prefix" : "\\\\",
        "server" : "s402x023",
        "path" : "\\EasyArchiv-Migration$\\Export_2012_01.114\\"
      },
      "object_name" : "261.TIF"
    }
  }, {
    "$self" : "/VERDIS_GRUNDIS.DMS_URL/627685",
    "id" : 627685,
    "typ" : 2,
    "name" : "24.01.2014 STR",
    "description" : null,
    "url_id" : {
      "$self" : "/VERDIS_GRUNDIS.URL/413248",
      "id" : 413248,
      "url_base_id" : {
        "$self" : "/VERDIS_GRUNDIS.URL_BASE/1658",
        "id" : 1658,
        "prot_prefix" : "\\\\",
        "server" : "s402x023",
        "path" : "\\EasyArchiv-Migration$\\FF_1_2014\\"
      },
      "object_name" : "055.PDF"
    }
  } ],
  "flaechen" : [ {
    "$self" : "/VERDIS_GRUNDIS.FLAECHE/589226",
    "id" : 589226,
    "flaecheninfo" : {
      "$self" : "/VERDIS_GRUNDIS.FLAECHENINFO/587951",
      "id" : 587951,
      "groesse_aus_grafik" : 1440,
      "groesse_korrektur" : 1440,
      "flaechenart" : {
        "$self" : "/VERDIS_GRUNDIS.FLAECHENART/1",
        "id" : 1,
        "art" : "Dachfläche",
        "art_abkuerzung" : "DF"
      },
      "anschlussgrad" : {
        "$self" : "/VERDIS_GRUNDIS.ANSCHLUSSGRAD/1",
        "id" : 1,
        "grad" : "Am Kanal angeschlossen",
        "grad_abkuerzung" : "angeschl."
      },
      "geometrie" : {
        "$self" : "/VERDIS_GRUNDIS.GEOM/645327",
        "geo_field" : "SRID=25832;POLYGON ((374434.773388274 5681708.410269481, 374422.9765875824 5681681.326124268, 374416.4917460494 5681678.77451399, 374414.6316594295 5681678.042241155, 374388.7985139042 5681667.87650333, 374378.45250927284 5681672.500879675, 374369.5769530609 5681695.245395789, 374377.3835603334 5681698.2688674955, 374384.26506664976 5681680.825143035, 374403.19203012437 5681688.089174278, 374405.2701534666 5681692.783884902, 374412.0159482844 5681708.02086718, 374410.9620341733 5681710.78136942, 374407.27580372244 5681720.352106105, 374410.5685532801 5681721.474190737, 374413.7243855968 5681713.191018979, 374422.6200171821 5681716.820486266, 374419.31595605984 5681725.170663593, 374427.1594889499 5681728.050702512, 374431.3764658645 5681717.166099008, 374434.773388274 5681708.410269481))",
        "id" : 645327
      },
      "beschreibung" : null
    },
    "anteil" : null,
    "flaechenbezeichnung" : "1",
    "bemerkung" : null,
    "datum_erfassung" : "2003-01-01",
    "datum_veranlagung" : "03/01",
    "sperre" : null,
    "bemerkung_sperre" : "",
    "feb_id" : "20113214"
  }, {
    "$self" : "/VERDIS_GRUNDIS.FLAECHE/589228",
    "id" : 589228,
    "flaecheninfo" : {
      "$self" : "/VERDIS_GRUNDIS.FLAECHENINFO/587953",
      "id" : 587953,
      "groesse_aus_grafik" : 630,
      "groesse_korrektur" : 630,
      "flaechenart" : {
        "$self" : "/VERDIS_GRUNDIS.FLAECHENART/1",
        "id" : 1,
        "art" : "Dachfläche",
        "art_abkuerzung" : "DF"
      },
      "anschlussgrad" : {
        "$self" : "/VERDIS_GRUNDIS.ANSCHLUSSGRAD/1",
        "id" : 1,
        "grad" : "Am Kanal angeschlossen",
        "grad_abkuerzung" : "angeschl."
      },
      "geometrie" : {
        "$self" : "/VERDIS_GRUNDIS.GEOM/645329",
        "geo_field" : "SRID=25832;POLYGON ((374374.44496824965 5681668.141103344, 374373.5636382215 5681670.398277476, 374370.3864017278 5681678.538660744, 374369.84194113314 5681679.9327761475, 374368.7586121708 5681682.707541707, 374364.5880611874 5681693.39535087, 374357.3498981334 5681711.930402555, 374362.02178449556 5681722.267127572, 374367.8520328663 5681724.537155593, 374370.6056430824 5681725.610275846, 374398.67506117374 5681736.541539618, 374419.24566970393 5681744.552331944, 374426.2487922609 5681741.406558446, 374435.0392598994 5681718.4447957855, 374432.8491958231 5681713.375438069, 374431.3764658645 5681717.166099008, 374427.1594889499 5681728.050702512, 374423.4436060935 5681737.6362369135, 374416.3682115525 5681740.728864615, 374408.7560755983 5681737.75935382, 374367.7922964059 5681721.801216054, 374363.2468686253 5681711.49434835, 374369.5769530609 5681695.245395789, 374378.45250927284 5681672.500879675, 374388.7985139042 5681667.87650333, 374381.56089483574 5681665.173623611, 374376.58572147787 5681667.249051013, 374374.44496824965 5681668.141103344))",
        "id" : 645329
      },
      "beschreibung" : null
    },
    "anteil" : null,
    "flaechenbezeichnung" : "3",
    "bemerkung" : null,
    "datum_erfassung" : "2003-01-01",
    "datum_veranlagung" : "03/01",
    "sperre" : null,
    "bemerkung_sperre" : "",
    "feb_id" : "20113214"
  }, {
    "$self" : "/VERDIS_GRUNDIS.FLAECHE/589234",
    "id" : 589234,
    "flaecheninfo" : {
      "$self" : "/VERDIS_GRUNDIS.FLAECHENINFO/587959",
      "id" : 587959,
      "groesse_aus_grafik" : 921,
      "groesse_korrektur" : 921,
      "flaechenart" : {
        "$self" : "/VERDIS_GRUNDIS.FLAECHENART/1",
        "id" : 1,
        "art" : "Dachfläche",
        "art_abkuerzung" : "DF"
      },
      "anschlussgrad" : {
        "$self" : "/VERDIS_GRUNDIS.ANSCHLUSSGRAD/1",
        "id" : 1,
        "grad" : "Am Kanal angeschlossen",
        "grad_abkuerzung" : "angeschl."
      },
      "geometrie" : {
        "$self" : "/VERDIS_GRUNDIS.GEOM/645335",
        "geo_field" : "SRID=25832;POLYGON ((374369.5769530609 5681695.245395789, 374363.2468686253 5681711.49434835, 374367.7922964059 5681721.801216054, 374408.7560755983 5681737.75935382, 374416.3682115525 5681740.728864615, 374423.4436060935 5681737.6362369135, 374427.1594889499 5681728.050702512, 374419.31595605984 5681725.170663593, 374415.80162252486 5681734.051718642, 374407.10246491805 5681730.567339886, 374410.5685532801 5681721.474190737, 374407.27580372244 5681720.352106105, 374406.51868823916 5681722.323029593, 374387.410209395 5681715.053484189, 374380.30833624676 5681712.352118315, 374375.8031506762 5681702.275660359, 374377.3835603334 5681698.2688674955, 374369.5769530609 5681695.245395789))",
        "id" : 645335
      },
      "beschreibung" : null
    },
    "anteil" : null,
    "flaechenbezeichnung" : "2",
    "bemerkung" : null,
    "datum_erfassung" : "2003-01-01",
    "datum_veranlagung" : "03/01",
    "sperre" : null,
    "bemerkung_sperre" : "",
    "feb_id" : "20113214"
  }, {
    "$self" : "/VERDIS_GRUNDIS.FLAECHE/589235",
    "id" : 589235,
    "flaecheninfo" : {
      "$self" : "/VERDIS_GRUNDIS.FLAECHENINFO/587960",
      "id" : 587960,
      "groesse_aus_grafik" : 176,
      "groesse_korrektur" : 176,
      "flaechenart" : {
        "$self" : "/VERDIS_GRUNDIS.FLAECHENART/1",
        "id" : 1,
        "art" : "Dachfläche",
        "art_abkuerzung" : "DF"
      },
      "anschlussgrad" : {
        "$self" : "/VERDIS_GRUNDIS.ANSCHLUSSGRAD/1",
        "id" : 1,
        "grad" : "Am Kanal angeschlossen",
        "grad_abkuerzung" : "angeschl."
      },
      "geometrie" : {
        "$self" : "/VERDIS_GRUNDIS.GEOM/645336",
        "geo_field" : "SRID=25832;POLYGON ((374410.5685532801 5681721.474190737, 374407.10246491805 5681730.567339886, 374415.80162252486 5681734.051718642, 374419.31595605984 5681725.170663593, 374422.6200171821 5681716.820486266, 374413.7243855968 5681713.191018979, 374410.5685532801 5681721.474190737))",
        "id" : 645336
      },
      "beschreibung" : null
    },
    "anteil" : null,
    "flaechenbezeichnung" : "8",
    "bemerkung" : null,
    "datum_erfassung" : "2003-01-01",
    "datum_veranlagung" : "03/01",
    "sperre" : null,
    "bemerkung_sperre" : "",
    "feb_id" : "20113214"
  }, {
    "$self" : "/VERDIS_GRUNDIS.FLAECHE/589236",
    "id" : 589236,
    "flaecheninfo" : {
      "$self" : "/VERDIS_GRUNDIS.FLAECHENINFO/587961",
      "id" : 587961,
      "groesse_aus_grafik" : 308,
      "groesse_korrektur" : 308,
      "flaechenart" : {
        "$self" : "/VERDIS_GRUNDIS.FLAECHENART/1",
        "id" : 1,
        "art" : "Dachfläche",
        "art_abkuerzung" : "DF"
      },
      "anschlussgrad" : {
        "$self" : "/VERDIS_GRUNDIS.ANSCHLUSSGRAD/1",
        "id" : 1,
        "grad" : "Am Kanal angeschlossen",
        "grad_abkuerzung" : "angeschl."
      },
      "geometrie" : {
        "$self" : "/VERDIS_GRUNDIS.GEOM/645337",
        "geo_field" : "SRID=25832;POLYGON ((374402.72631574795 5681707.721178449, 374393.44273030385 5681704.150256776, 374387.410209395 5681715.053484189, 374406.51868823916 5681722.323029593, 374410.9620341733 5681710.78136942, 374412.0159482844 5681708.02086718, 374405.2701534666 5681692.783884902, 374402.80293780565 5681694.254542452, 374407.1656307094 5681703.824685163, 374406.36455147713 5681705.960600799, 374402.72631574795 5681707.721178449))",
        "id" : 645337
      },
      "beschreibung" : null
    },
    "anteil" : null,
    "flaechenbezeichnung" : "7",
    "bemerkung" : null,
    "datum_erfassung" : "2003-01-01",
    "datum_veranlagung" : "03/01",
    "sperre" : null,
    "bemerkung_sperre" : "",
    "feb_id" : "20113214"
  }, {
    "$self" : "/VERDIS_GRUNDIS.FLAECHE/589244",
    "id" : 589244,
    "flaecheninfo" : {
      "$self" : "/VERDIS_GRUNDIS.FLAECHENINFO/587969",
      "id" : 587969,
      "groesse_aus_grafik" : 330,
      "groesse_korrektur" : 330,
      "flaechenart" : {
        "$self" : "/VERDIS_GRUNDIS.FLAECHENART/1",
        "id" : 1,
        "art" : "Dachfläche",
        "art_abkuerzung" : "DF"
      },
      "anschlussgrad" : {
        "$self" : "/VERDIS_GRUNDIS.ANSCHLUSSGRAD/1",
        "id" : 1,
        "grad" : "Am Kanal angeschlossen",
        "grad_abkuerzung" : "angeschl."
      },
      "geometrie" : {
        "$self" : "/VERDIS_GRUNDIS.GEOM/645345",
        "geo_field" : "SRID=25832;POLYGON ((374384.26506664976 5681680.825143035, 374377.3835603334 5681698.2688674955, 374375.8031506762 5681702.275660359, 374380.30833624676 5681712.352118315, 374387.410209395 5681715.053484189, 374393.44273030385 5681704.150256776, 374390.66428945214 5681703.081283116, 374389.1451023184 5681699.624360003, 374386.76286727935 5681698.723144764, 374385.3738457896 5681695.4869631305, 374382.7783773765 5681694.439405516, 374385.9094628282 5681687.051446496, 374389.336277578 5681685.308438372, 374400.75179905444 5681689.754791658, 374402.80293780565 5681694.254542452, 374405.2701534666 5681692.783884902, 374403.19203012437 5681688.089174278, 374384.26506664976 5681680.825143035))",
        "id" : 645345
      },
      "beschreibung" : null
    },
    "anteil" : null,
    "flaechenbezeichnung" : "5",
    "bemerkung" : null,
    "datum_erfassung" : "2003-01-01",
    "datum_veranlagung" : "03/01",
    "sperre" : null,
    "bemerkung_sperre" : "",
    "feb_id" : "20113214"
  }, {
    "$self" : "/VERDIS_GRUNDIS.FLAECHE/589245",
    "id" : 589245,
    "flaecheninfo" : {
      "$self" : "/VERDIS_GRUNDIS.FLAECHENINFO/587970",
      "id" : 587970,
      "groesse_aus_grafik" : 316,
      "groesse_korrektur" : 316,
      "flaechenart" : {
        "$self" : "/VERDIS_GRUNDIS.FLAECHENART/1",
        "id" : 1,
        "art" : "Dachfläche",
        "art_abkuerzung" : "DF"
      },
      "anschlussgrad" : {
        "$self" : "/VERDIS_GRUNDIS.ANSCHLUSSGRAD/1",
        "id" : 1,
        "grad" : "Am Kanal angeschlossen",
        "grad_abkuerzung" : "angeschl."
      },
      "geometrie" : {
        "$self" : "/VERDIS_GRUNDIS.GEOM/645346",
        "geo_field" : "SRID=25832;POLYGON ((374393.44273030385 5681704.150256776, 374402.7263230607 5681707.721175808, 374406.36455147713 5681705.960600799, 374407.1656307094 5681703.824685163, 374402.80293780565 5681694.254542452, 374400.75179905444 5681689.754791658, 374389.336277578 5681685.308438372, 374385.9094628282 5681687.051446496, 374382.7783773765 5681694.439405516, 374385.3738457896 5681695.4869631305, 374386.76286727935 5681698.723144764, 374389.1451023184 5681699.624360003, 374390.66428945214 5681703.081283116, 374393.44273030385 5681704.150256776))",
        "id" : 645346
      },
      "beschreibung" : null
    },
    "anteil" : null,
    "flaechenbezeichnung" : "6",
    "bemerkung" : null,
    "datum_erfassung" : "2003-01-01",
    "datum_veranlagung" : "03/01",
    "sperre" : null,
    "bemerkung_sperre" : "",
    "feb_id" : "20113214"
  }, {
    "$self" : "/VERDIS_GRUNDIS.FLAECHE/589258",
    "id" : 589258,
    "flaecheninfo" : {
      "$self" : "/VERDIS_GRUNDIS.FLAECHENINFO/587983",
      "id" : 587983,
      "groesse_aus_grafik" : 54,
      "groesse_korrektur" : 54,
      "flaechenart" : {
        "$self" : "/VERDIS_GRUNDIS.FLAECHENART/1",
        "id" : 1,
        "art" : "Dachfläche",
        "art_abkuerzung" : "DF"
      },
      "anschlussgrad" : {
        "$self" : "/VERDIS_GRUNDIS.ANSCHLUSSGRAD/1",
        "id" : 1,
        "grad" : "Am Kanal angeschlossen",
        "grad_abkuerzung" : "angeschl."
      },
      "geometrie" : {
        "$self" : "/VERDIS_GRUNDIS.GEOM/645359",
        "geo_field" : "SRID=25832;POLYGON ((374424.05835617706 5681656.480910969, 374423.78805617616 5681656.3790162485, 374424.4986653589 5681654.551878816, 374422.5528591573 5681653.796827279, 374416.79505143315 5681671.419142242, 374414.6316594295 5681678.042241155, 374416.4917460494 5681678.77451399, 374419.1694616154 5681670.883769487, 374423.52084916085 5681658.065775536, 374424.05835617706 5681656.480910969))",
        "id" : 645359
      },
      "beschreibung" : null
    },
    "anteil" : null,
    "flaechenbezeichnung" : "9",
    "bemerkung" : null,
    "datum_erfassung" : "2003-01-01",
    "datum_veranlagung" : "03/01",
    "sperre" : null,
    "bemerkung_sperre" : "",
    "feb_id" : "20113214"
  }, {
    "$self" : "/VERDIS_GRUNDIS.FLAECHE/589259",
    "id" : 589259,
    "flaecheninfo" : {
      "$self" : "/VERDIS_GRUNDIS.FLAECHENINFO/587984",
      "id" : 587984,
      "groesse_aus_grafik" : 390,
      "groesse_korrektur" : 390,
      "flaechenart" : {
        "$self" : "/VERDIS_GRUNDIS.FLAECHENART/1",
        "id" : 1,
        "art" : "Dachfläche",
        "art_abkuerzung" : "DF"
      },
      "anschlussgrad" : {
        "$self" : "/VERDIS_GRUNDIS.ANSCHLUSSGRAD/1",
        "id" : 1,
        "grad" : "Am Kanal angeschlossen",
        "grad_abkuerzung" : "angeschl."
      },
      "geometrie" : {
        "$self" : "/VERDIS_GRUNDIS.GEOM/645360",
        "geo_field" : "SRID=25832;POLYGON ((374438.9843366742 5681719.429045144, 374439.31738610193 5681718.594871075, 374437.0052772127 5681713.644746346, 374437.0622850619 5681713.498355743, 374438.277008865 5681710.416162215, 374439.9440947436 5681706.186650011, 374438.4164100401 5681702.708169715, 374438.067838341 5681701.917135054, 374430.2876061052 5681684.213144288, 374422.9765875824 5681681.326124268, 374434.773388274 5681708.410269481, 374432.8491824232 5681713.375439648, 374435.03925526515 5681718.444796906, 374426.2487922609 5681741.406558446, 374419.24566970393 5681744.552331944, 374398.67506117374 5681736.541539618, 374399.86592690274 5681739.729557182, 374399.8928622827 5681739.800391025, 374400.1135537289 5681739.887535271, 374400.11958394945 5681739.889152484, 374420.5968449861 5681747.946765413, 374423.6485084444 5681746.601364936, 374429.35076127946 5681744.088157359, 374435.87735934183 5681727.382140706, 374436.01063338295 5681727.040499203, 374438.0179240741 5681721.902826812, 374438.0883890204 5681721.720851653, 374438.9843366742 5681719.429045144))",
        "id" : 645360
      },
      "beschreibung" : null
    },
    "anteil" : null,
    "flaechenbezeichnung" : "4",
    "bemerkung" : null,
    "datum_erfassung" : "2003-01-01",
    "datum_veranlagung" : "03/01",
    "sperre" : null,
    "bemerkung_sperre" : "",
    "feb_id" : "20113214"
  }, {
    "$self" : "/VERDIS_GRUNDIS.FLAECHE/589260",
    "id" : 589260,
    "flaecheninfo" : {
      "$self" : "/VERDIS_GRUNDIS.FLAECHENINFO/587985",
      "id" : 587985,
      "groesse_aus_grafik" : 155,
      "groesse_korrektur" : 155,
      "flaechenart" : {
        "$self" : "/VERDIS_GRUNDIS.FLAECHENART/3",
        "id" : 3,
        "art" : "versiegelte Fläche",
        "art_abkuerzung" : "VF"
      },
      "anschlussgrad" : {
        "$self" : "/VERDIS_GRUNDIS.ANSCHLUSSGRAD/1",
        "id" : 1,
        "grad" : "Am Kanal angeschlossen",
        "grad_abkuerzung" : "angeschl."
      },
      "geometrie" : {
        "$self" : "/VERDIS_GRUNDIS.GEOM/645361",
        "geo_field" : "SRID=25832;POLYGON ((374441.872718852 5681682.358928161, 374439.0428243689 5681683.52517316, 374434.45888034254 5681685.415413512, 374430.2876061052 5681684.213144288, 374438.067838341 5681701.917135054, 374447.37297398224 5681678.2848375235, 374444.01502615213 5681677.028271179, 374441.872718852 5681682.358928161))",
        "id" : 645361
      },
      "beschreibung" : null
    },
    "anteil" : null,
    "flaechenbezeichnung" : "B",
    "bemerkung" : null,
    "datum_erfassung" : "2003-01-01",
    "datum_veranlagung" : "03/01",
    "sperre" : null,
    "bemerkung_sperre" : "",
    "feb_id" : "20113214"
  }, {
    "$self" : "/VERDIS_GRUNDIS.FLAECHE/589267",
    "id" : 589267,
    "flaecheninfo" : {
      "$self" : "/VERDIS_GRUNDIS.FLAECHENINFO/587992",
      "id" : 587992,
      "groesse_aus_grafik" : 44,
      "groesse_korrektur" : 44,
      "flaechenart" : {
        "$self" : "/VERDIS_GRUNDIS.FLAECHENART/3",
        "id" : 3,
        "art" : "versiegelte Fläche",
        "art_abkuerzung" : "VF"
      },
      "anschlussgrad" : {
        "$self" : "/VERDIS_GRUNDIS.ANSCHLUSSGRAD/1",
        "id" : 1,
        "grad" : "Am Kanal angeschlossen",
        "grad_abkuerzung" : "angeschl."
      },
      "geometrie" : {
        "$self" : "/VERDIS_GRUNDIS.GEOM/645368",
        "geo_field" : "SRID=25832;POLYGON ((374448.34704221785 5681665.694086004, 374444.01502615213 5681677.028271179, 374447.37297398224 5681678.2848375235, 374451.7795132138 5681667.031672541, 374448.34704221785 5681665.694086004))",
        "id" : 645368
      },
      "beschreibung" : null
    },
    "anteil" : null,
    "flaechenbezeichnung" : "D",
    "bemerkung" : null,
    "datum_erfassung" : "2003-01-01",
    "datum_veranlagung" : "03/01",
    "sperre" : null,
    "bemerkung_sperre" : "",
    "feb_id" : "20113214"
  }, {
    "$self" : "/VERDIS_GRUNDIS.FLAECHE/589268",
    "id" : 589268,
    "flaecheninfo" : {
      "$self" : "/VERDIS_GRUNDIS.FLAECHENINFO/587993",
      "id" : 587993,
      "groesse_aus_grafik" : 119,
      "groesse_korrektur" : 119,
      "flaechenart" : {
        "$self" : "/VERDIS_GRUNDIS.FLAECHENART/3",
        "id" : 3,
        "art" : "versiegelte Fläche",
        "art_abkuerzung" : "VF"
      },
      "anschlussgrad" : {
        "$self" : "/VERDIS_GRUNDIS.ANSCHLUSSGRAD/1",
        "id" : 1,
        "grad" : "Am Kanal angeschlossen",
        "grad_abkuerzung" : "angeschl."
      },
      "geometrie" : {
        "$self" : "/VERDIS_GRUNDIS.GEOM/645369",
        "geo_field" : "SRID=25832;POLYGON ((374393.73802766576 5681738.577201981, 374399.14659609646 5681740.786340162, 374399.2788811065 5681740.840011077, 374400.11958394945 5681739.889152484, 374400.1135537289 5681739.887535271, 374399.8928622827 5681739.800391025, 374399.86592690274 5681739.729557182, 374398.67506117374 5681736.541539618, 374370.6056430824 5681725.610275846, 374369.21204315126 5681729.197034158, 374393.73802766576 5681738.577201981))",
        "id" : 645369
      },
      "beschreibung" : null
    },
    "anteil" : null,
    "flaechenbezeichnung" : "C",
    "bemerkung" : null,
    "datum_erfassung" : "2003-01-01",
    "datum_veranlagung" : "03/01",
    "sperre" : null,
    "bemerkung_sperre" : "",
    "feb_id" : "20113214"
  }, {
    "$self" : "/VERDIS_GRUNDIS.FLAECHE/589269",
    "id" : 589269,
    "flaecheninfo" : {
      "$self" : "/VERDIS_GRUNDIS.FLAECHENINFO/587994",
      "id" : 587994,
      "groesse_aus_grafik" : 16,
      "groesse_korrektur" : 16,
      "flaechenart" : {
        "$self" : "/VERDIS_GRUNDIS.FLAECHENART/3",
        "id" : 3,
        "art" : "versiegelte Fläche",
        "art_abkuerzung" : "VF"
      },
      "anschlussgrad" : {
        "$self" : "/VERDIS_GRUNDIS.ANSCHLUSSGRAD/1",
        "id" : 1,
        "grad" : "Am Kanal angeschlossen",
        "grad_abkuerzung" : "angeschl."
      },
      "geometrie" : {
        "$self" : "/VERDIS_GRUNDIS.GEOM/645370",
        "geo_field" : "SRID=25832;POLYGON ((374365.8305132389 5681729.283010954, 374366.02055614814 5681729.354448804, 374368.7311877087 5681730.4341595825, 374369.21204315126 5681729.197034158, 374370.6056430824 5681725.610275846, 374367.8520328663 5681724.537155593, 374366.2129754685 5681728.384045822, 374365.8305132389 5681729.283010954))",
        "id" : 645370
      },
      "beschreibung" : null
    },
    "anteil" : null,
    "flaechenbezeichnung" : "G",
    "bemerkung" : null,
    "datum_erfassung" : "2003-01-01",
    "datum_veranlagung" : "03/01",
    "sperre" : null,
    "bemerkung_sperre" : "",
    "feb_id" : "20113214"
  }, {
    "$self" : "/VERDIS_GRUNDIS.FLAECHE/589270",
    "id" : 589270,
    "flaecheninfo" : {
      "$self" : "/VERDIS_GRUNDIS.FLAECHENINFO/587995",
      "id" : 587995,
      "groesse_aus_grafik" : 537,
      "groesse_korrektur" : 537,
      "flaechenart" : {
        "$self" : "/VERDIS_GRUNDIS.FLAECHENART/3",
        "id" : 3,
        "art" : "versiegelte Fläche",
        "art_abkuerzung" : "VF"
      },
      "anschlussgrad" : {
        "$self" : "/VERDIS_GRUNDIS.ANSCHLUSSGRAD/1",
        "id" : 1,
        "grad" : "Am Kanal angeschlossen",
        "grad_abkuerzung" : "angeschl."
      },
      "geometrie" : {
        "$self" : "/VERDIS_GRUNDIS.GEOM/645371",
        "geo_field" : "SRID=25832;POLYGON ((374344.09438306093 5681715.230340637, 374345.35669221357 5681715.731144162, 374346.59224063903 5681718.424098632, 374346.0431711525 5681719.875365897, 374345.7641399428 5681720.614134393, 374356.9129065536 5681724.726902298, 374366.2129754685 5681728.384045822, 374367.8520328663 5681724.537155593, 374362.02178449556 5681722.267127572, 374357.3498981334 5681711.930402555, 374368.50126809254 5681683.365317244, 374362.0644330904 5681680.99293704, 374361.1643503383 5681681.370029756, 374358.74844454974 5681682.440297763, 374356.122931052 5681689.099155584, 374356.4423026182 5681690.109632516, 374354.62134232 5681694.984658604, 374350.36493941396 5681696.876503316, 374343.91414150596 5681713.436883952, 374343.43532256037 5681713.304375382, 374343.0868450068 5681712.685166408, 374342.35876584426 5681714.626994218, 374343.00633756816 5681714.437468985, 374343.16717547923 5681714.898108158, 374343.1789768152 5681714.867621651, 374344.09438306093 5681715.230340637))",
        "id" : 645371
      },
      "beschreibung" : null
    },
    "anteil" : null,
    "flaechenbezeichnung" : "A",
    "bemerkung" : null,
    "datum_erfassung" : "2003-01-01",
    "datum_veranlagung" : "03/01",
    "sperre" : null,
    "bemerkung_sperre" : "",
    "feb_id" : "20113214"
  }, {
    "$self" : "/VERDIS_GRUNDIS.FLAECHE/589271",
    "id" : 589271,
    "flaecheninfo" : {
      "$self" : "/VERDIS_GRUNDIS.FLAECHENINFO/587996",
      "id" : 587996,
      "groesse_aus_grafik" : 3,
      "groesse_korrektur" : 3,
      "flaechenart" : {
        "$self" : "/VERDIS_GRUNDIS.FLAECHENART/1",
        "id" : 1,
        "art" : "Dachfläche",
        "art_abkuerzung" : "DF"
      },
      "anschlussgrad" : {
        "$self" : "/VERDIS_GRUNDIS.ANSCHLUSSGRAD/1",
        "id" : 1,
        "grad" : "Am Kanal angeschlossen",
        "grad_abkuerzung" : "angeschl."
      },
      "geometrie" : {
        "$self" : "/VERDIS_GRUNDIS.GEOM/645372",
        "geo_field" : "SRID=25832;POLYGON ((374343.30248974264 5681716.887586805, 374342.3851960115 5681716.944073604, 374343.9084826298 5681720.010476677, 374344.4317427948 5681719.227811539, 374343.30248974264 5681716.887586805))",
        "id" : 645372
      },
      "beschreibung" : null
    },
    "anteil" : null,
    "flaechenbezeichnung" : "11",
    "bemerkung" : null,
    "datum_erfassung" : "2003-01-01",
    "datum_veranlagung" : "03/01",
    "sperre" : null,
    "bemerkung_sperre" : "",
    "feb_id" : "20113214"
  }, {
    "$self" : "/VERDIS_GRUNDIS.FLAECHE/589272",
    "id" : 589272,
    "flaecheninfo" : {
      "$self" : "/VERDIS_GRUNDIS.FLAECHENINFO/587997",
      "id" : 587997,
      "groesse_aus_grafik" : 9,
      "groesse_korrektur" : 9,
      "flaechenart" : {
        "$self" : "/VERDIS_GRUNDIS.FLAECHENART/1",
        "id" : 1,
        "art" : "Dachfläche",
        "art_abkuerzung" : "DF"
      },
      "anschlussgrad" : {
        "$self" : "/VERDIS_GRUNDIS.ANSCHLUSSGRAD/1",
        "id" : 1,
        "grad" : "Am Kanal angeschlossen",
        "grad_abkuerzung" : "angeschl."
      },
      "geometrie" : {
        "$self" : "/VERDIS_GRUNDIS.GEOM/645373",
        "geo_field" : "SRID=25832;POLYGON ((374343.30248974264 5681716.887586805, 374344.4317427948 5681719.227811539, 374346.0431711525 5681719.875365897, 374346.59224063903 5681718.424098632, 374345.35669221357 5681715.731144162, 374344.09438306093 5681715.230340637, 374343.30248974264 5681716.887586805))",
        "id" : 645373
      },
      "beschreibung" : null
    },
    "anteil" : null,
    "flaechenbezeichnung" : "10",
    "bemerkung" : null,
    "datum_erfassung" : "2003-01-01",
    "datum_veranlagung" : "03/01",
    "sperre" : null,
    "bemerkung_sperre" : "",
    "feb_id" : "20113214"
  }, {
    "$self" : "/VERDIS_GRUNDIS.FLAECHE/589273",
    "id" : 589273,
    "flaecheninfo" : {
      "$self" : "/VERDIS_GRUNDIS.FLAECHENINFO/587998",
      "id" : 587998,
      "groesse_aus_grafik" : 2,
      "groesse_korrektur" : 2,
      "flaechenart" : {
        "$self" : "/VERDIS_GRUNDIS.FLAECHENART/1",
        "id" : 1,
        "art" : "Dachfläche",
        "art_abkuerzung" : "DF"
      },
      "anschlussgrad" : {
        "$self" : "/VERDIS_GRUNDIS.ANSCHLUSSGRAD/1",
        "id" : 1,
        "grad" : "Am Kanal angeschlossen",
        "grad_abkuerzung" : "angeschl."
      },
      "geometrie" : {
        "$self" : "/VERDIS_GRUNDIS.GEOM/645374",
        "geo_field" : "SRID=25832;POLYGON ((374344.4317427948 5681719.227811539, 374343.9084826298 5681720.010476677, 374345.75790125504 5681720.6302299965, 374345.7641399428 5681720.614134393, 374346.0431711525 5681719.875365897, 374344.4317427948 5681719.227811539))",
        "id" : 645374
      },
      "beschreibung" : null
    },
    "anteil" : null,
    "flaechenbezeichnung" : "12",
    "bemerkung" : null,
    "datum_erfassung" : "2003-01-01",
    "datum_veranlagung" : "03/01",
    "sperre" : null,
    "bemerkung_sperre" : "",
    "feb_id" : "20113214"
  }, {
    "$self" : "/VERDIS_GRUNDIS.FLAECHE/589274",
    "id" : 589274,
    "flaecheninfo" : {
      "$self" : "/VERDIS_GRUNDIS.FLAECHENINFO/587999",
      "id" : 587999,
      "groesse_aus_grafik" : 2,
      "groesse_korrektur" : 2,
      "flaechenart" : {
        "$self" : "/VERDIS_GRUNDIS.FLAECHENART/1",
        "id" : 1,
        "art" : "Dachfläche",
        "art_abkuerzung" : "DF"
      },
      "anschlussgrad" : {
        "$self" : "/VERDIS_GRUNDIS.ANSCHLUSSGRAD/1",
        "id" : 1,
        "grad" : "Am Kanal angeschlossen",
        "grad_abkuerzung" : "angeschl."
      },
      "geometrie" : {
        "$self" : "/VERDIS_GRUNDIS.GEOM/645375",
        "geo_field" : "SRID=25832;POLYGON ((374343.1789768152 5681714.867621651, 374343.16717547923 5681714.898108158, 374342.3851960115 5681716.944073604, 374343.30248974264 5681716.887586805, 374344.09438306093 5681715.230340637, 374343.1789768152 5681714.867621651))",
        "id" : 645375
      },
      "beschreibung" : null
    },
    "anteil" : null,
    "flaechenbezeichnung" : "13",
    "bemerkung" : null,
    "datum_erfassung" : "2003-01-01",
    "datum_veranlagung" : "03/01",
    "sperre" : null,
    "bemerkung_sperre" : "",
    "feb_id" : "20113214"
  }, {
    "$self" : "/VERDIS_GRUNDIS.FLAECHE/589279",
    "id" : 589279,
    "flaecheninfo" : {
      "$self" : "/VERDIS_GRUNDIS.FLAECHENINFO/588004",
      "id" : 588004,
      "groesse_aus_grafik" : 31,
      "groesse_korrektur" : 31,
      "flaechenart" : {
        "$self" : "/VERDIS_GRUNDIS.FLAECHENART/3",
        "id" : 3,
        "art" : "versiegelte Fläche",
        "art_abkuerzung" : "VF"
      },
      "anschlussgrad" : {
        "$self" : "/VERDIS_GRUNDIS.ANSCHLUSSGRAD/1",
        "id" : 1,
        "grad" : "Am Kanal angeschlossen",
        "grad_abkuerzung" : "angeschl."
      },
      "geometrie" : {
        "$self" : "/VERDIS_GRUNDIS.GEOM/645381",
        "geo_field" : "SRID=25832;POLYGON ((374429.35076127946 5681744.088157359, 374423.6485084444 5681746.601364936, 374421.96136830375 5681751.275613877, 374425.98729366064 5681752.696932491, 374428.00007299706 5681747.545152778, 374429.35076127946 5681744.088157359))",
        "id" : 645381
      },
      "beschreibung" : null
    },
    "anteil" : null,
    "flaechenbezeichnung" : "E",
    "bemerkung" : null,
    "datum_erfassung" : "2003-01-01",
    "datum_veranlagung" : "03/01",
    "sperre" : null,
    "bemerkung_sperre" : "",
    "feb_id" : "20113214"
  }, {
    "$self" : "/VERDIS_GRUNDIS.FLAECHE/589280",
    "id" : 589280,
    "flaecheninfo" : {
      "$self" : "/VERDIS_GRUNDIS.FLAECHENINFO/588005",
      "id" : 588005,
      "groesse_aus_grafik" : 21,
      "groesse_korrektur" : 21,
      "flaechenart" : {
        "$self" : "/VERDIS_GRUNDIS.FLAECHENART/3",
        "id" : 3,
        "art" : "versiegelte Fläche",
        "art_abkuerzung" : "VF"
      },
      "anschlussgrad" : {
        "$self" : "/VERDIS_GRUNDIS.ANSCHLUSSGRAD/1",
        "id" : 1,
        "grad" : "Am Kanal angeschlossen",
        "grad_abkuerzung" : "angeschl."
      },
      "geometrie" : {
        "$self" : "/VERDIS_GRUNDIS.GEOM/645382",
        "geo_field" : "SRID=25832;POLYGON ((374368.7586121708 5681682.707541707, 374369.84194113314 5681679.9327761475, 374362.7808068618 5681677.90404628, 374361.75991524756 5681680.346010336, 374368.7586121708 5681682.707541707))",
        "id" : 645382
      },
      "beschreibung" : null
    },
    "anteil" : null,
    "flaechenbezeichnung" : "F",
    "bemerkung" : null,
    "datum_erfassung" : "2003-01-01",
    "datum_veranlagung" : "03/01",
    "sperre" : null,
    "bemerkung_sperre" : "",
    "feb_id" : "20113214"
  } ],
  "kanalanschluss" : {
    "$self" : "/VERDIS_GRUNDIS.KANALANSCHLUSS/43410",
    "id" : 43410,
    "rkvorhanden" : false,
    "mkrvorhanden" : false,
    "mksvorhanden" : false,
    "skvorhanden" : false,
    "rkangeschlossen" : {
      "$self" : "/VERDIS_GRUNDIS.ANSCHLUSSSTATUS/-1",
      "id" : -1,
      "name" : ""
    },
    "mkrangeschlossen" : {
      "$self" : "/VERDIS_GRUNDIS.ANSCHLUSSSTATUS/-1",
      "id" : -1,
      "name" : ""
    },
    "mksangeschlossen" : {
      "$self" : "/VERDIS_GRUNDIS.ANSCHLUSSSTATUS/-1",
      "id" : -1,
      "name" : ""
    },
    "skangeschlossen" : {
      "$self" : "/VERDIS_GRUNDIS.ANSCHLUSSSTATUS/-1",
      "id" : -1,
      "name" : ""
    },
    "sgvorhanden" : false,
    "kkavorhanden" : false,
    "sgentleerung" : false,
    "kkaentleerung" : false,
    "evg" : false,
    "befreiungenunderlaubnisse" : [ ]
  },
  "letzte_aenderung_ts" : 1389335883293,
  "letzte_aenderung_von" : "SteinbacherD102@VORN_schreiben_KA",
  "fronten" : [ {
    "$self" : "/VERDIS_GRUNDIS.FRONT/43721",
    "id" : 43721,
    "frontinfo" : {
      "$self" : "/VERDIS_GRUNDIS.FRONTINFO/43697",
      "id" : 43697,
      "strasse" : {
        "$self" : "/VERDIS_GRUNDIS.STRASSE/609",
        "id" : 609,
        "name" : "Große Flurstr.",
        "schluessel" : 1175
      },
      "sr_klasse_or" : {
        "$self" : "/VERDIS_GRUNDIS.STRASSENREINIGUNG/15",
        "id" : 15,
        "name" : "keine Straßenreinigung",
        "schluessel" : -100,
        "key" : null
      },
      "wd_prio_or" : {
        "$self" : "/VERDIS_GRUNDIS.WINTERDIENST/3",
        "id" : 3,
        "name" : "kein Winterdienst",
        "schluessel" : -200,
        "key" : null
      },
      "geometrie" : {
        "$self" : "/VERDIS_GRUNDIS.GEOM/867028",
        "geo_field" : "SRID=25832;LINESTRING (374355.4369945103 5681690.026377187, 374364.8381782347 5681693.535560023, 374382.6739999043 5681700.158999544, 374389.5795672635 5681702.765802995, 374407.3559999044 5681709.346999545, 374416.27099990356 5681712.611999545, 374439.09199990606 5681719.503999545)",
        "id" : 867028
      },
      "wd_veranlagung" : null,
      "sr_veranlagung" : null,
      "laenge_grafik" : 88,
      "laenge_korrektur" : 88,
      "sr_bem" : null,
      "wd_bem" : null,
      "lage_sr" : {
        "$self" : "/VERDIS_GRUNDIS.SATZUNG/828",
        "id" : 828,
        "sr_klasse" : {
          "$self" : "/VERDIS_GRUNDIS.STRASSENREINIGUNG/3",
          "id" : 3,
          "name" : "Straßenreinigung (Klasse A1V 5 x wöchentlich)",
          "schluessel" : 310,
          "key" : "A1V"
        },
        "sr_bem" : null,
        "wd_prio" : null,
        "wd_bem" : null,
        "strasse" : {
          "$self" : "/VERDIS_GRUNDIS.STRASSE/609",
          "id" : 609,
          "name" : "Große Flurstr.",
          "schluessel" : 1175
        }
      },
      "lage_wd" : null,
      "garage_stellplatz" : null,
      "baulasten" : null,
      "grunddienstbarkeit" : null,
      "anteil" : null,
      "quadratwurzel" : null,
      "winkel" : null
    },
    "nummer" : 1,
    "bearbeitet_durch" : null,
    "erfassungsdatum" : "2014-01-08"
  }, {
    "$self" : "/VERDIS_GRUNDIS.FRONT/43802",
    "id" : 43802,
    "frontinfo" : {
      "$self" : "/VERDIS_GRUNDIS.FRONTINFO/43778",
      "id" : 43778,
      "strasse" : {
        "$self" : "/VERDIS_GRUNDIS.STRASSE/730",
        "id" : 730,
        "name" : "Heubruch",
        "schluessel" : 1393
      },
      "sr_klasse_or" : {
        "$self" : "/VERDIS_GRUNDIS.STRASSENREINIGUNG/15",
        "id" : 15,
        "name" : "keine Straßenreinigung",
        "schluessel" : -100,
        "key" : null
      },
      "wd_prio_or" : {
        "$self" : "/VERDIS_GRUNDIS.WINTERDIENST/3",
        "id" : 3,
        "name" : "kein Winterdienst",
        "schluessel" : -200,
        "key" : null
      },
      "geometrie" : {
        "$self" : "/VERDIS_GRUNDIS.GEOM/867372",
        "geo_field" : "SRID=25832;LINESTRING (374355.4369945103 5681690.026377187, 374353.5564779141 5681694.843625032, 374349.88653297577 5681696.09804583, 374345.63818123424 5681707.375964309, 374342.0055343568 5681716.651951704, 374342.7733606756 5681718.364790014)",
        "id" : 867372
      },
      "wd_veranlagung" : null,
      "sr_veranlagung" : null,
      "laenge_grafik" : 32,
      "laenge_korrektur" : 32,
      "sr_bem" : null,
      "wd_bem" : null,
      "lage_sr" : {
        "$self" : "/VERDIS_GRUNDIS.SATZUNG/982",
        "id" : 982,
        "sr_klasse" : {
          "$self" : "/VERDIS_GRUNDIS.STRASSENREINIGUNG/7",
          "id" : 7,
          "name" : "Straßenreinigung (Klasse A3 1 x wöchentlich)",
          "schluessel" : 321,
          "key" : "A3"
        },
        "sr_bem" : "v. Paul-Humburg-Str. b. Treppe",
        "wd_prio" : null,
        "wd_bem" : null,
        "strasse" : {
          "$self" : "/VERDIS_GRUNDIS.STRASSE/730",
          "id" : 730,
          "name" : "Heubruch",
          "schluessel" : 1393
        }
      },
      "lage_wd" : null,
      "garage_stellplatz" : null,
      "baulasten" : null,
      "grunddienstbarkeit" : null,
      "anteil" : null,
      "quadratwurzel" : null,
      "winkel" : null
    },
    "nummer" : 2,
    "bearbeitet_durch" : null,
    "erfassungsdatum" : "2014-01-10"
  }, {
    "$self" : "/VERDIS_GRUNDIS.FRONT/43803",
    "id" : 43803,
    "frontinfo" : {
      "$self" : "/VERDIS_GRUNDIS.FRONTINFO/43779",
      "id" : 43779,
      "strasse" : {
        "$self" : "/VERDIS_GRUNDIS.STRASSE/1160",
        "id" : 1160,
        "name" : "Mühlenweg",
        "schluessel" : 2289
      },
      "sr_klasse_or" : {
        "$self" : "/VERDIS_GRUNDIS.STRASSENREINIGUNG/15",
        "id" : 15,
        "name" : "keine Straßenreinigung",
        "schluessel" : -100,
        "key" : null
      },
      "wd_prio_or" : {
        "$self" : "/VERDIS_GRUNDIS.WINTERDIENST/3",
        "id" : 3,
        "name" : "kein Winterdienst",
        "schluessel" : -200,
        "key" : null
      },
      "geometrie" : {
        "$self" : "/VERDIS_GRUNDIS.GEOM/867373",
        "geo_field" : "SRID=25832;LINESTRING (374342.7733606756 5681718.364790014, 374343.55068847025 5681720.309805679, 374365.82392145187 5681728.935630103, 374369.60294143355 5681730.351083457, 374401.2081215257 5681742.605514395, 374426.09899990517 5681752.776999546)",
        "id" : 867373
      },
      "wd_veranlagung" : null,
      "sr_veranlagung" : null,
      "laenge_grafik" : 90,
      "laenge_korrektur" : 90,
      "sr_bem" : null,
      "wd_bem" : null,
      "lage_sr" : {
        "$self" : "/VERDIS_GRUNDIS.SATZUNG/1538",
        "id" : 1538,
        "sr_klasse" : {
          "$self" : "/VERDIS_GRUNDIS.STRASSENREINIGUNG/3",
          "id" : 3,
          "name" : "Straßenreinigung (Klasse A1V 5 x wöchentlich)",
          "schluessel" : 310,
          "key" : "A1V"
        },
        "sr_bem" : "westl. Bachstr.",
        "wd_prio" : null,
        "wd_bem" : null,
        "strasse" : {
          "$self" : "/VERDIS_GRUNDIS.STRASSE/1160",
          "id" : 1160,
          "name" : "Mühlenweg",
          "schluessel" : 2289
        }
      },
      "lage_wd" : null,
      "garage_stellplatz" : null,
      "baulasten" : null,
      "grunddienstbarkeit" : null,
      "anteil" : null,
      "quadratwurzel" : null,
      "winkel" : null
    },
    "nummer" : 3,
    "bearbeitet_durch" : null,
    "erfassungsdatum" : "2014-01-10"
  } ],
  "bemerkung_zu_abgaben" : null,
  "grundsteuer" : null,
  "schmutzwasser" : null,
  "abfallgebuehr" : null,
  "kassenzeichennummer" : 6043251,
  "kassenzeichennummer7" : 6043251,
  "kassenzeichennummer8" : 60432515,
  "kassenzeichen_geometrien" : [ {
    "$self" : "/VERDIS_GRUNDIS.KASSENZEICHEN_GEOMETRIE/27599",
    "id" : 27599,
    "kassenzeichen" : null,
    "istfrei" : false,
    "name" : "053001-118-00089",
    "geometrie" : {
      "$self" : "/VERDIS_GRUNDIS.GEOM/867031",
      "geo_field" : "SRID=25832;POLYGON ((374435.6067561768 5681756.226160761, 374433.9457641989 5681755.622898915, 374432.2839052193 5681755.022327786, 374430.6212626733 5681754.424491476, 374429.10948160663 5681753.8849794045, 374427.597040914 5681753.347624327, 374426.0838730149 5681752.812388713, 374436.10165951774 5681727.148815787, 374438.17845418677 5681721.828563822, 374439.0744397491 5681719.536539812, 374438.7774341181 5681719.447530033, 374416.2603362091 5681712.647381321, 374407.3488859646 5681709.38477553, 374389.57989263907 5681702.770888709, 374382.66388241574 5681700.195397349, 374364.8385040276 5681693.540647293, 374355.4373221211 5681690.031461259, 374351.9467402473 5681688.728146494, 374350.70656920597 5681688.26805495, 374344.67011412233 5681704.374466115, 374341.8027498871 5681711.575561926, 374337.42403195426 5681722.710621634, 374360.49837159365 5681731.906693369, 374380.0881271027 5681739.372719426, 374404.2329887785 5681748.74165115, 374413.066167891 5681752.151224559, 374432.41782138497 5681757.4693390075, 374445.5090127364 5681760.986159291, 374445.8169980198 5681759.759107424, 374445.1699764915 5681759.539111009, 374441.98607679456 5681758.423637555, 374438.7983046323 5681757.319306743, 374435.6067561768 5681756.226160761))",
      "id" : 867031
    }
  } ],
  "veranlagungszettel" : "<hr>   <h3>Datum: 10.01.2014</h3>   <center>      <table cellspacing=\"10\">         <thead>            <tr>               <th align=\"left\">ABS</th>               <th align=\"right\">alt</th>               <th align=\"right\">neu</th>               <th align=\"center\">Monat VA</th>               <th align=\"center\">Jahr VA</th>            </tr>         </thead>         <tbody>            <tr>               <td align=\"left\">A1V-310</td>               <td align=\"right\">207.0</td>               <td align=\"right\">178.0</td>               <td align=\"center\">02</td>               <td align=\"center\">2014</td>            </tr>            <tr>               <td align=\"left\">A3-321</td>               <td align=\"right\">36.0</td>               <td align=\"right\">32.0</td>               <td align=\"center\">02</td>               <td align=\"center\">2014</td>            </tr>            <tr>               <td align=\"left\">null--200</td>               <td align=\"right\">243.0</td>               <td align=\"right\">210.0</td>               <td align=\"center\">02</td>               <td align=\"center\">2014</td>            </tr>         </tbody>      </table><hr>   <h3>Datum: 08.01.2014</h3>   <center>      <table cellspacing=\"10\">         <thead>            <tr>               <th align=\"left\">ABS</th>               <th align=\"right\">alt</th>               <th align=\"right\">neu</th>               <th align=\"center\">Monat VA</th>               <th align=\"center\">Jahr VA</th>            </tr>         </thead>         <tbody>            <tr>               <td align=\"left\">A1V-310</td>               <td align=\"right\">0.0</td>               <td align=\"right\">207.0</td>               <td align=\"center\">02</td>               <td align=\"center\">2014</td>            </tr>            <tr>               <td align=\"left\">A3-321</td>               <td align=\"right\">0.0</td>               <td align=\"right\">36.0</td>               <td align=\"center\">02</td>               <td align=\"center\">2014</td>            </tr>            <tr>               <td align=\"left\">null--200</td>               <td align=\"right\">0.0</td>               <td align=\"right\">243.0</td>               <td align=\"center\">02</td>               <td align=\"center\">2014</td>            </tr>         </tbody>      </table>"
});
    md.set(60670411,{
  "$self" : "/VERDIS_GRUNDIS.KASSENZEICHEN/5152",
  "id" : 5152,
  "datum_erfassung" : "2002-09-28",
  "datum_veranlagung" : "03/01",
  "bemerkung" : "",
  "sperre" : true,
  "bemerkung_sperre" : "beim letzten Speichern nicht veranlagt",
  "dms_urls" : [ {
    "$self" : "/VERDIS_GRUNDIS.DMS_URL/3",
    "id" : 3,
    "typ" : 0,
    "name" : "DMS",
    "description" : "DMS Link",
    "url_id" : {
      "$self" : "/VERDIS_GRUNDIS.URL/3",
      "id" : 3,
      "url_base_id" : {
        "$self" : "/VERDIS_GRUNDIS.URL_BASE/1",
        "id" : 1,
        "prot_prefix" : "http://",
        "server" : "s4021029",
        "path" : "/weblink/default.asp?Mode=SearchDirect&Channel=WTAL&Archive=VORN&Query="
      },
      "object_name" : ""
    }
  }, {
    "$self" : "/VERDIS_GRUNDIS.DMS_URL/227043",
    "id" : 227043,
    "typ" : 2,
    "name" : "02.05.2007 EF",
    "description" : null,
    "url_id" : {
      "$self" : "/VERDIS_GRUNDIS.URL/43418",
      "id" : 43418,
      "url_base_id" : {
        "$self" : "/VERDIS_GRUNDIS.URL_BASE/281",
        "id" : 281,
        "prot_prefix" : "\\\\",
        "server" : "s402x023",
        "path" : "\\EasyArchiv-Migration$\\Export_2012_01.092\\"
      },
      "object_name" : "455.tif"
    }
  }, {
    "$self" : "/VERDIS_GRUNDIS.DMS_URL/236125",
    "id" : 236125,
    "typ" : 2,
    "name" : "11.05.2006 EF",
    "description" : null,
    "url_id" : {
      "$self" : "/VERDIS_GRUNDIS.URL/51512",
      "id" : 51512,
      "url_base_id" : {
        "$self" : "/VERDIS_GRUNDIS.URL_BASE/298",
        "id" : 298,
        "prot_prefix" : "\\\\",
        "server" : "s402x023",
        "path" : "\\EasyArchiv-Migration$\\Export_2012_01.109\\"
      },
      "object_name" : "282.tif"
    }
  }, {
    "$self" : "/VERDIS_GRUNDIS.DMS_URL/238706",
    "id" : 238706,
    "typ" : 2,
    "name" : "02.02.2006 EF",
    "description" : null,
    "url_id" : {
      "$self" : "/VERDIS_GRUNDIS.URL/53923",
      "id" : 53923,
      "url_base_id" : {
        "$self" : "/VERDIS_GRUNDIS.URL_BASE/303",
        "id" : 303,
        "prot_prefix" : "\\\\",
        "server" : "s402x023",
        "path" : "\\EasyArchiv-Migration$\\Export_2012_01.114\\"
      },
      "object_name" : "262.TIF"
    }
  }, {
    "$self" : "/VERDIS_GRUNDIS.DMS_URL/292976",
    "id" : 292976,
    "typ" : 2,
    "name" : "27.09.2002 FEB-R",
    "description" : null,
    "url_id" : {
      "$self" : "/VERDIS_GRUNDIS.URL/95479",
      "id" : 95479,
      "url_base_id" : {
        "$self" : "/VERDIS_GRUNDIS.URL_BASE/393",
        "id" : 393,
        "prot_prefix" : "\\\\",
        "server" : "s402x023",
        "path" : "\\EasyArchiv-Migration$\\Export_2012_01.204\\"
      },
      "object_name" : "53.tif"
    }
  }, {
    "$self" : "/VERDIS_GRUNDIS.DMS_URL/292977",
    "id" : 292977,
    "typ" : 2,
    "name" : "27.09.2002 FEB-R",
    "description" : null,
    "url_id" : {
      "$self" : "/VERDIS_GRUNDIS.URL/95480",
      "id" : 95480,
      "url_base_id" : {
        "$self" : "/VERDIS_GRUNDIS.URL_BASE/393",
        "id" : 393,
        "prot_prefix" : "\\\\",
        "server" : "s402x023",
        "path" : "\\EasyArchiv-Migration$\\Export_2012_01.204\\"
      },
      "object_name" : "54.tif"
    }
  }, {
    "$self" : "/VERDIS_GRUNDIS.DMS_URL/292978",
    "id" : 292978,
    "typ" : 2,
    "name" : "27.09.2002 FEB-R",
    "description" : null,
    "url_id" : {
      "$self" : "/VERDIS_GRUNDIS.URL/95481",
      "id" : 95481,
      "url_base_id" : {
        "$self" : "/VERDIS_GRUNDIS.URL_BASE/393",
        "id" : 393,
        "prot_prefix" : "\\\\",
        "server" : "s402x023",
        "path" : "\\EasyArchiv-Migration$\\Export_2012_01.204\\"
      },
      "object_name" : "52.tif"
    }
  }, {
    "$self" : "/VERDIS_GRUNDIS.DMS_URL/632258",
    "id" : 632258,
    "typ" : 2,
    "name" : "21.11.2014 STR",
    "description" : null,
    "url_id" : {
      "$self" : "/VERDIS_GRUNDIS.URL/417644",
      "id" : 417644,
      "url_base_id" : {
        "$self" : "/VERDIS_GRUNDIS.URL_BASE/1742",
        "id" : 1742,
        "prot_prefix" : "\\\\",
        "server" : "s402x023",
        "path" : "\\EasyArchiv-Migration$\\FF_8_2014\\"
      },
      "object_name" : "138.PDF"
    }
  } ],
  "flaechen" : [ {
    "$self" : "/VERDIS_GRUNDIS.FLAECHE/46396",
    "id" : 46396,
    "flaecheninfo" : {
      "$self" : "/VERDIS_GRUNDIS.FLAECHENINFO/296391",
      "id" : 296391,
      "groesse_aus_grafik" : 68,
      "groesse_korrektur" : 68,
      "flaechenart" : {
        "$self" : "/VERDIS_GRUNDIS.FLAECHENART/1",
        "id" : 1,
        "art" : "Dachfläche",
        "art_abkuerzung" : "DF"
      },
      "anschlussgrad" : {
        "$self" : "/VERDIS_GRUNDIS.ANSCHLUSSGRAD/1",
        "id" : 1,
        "grad" : "Am Kanal angeschlossen",
        "grad_abkuerzung" : "angeschl."
      },
      "geometrie" : {
        "$self" : "/VERDIS_GRUNDIS.GEOM/296391",
        "geo_field" : "SRID=25832;POLYGON ((374418.0556158982 5681554.335966016, 374417.3526357822 5681556.085826988, 374417.3145700507 5681556.180381536, 374428.603398826 5681551.377565816, 374423.28228058293 5681541.316099432, 374422.28428195417 5681544.068577077, 374419.8430984691 5681550.681993452, 374419.56860269234 5681550.573187796, 374418.0556158982 5681554.335966016))",
        "id" : 296391
      },
      "beschreibung" : null
    },
    "anteil" : null,
    "flaechenbezeichnung" : "22",
    "bemerkung" : "",
    "datum_erfassung" : "2003-01-01",
    "datum_veranlagung" : "03/01",
    "sperre" : null,
    "bemerkung_sperre" : "",
    "feb_id" : "20006383"
  }, {
    "$self" : "/VERDIS_GRUNDIS.FLAECHE/46397",
    "id" : 46397,
    "flaecheninfo" : {
      "$self" : "/VERDIS_GRUNDIS.FLAECHENINFO/245894",
      "id" : 245894,
      "groesse_aus_grafik" : 84,
      "groesse_korrektur" : 84,
      "flaechenart" : {
        "$self" : "/VERDIS_GRUNDIS.FLAECHENART/1",
        "id" : 1,
        "art" : "Dachfläche",
        "art_abkuerzung" : "DF"
      },
      "anschlussgrad" : {
        "$self" : "/VERDIS_GRUNDIS.ANSCHLUSSGRAD/1",
        "id" : 1,
        "grad" : "Am Kanal angeschlossen",
        "grad_abkuerzung" : "angeschl."
      },
      "geometrie" : {
        "$self" : "/VERDIS_GRUNDIS.GEOM/245894",
        "geo_field" : "SRID=25832;POLYGON ((374428.603398826 5681551.377565816, 374422.1772612035 5681558.1398431705, 374418.77333735675 5681566.923002579, 374413.7936259806 5681565.210234628, 374417.48581850156 5681572.26146173, 374420.405002106 5681573.398867316, 374428.603398826 5681551.377565816))",
        "id" : 245894
      },
      "beschreibung" : null
    },
    "anteil" : null,
    "flaechenbezeichnung" : "19",
    "bemerkung" : "",
    "datum_erfassung" : "2003-01-01",
    "datum_veranlagung" : "03/01",
    "sperre" : null,
    "bemerkung_sperre" : "",
    "feb_id" : "20006383"
  }, {
    "$self" : "/VERDIS_GRUNDIS.FLAECHE/46398",
    "id" : 46398,
    "flaecheninfo" : {
      "$self" : "/VERDIS_GRUNDIS.FLAECHENINFO/161100",
      "id" : 161100,
      "groesse_aus_grafik" : 93,
      "groesse_korrektur" : 93,
      "flaechenart" : {
        "$self" : "/VERDIS_GRUNDIS.FLAECHENART/1",
        "id" : 1,
        "art" : "Dachfläche",
        "art_abkuerzung" : "DF"
      },
      "anschlussgrad" : {
        "$self" : "/VERDIS_GRUNDIS.ANSCHLUSSGRAD/1",
        "id" : 1,
        "grad" : "Am Kanal angeschlossen",
        "grad_abkuerzung" : "angeschl."
      },
      "geometrie" : {
        "$self" : "/VERDIS_GRUNDIS.GEOM/161100",
        "geo_field" : "SRID=25832;POLYGON ((374499.59519075975 5681577.489265633, 374490.5724528916 5681601.836496119, 374494.07751875743 5681603.139110838, 374494.1317065172 5681602.996746752, 374494.48738288507 5681603.1313068485, 374498.47827313095 5681592.678579424, 374500.94374744594 5681586.22225299, 374499.59519075975 5681577.489265633))",
        "id" : 161100
      },
      "beschreibung" : null
    },
    "anteil" : null,
    "flaechenbezeichnung" : "17",
    "bemerkung" : "",
    "datum_erfassung" : "2003-01-01",
    "datum_veranlagung" : "03/01",
    "sperre" : null,
    "bemerkung_sperre" : "",
    "feb_id" : "20006383"
  }, {
    "$self" : "/VERDIS_GRUNDIS.FLAECHE/46399",
    "id" : 46399,
    "flaecheninfo" : {
      "$self" : "/VERDIS_GRUNDIS.FLAECHENINFO/208884",
      "id" : 208884,
      "groesse_aus_grafik" : 86,
      "groesse_korrektur" : 86,
      "flaechenart" : {
        "$self" : "/VERDIS_GRUNDIS.FLAECHENART/1",
        "id" : 1,
        "art" : "Dachfläche",
        "art_abkuerzung" : "DF"
      },
      "anschlussgrad" : {
        "$self" : "/VERDIS_GRUNDIS.ANSCHLUSSGRAD/1",
        "id" : 1,
        "grad" : "Am Kanal angeschlossen",
        "grad_abkuerzung" : "angeschl."
      },
      "geometrie" : {
        "$self" : "/VERDIS_GRUNDIS.GEOM/208884",
        "geo_field" : "SRID=25832;POLYGON ((374494.48738288507 5681603.1313068485, 374495.1306158006 5681603.3752553435, 374502.18557931855 5681606.047594449, 374502.391906064 5681605.26871412, 374505.1110393852 5681595.010922649, 374498.47827313095 5681592.678579424, 374494.48738288507 5681603.1313068485))",
        "id" : 208884
      },
      "beschreibung" : null
    },
    "anteil" : null,
    "flaechenbezeichnung" : "18",
    "bemerkung" : "",
    "datum_erfassung" : "2003-01-01",
    "datum_veranlagung" : "03/01",
    "sperre" : null,
    "bemerkung_sperre" : "",
    "feb_id" : "20006383"
  }, {
    "$self" : "/VERDIS_GRUNDIS.FLAECHE/46400",
    "id" : 46400,
    "flaecheninfo" : {
      "$self" : "/VERDIS_GRUNDIS.FLAECHENINFO/313409",
      "id" : 313409,
      "groesse_aus_grafik" : 64,
      "groesse_korrektur" : 64,
      "flaechenart" : {
        "$self" : "/VERDIS_GRUNDIS.FLAECHENART/1",
        "id" : 1,
        "art" : "Dachfläche",
        "art_abkuerzung" : "DF"
      },
      "anschlussgrad" : {
        "$self" : "/VERDIS_GRUNDIS.ANSCHLUSSGRAD/1",
        "id" : 1,
        "grad" : "Am Kanal angeschlossen",
        "grad_abkuerzung" : "angeschl."
      },
      "geometrie" : {
        "$self" : "/VERDIS_GRUNDIS.GEOM/313409",
        "geo_field" : "SRID=25832;POLYGON ((374499.59519075975 5681577.489265633, 374511.02004485205 5681572.641055495, 374495.4802409783 5681567.954946394, 374499.59519075975 5681577.489265633))",
        "id" : 313409
      },
      "beschreibung" : null
    },
    "anteil" : null,
    "flaechenbezeichnung" : "23",
    "bemerkung" : "",
    "datum_erfassung" : "2003-01-01",
    "datum_veranlagung" : "03/01",
    "sperre" : null,
    "bemerkung_sperre" : "",
    "feb_id" : "20006383"
  }, {
    "$self" : "/VERDIS_GRUNDIS.FLAECHE/46401",
    "id" : 46401,
    "flaecheninfo" : {
      "$self" : "/VERDIS_GRUNDIS.FLAECHENINFO/326716",
      "id" : 326716,
      "groesse_aus_grafik" : 62,
      "groesse_korrektur" : 62,
      "flaechenart" : {
        "$self" : "/VERDIS_GRUNDIS.FLAECHENART/1",
        "id" : 1,
        "art" : "Dachfläche",
        "art_abkuerzung" : "DF"
      },
      "anschlussgrad" : {
        "$self" : "/VERDIS_GRUNDIS.ANSCHLUSSGRAD/1",
        "id" : 1,
        "grad" : "Am Kanal angeschlossen",
        "grad_abkuerzung" : "angeschl."
      },
      "geometrie" : {
        "$self" : "/VERDIS_GRUNDIS.GEOM/326716",
        "geo_field" : "SRID=25832;POLYGON ((374428.603398826 5681551.377565816, 374438.5758215673 5681546.996821491, 374423.28228058293 5681541.316099432, 374428.603398826 5681551.377565816))",
        "id" : 326716
      },
      "beschreibung" : null
    },
    "anteil" : null,
    "flaechenbezeichnung" : "26",
    "bemerkung" : "",
    "datum_erfassung" : "2003-01-01",
    "datum_veranlagung" : "03/01",
    "sperre" : null,
    "bemerkung_sperre" : "",
    "feb_id" : "20006383"
  }, {
    "$self" : "/VERDIS_GRUNDIS.FLAECHE/46404",
    "id" : 46404,
    "flaecheninfo" : {
      "$self" : "/VERDIS_GRUNDIS.FLAECHENINFO/274364",
      "id" : 274364,
      "groesse_aus_grafik" : 80,
      "groesse_korrektur" : 80,
      "flaechenart" : {
        "$self" : "/VERDIS_GRUNDIS.FLAECHENART/1",
        "id" : 1,
        "art" : "Dachfläche",
        "art_abkuerzung" : "DF"
      },
      "anschlussgrad" : {
        "$self" : "/VERDIS_GRUNDIS.ANSCHLUSSGRAD/1",
        "id" : 1,
        "grad" : "Am Kanal angeschlossen",
        "grad_abkuerzung" : "angeschl."
      },
      "geometrie" : {
        "$self" : "/VERDIS_GRUNDIS.GEOM/274364",
        "geo_field" : "SRID=25832;POLYGON ((374511.02004485205 5681572.641055495, 374499.59519075975 5681577.489265633, 374506.86464464664 5681588.395650592, 374509.2778474279 5681579.288865585, 374510.9257030785 5681573.073002339, 374511.02004485205 5681572.641055495))",
        "id" : 274364
      },
      "beschreibung" : null
    },
    "anteil" : null,
    "flaechenbezeichnung" : "20",
    "bemerkung" : "",
    "datum_erfassung" : "2003-01-01",
    "datum_veranlagung" : "03/01",
    "sperre" : null,
    "bemerkung_sperre" : "",
    "feb_id" : "20006383"
  }, {
    "$self" : "/VERDIS_GRUNDIS.FLAECHE/46408",
    "id" : 46408,
    "flaecheninfo" : {
      "$self" : "/VERDIS_GRUNDIS.FLAECHENINFO/5750",
      "id" : 5750,
      "groesse_aus_grafik" : 254,
      "groesse_korrektur" : 254,
      "flaechenart" : {
        "$self" : "/VERDIS_GRUNDIS.FLAECHENART/1",
        "id" : 1,
        "art" : "Dachfläche",
        "art_abkuerzung" : "DF"
      },
      "anschlussgrad" : {
        "$self" : "/VERDIS_GRUNDIS.ANSCHLUSSGRAD/1",
        "id" : 1,
        "grad" : "Am Kanal angeschlossen",
        "grad_abkuerzung" : "angeschl."
      },
      "geometrie" : {
        "$self" : "/VERDIS_GRUNDIS.GEOM/5750",
        "geo_field" : "SRID=25832;POLYGON ((374418.40547614545 5681578.771639596, 374425.3120008409 5681581.454191156, 374425.3569621183 5681581.455335784, 374432.83288258687 5681561.951801548, 374433.09453418106 5681562.0382086905, 374438.5758215673 5681546.996821491, 374428.603398826 5681551.377565816, 374420.405002106 5681573.398867316, 374418.40547614545 5681578.771639596))",
        "id" : 5750
      },
      "beschreibung" : null
    },
    "anteil" : null,
    "flaechenbezeichnung" : "4",
    "bemerkung" : "",
    "datum_erfassung" : "2003-01-01",
    "datum_veranlagung" : "03/01",
    "sperre" : null,
    "bemerkung_sperre" : "",
    "feb_id" : "20006383"
  }, {
    "$self" : "/VERDIS_GRUNDIS.FLAECHE/46409",
    "id" : 46409,
    "flaecheninfo" : {
      "$self" : "/VERDIS_GRUNDIS.FLAECHENINFO/52284",
      "id" : 52284,
      "groesse_aus_grafik" : 50,
      "groesse_korrektur" : 50,
      "flaechenart" : {
        "$self" : "/VERDIS_GRUNDIS.FLAECHENART/1",
        "id" : 1,
        "art" : "Dachfläche",
        "art_abkuerzung" : "DF"
      },
      "anschlussgrad" : {
        "$self" : "/VERDIS_GRUNDIS.ANSCHLUSSGRAD/1",
        "id" : 1,
        "grad" : "Am Kanal angeschlossen",
        "grad_abkuerzung" : "angeschl."
      },
      "geometrie" : {
        "$self" : "/VERDIS_GRUNDIS.GEOM/52284",
        "geo_field" : "SRID=25832;POLYGON ((374416.5353485979 5681558.121219783, 374413.9067516774 5681564.918600848, 374413.86158341914 5681565.035437374, 374413.7936259806 5681565.210234628, 374418.77333735675 5681566.923002579, 374422.1772612035 5681558.1398431705, 374417.3145700507 5681556.180381536, 374416.5353485979 5681558.121219783))",
        "id" : 52284
      },
      "beschreibung" : null
    },
    "anteil" : null,
    "flaechenbezeichnung" : "28",
    "bemerkung" : "",
    "datum_erfassung" : "2003-01-01",
    "datum_veranlagung" : "03/01",
    "sperre" : null,
    "bemerkung_sperre" : "",
    "feb_id" : "20006383"
  }, {
    "$self" : "/VERDIS_GRUNDIS.FLAECHE/46413",
    "id" : 46413,
    "flaecheninfo" : {
      "$self" : "/VERDIS_GRUNDIS.FLAECHENINFO/60638",
      "id" : 60638,
      "groesse_aus_grafik" : 34,
      "groesse_korrektur" : 34,
      "flaechenart" : {
        "$self" : "/VERDIS_GRUNDIS.FLAECHENART/1",
        "id" : 1,
        "art" : "Dachfläche",
        "art_abkuerzung" : "DF"
      },
      "anschlussgrad" : {
        "$self" : "/VERDIS_GRUNDIS.ANSCHLUSSGRAD/1",
        "id" : 1,
        "grad" : "Am Kanal angeschlossen",
        "grad_abkuerzung" : "angeschl."
      },
      "geometrie" : {
        "$self" : "/VERDIS_GRUNDIS.GEOM/60638",
        "geo_field" : "SRID=25832;POLYGON ((374417.48581850156 5681572.26146173, 374409.90283014625 5681575.272039726, 374415.2190464325 5681577.1149315145, 374415.10429142043 5681577.489753073, 374418.40547614545 5681578.771639596, 374420.405002106 5681573.398867316, 374417.48581850156 5681572.26146173))",
        "id" : 60638
      },
      "beschreibung" : null
    },
    "anteil" : null,
    "flaechenbezeichnung" : "34",
    "bemerkung" : "",
    "datum_erfassung" : "2003-01-01",
    "datum_veranlagung" : "03/01",
    "sperre" : null,
    "bemerkung_sperre" : "",
    "feb_id" : "20006383"
  }, {
    "$self" : "/VERDIS_GRUNDIS.FLAECHE/46414",
    "id" : 46414,
    "flaecheninfo" : {
      "$self" : "/VERDIS_GRUNDIS.FLAECHENINFO/100622",
      "id" : 100622,
      "groesse_aus_grafik" : 217,
      "groesse_korrektur" : 217,
      "flaechenart" : {
        "$self" : "/VERDIS_GRUNDIS.FLAECHENART/1",
        "id" : 1,
        "art" : "Dachfläche",
        "art_abkuerzung" : "DF"
      },
      "anschlussgrad" : {
        "$self" : "/VERDIS_GRUNDIS.ANSCHLUSSGRAD/1",
        "id" : 1,
        "grad" : "Am Kanal angeschlossen",
        "grad_abkuerzung" : "angeschl."
      },
      "geometrie" : {
        "$self" : "/VERDIS_GRUNDIS.GEOM/100622",
        "geo_field" : "SRID=25832;POLYGON ((374495.4802409783 5681567.954946394, 374489.61375629157 5681582.821947821, 374489.93050139025 5681582.934060448, 374483.78071465343 5681599.313460022, 374483.7958042957 5681599.317875398, 374490.5724528916 5681601.836496119, 374499.59519075975 5681577.489265633, 374495.4802409783 5681567.954946394))",
        "id" : 100622
      },
      "beschreibung" : null
    },
    "anteil" : null,
    "flaechenbezeichnung" : "6",
    "bemerkung" : "",
    "datum_erfassung" : "2003-01-01",
    "datum_veranlagung" : "03/01",
    "sperre" : null,
    "bemerkung_sperre" : "",
    "feb_id" : "20006383"
  }, {
    "$self" : "/VERDIS_GRUNDIS.FLAECHE/46415",
    "id" : 46415,
    "flaecheninfo" : {
      "$self" : "/VERDIS_GRUNDIS.FLAECHENINFO/67425",
      "id" : 67425,
      "groesse_aus_grafik" : 32,
      "groesse_korrektur" : 32,
      "flaechenart" : {
        "$self" : "/VERDIS_GRUNDIS.FLAECHENART/1",
        "id" : 1,
        "art" : "Dachfläche",
        "art_abkuerzung" : "DF"
      },
      "anschlussgrad" : {
        "$self" : "/VERDIS_GRUNDIS.ANSCHLUSSGRAD/1",
        "id" : 1,
        "grad" : "Am Kanal angeschlossen",
        "grad_abkuerzung" : "angeschl."
      },
      "geometrie" : {
        "$self" : "/VERDIS_GRUNDIS.GEOM/67425",
        "geo_field" : "SRID=25832;POLYGON ((374410.816847153 5681572.913254903, 374409.90283014625 5681575.272039726, 374417.48581850156 5681572.26146173, 374413.7936259806 5681565.210234628, 374410.816847153 5681572.913254903))",
        "id" : 67425
      },
      "beschreibung" : null
    },
    "anteil" : null,
    "flaechenbezeichnung" : "37",
    "bemerkung" : "",
    "datum_erfassung" : "2003-01-01",
    "datum_veranlagung" : "03/01",
    "sperre" : null,
    "bemerkung_sperre" : "",
    "feb_id" : "20006383"
  }, {
    "$self" : "/VERDIS_GRUNDIS.FLAECHE/46416",
    "id" : 46416,
    "flaecheninfo" : {
      "$self" : "/VERDIS_GRUNDIS.FLAECHENINFO/77643",
      "id" : 77643,
      "groesse_aus_grafik" : 23,
      "groesse_korrektur" : 23,
      "flaechenart" : {
        "$self" : "/VERDIS_GRUNDIS.FLAECHENART/1",
        "id" : 1,
        "art" : "Dachfläche",
        "art_abkuerzung" : "DF"
      },
      "anschlussgrad" : {
        "$self" : "/VERDIS_GRUNDIS.ANSCHLUSSGRAD/1",
        "id" : 1,
        "grad" : "Am Kanal angeschlossen",
        "grad_abkuerzung" : "angeschl."
      },
      "geometrie" : {
        "$self" : "/VERDIS_GRUNDIS.GEOM/77643",
        "geo_field" : "SRID=25832;POLYGON ((374428.603398826 5681551.377565816, 374417.3145700507 5681556.180381536, 374422.1772612035 5681558.1398431705, 374428.603398826 5681551.377565816))",
        "id" : 77643
      },
      "beschreibung" : null
    },
    "anteil" : null,
    "flaechenbezeichnung" : "42",
    "bemerkung" : "",
    "datum_erfassung" : "2003-01-01",
    "datum_veranlagung" : "03/01",
    "sperre" : null,
    "bemerkung_sperre" : "",
    "feb_id" : "20006383"
  }, {
    "$self" : "/VERDIS_GRUNDIS.FLAECHE/46417",
    "id" : 46417,
    "flaecheninfo" : {
      "$self" : "/VERDIS_GRUNDIS.FLAECHENINFO/73000",
      "id" : 73000,
      "groesse_aus_grafik" : 24,
      "groesse_korrektur" : 24,
      "flaechenart" : {
        "$self" : "/VERDIS_GRUNDIS.FLAECHENART/1",
        "id" : 1,
        "art" : "Dachfläche",
        "art_abkuerzung" : "DF"
      },
      "anschlussgrad" : {
        "$self" : "/VERDIS_GRUNDIS.ANSCHLUSSGRAD/1",
        "id" : 1,
        "grad" : "Am Kanal angeschlossen",
        "grad_abkuerzung" : "angeschl."
      },
      "geometrie" : {
        "$self" : "/VERDIS_GRUNDIS.GEOM/73000",
        "geo_field" : "SRID=25832;POLYGON ((374499.59519075975 5681577.489265633, 374500.94374744594 5681586.22225299, 374506.86464464664 5681588.395650592, 374499.59519075975 5681577.489265633))",
        "id" : 73000
      },
      "beschreibung" : null
    },
    "anteil" : null,
    "flaechenbezeichnung" : "40",
    "bemerkung" : "",
    "datum_erfassung" : "2003-01-01",
    "datum_veranlagung" : "03/01",
    "sperre" : null,
    "bemerkung_sperre" : "",
    "feb_id" : "20006383"
  }, {
    "$self" : "/VERDIS_GRUNDIS.FLAECHE/589422",
    "id" : 589422,
    "flaecheninfo" : {
      "$self" : "/VERDIS_GRUNDIS.FLAECHENINFO/588147",
      "id" : 588147,
      "groesse_aus_grafik" : 183,
      "groesse_korrektur" : 183,
      "flaechenart" : {
        "$self" : "/VERDIS_GRUNDIS.FLAECHENART/1",
        "id" : 1,
        "art" : "Dachfläche",
        "art_abkuerzung" : "DF"
      },
      "anschlussgrad" : {
        "$self" : "/VERDIS_GRUNDIS.ANSCHLUSSGRAD/1",
        "id" : 1,
        "grad" : "Am Kanal angeschlossen",
        "grad_abkuerzung" : "angeschl."
      },
      "geometrie" : {
        "$self" : "/VERDIS_GRUNDIS.GEOM/645535",
        "geo_field" : "SRID=25832;POLYGON ((374418.40547614545 5681578.771639596, 374408.36267003044 5681605.747115081, 374417.81686972454 5681601.125493793, 374425.3569621183 5681581.455335784, 374425.3120008409 5681581.454191156, 374418.40547614545 5681578.771639596))",
        "id" : 645535
      },
      "beschreibung" : null
    },
    "anteil" : null,
    "flaechenbezeichnung" : "10",
    "bemerkung" : null,
    "datum_erfassung" : "2003-01-01",
    "datum_veranlagung" : "03/01",
    "sperre" : null,
    "bemerkung_sperre" : "",
    "feb_id" : "20113214"
  }, {
    "$self" : "/VERDIS_GRUNDIS.FLAECHE/589429",
    "id" : 589429,
    "flaecheninfo" : {
      "$self" : "/VERDIS_GRUNDIS.FLAECHENINFO/588154",
      "id" : 588154,
      "groesse_aus_grafik" : 122,
      "groesse_korrektur" : 122,
      "flaechenart" : {
        "$self" : "/VERDIS_GRUNDIS.FLAECHENART/1",
        "id" : 1,
        "art" : "Dachfläche",
        "art_abkuerzung" : "DF"
      },
      "anschlussgrad" : {
        "$self" : "/VERDIS_GRUNDIS.ANSCHLUSSGRAD/1",
        "id" : 1,
        "grad" : "Am Kanal angeschlossen",
        "grad_abkuerzung" : "angeschl."
      },
      "geometrie" : {
        "$self" : "/VERDIS_GRUNDIS.GEOM/645544",
        "geo_field" : "SRID=25832;POLYGON ((374415.10429142043 5681577.489753073, 374410.3942734562 5681589.685055889, 374407.90514967963 5681596.128407115, 374401.9584398605 5681611.528009858, 374401.8813793212 5681611.72628898, 374408.36267003044 5681605.747115081, 374418.40547614545 5681578.771639596, 374415.10429142043 5681577.489753073))",
        "id" : 645544
      },
      "beschreibung" : null
    },
    "anteil" : null,
    "flaechenbezeichnung" : "16",
    "bemerkung" : null,
    "datum_erfassung" : "2005-12-12",
    "datum_veranlagung" : "06/01",
    "sperre" : null,
    "bemerkung_sperre" : "",
    "feb_id" : null
  }, {
    "$self" : "/VERDIS_GRUNDIS.FLAECHE/589430",
    "id" : 589430,
    "flaecheninfo" : {
      "$self" : "/VERDIS_GRUNDIS.FLAECHENINFO/588155",
      "id" : 588155,
      "groesse_aus_grafik" : 154,
      "groesse_korrektur" : 154,
      "flaechenart" : {
        "$self" : "/VERDIS_GRUNDIS.FLAECHENART/1",
        "id" : 1,
        "art" : "Dachfläche",
        "art_abkuerzung" : "DF"
      },
      "anschlussgrad" : {
        "$self" : "/VERDIS_GRUNDIS.ANSCHLUSSGRAD/1",
        "id" : 1,
        "grad" : "Am Kanal angeschlossen",
        "grad_abkuerzung" : "angeschl."
      },
      "geometrie" : {
        "$self" : "/VERDIS_GRUNDIS.GEOM/645545",
        "geo_field" : "SRID=25832;POLYGON ((374399.88387672976 5681593.3173564235, 374398.01653846726 5681597.985281096, 374396.345071435 5681597.235236569, 374396.200482592 5681597.614259453, 374393.7389090322 5681604.043443711, 374393.61046949774 5681604.379873258, 374396.5670728721 5681605.451814392, 374394.8065605201 5681609.724181547, 374395.8162180297 5681610.091070207, 374400.44448184595 5681611.771965164, 374400.69273120165 5681611.038516091, 374401.9584398605 5681611.528009858, 374407.90514967963 5681596.128407115, 374399.88387672976 5681593.3173564235))",
        "id" : 645545
      },
      "beschreibung" : null
    },
    "anteil" : null,
    "flaechenbezeichnung" : "13",
    "bemerkung" : null,
    "datum_erfassung" : "2003-01-01",
    "datum_veranlagung" : "03/01",
    "sperre" : null,
    "bemerkung_sperre" : "",
    "feb_id" : "20113214"
  }, {
    "$self" : "/VERDIS_GRUNDIS.FLAECHE/589431",
    "id" : 589431,
    "flaecheninfo" : {
      "$self" : "/VERDIS_GRUNDIS.FLAECHENINFO/588156",
      "id" : 588156,
      "groesse_aus_grafik" : 153,
      "groesse_korrektur" : 153,
      "flaechenart" : {
        "$self" : "/VERDIS_GRUNDIS.FLAECHENART/1",
        "id" : 1,
        "art" : "Dachfläche",
        "art_abkuerzung" : "DF"
      },
      "anschlussgrad" : {
        "$self" : "/VERDIS_GRUNDIS.ANSCHLUSSGRAD/1",
        "id" : 1,
        "grad" : "Am Kanal angeschlossen",
        "grad_abkuerzung" : "angeschl."
      },
      "geometrie" : {
        "$self" : "/VERDIS_GRUNDIS.GEOM/645546",
        "geo_field" : "SRID=25832;POLYGON ((374398.01653846726 5681597.985281096, 374399.88387672976 5681593.3173564235, 374407.90514967963 5681596.128407115, 374410.3942734562 5681589.685055889, 374395.36884377897 5681584.033500297, 374390.8847749345 5681595.543243158, 374396.200482592 5681597.614259453, 374396.345071435 5681597.235236569, 374398.01653846726 5681597.985281096))",
        "id" : 645546
      },
      "beschreibung" : null
    },
    "anteil" : null,
    "flaechenbezeichnung" : "14",
    "bemerkung" : null,
    "datum_erfassung" : "2003-01-01",
    "datum_veranlagung" : "03/01",
    "sperre" : null,
    "bemerkung_sperre" : "",
    "feb_id" : "20113214"
  }, {
    "$self" : "/VERDIS_GRUNDIS.FLAECHE/589432",
    "id" : 589432,
    "flaecheninfo" : {
      "$self" : "/VERDIS_GRUNDIS.FLAECHENINFO/588157",
      "id" : 588157,
      "groesse_aus_grafik" : 175,
      "groesse_korrektur" : 175,
      "flaechenart" : {
        "$self" : "/VERDIS_GRUNDIS.FLAECHENART/1",
        "id" : 1,
        "art" : "Dachfläche",
        "art_abkuerzung" : "DF"
      },
      "anschlussgrad" : {
        "$self" : "/VERDIS_GRUNDIS.ANSCHLUSSGRAD/1",
        "id" : 1,
        "grad" : "Am Kanal angeschlossen",
        "grad_abkuerzung" : "angeschl."
      },
      "geometrie" : {
        "$self" : "/VERDIS_GRUNDIS.GEOM/645547",
        "geo_field" : "SRID=25832;POLYGON ((374382.722749874 5681619.726474678, 374390.96013735235 5681623.048826709, 374395.8162180297 5681610.091070207, 374394.8065605201 5681609.724181547, 374396.5670728721 5681605.451814392, 374393.61046949774 5681604.379873258, 374393.7389090322 5681604.043443711, 374388.46066151187 5681602.1321100285, 374381.918898426 5681619.402056061, 374382.722749874 5681619.726474678))",
        "id" : 645547
      },
      "beschreibung" : null
    },
    "anteil" : null,
    "flaechenbezeichnung" : "11",
    "bemerkung" : null,
    "datum_erfassung" : "2003-01-01",
    "datum_veranlagung" : "03/01",
    "sperre" : null,
    "bemerkung_sperre" : "",
    "feb_id" : "20113214"
  }, {
    "$self" : "/VERDIS_GRUNDIS.FLAECHE/589433",
    "id" : 589433,
    "flaecheninfo" : {
      "$self" : "/VERDIS_GRUNDIS.FLAECHENINFO/588158",
      "id" : 588158,
      "groesse_aus_grafik" : 51,
      "groesse_korrektur" : 51,
      "flaechenart" : {
        "$self" : "/VERDIS_GRUNDIS.FLAECHENART/1",
        "id" : 1,
        "art" : "Dachfläche",
        "art_abkuerzung" : "DF"
      },
      "anschlussgrad" : {
        "$self" : "/VERDIS_GRUNDIS.ANSCHLUSSGRAD/1",
        "id" : 1,
        "grad" : "Am Kanal angeschlossen",
        "grad_abkuerzung" : "angeschl."
      },
      "geometrie" : {
        "$self" : "/VERDIS_GRUNDIS.GEOM/645548",
        "geo_field" : "SRID=25832;POLYGON ((374390.96013735235 5681623.048826709, 374393.6221742928 5681624.090683118, 374394.1870405525 5681624.076543534, 374398.28315876797 5681613.503335192, 374398.8578460589 5681613.6610011235, 374399.98000947386 5681613.967194803, 374400.44448184595 5681611.771965164, 374395.8162180297 5681610.091070207, 374390.96013735235 5681623.048826709))",
        "id" : 645548
      },
      "beschreibung" : null
    },
    "anteil" : null,
    "flaechenbezeichnung" : "27",
    "bemerkung" : null,
    "datum_erfassung" : "2005-12-12",
    "datum_veranlagung" : "06/01",
    "sperre" : null,
    "bemerkung_sperre" : "",
    "feb_id" : null
  }, {
    "$self" : "/VERDIS_GRUNDIS.FLAECHE/589434",
    "id" : 589434,
    "flaecheninfo" : {
      "$self" : "/VERDIS_GRUNDIS.FLAECHENINFO/588159",
      "id" : 588159,
      "groesse_aus_grafik" : 531,
      "groesse_korrektur" : 531,
      "flaechenart" : {
        "$self" : "/VERDIS_GRUNDIS.FLAECHENART/1",
        "id" : 1,
        "art" : "Dachfläche",
        "art_abkuerzung" : "DF"
      },
      "anschlussgrad" : {
        "$self" : "/VERDIS_GRUNDIS.ANSCHLUSSGRAD/1",
        "id" : 1,
        "grad" : "Am Kanal angeschlossen",
        "grad_abkuerzung" : "angeschl."
      },
      "geometrie" : {
        "$self" : "/VERDIS_GRUNDIS.GEOM/645549",
        "geo_field" : "SRID=25832;POLYGON ((374479.22925327346 5681632.4459856665, 374475.07653026655 5681622.4951436315, 374462.97348924354 5681617.977885016, 374460.16307060793 5681616.929023319, 374433.03132803366 5681606.803273319, 374430.15086360276 5681605.7283951575, 374417.81686972454 5681601.125493793, 374408.36267003044 5681605.747115081, 374433.5626410134 5681615.241474134, 374454.3693344742 5681623.080040176, 374479.22925327346 5681632.4459856665))",
        "id" : 645549
      },
      "beschreibung" : null
    },
    "anteil" : null,
    "flaechenbezeichnung" : "2",
    "bemerkung" : null,
    "datum_erfassung" : "2003-01-01",
    "datum_veranlagung" : "03/01",
    "sperre" : null,
    "bemerkung_sperre" : "",
    "feb_id" : "20113214"
  }, {
    "$self" : "/VERDIS_GRUNDIS.FLAECHE/589435",
    "id" : 589435,
    "flaecheninfo" : {
      "$self" : "/VERDIS_GRUNDIS.FLAECHENINFO/588160",
      "id" : 588160,
      "groesse_aus_grafik" : 203,
      "groesse_korrektur" : 203,
      "flaechenart" : {
        "$self" : "/VERDIS_GRUNDIS.FLAECHENART/1",
        "id" : 1,
        "art" : "Dachfläche",
        "art_abkuerzung" : "DF"
      },
      "anschlussgrad" : {
        "$self" : "/VERDIS_GRUNDIS.ANSCHLUSSGRAD/1",
        "id" : 1,
        "grad" : "Am Kanal angeschlossen",
        "grad_abkuerzung" : "angeschl."
      },
      "geometrie" : {
        "$self" : "/VERDIS_GRUNDIS.GEOM/645550",
        "geo_field" : "SRID=25832;POLYGON ((374409.01058487594 5681614.420595824, 374423.9577776119 5681620.069394895, 374424.6893881038 5681620.3457045425, 374433.5626410134 5681615.241474134, 374408.36267003044 5681605.747115081, 374401.8813793212 5681611.72628898, 374409.01058487594 5681614.420595824))",
        "id" : 645550
      },
      "beschreibung" : null
    },
    "anteil" : null,
    "flaechenbezeichnung" : "8",
    "bemerkung" : null,
    "datum_erfassung" : "2003-01-01",
    "datum_veranlagung" : "03/01",
    "sperre" : null,
    "bemerkung_sperre" : "",
    "feb_id" : "20113214"
  }, {
    "$self" : "/VERDIS_GRUNDIS.FLAECHE/589436",
    "id" : 589436,
    "flaecheninfo" : {
      "$self" : "/VERDIS_GRUNDIS.FLAECHENINFO/588161",
      "id" : 588161,
      "groesse_aus_grafik" : 129,
      "groesse_korrektur" : 129,
      "flaechenart" : {
        "$self" : "/VERDIS_GRUNDIS.FLAECHENART/1",
        "id" : 1,
        "art" : "Dachfläche",
        "art_abkuerzung" : "DF"
      },
      "anschlussgrad" : {
        "$self" : "/VERDIS_GRUNDIS.ANSCHLUSSGRAD/1",
        "id" : 1,
        "grad" : "Am Kanal angeschlossen",
        "grad_abkuerzung" : "angeschl."
      },
      "geometrie" : {
        "$self" : "/VERDIS_GRUNDIS.GEOM/645551",
        "geo_field" : "SRID=25832;POLYGON ((374445.5896290615 5681628.387671167, 374454.3693344742 5681623.080040176, 374433.5626410134 5681615.241474134, 374436.33651354164 5681624.741480974, 374445.5896290615 5681628.387671167))",
        "id" : 645551
      },
      "beschreibung" : null
    },
    "anteil" : null,
    "flaechenbezeichnung" : "15",
    "bemerkung" : null,
    "datum_erfassung" : "2003-01-01",
    "datum_veranlagung" : "03/01",
    "sperre" : null,
    "bemerkung_sperre" : "",
    "feb_id" : "20113214"
  }, {
    "$self" : "/VERDIS_GRUNDIS.FLAECHE/589437",
    "id" : 589437,
    "flaecheninfo" : {
      "$self" : "/VERDIS_GRUNDIS.FLAECHENINFO/588162",
      "id" : 588162,
      "groesse_aus_grafik" : 233,
      "groesse_korrektur" : 233,
      "flaechenart" : {
        "$self" : "/VERDIS_GRUNDIS.FLAECHENART/1",
        "id" : 1,
        "art" : "Dachfläche",
        "art_abkuerzung" : "DF"
      },
      "anschlussgrad" : {
        "$self" : "/VERDIS_GRUNDIS.ANSCHLUSSGRAD/1",
        "id" : 1,
        "grad" : "Am Kanal angeschlossen",
        "grad_abkuerzung" : "angeschl."
      },
      "geometrie" : {
        "$self" : "/VERDIS_GRUNDIS.GEOM/645552",
        "geo_field" : "SRID=25832;POLYGON ((374435.8309461139 5681600.538460134, 374435.39893056825 5681600.620038772, 374435.13951559365 5681601.2991502015, 374434.96152194217 5681601.76359036, 374433.03132803366 5681606.803273319, 374460.16307060793 5681616.929023319, 374462.0155327469 5681611.998565998, 374462.4369513914 5681610.878778762, 374462.21271963045 5681610.408596137, 374462.5832500383 5681609.192857303, 374461.231838312 5681608.689711026, 374437.0258882493 5681599.667178079, 374436.4172757305 5681599.440820511, 374435.8309461139 5681600.538460134))",
        "id" : 645552
      },
      "beschreibung" : null
    },
    "anteil" : null,
    "flaechenbezeichnung" : "5",
    "bemerkung" : null,
    "datum_erfassung" : "2003-01-01",
    "datum_veranlagung" : "03/01",
    "sperre" : null,
    "bemerkung_sperre" : "",
    "feb_id" : "20113214"
  }, {
    "$self" : "/VERDIS_GRUNDIS.FLAECHE/589438",
    "id" : 589438,
    "flaecheninfo" : {
      "$self" : "/VERDIS_GRUNDIS.FLAECHENINFO/588163",
      "id" : 588163,
      "groesse_aus_grafik" : 33,
      "groesse_korrektur" : 33,
      "flaechenart" : {
        "$self" : "/VERDIS_GRUNDIS.FLAECHENART/1",
        "id" : 1,
        "art" : "Dachfläche",
        "art_abkuerzung" : "DF"
      },
      "anschlussgrad" : {
        "$self" : "/VERDIS_GRUNDIS.ANSCHLUSSGRAD/1",
        "id" : 1,
        "grad" : "Am Kanal angeschlossen",
        "grad_abkuerzung" : "angeschl."
      },
      "geometrie" : {
        "$self" : "/VERDIS_GRUNDIS.GEOM/645553",
        "geo_field" : "SRID=25832;POLYGON ((374422.09005959705 5681627.26972427, 374426.5436041914 5681625.044555025, 374429.02630523965 5681618.399452778, 374431.71585985646 5681619.404228725, 374433.5626410134 5681615.241474134, 374424.6893881038 5681620.3457045425, 374422.09005959705 5681627.26972427))",
        "id" : 645553
      },
      "beschreibung" : null
    },
    "anteil" : null,
    "flaechenbezeichnung" : "35",
    "bemerkung" : null,
    "datum_erfassung" : "2003-01-01",
    "datum_veranlagung" : "03/01",
    "sperre" : null,
    "bemerkung_sperre" : "",
    "feb_id" : "20113214"
  }, {
    "$self" : "/VERDIS_GRUNDIS.FLAECHE/589440",
    "id" : 589440,
    "flaecheninfo" : {
      "$self" : "/VERDIS_GRUNDIS.FLAECHENINFO/588165",
      "id" : 588165,
      "groesse_aus_grafik" : 34,
      "groesse_korrektur" : 34,
      "flaechenart" : {
        "$self" : "/VERDIS_GRUNDIS.FLAECHENART/1",
        "id" : 1,
        "art" : "Dachfläche",
        "art_abkuerzung" : "DF"
      },
      "anschlussgrad" : {
        "$self" : "/VERDIS_GRUNDIS.ANSCHLUSSGRAD/1",
        "id" : 1,
        "grad" : "Am Kanal angeschlossen",
        "grad_abkuerzung" : "angeschl."
      },
      "geometrie" : {
        "$self" : "/VERDIS_GRUNDIS.GEOM/645555",
        "geo_field" : "SRID=25832;POLYGON ((374431.7990588136 5681627.384375118, 374433.70735120773 5681631.623850459, 374434.07529342175 5681630.659258503, 374436.33651354164 5681624.741480974, 374433.5626410134 5681615.241474134, 374431.71585985646 5681619.404228725, 374434.3900904432 5681620.403481459, 374431.89268258587 5681627.422482652, 374431.7990588136 5681627.384375118))",
        "id" : 645555
      },
      "beschreibung" : null
    },
    "anteil" : null,
    "flaechenbezeichnung" : "31",
    "bemerkung" : null,
    "datum_erfassung" : "2003-01-01",
    "datum_veranlagung" : "03/01",
    "sperre" : null,
    "bemerkung_sperre" : "",
    "feb_id" : "20113214"
  }, {
    "$self" : "/VERDIS_GRUNDIS.FLAECHE/589441",
    "id" : 589441,
    "flaecheninfo" : {
      "$self" : "/VERDIS_GRUNDIS.FLAECHENINFO/588166",
      "id" : 588166,
      "groesse_aus_grafik" : 43,
      "groesse_korrektur" : 43,
      "flaechenart" : {
        "$self" : "/VERDIS_GRUNDIS.FLAECHENART/1",
        "id" : 1,
        "art" : "Dachfläche",
        "art_abkuerzung" : "DF"
      },
      "anschlussgrad" : {
        "$self" : "/VERDIS_GRUNDIS.ANSCHLUSSGRAD/1",
        "id" : 1,
        "grad" : "Am Kanal angeschlossen",
        "grad_abkuerzung" : "angeschl."
      },
      "geometrie" : {
        "$self" : "/VERDIS_GRUNDIS.GEOM/645556",
        "geo_field" : "SRID=25832;POLYGON ((374429.02630523965 5681618.399452778, 374426.5436041914 5681625.044555025, 374426.47500691935 5681625.226460075, 374431.7990588136 5681627.384375118, 374431.89268258587 5681627.422482652, 374434.3900904432 5681620.403481459, 374431.71585985646 5681619.404228725, 374429.02630523965 5681618.399452778))",
        "id" : 645556
      },
      "beschreibung" : null
    },
    "anteil" : null,
    "flaechenbezeichnung" : "29",
    "bemerkung" : null,
    "datum_erfassung" : "2003-01-01",
    "datum_veranlagung" : "03/01",
    "sperre" : null,
    "bemerkung_sperre" : "",
    "feb_id" : "20113214"
  }, {
    "$self" : "/VERDIS_GRUNDIS.FLAECHE/589442",
    "id" : 589442,
    "flaecheninfo" : {
      "$self" : "/VERDIS_GRUNDIS.FLAECHENINFO/588167",
      "id" : 588167,
      "groesse_aus_grafik" : 31,
      "groesse_korrektur" : 31,
      "flaechenart" : {
        "$self" : "/VERDIS_GRUNDIS.FLAECHENART/1",
        "id" : 1,
        "art" : "Dachfläche",
        "art_abkuerzung" : "DF"
      },
      "anschlussgrad" : {
        "$self" : "/VERDIS_GRUNDIS.ANSCHLUSSGRAD/1",
        "id" : 1,
        "grad" : "Am Kanal angeschlossen",
        "grad_abkuerzung" : "angeschl."
      },
      "geometrie" : {
        "$self" : "/VERDIS_GRUNDIS.GEOM/645557",
        "geo_field" : "SRID=25832;POLYGON ((374426.5436041914 5681625.044555025, 374422.09005959705 5681627.26972427, 374433.70735120773 5681631.623850459, 374431.7990588136 5681627.384375118, 374426.47500691935 5681625.226460075, 374426.5436041914 5681625.044555025))",
        "id" : 645557
      },
      "beschreibung" : null
    },
    "anteil" : null,
    "flaechenbezeichnung" : "38",
    "bemerkung" : null,
    "datum_erfassung" : "2003-01-01",
    "datum_veranlagung" : "03/01",
    "sperre" : null,
    "bemerkung_sperre" : "",
    "feb_id" : "20113214"
  }, {
    "$self" : "/VERDIS_GRUNDIS.FLAECHE/589443",
    "id" : 589443,
    "flaecheninfo" : {
      "$self" : "/VERDIS_GRUNDIS.FLAECHENINFO/588168",
      "id" : 588168,
      "groesse_aus_grafik" : 32,
      "groesse_korrektur" : 32,
      "flaechenart" : {
        "$self" : "/VERDIS_GRUNDIS.FLAECHENART/1",
        "id" : 1,
        "art" : "Dachfläche",
        "art_abkuerzung" : "DF"
      },
      "anschlussgrad" : {
        "$self" : "/VERDIS_GRUNDIS.ANSCHLUSSGRAD/1",
        "id" : 1,
        "grad" : "Am Kanal angeschlossen",
        "grad_abkuerzung" : "angeschl."
      },
      "geometrie" : {
        "$self" : "/VERDIS_GRUNDIS.GEOM/645558",
        "geo_field" : "SRID=25832;POLYGON ((374442.9901829697 5681635.1625929335, 374454.6659221612 5681639.5042769825, 374452.91758742556 5681634.77297169, 374452.7541086711 5681635.204948588, 374447.4347133003 5681633.137033535, 374447.49503403157 5681632.971494682, 374442.9901829697 5681635.1625929335))",
        "id" : 645558
      },
      "beschreibung" : null
    },
    "anteil" : null,
    "flaechenbezeichnung" : "36",
    "bemerkung" : null,
    "datum_erfassung" : "2003-01-01",
    "datum_veranlagung" : "03/01",
    "sperre" : null,
    "bemerkung_sperre" : "",
    "feb_id" : "20113214"
  }, {
    "$self" : "/VERDIS_GRUNDIS.FLAECHE/589444",
    "id" : 589444,
    "flaecheninfo" : {
      "$self" : "/VERDIS_GRUNDIS.FLAECHENINFO/588169",
      "id" : 588169,
      "groesse_aus_grafik" : 34,
      "groesse_korrektur" : 34,
      "flaechenart" : {
        "$self" : "/VERDIS_GRUNDIS.FLAECHENART/1",
        "id" : 1,
        "art" : "Dachfläche",
        "art_abkuerzung" : "DF"
      },
      "anschlussgrad" : {
        "$self" : "/VERDIS_GRUNDIS.ANSCHLUSSGRAD/1",
        "id" : 1,
        "grad" : "Am Kanal angeschlossen",
        "grad_abkuerzung" : "angeschl."
      },
      "geometrie" : {
        "$self" : "/VERDIS_GRUNDIS.GEOM/645559",
        "geo_field" : "SRID=25832;POLYGON ((374454.3693344742 5681623.080040176, 374445.5896290615 5681628.387671167, 374443.3536149487 5681634.215331675, 374442.9901829697 5681635.1625929335, 374447.49503403157 5681632.971494682, 374449.9357103966 5681626.278913271, 374452.83104167134 5681627.371454668, 374454.3693344742 5681623.080040176))",
        "id" : 645559
      },
      "beschreibung" : null
    },
    "anteil" : null,
    "flaechenbezeichnung" : "32",
    "bemerkung" : null,
    "datum_erfassung" : "2003-01-01",
    "datum_veranlagung" : "03/01",
    "sperre" : null,
    "bemerkung_sperre" : "",
    "feb_id" : "20113214"
  }, {
    "$self" : "/VERDIS_GRUNDIS.FLAECHE/589445",
    "id" : 589445,
    "flaecheninfo" : {
      "$self" : "/VERDIS_GRUNDIS.FLAECHENINFO/588170",
      "id" : 588170,
      "groesse_aus_grafik" : 42,
      "groesse_korrektur" : 42,
      "flaechenart" : {
        "$self" : "/VERDIS_GRUNDIS.FLAECHENART/1",
        "id" : 1,
        "art" : "Dachfläche",
        "art_abkuerzung" : "DF"
      },
      "anschlussgrad" : {
        "$self" : "/VERDIS_GRUNDIS.ANSCHLUSSGRAD/1",
        "id" : 1,
        "grad" : "Am Kanal angeschlossen",
        "grad_abkuerzung" : "angeschl."
      },
      "geometrie" : {
        "$self" : "/VERDIS_GRUNDIS.GEOM/645560",
        "geo_field" : "SRID=25832;POLYGON ((374447.4347133003 5681633.137033535, 374452.7541086711 5681635.204948588, 374452.91758742556 5681634.77297169, 374455.3623704389 5681628.32660591, 374452.83104167134 5681627.371454668, 374449.9357103966 5681626.278913271, 374447.49503403157 5681632.971494682, 374447.4347133003 5681633.137033535))",
        "id" : 645560
      },
      "beschreibung" : null
    },
    "anteil" : null,
    "flaechenbezeichnung" : "30",
    "bemerkung" : null,
    "datum_erfassung" : "2003-01-01",
    "datum_veranlagung" : "03/01",
    "sperre" : null,
    "bemerkung_sperre" : "",
    "feb_id" : "20113214"
  }, {
    "$self" : "/VERDIS_GRUNDIS.FLAECHE/589446",
    "id" : 589446,
    "flaecheninfo" : {
      "$self" : "/VERDIS_GRUNDIS.FLAECHENINFO/588171",
      "id" : 588171,
      "groesse_aus_grafik" : 34,
      "groesse_korrektur" : 34,
      "flaechenart" : {
        "$self" : "/VERDIS_GRUNDIS.FLAECHENART/1",
        "id" : 1,
        "art" : "Dachfläche",
        "art_abkuerzung" : "DF"
      },
      "anschlussgrad" : {
        "$self" : "/VERDIS_GRUNDIS.ANSCHLUSSGRAD/1",
        "id" : 1,
        "grad" : "Am Kanal angeschlossen",
        "grad_abkuerzung" : "angeschl."
      },
      "geometrie" : {
        "$self" : "/VERDIS_GRUNDIS.GEOM/645561",
        "geo_field" : "SRID=25832;POLYGON ((374455.3623704389 5681628.32660591, 374452.91758742556 5681634.77297169, 374454.6659221612 5681639.5042769825, 374457.417615518 5681632.633129649, 374454.3693344742 5681623.080040176, 374452.83104167134 5681627.371454668, 374455.3623704389 5681628.32660591))",
        "id" : 645561
      },
      "beschreibung" : null
    },
    "anteil" : null,
    "flaechenbezeichnung" : "33",
    "bemerkung" : null,
    "datum_erfassung" : "2003-01-01",
    "datum_veranlagung" : "03/01",
    "sperre" : null,
    "bemerkung_sperre" : "",
    "feb_id" : "20113214"
  }, {
    "$self" : "/VERDIS_GRUNDIS.FLAECHE/589447",
    "id" : 589447,
    "flaecheninfo" : {
      "$self" : "/VERDIS_GRUNDIS.FLAECHENINFO/588172",
      "id" : 588172,
      "groesse_aus_grafik" : 201,
      "groesse_korrektur" : 201,
      "flaechenart" : {
        "$self" : "/VERDIS_GRUNDIS.FLAECHENART/1",
        "id" : 1,
        "art" : "Dachfläche",
        "art_abkuerzung" : "DF"
      },
      "anschlussgrad" : {
        "$self" : "/VERDIS_GRUNDIS.ANSCHLUSSGRAD/1",
        "id" : 1,
        "grad" : "Am Kanal angeschlossen",
        "grad_abkuerzung" : "angeschl."
      },
      "geometrie" : {
        "$self" : "/VERDIS_GRUNDIS.GEOM/645562",
        "geo_field" : "SRID=25832;POLYGON ((374480.16605503485 5681641.238559449, 374479.22925327346 5681632.4459856665, 374454.3693344742 5681623.080040176, 374457.417615518 5681632.633129649, 374458.07199321315 5681632.880538086, 374479.74737137556 5681641.08067324, 374480.16605503485 5681641.238559449))",
        "id" : 645562
      },
      "beschreibung" : null
    },
    "anteil" : null,
    "flaechenbezeichnung" : "9",
    "bemerkung" : null,
    "datum_erfassung" : "2003-01-01",
    "datum_veranlagung" : "03/01",
    "sperre" : null,
    "bemerkung_sperre" : "",
    "feb_id" : "20113214"
  }, {
    "$self" : "/VERDIS_GRUNDIS.FLAECHE/589448",
    "id" : 589448,
    "flaecheninfo" : {
      "$self" : "/VERDIS_GRUNDIS.FLAECHENINFO/588173",
      "id" : 588173,
      "groesse_aus_grafik" : 210,
      "groesse_korrektur" : 210,
      "flaechenart" : {
        "$self" : "/VERDIS_GRUNDIS.FLAECHENART/1",
        "id" : 1,
        "art" : "Dachfläche",
        "art_abkuerzung" : "DF"
      },
      "anschlussgrad" : {
        "$self" : "/VERDIS_GRUNDIS.ANSCHLUSSGRAD/1",
        "id" : 1,
        "grad" : "Am Kanal angeschlossen",
        "grad_abkuerzung" : "angeschl."
      },
      "geometrie" : {
        "$self" : "/VERDIS_GRUNDIS.GEOM/645563",
        "geo_field" : "SRID=25832;POLYGON ((374475.07653026655 5681622.4951436315, 374479.22925327346 5681632.4459856665, 374484.41248363256 5681618.460390923, 374490.5724528916 5681601.836496119, 374483.7958042957 5681599.317875398, 374483.78071465343 5681599.313460022, 374475.07653026655 5681622.4951436315))",
        "id" : 645563
      },
      "beschreibung" : null
    },
    "anteil" : null,
    "flaechenbezeichnung" : "7",
    "bemerkung" : null,
    "datum_erfassung" : "2003-01-01",
    "datum_veranlagung" : "03/01",
    "sperre" : null,
    "bemerkung_sperre" : "",
    "feb_id" : "20113214"
  }, {
    "$self" : "/VERDIS_GRUNDIS.FLAECHE/589449",
    "id" : 589449,
    "flaecheninfo" : {
      "$self" : "/VERDIS_GRUNDIS.FLAECHENINFO/588174",
      "id" : 588174,
      "groesse_aus_grafik" : 68,
      "groesse_korrektur" : 68,
      "flaechenart" : {
        "$self" : "/VERDIS_GRUNDIS.FLAECHENART/1",
        "id" : 1,
        "art" : "Dachfläche",
        "art_abkuerzung" : "DF"
      },
      "anschlussgrad" : {
        "$self" : "/VERDIS_GRUNDIS.ANSCHLUSSGRAD/1",
        "id" : 1,
        "grad" : "Am Kanal angeschlossen",
        "grad_abkuerzung" : "angeschl."
      },
      "geometrie" : {
        "$self" : "/VERDIS_GRUNDIS.GEOM/645564",
        "geo_field" : "SRID=25832;POLYGON ((374484.41248363256 5681618.460390923, 374479.22925327346 5681632.4459856665, 374480.16605503485 5681641.238559449, 374486.8568799868 5681623.772633533, 374484.41248363256 5681618.460390923))",
        "id" : 645564
      },
      "beschreibung" : null
    },
    "anteil" : null,
    "flaechenbezeichnung" : "21",
    "bemerkung" : null,
    "datum_erfassung" : "2003-01-01",
    "datum_veranlagung" : "03/01",
    "sperre" : null,
    "bemerkung_sperre" : "",
    "feb_id" : "20113214"
  }, {
    "$self" : "/VERDIS_GRUNDIS.FLAECHE/589450",
    "id" : 589450,
    "flaecheninfo" : {
      "$self" : "/VERDIS_GRUNDIS.FLAECHENINFO/588175",
      "id" : 588175,
      "groesse_aus_grafik" : 169,
      "groesse_korrektur" : 169,
      "flaechenart" : {
        "$self" : "/VERDIS_GRUNDIS.FLAECHENART/1",
        "id" : 1,
        "art" : "Dachfläche",
        "art_abkuerzung" : "DF"
      },
      "anschlussgrad" : {
        "$self" : "/VERDIS_GRUNDIS.ANSCHLUSSGRAD/1",
        "id" : 1,
        "grad" : "Am Kanal angeschlossen",
        "grad_abkuerzung" : "angeschl."
      },
      "geometrie" : {
        "$self" : "/VERDIS_GRUNDIS.GEOM/645565",
        "geo_field" : "SRID=25832;POLYGON ((374494.48738288507 5681603.1313068485, 374489.71822234616 5681615.621156319, 374496.5836756602 5681618.235245037, 374493.7763449587 5681626.436496675, 374486.8568799868 5681623.772633533, 374480.16605503485 5681641.238559449, 374479.74737137556 5681641.08067324, 374479.503663104 5681641.752053877, 374479.9800536297 5681641.926590815, 374487.0351645723 5681644.508838554, 374493.41712675244 5681627.245478818, 374494.1528912373 5681627.423580109, 374494.34836548194 5681626.894319611, 374494.92483029887 5681625.331918221, 374495.5257012695 5681623.705526628, 374497.7489127554 5681617.686291296, 374490.7421234846 5681614.97007136, 374495.1306158006 5681603.3752553435, 374494.48738288507 5681603.1313068485))",
        "id" : 645565
      },
      "beschreibung" : null
    },
    "anteil" : null,
    "flaechenbezeichnung" : "12",
    "bemerkung" : null,
    "datum_erfassung" : "2003-01-01",
    "datum_veranlagung" : "03/01",
    "sperre" : null,
    "bemerkung_sperre" : "",
    "feb_id" : "20113214"
  }, {
    "$self" : "/VERDIS_GRUNDIS.FLAECHE/589451",
    "id" : 589451,
    "flaecheninfo" : {
      "$self" : "/VERDIS_GRUNDIS.FLAECHENINFO/588176",
      "id" : 588176,
      "groesse_aus_grafik" : 11,
      "groesse_korrektur" : 11,
      "flaechenart" : {
        "$self" : "/VERDIS_GRUNDIS.FLAECHENART/1",
        "id" : 1,
        "art" : "Dachfläche",
        "art_abkuerzung" : "DF"
      },
      "anschlussgrad" : {
        "$self" : "/VERDIS_GRUNDIS.ANSCHLUSSGRAD/1",
        "id" : 1,
        "grad" : "Am Kanal angeschlossen",
        "grad_abkuerzung" : "angeschl."
      },
      "geometrie" : {
        "$self" : "/VERDIS_GRUNDIS.GEOM/645566",
        "geo_field" : "SRID=25832;POLYGON ((374489.3624149971 5681622.088336458, 374490.33078503236 5681622.453923705, 374492.3042788282 5681623.199809373, 374493.60704921186 5681619.8746831715, 374491.84557279944 5681619.200269149, 374490.58527226 5681618.718577052, 374490.2956835404 5681619.516701165, 374489.5557578355 5681621.557112015, 374489.3624149971 5681622.088336458))",
        "id" : 645566
      },
      "beschreibung" : null
    },
    "anteil" : null,
    "flaechenbezeichnung" : "48",
    "bemerkung" : null,
    "datum_erfassung" : "2003-01-01",
    "datum_veranlagung" : "03/01",
    "sperre" : null,
    "bemerkung_sperre" : "",
    "feb_id" : "20113214"
  }, {
    "$self" : "/VERDIS_GRUNDIS.FLAECHE/589452",
    "id" : 589452,
    "flaecheninfo" : {
      "$self" : "/VERDIS_GRUNDIS.FLAECHENINFO/588177",
      "id" : 588177,
      "groesse_aus_grafik" : 23,
      "groesse_korrektur" : 23,
      "flaechenart" : {
        "$self" : "/VERDIS_GRUNDIS.FLAECHENART/1",
        "id" : 1,
        "art" : "Dachfläche",
        "art_abkuerzung" : "DF"
      },
      "anschlussgrad" : {
        "$self" : "/VERDIS_GRUNDIS.ANSCHLUSSGRAD/1",
        "id" : 1,
        "grad" : "Am Kanal angeschlossen",
        "grad_abkuerzung" : "angeschl."
      },
      "geometrie" : {
        "$self" : "/VERDIS_GRUNDIS.GEOM/645567",
        "geo_field" : "SRID=25832;POLYGON ((374490.33078503236 5681622.453923705, 374489.3624149971 5681622.088336458, 374489.5557578355 5681621.557112015, 374488.16543646157 5681619.950968342, 374484.41248363256 5681618.460390923, 374486.8568799868 5681623.772633533, 374493.7763449587 5681626.436496675, 374490.33078503236 5681622.453923705))",
        "id" : 645567
      },
      "beschreibung" : null
    },
    "anteil" : null,
    "flaechenbezeichnung" : "41",
    "bemerkung" : null,
    "datum_erfassung" : "2003-01-01",
    "datum_veranlagung" : "03/01",
    "sperre" : null,
    "bemerkung_sperre" : "",
    "feb_id" : "20113214"
  }, {
    "$self" : "/VERDIS_GRUNDIS.FLAECHE/589453",
    "id" : 589453,
    "flaecheninfo" : {
      "$self" : "/VERDIS_GRUNDIS.FLAECHENINFO/588178",
      "id" : 588178,
      "groesse_aus_grafik" : 26,
      "groesse_korrektur" : 26,
      "flaechenart" : {
        "$self" : "/VERDIS_GRUNDIS.FLAECHENART/1",
        "id" : 1,
        "art" : "Dachfläche",
        "art_abkuerzung" : "DF"
      },
      "anschlussgrad" : {
        "$self" : "/VERDIS_GRUNDIS.ANSCHLUSSGRAD/1",
        "id" : 1,
        "grad" : "Am Kanal angeschlossen",
        "grad_abkuerzung" : "angeschl."
      },
      "geometrie" : {
        "$self" : "/VERDIS_GRUNDIS.GEOM/645568",
        "geo_field" : "SRID=25832;POLYGON ((374490.58527226 5681618.718577052, 374491.84557279944 5681619.200269149, 374496.5836756602 5681618.235245037, 374489.71822234616 5681615.621156319, 374484.41248363256 5681618.460390923, 374488.16543646157 5681619.950968342, 374490.2956835404 5681619.516701165, 374490.58527226 5681618.718577052))",
        "id" : 645568
      },
      "beschreibung" : null
    },
    "anteil" : null,
    "flaechenbezeichnung" : "39",
    "bemerkung" : null,
    "datum_erfassung" : "2003-01-01",
    "datum_veranlagung" : "03/01",
    "sperre" : null,
    "bemerkung_sperre" : "",
    "feb_id" : "20113214"
  }, {
    "$self" : "/VERDIS_GRUNDIS.FLAECHE/589454",
    "id" : 589454,
    "flaecheninfo" : {
      "$self" : "/VERDIS_GRUNDIS.FLAECHENINFO/588179",
      "id" : 588179,
      "groesse_aus_grafik" : 20,
      "groesse_korrektur" : 20,
      "flaechenart" : {
        "$self" : "/VERDIS_GRUNDIS.FLAECHENART/1",
        "id" : 1,
        "art" : "Dachfläche",
        "art_abkuerzung" : "DF"
      },
      "anschlussgrad" : {
        "$self" : "/VERDIS_GRUNDIS.ANSCHLUSSGRAD/1",
        "id" : 1,
        "grad" : "Am Kanal angeschlossen",
        "grad_abkuerzung" : "angeschl."
      },
      "geometrie" : {
        "$self" : "/VERDIS_GRUNDIS.GEOM/645569",
        "geo_field" : "SRID=25832;POLYGON ((374490.33078503236 5681622.453923705, 374493.7763449587 5681626.436496675, 374496.5836756602 5681618.235245037, 374491.84557279944 5681619.200269149, 374493.60704921186 5681619.8746831715, 374492.3042788282 5681623.199809373, 374490.33078503236 5681622.453923705))",
        "id" : 645569
      },
      "beschreibung" : null
    },
    "anteil" : null,
    "flaechenbezeichnung" : "44",
    "bemerkung" : null,
    "datum_erfassung" : "2003-01-01",
    "datum_veranlagung" : "03/01",
    "sperre" : null,
    "bemerkung_sperre" : "",
    "feb_id" : "20113214"
  }, {
    "$self" : "/VERDIS_GRUNDIS.FLAECHE/589455",
    "id" : 589455,
    "flaecheninfo" : {
      "$self" : "/VERDIS_GRUNDIS.FLAECHENINFO/588180",
      "id" : 588180,
      "groesse_aus_grafik" : 2,
      "groesse_korrektur" : 2,
      "flaechenart" : {
        "$self" : "/VERDIS_GRUNDIS.FLAECHENART/1",
        "id" : 1,
        "art" : "Dachfläche",
        "art_abkuerzung" : "DF"
      },
      "anschlussgrad" : {
        "$self" : "/VERDIS_GRUNDIS.ANSCHLUSSGRAD/1",
        "id" : 1,
        "grad" : "Am Kanal angeschlossen",
        "grad_abkuerzung" : "angeschl."
      },
      "geometrie" : {
        "$self" : "/VERDIS_GRUNDIS.GEOM/645570",
        "geo_field" : "SRID=25832;POLYGON ((374490.2956835404 5681619.516701165, 374488.16543646157 5681619.950968342, 374489.5557578355 5681621.557112015, 374490.2956835404 5681619.516701165))",
        "id" : 645570
      },
      "beschreibung" : null
    },
    "anteil" : null,
    "flaechenbezeichnung" : "54",
    "bemerkung" : null,
    "datum_erfassung" : "2003-01-01",
    "datum_veranlagung" : "03/01",
    "sperre" : null,
    "bemerkung_sperre" : "",
    "feb_id" : "20113214"
  }, {
    "$self" : "/VERDIS_GRUNDIS.FLAECHE/589499",
    "id" : 589499,
    "flaecheninfo" : {
      "$self" : "/VERDIS_GRUNDIS.FLAECHENINFO/588224",
      "id" : 588224,
      "groesse_aus_grafik" : 63,
      "groesse_korrektur" : 63,
      "flaechenart" : {
        "$self" : "/VERDIS_GRUNDIS.FLAECHENART/1",
        "id" : 1,
        "art" : "Dachfläche",
        "art_abkuerzung" : "DF"
      },
      "anschlussgrad" : {
        "$self" : "/VERDIS_GRUNDIS.ANSCHLUSSGRAD/1",
        "id" : 1,
        "grad" : "Am Kanal angeschlossen",
        "grad_abkuerzung" : "angeschl."
      },
      "geometrie" : {
        "$self" : "/VERDIS_GRUNDIS.GEOM/645615",
        "geo_field" : "SRID=25832;POLYGON ((374494.1317065172 5681602.996746752, 374494.07751875743 5681603.139110838, 374490.5724528916 5681601.836496119, 374484.41248363256 5681618.460390923, 374489.71822234616 5681615.621156319, 374494.48738288507 5681603.1313068485, 374494.1317065172 5681602.996746752))",
        "id" : 645615
      },
      "beschreibung" : null
    },
    "anteil" : null,
    "flaechenbezeichnung" : "24",
    "bemerkung" : null,
    "datum_erfassung" : "2003-01-01",
    "datum_veranlagung" : "03/01",
    "sperre" : null,
    "bemerkung_sperre" : "",
    "feb_id" : "20113214"
  }, {
    "$self" : "/VERDIS_GRUNDIS.FLAECHE/589500",
    "id" : 589500,
    "flaecheninfo" : {
      "$self" : "/VERDIS_GRUNDIS.FLAECHENINFO/588225",
      "id" : 588225,
      "groesse_aus_grafik" : 63,
      "groesse_korrektur" : 63,
      "flaechenart" : {
        "$self" : "/VERDIS_GRUNDIS.FLAECHENART/1",
        "id" : 1,
        "art" : "Dachfläche",
        "art_abkuerzung" : "DF"
      },
      "anschlussgrad" : {
        "$self" : "/VERDIS_GRUNDIS.ANSCHLUSSGRAD/1",
        "id" : 1,
        "grad" : "Am Kanal angeschlossen",
        "grad_abkuerzung" : "angeschl."
      },
      "geometrie" : {
        "$self" : "/VERDIS_GRUNDIS.GEOM/645616",
        "geo_field" : "SRID=25832;POLYGON ((374436.33651354164 5681624.741480974, 374434.07529342175 5681630.659258503, 374443.3536149487 5681634.215331675, 374445.5896290615 5681628.387671167, 374436.33651354164 5681624.741480974))",
        "id" : 645616
      },
      "beschreibung" : null
    },
    "anteil" : null,
    "flaechenbezeichnung" : "25",
    "bemerkung" : null,
    "datum_erfassung" : "2003-01-01",
    "datum_veranlagung" : "03/01",
    "sperre" : null,
    "bemerkung_sperre" : "",
    "feb_id" : "20113214"
  }, {
    "$self" : "/VERDIS_GRUNDIS.FLAECHE/589501",
    "id" : 589501,
    "flaecheninfo" : {
      "$self" : "/VERDIS_GRUNDIS.FLAECHENINFO/588226",
      "id" : 588226,
      "groesse_aus_grafik" : 736,
      "groesse_korrektur" : 736,
      "flaechenart" : {
        "$self" : "/VERDIS_GRUNDIS.FLAECHENART/1",
        "id" : 1,
        "art" : "Dachfläche",
        "art_abkuerzung" : "DF"
      },
      "anschlussgrad" : {
        "$self" : "/VERDIS_GRUNDIS.ANSCHLUSSGRAD/1",
        "id" : 1,
        "grad" : "Am Kanal angeschlossen",
        "grad_abkuerzung" : "angeschl."
      },
      "geometrie" : {
        "$self" : "/VERDIS_GRUNDIS.GEOM/645617",
        "geo_field" : "SRID=25832;POLYGON ((374433.6644296758 5681659.16907405, 374434.3871633522 5681657.583723214, 374443.4208157286 5681661.005693205, 374451.7040731758 5681639.154172889, 374452.3207867369 5681639.36006965, 374455.0778676346 5681640.281003039, 374458.07199321315 5681632.880538086, 374457.417615518 5681632.633129649, 374454.6659221612 5681639.5042769825, 374442.9901829697 5681635.1625929335, 374443.3536149487 5681634.215331675, 374434.07529342175 5681630.659258503, 374433.70735120773 5681631.623850459, 374422.09005959705 5681627.26972427, 374424.6893881038 5681620.3457045425, 374423.9577776119 5681620.069394895, 374421.2040402256 5681627.647175271, 374423.85838636383 5681628.670346848, 374424.71524453536 5681629.00154948, 374416.51350152865 5681650.959945204, 374425.5223309994 5681654.404934995, 374424.97149269655 5681656.078497436, 374433.6644296758 5681659.16907405))",
        "id" : 645617
      },
      "beschreibung" : null
    },
    "anteil" : null,
    "flaechenbezeichnung" : "1",
    "bemerkung" : null,
    "datum_erfassung" : "2003-01-01",
    "datum_veranlagung" : "03/01",
    "sperre" : null,
    "bemerkung_sperre" : "",
    "feb_id" : "20113214"
  }, {
    "$self" : "/VERDIS_GRUNDIS.FLAECHE/589502",
    "id" : 589502,
    "flaecheninfo" : {
      "$self" : "/VERDIS_GRUNDIS.FLAECHENINFO/588227",
      "id" : 588227,
      "groesse_aus_grafik" : 391,
      "groesse_korrektur" : 391,
      "flaechenart" : {
        "$self" : "/VERDIS_GRUNDIS.FLAECHENART/1",
        "id" : 1,
        "art" : "Dachfläche",
        "art_abkuerzung" : "DF"
      },
      "anschlussgrad" : {
        "$self" : "/VERDIS_GRUNDIS.ANSCHLUSSGRAD/1",
        "id" : 1,
        "grad" : "Am Kanal angeschlossen",
        "grad_abkuerzung" : "angeschl."
      },
      "geometrie" : {
        "$self" : "/VERDIS_GRUNDIS.GEOM/645618",
        "geo_field" : "SRID=25832;POLYGON ((374382.722749874 5681619.726474678, 374370.9518086463 5681651.038121747, 374381.96979836375 5681655.1352169225, 374382.43349835277 5681653.900569144, 374384.12694626674 5681649.386976639, 374386.5449720733 5681642.945402844, 374387.1440882869 5681641.349068248, 374393.6221742928 5681624.090683118, 374390.96013735235 5681623.048826709, 374382.722749874 5681619.726474678))",
        "id" : 645618
      },
      "beschreibung" : null
    },
    "anteil" : null,
    "flaechenbezeichnung" : "3",
    "bemerkung" : null,
    "datum_erfassung" : "2003-01-01",
    "datum_veranlagung" : "03/01",
    "sperre" : null,
    "bemerkung_sperre" : "",
    "feb_id" : "20113214"
  }, {
    "$self" : "/VERDIS_GRUNDIS.FLAECHE/589505",
    "id" : 589505,
    "flaecheninfo" : {
      "$self" : "/VERDIS_GRUNDIS.FLAECHENINFO/588230",
      "id" : 588230,
      "groesse_aus_grafik" : 16,
      "groesse_korrektur" : 16,
      "flaechenart" : {
        "$self" : "/VERDIS_GRUNDIS.FLAECHENART/1",
        "id" : 1,
        "art" : "Dachfläche",
        "art_abkuerzung" : "DF"
      },
      "anschlussgrad" : {
        "$self" : "/VERDIS_GRUNDIS.ANSCHLUSSGRAD/1",
        "id" : 1,
        "grad" : "Am Kanal angeschlossen",
        "grad_abkuerzung" : "angeschl."
      },
      "geometrie" : {
        "$self" : "/VERDIS_GRUNDIS.GEOM/645621",
        "geo_field" : "SRID=25832;POLYGON ((374430.15086360276 5681605.7283951575, 374433.03132803366 5681606.803273319, 374434.96152194217 5681601.76359036, 374432.24531966075 5681600.767915939, 374430.15086360276 5681605.7283951575))",
        "id" : 645621
      },
      "beschreibung" : null
    },
    "anteil" : null,
    "flaechenbezeichnung" : "45",
    "bemerkung" : null,
    "datum_erfassung" : "2003-01-01",
    "datum_veranlagung" : "03/01",
    "sperre" : null,
    "bemerkung_sperre" : "",
    "feb_id" : "20113214"
  }, {
    "$self" : "/VERDIS_GRUNDIS.FLAECHE/589506",
    "id" : 589506,
    "flaecheninfo" : {
      "$self" : "/VERDIS_GRUNDIS.FLAECHENINFO/588231",
      "id" : 588231,
      "groesse_aus_grafik" : 15,
      "groesse_korrektur" : 15,
      "flaechenart" : {
        "$self" : "/VERDIS_GRUNDIS.FLAECHENART/1",
        "id" : 1,
        "art" : "Dachfläche",
        "art_abkuerzung" : "DF"
      },
      "anschlussgrad" : {
        "$self" : "/VERDIS_GRUNDIS.ANSCHLUSSGRAD/1",
        "id" : 1,
        "grad" : "Am Kanal angeschlossen",
        "grad_abkuerzung" : "angeschl."
      },
      "geometrie" : {
        "$self" : "/VERDIS_GRUNDIS.GEOM/645622",
        "geo_field" : "SRID=25832;POLYGON ((374462.0155327469 5681611.998565998, 374460.16307060793 5681616.929023319, 374462.97348924354 5681617.977885016, 374464.61824489385 5681612.812701555, 374463.34228240326 5681612.413635062, 374462.0155327469 5681611.998565998))",
        "id" : 645622
      },
      "beschreibung" : null
    },
    "anteil" : null,
    "flaechenbezeichnung" : "47",
    "bemerkung" : null,
    "datum_erfassung" : "2003-01-01",
    "datum_veranlagung" : "03/01",
    "sperre" : null,
    "bemerkung_sperre" : "",
    "feb_id" : "20113214"
  }, {
    "$self" : "/VERDIS_GRUNDIS.FLAECHE/589507",
    "id" : 589507,
    "flaecheninfo" : {
      "$self" : "/VERDIS_GRUNDIS.FLAECHENINFO/588232",
      "id" : 588232,
      "groesse_aus_grafik" : 22,
      "groesse_korrektur" : 22,
      "flaechenart" : {
        "$self" : "/VERDIS_GRUNDIS.FLAECHENART/1",
        "id" : 1,
        "art" : "Dachfläche",
        "art_abkuerzung" : "DF"
      },
      "anschlussgrad" : {
        "$self" : "/VERDIS_GRUNDIS.ANSCHLUSSGRAD/1",
        "id" : 1,
        "grad" : "Am Kanal angeschlossen",
        "grad_abkuerzung" : "angeschl."
      },
      "geometrie" : {
        "$self" : "/VERDIS_GRUNDIS.GEOM/645623",
        "geo_field" : "SRID=25832;POLYGON ((374415.4666182287 5681651.049692025, 374416.51350152865 5681650.959945204, 374424.71524453536 5681629.00154948, 374423.85838636383 5681628.670346848, 374415.4666182287 5681651.049692025))",
        "id" : 645623
      },
      "beschreibung" : null
    },
    "anteil" : null,
    "flaechenbezeichnung" : "43",
    "bemerkung" : null,
    "datum_erfassung" : "2003-01-01",
    "datum_veranlagung" : "03/01",
    "sperre" : null,
    "bemerkung_sperre" : "",
    "feb_id" : "20113214"
  }, {
    "$self" : "/VERDIS_GRUNDIS.FLAECHE/589508",
    "id" : 589508,
    "flaecheninfo" : {
      "$self" : "/VERDIS_GRUNDIS.FLAECHENINFO/588233",
      "id" : 588233,
      "groesse_aus_grafik" : 6,
      "groesse_korrektur" : 6,
      "flaechenart" : {
        "$self" : "/VERDIS_GRUNDIS.FLAECHENART/1",
        "id" : 1,
        "art" : "Dachfläche",
        "art_abkuerzung" : "DF"
      },
      "anschlussgrad" : {
        "$self" : "/VERDIS_GRUNDIS.ANSCHLUSSGRAD/1",
        "id" : 1,
        "grad" : "Am Kanal angeschlossen",
        "grad_abkuerzung" : "angeschl."
      },
      "geometrie" : {
        "$self" : "/VERDIS_GRUNDIS.GEOM/645624",
        "geo_field" : "SRID=25832;POLYGON ((374434.78303106874 5681658.459142094, 374443.3993817866 5681661.62997341, 374443.9081726745 5681661.817351916, 374443.4208157286 5681661.005693205, 374434.3871633522 5681657.583723214, 374434.78303106874 5681658.459142094))",
        "id" : 645624
      },
      "beschreibung" : null
    },
    "anteil" : null,
    "flaechenbezeichnung" : "50",
    "bemerkung" : null,
    "datum_erfassung" : "2003-01-01",
    "datum_veranlagung" : "05/01",
    "sperre" : null,
    "bemerkung_sperre" : "",
    "feb_id" : "20113214"
  }, {
    "$self" : "/VERDIS_GRUNDIS.FLAECHE/589509",
    "id" : 589509,
    "flaecheninfo" : {
      "$self" : "/VERDIS_GRUNDIS.FLAECHENINFO/588234",
      "id" : 588234,
      "groesse_aus_grafik" : 16,
      "groesse_korrektur" : 16,
      "flaechenart" : {
        "$self" : "/VERDIS_GRUNDIS.FLAECHENART/1",
        "id" : 1,
        "art" : "Dachfläche",
        "art_abkuerzung" : "DF"
      },
      "anschlussgrad" : {
        "$self" : "/VERDIS_GRUNDIS.ANSCHLUSSGRAD/1",
        "id" : 1,
        "grad" : "Am Kanal angeschlossen",
        "grad_abkuerzung" : "angeschl."
      },
      "geometrie" : {
        "$self" : "/VERDIS_GRUNDIS.GEOM/645625",
        "geo_field" : "SRID=25832;POLYGON ((374451.7040731758 5681639.154172889, 374443.4208157286 5681661.005693205, 374443.9081726745 5681661.817351916, 374452.3207867369 5681639.36006965, 374451.7040731758 5681639.154172889))",
        "id" : 645625
      },
      "beschreibung" : null
    },
    "anteil" : null,
    "flaechenbezeichnung" : "46",
    "bemerkung" : null,
    "datum_erfassung" : "2005-12-13",
    "datum_veranlagung" : "06/01",
    "sperre" : null,
    "bemerkung_sperre" : "",
    "feb_id" : null
  }, {
    "$self" : "/VERDIS_GRUNDIS.FLAECHE/589510",
    "id" : 589510,
    "flaecheninfo" : {
      "$self" : "/VERDIS_GRUNDIS.FLAECHENINFO/588235",
      "id" : 588235,
      "groesse_aus_grafik" : 5,
      "groesse_korrektur" : 5,
      "flaechenart" : {
        "$self" : "/VERDIS_GRUNDIS.FLAECHENART/1",
        "id" : 1,
        "art" : "Dachfläche",
        "art_abkuerzung" : "DF"
      },
      "anschlussgrad" : {
        "$self" : "/VERDIS_GRUNDIS.ANSCHLUSSGRAD/1",
        "id" : 1,
        "grad" : "Am Kanal angeschlossen",
        "grad_abkuerzung" : "angeschl."
      },
      "geometrie" : {
        "$self" : "/VERDIS_GRUNDIS.GEOM/645626",
        "geo_field" : "SRID=25832;POLYGON ((374424.4986653589 5681654.551878816, 374425.5223309994 5681654.404934995, 374416.51350152865 5681650.959945204, 374415.4666182287 5681651.049692025, 374422.5528591573 5681653.796827279, 374424.4986653589 5681654.551878816))",
        "id" : 645626
      },
      "beschreibung" : null
    },
    "anteil" : null,
    "flaechenbezeichnung" : "51",
    "bemerkung" : null,
    "datum_erfassung" : "2003-01-01",
    "datum_veranlagung" : "03/01",
    "sperre" : null,
    "bemerkung_sperre" : "",
    "feb_id" : "20113214"
  }, {
    "$self" : "/VERDIS_GRUNDIS.FLAECHE/589511",
    "id" : 589511,
    "flaecheninfo" : {
      "$self" : "/VERDIS_GRUNDIS.FLAECHENINFO/588236",
      "id" : 588236,
      "groesse_aus_grafik" : 2,
      "groesse_korrektur" : 2,
      "flaechenart" : {
        "$self" : "/VERDIS_GRUNDIS.FLAECHENART/1",
        "id" : 1,
        "art" : "Dachfläche",
        "art_abkuerzung" : "DF"
      },
      "anschlussgrad" : {
        "$self" : "/VERDIS_GRUNDIS.ANSCHLUSSGRAD/1",
        "id" : 1,
        "grad" : "Am Kanal angeschlossen",
        "grad_abkuerzung" : "angeschl."
      },
      "geometrie" : {
        "$self" : "/VERDIS_GRUNDIS.GEOM/645627",
        "geo_field" : "SRID=25832;POLYGON ((374425.5223309994 5681654.404934995, 374424.4986653589 5681654.551878816, 374423.78805617616 5681656.3790162485, 374424.97149269655 5681656.078497436, 374425.5223309994 5681654.404934995))",
        "id" : 645627
      },
      "beschreibung" : null
    },
    "anteil" : null,
    "flaechenbezeichnung" : "55",
    "bemerkung" : null,
    "datum_erfassung" : "2003-01-01",
    "datum_veranlagung" : "03/01",
    "sperre" : null,
    "bemerkung_sperre" : "",
    "feb_id" : "20113214"
  }, {
    "$self" : "/VERDIS_GRUNDIS.FLAECHE/589512",
    "id" : 589512,
    "flaecheninfo" : {
      "$self" : "/VERDIS_GRUNDIS.FLAECHENINFO/588237",
      "id" : 588237,
      "groesse_aus_grafik" : 1,
      "groesse_korrektur" : 1,
      "flaechenart" : {
        "$self" : "/VERDIS_GRUNDIS.FLAECHENART/1",
        "id" : 1,
        "art" : "Dachfläche",
        "art_abkuerzung" : "DF"
      },
      "anschlussgrad" : {
        "$self" : "/VERDIS_GRUNDIS.ANSCHLUSSGRAD/1",
        "id" : 1,
        "grad" : "Am Kanal angeschlossen",
        "grad_abkuerzung" : "angeschl."
      },
      "geometrie" : {
        "$self" : "/VERDIS_GRUNDIS.GEOM/645628",
        "geo_field" : "SRID=25832;POLYGON ((374434.3871633522 5681657.583723214, 374433.6644296758 5681659.16907405, 374433.95785776153 5681660.223680368, 374434.78303106874 5681658.459142094, 374434.3871633522 5681657.583723214))",
        "id" : 645628
      },
      "beschreibung" : null
    },
    "anteil" : null,
    "flaechenbezeichnung" : "56",
    "bemerkung" : null,
    "datum_erfassung" : "2003-01-01",
    "datum_veranlagung" : "03/01",
    "sperre" : null,
    "bemerkung_sperre" : "",
    "feb_id" : "20113214"
  }, {
    "$self" : "/VERDIS_GRUNDIS.FLAECHE/589513",
    "id" : 589513,
    "flaecheninfo" : {
      "$self" : "/VERDIS_GRUNDIS.FLAECHENINFO/588238",
      "id" : 588238,
      "groesse_aus_grafik" : 8,
      "groesse_korrektur" : 8,
      "flaechenart" : {
        "$self" : "/VERDIS_GRUNDIS.FLAECHENART/1",
        "id" : 1,
        "art" : "Dachfläche",
        "art_abkuerzung" : "DF"
      },
      "anschlussgrad" : {
        "$self" : "/VERDIS_GRUNDIS.ANSCHLUSSGRAD/1",
        "id" : 1,
        "grad" : "Am Kanal angeschlossen",
        "grad_abkuerzung" : "angeschl."
      },
      "geometrie" : {
        "$self" : "/VERDIS_GRUNDIS.GEOM/645629",
        "geo_field" : "SRID=25832;POLYGON ((374424.05835617706 5681656.480910969, 374427.72103067115 5681657.866184615, 374430.2698611282 5681658.829559384, 374433.95785776153 5681660.223680368, 374433.6644296758 5681659.16907405, 374424.97149269655 5681656.078497436, 374423.78805617616 5681656.3790162485, 374424.05835617706 5681656.480910969))",
        "id" : 645629
      },
      "beschreibung" : null
    },
    "anteil" : null,
    "flaechenbezeichnung" : "49",
    "bemerkung" : null,
    "datum_erfassung" : "2003-01-01",
    "datum_veranlagung" : "03/01",
    "sperre" : null,
    "bemerkung_sperre" : "",
    "feb_id" : "20113214"
  }, {
    "$self" : "/VERDIS_GRUNDIS.FLAECHE/589515",
    "id" : 589515,
    "flaecheninfo" : {
      "$self" : "/VERDIS_GRUNDIS.FLAECHENINFO/588240",
      "id" : 588240,
      "groesse_aus_grafik" : 4,
      "groesse_korrektur" : 4,
      "flaechenart" : {
        "$self" : "/VERDIS_GRUNDIS.FLAECHENART/1",
        "id" : 1,
        "art" : "Dachfläche",
        "art_abkuerzung" : "DF"
      },
      "anschlussgrad" : {
        "$self" : "/VERDIS_GRUNDIS.ANSCHLUSSGRAD/1",
        "id" : 1,
        "grad" : "Am Kanal angeschlossen",
        "grad_abkuerzung" : "angeschl."
      },
      "geometrie" : {
        "$self" : "/VERDIS_GRUNDIS.GEOM/645631",
        "geo_field" : "SRID=25832;POLYGON ((374494.34836548194 5681626.894319611, 374496.3443310559 5681627.8983347025, 374496.76603634655 5681626.320267959, 374494.92483029887 5681625.331918221, 374494.34836548194 5681626.894319611))",
        "id" : 645631
      },
      "beschreibung" : null
    },
    "anteil" : null,
    "flaechenbezeichnung" : "52",
    "bemerkung" : null,
    "datum_erfassung" : "2003-01-01",
    "datum_veranlagung" : "03/01",
    "sperre" : null,
    "bemerkung_sperre" : "",
    "feb_id" : "20113214"
  }, {
    "$self" : "/VERDIS_GRUNDIS.FLAECHE/589516",
    "id" : 589516,
    "flaecheninfo" : {
      "$self" : "/VERDIS_GRUNDIS.FLAECHENINFO/588241",
      "id" : 588241,
      "groesse_aus_grafik" : 3,
      "groesse_korrektur" : 3,
      "flaechenart" : {
        "$self" : "/VERDIS_GRUNDIS.FLAECHENART/1",
        "id" : 1,
        "art" : "Dachfläche",
        "art_abkuerzung" : "DF"
      },
      "anschlussgrad" : {
        "$self" : "/VERDIS_GRUNDIS.ANSCHLUSSGRAD/1",
        "id" : 1,
        "grad" : "Am Kanal angeschlossen",
        "grad_abkuerzung" : "angeschl."
      },
      "geometrie" : {
        "$self" : "/VERDIS_GRUNDIS.GEOM/645632",
        "geo_field" : "SRID=25832;POLYGON ((374496.76603634655 5681626.320267959, 374497.2180638164 5681624.626904339, 374495.5257012695 5681623.705526628, 374494.92483029887 5681625.331918221, 374496.76603634655 5681626.320267959))",
        "id" : 645632
      },
      "beschreibung" : null
    },
    "anteil" : null,
    "flaechenbezeichnung" : "53",
    "bemerkung" : null,
    "datum_erfassung" : "2003-01-01",
    "datum_veranlagung" : "05/01",
    "sperre" : null,
    "bemerkung_sperre" : "",
    "feb_id" : "20113214"
  }, {
    "$self" : "/VERDIS_GRUNDIS.FLAECHE/589517",
    "id" : 589517,
    "flaecheninfo" : {
      "$self" : "/VERDIS_GRUNDIS.FLAECHENINFO/588242",
      "id" : 588242,
      "groesse_aus_grafik" : 823,
      "groesse_korrektur" : 823,
      "flaechenart" : {
        "$self" : "/VERDIS_GRUNDIS.FLAECHENART/3",
        "id" : 3,
        "art" : "versiegelte Fläche",
        "art_abkuerzung" : "VF"
      },
      "anschlussgrad" : {
        "$self" : "/VERDIS_GRUNDIS.ANSCHLUSSGRAD/1",
        "id" : 1,
        "grad" : "Am Kanal angeschlossen",
        "grad_abkuerzung" : "angeschl."
      },
      "geometrie" : {
        "$self" : "/VERDIS_GRUNDIS.GEOM/645633",
        "geo_field" : "SRID=25832;POLYGON ((374403.0572102703 5681638.978699004, 374398.5967239067 5681650.794595842, 374399.6179730706 5681650.46976207, 374399.9371851012 5681651.571396579, 374408.26529642195 5681654.050637886, 374409.2117052376 5681653.290522111, 374410.62707061693 5681655.014751884, 374408.86973406747 5681655.937907513, 374408.34465461597 5681655.257123329, 374396.1617538184 5681660.734833153, 374396.44585269317 5681661.638672481, 374395.63897907734 5681661.800804327, 374404.73165297136 5681665.702472815, 374404.4949787222 5681664.659526993, 374406.3455045745 5681664.182830968, 374406.9890300967 5681666.000477025, 374405.54701157287 5681666.162472115, 374412.4631702304 5681667.907906033, 374412.3214898929 5681667.378441275, 374414.2204827182 5681666.93871955, 374414.7410928346 5681668.658326746, 374413.61769603565 5681668.982485978, 374416.79505143315 5681671.419142242, 374422.5528591573 5681653.796827279, 374415.4666182287 5681651.049692025, 374423.85838636383 5681628.670346848, 374421.2040402256 5681627.647175271, 374423.9577776119 5681620.069394895, 374409.01058487594 5681614.420595824, 374408.78427346423 5681624.470548591, 374409.4401774742 5681624.262778518, 374410.04519225284 5681626.187114763, 374408.1246515885 5681626.810920111, 374407.911188107 5681626.048256824, 374404.48507015407 5681637.413542139, 374404.8567366861 5681637.305354317, 374405.3486643471 5681639.25332058, 374403.19034374505 5681639.786764382, 374403.0572102703 5681638.978699004))",
        "id" : 645633
      },
      "beschreibung" : null
    },
    "anteil" : null,
    "flaechenbezeichnung" : "C",
    "bemerkung" : null,
    "datum_erfassung" : "2003-01-01",
    "datum_veranlagung" : "03/01",
    "sperre" : null,
    "bemerkung_sperre" : "",
    "feb_id" : "20113214"
  }, {
    "$self" : "/VERDIS_GRUNDIS.FLAECHE/589518",
    "id" : 589518,
    "flaecheninfo" : {
      "$self" : "/VERDIS_GRUNDIS.FLAECHENINFO/588243",
      "id" : 588243,
      "groesse_aus_grafik" : 1030,
      "groesse_korrektur" : 1030,
      "flaechenart" : {
        "$self" : "/VERDIS_GRUNDIS.FLAECHENART/3",
        "id" : 3,
        "art" : "versiegelte Fläche",
        "art_abkuerzung" : "VF"
      },
      "anschlussgrad" : {
        "$self" : "/VERDIS_GRUNDIS.ANSCHLUSSGRAD/1",
        "id" : 1,
        "grad" : "Am Kanal angeschlossen",
        "grad_abkuerzung" : "angeschl."
      },
      "geometrie" : {
        "$self" : "/VERDIS_GRUNDIS.GEOM/645634",
        "geo_field" : "SRID=25832;POLYGON ((374394.8370328024 5681625.851994786, 374388.7573300041 5681641.823421686, 374387.1440882869 5681641.349068248, 374386.5449720733 5681642.945402844, 374388.03999075666 5681643.4637255585, 374385.9292556383 5681649.881556013, 374384.12694626674 5681649.386976639, 374382.43349835277 5681653.900569144, 374385.38355353475 5681654.8387625795, 374385.9310310222 5681655.137502066, 374386.0275808498 5681655.834867742, 374385.57435632497 5681656.591978213, 374384.1698353067 5681657.306713669, 374382.4172642492 5681657.58633671, 374380.1315195747 5681657.406730449, 374375.9419152178 5681656.1321108965, 374373.11673747376 5681655.139985065, 374372.7150700353 5681658.944562484, 374373.4783462398 5681659.356553939, 374374.07616576925 5681660.006593245, 374374.1530001201 5681660.759742627, 374373.72607525066 5681661.3536343025, 374372.9679620713 5681661.4325167155, 374376.58572147787 5681667.249051013, 374381.56089483574 5681665.173623611, 374388.7985139042 5681667.87650333, 374414.6316594295 5681678.042241155, 374416.79505143315 5681671.419142242, 374413.61769603565 5681668.982485978, 374412.8148027435 5681669.214340434, 374412.4631702304 5681667.907906033, 374405.54701157287 5681666.162472115, 374404.85371464863 5681666.2398213055, 374404.73165297136 5681665.702472815, 374395.63897907734 5681661.800804327, 374394.69219417125 5681661.991578187, 374394.2348539494 5681660.397235497, 374395.9064227976 5681659.9237486385, 374396.1617538184 5681660.734833153, 374408.34465461597 5681655.257123329, 374407.73927972093 5681654.4722714275, 374408.26529642195 5681654.050637886, 374399.9371851012 5681651.571396579, 374400.169981841 5681652.36923824, 374398.34868281335 5681652.8270364925, 374397.70098080486 5681651.080381143, 374398.5967239067 5681650.794595842, 374403.0572102703 5681638.978699004, 374402.87632562965 5681637.882592922, 374404.48507015407 5681637.413542139, 374407.911188107 5681626.048256824, 374407.5783214979 5681624.854180139, 374408.78427346423 5681624.470548591, 374409.01058487594 5681614.420595824, 374401.8813793212 5681611.72628898, 374401.9584398605 5681611.528009858, 374400.69273120165 5681611.038516091, 374400.44448184595 5681611.771965164, 374399.98000947386 5681613.967194803, 374398.8578460589 5681613.6610011235, 374398.7815678306 5681613.728043507, 374397.4846859947 5681619.352216017, 374394.8370328024 5681625.851994786))",
        "id" : 645634
      },
      "beschreibung" : null
    },
    "anteil" : null,
    "flaechenbezeichnung" : "B",
    "bemerkung" : null,
    "datum_erfassung" : "2003-01-01",
    "datum_veranlagung" : "03/01",
    "sperre" : null,
    "bemerkung_sperre" : "",
    "feb_id" : "20113214"
  }, {
    "$self" : "/VERDIS_GRUNDIS.FLAECHE/589519",
    "id" : 589519,
    "flaecheninfo" : {
      "$self" : "/VERDIS_GRUNDIS.FLAECHENINFO/588244",
      "id" : 588244,
      "groesse_aus_grafik" : 3491,
      "groesse_korrektur" : 3491,
      "flaechenart" : {
        "$self" : "/VERDIS_GRUNDIS.FLAECHENART/3",
        "id" : 3,
        "art" : "versiegelte Fläche",
        "art_abkuerzung" : "VF"
      },
      "anschlussgrad" : {
        "$self" : "/VERDIS_GRUNDIS.ANSCHLUSSGRAD/1",
        "id" : 1,
        "grad" : "Am Kanal angeschlossen",
        "grad_abkuerzung" : "angeschl."
      },
      "geometrie" : {
        "$self" : "/VERDIS_GRUNDIS.GEOM/645635",
        "geo_field" : "SRID=25832;POLYGON ((374448.9815935381 5681697.912798932, 374452.11872445047 5681699.641664326, 374450.98518161476 5681701.257767179, 374448.4372401871 5681703.910305271, 374453.13134646416 5681705.497409623, 374455.1547717452 5681704.917454478, 374455.36999546364 5681705.386866037, 374469.89264791086 5681709.731729614, 374470.8677190095 5681709.258567396, 374471.33915648237 5681710.169806779, 374483.44023328274 5681714.087402168, 374483.9588583857 5681713.900149315, 374484.4430597909 5681714.635683638, 374495.2922706194 5681719.722087694, 374496.79127897695 5681719.045435926, 374497.1482563317 5681719.700257105, 374510.5229010768 5681727.26473131, 374512.1706536412 5681726.698107425, 374512.48557343706 5681727.454723046, 374516.7998006083 5681719.248003268, 374516.24065751955 5681719.323973958, 374515.90951455757 5681717.636578101, 374517.795598004 5681717.3705047285, 374517.92640475556 5681717.949404797, 374526.0570843145 5681720.020180599, 374530.50608388707 5681711.810176284, 374524.4014435448 5681707.0240010135, 374523.4745393917 5681707.504131398, 374522.5829069689 5681705.613582197, 374523.1508409977 5681705.383316264, 374512.535105288 5681700.330353825, 374511.43591002375 5681700.9494750025, 374510.4418737404 5681699.102244023, 374510.95768082514 5681698.845966932, 374501.6825572476 5681695.629233589, 374500.68530871347 5681696.075157122, 374499.85722040385 5681694.22095209, 374500.6674363762 5681693.84976541, 374490.60699154437 5681691.316479424, 374489.7031509355 5681691.699508674, 374488.71786375716 5681690.184946235, 374489.2261443101 5681689.895056336, 374489.13659596816 5681684.013027204, 374486.0367448777 5681683.262810575, 374485.4989001006 5681685.526008512, 374483.723216027 5681692.771889875, 374480.23726017773 5681691.483784047, 374483.37864650786 5681689.011442356, 374482.1464066319 5681686.766792823, 374467.3541948758 5681681.51920709, 374466.18892779946 5681681.870995035, 374465.6433042474 5681679.929187264, 374466.6168084219 5681679.609280322, 374471.6723681651 5681668.39766473, 374471.08984165266 5681668.562557539, 374470.82118465006 5681666.813491973, 374472.04015428945 5681666.480570756, 374475.60606185347 5681657.496909076, 374474.8323290162 5681657.611656674, 374474.78016550094 5681657.092333575, 374461.67454634607 5681652.619412167, 374461.56709896773 5681652.926838551, 374459.80247493833 5681652.225539785, 374460.49882878363 5681650.4140918255, 374462.2529485002 5681650.9587127045, 374462.0112566836 5681651.6520036785, 374478.7247306481 5681646.5355229145, 374478.21575286984 5681645.194538936, 374479.42261727527 5681644.857084554, 374479.9800536297 5681641.926590815, 374479.503663104 5681641.752053877, 374479.74737137556 5681641.08067324, 374458.07199321315 5681632.880538086, 374455.0778676346 5681640.281003039, 374452.3207867369 5681639.36006965, 374443.9081726745 5681661.817351916, 374443.3993817866 5681661.62997341, 374443.2628669664 5681662.037737219, 374443.12178536877 5681662.990071107, 374442.4180089943 5681664.938808054, 374441.64068522677 5681665.234850859, 374435.0371177122 5681662.319854522, 374429.67316368595 5681660.33875312, 374427.1891831085 5681659.420812037, 374423.52084916085 5681658.065775536, 374419.1694616154 5681670.883769487, 374422.9590083882 5681672.481908575, 374422.8379222676 5681671.722366775, 374424.9360188432 5681671.357448496, 374425.39463089406 5681673.005788123, 374424.46027317643 5681673.180951111, 374433.6158554591 5681676.543891913, 374433.4539910704 5681675.671032802, 374435.2429421842 5681675.207655534, 374435.70492596924 5681676.98480594, 374435.0623449236 5681677.103138246, 374439.0428243689 5681683.52517316, 374441.872718852 5681682.358928161, 374444.01502615213 5681677.028271179, 374448.34704221785 5681665.694086004, 374451.7795132138 5681667.031672541, 374447.37297398224 5681678.2848375235, 374438.067838341 5681701.917135054, 374438.4164100401 5681702.708169715, 374438.4395444803 5681702.713373848, 374439.7068532966 5681702.902526029, 374441.72186100483 5681702.828148444, 374444.22874262556 5681702.085293375, 374447.6106812544 5681699.666829635, 374448.9815935381 5681697.912798932))",
        "id" : 645635
      },
      "beschreibung" : null
    },
    "anteil" : null,
    "flaechenbezeichnung" : "A",
    "bemerkung" : null,
    "datum_erfassung" : "2003-01-01",
    "datum_veranlagung" : "03/01",
    "sperre" : null,
    "bemerkung_sperre" : "",
    "feb_id" : "20113214"
  }, {
    "$self" : "/VERDIS_GRUNDIS.FLAECHE/589522",
    "id" : 589522,
    "flaecheninfo" : {
      "$self" : "/VERDIS_GRUNDIS.FLAECHENINFO/588247",
      "id" : 588247,
      "groesse_aus_grafik" : 504,
      "groesse_korrektur" : 504,
      "flaechenart" : {
        "$self" : "/VERDIS_GRUNDIS.FLAECHENART/3",
        "id" : 3,
        "art" : "versiegelte Fläche",
        "art_abkuerzung" : "VF"
      },
      "anschlussgrad" : {
        "$self" : "/VERDIS_GRUNDIS.ANSCHLUSSGRAD/1",
        "id" : 1,
        "grad" : "Am Kanal angeschlossen",
        "grad_abkuerzung" : "angeschl."
      },
      "geometrie" : {
        "$self" : "/VERDIS_GRUNDIS.GEOM/645638",
        "geo_field" : "SRID=25832;POLYGON ((374479.9800536297 5681641.926590815, 374479.42261727527 5681644.857084554, 374479.93005328253 5681644.715204404, 374480.3719833344 5681646.225913987, 374478.84154781327 5681646.8447774025, 374478.7247306481 5681646.5355229145, 374462.0112566836 5681651.6520036785, 374461.67454634607 5681652.619412167, 374474.78016550094 5681657.092333575, 374474.6831014231 5681656.112841378, 374476.5523304269 5681655.38899385, 374476.97844912484 5681657.292648251, 374475.60606185347 5681657.496909076, 374472.04015428945 5681666.480570756, 374472.66363045573 5681666.309904101, 374473.00564784184 5681668.020933459, 374471.6723681651 5681668.39766473, 374466.6168084219 5681679.609280322, 374467.65930466354 5681679.2675436605, 374468.4147039093 5681681.198725135, 374467.3541948758 5681681.51920709, 374482.1464066319 5681686.766792823, 374479.2232035063 5681681.790445246, 374476.2857696749 5681676.691017251, 374484.01940013096 5681656.659109223, 374484.8504333645 5681656.926910388, 374485.43916688114 5681657.132974679, 374491.84869967774 5681636.407110675, 374493.85232084617 5681637.145097363, 374496.3443310559 5681627.8983347025, 374494.34836548194 5681626.894319611, 374494.1528912373 5681627.423580109, 374493.41712675244 5681627.245478818, 374487.0351645723 5681644.508838554, 374479.9800536297 5681641.926590815))",
        "id" : 645638
      },
      "beschreibung" : null
    },
    "anteil" : null,
    "flaechenbezeichnung" : "E",
    "bemerkung" : null,
    "datum_erfassung" : "2003-01-01",
    "datum_veranlagung" : "03/01",
    "sperre" : null,
    "bemerkung_sperre" : "",
    "feb_id" : "20113214"
  }, {
    "$self" : "/VERDIS_GRUNDIS.FLAECHE/589523",
    "id" : 589523,
    "flaecheninfo" : {
      "$self" : "/VERDIS_GRUNDIS.FLAECHENINFO/588248",
      "id" : 588248,
      "groesse_aus_grafik" : 167,
      "groesse_korrektur" : 167,
      "flaechenart" : {
        "$self" : "/VERDIS_GRUNDIS.FLAECHENART/3",
        "id" : 3,
        "art" : "versiegelte Fläche",
        "art_abkuerzung" : "VF"
      },
      "anschlussgrad" : {
        "$self" : "/VERDIS_GRUNDIS.ANSCHLUSSGRAD/1",
        "id" : 1,
        "grad" : "Am Kanal angeschlossen",
        "grad_abkuerzung" : "angeschl."
      },
      "geometrie" : {
        "$self" : "/VERDIS_GRUNDIS.GEOM/645639",
        "geo_field" : "SRID=25832;POLYGON ((374422.9765875824 5681681.326124268, 374430.2876061052 5681684.213144288, 374434.45888034254 5681685.415413512, 374439.0428243689 5681683.52517316, 374435.0623449236 5681677.103138246, 374433.76353492215 5681677.343341615, 374433.6158554591 5681676.543891913, 374424.46027317643 5681673.180951111, 374423.1109863743 5681673.436249275, 374422.9590083882 5681672.481908575, 374419.1694616154 5681670.883769487, 374416.4917460494 5681678.77451399, 374422.9765875824 5681681.326124268))",
        "id" : 645639
      },
      "beschreibung" : null
    },
    "anteil" : null,
    "flaechenbezeichnung" : "F",
    "bemerkung" : null,
    "datum_erfassung" : "2003-01-01",
    "datum_veranlagung" : "03/01",
    "sperre" : null,
    "bemerkung_sperre" : "",
    "feb_id" : "20113214"
  }, {
    "$self" : "/VERDIS_GRUNDIS.FLAECHE/589524",
    "id" : 589524,
    "flaecheninfo" : {
      "$self" : "/VERDIS_GRUNDIS.FLAECHENINFO/588249",
      "id" : 588249,
      "groesse_aus_grafik" : 688,
      "groesse_korrektur" : 688,
      "flaechenart" : {
        "$self" : "/VERDIS_GRUNDIS.FLAECHENART/3",
        "id" : 3,
        "art" : "versiegelte Fläche",
        "art_abkuerzung" : "VF"
      },
      "anschlussgrad" : {
        "$self" : "/VERDIS_GRUNDIS.ANSCHLUSSGRAD/1",
        "id" : 1,
        "grad" : "Am Kanal angeschlossen",
        "grad_abkuerzung" : "angeschl."
      },
      "geometrie" : {
        "$self" : "/VERDIS_GRUNDIS.GEOM/645640",
        "geo_field" : "SRID=25832;POLYGON ((374524.4014435448 5681707.0240010135, 374530.50608388707 5681711.810176284, 374531.1656676121 5681710.593658503, 374542.41306383535 5681689.840957349, 374543.9527690336 5681686.99951891, 374544.6040927842 5681685.754120596, 374540.8722906634 5681685.559603207, 374540.39402740076 5681687.1740918765, 374533.1413188614 5681685.239355652, 374532.18645567074 5681688.560150353, 374535.8557401486 5681689.502918453, 374534.67939324304 5681691.771733071, 374528.5447687432 5681690.026373113, 374521.7534342967 5681688.264316981, 374514.70189939067 5681686.349663773, 374507.5697588995 5681684.401184711, 374506.98349358514 5681688.130726029, 374501.2060973272 5681685.601961654, 374494.25994413346 5681683.9035692215, 374489.13659596816 5681684.013027204, 374489.2261443101 5681689.895056336, 374490.4337412864 5681689.206270821, 374491.6927570291 5681690.85687174, 374490.60699154437 5681691.316479424, 374500.6674363762 5681693.84976541, 374501.4560560994 5681693.488220793, 374502.63276702166 5681695.204242292, 374501.6825572476 5681695.629233589, 374510.95768082514 5681698.845966932, 374512.13536671177 5681698.259605087, 374513.2167640552 5681699.946160575, 374512.535105288 5681700.330353825, 374523.1508409977 5681705.383316264, 374524.43627497554 5681704.861506929, 374525.37731188536 5681706.519878239, 374524.4014435448 5681707.0240010135))",
        "id" : 645640
      },
      "beschreibung" : null
    },
    "anteil" : null,
    "flaechenbezeichnung" : "D",
    "bemerkung" : null,
    "datum_erfassung" : "2003-01-01",
    "datum_veranlagung" : "03/01",
    "sperre" : null,
    "bemerkung_sperre" : "",
    "feb_id" : "20113214"
  }, {
    "$self" : "/VERDIS_GRUNDIS.FLAECHE/589530",
    "id" : 589530,
    "flaecheninfo" : {
      "$self" : "/VERDIS_GRUNDIS.FLAECHENINFO/588255",
      "id" : 588255,
      "groesse_aus_grafik" : 71,
      "groesse_korrektur" : 71,
      "flaechenart" : {
        "$self" : "/VERDIS_GRUNDIS.FLAECHENART/3",
        "id" : 3,
        "art" : "versiegelte Fläche",
        "art_abkuerzung" : "VF"
      },
      "anschlussgrad" : {
        "$self" : "/VERDIS_GRUNDIS.ANSCHLUSSGRAD/1",
        "id" : 1,
        "grad" : "Am Kanal angeschlossen",
        "grad_abkuerzung" : "angeschl."
      },
      "geometrie" : {
        "$self" : "/VERDIS_GRUNDIS.GEOM/645646",
        "geo_field" : "SRID=25832;POLYGON ((374437.0258882493 5681599.667178079, 374461.231838312 5681608.689711026, 374462.40097724646 5681606.253601175, 374458.538896326 5681604.785513239, 374442.1898133904 5681598.566618883, 374438.3062758036 5681597.089351067, 374437.0258882493 5681599.667178079))",
        "id" : 645646
      },
      "beschreibung" : null
    },
    "anteil" : null,
    "flaechenbezeichnung" : "H",
    "bemerkung" : null,
    "datum_erfassung" : "2003-01-01",
    "datum_veranlagung" : "03/01",
    "sperre" : null,
    "bemerkung_sperre" : "",
    "feb_id" : "20113214"
  }, {
    "$self" : "/VERDIS_GRUNDIS.FLAECHE/589531",
    "id" : 589531,
    "flaecheninfo" : {
      "$self" : "/VERDIS_GRUNDIS.FLAECHENINFO/588256",
      "id" : 588256,
      "groesse_aus_grafik" : 43,
      "groesse_korrektur" : 43,
      "flaechenart" : {
        "$self" : "/VERDIS_GRUNDIS.FLAECHENART/3",
        "id" : 3,
        "art" : "versiegelte Fläche",
        "art_abkuerzung" : "VF"
      },
      "anschlussgrad" : {
        "$self" : "/VERDIS_GRUNDIS.ANSCHLUSSGRAD/1",
        "id" : 1,
        "grad" : "Am Kanal angeschlossen",
        "grad_abkuerzung" : "angeschl."
      },
      "geometrie" : {
        "$self" : "/VERDIS_GRUNDIS.GEOM/645647",
        "geo_field" : "SRID=25832;POLYGON ((374443.2059100643 5681596.402897705, 374442.1898133904 5681598.566618883, 374458.538896326 5681604.785513239, 374459.4857962243 5681602.44738265, 374443.2059100643 5681596.402897705))",
        "id" : 645647
      },
      "beschreibung" : null
    },
    "anteil" : null,
    "flaechenbezeichnung" : "I",
    "bemerkung" : null,
    "datum_erfassung" : "2003-01-01",
    "datum_veranlagung" : "03/01",
    "sperre" : null,
    "bemerkung_sperre" : "",
    "feb_id" : "20113214"
  }, {
    "$self" : "/VERDIS_GRUNDIS.FLAECHE/589532",
    "id" : 589532,
    "flaecheninfo" : {
      "$self" : "/VERDIS_GRUNDIS.FLAECHENINFO/588257",
      "id" : 588257,
      "groesse_aus_grafik" : 115,
      "groesse_korrektur" : 115,
      "flaechenart" : {
        "$self" : "/VERDIS_GRUNDIS.FLAECHENART/3",
        "id" : 3,
        "art" : "versiegelte Fläche",
        "art_abkuerzung" : "VF"
      },
      "anschlussgrad" : {
        "$self" : "/VERDIS_GRUNDIS.ANSCHLUSSGRAD/1",
        "id" : 1,
        "grad" : "Am Kanal angeschlossen",
        "grad_abkuerzung" : "angeschl."
      },
      "geometrie" : {
        "$self" : "/VERDIS_GRUNDIS.GEOM/645648",
        "geo_field" : "SRID=25832;POLYGON ((374512.71555516496 5681729.749502276, 374516.67601763457 5681731.2083918955, 374518.590741355 5681733.796584242, 374521.46003966406 5681728.502529995, 374524.3916995898 5681723.09298164, 374526.0570843145 5681720.020180599, 374517.92640475556 5681717.949404797, 374518.17680022866 5681719.060699789, 374516.7998006083 5681719.248003268, 374512.48557343706 5681727.454723046, 374512.9205806479 5681728.500508714, 374510.9161308184 5681729.226703349, 374512.71555516496 5681729.749502276))",
        "id" : 645648
      },
      "beschreibung" : null
    },
    "anteil" : null,
    "flaechenbezeichnung" : "G",
    "bemerkung" : null,
    "datum_erfassung" : "2003-01-01",
    "datum_veranlagung" : "03/01",
    "sperre" : null,
    "bemerkung_sperre" : "",
    "feb_id" : "20113214"
  }, {
    "$self" : "/VERDIS_GRUNDIS.FLAECHE/589533",
    "id" : 589533,
    "flaecheninfo" : {
      "$self" : "/VERDIS_GRUNDIS.FLAECHENINFO/588258",
      "id" : 588258,
      "groesse_aus_grafik" : 13,
      "groesse_korrektur" : 13,
      "flaechenart" : {
        "$self" : "/VERDIS_GRUNDIS.FLAECHENART/3",
        "id" : 3,
        "art" : "versiegelte Fläche",
        "art_abkuerzung" : "VF"
      },
      "anschlussgrad" : {
        "$self" : "/VERDIS_GRUNDIS.ANSCHLUSSGRAD/1",
        "id" : 1,
        "grad" : "Am Kanal angeschlossen",
        "grad_abkuerzung" : "angeschl."
      },
      "geometrie" : {
        "$self" : "/VERDIS_GRUNDIS.GEOM/645649",
        "geo_field" : "SRID=25832;POLYGON ((374540.8722906634 5681685.559603207, 374544.6040927842 5681685.754120596, 374545.963960886 5681683.327332951, 374547.04473248124 5681683.190256901, 374541.66580276564 5681682.059399664, 374540.8722906634 5681685.559603207))",
        "id" : 645649
      },
      "beschreibung" : null
    },
    "anteil" : null,
    "flaechenbezeichnung" : "J",
    "bemerkung" : null,
    "datum_erfassung" : "2003-01-01",
    "datum_veranlagung" : "03/01",
    "sperre" : null,
    "bemerkung_sperre" : "",
    "feb_id" : "20113214"
  }, {
    "$self" : "/VERDIS_GRUNDIS.FLAECHE/589535",
    "id" : 589535,
    "flaecheninfo" : {
      "$self" : "/VERDIS_GRUNDIS.FLAECHENINFO/588260",
      "id" : 588260,
      "groesse_aus_grafik" : 4,
      "groesse_korrektur" : 4,
      "flaechenart" : {
        "$self" : "/VERDIS_GRUNDIS.FLAECHENART/3",
        "id" : 3,
        "art" : "versiegelte Fläche",
        "art_abkuerzung" : "VF"
      },
      "anschlussgrad" : {
        "$self" : "/VERDIS_GRUNDIS.ANSCHLUSSGRAD/1",
        "id" : 1,
        "grad" : "Am Kanal angeschlossen",
        "grad_abkuerzung" : "angeschl."
      },
      "geometrie" : {
        "$self" : "/VERDIS_GRUNDIS.GEOM/645651",
        "geo_field" : "SRID=25832;POLYGON ((374427.1891831085 5681659.420812037, 374429.67316368595 5681660.33875312, 374430.2698611282 5681658.829559384, 374427.72103067115 5681657.866184615, 374427.1891831085 5681659.420812037))",
        "id" : 645651
      },
      "beschreibung" : null
    },
    "anteil" : null,
    "flaechenbezeichnung" : "K",
    "bemerkung" : null,
    "datum_erfassung" : "2003-01-01",
    "datum_veranlagung" : "03/01",
    "sperre" : null,
    "bemerkung_sperre" : "",
    "feb_id" : "20113214"
  } ],
  "kanalanschluss" : {
    "$self" : "/VERDIS_GRUNDIS.KANALANSCHLUSS/44938",
    "id" : 44938,
    "rkvorhanden" : true,
    "mkrvorhanden" : false,
    "mksvorhanden" : false,
    "skvorhanden" : true,
    "rkangeschlossen" : {
      "$self" : "/VERDIS_GRUNDIS.ANSCHLUSSSTATUS/0",
      "id" : 0,
      "name" : "ja"
    },
    "mkrangeschlossen" : {
      "$self" : "/VERDIS_GRUNDIS.ANSCHLUSSSTATUS/-1",
      "id" : -1,
      "name" : ""
    },
    "mksangeschlossen" : {
      "$self" : "/VERDIS_GRUNDIS.ANSCHLUSSSTATUS/-1",
      "id" : -1,
      "name" : ""
    },
    "skangeschlossen" : {
      "$self" : "/VERDIS_GRUNDIS.ANSCHLUSSSTATUS/0",
      "id" : 0,
      "name" : "ja"
    },
    "sgvorhanden" : false,
    "kkavorhanden" : false,
    "sgentleerung" : false,
    "kkaentleerung" : false,
    "evg" : false,
    "befreiungenunderlaubnisse" : [ ]
  },
  "letzte_aenderung_ts" : 1389271305840,
  "letzte_aenderung_von" : "SteinbacherD102@VORN_schreiben_KA",
  "fronten" : [ {
    "$self" : "/VERDIS_GRUNDIS.FRONT/17928",
    "id" : 17928,
    "frontinfo" : {
      "$self" : "/VERDIS_GRUNDIS.FRONTINFO/17928",
      "id" : 17928,
      "strasse" : {
        "$self" : "/VERDIS_GRUNDIS.STRASSE/884",
        "id" : 884,
        "name" : "Johannes-Rau-Platz",
        "schluessel" : 1730
      },
      "sr_klasse_or" : {
        "$self" : "/VERDIS_GRUNDIS.STRASSENREINIGUNG/15",
        "id" : 15,
        "name" : "keine Straßenreinigung",
        "schluessel" : -100,
        "key" : null
      },
      "wd_prio_or" : {
        "$self" : "/VERDIS_GRUNDIS.WINTERDIENST/3",
        "id" : 3,
        "name" : "kein Winterdienst",
        "schluessel" : -200,
        "key" : null
      },
      "geometrie" : {
        "$self" : "/VERDIS_GRUNDIS.GEOM/810945",
        "geo_field" : "SRID=25832;LINESTRING (374410.9879999037 5681589.216999545, 374418.25194724905 5681592.023186125, 374421.15199990454 5681593.092999545)",
        "id" : 810945
      },
      "wd_veranlagung" : null,
      "sr_veranlagung" : null,
      "laenge_grafik" : 10,
      "laenge_korrektur" : 10,
      "sr_bem" : null,
      "wd_bem" : null,
      "lage_sr" : {
        "$self" : "/VERDIS_GRUNDIS.SATZUNG/1183",
        "id" : 1183,
        "sr_klasse" : {
          "$self" : "/VERDIS_GRUNDIS.STRASSENREINIGUNG/2",
          "id" : 2,
          "name" : "Straßenreinigung (Klasse Z1 10 x wöchentlich)",
          "schluessel" : 306,
          "key" : "Z1"
        },
        "sr_bem" : null,
        "wd_prio" : null,
        "wd_bem" : null,
        "strasse" : {
          "$self" : "/VERDIS_GRUNDIS.STRASSE/884",
          "id" : 884,
          "name" : "Johannes-Rau-Platz",
          "schluessel" : 1730
        }
      },
      "lage_wd" : null,
      "garage_stellplatz" : null,
      "baulasten" : null,
      "grunddienstbarkeit" : null,
      "anteil" : null,
      "quadratwurzel" : null,
      "winkel" : null
    },
    "nummer" : 5,
    "bearbeitet_durch" : null,
    "erfassungsdatum" : "2012-06-25"
  }, {
    "$self" : "/VERDIS_GRUNDIS.FRONT/17961",
    "id" : 17961,
    "frontinfo" : {
      "$self" : "/VERDIS_GRUNDIS.FRONTINFO/17961",
      "id" : 17961,
      "strasse" : {
        "$self" : "/VERDIS_GRUNDIS.STRASSE/884",
        "id" : 884,
        "name" : "Johannes-Rau-Platz",
        "schluessel" : 1730
      },
      "sr_klasse_or" : {
        "$self" : "/VERDIS_GRUNDIS.STRASSENREINIGUNG/15",
        "id" : 15,
        "name" : "keine Straßenreinigung",
        "schluessel" : -100,
        "key" : null
      },
      "wd_prio_or" : {
        "$self" : "/VERDIS_GRUNDIS.WINTERDIENST/3",
        "id" : 3,
        "name" : "kein Winterdienst",
        "schluessel" : -200,
        "key" : null
      },
      "geometrie" : {
        "$self" : "/VERDIS_GRUNDIS.GEOM/810946",
        "geo_field" : "SRID=25832;LINESTRING (374418.5779999073 5681600.110999544, 374428.41799990344 5681603.836999545)",
        "id" : 810946
      },
      "wd_veranlagung" : null,
      "sr_veranlagung" : null,
      "laenge_grafik" : 10,
      "laenge_korrektur" : 10,
      "sr_bem" : null,
      "wd_bem" : null,
      "lage_sr" : {
        "$self" : "/VERDIS_GRUNDIS.SATZUNG/1183",
        "id" : 1183,
        "sr_klasse" : {
          "$self" : "/VERDIS_GRUNDIS.STRASSENREINIGUNG/2",
          "id" : 2,
          "name" : "Straßenreinigung (Klasse Z1 10 x wöchentlich)",
          "schluessel" : 306,
          "key" : "Z1"
        },
        "sr_bem" : null,
        "wd_prio" : null,
        "wd_bem" : null,
        "strasse" : {
          "$self" : "/VERDIS_GRUNDIS.STRASSE/884",
          "id" : 884,
          "name" : "Johannes-Rau-Platz",
          "schluessel" : 1730
        }
      },
      "lage_wd" : null,
      "garage_stellplatz" : null,
      "baulasten" : null,
      "grunddienstbarkeit" : null,
      "anteil" : null,
      "quadratwurzel" : null,
      "winkel" : null
    },
    "nummer" : 6,
    "bearbeitet_durch" : null,
    "erfassungsdatum" : "2012-06-25"
  }, {
    "$self" : "/VERDIS_GRUNDIS.FRONT/17962",
    "id" : 17962,
    "frontinfo" : {
      "$self" : "/VERDIS_GRUNDIS.FRONTINFO/17962",
      "id" : 17962,
      "strasse" : {
        "$self" : "/VERDIS_GRUNDIS.STRASSE/884",
        "id" : 884,
        "name" : "Johannes-Rau-Platz",
        "schluessel" : 1730
      },
      "sr_klasse_or" : {
        "$self" : "/VERDIS_GRUNDIS.STRASSENREINIGUNG/15",
        "id" : 15,
        "name" : "keine Straßenreinigung",
        "schluessel" : -100,
        "key" : null
      },
      "wd_prio_or" : {
        "$self" : "/VERDIS_GRUNDIS.WINTERDIENST/3",
        "id" : 3,
        "name" : "kein Winterdienst",
        "schluessel" : -200,
        "key" : null
      },
      "geometrie" : {
        "$self" : "/VERDIS_GRUNDIS.GEOM/810948",
        "geo_field" : "SRID=25832;LINESTRING (374436.7819999035 5681600.4659995455, 374437.2499999057 5681600.656999544)",
        "id" : 810948
      },
      "wd_veranlagung" : null,
      "sr_veranlagung" : null,
      "laenge_grafik" : 0,
      "laenge_korrektur" : 0,
      "sr_bem" : null,
      "wd_bem" : null,
      "lage_sr" : {
        "$self" : "/VERDIS_GRUNDIS.SATZUNG/1183",
        "id" : 1183,
        "sr_klasse" : {
          "$self" : "/VERDIS_GRUNDIS.STRASSENREINIGUNG/2",
          "id" : 2,
          "name" : "Straßenreinigung (Klasse Z1 10 x wöchentlich)",
          "schluessel" : 306,
          "key" : "Z1"
        },
        "sr_bem" : null,
        "wd_prio" : null,
        "wd_bem" : null,
        "strasse" : {
          "$self" : "/VERDIS_GRUNDIS.STRASSE/884",
          "id" : 884,
          "name" : "Johannes-Rau-Platz",
          "schluessel" : 1730
        }
      },
      "lage_wd" : null,
      "garage_stellplatz" : null,
      "baulasten" : null,
      "grunddienstbarkeit" : null,
      "anteil" : null,
      "quadratwurzel" : null,
      "winkel" : null
    },
    "nummer" : 8,
    "bearbeitet_durch" : null,
    "erfassungsdatum" : "2012-06-25"
  }, {
    "$self" : "/VERDIS_GRUNDIS.FRONT/17963",
    "id" : 17963,
    "frontinfo" : {
      "$self" : "/VERDIS_GRUNDIS.FRONTINFO/17963",
      "id" : 17963,
      "strasse" : {
        "$self" : "/VERDIS_GRUNDIS.STRASSE/884",
        "id" : 884,
        "name" : "Johannes-Rau-Platz",
        "schluessel" : 1730
      },
      "sr_klasse_or" : {
        "$self" : "/VERDIS_GRUNDIS.STRASSENREINIGUNG/15",
        "id" : 15,
        "name" : "keine Straßenreinigung",
        "schluessel" : -100,
        "key" : null
      },
      "wd_prio_or" : {
        "$self" : "/VERDIS_GRUNDIS.WINTERDIENST/3",
        "id" : 3,
        "name" : "kein Winterdienst",
        "schluessel" : -200,
        "key" : null
      },
      "geometrie" : {
        "$self" : "/VERDIS_GRUNDIS.GEOM/810952",
        "geo_field" : "SRID=25832;LINESTRING (374461.3819999051 5681609.423999547, 374461.78899990674 5681609.606999545)",
        "id" : 810952
      },
      "wd_veranlagung" : null,
      "sr_veranlagung" : null,
      "laenge_grafik" : 0,
      "laenge_korrektur" : 0,
      "sr_bem" : null,
      "wd_bem" : null,
      "lage_sr" : {
        "$self" : "/VERDIS_GRUNDIS.SATZUNG/1183",
        "id" : 1183,
        "sr_klasse" : {
          "$self" : "/VERDIS_GRUNDIS.STRASSENREINIGUNG/2",
          "id" : 2,
          "name" : "Straßenreinigung (Klasse Z1 10 x wöchentlich)",
          "schluessel" : 306,
          "key" : "Z1"
        },
        "sr_bem" : null,
        "wd_prio" : null,
        "wd_bem" : null,
        "strasse" : {
          "$self" : "/VERDIS_GRUNDIS.STRASSE/884",
          "id" : 884,
          "name" : "Johannes-Rau-Platz",
          "schluessel" : 1730
        }
      },
      "lage_wd" : null,
      "garage_stellplatz" : null,
      "baulasten" : null,
      "grunddienstbarkeit" : null,
      "anteil" : null,
      "quadratwurzel" : null,
      "winkel" : null
    },
    "nummer" : 12,
    "bearbeitet_durch" : null,
    "erfassungsdatum" : "2012-06-25"
  }, {
    "$self" : "/VERDIS_GRUNDIS.FRONT/17964",
    "id" : 17964,
    "frontinfo" : {
      "$self" : "/VERDIS_GRUNDIS.FRONTINFO/17964",
      "id" : 17964,
      "strasse" : {
        "$self" : "/VERDIS_GRUNDIS.STRASSE/884",
        "id" : 884,
        "name" : "Johannes-Rau-Platz",
        "schluessel" : 1730
      },
      "sr_klasse_or" : {
        "$self" : "/VERDIS_GRUNDIS.STRASSENREINIGUNG/15",
        "id" : 15,
        "name" : "keine Straßenreinigung",
        "schluessel" : -100,
        "key" : null
      },
      "wd_prio_or" : {
        "$self" : "/VERDIS_GRUNDIS.WINTERDIENST/3",
        "id" : 3,
        "name" : "kein Winterdienst",
        "schluessel" : -200,
        "key" : null
      },
      "geometrie" : {
        "$self" : "/VERDIS_GRUNDIS.GEOM/810953",
        "geo_field" : "SRID=25832;LINESTRING (374460.9869999056 5681611.719999544, 374464.4757369858 5681613.062750828, 374467.0199999055 5681613.977999545)",
        "id" : 810953
      },
      "wd_veranlagung" : null,
      "sr_veranlagung" : null,
      "laenge_grafik" : 6,
      "laenge_korrektur" : 6,
      "sr_bem" : null,
      "wd_bem" : null,
      "lage_sr" : {
        "$self" : "/VERDIS_GRUNDIS.SATZUNG/1183",
        "id" : 1183,
        "sr_klasse" : {
          "$self" : "/VERDIS_GRUNDIS.STRASSENREINIGUNG/2",
          "id" : 2,
          "name" : "Straßenreinigung (Klasse Z1 10 x wöchentlich)",
          "schluessel" : 306,
          "key" : "Z1"
        },
        "sr_bem" : null,
        "wd_prio" : null,
        "wd_bem" : null,
        "strasse" : {
          "$self" : "/VERDIS_GRUNDIS.STRASSE/884",
          "id" : 884,
          "name" : "Johannes-Rau-Platz",
          "schluessel" : 1730
        }
      },
      "lage_wd" : null,
      "garage_stellplatz" : null,
      "baulasten" : null,
      "grunddienstbarkeit" : null,
      "anteil" : null,
      "quadratwurzel" : null,
      "winkel" : null
    },
    "nummer" : 13,
    "bearbeitet_durch" : null,
    "erfassungsdatum" : "2012-06-25"
  }, {
    "$self" : "/VERDIS_GRUNDIS.FRONT/17965",
    "id" : 17965,
    "frontinfo" : {
      "$self" : "/VERDIS_GRUNDIS.FRONTINFO/17965",
      "id" : 17965,
      "strasse" : {
        "$self" : "/VERDIS_GRUNDIS.STRASSE/884",
        "id" : 884,
        "name" : "Johannes-Rau-Platz",
        "schluessel" : 1730
      },
      "sr_klasse_or" : {
        "$self" : "/VERDIS_GRUNDIS.STRASSENREINIGUNG/15",
        "id" : 15,
        "name" : "keine Straßenreinigung",
        "schluessel" : -100,
        "key" : null
      },
      "wd_prio_or" : {
        "$self" : "/VERDIS_GRUNDIS.WINTERDIENST/3",
        "id" : 3,
        "name" : "kein Winterdienst",
        "schluessel" : -200,
        "key" : null
      },
      "geometrie" : {
        "$self" : "/VERDIS_GRUNDIS.GEOM/810954",
        "geo_field" : "SRID=25832;LINESTRING (374465.5449999077 5681617.853999545, 374469.7825167281 5681619.477552911, 374475.70899990486 5681621.662999545)",
        "id" : 810954
      },
      "wd_veranlagung" : null,
      "sr_veranlagung" : null,
      "laenge_grafik" : 10,
      "laenge_korrektur" : 10,
      "sr_bem" : null,
      "wd_bem" : null,
      "lage_sr" : {
        "$self" : "/VERDIS_GRUNDIS.SATZUNG/1183",
        "id" : 1183,
        "sr_klasse" : {
          "$self" : "/VERDIS_GRUNDIS.STRASSENREINIGUNG/2",
          "id" : 2,
          "name" : "Straßenreinigung (Klasse Z1 10 x wöchentlich)",
          "schluessel" : 306,
          "key" : "Z1"
        },
        "sr_bem" : null,
        "wd_prio" : null,
        "wd_bem" : null,
        "strasse" : {
          "$self" : "/VERDIS_GRUNDIS.STRASSE/884",
          "id" : 884,
          "name" : "Johannes-Rau-Platz",
          "schluessel" : 1730
        }
      },
      "lage_wd" : null,
      "garage_stellplatz" : null,
      "baulasten" : null,
      "grunddienstbarkeit" : null,
      "anteil" : null,
      "quadratwurzel" : null,
      "winkel" : null
    },
    "nummer" : 14,
    "bearbeitet_durch" : null,
    "erfassungsdatum" : "2012-06-25"
  }, {
    "$self" : "/VERDIS_GRUNDIS.FRONT/17966",
    "id" : 17966,
    "frontinfo" : {
      "$self" : "/VERDIS_GRUNDIS.FRONTINFO/17966",
      "id" : 17966,
      "strasse" : {
        "$self" : "/VERDIS_GRUNDIS.STRASSE/884",
        "id" : 884,
        "name" : "Johannes-Rau-Platz",
        "schluessel" : 1730
      },
      "sr_klasse_or" : {
        "$self" : "/VERDIS_GRUNDIS.STRASSENREINIGUNG/15",
        "id" : 15,
        "name" : "keine Straßenreinigung",
        "schluessel" : -100,
        "key" : null
      },
      "wd_prio_or" : {
        "$self" : "/VERDIS_GRUNDIS.WINTERDIENST/3",
        "id" : 3,
        "name" : "kein Winterdienst",
        "schluessel" : -200,
        "key" : null
      },
      "geometrie" : {
        "$self" : "/VERDIS_GRUNDIS.GEOM/810955",
        "geo_field" : "SRID=25832;LINESTRING (374479.4219999043 5681611.635999544, 374482.4194184644 5681612.759923112, 374489.6279999047 5681615.339999545)",
        "id" : 810955
      },
      "wd_veranlagung" : null,
      "sr_veranlagung" : null,
      "laenge_grafik" : 10,
      "laenge_korrektur" : 10,
      "sr_bem" : null,
      "wd_bem" : null,
      "lage_sr" : {
        "$self" : "/VERDIS_GRUNDIS.SATZUNG/1183",
        "id" : 1183,
        "sr_klasse" : {
          "$self" : "/VERDIS_GRUNDIS.STRASSENREINIGUNG/2",
          "id" : 2,
          "name" : "Straßenreinigung (Klasse Z1 10 x wöchentlich)",
          "schluessel" : 306,
          "key" : "Z1"
        },
        "sr_bem" : null,
        "wd_prio" : null,
        "wd_bem" : null,
        "strasse" : {
          "$self" : "/VERDIS_GRUNDIS.STRASSE/884",
          "id" : 884,
          "name" : "Johannes-Rau-Platz",
          "schluessel" : 1730
        }
      },
      "lage_wd" : null,
      "garage_stellplatz" : null,
      "baulasten" : null,
      "grunddienstbarkeit" : null,
      "anteil" : null,
      "quadratwurzel" : null,
      "winkel" : null
    },
    "nummer" : 15,
    "bearbeitet_durch" : null,
    "erfassungsdatum" : "2012-06-25"
  }, {
    "$self" : "/VERDIS_GRUNDIS.FRONT/17967",
    "id" : 17967,
    "frontinfo" : {
      "$self" : "/VERDIS_GRUNDIS.FRONTINFO/17967",
      "id" : 17967,
      "strasse" : {
        "$self" : "/VERDIS_GRUNDIS.STRASSE/884",
        "id" : 884,
        "name" : "Johannes-Rau-Platz",
        "schluessel" : 1730
      },
      "sr_klasse_or" : {
        "$self" : "/VERDIS_GRUNDIS.STRASSENREINIGUNG/15",
        "id" : 15,
        "name" : "keine Straßenreinigung",
        "schluessel" : -100,
        "key" : null
      },
      "wd_prio_or" : {
        "$self" : "/VERDIS_GRUNDIS.WINTERDIENST/3",
        "id" : 3,
        "name" : "kein Winterdienst",
        "schluessel" : -200,
        "key" : null
      },
      "geometrie" : {
        "$self" : "/VERDIS_GRUNDIS.GEOM/810958",
        "geo_field" : "SRID=25832;LINESTRING (374497.6679999038 5681619.161999545, 374498.71999990486 5681619.492999545)",
        "id" : 810958
      },
      "wd_veranlagung" : null,
      "sr_veranlagung" : null,
      "laenge_grafik" : 1,
      "laenge_korrektur" : 1,
      "sr_bem" : null,
      "wd_bem" : null,
      "lage_sr" : {
        "$self" : "/VERDIS_GRUNDIS.SATZUNG/1183",
        "id" : 1183,
        "sr_klasse" : {
          "$self" : "/VERDIS_GRUNDIS.STRASSENREINIGUNG/2",
          "id" : 2,
          "name" : "Straßenreinigung (Klasse Z1 10 x wöchentlich)",
          "schluessel" : 306,
          "key" : "Z1"
        },
        "sr_bem" : null,
        "wd_prio" : null,
        "wd_bem" : null,
        "strasse" : {
          "$self" : "/VERDIS_GRUNDIS.STRASSE/884",
          "id" : 884,
          "name" : "Johannes-Rau-Platz",
          "schluessel" : 1730
        }
      },
      "lage_wd" : null,
      "garage_stellplatz" : null,
      "baulasten" : null,
      "grunddienstbarkeit" : null,
      "anteil" : null,
      "quadratwurzel" : null,
      "winkel" : null
    },
    "nummer" : 18,
    "bearbeitet_durch" : null,
    "erfassungsdatum" : "2012-06-25"
  }, {
    "$self" : "/VERDIS_GRUNDIS.FRONT/17989",
    "id" : 17989,
    "frontinfo" : {
      "$self" : "/VERDIS_GRUNDIS.FRONTINFO/17989",
      "id" : 17989,
      "strasse" : {
        "$self" : "/VERDIS_GRUNDIS.STRASSE/884",
        "id" : 884,
        "name" : "Johannes-Rau-Platz",
        "schluessel" : 1730
      },
      "sr_klasse_or" : {
        "$self" : "/VERDIS_GRUNDIS.STRASSENREINIGUNG/15",
        "id" : 15,
        "name" : "keine Straßenreinigung",
        "schluessel" : -100,
        "key" : null
      },
      "wd_prio_or" : {
        "$self" : "/VERDIS_GRUNDIS.WINTERDIENST/3",
        "id" : 3,
        "name" : "kein Winterdienst",
        "schluessel" : -200,
        "key" : null
      },
      "geometrie" : {
        "$self" : "/VERDIS_GRUNDIS.GEOM/810947",
        "geo_field" : "SRID=25832;LINESTRING (374429.85999990517 5681599.946999545, 374432.53954654443 5681601.001940594, 374435.8929999049 5681602.240999545)",
        "id" : 810947
      },
      "wd_veranlagung" : null,
      "sr_veranlagung" : null,
      "laenge_grafik" : 6,
      "laenge_korrektur" : 6,
      "sr_bem" : null,
      "wd_bem" : null,
      "lage_sr" : {
        "$self" : "/VERDIS_GRUNDIS.SATZUNG/1183",
        "id" : 1183,
        "sr_klasse" : {
          "$self" : "/VERDIS_GRUNDIS.STRASSENREINIGUNG/2",
          "id" : 2,
          "name" : "Straßenreinigung (Klasse Z1 10 x wöchentlich)",
          "schluessel" : 306,
          "key" : "Z1"
        },
        "sr_bem" : null,
        "wd_prio" : null,
        "wd_bem" : null,
        "strasse" : {
          "$self" : "/VERDIS_GRUNDIS.STRASSE/884",
          "id" : 884,
          "name" : "Johannes-Rau-Platz",
          "schluessel" : 1730
        }
      },
      "lage_wd" : null,
      "garage_stellplatz" : null,
      "baulasten" : null,
      "grunddienstbarkeit" : null,
      "anteil" : null,
      "quadratwurzel" : null,
      "winkel" : null
    },
    "nummer" : 7,
    "bearbeitet_durch" : null,
    "erfassungsdatum" : "2012-06-25"
  }, {
    "$self" : "/VERDIS_GRUNDIS.FRONT/37821",
    "id" : 37821,
    "frontinfo" : {
      "$self" : "/VERDIS_GRUNDIS.FRONTINFO/37821",
      "id" : 37821,
      "strasse" : {
        "$self" : "/VERDIS_GRUNDIS.STRASSE/609",
        "id" : 609,
        "name" : "Große Flurstr.",
        "schluessel" : 1175
      },
      "sr_klasse_or" : {
        "$self" : "/VERDIS_GRUNDIS.STRASSENREINIGUNG/15",
        "id" : 15,
        "name" : "keine Straßenreinigung",
        "schluessel" : -100,
        "key" : null
      },
      "wd_prio_or" : {
        "$self" : "/VERDIS_GRUNDIS.WINTERDIENST/3",
        "id" : 3,
        "name" : "kein Winterdienst",
        "schluessel" : -200,
        "key" : null
      },
      "geometrie" : {
        "$self" : "/VERDIS_GRUNDIS.GEOM/810940",
        "geo_field" : "SRID=25832;LINESTRING (374369.6249999055 5681651.590999545, 374369.11899990455 5681654.863999543, 374369.530999905 5681657.838999543, 374370.63699990755 5681660.664999544, 374372.27099990344 5681663.169999546, 374375.98607759416 5681667.582496554, 374385.33699990687 5681678.525999545, 374387.18799990666 5681680.480999546, 374388.45899990445 5681681.709999546, 374391.235999907 5681684.037999546, 374395.10499990603 5681686.650999544, 374399.8659999061 5681689.297999547, 374403.57999990386 5681690.816999544, 374437.9710307334 5681702.141264584, 374449.69999990513 5681705.959999546, 374493.8659999063 5681720.402999547)",
        "id" : 810940
      },
      "wd_veranlagung" : null,
      "sr_veranlagung" : null,
      "laenge_grafik" : 149,
      "laenge_korrektur" : 149,
      "sr_bem" : null,
      "wd_bem" : null,
      "lage_sr" : {
        "$self" : "/VERDIS_GRUNDIS.SATZUNG/828",
        "id" : 828,
        "sr_klasse" : {
          "$self" : "/VERDIS_GRUNDIS.STRASSENREINIGUNG/3",
          "id" : 3,
          "name" : "Straßenreinigung (Klasse A1V 5 x wöchentlich)",
          "schluessel" : 310,
          "key" : "A1V"
        },
        "sr_bem" : null,
        "wd_prio" : null,
        "wd_bem" : null,
        "strasse" : {
          "$self" : "/VERDIS_GRUNDIS.STRASSE/609",
          "id" : 609,
          "name" : "Große Flurstr.",
          "schluessel" : 1175
        }
      },
      "lage_wd" : {
        "$self" : "/VERDIS_GRUNDIS.SATZUNG/2979",
        "id" : 2979,
        "sr_klasse" : null,
        "sr_bem" : null,
        "wd_prio" : {
          "$self" : "/VERDIS_GRUNDIS.WINTERDIENST/1",
          "id" : 1,
          "name" : "Winterdienst (Leistungspriorität 1)",
          "schluessel" : 361,
          "key" : "P1"
        },
        "wd_bem" : null,
        "strasse" : {
          "$self" : "/VERDIS_GRUNDIS.STRASSE/609",
          "id" : 609,
          "name" : "Große Flurstr.",
          "schluessel" : 1175
        }
      },
      "garage_stellplatz" : null,
      "baulasten" : null,
      "grunddienstbarkeit" : null,
      "anteil" : null,
      "quadratwurzel" : null,
      "winkel" : null
    },
    "nummer" : 1,
    "bearbeitet_durch" : null,
    "erfassungsdatum" : "2012-06-25"
  }, {
    "$self" : "/VERDIS_GRUNDIS.FRONT/37833",
    "id" : 37833,
    "frontinfo" : {
      "$self" : "/VERDIS_GRUNDIS.FRONTINFO/37833",
      "id" : 37833,
      "strasse" : {
        "$self" : "/VERDIS_GRUNDIS.STRASSE/609",
        "id" : 609,
        "name" : "Große Flurstr.",
        "schluessel" : 1175
      },
      "sr_klasse_or" : {
        "$self" : "/VERDIS_GRUNDIS.STRASSENREINIGUNG/15",
        "id" : 15,
        "name" : "keine Straßenreinigung",
        "schluessel" : -100,
        "key" : null
      },
      "wd_prio_or" : {
        "$self" : "/VERDIS_GRUNDIS.WINTERDIENST/3",
        "id" : 3,
        "name" : "kein Winterdienst",
        "schluessel" : -200,
        "key" : null
      },
      "geometrie" : {
        "$self" : "/VERDIS_GRUNDIS.GEOM/810941",
        "geo_field" : "SRID=25832;LINESTRING (374493.9579999066 5681720.229999547, 374518.70399990596 5681733.872999545)",
        "id" : 810941
      },
      "wd_veranlagung" : null,
      "sr_veranlagung" : null,
      "laenge_grafik" : 28,
      "laenge_korrektur" : 28,
      "sr_bem" : null,
      "wd_bem" : null,
      "lage_sr" : {
        "$self" : "/VERDIS_GRUNDIS.SATZUNG/828",
        "id" : 828,
        "sr_klasse" : {
          "$self" : "/VERDIS_GRUNDIS.STRASSENREINIGUNG/3",
          "id" : 3,
          "name" : "Straßenreinigung (Klasse A1V 5 x wöchentlich)",
          "schluessel" : 310,
          "key" : "A1V"
        },
        "sr_bem" : null,
        "wd_prio" : null,
        "wd_bem" : null,
        "strasse" : {
          "$self" : "/VERDIS_GRUNDIS.STRASSE/609",
          "id" : 609,
          "name" : "Große Flurstr.",
          "schluessel" : 1175
        }
      },
      "lage_wd" : {
        "$self" : "/VERDIS_GRUNDIS.SATZUNG/2979",
        "id" : 2979,
        "sr_klasse" : null,
        "sr_bem" : null,
        "wd_prio" : {
          "$self" : "/VERDIS_GRUNDIS.WINTERDIENST/1",
          "id" : 1,
          "name" : "Winterdienst (Leistungspriorität 1)",
          "schluessel" : 361,
          "key" : "P1"
        },
        "wd_bem" : null,
        "strasse" : {
          "$self" : "/VERDIS_GRUNDIS.STRASSE/609",
          "id" : 609,
          "name" : "Große Flurstr.",
          "schluessel" : 1175
        }
      },
      "garage_stellplatz" : null,
      "baulasten" : null,
      "grunddienstbarkeit" : null,
      "anteil" : null,
      "quadratwurzel" : null,
      "winkel" : null
    },
    "nummer" : 2,
    "bearbeitet_durch" : null,
    "erfassungsdatum" : "2012-06-25"
  }, {
    "$self" : "/VERDIS_GRUNDIS.FRONT/37834",
    "id" : 37834,
    "frontinfo" : {
      "$self" : "/VERDIS_GRUNDIS.FRONTINFO/37834",
      "id" : 37834,
      "strasse" : {
        "$self" : "/VERDIS_GRUNDIS.STRASSE/730",
        "id" : 730,
        "name" : "Heubruch",
        "schluessel" : 1393
      },
      "sr_klasse_or" : {
        "$self" : "/VERDIS_GRUNDIS.STRASSENREINIGUNG/15",
        "id" : 15,
        "name" : "keine Straßenreinigung",
        "schluessel" : -100,
        "key" : null
      },
      "wd_prio_or" : {
        "$self" : "/VERDIS_GRUNDIS.WINTERDIENST/3",
        "id" : 3,
        "name" : "kein Winterdienst",
        "schluessel" : -200,
        "key" : null
      },
      "geometrie" : {
        "$self" : "/VERDIS_GRUNDIS.GEOM/810943",
        "geo_field" : "SRID=25832;LINESTRING (374369.6249999055 5681651.590999545, 374370.0226048925 5681650.535682657, 374381.9927706594 5681619.296257409, 374388.60205519816 5681602.052242848, 374389.2420833024 5681600.380346163, 374390.3201330738 5681597.565512858, 374390.96316123626 5681595.887616945, 374395.57999990386 5681583.854999545)",
        "id" : 810943
      },
      "wd_veranlagung" : null,
      "sr_veranlagung" : null,
      "laenge_grafik" : 72,
      "laenge_korrektur" : 73,
      "sr_bem" : null,
      "wd_bem" : null,
      "lage_sr" : {
        "$self" : "/VERDIS_GRUNDIS.SATZUNG/984",
        "id" : 984,
        "sr_klasse" : {
          "$self" : "/VERDIS_GRUNDIS.STRASSENREINIGUNG/4",
          "id" : 4,
          "name" : "Straßenreinigung (Klasse Z1V 10 x wöchentlich)",
          "schluessel" : 311,
          "key" : "Z1V"
        },
        "sr_bem" : "v. Werth b. Paul-Humburg-Str.",
        "wd_prio" : null,
        "wd_bem" : null,
        "strasse" : {
          "$self" : "/VERDIS_GRUNDIS.STRASSE/730",
          "id" : 730,
          "name" : "Heubruch",
          "schluessel" : 1393
        }
      },
      "lage_wd" : {
        "$self" : "/VERDIS_GRUNDIS.SATZUNG/3098",
        "id" : 3098,
        "sr_klasse" : null,
        "sr_bem" : null,
        "wd_prio" : {
          "$self" : "/VERDIS_GRUNDIS.WINTERDIENST/2",
          "id" : 2,
          "name" : "Winterdienst (Leistungspriorität 2)",
          "schluessel" : 362,
          "key" : "P2"
        },
        "wd_bem" : null,
        "strasse" : {
          "$self" : "/VERDIS_GRUNDIS.STRASSE/730",
          "id" : 730,
          "name" : "Heubruch",
          "schluessel" : 1393
        }
      },
      "garage_stellplatz" : null,
      "baulasten" : null,
      "grunddienstbarkeit" : null,
      "anteil" : null,
      "quadratwurzel" : null,
      "winkel" : null
    },
    "nummer" : 3,
    "bearbeitet_durch" : null,
    "erfassungsdatum" : "2012-06-25"
  }, {
    "$self" : "/VERDIS_GRUNDIS.FRONT/37835",
    "id" : 37835,
    "frontinfo" : {
      "$self" : "/VERDIS_GRUNDIS.FRONTINFO/37835",
      "id" : 37835,
      "strasse" : {
        "$self" : "/VERDIS_GRUNDIS.STRASSE/884",
        "id" : 884,
        "name" : "Johannes-Rau-Platz",
        "schluessel" : 1730
      },
      "sr_klasse_or" : {
        "$self" : "/VERDIS_GRUNDIS.STRASSENREINIGUNG/15",
        "id" : 15,
        "name" : "keine Straßenreinigung",
        "schluessel" : -100,
        "key" : null
      },
      "wd_prio_or" : {
        "$self" : "/VERDIS_GRUNDIS.WINTERDIENST/3",
        "id" : 3,
        "name" : "kein Winterdienst",
        "schluessel" : -200,
        "key" : null
      },
      "geometrie" : {
        "$self" : "/VERDIS_GRUNDIS.GEOM/810949",
        "geo_field" : "SRID=25832;LINESTRING (374438.40699990356 5681597.131999543, 374442.4419999075 5681598.654999544)",
        "id" : 810949
      },
      "wd_veranlagung" : null,
      "sr_veranlagung" : null,
      "laenge_grafik" : 4,
      "laenge_korrektur" : 4,
      "sr_bem" : null,
      "wd_bem" : null,
      "lage_sr" : {
        "$self" : "/VERDIS_GRUNDIS.SATZUNG/1183",
        "id" : 1183,
        "sr_klasse" : {
          "$self" : "/VERDIS_GRUNDIS.STRASSENREINIGUNG/2",
          "id" : 2,
          "name" : "Straßenreinigung (Klasse Z1 10 x wöchentlich)",
          "schluessel" : 306,
          "key" : "Z1"
        },
        "sr_bem" : null,
        "wd_prio" : null,
        "wd_bem" : null,
        "strasse" : {
          "$self" : "/VERDIS_GRUNDIS.STRASSE/884",
          "id" : 884,
          "name" : "Johannes-Rau-Platz",
          "schluessel" : 1730
        }
      },
      "lage_wd" : null,
      "garage_stellplatz" : null,
      "baulasten" : null,
      "grunddienstbarkeit" : null,
      "anteil" : null,
      "quadratwurzel" : null,
      "winkel" : null
    },
    "nummer" : 9,
    "bearbeitet_durch" : null,
    "erfassungsdatum" : "2012-06-25"
  }, {
    "$self" : "/VERDIS_GRUNDIS.FRONT/37836",
    "id" : 37836,
    "frontinfo" : {
      "$self" : "/VERDIS_GRUNDIS.FRONTINFO/37836",
      "id" : 37836,
      "strasse" : {
        "$self" : "/VERDIS_GRUNDIS.STRASSE/884",
        "id" : 884,
        "name" : "Johannes-Rau-Platz",
        "schluessel" : 1730
      },
      "sr_klasse_or" : {
        "$self" : "/VERDIS_GRUNDIS.STRASSENREINIGUNG/15",
        "id" : 15,
        "name" : "keine Straßenreinigung",
        "schluessel" : -100,
        "key" : null
      },
      "wd_prio_or" : {
        "$self" : "/VERDIS_GRUNDIS.WINTERDIENST/3",
        "id" : 3,
        "name" : "kein Winterdienst",
        "schluessel" : -200,
        "key" : null
      },
      "geometrie" : {
        "$self" : "/VERDIS_GRUNDIS.GEOM/810950",
        "geo_field" : "SRID=25832;LINESTRING (374443.2909999069 5681596.498999544, 374443.780492029 5681596.722277921, 374458.8911565382 5681602.4371917015, 374459.26699990686 5681602.542999544)",
        "id" : 810950
      },
      "wd_veranlagung" : null,
      "sr_veranlagung" : null,
      "laenge_grafik" : 17,
      "laenge_korrektur" : 17,
      "sr_bem" : null,
      "wd_bem" : null,
      "lage_sr" : {
        "$self" : "/VERDIS_GRUNDIS.SATZUNG/1183",
        "id" : 1183,
        "sr_klasse" : {
          "$self" : "/VERDIS_GRUNDIS.STRASSENREINIGUNG/2",
          "id" : 2,
          "name" : "Straßenreinigung (Klasse Z1 10 x wöchentlich)",
          "schluessel" : 306,
          "key" : "Z1"
        },
        "sr_bem" : null,
        "wd_prio" : null,
        "wd_bem" : null,
        "strasse" : {
          "$self" : "/VERDIS_GRUNDIS.STRASSE/884",
          "id" : 884,
          "name" : "Johannes-Rau-Platz",
          "schluessel" : 1730
        }
      },
      "lage_wd" : null,
      "garage_stellplatz" : null,
      "baulasten" : null,
      "grunddienstbarkeit" : null,
      "anteil" : null,
      "quadratwurzel" : null,
      "winkel" : null
    },
    "nummer" : 10,
    "bearbeitet_durch" : null,
    "erfassungsdatum" : "2012-06-25"
  }, {
    "$self" : "/VERDIS_GRUNDIS.FRONT/37837",
    "id" : 37837,
    "frontinfo" : {
      "$self" : "/VERDIS_GRUNDIS.FRONTINFO/37837",
      "id" : 37837,
      "strasse" : {
        "$self" : "/VERDIS_GRUNDIS.STRASSE/884",
        "id" : 884,
        "name" : "Johannes-Rau-Platz",
        "schluessel" : 1730
      },
      "sr_klasse_or" : {
        "$self" : "/VERDIS_GRUNDIS.STRASSENREINIGUNG/15",
        "id" : 15,
        "name" : "keine Straßenreinigung",
        "schluessel" : -100,
        "key" : null
      },
      "wd_prio_or" : {
        "$self" : "/VERDIS_GRUNDIS.WINTERDIENST/3",
        "id" : 3,
        "name" : "kein Winterdienst",
        "schluessel" : -200,
        "key" : null
      },
      "geometrie" : {
        "$self" : "/VERDIS_GRUNDIS.GEOM/810951",
        "geo_field" : "SRID=25832;LINESTRING (374458.4509999072 5681604.693999544, 374462.4949999069 5681606.220999546)",
        "id" : 810951
      },
      "wd_veranlagung" : null,
      "sr_veranlagung" : null,
      "laenge_grafik" : 4,
      "laenge_korrektur" : 4,
      "sr_bem" : null,
      "wd_bem" : null,
      "lage_sr" : {
        "$self" : "/VERDIS_GRUNDIS.SATZUNG/1183",
        "id" : 1183,
        "sr_klasse" : {
          "$self" : "/VERDIS_GRUNDIS.STRASSENREINIGUNG/2",
          "id" : 2,
          "name" : "Straßenreinigung (Klasse Z1 10 x wöchentlich)",
          "schluessel" : 306,
          "key" : "Z1"
        },
        "sr_bem" : null,
        "wd_prio" : null,
        "wd_bem" : null,
        "strasse" : {
          "$self" : "/VERDIS_GRUNDIS.STRASSE/884",
          "id" : 884,
          "name" : "Johannes-Rau-Platz",
          "schluessel" : 1730
        }
      },
      "lage_wd" : null,
      "garage_stellplatz" : null,
      "baulasten" : null,
      "grunddienstbarkeit" : null,
      "anteil" : null,
      "quadratwurzel" : null,
      "winkel" : null
    },
    "nummer" : 11,
    "bearbeitet_durch" : null,
    "erfassungsdatum" : "2012-06-25"
  }, {
    "$self" : "/VERDIS_GRUNDIS.FRONT/37838",
    "id" : 37838,
    "frontinfo" : {
      "$self" : "/VERDIS_GRUNDIS.FRONTINFO/37838",
      "id" : 37838,
      "strasse" : {
        "$self" : "/VERDIS_GRUNDIS.STRASSE/884",
        "id" : 884,
        "name" : "Johannes-Rau-Platz",
        "schluessel" : 1730
      },
      "sr_klasse_or" : {
        "$self" : "/VERDIS_GRUNDIS.STRASSENREINIGUNG/15",
        "id" : 15,
        "name" : "keine Straßenreinigung",
        "schluessel" : -100,
        "key" : null
      },
      "wd_prio_or" : {
        "$self" : "/VERDIS_GRUNDIS.WINTERDIENST/3",
        "id" : 3,
        "name" : "kein Winterdienst",
        "schluessel" : -200,
        "key" : null
      },
      "geometrie" : {
        "$self" : "/VERDIS_GRUNDIS.GEOM/810956",
        "geo_field" : "SRID=25832;LINESTRING (374489.5359999044 5681615.543999544, 374496.6379999063 5681618.194999545)",
        "id" : 810956
      },
      "wd_veranlagung" : null,
      "sr_veranlagung" : null,
      "laenge_grafik" : 7,
      "laenge_korrektur" : 7,
      "sr_bem" : null,
      "wd_bem" : null,
      "lage_sr" : {
        "$self" : "/VERDIS_GRUNDIS.SATZUNG/1183",
        "id" : 1183,
        "sr_klasse" : {
          "$self" : "/VERDIS_GRUNDIS.STRASSENREINIGUNG/2",
          "id" : 2,
          "name" : "Straßenreinigung (Klasse Z1 10 x wöchentlich)",
          "schluessel" : 306,
          "key" : "Z1"
        },
        "sr_bem" : null,
        "wd_prio" : null,
        "wd_bem" : null,
        "strasse" : {
          "$self" : "/VERDIS_GRUNDIS.STRASSE/884",
          "id" : 884,
          "name" : "Johannes-Rau-Platz",
          "schluessel" : 1730
        }
      },
      "lage_wd" : null,
      "garage_stellplatz" : null,
      "baulasten" : null,
      "grunddienstbarkeit" : null,
      "anteil" : null,
      "quadratwurzel" : null,
      "winkel" : null
    },
    "nummer" : 16,
    "bearbeitet_durch" : null,
    "erfassungsdatum" : "2012-06-25"
  }, {
    "$self" : "/VERDIS_GRUNDIS.FRONT/37839",
    "id" : 37839,
    "frontinfo" : {
      "$self" : "/VERDIS_GRUNDIS.FRONTINFO/37839",
      "id" : 37839,
      "strasse" : {
        "$self" : "/VERDIS_GRUNDIS.STRASSE/884",
        "id" : 884,
        "name" : "Johannes-Rau-Platz",
        "schluessel" : 1730
      },
      "sr_klasse_or" : {
        "$self" : "/VERDIS_GRUNDIS.STRASSENREINIGUNG/15",
        "id" : 15,
        "name" : "keine Straßenreinigung",
        "schluessel" : -100,
        "key" : null
      },
      "wd_prio_or" : {
        "$self" : "/VERDIS_GRUNDIS.WINTERDIENST/3",
        "id" : 3,
        "name" : "kein Winterdienst",
        "schluessel" : -200,
        "key" : null
      },
      "geometrie" : {
        "$self" : "/VERDIS_GRUNDIS.GEOM/810957",
        "geo_field" : "SRID=25832;LINESTRING (374496.6379999063 5681618.194999545, 374497.6679999038 5681619.161999545)",
        "id" : 810957
      },
      "wd_veranlagung" : null,
      "sr_veranlagung" : null,
      "laenge_grafik" : 1,
      "laenge_korrektur" : 1,
      "sr_bem" : null,
      "wd_bem" : null,
      "lage_sr" : {
        "$self" : "/VERDIS_GRUNDIS.SATZUNG/1183",
        "id" : 1183,
        "sr_klasse" : {
          "$self" : "/VERDIS_GRUNDIS.STRASSENREINIGUNG/2",
          "id" : 2,
          "name" : "Straßenreinigung (Klasse Z1 10 x wöchentlich)",
          "schluessel" : 306,
          "key" : "Z1"
        },
        "sr_bem" : null,
        "wd_prio" : null,
        "wd_bem" : null,
        "strasse" : {
          "$self" : "/VERDIS_GRUNDIS.STRASSE/884",
          "id" : 884,
          "name" : "Johannes-Rau-Platz",
          "schluessel" : 1730
        }
      },
      "lage_wd" : null,
      "garage_stellplatz" : null,
      "baulasten" : null,
      "grunddienstbarkeit" : null,
      "anteil" : null,
      "quadratwurzel" : null,
      "winkel" : null
    },
    "nummer" : 17,
    "bearbeitet_durch" : null,
    "erfassungsdatum" : "2012-06-25"
  }, {
    "$self" : "/VERDIS_GRUNDIS.FRONT/37849",
    "id" : 37849,
    "frontinfo" : {
      "$self" : "/VERDIS_GRUNDIS.FRONTINFO/37849",
      "id" : 37849,
      "strasse" : {
        "$self" : "/VERDIS_GRUNDIS.STRASSE/884",
        "id" : 884,
        "name" : "Johannes-Rau-Platz",
        "schluessel" : 1730
      },
      "sr_klasse_or" : {
        "$self" : "/VERDIS_GRUNDIS.STRASSENREINIGUNG/15",
        "id" : 15,
        "name" : "keine Straßenreinigung",
        "schluessel" : -100,
        "key" : null
      },
      "wd_prio_or" : {
        "$self" : "/VERDIS_GRUNDIS.WINTERDIENST/3",
        "id" : 3,
        "name" : "kein Winterdienst",
        "schluessel" : -200,
        "key" : null
      },
      "geometrie" : {
        "$self" : "/VERDIS_GRUNDIS.GEOM/810944",
        "geo_field" : "SRID=25832;LINESTRING (374395.57999990386 5681583.854999545, 374410.77499990416 5681589.645999543)",
        "id" : 810944
      },
      "wd_veranlagung" : null,
      "sr_veranlagung" : null,
      "laenge_grafik" : 16,
      "laenge_korrektur" : 16,
      "sr_bem" : null,
      "wd_bem" : null,
      "lage_sr" : {
        "$self" : "/VERDIS_GRUNDIS.SATZUNG/1183",
        "id" : 1183,
        "sr_klasse" : {
          "$self" : "/VERDIS_GRUNDIS.STRASSENREINIGUNG/2",
          "id" : 2,
          "name" : "Straßenreinigung (Klasse Z1 10 x wöchentlich)",
          "schluessel" : 306,
          "key" : "Z1"
        },
        "sr_bem" : null,
        "wd_prio" : null,
        "wd_bem" : null,
        "strasse" : {
          "$self" : "/VERDIS_GRUNDIS.STRASSE/884",
          "id" : 884,
          "name" : "Johannes-Rau-Platz",
          "schluessel" : 1730
        }
      },
      "lage_wd" : null,
      "garage_stellplatz" : null,
      "baulasten" : null,
      "grunddienstbarkeit" : null,
      "anteil" : null,
      "quadratwurzel" : null,
      "winkel" : null
    },
    "nummer" : 4,
    "bearbeitet_durch" : null,
    "erfassungsdatum" : "2012-06-25"
  }, {
    "$self" : "/VERDIS_GRUNDIS.FRONT/43716",
    "id" : 43716,
    "frontinfo" : {
      "$self" : "/VERDIS_GRUNDIS.FRONTINFO/43692",
      "id" : 43692,
      "strasse" : {
        "$self" : "/VERDIS_GRUNDIS.STRASSE/1692",
        "id" : 1692,
        "name" : "Wegnerstr.",
        "schluessel" : 3622
      },
      "sr_klasse_or" : {
        "$self" : "/VERDIS_GRUNDIS.STRASSENREINIGUNG/15",
        "id" : 15,
        "name" : "keine Straßenreinigung",
        "schluessel" : -100,
        "key" : null
      },
      "wd_prio_or" : {
        "$self" : "/VERDIS_GRUNDIS.WINTERDIENST/3",
        "id" : 3,
        "name" : "kein Winterdienst",
        "schluessel" : -200,
        "key" : null
      },
      "geometrie" : {
        "$self" : "/VERDIS_GRUNDIS.GEOM/867020",
        "geo_field" : "SRID=25832;LINESTRING (374481.63399990555 5681683.295999545, 374483.01599990483 5681683.002999547, 374486.3829999073 5681682.417999545, 374489.77099990385 5681681.950999545, 374494.13999990653 5681681.530999545, 374508.00499990495 5681681.571999545, 374513.85099990584 5681681.659999546, 374535.91199990665 5681681.699999545, 374547.10699990694 5681681.477999545)",
        "id" : 867020
      },
      "wd_veranlagung" : null,
      "sr_veranlagung" : null,
      "laenge_grafik" : 65,
      "laenge_korrektur" : 65,
      "sr_bem" : null,
      "wd_bem" : null,
      "lage_sr" : {
        "$self" : "/VERDIS_GRUNDIS.SATZUNG/2228",
        "id" : 2228,
        "sr_klasse" : {
          "$self" : "/VERDIS_GRUNDIS.STRASSENREINIGUNG/2",
          "id" : 2,
          "name" : "Straßenreinigung (Klasse Z1 10 x wöchentlich)",
          "schluessel" : 306,
          "key" : "Z1"
        },
        "sr_bem" : null,
        "wd_prio" : null,
        "wd_bem" : null,
        "strasse" : {
          "$self" : "/VERDIS_GRUNDIS.STRASSE/1692",
          "id" : 1692,
          "name" : "Wegnerstr.",
          "schluessel" : 3622
        }
      },
      "lage_wd" : null,
      "garage_stellplatz" : null,
      "baulasten" : null,
      "grunddienstbarkeit" : null,
      "anteil" : null,
      "quadratwurzel" : null,
      "winkel" : null
    },
    "nummer" : 19,
    "bearbeitet_durch" : null,
    "erfassungsdatum" : "2014-01-08"
  }, {
    "$self" : "/VERDIS_GRUNDIS.FRONT/43717",
    "id" : 43717,
    "frontinfo" : {
      "$self" : "/VERDIS_GRUNDIS.FRONTINFO/43693",
      "id" : 43693,
      "strasse" : {
        "$self" : "/VERDIS_GRUNDIS.STRASSE/927",
        "id" : 927,
        "name" : "Kleine Flurstr.",
        "schluessel" : 1852
      },
      "sr_klasse_or" : {
        "$self" : "/VERDIS_GRUNDIS.STRASSENREINIGUNG/15",
        "id" : 15,
        "name" : "keine Straßenreinigung",
        "schluessel" : -100,
        "key" : null
      },
      "wd_prio_or" : {
        "$self" : "/VERDIS_GRUNDIS.WINTERDIENST/3",
        "id" : 3,
        "name" : "kein Winterdienst",
        "schluessel" : -200,
        "key" : null
      },
      "geometrie" : {
        "$self" : "/VERDIS_GRUNDIS.GEOM/867021",
        "geo_field" : "SRID=25832;LINESTRING (374518.70399990596 5681733.872999545, 374547.10699990694 5681681.477999545)",
        "id" : 867021
      },
      "wd_veranlagung" : null,
      "sr_veranlagung" : null,
      "laenge_grafik" : 59,
      "laenge_korrektur" : 59,
      "sr_bem" : null,
      "wd_bem" : null,
      "lage_sr" : {
        "$self" : "/VERDIS_GRUNDIS.SATZUNG/1236",
        "id" : 1236,
        "sr_klasse" : {
          "$self" : "/VERDIS_GRUNDIS.STRASSENREINIGUNG/1",
          "id" : 1,
          "name" : "Straßenreinigung (Klasse A1 5 x wöchentlich)",
          "schluessel" : 305,
          "key" : "A1"
        },
        "sr_bem" : "Reststrecke",
        "wd_prio" : null,
        "wd_bem" : null,
        "strasse" : {
          "$self" : "/VERDIS_GRUNDIS.STRASSE/927",
          "id" : 927,
          "name" : "Kleine Flurstr.",
          "schluessel" : 1852
        }
      },
      "lage_wd" : null,
      "garage_stellplatz" : null,
      "baulasten" : null,
      "grunddienstbarkeit" : null,
      "anteil" : null,
      "quadratwurzel" : null,
      "winkel" : null
    },
    "nummer" : 20,
    "bearbeitet_durch" : null,
    "erfassungsdatum" : "2014-01-08"
  }, {
    "$self" : "/VERDIS_GRUNDIS.FRONT/43718",
    "id" : 43718,
    "frontinfo" : {
      "$self" : "/VERDIS_GRUNDIS.FRONTINFO/43694",
      "id" : 43694,
      "strasse" : {
        "$self" : "/VERDIS_GRUNDIS.STRASSE/927",
        "id" : 927,
        "name" : "Kleine Flurstr.",
        "schluessel" : 1852
      },
      "sr_klasse_or" : {
        "$self" : "/VERDIS_GRUNDIS.STRASSENREINIGUNG/15",
        "id" : 15,
        "name" : "keine Straßenreinigung",
        "schluessel" : -100,
        "key" : null
      },
      "wd_prio_or" : {
        "$self" : "/VERDIS_GRUNDIS.WINTERDIENST/3",
        "id" : 3,
        "name" : "kein Winterdienst",
        "schluessel" : -200,
        "key" : null
      },
      "geometrie" : {
        "$self" : "/VERDIS_GRUNDIS.GEOM/867022",
        "geo_field" : "SRID=25832;LINESTRING (374487.31899990415 5681662.128999546, 374498.71999990486 5681619.492999545)",
        "id" : 867022
      },
      "wd_veranlagung" : null,
      "sr_veranlagung" : null,
      "laenge_grafik" : 44,
      "laenge_korrektur" : 44,
      "sr_bem" : null,
      "wd_bem" : null,
      "lage_sr" : {
        "$self" : "/VERDIS_GRUNDIS.SATZUNG/1236",
        "id" : 1236,
        "sr_klasse" : {
          "$self" : "/VERDIS_GRUNDIS.STRASSENREINIGUNG/1",
          "id" : 1,
          "name" : "Straßenreinigung (Klasse A1 5 x wöchentlich)",
          "schluessel" : 305,
          "key" : "A1"
        },
        "sr_bem" : "Reststrecke",
        "wd_prio" : null,
        "wd_bem" : null,
        "strasse" : {
          "$self" : "/VERDIS_GRUNDIS.STRASSE/927",
          "id" : 927,
          "name" : "Kleine Flurstr.",
          "schluessel" : 1852
        }
      },
      "lage_wd" : null,
      "garage_stellplatz" : null,
      "baulasten" : null,
      "grunddienstbarkeit" : null,
      "anteil" : null,
      "quadratwurzel" : null,
      "winkel" : null
    },
    "nummer" : 21,
    "bearbeitet_durch" : null,
    "erfassungsdatum" : "2014-01-08"
  }, {
    "$self" : "/VERDIS_GRUNDIS.FRONT/43719",
    "id" : 43719,
    "frontinfo" : {
      "$self" : "/VERDIS_GRUNDIS.FRONTINFO/43695",
      "id" : 43695,
      "strasse" : {
        "$self" : "/VERDIS_GRUNDIS.STRASSE/1705",
        "id" : 1705,
        "name" : "Werth",
        "schluessel" : 3635
      },
      "sr_klasse_or" : {
        "$self" : "/VERDIS_GRUNDIS.STRASSENREINIGUNG/15",
        "id" : 15,
        "name" : "keine Straßenreinigung",
        "schluessel" : -100,
        "key" : null
      },
      "wd_prio_or" : {
        "$self" : "/VERDIS_GRUNDIS.WINTERDIENST/3",
        "id" : 3,
        "name" : "kein Winterdienst",
        "schluessel" : -200,
        "key" : null
      },
      "geometrie" : {
        "$self" : "/VERDIS_GRUNDIS.GEOM/867023",
        "geo_field" : "SRID=25832;LINESTRING (374423.39399990696 5681541.399999545, 374438.78299990564 5681547.114999547)",
        "id" : 867023
      },
      "wd_veranlagung" : null,
      "sr_veranlagung" : null,
      "laenge_grafik" : 16,
      "laenge_korrektur" : 16,
      "sr_bem" : null,
      "wd_bem" : null,
      "lage_sr" : {
        "$self" : "/VERDIS_GRUNDIS.SATZUNG/2241",
        "id" : 2241,
        "sr_klasse" : {
          "$self" : "/VERDIS_GRUNDIS.STRASSENREINIGUNG/2",
          "id" : 2,
          "name" : "Straßenreinigung (Klasse Z1 10 x wöchentlich)",
          "schluessel" : 306,
          "key" : "Z1"
        },
        "sr_bem" : null,
        "wd_prio" : null,
        "wd_bem" : null,
        "strasse" : {
          "$self" : "/VERDIS_GRUNDIS.STRASSE/1705",
          "id" : 1705,
          "name" : "Werth",
          "schluessel" : 3635
        }
      },
      "lage_wd" : null,
      "garage_stellplatz" : null,
      "baulasten" : null,
      "grunddienstbarkeit" : null,
      "anteil" : null,
      "quadratwurzel" : null,
      "winkel" : null
    },
    "nummer" : 22,
    "bearbeitet_durch" : null,
    "erfassungsdatum" : "2014-01-08"
  }, {
    "$self" : "/VERDIS_GRUNDIS.FRONT/43720",
    "id" : 43720,
    "frontinfo" : {
      "$self" : "/VERDIS_GRUNDIS.FRONTINFO/43696",
      "id" : 43696,
      "strasse" : {
        "$self" : "/VERDIS_GRUNDIS.STRASSE/1705",
        "id" : 1705,
        "name" : "Werth",
        "schluessel" : 3635
      },
      "sr_klasse_or" : {
        "$self" : "/VERDIS_GRUNDIS.STRASSENREINIGUNG/15",
        "id" : 15,
        "name" : "keine Straßenreinigung",
        "schluessel" : -100,
        "key" : null
      },
      "wd_prio_or" : {
        "$self" : "/VERDIS_GRUNDIS.WINTERDIENST/3",
        "id" : 3,
        "name" : "kein Winterdienst",
        "schluessel" : -200,
        "key" : null
      },
      "geometrie" : {
        "$self" : "/VERDIS_GRUNDIS.GEOM/867024",
        "geo_field" : "SRID=25832;LINESTRING (374495.47099990677 5681567.999999545, 374511.13299990736 5681572.722999545)",
        "id" : 867024
      },
      "wd_veranlagung" : null,
      "sr_veranlagung" : null,
      "laenge_grafik" : 16,
      "laenge_korrektur" : 16,
      "sr_bem" : null,
      "wd_bem" : null,
      "lage_sr" : {
        "$self" : "/VERDIS_GRUNDIS.SATZUNG/2241",
        "id" : 2241,
        "sr_klasse" : {
          "$self" : "/VERDIS_GRUNDIS.STRASSENREINIGUNG/2",
          "id" : 2,
          "name" : "Straßenreinigung (Klasse Z1 10 x wöchentlich)",
          "schluessel" : 306,
          "key" : "Z1"
        },
        "sr_bem" : null,
        "wd_prio" : null,
        "wd_bem" : null,
        "strasse" : {
          "$self" : "/VERDIS_GRUNDIS.STRASSE/1705",
          "id" : 1705,
          "name" : "Werth",
          "schluessel" : 3635
        }
      },
      "lage_wd" : null,
      "garage_stellplatz" : null,
      "baulasten" : null,
      "grunddienstbarkeit" : null,
      "anteil" : null,
      "quadratwurzel" : null,
      "winkel" : null
    },
    "nummer" : 23,
    "bearbeitet_durch" : null,
    "erfassungsdatum" : "2014-01-08"
  }, {
    "$self" : "/VERDIS_GRUNDIS.FRONT/43784",
    "id" : 43784,
    "frontinfo" : {
      "$self" : "/VERDIS_GRUNDIS.FRONTINFO/43760",
      "id" : 43760,
      "strasse" : {
        "$self" : "/VERDIS_GRUNDIS.STRASSE/1705",
        "id" : 1705,
        "name" : "Werth",
        "schluessel" : 3635
      },
      "sr_klasse_or" : {
        "$self" : "/VERDIS_GRUNDIS.STRASSENREINIGUNG/15",
        "id" : 15,
        "name" : "keine Straßenreinigung",
        "schluessel" : -100,
        "key" : null
      },
      "wd_prio_or" : {
        "$self" : "/VERDIS_GRUNDIS.WINTERDIENST/3",
        "id" : 3,
        "name" : "kein Winterdienst",
        "schluessel" : -200,
        "key" : null
      },
      "geometrie" : {
        "$self" : "/VERDIS_GRUNDIS.GEOM/867300",
        "geo_field" : "SRID=25832;LINESTRING (374422.39599990356 5681544.151999546, 374423.39399990696 5681541.399999545)",
        "id" : 867300
      },
      "wd_veranlagung" : null,
      "sr_veranlagung" : null,
      "laenge_grafik" : 2,
      "laenge_korrektur" : 2,
      "sr_bem" : null,
      "wd_bem" : null,
      "lage_sr" : {
        "$self" : "/VERDIS_GRUNDIS.SATZUNG/2241",
        "id" : 2241,
        "sr_klasse" : {
          "$self" : "/VERDIS_GRUNDIS.STRASSENREINIGUNG/2",
          "id" : 2,
          "name" : "Straßenreinigung (Klasse Z1 10 x wöchentlich)",
          "schluessel" : 306,
          "key" : "Z1"
        },
        "sr_bem" : null,
        "wd_prio" : null,
        "wd_bem" : null,
        "strasse" : {
          "$self" : "/VERDIS_GRUNDIS.STRASSE/1705",
          "id" : 1705,
          "name" : "Werth",
          "schluessel" : 3635
        }
      },
      "lage_wd" : null,
      "garage_stellplatz" : null,
      "baulasten" : null,
      "grunddienstbarkeit" : null,
      "anteil" : null,
      "quadratwurzel" : null,
      "winkel" : null
    },
    "nummer" : 24,
    "bearbeitet_durch" : null,
    "erfassungsdatum" : "2014-01-09"
  }, {
    "$self" : "/VERDIS_GRUNDIS.FRONT/43785",
    "id" : 43785,
    "frontinfo" : {
      "$self" : "/VERDIS_GRUNDIS.FRONTINFO/43761",
      "id" : 43761,
      "strasse" : {
        "$self" : "/VERDIS_GRUNDIS.STRASSE/884",
        "id" : 884,
        "name" : "Johannes-Rau-Platz",
        "schluessel" : 1730
      },
      "sr_klasse_or" : {
        "$self" : "/VERDIS_GRUNDIS.STRASSENREINIGUNG/15",
        "id" : 15,
        "name" : "keine Straßenreinigung",
        "schluessel" : -100,
        "key" : null
      },
      "wd_prio_or" : {
        "$self" : "/VERDIS_GRUNDIS.WINTERDIENST/3",
        "id" : 3,
        "name" : "kein Winterdienst",
        "schluessel" : -200,
        "key" : null
      },
      "geometrie" : {
        "$self" : "/VERDIS_GRUNDIS.GEOM/867301",
        "geo_field" : "SRID=25832;LINESTRING (374438.78299990564 5681547.114999547, 374425.4219999041 5681581.534999546)",
        "id" : 867301
      },
      "wd_veranlagung" : null,
      "sr_veranlagung" : null,
      "laenge_grafik" : 36,
      "laenge_korrektur" : 36,
      "sr_bem" : null,
      "wd_bem" : null,
      "lage_sr" : {
        "$self" : "/VERDIS_GRUNDIS.SATZUNG/1183",
        "id" : 1183,
        "sr_klasse" : {
          "$self" : "/VERDIS_GRUNDIS.STRASSENREINIGUNG/2",
          "id" : 2,
          "name" : "Straßenreinigung (Klasse Z1 10 x wöchentlich)",
          "schluessel" : 306,
          "key" : "Z1"
        },
        "sr_bem" : null,
        "wd_prio" : null,
        "wd_bem" : null,
        "strasse" : {
          "$self" : "/VERDIS_GRUNDIS.STRASSE/884",
          "id" : 884,
          "name" : "Johannes-Rau-Platz",
          "schluessel" : 1730
        }
      },
      "lage_wd" : null,
      "garage_stellplatz" : null,
      "baulasten" : null,
      "grunddienstbarkeit" : null,
      "anteil" : null,
      "quadratwurzel" : null,
      "winkel" : null
    },
    "nummer" : 25,
    "bearbeitet_durch" : null,
    "erfassungsdatum" : "2014-01-09"
  }, {
    "$self" : "/VERDIS_GRUNDIS.FRONT/43786",
    "id" : 43786,
    "frontinfo" : {
      "$self" : "/VERDIS_GRUNDIS.FRONTINFO/43762",
      "id" : 43762,
      "strasse" : {
        "$self" : "/VERDIS_GRUNDIS.STRASSE/884",
        "id" : 884,
        "name" : "Johannes-Rau-Platz",
        "schluessel" : 1730
      },
      "sr_klasse_or" : {
        "$self" : "/VERDIS_GRUNDIS.STRASSENREINIGUNG/15",
        "id" : 15,
        "name" : "keine Straßenreinigung",
        "schluessel" : -100,
        "key" : null
      },
      "wd_prio_or" : {
        "$self" : "/VERDIS_GRUNDIS.WINTERDIENST/3",
        "id" : 3,
        "name" : "kein Winterdienst",
        "schluessel" : -200,
        "key" : null
      },
      "geometrie" : {
        "$self" : "/VERDIS_GRUNDIS.GEOM/867302",
        "geo_field" : "SRID=25832;LINESTRING (374495.47099990677 5681567.999999545, 374483.9049999072 5681599.396999545)",
        "id" : 867302
      },
      "wd_veranlagung" : null,
      "sr_veranlagung" : null,
      "laenge_grafik" : 33,
      "laenge_korrektur" : 33,
      "sr_bem" : null,
      "wd_bem" : null,
      "lage_sr" : {
        "$self" : "/VERDIS_GRUNDIS.SATZUNG/1183",
        "id" : 1183,
        "sr_klasse" : {
          "$self" : "/VERDIS_GRUNDIS.STRASSENREINIGUNG/2",
          "id" : 2,
          "name" : "Straßenreinigung (Klasse Z1 10 x wöchentlich)",
          "schluessel" : 306,
          "key" : "Z1"
        },
        "sr_bem" : null,
        "wd_prio" : null,
        "wd_bem" : null,
        "strasse" : {
          "$self" : "/VERDIS_GRUNDIS.STRASSE/884",
          "id" : 884,
          "name" : "Johannes-Rau-Platz",
          "schluessel" : 1730
        }
      },
      "lage_wd" : null,
      "garage_stellplatz" : null,
      "baulasten" : null,
      "grunddienstbarkeit" : null,
      "anteil" : null,
      "quadratwurzel" : null,
      "winkel" : null
    },
    "nummer" : 26,
    "bearbeitet_durch" : null,
    "erfassungsdatum" : "2014-01-09"
  }, {
    "$self" : "/VERDIS_GRUNDIS.FRONT/43787",
    "id" : 43787,
    "frontinfo" : {
      "$self" : "/VERDIS_GRUNDIS.FRONTINFO/43763",
      "id" : 43763,
      "strasse" : {
        "$self" : "/VERDIS_GRUNDIS.STRASSE/884",
        "id" : 884,
        "name" : "Johannes-Rau-Platz",
        "schluessel" : 1730
      },
      "sr_klasse_or" : {
        "$self" : "/VERDIS_GRUNDIS.STRASSENREINIGUNG/15",
        "id" : 15,
        "name" : "keine Straßenreinigung",
        "schluessel" : -100,
        "key" : null
      },
      "wd_prio_or" : {
        "$self" : "/VERDIS_GRUNDIS.WINTERDIENST/3",
        "id" : 3,
        "name" : "kein Winterdienst",
        "schluessel" : -200,
        "key" : null
      },
      "geometrie" : {
        "$self" : "/VERDIS_GRUNDIS.GEOM/867303",
        "geo_field" : "SRID=25832;LINESTRING (374467.0199999055 5681613.977999545, 374465.5449999077 5681617.853999545)",
        "id" : 867303
      },
      "wd_veranlagung" : null,
      "sr_veranlagung" : null,
      "laenge_grafik" : 4,
      "laenge_korrektur" : 4,
      "sr_bem" : null,
      "wd_bem" : null,
      "lage_sr" : {
        "$self" : "/VERDIS_GRUNDIS.SATZUNG/1183",
        "id" : 1183,
        "sr_klasse" : {
          "$self" : "/VERDIS_GRUNDIS.STRASSENREINIGUNG/2",
          "id" : 2,
          "name" : "Straßenreinigung (Klasse Z1 10 x wöchentlich)",
          "schluessel" : 306,
          "key" : "Z1"
        },
        "sr_bem" : null,
        "wd_prio" : null,
        "wd_bem" : null,
        "strasse" : {
          "$self" : "/VERDIS_GRUNDIS.STRASSE/884",
          "id" : 884,
          "name" : "Johannes-Rau-Platz",
          "schluessel" : 1730
        }
      },
      "lage_wd" : null,
      "garage_stellplatz" : null,
      "baulasten" : null,
      "grunddienstbarkeit" : null,
      "anteil" : null,
      "quadratwurzel" : null,
      "winkel" : null
    },
    "nummer" : 27,
    "bearbeitet_durch" : null,
    "erfassungsdatum" : "2014-01-09"
  }, {
    "$self" : "/VERDIS_GRUNDIS.FRONT/43788",
    "id" : 43788,
    "frontinfo" : {
      "$self" : "/VERDIS_GRUNDIS.FRONTINFO/43764",
      "id" : 43764,
      "strasse" : {
        "$self" : "/VERDIS_GRUNDIS.STRASSE/884",
        "id" : 884,
        "name" : "Johannes-Rau-Platz",
        "schluessel" : 1730
      },
      "sr_klasse_or" : {
        "$self" : "/VERDIS_GRUNDIS.STRASSENREINIGUNG/15",
        "id" : 15,
        "name" : "keine Straßenreinigung",
        "schluessel" : -100,
        "key" : null
      },
      "wd_prio_or" : {
        "$self" : "/VERDIS_GRUNDIS.WINTERDIENST/3",
        "id" : 3,
        "name" : "kein Winterdienst",
        "schluessel" : -200,
        "key" : null
      },
      "geometrie" : {
        "$self" : "/VERDIS_GRUNDIS.GEOM/867304",
        "geo_field" : "SRID=25832;LINESTRING (374461.78899990674 5681609.606999545, 374460.9869999056 5681611.719999544)",
        "id" : 867304
      },
      "wd_veranlagung" : null,
      "sr_veranlagung" : null,
      "laenge_grafik" : 2,
      "laenge_korrektur" : 2,
      "sr_bem" : null,
      "wd_bem" : null,
      "lage_sr" : {
        "$self" : "/VERDIS_GRUNDIS.SATZUNG/1183",
        "id" : 1183,
        "sr_klasse" : {
          "$self" : "/VERDIS_GRUNDIS.STRASSENREINIGUNG/2",
          "id" : 2,
          "name" : "Straßenreinigung (Klasse Z1 10 x wöchentlich)",
          "schluessel" : 306,
          "key" : "Z1"
        },
        "sr_bem" : null,
        "wd_prio" : null,
        "wd_bem" : null,
        "strasse" : {
          "$self" : "/VERDIS_GRUNDIS.STRASSE/884",
          "id" : 884,
          "name" : "Johannes-Rau-Platz",
          "schluessel" : 1730
        }
      },
      "lage_wd" : null,
      "garage_stellplatz" : null,
      "baulasten" : null,
      "grunddienstbarkeit" : null,
      "anteil" : null,
      "quadratwurzel" : null,
      "winkel" : null
    },
    "nummer" : 28,
    "bearbeitet_durch" : null,
    "erfassungsdatum" : "2014-01-09"
  }, {
    "$self" : "/VERDIS_GRUNDIS.FRONT/43789",
    "id" : 43789,
    "frontinfo" : {
      "$self" : "/VERDIS_GRUNDIS.FRONTINFO/43765",
      "id" : 43765,
      "strasse" : {
        "$self" : "/VERDIS_GRUNDIS.STRASSE/884",
        "id" : 884,
        "name" : "Johannes-Rau-Platz",
        "schluessel" : 1730
      },
      "sr_klasse_or" : {
        "$self" : "/VERDIS_GRUNDIS.STRASSENREINIGUNG/15",
        "id" : 15,
        "name" : "keine Straßenreinigung",
        "schluessel" : -100,
        "key" : null
      },
      "wd_prio_or" : {
        "$self" : "/VERDIS_GRUNDIS.WINTERDIENST/3",
        "id" : 3,
        "name" : "kein Winterdienst",
        "schluessel" : -200,
        "key" : null
      },
      "geometrie" : {
        "$self" : "/VERDIS_GRUNDIS.GEOM/867305",
        "geo_field" : "SRID=25832;LINESTRING (374462.4949999069 5681606.220999546, 374461.3819999051 5681609.423999547)",
        "id" : 867305
      },
      "wd_veranlagung" : null,
      "sr_veranlagung" : null,
      "laenge_grafik" : 3,
      "laenge_korrektur" : 3,
      "sr_bem" : null,
      "wd_bem" : null,
      "lage_sr" : {
        "$self" : "/VERDIS_GRUNDIS.SATZUNG/1183",
        "id" : 1183,
        "sr_klasse" : {
          "$self" : "/VERDIS_GRUNDIS.STRASSENREINIGUNG/2",
          "id" : 2,
          "name" : "Straßenreinigung (Klasse Z1 10 x wöchentlich)",
          "schluessel" : 306,
          "key" : "Z1"
        },
        "sr_bem" : null,
        "wd_prio" : null,
        "wd_bem" : null,
        "strasse" : {
          "$self" : "/VERDIS_GRUNDIS.STRASSE/884",
          "id" : 884,
          "name" : "Johannes-Rau-Platz",
          "schluessel" : 1730
        }
      },
      "lage_wd" : null,
      "garage_stellplatz" : null,
      "baulasten" : null,
      "grunddienstbarkeit" : null,
      "anteil" : null,
      "quadratwurzel" : null,
      "winkel" : null
    },
    "nummer" : 29,
    "bearbeitet_durch" : null,
    "erfassungsdatum" : "2014-01-09"
  }, {
    "$self" : "/VERDIS_GRUNDIS.FRONT/43790",
    "id" : 43790,
    "frontinfo" : {
      "$self" : "/VERDIS_GRUNDIS.FRONTINFO/43766",
      "id" : 43766,
      "strasse" : {
        "$self" : "/VERDIS_GRUNDIS.STRASSE/884",
        "id" : 884,
        "name" : "Johannes-Rau-Platz",
        "schluessel" : 1730
      },
      "sr_klasse_or" : {
        "$self" : "/VERDIS_GRUNDIS.STRASSENREINIGUNG/15",
        "id" : 15,
        "name" : "keine Straßenreinigung",
        "schluessel" : -100,
        "key" : null
      },
      "wd_prio_or" : {
        "$self" : "/VERDIS_GRUNDIS.WINTERDIENST/3",
        "id" : 3,
        "name" : "kein Winterdienst",
        "schluessel" : -200,
        "key" : null
      },
      "geometrie" : {
        "$self" : "/VERDIS_GRUNDIS.GEOM/867306",
        "geo_field" : "SRID=25832;LINESTRING (374459.26699990686 5681602.542999544, 374458.4509999072 5681604.693999544)",
        "id" : 867306
      },
      "wd_veranlagung" : null,
      "sr_veranlagung" : null,
      "laenge_grafik" : 2,
      "laenge_korrektur" : 2,
      "sr_bem" : null,
      "wd_bem" : null,
      "lage_sr" : {
        "$self" : "/VERDIS_GRUNDIS.SATZUNG/1183",
        "id" : 1183,
        "sr_klasse" : {
          "$self" : "/VERDIS_GRUNDIS.STRASSENREINIGUNG/2",
          "id" : 2,
          "name" : "Straßenreinigung (Klasse Z1 10 x wöchentlich)",
          "schluessel" : 306,
          "key" : "Z1"
        },
        "sr_bem" : null,
        "wd_prio" : null,
        "wd_bem" : null,
        "strasse" : {
          "$self" : "/VERDIS_GRUNDIS.STRASSE/884",
          "id" : 884,
          "name" : "Johannes-Rau-Platz",
          "schluessel" : 1730
        }
      },
      "lage_wd" : null,
      "garage_stellplatz" : null,
      "baulasten" : null,
      "grunddienstbarkeit" : null,
      "anteil" : null,
      "quadratwurzel" : null,
      "winkel" : null
    },
    "nummer" : 30,
    "bearbeitet_durch" : null,
    "erfassungsdatum" : "2014-01-09"
  }, {
    "$self" : "/VERDIS_GRUNDIS.FRONT/43791",
    "id" : 43791,
    "frontinfo" : {
      "$self" : "/VERDIS_GRUNDIS.FRONTINFO/43767",
      "id" : 43767,
      "strasse" : {
        "$self" : "/VERDIS_GRUNDIS.STRASSE/884",
        "id" : 884,
        "name" : "Johannes-Rau-Platz",
        "schluessel" : 1730
      },
      "sr_klasse_or" : {
        "$self" : "/VERDIS_GRUNDIS.STRASSENREINIGUNG/15",
        "id" : 15,
        "name" : "keine Straßenreinigung",
        "schluessel" : -100,
        "key" : null
      },
      "wd_prio_or" : {
        "$self" : "/VERDIS_GRUNDIS.WINTERDIENST/3",
        "id" : 3,
        "name" : "kein Winterdienst",
        "schluessel" : -200,
        "key" : null
      },
      "geometrie" : {
        "$self" : "/VERDIS_GRUNDIS.GEOM/867307",
        "geo_field" : "SRID=25832;LINESTRING (374479.4219999043 5681611.635999544, 374475.70899990486 5681621.662999545)",
        "id" : 867307
      },
      "wd_veranlagung" : null,
      "sr_veranlagung" : null,
      "laenge_grafik" : 10,
      "laenge_korrektur" : 10,
      "sr_bem" : null,
      "wd_bem" : null,
      "lage_sr" : {
        "$self" : "/VERDIS_GRUNDIS.SATZUNG/1183",
        "id" : 1183,
        "sr_klasse" : {
          "$self" : "/VERDIS_GRUNDIS.STRASSENREINIGUNG/2",
          "id" : 2,
          "name" : "Straßenreinigung (Klasse Z1 10 x wöchentlich)",
          "schluessel" : 306,
          "key" : "Z1"
        },
        "sr_bem" : null,
        "wd_prio" : null,
        "wd_bem" : null,
        "strasse" : {
          "$self" : "/VERDIS_GRUNDIS.STRASSE/884",
          "id" : 884,
          "name" : "Johannes-Rau-Platz",
          "schluessel" : 1730
        }
      },
      "lage_wd" : null,
      "garage_stellplatz" : null,
      "baulasten" : null,
      "grunddienstbarkeit" : null,
      "anteil" : null,
      "quadratwurzel" : null,
      "winkel" : null
    },
    "nummer" : 31,
    "bearbeitet_durch" : null,
    "erfassungsdatum" : "2014-01-09"
  }, {
    "$self" : "/VERDIS_GRUNDIS.FRONT/43792",
    "id" : 43792,
    "frontinfo" : {
      "$self" : "/VERDIS_GRUNDIS.FRONTINFO/43768",
      "id" : 43768,
      "strasse" : {
        "$self" : "/VERDIS_GRUNDIS.STRASSE/884",
        "id" : 884,
        "name" : "Johannes-Rau-Platz",
        "schluessel" : 1730
      },
      "sr_klasse_or" : {
        "$self" : "/VERDIS_GRUNDIS.STRASSENREINIGUNG/15",
        "id" : 15,
        "name" : "keine Straßenreinigung",
        "schluessel" : -100,
        "key" : null
      },
      "wd_prio_or" : {
        "$self" : "/VERDIS_GRUNDIS.WINTERDIENST/3",
        "id" : 3,
        "name" : "kein Winterdienst",
        "schluessel" : -200,
        "key" : null
      },
      "geometrie" : {
        "$self" : "/VERDIS_GRUNDIS.GEOM/867308",
        "geo_field" : "SRID=25832;LINESTRING (374443.2909999069 5681596.498999544, 374442.4419999075 5681598.654999544)",
        "id" : 867308
      },
      "wd_veranlagung" : null,
      "sr_veranlagung" : null,
      "laenge_grafik" : 2,
      "laenge_korrektur" : 2,
      "sr_bem" : null,
      "wd_bem" : null,
      "lage_sr" : {
        "$self" : "/VERDIS_GRUNDIS.SATZUNG/1183",
        "id" : 1183,
        "sr_klasse" : {
          "$self" : "/VERDIS_GRUNDIS.STRASSENREINIGUNG/2",
          "id" : 2,
          "name" : "Straßenreinigung (Klasse Z1 10 x wöchentlich)",
          "schluessel" : 306,
          "key" : "Z1"
        },
        "sr_bem" : null,
        "wd_prio" : null,
        "wd_bem" : null,
        "strasse" : {
          "$self" : "/VERDIS_GRUNDIS.STRASSE/884",
          "id" : 884,
          "name" : "Johannes-Rau-Platz",
          "schluessel" : 1730
        }
      },
      "lage_wd" : null,
      "garage_stellplatz" : null,
      "baulasten" : null,
      "grunddienstbarkeit" : null,
      "anteil" : null,
      "quadratwurzel" : null,
      "winkel" : null
    },
    "nummer" : 32,
    "bearbeitet_durch" : null,
    "erfassungsdatum" : "2014-01-09"
  }, {
    "$self" : "/VERDIS_GRUNDIS.FRONT/43793",
    "id" : 43793,
    "frontinfo" : {
      "$self" : "/VERDIS_GRUNDIS.FRONTINFO/43769",
      "id" : 43769,
      "strasse" : {
        "$self" : "/VERDIS_GRUNDIS.STRASSE/884",
        "id" : 884,
        "name" : "Johannes-Rau-Platz",
        "schluessel" : 1730
      },
      "sr_klasse_or" : {
        "$self" : "/VERDIS_GRUNDIS.STRASSENREINIGUNG/15",
        "id" : 15,
        "name" : "keine Straßenreinigung",
        "schluessel" : -100,
        "key" : null
      },
      "wd_prio_or" : {
        "$self" : "/VERDIS_GRUNDIS.WINTERDIENST/3",
        "id" : 3,
        "name" : "kein Winterdienst",
        "schluessel" : -200,
        "key" : null
      },
      "geometrie" : {
        "$self" : "/VERDIS_GRUNDIS.GEOM/867309",
        "geo_field" : "SRID=25832;LINESTRING (374438.40699990356 5681597.131999543, 374437.2499999057 5681600.656999544)",
        "id" : 867309
      },
      "wd_veranlagung" : null,
      "sr_veranlagung" : null,
      "laenge_grafik" : 3,
      "laenge_korrektur" : 3,
      "sr_bem" : null,
      "wd_bem" : null,
      "lage_sr" : {
        "$self" : "/VERDIS_GRUNDIS.SATZUNG/1183",
        "id" : 1183,
        "sr_klasse" : {
          "$self" : "/VERDIS_GRUNDIS.STRASSENREINIGUNG/2",
          "id" : 2,
          "name" : "Straßenreinigung (Klasse Z1 10 x wöchentlich)",
          "schluessel" : 306,
          "key" : "Z1"
        },
        "sr_bem" : null,
        "wd_prio" : null,
        "wd_bem" : null,
        "strasse" : {
          "$self" : "/VERDIS_GRUNDIS.STRASSE/884",
          "id" : 884,
          "name" : "Johannes-Rau-Platz",
          "schluessel" : 1730
        }
      },
      "lage_wd" : null,
      "garage_stellplatz" : null,
      "baulasten" : null,
      "grunddienstbarkeit" : null,
      "anteil" : null,
      "quadratwurzel" : null,
      "winkel" : null
    },
    "nummer" : 33,
    "bearbeitet_durch" : null,
    "erfassungsdatum" : "2014-01-09"
  }, {
    "$self" : "/VERDIS_GRUNDIS.FRONT/43794",
    "id" : 43794,
    "frontinfo" : {
      "$self" : "/VERDIS_GRUNDIS.FRONTINFO/43770",
      "id" : 43770,
      "strasse" : {
        "$self" : "/VERDIS_GRUNDIS.STRASSE/884",
        "id" : 884,
        "name" : "Johannes-Rau-Platz",
        "schluessel" : 1730
      },
      "sr_klasse_or" : {
        "$self" : "/VERDIS_GRUNDIS.STRASSENREINIGUNG/15",
        "id" : 15,
        "name" : "keine Straßenreinigung",
        "schluessel" : -100,
        "key" : null
      },
      "wd_prio_or" : {
        "$self" : "/VERDIS_GRUNDIS.WINTERDIENST/3",
        "id" : 3,
        "name" : "kein Winterdienst",
        "schluessel" : -200,
        "key" : null
      },
      "geometrie" : {
        "$self" : "/VERDIS_GRUNDIS.GEOM/867310",
        "geo_field" : "SRID=25832;LINESTRING (374436.7819999035 5681600.4659995455, 374435.8929999049 5681602.240999545)",
        "id" : 867310
      },
      "wd_veranlagung" : null,
      "sr_veranlagung" : null,
      "laenge_grafik" : 1,
      "laenge_korrektur" : 1,
      "sr_bem" : null,
      "wd_bem" : null,
      "lage_sr" : {
        "$self" : "/VERDIS_GRUNDIS.SATZUNG/1183",
        "id" : 1183,
        "sr_klasse" : {
          "$self" : "/VERDIS_GRUNDIS.STRASSENREINIGUNG/2",
          "id" : 2,
          "name" : "Straßenreinigung (Klasse Z1 10 x wöchentlich)",
          "schluessel" : 306,
          "key" : "Z1"
        },
        "sr_bem" : null,
        "wd_prio" : null,
        "wd_bem" : null,
        "strasse" : {
          "$self" : "/VERDIS_GRUNDIS.STRASSE/884",
          "id" : 884,
          "name" : "Johannes-Rau-Platz",
          "schluessel" : 1730
        }
      },
      "lage_wd" : null,
      "garage_stellplatz" : null,
      "baulasten" : null,
      "grunddienstbarkeit" : null,
      "anteil" : null,
      "quadratwurzel" : null,
      "winkel" : null
    },
    "nummer" : 34,
    "bearbeitet_durch" : null,
    "erfassungsdatum" : "2014-01-09"
  }, {
    "$self" : "/VERDIS_GRUNDIS.FRONT/43795",
    "id" : 43795,
    "frontinfo" : {
      "$self" : "/VERDIS_GRUNDIS.FRONTINFO/43771",
      "id" : 43771,
      "strasse" : {
        "$self" : "/VERDIS_GRUNDIS.STRASSE/884",
        "id" : 884,
        "name" : "Johannes-Rau-Platz",
        "schluessel" : 1730
      },
      "sr_klasse_or" : {
        "$self" : "/VERDIS_GRUNDIS.STRASSENREINIGUNG/15",
        "id" : 15,
        "name" : "keine Straßenreinigung",
        "schluessel" : -100,
        "key" : null
      },
      "wd_prio_or" : {
        "$self" : "/VERDIS_GRUNDIS.WINTERDIENST/3",
        "id" : 3,
        "name" : "kein Winterdienst",
        "schluessel" : -200,
        "key" : null
      },
      "geometrie" : {
        "$self" : "/VERDIS_GRUNDIS.GEOM/867311",
        "geo_field" : "SRID=25832;LINESTRING (374429.85999990517 5681599.946999545, 374428.41799990344 5681603.836999545)",
        "id" : 867311
      },
      "wd_veranlagung" : null,
      "sr_veranlagung" : null,
      "laenge_grafik" : 4,
      "laenge_korrektur" : 4,
      "sr_bem" : null,
      "wd_bem" : null,
      "lage_sr" : {
        "$self" : "/VERDIS_GRUNDIS.SATZUNG/1183",
        "id" : 1183,
        "sr_klasse" : {
          "$self" : "/VERDIS_GRUNDIS.STRASSENREINIGUNG/2",
          "id" : 2,
          "name" : "Straßenreinigung (Klasse Z1 10 x wöchentlich)",
          "schluessel" : 306,
          "key" : "Z1"
        },
        "sr_bem" : null,
        "wd_prio" : null,
        "wd_bem" : null,
        "strasse" : {
          "$self" : "/VERDIS_GRUNDIS.STRASSE/884",
          "id" : 884,
          "name" : "Johannes-Rau-Platz",
          "schluessel" : 1730
        }
      },
      "lage_wd" : null,
      "garage_stellplatz" : null,
      "baulasten" : null,
      "grunddienstbarkeit" : null,
      "anteil" : null,
      "quadratwurzel" : null,
      "winkel" : null
    },
    "nummer" : 35,
    "bearbeitet_durch" : null,
    "erfassungsdatum" : "2014-01-09"
  }, {
    "$self" : "/VERDIS_GRUNDIS.FRONT/43796",
    "id" : 43796,
    "frontinfo" : {
      "$self" : "/VERDIS_GRUNDIS.FRONTINFO/43772",
      "id" : 43772,
      "strasse" : {
        "$self" : "/VERDIS_GRUNDIS.STRASSE/884",
        "id" : 884,
        "name" : "Johannes-Rau-Platz",
        "schluessel" : 1730
      },
      "sr_klasse_or" : {
        "$self" : "/VERDIS_GRUNDIS.STRASSENREINIGUNG/15",
        "id" : 15,
        "name" : "keine Straßenreinigung",
        "schluessel" : -100,
        "key" : null
      },
      "wd_prio_or" : {
        "$self" : "/VERDIS_GRUNDIS.WINTERDIENST/3",
        "id" : 3,
        "name" : "kein Winterdienst",
        "schluessel" : -200,
        "key" : null
      },
      "geometrie" : {
        "$self" : "/VERDIS_GRUNDIS.GEOM/867312",
        "geo_field" : "SRID=25832;LINESTRING (374421.15199990454 5681593.092999545, 374418.5779999073 5681600.110999544)",
        "id" : 867312
      },
      "wd_veranlagung" : null,
      "sr_veranlagung" : null,
      "laenge_grafik" : 7,
      "laenge_korrektur" : 7,
      "sr_bem" : null,
      "wd_bem" : null,
      "lage_sr" : {
        "$self" : "/VERDIS_GRUNDIS.SATZUNG/1183",
        "id" : 1183,
        "sr_klasse" : {
          "$self" : "/VERDIS_GRUNDIS.STRASSENREINIGUNG/2",
          "id" : 2,
          "name" : "Straßenreinigung (Klasse Z1 10 x wöchentlich)",
          "schluessel" : 306,
          "key" : "Z1"
        },
        "sr_bem" : null,
        "wd_prio" : null,
        "wd_bem" : null,
        "strasse" : {
          "$self" : "/VERDIS_GRUNDIS.STRASSE/884",
          "id" : 884,
          "name" : "Johannes-Rau-Platz",
          "schluessel" : 1730
        }
      },
      "lage_wd" : null,
      "garage_stellplatz" : null,
      "baulasten" : null,
      "grunddienstbarkeit" : null,
      "anteil" : null,
      "quadratwurzel" : null,
      "winkel" : null
    },
    "nummer" : 36,
    "bearbeitet_durch" : null,
    "erfassungsdatum" : "2014-01-09"
  }, {
    "$self" : "/VERDIS_GRUNDIS.FRONT/43797",
    "id" : 43797,
    "frontinfo" : {
      "$self" : "/VERDIS_GRUNDIS.FRONTINFO/43773",
      "id" : 43773,
      "strasse" : {
        "$self" : "/VERDIS_GRUNDIS.STRASSE/884",
        "id" : 884,
        "name" : "Johannes-Rau-Platz",
        "schluessel" : 1730
      },
      "sr_klasse_or" : {
        "$self" : "/VERDIS_GRUNDIS.STRASSENREINIGUNG/15",
        "id" : 15,
        "name" : "keine Straßenreinigung",
        "schluessel" : -100,
        "key" : null
      },
      "wd_prio_or" : {
        "$self" : "/VERDIS_GRUNDIS.WINTERDIENST/3",
        "id" : 3,
        "name" : "kein Winterdienst",
        "schluessel" : -200,
        "key" : null
      },
      "geometrie" : {
        "$self" : "/VERDIS_GRUNDIS.GEOM/867313",
        "geo_field" : "SRID=25832;LINESTRING (374410.01299990586 5681575.352999545, 374415.3289999056 5681577.195999546, 374415.21399990725 5681577.570999547, 374425.4219999041 5681581.534999546)",
        "id" : 867313
      },
      "wd_veranlagung" : null,
      "sr_veranlagung" : null,
      "laenge_grafik" : 16,
      "laenge_korrektur" : 16,
      "sr_bem" : null,
      "wd_bem" : null,
      "lage_sr" : {
        "$self" : "/VERDIS_GRUNDIS.SATZUNG/1183",
        "id" : 1183,
        "sr_klasse" : {
          "$self" : "/VERDIS_GRUNDIS.STRASSENREINIGUNG/2",
          "id" : 2,
          "name" : "Straßenreinigung (Klasse Z1 10 x wöchentlich)",
          "schluessel" : 306,
          "key" : "Z1"
        },
        "sr_bem" : null,
        "wd_prio" : null,
        "wd_bem" : null,
        "strasse" : {
          "$self" : "/VERDIS_GRUNDIS.STRASSE/884",
          "id" : 884,
          "name" : "Johannes-Rau-Platz",
          "schluessel" : 1730
        }
      },
      "lage_wd" : null,
      "garage_stellplatz" : null,
      "baulasten" : null,
      "grunddienstbarkeit" : null,
      "anteil" : null,
      "quadratwurzel" : null,
      "winkel" : null
    },
    "nummer" : 37,
    "bearbeitet_durch" : null,
    "erfassungsdatum" : "2014-01-09"
  }, {
    "$self" : "/VERDIS_GRUNDIS.FRONT/43798",
    "id" : 43798,
    "frontinfo" : {
      "$self" : "/VERDIS_GRUNDIS.FRONTINFO/43774",
      "id" : 43774,
      "strasse" : {
        "$self" : "/VERDIS_GRUNDIS.STRASSE/884",
        "id" : 884,
        "name" : "Johannes-Rau-Platz",
        "schluessel" : 1730
      },
      "sr_klasse_or" : {
        "$self" : "/VERDIS_GRUNDIS.STRASSENREINIGUNG/15",
        "id" : 15,
        "name" : "keine Straßenreinigung",
        "schluessel" : -100,
        "key" : null
      },
      "wd_prio_or" : {
        "$self" : "/VERDIS_GRUNDIS.WINTERDIENST/3",
        "id" : 3,
        "name" : "kein Winterdienst",
        "schluessel" : -200,
        "key" : null
      },
      "geometrie" : {
        "$self" : "/VERDIS_GRUNDIS.GEOM/867314",
        "geo_field" : "SRID=25832;LINESTRING (374483.9049999072 5681599.396999545, 374502.2949999078 5681606.125999546)",
        "id" : 867314
      },
      "wd_veranlagung" : null,
      "sr_veranlagung" : null,
      "laenge_grafik" : 19,
      "laenge_korrektur" : 19,
      "sr_bem" : null,
      "wd_bem" : null,
      "lage_sr" : {
        "$self" : "/VERDIS_GRUNDIS.SATZUNG/1183",
        "id" : 1183,
        "sr_klasse" : {
          "$self" : "/VERDIS_GRUNDIS.STRASSENREINIGUNG/2",
          "id" : 2,
          "name" : "Straßenreinigung (Klasse Z1 10 x wöchentlich)",
          "schluessel" : 306,
          "key" : "Z1"
        },
        "sr_bem" : null,
        "wd_prio" : null,
        "wd_bem" : null,
        "strasse" : {
          "$self" : "/VERDIS_GRUNDIS.STRASSE/884",
          "id" : 884,
          "name" : "Johannes-Rau-Platz",
          "schluessel" : 1730
        }
      },
      "lage_wd" : null,
      "garage_stellplatz" : null,
      "baulasten" : null,
      "grunddienstbarkeit" : null,
      "anteil" : null,
      "quadratwurzel" : null,
      "winkel" : null
    },
    "nummer" : 38,
    "bearbeitet_durch" : null,
    "erfassungsdatum" : "2014-01-09"
  } ],
  "bemerkung_zu_abgaben" : null,
  "grundsteuer" : {
    "$self" : "/VERDIS_GRUNDIS.GRUNDSTEUER/2",
    "id" : 2,
    "name" : "Grundsteuer B (Hebesatz 490%)",
    "schluessel" : 105
  },
  "schmutzwasser" : {
    "$self" : "/VERDIS_GRUNDIS.SCHMUTZWASSER/1",
    "id" : 1,
    "name" : "Schmutzwasser (Wupperverbandsmitglieder)",
    "schluessel" : 210
  },
  "abfallgebuehr" : null,
  "kassenzeichennummer" : 6067045,
  "kassenzeichennummer7" : 6067045,
  "kassenzeichennummer8" : 60670411,
  "kassenzeichen_geometrien" : [ {
    "$self" : "/VERDIS_GRUNDIS.KASSENZEICHEN_GEOMETRIE/27594",
    "id" : 27594,
    "kassenzeichen" : null,
    "istfrei" : false,
    "name" : "053001-117-00036",
    "geometrie" : {
      "$self" : "/VERDIS_GRUNDIS.GEOM/867018",
      "geo_field" : "SRID=25832;POLYGON ((374502.27761753276 5681606.162045138, 374505.1488495618 5681595.341083332, 374506.81451598555 5681589.060655922, 374510.2935945466 5681575.946640868, 374511.02377030626 5681573.193813246, 374511.11879558116 5681572.761838523, 374495.4563235566 5681568.038427499, 374438.7679605931 5681547.152865746, 374423.3791019656 5681541.437862898, 374422.38100514933 5681544.18972202, 374419.93976388127 5681550.802374538, 374419.6647699997 5681550.693376753, 374418.1536286436 5681554.452172402, 374417.4485613778 5681556.206075582, 374416.63148228824 5681558.240962018, 374413.95621738955 5681565.154576038, 374409.9968518391 5681575.3890118245, 374415.31273401156 5681577.231976485, 374415.1977225393 5681577.606956169, 374422.4425518811 5681580.4198963465, 374425.4054840654 5681581.570874339, 374435.05941752717 5681581.786001129, 374475.18276104704 5681596.737912651, 374483.8876631595 5681599.432937932, 374486.8286241777 5681600.525937648, 374494.1685774438 5681603.253963112, 374494.2235936597 5681603.111977071, 374502.27761753276 5681606.162045138))",
      "id" : 867018
    }
  }, {
    "$self" : "/VERDIS_GRUNDIS.KASSENZEICHEN_GEOMETRIE/27595",
    "id" : 27595,
    "kassenzeichen" : null,
    "istfrei" : false,
    "name" : "053001-117-00059",
    "geometrie" : {
      "$self" : "/VERDIS_GRUNDIS.GEOM/867017",
      "geo_field" : "SRID=25832;POLYGON ((374524.4887682907 5681723.202126342, 374531.2613808438 5681710.70221362, 374546.0142553076 5681683.478645794, 374547.089165505 5681681.511679817, 374535.8942697868 5681681.733651408, 374513.83335081115 5681681.69358282, 374507.9873478338 5681681.605561467, 374494.1223215908 5681681.564476914, 374489.7533177957 5681681.984432405, 374486.3653165214 5681682.451392199, 374482.9983176887 5681683.036348354, 374481.61631913483 5681683.32932895, 374482.1392788403 5681681.356365869, 374487.3008950092 5681662.162772203, 374498.7011781074 5681619.527796837, 374497.64918008447 5681619.196793346, 374496.6191926263 5681618.2298125485, 374489.5174621977 5681615.578908771, 374489.6094708517 5681615.374920816, 374482.41974005103 5681612.765013145, 374479.4038413875 5681611.671044878, 374475.6906811595 5681621.697613416, 374469.7828418799 5681619.482644933, 374465.5269568339 5681617.88866804, 374465.81896131486 5681617.120697849, 374466.6229757555 5681615.006781573, 374467.00198449194 5681614.012822261, 374464.4760553688 5681613.067839411, 374460.9691519141 5681611.754862293, 374461.77119003236 5681609.64196178, 374461.3642019294 5681609.458965861, 374462.4772937298 5681606.256133917, 374458.43339689076 5681604.729159216, 374459.24947003275 5681602.578280693, 374458.8914786242 5681602.442282755, 374443.7808222994 5681596.72736277, 374443.27383355424 5681596.534365481, 374442.42477683723 5681598.690248348, 374438.3898705654 5681597.167271408, 374437.23280370235 5681600.692096106, 374436.7648152262 5681600.501099537, 374435.87578983605 5681602.276009313, 374432.5398675874 5681601.007028112, 374429.8429291658 5681599.982043085, 374428.4008669257 5681603.871848437, 374424.28995543346 5681602.314867571, 374419.17606222257 5681600.378890765, 374418.56107482314 5681600.145893537, 374421.13520621136 5681593.128258673, 374418.2522684969 5681592.028275919, 374410.97142097726 5681589.252320733, 374410.75841203704 5681589.681296733, 374395.5637136847 5681583.890407883, 374390.96348537505 5681595.892697137, 374390.32045548037 5681597.570597975, 374389.2424061373 5681600.3854323365, 374388.6023773216 5681602.0573343765, 374381.99309873953 5681619.301338427, 374370.0229311362 5681650.540765166, 374369.60798271 5681651.622748979, 374369.10218789056 5681654.895780766, 374369.5144154541 5681657.870895146, 374370.62066873536 5681660.697059654, 374372.2549240738 5681663.202240759, 374375.98640599474 5681667.587586156, 374385.32265358046 5681678.559413084, 374387.1738842726 5681680.514557656, 374388.44502814114 5681681.743646748, 374391.2222878374 5681684.071805249, 374395.09152558446 5681686.68494599, 374399.8526408933 5681689.332009833, 374403.5665542297 5681690.8509694515, 374437.97135195136 5681702.146350034, 374449.68246727064 5681705.992627194, 374493.84932112694 5681720.436148765, 374493.94131807983 5681720.263148982, 374518.68802381307 5681733.906126277, 374524.4887682907 5681723.202126342))",
      "id" : 867017
    }
  } ],
  "veranlagungszettel" : "<hr>   <h3>Datum: 09.01.2014</h3>   <center>      <table cellspacing=\"10\">         <thead>            <tr>               <th align=\"left\">ABS</th>               <th align=\"right\">alt</th>               <th align=\"right\">neu</th>               <th align=\"center\">Monat VA</th>               <th align=\"center\">Jahr VA</th>            </tr>         </thead>         <tbody>            <tr>               <td align=\"left\">Z1-306</td>               <td align=\"right\">199.0</td>               <td align=\"right\">343.0</td>               <td align=\"center\">02</td>               <td align=\"center\">2014</td>            </tr>            <tr>               <td align=\"left\">null--200</td>               <td align=\"right\">302.0</td>               <td align=\"right\">446.0</td>               <td align=\"center\">02</td>               <td align=\"center\">2014</td>            </tr>         </tbody>      </table><hr>   <h3>Datum: 08.01.2014</h3>   <center>      <table cellspacing=\"10\">         <thead>            <tr>               <th align=\"left\">ABS</th>               <th align=\"right\">alt</th>               <th align=\"right\">neu</th>               <th align=\"center\">Monat VA</th>               <th align=\"center\">Jahr VA</th>            </tr>         </thead>         <tbody>            <tr>               <td align=\"left\">A1-305</td>               <td align=\"right\">0.0</td>               <td align=\"right\">103.0</td>               <td align=\"center\">02</td>               <td align=\"center\">2014</td>            </tr>            <tr>               <td align=\"left\">Z1-306</td>               <td align=\"right\">102.0</td>               <td align=\"right\">199.0</td>               <td align=\"center\">02</td>               <td align=\"center\">2014</td>            </tr>            <tr>               <td align=\"left\">null--200</td>               <td align=\"right\">102.0</td>               <td align=\"right\">302.0</td>               <td align=\"center\">02</td>               <td align=\"center\">2014</td>            </tr>         </tbody>      </table><hr>   <h3>Datum: 08.01.2014</h3>   <center>      <table cellspacing=\"10\">         <thead>            <tr>               <th align=\"left\">ABS</th>               <th align=\"right\">alt</th>               <th align=\"right\">neu</th>               <th align=\"center\">Monat VA</th>               <th align=\"center\">Jahr VA</th>            </tr>         </thead>         <tbody>         </tbody>      </table>"
});
    md.set(61156717,{
  "$self" : "/VERDIS_GRUNDIS.KASSENZEICHEN/9144",
  "id" : 9144,
  "datum_erfassung" : "2005-12-12",
  "datum_veranlagung" : "06/01",
  "bemerkung" : null,
  "sperre" : true,
  "bemerkung_sperre" : "beim letzten Speichern nicht veranlagt",
  "dms_urls" : [ {
    "$self" : "/VERDIS_GRUNDIS.DMS_URL/3",
    "id" : 3,
    "typ" : 0,
    "name" : "DMS",
    "description" : "DMS Link",
    "url_id" : {
      "$self" : "/VERDIS_GRUNDIS.URL/3",
      "id" : 3,
      "url_base_id" : {
        "$self" : "/VERDIS_GRUNDIS.URL_BASE/1",
        "id" : 1,
        "prot_prefix" : "http://",
        "server" : "s4021029",
        "path" : "/weblink/default.asp?Mode=SearchDirect&Channel=WTAL&Archive=VORN&Query="
      },
      "object_name" : ""
    }
  }, {
    "$self" : "/VERDIS_GRUNDIS.DMS_URL/238331",
    "id" : 238331,
    "typ" : 2,
    "name" : "24.02.2006 EF",
    "description" : null,
    "url_id" : {
      "$self" : "/VERDIS_GRUNDIS.URL/53567",
      "id" : 53567,
      "url_base_id" : {
        "$self" : "/VERDIS_GRUNDIS.URL_BASE/302",
        "id" : 302,
        "prot_prefix" : "\\\\",
        "server" : "s402x023",
        "path" : "\\EasyArchiv-Migration$\\Export_2012_01.113\\"
      },
      "object_name" : "393.TIF"
    }
  }, {
    "$self" : "/VERDIS_GRUNDIS.DMS_URL/239194",
    "id" : 239194,
    "typ" : 2,
    "name" : "24.01.2006 EF",
    "description" : null,
    "url_id" : {
      "$self" : "/VERDIS_GRUNDIS.URL/54411",
      "id" : 54411,
      "url_base_id" : {
        "$self" : "/VERDIS_GRUNDIS.URL_BASE/304",
        "id" : 304,
        "prot_prefix" : "\\\\",
        "server" : "s402x023",
        "path" : "\\EasyArchiv-Migration$\\Export_2012_01.115\\"
      },
      "object_name" : "294.TIF"
    }
  } ],
  "flaechen" : [ {
    "$self" : "/VERDIS_GRUNDIS.FLAECHE/589306",
    "id" : 589306,
    "flaecheninfo" : {
      "$self" : "/VERDIS_GRUNDIS.FLAECHENINFO/588031",
      "id" : 588031,
      "groesse_aus_grafik" : 1546,
      "groesse_korrektur" : 1546,
      "flaechenart" : {
        "$self" : "/VERDIS_GRUNDIS.FLAECHENART/3",
        "id" : 3,
        "art" : "versiegelte Fläche",
        "art_abkuerzung" : "VF"
      },
      "anschlussgrad" : {
        "$self" : "/VERDIS_GRUNDIS.ANSCHLUSSGRAD/1",
        "id" : 1,
        "grad" : "Am Kanal angeschlossen",
        "grad_abkuerzung" : "angeschl."
      },
      "geometrie" : {
        "$self" : "/VERDIS_GRUNDIS.GEOM/645411",
        "geo_field" : "SRID=25832;POLYGON ((374439.5554799959 5681567.720536469, 374438.39448772743 5681567.78605602, 374438.0724262409 5681567.667079637, 374434.2623569891 5681577.528394472, 374434.36597629264 5681577.542051821, 374435.19420965016 5681578.025572209, 374435.333379332 5681579.0315048685, 374435.154907722 5681579.926294559, 374434.4943927154 5681580.704731621, 374433.6241063848 5681580.906350686, 374432.78270668164 5681580.588492818, 374432.8059316352 5681581.621155015, 374434.96601138264 5681581.668937244, 374469.2326382175 5681594.439796841, 374475.09103160724 5681596.622866331, 374476.0538574457 5681596.920669707, 374475.1882657446 5681595.792339859, 374475.3386892006 5681594.553538565, 374475.91629067436 5681593.461288877, 374477.43860441074 5681593.107976424, 374478.2894255556 5681593.410356416, 374481.2738425173 5681584.546514233, 374480.8798723221 5681584.382577734, 374480.18720213324 5681583.299179341, 374480.2343660034 5681582.055464767, 374480.9090755917 5681581.036404524, 374482.16259363666 5681580.49484494, 374483.14172324166 5681580.608034668, 374488.05877794325 5681565.228353712, 374445.57306130975 5681549.574482283, 374439.46791289374 5681564.285203303, 374439.7840261273 5681564.427346386, 374440.2597989924 5681564.905328245, 374440.4281002134 5681565.839809197, 374440.2081945427 5681566.924526604, 374439.5554799959 5681567.720536469))",
        "id" : 645411
      },
      "beschreibung" : null
    },
    "anteil" : null,
    "flaechenbezeichnung" : "A",
    "bemerkung" : null,
    "datum_erfassung" : "2003-01-01",
    "datum_veranlagung" : "03/01",
    "sperre" : null,
    "bemerkung_sperre" : "",
    "feb_id" : "20006383"
  }, {
    "$self" : "/VERDIS_GRUNDIS.FLAECHE/589308",
    "id" : 589308,
    "flaecheninfo" : {
      "$self" : "/VERDIS_GRUNDIS.FLAECHENINFO/588033",
      "id" : 588033,
      "groesse_aus_grafik" : 239,
      "groesse_korrektur" : 239,
      "flaechenart" : {
        "$self" : "/VERDIS_GRUNDIS.FLAECHENART/3",
        "id" : 3,
        "art" : "versiegelte Fläche",
        "art_abkuerzung" : "VF"
      },
      "anschlussgrad" : {
        "$self" : "/VERDIS_GRUNDIS.ANSCHLUSSGRAD/1",
        "id" : 1,
        "grad" : "Am Kanal angeschlossen",
        "grad_abkuerzung" : "angeschl."
      },
      "geometrie" : {
        "$self" : "/VERDIS_GRUNDIS.GEOM/645413",
        "geo_field" : "SRID=25832;POLYGON ((374431.8962897733 5681580.09952266, 374431.4870610237 5681579.416796412, 374431.45168879256 5681578.697733124, 374432.29014538974 5681577.767960037, 374433.2483806163 5681577.392776973, 374434.2623569891 5681577.528394472, 374438.0724262409 5681567.667079637, 374438.03479245305 5681567.653707817, 374437.3305888474 5681567.095043436, 374436.9792965986 5681566.407153697, 374436.7855734788 5681565.607525757, 374437.0014029592 5681564.91528505, 374437.8189559616 5681564.162486524, 374438.7126265541 5681563.9448161535, 374439.46791289374 5681564.285203303, 374445.57306130975 5681549.574482283, 374438.67136988044 5681547.031868597, 374438.5758215673 5681546.996821491, 374433.09453418106 5681562.0382086905, 374432.83288258687 5681561.951801548, 374425.3569621183 5681581.455335784, 374432.8059316352 5681581.621155015, 374432.78270668164 5681580.588492818, 374432.1932844892 5681580.366569534, 374431.8962897733 5681580.09952266))",
        "id" : 645413
      },
      "beschreibung" : null
    },
    "anteil" : null,
    "flaechenbezeichnung" : "I",
    "bemerkung" : null,
    "datum_erfassung" : "2003-01-01",
    "datum_veranlagung" : "03/01",
    "sperre" : null,
    "bemerkung_sperre" : "",
    "feb_id" : "20006383"
  }, {
    "$self" : "/VERDIS_GRUNDIS.FLAECHE/589309",
    "id" : 589309,
    "flaecheninfo" : {
      "$self" : "/VERDIS_GRUNDIS.FLAECHENINFO/588034",
      "id" : 588034,
      "groesse_aus_grafik" : 230,
      "groesse_korrektur" : 230,
      "flaechenart" : {
        "$self" : "/VERDIS_GRUNDIS.FLAECHENART/3",
        "id" : 3,
        "art" : "versiegelte Fläche",
        "art_abkuerzung" : "VF"
      },
      "anschlussgrad" : {
        "$self" : "/VERDIS_GRUNDIS.ANSCHLUSSGRAD/1",
        "id" : 1,
        "grad" : "Am Kanal angeschlossen",
        "grad_abkuerzung" : "angeschl."
      },
      "geometrie" : {
        "$self" : "/VERDIS_GRUNDIS.GEOM/645414",
        "geo_field" : "SRID=25832;POLYGON ((374479.5422113836 5681596.542004206, 374478.84659134224 5681597.172776898, 374477.8769935854 5681597.438462312, 374476.4966706075 5681597.057636738, 374483.78071465343 5681599.313460022, 374489.93050139025 5681582.934060448, 374489.61375629157 5681582.821947821, 374495.4802409783 5681567.954946394, 374495.35870295763 5681567.917792546, 374490.9123304486 5681566.279557934, 374488.05877794325 5681565.228353712, 374483.14172324166 5681580.608034668, 374483.4373814836 5681580.641987728, 374484.73260979727 5681581.366417152, 374485.1288314238 5681582.464910507, 374484.853917405 5681583.794901952, 374484.1781960204 5681584.739082365, 374483.6352776475 5681584.87029258, 374481.9851941429 5681584.842665349, 374481.2738425173 5681584.546514233, 374478.2894255556 5681593.410356416, 374478.922917258 5681593.634581426, 374479.92013848573 5681594.750637478, 374479.5422113836 5681596.542004206))",
        "id" : 645414
      },
      "beschreibung" : null
    },
    "anteil" : null,
    "flaechenbezeichnung" : "J",
    "bemerkung" : null,
    "datum_erfassung" : "2003-01-01",
    "datum_veranlagung" : "03/01",
    "sperre" : null,
    "bemerkung_sperre" : "",
    "feb_id" : "20006383"
  }, {
    "$self" : "/VERDIS_GRUNDIS.FLAECHE/589310",
    "id" : 589310,
    "flaecheninfo" : {
      "$self" : "/VERDIS_GRUNDIS.FLAECHENINFO/588035",
      "id" : 588035,
      "groesse_aus_grafik" : 46,
      "groesse_korrektur" : 46,
      "flaechenart" : {
        "$self" : "/VERDIS_GRUNDIS.FLAECHENART/3",
        "id" : 3,
        "art" : "versiegelte Fläche",
        "art_abkuerzung" : "VF"
      },
      "anschlussgrad" : {
        "$self" : "/VERDIS_GRUNDIS.ANSCHLUSSGRAD/1",
        "id" : 1,
        "grad" : "Am Kanal angeschlossen",
        "grad_abkuerzung" : "angeschl."
      },
      "geometrie" : {
        "$self" : "/VERDIS_GRUNDIS.GEOM/645415",
        "geo_field" : "SRID=25832;POLYGON ((374500.94374744594 5681586.22225299, 374498.47827313095 5681592.678579424, 374505.1110393852 5681595.010922649, 374506.83423900977 5681588.508901096, 374506.86464464664 5681588.395650592, 374500.94374744594 5681586.22225299))",
        "id" : 645415
      },
      "beschreibung" : null
    },
    "anteil" : null,
    "flaechenbezeichnung" : "T",
    "bemerkung" : null,
    "datum_erfassung" : "2003-01-01",
    "datum_veranlagung" : "03/01",
    "sperre" : null,
    "bemerkung_sperre" : "",
    "feb_id" : "20006383"
  }, {
    "$self" : "/VERDIS_GRUNDIS.FLAECHE/589317",
    "id" : 589317,
    "flaecheninfo" : {
      "$self" : "/VERDIS_GRUNDIS.FLAECHENINFO/588042",
      "id" : 588042,
      "groesse_aus_grafik" : 985,
      "groesse_korrektur" : 985,
      "flaechenart" : {
        "$self" : "/VERDIS_GRUNDIS.FLAECHENART/5",
        "id" : 5,
        "art" : "städtische Straßenfläche",
        "art_abkuerzung" : "VFS"
      },
      "anschlussgrad" : {
        "$self" : "/VERDIS_GRUNDIS.ANSCHLUSSGRAD/1",
        "id" : 1,
        "grad" : "Am Kanal angeschlossen",
        "grad_abkuerzung" : "angeschl."
      },
      "geometrie" : {
        "$self" : "/VERDIS_GRUNDIS.GEOM/645422",
        "geo_field" : "SRID=25832;POLYGON ((374387.9429201931 5681568.848268679, 374387.49958529323 5681569.992998199, 374390.7719510421 5681572.501814943, 374392.59158809483 5681575.8723274395, 374392.95007653907 5681578.472271595, 374392.4776333459 5681582.4277281985, 374387.1487290077 5681596.15626505, 374369.2589869462 5681642.794442383, 374366.2983141877 5681650.821105755, 374365.6722006202 5681653.886394626, 374365.78159114346 5681656.511418823, 374366.2223395072 5681659.487065104, 374367.4360504113 5681662.323023122, 374369.1596766934 5681665.081296677, 374371.2057704814 5681667.525962462, 374373.5636382215 5681670.398277476, 374374.44496824965 5681668.141103344, 374376.58572147787 5681667.249051013, 374372.9679620713 5681661.4325167155, 374372.8163210787 5681661.447846657, 374371.7524757832 5681660.854874274, 374371.5482660234 5681660.117927075, 374371.8295715377 5681659.362999561, 374372.7150700353 5681658.944562484, 374373.11673747376 5681655.139985065, 374369.21353084594 5681653.768674584, 374369.1678135134 5681652.946973117, 374370.1988351308 5681650.900792174, 374370.9518086463 5681651.038121747, 374382.722749874 5681619.726474678, 374381.918898426 5681619.402056061, 374388.46066151187 5681602.1321100285, 374393.7389090322 5681604.043443711, 374396.200482592 5681597.614259453, 374390.8847749345 5681595.543243158, 374395.36884377897 5681584.033500297, 374410.3942734562 5681589.685055889, 374415.10429142043 5681577.489753073, 374415.2190464325 5681577.1149315145, 374409.90283014625 5681575.272039726, 374399.93958670646 5681571.416714992, 374400.85379388556 5681569.057920839, 374397.57018138096 5681567.791348559, 374396.82447218895 5681567.466600674, 374406.1532164663 5681543.72602721, 374405.9230458252 5681543.648398069, 374408.0707369931 5681538.156622165, 374402.880688224 5681532.353222269, 374397.1652538888 5681547.176089387, 374394.3957727365 5681554.220400644, 374391.95603493974 5681560.623539395, 374392.3201360032 5681560.767820269, 374388.9947732352 5681569.121366617, 374387.9920147173 5681568.72717137, 374387.9429201931 5681568.848268679))",
        "id" : 645422
      },
      "beschreibung" : null
    },
    "anteil" : null,
    "flaechenbezeichnung" : "D",
    "bemerkung" : null,
    "datum_erfassung" : "2003-01-01",
    "datum_veranlagung" : "03/01",
    "sperre" : null,
    "bemerkung_sperre" : "",
    "feb_id" : "20113214"
  }, {
    "$self" : "/VERDIS_GRUNDIS.FLAECHE/589327",
    "id" : 589327,
    "flaecheninfo" : {
      "$self" : "/VERDIS_GRUNDIS.FLAECHENINFO/588052",
      "id" : 588052,
      "groesse_aus_grafik" : 1071,
      "groesse_korrektur" : 1071,
      "flaechenart" : {
        "$self" : "/VERDIS_GRUNDIS.FLAECHENART/5",
        "id" : 5,
        "art" : "städtische Straßenfläche",
        "art_abkuerzung" : "VFS"
      },
      "anschlussgrad" : {
        "$self" : "/VERDIS_GRUNDIS.ANSCHLUSSGRAD/1",
        "id" : 1,
        "grad" : "Am Kanal angeschlossen",
        "grad_abkuerzung" : "angeschl."
      },
      "geometrie" : {
        "$self" : "/VERDIS_GRUNDIS.GEOM/645432",
        "geo_field" : "SRID=25832;POLYGON ((374346.14688262716 5681681.316359656, 374350.22668423876 5681687.568123183, 374351.59434862435 5681684.038349562, 374355.6751124151 5681673.635869407, 374356.5160426721 5681671.492363722, 374357.5989337526 5681670.298394082, 374359.12479969487 5681669.463529267, 374360.7492187619 5681669.1110597085, 374362.39571850374 5681669.14384544, 374363.9117484614 5681669.933405629, 374365.60660629347 5681672.079322366, 374365.82713197544 5681672.358436429, 374370.3864017278 5681678.538660744, 374373.5636382215 5681670.398277476, 374371.2057704814 5681667.525962462, 374369.1596766934 5681665.081296677, 374367.4360504113 5681662.323023122, 374366.2223395072 5681659.487065104, 374365.78159114346 5681656.511418823, 374365.6722006202 5681653.886394626, 374366.2983141877 5681650.821105755, 374369.2589869462 5681642.794442383, 374387.1487290077 5681596.15626505, 374392.4776333459 5681582.4277281985, 374392.95007653907 5681578.472271595, 374392.59158809483 5681575.8723274395, 374390.7719510421 5681572.501814943, 374387.5310035758 5681570.004760149, 374387.49958529323 5681569.992998199, 374384.03533953056 5681578.942644319, 374382.991331283 5681581.645753867, 374383.25246158615 5681583.163880903, 374382.2830330543 5681587.449025372, 374375.55601776764 5681605.20291909, 374362.76268672943 5681637.569868953, 374359.09749912843 5681647.333229492, 374358.23076179996 5681648.821411909, 374356.9978670366 5681649.60032556, 374356.46152357385 5681649.74730216, 374352.2294073999 5681660.500313852, 374352.71504148096 5681662.518602611, 374351.74121065065 5681666.795699264, 374347.0012127161 5681679.1082139285, 374346.14688262716 5681681.316359656))",
        "id" : 645432
      },
      "beschreibung" : null
    },
    "anteil" : null,
    "flaechenbezeichnung" : "C",
    "bemerkung" : null,
    "datum_erfassung" : "2003-01-01",
    "datum_veranlagung" : "03/01",
    "sperre" : null,
    "bemerkung_sperre" : "",
    "feb_id" : "20113214"
  }, {
    "$self" : "/VERDIS_GRUNDIS.FLAECHE/589328",
    "id" : 589328,
    "flaecheninfo" : {
      "$self" : "/VERDIS_GRUNDIS.FLAECHENINFO/588053",
      "id" : 588053,
      "groesse_aus_grafik" : 62,
      "groesse_korrektur" : 62,
      "flaechenart" : {
        "$self" : "/VERDIS_GRUNDIS.FLAECHENART/5",
        "id" : 5,
        "art" : "städtische Straßenfläche",
        "art_abkuerzung" : "VFS"
      },
      "anschlussgrad" : {
        "$self" : "/VERDIS_GRUNDIS.ANSCHLUSSGRAD/1",
        "id" : 1,
        "grad" : "Am Kanal angeschlossen",
        "grad_abkuerzung" : "angeschl."
      },
      "geometrie" : {
        "$self" : "/VERDIS_GRUNDIS.GEOM/645433",
        "geo_field" : "SRID=25832;POLYGON ((374382.35129633546 5681584.12827761, 374381.64401592314 5681588.534658919, 374381.0451588668 5681590.059977049, 374380.54188472405 5681589.889515551, 374373.34919618815 5681608.246716654, 374366.96308570355 5681624.5078436155, 374363.6593929082 5681633.000677598, 374358.5576129034 5681646.144635446, 374358.02175860107 5681645.934320505, 374357.7229719795 5681646.703941791, 374356.49323253334 5681649.665866958, 374356.46152357385 5681649.74730216, 374356.9978670366 5681649.60032556, 374358.23076179996 5681648.821411909, 374359.09749912843 5681647.333229492, 374362.76268672943 5681637.569868953, 374375.55601776764 5681605.20291909, 374382.2830330543 5681587.449025372, 374383.25246158615 5681583.163880903, 374382.991331283 5681581.645753867, 374382.20766341686 5681583.673998412, 374382.35129633546 5681584.12827761))",
        "id" : 645433
      },
      "beschreibung" : null
    },
    "anteil" : null,
    "flaechenbezeichnung" : "R",
    "bemerkung" : null,
    "datum_erfassung" : "2003-01-01",
    "datum_veranlagung" : "03/01",
    "sperre" : null,
    "bemerkung_sperre" : "",
    "feb_id" : "20113214"
  }, {
    "$self" : "/VERDIS_GRUNDIS.FLAECHE/589329",
    "id" : 589329,
    "flaecheninfo" : {
      "$self" : "/VERDIS_GRUNDIS.FLAECHENINFO/588054",
      "id" : 588054,
      "groesse_aus_grafik" : 21,
      "groesse_korrektur" : 21,
      "flaechenart" : {
        "$self" : "/VERDIS_GRUNDIS.FLAECHENART/5",
        "id" : 5,
        "art" : "städtische Straßenfläche",
        "art_abkuerzung" : "VFS"
      },
      "anschlussgrad" : {
        "$self" : "/VERDIS_GRUNDIS.ANSCHLUSSGRAD/1",
        "id" : 1,
        "grad" : "Am Kanal angeschlossen",
        "grad_abkuerzung" : "angeschl."
      },
      "geometrie" : {
        "$self" : "/VERDIS_GRUNDIS.GEOM/645434",
        "geo_field" : "SRID=25832;POLYGON ((374346.190253105 5681678.729110025, 374345.1463636011 5681678.305478732, 374345.1279029995 5681678.346302216, 374344.77832169086 5681679.218997845, 374346.14688262716 5681681.316359656, 374347.0012127161 5681679.1082139285, 374351.74121065065 5681666.795699264, 374352.71504148096 5681662.518602611, 374352.2294073999 5681660.500313852, 374350.630265262 5681664.562741683, 374351.55316111445 5681664.935406301, 374346.190253105 5681678.729110025))",
        "id" : 645434
      },
      "beschreibung" : null
    },
    "anteil" : null,
    "flaechenbezeichnung" : "V",
    "bemerkung" : null,
    "datum_erfassung" : "2003-01-01",
    "datum_veranlagung" : "03/01",
    "sperre" : null,
    "bemerkung_sperre" : "",
    "feb_id" : "20113214"
  }, {
    "$self" : "/VERDIS_GRUNDIS.FLAECHE/589330",
    "id" : 589330,
    "flaecheninfo" : {
      "$self" : "/VERDIS_GRUNDIS.FLAECHENINFO/588055",
      "id" : 588055,
      "groesse_aus_grafik" : 32,
      "groesse_korrektur" : 32,
      "flaechenart" : {
        "$self" : "/VERDIS_GRUNDIS.FLAECHENART/5",
        "id" : 5,
        "art" : "städtische Straßenfläche",
        "art_abkuerzung" : "VFS"
      },
      "anschlussgrad" : {
        "$self" : "/VERDIS_GRUNDIS.ANSCHLUSSGRAD/1",
        "id" : 1,
        "grad" : "Am Kanal angeschlossen",
        "grad_abkuerzung" : "angeschl."
      },
      "geometrie" : {
        "$self" : "/VERDIS_GRUNDIS.GEOM/645435",
        "geo_field" : "SRID=25832;POLYGON ((374360.7492187619 5681669.1110597085, 374359.12479969487 5681669.463529267, 374357.5989337526 5681670.298394082, 374356.5160426721 5681671.492363722, 374355.6751124151 5681673.635869407, 374359.8843050003 5681674.21528039, 374359.8631080687 5681674.13898994, 374360.08028177544 5681673.601944197, 374360.5686469488 5681673.18371381, 374361.1996348873 5681673.176934724, 374361.6443222165 5681673.577904436, 374361.6611367054 5681673.647292035, 374365.60660629347 5681672.079322366, 374363.9117484614 5681669.933405629, 374362.39571850374 5681669.14384544, 374360.7492187619 5681669.1110597085))",
        "id" : 645435
      },
      "beschreibung" : null
    },
    "anteil" : null,
    "flaechenbezeichnung" : "U",
    "bemerkung" : null,
    "datum_erfassung" : "2003-01-01",
    "datum_veranlagung" : "03/01",
    "sperre" : null,
    "bemerkung_sperre" : "",
    "feb_id" : "20113214"
  }, {
    "$self" : "/VERDIS_GRUNDIS.FLAECHE/589336",
    "id" : 589336,
    "flaecheninfo" : {
      "$self" : "/VERDIS_GRUNDIS.FLAECHENINFO/588061",
      "id" : 588061,
      "groesse_aus_grafik" : 134,
      "groesse_korrektur" : 134,
      "flaechenart" : {
        "$self" : "/VERDIS_GRUNDIS.FLAECHENART/5",
        "id" : 5,
        "art" : "städtische Straßenfläche",
        "art_abkuerzung" : "VFS"
      },
      "anschlussgrad" : {
        "$self" : "/VERDIS_GRUNDIS.ANSCHLUSSGRAD/1",
        "id" : 1,
        "grad" : "Am Kanal angeschlossen",
        "grad_abkuerzung" : "angeschl."
      },
      "geometrie" : {
        "$self" : "/VERDIS_GRUNDIS.GEOM/645441",
        "geo_field" : "SRID=25832;POLYGON ((374354.9008670114 5681689.683996593, 374357.38297807425 5681682.790188233, 374358.14996824414 5681681.701205516, 374359.11830665544 5681680.837139605, 374360.23851779103 5681680.410236304, 374361.14583949745 5681680.356196726, 374361.75991524756 5681680.346010336, 374362.7808068618 5681677.90404628, 374369.84194113314 5681679.9327761475, 374370.3864017278 5681678.538660744, 374365.82713197544 5681672.358436429, 374365.60660629347 5681672.079322366, 374361.6611367054 5681673.647292035, 374361.7763801925 5681674.113909589, 374361.5762554817 5681674.6303172475, 374361.17824184895 5681674.878799858, 374360.55436382815 5681674.845218632, 374360.3524556793 5681674.825515224, 374359.9567006901 5681674.49541608, 374359.8843050003 5681674.21528039, 374355.6751124151 5681673.635869407, 374351.59434862435 5681684.038349562, 374350.22668423876 5681687.568123183, 374350.6119805686 5681688.157698043, 374354.9008670114 5681689.683996593))",
        "id" : 645441
      },
      "beschreibung" : null
    },
    "anteil" : null,
    "flaechenbezeichnung" : "M",
    "bemerkung" : null,
    "datum_erfassung" : "2003-01-01",
    "datum_veranlagung" : "03/01",
    "sperre" : null,
    "bemerkung_sperre" : "",
    "feb_id" : "20113214"
  }, {
    "$self" : "/VERDIS_GRUNDIS.FLAECHE/589351",
    "id" : 589351,
    "flaecheninfo" : {
      "$self" : "/VERDIS_GRUNDIS.FLAECHENINFO/588076",
      "id" : 588076,
      "groesse_aus_grafik" : 1162,
      "groesse_korrektur" : 1162,
      "flaechenart" : {
        "$self" : "/VERDIS_GRUNDIS.FLAECHENART/5",
        "id" : 5,
        "art" : "städtische Straßenfläche",
        "art_abkuerzung" : "VFS"
      },
      "anschlussgrad" : {
        "$self" : "/VERDIS_GRUNDIS.ANSCHLUSSGRAD/1",
        "id" : 1,
        "grad" : "Am Kanal angeschlossen",
        "grad_abkuerzung" : "angeschl."
      },
      "geometrie" : {
        "$self" : "/VERDIS_GRUNDIS.GEOM/645457",
        "geo_field" : "SRID=25832;POLYGON ((374549.80640557036 5681753.529452434, 374548.6767990999 5681752.720229812, 374537.4247354828 5681746.393651064, 374521.01368734613 5681737.466514892, 374519.70685757697 5681738.956596143, 374517.53113156557 5681737.150613559, 374516.47356007993 5681735.339921134, 374516.2243146263 5681733.252982076, 374516.67601988465 5681731.208391094, 374512.71554352716 5681729.74950253, 374511.7766620256 5681731.651875352, 374510.6345287375 5681732.346917946, 374509.4599393308 5681732.689945381, 374508.1090151146 5681732.489109773, 374506.70724792406 5681731.727912965, 374504.43053625897 5681730.17317379, 374501.0022014715 5681727.612008949, 374496.745829124 5681724.470257944, 374493.8776726015 5681722.56548096, 374489.1595103331 5681720.29502964, 374483.215823859 5681717.950565133, 374475.78178889677 5681715.298968337, 374468.67675885186 5681712.90899699, 374463.6831229627 5681711.389306312, 374457.92849002406 5681710.58301218, 374455.35532455146 5681710.218960548, 374450.85920861363 5681709.582428104, 374447.88711887226 5681709.055594229, 374445.9179155603 5681708.55875745, 374444.95089421794 5681707.956086299, 374444.86314410344 5681707.450339482, 374444.94076954946 5681706.77774284, 374445.2413648255 5681706.399244549, 374448.4372401871 5681703.910305271, 374450.98518161476 5681701.257767179, 374452.11872445047 5681699.641664326, 374448.9815935381 5681697.912798932, 374447.6106812544 5681699.666829635, 374444.22874262556 5681702.085293375, 374441.72186100483 5681702.828148444, 374439.7068532966 5681702.902526029, 374438.4395444803 5681702.713373848, 374438.4164100401 5681702.708169715, 374439.9440947436 5681706.186650011, 374438.277008865 5681710.416162215, 374457.007649336 5681716.548888364, 374471.20989633724 5681721.335076803, 374485.3228432946 5681726.300867762, 374495.50242271274 5681730.574130471, 374506.09298116714 5681735.701095552, 374504.49651649967 5681738.769012635, 374509.7270639166 5681741.606668437, 374516.8744889833 5681745.547681427, 374517.0224664137 5681747.500656837, 374517.2488108538 5681750.249913833, 374520.722344663 5681752.178948959, 374521.3822308406 5681751.238622223, 374522.15801249817 5681751.027818085, 374522.86167853326 5681751.204982661, 374529.924172055 5681754.927513864, 374550.20186067 5681766.125787337, 374559.5965953246 5681771.28657711, 374565.75055480376 5681766.849952436, 374556.11192294955 5681758.679526293, 374556.2311384864 5681758.63253592, 374555.9980238937 5681758.633119082, 374553.6231432855 5681757.659550654, 374552.0701820776 5681756.7286080755, 374551.2667102292 5681755.892077969, 374550.3710789569 5681754.368848541, 374549.80640557036 5681753.529452434))",
        "id" : 645457
      },
      "beschreibung" : null
    },
    "anteil" : null,
    "flaechenbezeichnung" : "B",
    "bemerkung" : null,
    "datum_erfassung" : "2003-01-01",
    "datum_veranlagung" : "03/01",
    "sperre" : null,
    "bemerkung_sperre" : "",
    "feb_id" : "20113214"
  }, {
    "$self" : "/VERDIS_GRUNDIS.FLAECHE/589352",
    "id" : 589352,
    "flaecheninfo" : {
      "$self" : "/VERDIS_GRUNDIS.FLAECHENINFO/588077",
      "id" : 588077,
      "groesse_aus_grafik" : 321,
      "groesse_korrektur" : 321,
      "flaechenart" : {
        "$self" : "/VERDIS_GRUNDIS.FLAECHENART/5",
        "id" : 5,
        "art" : "städtische Straßenfläche",
        "art_abkuerzung" : "VFS"
      },
      "anschlussgrad" : {
        "$self" : "/VERDIS_GRUNDIS.ANSCHLUSSGRAD/1",
        "id" : 1,
        "grad" : "Am Kanal angeschlossen",
        "grad_abkuerzung" : "angeschl."
      },
      "geometrie" : {
        "$self" : "/VERDIS_GRUNDIS.GEOM/645458",
        "geo_field" : "SRID=25832;POLYGON ((374470.8081144877 5681724.652167674, 374475.7081422098 5681726.402854997, 374477.219817657 5681728.2630017195, 374478.2227842957 5681730.626248789, 374478.28974221647 5681731.334853249, 374479.32209087163 5681731.64785227, 374497.70661750063 5681739.396756129, 374517.2488108538 5681750.249913833, 374517.0224664137 5681747.500656837, 374516.0407727882 5681747.52475931, 374510.08861305565 5681744.189387556, 374502.2566383332 5681739.753993621, 374504.49651649967 5681738.769012635, 374506.09298116714 5681735.701095552, 374495.50242271274 5681730.574130471, 374485.3228432946 5681726.300867762, 374471.20989633724 5681721.335076803, 374457.007649336 5681716.548888364, 374438.277008865 5681710.416162215, 374437.0622850619 5681713.498355743, 374443.8661464974 5681715.766607773, 374444.0750221722 5681714.976644399, 374443.45928860083 5681714.816577105, 374444.0749506578 5681713.113568874, 374445.5941840559 5681713.639796661, 374445.33536366746 5681714.479884964, 374453.86548102647 5681718.323140498, 374454.45729723945 5681716.547128989, 374456.0395764001 5681717.07469307, 374455.8465485573 5681717.686961113, 374470.5664862506 5681721.843502894, 374472.12954263017 5681722.392915397, 374471.6619707681 5681724.122093065, 374471.05736264586 5681723.9425596865, 374470.8081144877 5681724.652167674))",
        "id" : 645458
      },
      "beschreibung" : null
    },
    "anteil" : null,
    "flaechenbezeichnung" : "G",
    "bemerkung" : null,
    "datum_erfassung" : "2003-01-01",
    "datum_veranlagung" : "03/01",
    "sperre" : null,
    "bemerkung_sperre" : "",
    "feb_id" : "20113214"
  }, {
    "$self" : "/VERDIS_GRUNDIS.FLAECHE/589353",
    "id" : 589353,
    "flaecheninfo" : {
      "$self" : "/VERDIS_GRUNDIS.FLAECHENINFO/588078",
      "id" : 588078,
      "groesse_aus_grafik" : 185,
      "groesse_korrektur" : 185,
      "flaechenart" : {
        "$self" : "/VERDIS_GRUNDIS.FLAECHENART/5",
        "id" : 5,
        "art" : "städtische Straßenfläche",
        "art_abkuerzung" : "VFS"
      },
      "anschlussgrad" : {
        "$self" : "/VERDIS_GRUNDIS.ANSCHLUSSGRAD/1",
        "id" : 1,
        "grad" : "Am Kanal angeschlossen",
        "grad_abkuerzung" : "angeschl."
      },
      "geometrie" : {
        "$self" : "/VERDIS_GRUNDIS.GEOM/645459",
        "geo_field" : "SRID=25832;POLYGON ((374477.219817657 5681728.2630017195, 374475.7081422098 5681726.402854997, 374470.8081144877 5681724.652167674, 374455.8948347941 5681719.777096012, 374443.8661464974 5681715.766607773, 374437.0622850619 5681713.498355743, 374437.0052772127 5681713.644746346, 374439.31738610193 5681718.594871075, 374438.9843366742 5681719.429045144, 374442.67889324203 5681720.548588308, 374478.28974221647 5681731.334853249, 374478.2227842957 5681730.626248789, 374477.219817657 5681728.2630017195))",
        "id" : 645459
      },
      "beschreibung" : null
    },
    "anteil" : null,
    "flaechenbezeichnung" : "K",
    "bemerkung" : null,
    "datum_erfassung" : "2003-01-01",
    "datum_veranlagung" : "03/01",
    "sperre" : null,
    "bemerkung_sperre" : "",
    "feb_id" : "20113214"
  }, {
    "$self" : "/VERDIS_GRUNDIS.FLAECHE/589354",
    "id" : 589354,
    "flaecheninfo" : {
      "$self" : "/VERDIS_GRUNDIS.FLAECHENINFO/588079",
      "id" : 588079,
      "groesse_aus_grafik" : 49,
      "groesse_korrektur" : 49,
      "flaechenart" : {
        "$self" : "/VERDIS_GRUNDIS.FLAECHENART/5",
        "id" : 5,
        "art" : "städtische Straßenfläche",
        "art_abkuerzung" : "VFS"
      },
      "anschlussgrad" : {
        "$self" : "/VERDIS_GRUNDIS.ANSCHLUSSGRAD/1",
        "id" : 1,
        "grad" : "Am Kanal angeschlossen",
        "grad_abkuerzung" : "angeschl."
      },
      "geometrie" : {
        "$self" : "/VERDIS_GRUNDIS.GEOM/645460",
        "geo_field" : "SRID=25832;POLYGON ((374443.8661464974 5681715.766607773, 374455.8948347941 5681719.777096012, 374470.8081144877 5681724.652167674, 374471.05736264586 5681723.9425596865, 374469.97568490356 5681723.62170102, 374470.5664862506 5681721.843502894, 374455.8465485573 5681717.686961113, 374455.486034818 5681718.834229561, 374453.86548102647 5681718.323140498, 374445.33536366746 5681714.479884964, 374445.09952611476 5681715.2439283645, 374444.0750221722 5681714.976644399, 374443.8661464974 5681715.766607773))",
        "id" : 645460
      },
      "beschreibung" : null
    },
    "anteil" : null,
    "flaechenbezeichnung" : "S",
    "bemerkung" : null,
    "datum_erfassung" : "2003-01-01",
    "datum_veranlagung" : "03/01",
    "sperre" : null,
    "bemerkung_sperre" : "",
    "feb_id" : "20113214"
  }, {
    "$self" : "/VERDIS_GRUNDIS.FLAECHE/589355",
    "id" : 589355,
    "flaecheninfo" : {
      "$self" : "/VERDIS_GRUNDIS.FLAECHENINFO/588080",
      "id" : 588080,
      "groesse_aus_grafik" : 79,
      "groesse_korrektur" : 79,
      "flaechenart" : {
        "$self" : "/VERDIS_GRUNDIS.FLAECHENART/5",
        "id" : 5,
        "art" : "städtische Straßenfläche",
        "art_abkuerzung" : "VFS"
      },
      "anschlussgrad" : {
        "$self" : "/VERDIS_GRUNDIS.ANSCHLUSSGRAD/1",
        "id" : 1,
        "grad" : "Am Kanal angeschlossen",
        "grad_abkuerzung" : "angeschl."
      },
      "geometrie" : {
        "$self" : "/VERDIS_GRUNDIS.GEOM/645461",
        "geo_field" : "SRID=25832;POLYGON ((374526.9091427885 5681755.577970399, 374532.2457241155 5681758.510437958, 374532.2581276521 5681758.471913483, 374541.378876403 5681763.468879579, 374548.88365816325 5681766.5758688655, 374548.5477309376 5681767.390016091, 374553.22449786216 5681769.945251888, 374557.9073937796 5681772.504343292, 374559.5965953246 5681771.28657711, 374550.20186067 5681766.125787337, 374529.924172055 5681754.927513864, 374522.86167853326 5681751.204982661, 374522.15801249817 5681751.027818085, 374521.3822308406 5681751.238622223, 374520.722344663 5681752.178948959, 374526.9091427885 5681755.577970399))",
        "id" : 645461
      },
      "beschreibung" : null
    },
    "anteil" : null,
    "flaechenbezeichnung" : "Q",
    "bemerkung" : null,
    "datum_erfassung" : "2003-01-01",
    "datum_veranlagung" : "03/01",
    "sperre" : null,
    "bemerkung_sperre" : "",
    "feb_id" : "20113214"
  }, {
    "$self" : "/VERDIS_GRUNDIS.FLAECHE/589356",
    "id" : 589356,
    "flaecheninfo" : {
      "$self" : "/VERDIS_GRUNDIS.FLAECHENINFO/588081",
      "id" : 588081,
      "groesse_aus_grafik" : 468,
      "groesse_korrektur" : 468,
      "flaechenart" : {
        "$self" : "/VERDIS_GRUNDIS.FLAECHENART/3",
        "id" : 3,
        "art" : "versiegelte Fläche",
        "art_abkuerzung" : "VF"
      },
      "anschlussgrad" : {
        "$self" : "/VERDIS_GRUNDIS.ANSCHLUSSGRAD/1",
        "id" : 1,
        "grad" : "Am Kanal angeschlossen",
        "grad_abkuerzung" : "angeschl."
      },
      "geometrie" : {
        "$self" : "/VERDIS_GRUNDIS.GEOM/645464",
        "geo_field" : "SRID=25832;POLYGON ((374463.7259899117 5681607.460070297, 374464.6657625176 5681606.219021746, 374466.14636981115 5681605.798269144, 374466.5185415186 5681606.044353501, 374469.2326382175 5681594.439796841, 374434.96601138264 5681581.668937244, 374432.8059316352 5681581.621155015, 374433.10023700073 5681594.467391525, 374434.08947116137 5681594.143871182, 374434.98220920935 5681594.395519699, 374435.40612418577 5681594.972532659, 374435.72013556585 5681596.120416599, 374435.15633036196 5681597.180980082, 374434.27713336423 5681597.3879951425, 374435.13951559365 5681601.2991502015, 374435.39893056825 5681600.620038772, 374435.8309461139 5681600.538460134, 374436.4172757305 5681599.440820511, 374437.0258882493 5681599.667178079, 374438.3062758036 5681597.089351067, 374442.1898133904 5681598.566618883, 374443.2059100643 5681596.402897705, 374459.4857962243 5681602.44738265, 374458.538896326 5681604.785513239, 374462.40097724646 5681606.253601175, 374461.231838312 5681608.689711026, 374462.5832500383 5681609.192857303, 374462.21271963045 5681610.408596137, 374462.4369513914 5681610.878778762, 374462.0155327469 5681611.998565998, 374463.34228240326 5681612.413635062, 374464.5921225697 5681610.023243506, 374463.88780815527 5681609.361519484, 374463.6215767227 5681608.383888739, 374463.71451276913 5681607.475635275, 374463.7259899117 5681607.460070297))",
        "id" : 645464
      },
      "beschreibung" : null
    },
    "anteil" : null,
    "flaechenbezeichnung" : "E",
    "bemerkung" : null,
    "datum_erfassung" : "2003-01-01",
    "datum_veranlagung" : "03/01",
    "sperre" : null,
    "bemerkung_sperre" : "",
    "feb_id" : "20113214"
  }, {
    "$self" : "/VERDIS_GRUNDIS.FLAECHE/589357",
    "id" : 589357,
    "flaecheninfo" : {
      "$self" : "/VERDIS_GRUNDIS.FLAECHENINFO/588082",
      "id" : 588082,
      "groesse_aus_grafik" : 337,
      "groesse_korrektur" : 337,
      "flaechenart" : {
        "$self" : "/VERDIS_GRUNDIS.FLAECHENART/3",
        "id" : 3,
        "art" : "versiegelte Fläche",
        "art_abkuerzung" : "VF"
      },
      "anschlussgrad" : {
        "$self" : "/VERDIS_GRUNDIS.ANSCHLUSSGRAD/1",
        "id" : 1,
        "grad" : "Am Kanal angeschlossen",
        "grad_abkuerzung" : "angeschl."
      },
      "geometrie" : {
        "$self" : "/VERDIS_GRUNDIS.GEOM/645465",
        "geo_field" : "SRID=25832;POLYGON ((374475.07653026655 5681622.4951436315, 374483.78071465343 5681599.313460022, 374476.4966706075 5681597.057636738, 374476.0538574457 5681596.920669707, 374475.09103160724 5681596.622866331, 374469.2326382175 5681594.439796841, 374466.5185415186 5681606.044353501, 374467.5181923695 5681606.704819635, 374467.74216339365 5681608.8318469655, 374466.3070519231 5681610.146250582, 374464.6149748899 5681610.044301466, 374464.5921225697 5681610.023243506, 374463.34228240326 5681612.413635062, 374464.61824489385 5681612.812701555, 374462.97348924354 5681617.977885016, 374475.07653026655 5681622.4951436315))",
        "id" : 645465
      },
      "beschreibung" : null
    },
    "anteil" : null,
    "flaechenbezeichnung" : "F",
    "bemerkung" : null,
    "datum_erfassung" : "2003-01-01",
    "datum_veranlagung" : "03/01",
    "sperre" : null,
    "bemerkung_sperre" : "",
    "feb_id" : "20113214"
  }, {
    "$self" : "/VERDIS_GRUNDIS.FLAECHE/589358",
    "id" : 589358,
    "flaecheninfo" : {
      "$self" : "/VERDIS_GRUNDIS.FLAECHENINFO/588083",
      "id" : 588083,
      "groesse_aus_grafik" : 261,
      "groesse_korrektur" : 261,
      "flaechenart" : {
        "$self" : "/VERDIS_GRUNDIS.FLAECHENART/3",
        "id" : 3,
        "art" : "versiegelte Fläche",
        "art_abkuerzung" : "VF"
      },
      "anschlussgrad" : {
        "$self" : "/VERDIS_GRUNDIS.ANSCHLUSSGRAD/1",
        "id" : 1,
        "grad" : "Am Kanal angeschlossen",
        "grad_abkuerzung" : "angeschl."
      },
      "geometrie" : {
        "$self" : "/VERDIS_GRUNDIS.GEOM/645466",
        "geo_field" : "SRID=25832;POLYGON ((374434.27713336423 5681597.3879951425, 374434.057299003 5681597.440029902, 374432.5104422122 5681596.902008673, 374432.00991757587 5681596.0148375975, 374432.5374890417 5681594.651597893, 374433.10023700073 5681594.467391525, 374432.8059316352 5681581.621155015, 374425.3569621183 5681581.455335784, 374417.81686972454 5681601.125493793, 374430.15086360276 5681605.7283951575, 374432.24531966075 5681600.767915939, 374434.96152194217 5681601.76359036, 374435.13951559365 5681601.2991502015, 374434.27713336423 5681597.3879951425))",
        "id" : 645466
      },
      "beschreibung" : null
    },
    "anteil" : null,
    "flaechenbezeichnung" : "H",
    "bemerkung" : null,
    "datum_erfassung" : "2003-01-01",
    "datum_veranlagung" : "03/01",
    "sperre" : null,
    "bemerkung_sperre" : "",
    "feb_id" : "20113214"
  }, {
    "$self" : "/VERDIS_GRUNDIS.FLAECHE/589360",
    "id" : 589360,
    "flaecheninfo" : {
      "$self" : "/VERDIS_GRUNDIS.FLAECHENINFO/588085",
      "id" : 588085,
      "groesse_aus_grafik" : 112,
      "groesse_korrektur" : 112,
      "flaechenart" : {
        "$self" : "/VERDIS_GRUNDIS.FLAECHENART/5",
        "id" : 5,
        "art" : "städtische Straßenfläche",
        "art_abkuerzung" : "VFS"
      },
      "anschlussgrad" : {
        "$self" : "/VERDIS_GRUNDIS.ANSCHLUSSGRAD/1",
        "id" : 1,
        "grad" : "Am Kanal angeschlossen",
        "grad_abkuerzung" : "angeschl."
      },
      "geometrie" : {
        "$self" : "/VERDIS_GRUNDIS.GEOM/645468",
        "geo_field" : "SRID=25832;POLYGON ((374497.2180638164 5681624.626904339, 374498.6120285243 5681619.415922991, 374501.0813784376 5681610.190966832, 374501.7054025121 5681607.859152901, 374502.18557931855 5681606.047594449, 374495.1306158006 5681603.3752553435, 374490.7421234846 5681614.97007136, 374497.7489127554 5681617.686291296, 374495.5257012695 5681623.705526628, 374497.2180638164 5681624.626904339))",
        "id" : 645468
      },
      "beschreibung" : null
    },
    "anteil" : null,
    "flaechenbezeichnung" : "O",
    "bemerkung" : null,
    "datum_erfassung" : "2003-01-01",
    "datum_veranlagung" : "03/01",
    "sperre" : null,
    "bemerkung_sperre" : "",
    "feb_id" : "20113214"
  }, {
    "$self" : "/VERDIS_GRUNDIS.FLAECHE/589390",
    "id" : 589390,
    "flaecheninfo" : {
      "$self" : "/VERDIS_GRUNDIS.FLAECHENINFO/588115",
      "id" : 588115,
      "groesse_aus_grafik" : 118,
      "groesse_korrektur" : 118,
      "flaechenart" : {
        "$self" : "/VERDIS_GRUNDIS.FLAECHENART/5",
        "id" : 5,
        "art" : "städtische Straßenfläche",
        "art_abkuerzung" : "VFS"
      },
      "anschlussgrad" : {
        "$self" : "/VERDIS_GRUNDIS.ANSCHLUSSGRAD/1",
        "id" : 1,
        "grad" : "Am Kanal angeschlossen",
        "grad_abkuerzung" : "angeschl."
      },
      "geometrie" : {
        "$self" : "/VERDIS_GRUNDIS.GEOM/645500",
        "geo_field" : "SRID=25832;POLYGON ((374516.67601763457 5681731.2083918955, 374516.2243146263 5681733.252982076, 374516.47356007993 5681735.339921134, 374517.53113156557 5681737.150613559, 374519.70685757697 5681738.956596143, 374521.01368734613 5681737.466514892, 374537.4247354828 5681746.393651064, 374548.6767990999 5681752.720229812, 374549.80640557036 5681753.529452434, 374550.3710789569 5681754.368848541, 374551.2667102292 5681755.892077969, 374552.0701820776 5681756.7286080755, 374553.6231432855 5681757.659550654, 374555.9980238937 5681758.633119082, 374556.2311384864 5681758.63253592, 374558.9219393693 5681757.56316627, 374560.0368010327 5681754.1427904, 374559.55865545943 5681754.536546966, 374558.756585706 5681754.88856742, 374557.77442553267 5681755.1158193, 374556.9460600987 5681755.1936598085, 374556.06351584196 5681755.044677622, 374550.50113074854 5681751.918293191, 374550.76473068073 5681751.464165991, 374540.5538975224 5681745.86842019, 374529.52957864106 5681739.924820071, 374518.590741355 5681733.796584242, 374516.67601763457 5681731.2083918955))",
        "id" : 645500
      },
      "beschreibung" : null
    },
    "anteil" : null,
    "flaechenbezeichnung" : "N",
    "bemerkung" : null,
    "datum_erfassung" : "2003-01-01",
    "datum_veranlagung" : "03/01",
    "sperre" : null,
    "bemerkung_sperre" : "",
    "feb_id" : "20113214"
  }, {
    "$self" : "/VERDIS_GRUNDIS.FLAECHE/589391",
    "id" : 589391,
    "flaecheninfo" : {
      "$self" : "/VERDIS_GRUNDIS.FLAECHENINFO/588116",
      "id" : 588116,
      "groesse_aus_grafik" : 112,
      "groesse_korrektur" : 112,
      "flaechenart" : {
        "$self" : "/VERDIS_GRUNDIS.FLAECHENART/5",
        "id" : 5,
        "art" : "städtische Straßenfläche",
        "art_abkuerzung" : "VFS"
      },
      "anschlussgrad" : {
        "$self" : "/VERDIS_GRUNDIS.ANSCHLUSSGRAD/1",
        "id" : 1,
        "grad" : "Am Kanal angeschlossen",
        "grad_abkuerzung" : "angeschl."
      },
      "geometrie" : {
        "$self" : "/VERDIS_GRUNDIS.GEOM/645501",
        "geo_field" : "SRID=25832;POLYGON ((374508.1090151146 5681732.489109773, 374509.4599393308 5681732.689945381, 374510.6345287375 5681732.346917946, 374511.7766620256 5681731.651875352, 374512.71555516496 5681729.749502276, 374510.9161308184 5681729.226703349, 374510.1854804307 5681727.380651457, 374510.5229010768 5681727.26473131, 374497.1482563317 5681719.700257105, 374497.78437324986 5681720.869954591, 374495.73879285157 5681721.569882242, 374494.8875045404 5681719.904684446, 374495.29225670546 5681719.722086951, 374486.5512261838 5681715.62333804, 374486.293074701 5681716.534988147, 374493.63017456606 5681719.503803826, 374493.0895965062 5681720.681499942, 374485.8746775724 5681717.666565391, 374485.40742159635 5681718.814294648, 374489.1595103331 5681720.29502964, 374493.8776726015 5681722.56548096, 374496.745829124 5681724.470257944, 374501.0022014715 5681727.612008949, 374504.43053625897 5681730.17317379, 374506.70724792406 5681731.727912965, 374508.1090151146 5681732.489109773))",
        "id" : 645501
      },
      "beschreibung" : null
    },
    "anteil" : null,
    "flaechenbezeichnung" : "P",
    "bemerkung" : null,
    "datum_erfassung" : "2003-01-01",
    "datum_veranlagung" : "03/01",
    "sperre" : null,
    "bemerkung_sperre" : "",
    "feb_id" : "20113214"
  }, {
    "$self" : "/VERDIS_GRUNDIS.FLAECHE/589392",
    "id" : 589392,
    "flaecheninfo" : {
      "$self" : "/VERDIS_GRUNDIS.FLAECHENINFO/588117",
      "id" : 588117,
      "groesse_aus_grafik" : 9,
      "groesse_korrektur" : 9,
      "flaechenart" : {
        "$self" : "/VERDIS_GRUNDIS.FLAECHENART/1",
        "id" : 1,
        "art" : "Dachfläche",
        "art_abkuerzung" : "DF"
      },
      "anschlussgrad" : {
        "$self" : "/VERDIS_GRUNDIS.ANSCHLUSSGRAD/1",
        "id" : 1,
        "grad" : "Am Kanal angeschlossen",
        "grad_abkuerzung" : "angeschl."
      },
      "geometrie" : {
        "$self" : "/VERDIS_GRUNDIS.GEOM/645502",
        "geo_field" : "SRID=25832;POLYGON ((374486.293074701 5681716.534988147, 374485.8746775724 5681717.666565391, 374493.0895965062 5681720.681499942, 374493.63017456606 5681719.503803826, 374486.293074701 5681716.534988147))",
        "id" : 645502
      },
      "beschreibung" : null
    },
    "anteil" : null,
    "flaechenbezeichnung" : "1",
    "bemerkung" : null,
    "datum_erfassung" : "2003-01-01",
    "datum_veranlagung" : "03/01",
    "sperre" : null,
    "bemerkung_sperre" : "",
    "feb_id" : "20113214"
  }, {
    "$self" : "/VERDIS_GRUNDIS.FLAECHE/589393",
    "id" : 589393,
    "flaecheninfo" : {
      "$self" : "/VERDIS_GRUNDIS.FLAECHENINFO/588118",
      "id" : 588118,
      "groesse_aus_grafik" : 151,
      "groesse_korrektur" : 151,
      "flaechenart" : {
        "$self" : "/VERDIS_GRUNDIS.FLAECHENART/5",
        "id" : 5,
        "art" : "städtische Straßenfläche",
        "art_abkuerzung" : "VFS"
      },
      "anschlussgrad" : {
        "$self" : "/VERDIS_GRUNDIS.ANSCHLUSSGRAD/1",
        "id" : 1,
        "grad" : "Am Kanal angeschlossen",
        "grad_abkuerzung" : "angeschl."
      },
      "geometrie" : {
        "$self" : "/VERDIS_GRUNDIS.GEOM/645503",
        "geo_field" : "SRID=25832;POLYGON ((374486.5512261838 5681715.62333804, 374484.4430597909 5681714.635683638, 374485.0437558964 5681715.549649974, 374483.01942509785 5681716.153669149, 374482.22647972405 5681714.525219398, 374483.44023328274 5681714.087402168, 374471.33915648237 5681710.169806779, 374471.795378495 5681711.050731424, 374469.87707655504 5681711.923444088, 374469.12040954083 5681710.106398906, 374469.89264791086 5681709.731729614, 374455.36999546364 5681705.386866037, 374455.995813787 5681706.747083908, 374454.39923259616 5681707.315549457, 374453.81255253404 5681707.524597857, 374453.13134646416 5681705.497409623, 374448.4372401871 5681703.910305271, 374445.2413648255 5681706.399244549, 374444.94076954946 5681706.77774284, 374444.86314410344 5681707.450339482, 374444.95089421794 5681707.956086299, 374445.9179155603 5681708.55875745, 374447.88711887226 5681709.055594229, 374450.85920861363 5681709.582428104, 374455.35532455146 5681710.218960548, 374457.92849002406 5681710.58301218, 374463.6831229627 5681711.389306312, 374468.67675885186 5681712.90899699, 374475.78178889677 5681715.298968337, 374483.215823859 5681717.950565133, 374485.40742159635 5681718.814294648, 374485.9259252064 5681717.548728989, 374486.293074701 5681716.534988147, 374486.5512261838 5681715.62333804))",
        "id" : 645503
      },
      "beschreibung" : null
    },
    "anteil" : null,
    "flaechenbezeichnung" : "L",
    "bemerkung" : "",
    "datum_erfassung" : "2003-01-01",
    "datum_veranlagung" : "03/01",
    "sperre" : null,
    "bemerkung_sperre" : "",
    "feb_id" : "20113214"
  } ],
  "kanalanschluss" : {
    "$self" : "/VERDIS_GRUNDIS.KANALANSCHLUSS/47847",
    "id" : 47847,
    "rkvorhanden" : true,
    "mkrvorhanden" : false,
    "mksvorhanden" : false,
    "skvorhanden" : true,
    "rkangeschlossen" : {
      "$self" : "/VERDIS_GRUNDIS.ANSCHLUSSSTATUS/0",
      "id" : 0,
      "name" : "ja"
    },
    "mkrangeschlossen" : {
      "$self" : "/VERDIS_GRUNDIS.ANSCHLUSSSTATUS/-1",
      "id" : -1,
      "name" : ""
    },
    "mksangeschlossen" : {
      "$self" : "/VERDIS_GRUNDIS.ANSCHLUSSSTATUS/-1",
      "id" : -1,
      "name" : ""
    },
    "skangeschlossen" : {
      "$self" : "/VERDIS_GRUNDIS.ANSCHLUSSSTATUS/1",
      "id" : 1,
      "name" : "nein"
    },
    "sgvorhanden" : false,
    "kkavorhanden" : false,
    "sgentleerung" : false,
    "kkaentleerung" : false,
    "evg" : false,
    "befreiungenunderlaubnisse" : [ ]
  },
  "letzte_aenderung_ts" : 1389251777850,
  "letzte_aenderung_von" : "SteinbacherD102@VORN_schreiben_KA",
  "fronten" : [ ],
  "bemerkung_zu_abgaben" : null,
  "grundsteuer" : null,
  "schmutzwasser" : null,
  "abfallgebuehr" : null,
  "kassenzeichennummer" : 6115679,
  "kassenzeichennummer7" : 6115679,
  "kassenzeichennummer8" : 61156717,
  "kassenzeichen_geometrien" : [ {
    "$self" : "/VERDIS_GRUNDIS.KASSENZEICHEN_GEOMETRIE/27673",
    "id" : 27673,
    "kassenzeichen" : null,
    "istfrei" : false,
    "name" : "053001-117-00054",
    "geometrie" : {
      "$self" : "/VERDIS_GRUNDIS.GEOM/867163",
      "geo_field" : "SRID=25832;POLYGON ((374475.6906811595 5681621.697613416, 374479.4038413875 5681611.671044878, 374482.41974005103 5681612.765013145, 374489.6094708517 5681615.374920816, 374489.5174621977 5681615.578908771, 374496.6191926263 5681618.2298125485, 374497.64918008447 5681619.196793346, 374498.7011781074 5681619.527796837, 374501.7963997051 5681607.973864203, 374502.27761753276 5681606.162045138, 374494.2235936597 5681603.111977071, 374494.1685774438 5681603.253963112, 374486.8286241777 5681600.525937648, 374483.8876631595 5681599.432937932, 374475.18276104704 5681596.737912651, 374435.05941752717 5681581.786001129, 374425.4054840654 5681581.570874339, 374422.4425518811 5681580.4198963465, 374415.1977225393 5681577.606956169, 374415.31273401156 5681577.231976485, 374409.9968518391 5681575.3890118245, 374400.03410886973 5681571.534100416, 374395.5637136847 5681583.890407883, 374410.75841203704 5681589.681296733, 374410.97142097726 5681589.252320733, 374418.2522684969 5681592.028275919, 374421.13520621136 5681593.128258673, 374418.56107482314 5681600.145893537, 374419.17606222257 5681600.378890765, 374424.28995543346 5681602.314867571, 374428.4008669257 5681603.871848437, 374429.8429291658 5681599.982043085, 374432.5398675874 5681601.007028112, 374435.87578983605 5681602.276009313, 374436.7648152262 5681600.501099537, 374437.23280370235 5681600.692096106, 374438.3898705654 5681597.167271408, 374442.42477683723 5681598.690248348, 374443.27383355424 5681596.534365481, 374443.7808222994 5681596.72736277, 374458.8914786242 5681602.442282755, 374459.24947003275 5681602.578280693, 374458.43339689076 5681604.729159216, 374462.4772937298 5681606.256133917, 374461.3642019294 5681609.458965861, 374461.77119003236 5681609.64196178, 374460.9691519141 5681611.754862293, 374464.4760553688 5681613.067839411, 374467.00198449194 5681614.012822261, 374466.6229757555 5681615.006781573, 374465.81896131486 5681617.120697849, 374465.5269568339 5681617.88866804, 374469.7828418799 5681619.482644933, 374475.6906811595 5681621.697613416))",
      "id" : 867163
    }
  }, {
    "$self" : "/VERDIS_GRUNDIS.KASSENZEICHEN_GEOMETRIE/27674",
    "id" : 27674,
    "kassenzeichen" : null,
    "istfrei" : false,
    "name" : "053001-117-00053",
    "geometrie" : {
      "$self" : "/VERDIS_GRUNDIS.GEOM/867162",
      "geo_field" : "SRID=25832;POLYGON ((374380.6037015915 5681588.184890825, 374380.02467334643 5681589.689799455, 374372.8743378408 5681608.139701878, 374367.4661073163 5681621.9919011695, 374366.5310673937 5681624.386762118, 374363.24592340365 5681632.80326769, 374360.01477210224 5681641.148766201, 374358.3476953618 5681645.43851075, 374357.81467309967 5681646.811432667, 374356.5846302584 5681649.773290087, 374350.59376593307 5681664.996786617, 374350.35977653414 5681665.582817187, 374345.4758797996 5681677.824388761, 374345.23987862095 5681678.414412838, 374344.871875532 5681679.328449468, 374350.70656920597 5681688.26805495, 374351.9467402473 5681688.728146494, 374351.9727408886 5681688.646143532, 374353.31078865007 5681685.150024957, 374358.4507509135 5681672.341460073, 374369.60798271 5681651.622748979, 374370.0229311362 5681650.540765166, 374381.99309873953 5681619.301338427, 374388.6023773216 5681602.0573343765, 374389.2424061373 5681600.3854323365, 374390.32045548037 5681597.570597975, 374390.96348537505 5681595.892697137, 374395.5637136847 5681583.890407883, 374400.03410886973 5681571.534100416, 374400.94919427484 5681569.176229585, 374397.6652648002 5681567.909249292, 374408.8753265068 5681539.06883808, 374402.5404747762 5681531.984932209, 374399.4812240228 5681539.592562963, 374396.65097600594 5681546.896196566, 374393.83472249284 5681554.168820462, 374393.4296855442 5681555.213765502, 374391.72252806276 5681559.621530965, 374391.3984977342 5681560.462485715, 374389.2892981842 5681565.921187497, 374388.03818594664 5681568.966018201, 374384.1298906617 5681579.059438759, 374380.6037015915 5681588.184890825))",
      "id" : 867162
    }
  }, {
    "$self" : "/VERDIS_GRUNDIS.KASSENZEICHEN_GEOMETRIE/27675",
    "id" : 27675,
    "kassenzeichen" : null,
    "istfrei" : false,
    "name" : "053001-117-00052",
    "geometrie" : {
      "$self" : "/VERDIS_GRUNDIS.GEOM/867161",
      "geo_field" : "SRID=25832;POLYGON ((374556.21462330595 5681758.788764364, 374559.02466779575 5681757.671708451, 374560.80945466086 5681752.1947465325, 374560.67163863406 5681752.517164518, 374560.50481389835 5681752.825573797, 374560.31038834155 5681753.117371653, 374560.0900027752 5681753.390095554, 374559.84551713616 5681753.641443953, 374559.5789947249 5681753.869295665, 374559.2926848866 5681754.071727826, 374558.9890039414 5681754.247032051, 374558.6705148518 5681754.393728894, 374558.36355494335 5681754.5005270215, 374558.04856849834 5681754.580619473, 374557.7278745882 5681754.633416056, 374557.4038342796 5681754.658527986, 374557.0788332112 5681754.6557703605, 374556.7552641332 5681754.625163436, 374556.43550923094 5681754.56693252, 374556.12192263827 5681754.481506282, 374555.8168129921 5681754.369513632, 374555.5224266015 5681754.2317790575, 374550.8662046939 5681751.572854172, 374548.6951088719 5681750.383884953, 374540.65377966687 5681745.977979745, 374529.6283826381 5681740.034070721, 374521.4381107092 5681735.446115154, 374518.68802381307 5681733.906126277, 374493.94131807983 5681720.263148982, 374493.84932112694 5681720.436148765, 374449.68246727064 5681705.992627194, 374437.97135195136 5681702.146350034, 374403.5665542297 5681690.8509694515, 374399.8526408933 5681689.332009833, 374395.09152558446 5681686.68494599, 374391.2222878374 5681684.071805249, 374388.44502814114 5681681.743646748, 374387.1738842726 5681680.514557656, 374385.32265358046 5681678.559413084, 374375.98640599474 5681667.587586156, 374372.2549240738 5681663.202240759, 374370.62066873536 5681660.697059654, 374369.5144154541 5681657.870895146, 374369.10218789056 5681654.895780766, 374369.60798271 5681651.622748979, 374358.4507509135 5681672.341460073, 374353.31078865007 5681685.150024957, 374351.9727408886 5681688.646143532, 374351.9467402473 5681688.728146494, 374355.4373221211 5681690.031461259, 374364.8385040276 5681693.540647293, 374382.66388241574 5681700.195397349, 374389.57989263907 5681702.770888709, 374407.3488859646 5681709.38477553, 374416.2603362091 5681712.647381321, 374438.7774341181 5681719.447530033, 374439.0744397491 5681719.536539812, 374479.41635181755 5681731.7571631335, 374497.80282075703 5681739.506227296, 374520.821537409 5681752.289215775, 374521.2585520372 5681752.529214357, 374532.3459408544 5681758.620162774, 374532.35894037783 5681758.582162093, 374543.8733826652 5681764.89007639, 374558.01083661243 5681772.614078075, 374565.85506547615 5681766.958828585, 374556.21462330595 5681758.788764364))",
      "id" : 867161
    }
  } ],
  "veranlagungszettel" : "<hr>   <h3>Datum: 09.01.2014</h3>   <center>      <table cellspacing=\"10\">         <thead>            <tr>               <th align=\"left\">ABS</th>               <th align=\"right\">alt</th>               <th align=\"right\">neu</th>               <th align=\"center\">Monat VA</th>               <th align=\"center\">Jahr VA</th>            </tr>         </thead>         <tbody>         </tbody>      </table>"
});

    return md; 
}

export const MOCKDATA = mocker();
