var locs = [
    {
      "_id": "1",
      "nom": "Loc_1",
      "hostilite": "Inconnu",
      "latitude": "48,659790",
      "longitude": "-4,242559",
      "dateMaj": "19/10/2016",
      "Radars": [
        {
         "_id": "1",
         "nom": "Radar_1",
         "dateMaj": "23/01/2017",
         "modes": [
           {
              "fonction": "Veille",
              "modulation": "Pulse",
              "sousMode": {
                  "frequence": "6191,164662",
                  "frequenceType": "Agile",
                  "li": "18.9903319107216",
                  "liType": "Agile",
                  "pri": "317.9231578988291",
                  "priType": "Agile"
               },
               "balayage": {
                  "type": "Sectorial",
                  "PRA": "646"
                }
           }
         ]
        },
        {
         "_id": "2",
         "nom": "Radar_2",
         "dateMaj": "04/03/2016",
         "modes": [
           {
              "fonction": "Veille",
              "modulation": "CW",
              "sousMode": {
                  "frequence": "5114,083899",
                  "frequenceType": "Fixe"
               },
               "balayage": {
                  "type": "Complex",
                  "PRA": "4125"
                }
           }
         ]
        }
      ]
    },
    {
      "_id": "2",
      "nom": "Loc_2",
      "hostilite": "Hostile",
      "latitude": "48,861156",
      "longitude": "-3,744249",
      "dateMaj": "19/01/2016",
      "Radars": [
        {
         "_id": "3",
         "nom": "Radar_3",
         "dateMaj": "02/03/2016",
         "modes": [
           {
              "fonction": "Tir",
              "modulation": "CW",
              "sousMode": {
                  "frequence": "7602,721412",
                  "frequenceType": "Agile"
               },
               "balayage": {
                  "type": "Sectorial",
                  "PRA": "791"
                }
           },
           {
              "fonction": "Veille",
              "modulation": "Pulse",
              "sousMode": {
                  "frequence": "7874,730396",
                  "frequenceType": "Fixe",
                  "li": "13.138633317800469",
                  "liType": "Agile",
                  "pri": "433.23650008824774",
                  "priType": "Agile"
               },
               "balayage": {
                  "type": "Conical"
                }
           }
         ]
        }
      ]
    },
    {
      "_id": "3",
      "nom": "Loc_3",
      "hostilite": "Ami",
      "latitude": "48,800506",
      "longitude": "-4,398063",
      "dateMaj": "21/09/2016",
      "Radars": [
        {
         "_id": "4",
         "nom": "Radar_4",
         "dateMaj": "15/04/2016",
         "modes": [
           {
              "fonction": "Poursuite",
              "modulation": "CW",
              "sousMode": {
                  "frequence": "9514,593710",
                  "frequenceType": "Fixe"
               },
               "balayage": {
                  "type": "Complex",
                  "PRA": "3426"
                }
           }
         ]
        },
        {
         "_id": "5",
         "nom": "Radar_5",
         "dateMaj": "02/01/2017",
         "modes": [
           {
              "fonction": "Acquisition",
              "modulation": "CW",
              "sousMode": {
                  "frequence": "6940,022409",
                  "frequenceType": "Fixe"
               },
               "balayage": {
                  "type": "Complex",
                  "PRA": "2749"
                }
           },
           {
              "fonction": "Tir",
              "modulation": "Pulse",
              "sousMode": {
                  "frequence": "4297,337806",
                  "frequenceType": "Agile",
                  "li": "4.125978470585938",
                  "liType": "Fixe",
                  "pri": "232.59759809105424",
                  "priType": "Fixe"
               },
               "balayage": {
                  "type": "Sectorial",
                  "PRA": "2260"
                }
           }
         ]
        }
      ]
    },
    {
      "_id": "4",
      "nom": "Loc_4",
      "hostilite": "Ami",
      "latitude": "48,509730",
      "longitude": "-3,529834",
      "dateMaj": "10/07/2016",
      "Radars": [
        {
         "_id": "6",
         "nom": "Radar_6",
         "dateMaj": "07/11/2016",
         "modes": [
           {
              "fonction": "Veille",
              "modulation": "CW",
              "sousMode": {
                  "frequence": "7918,967999",
                  "frequenceType": "Fixe"
               },
               "balayage": {
                  "type": "Complex",
                  "PRA": "506"
                }
           },
           {
              "fonction": "Acquisition",
              "modulation": "Pulse",
              "sousMode": {
                  "frequence": "8050,846332",
                  "frequenceType": "Agile",
                  "li": "19.231666324421976",
                  "liType": "Fixe",
                  "pri": "955.453813707192",
                  "priType": "Agile"
               },
               "balayage": {
                  "type": "Complex",
                  "PRA": "4783"
                }
           }
         ]
        }
      ]
    },
    {
      "_id": "5",
      "nom": "Loc_5",
      "hostilite": "Hostile",
      "latitude": "48,511437",
      "longitude": "-4,424224",
      "dateMaj": "05/02/2016",
      "Radars": [
        {
         "_id": "7",
         "nom": "Radar_7",
         "dateMaj": "06/01/2017",
         "modes": [
           {
              "fonction": "Acquisition",
              "modulation": "CW",
              "sousMode": {
                  "frequence": "9344,584828",
                  "frequenceType": "Fixe"
               },
               "balayage": {
                  "type": "Sectorial",
                  "PRA": "1304"
                }
           }
         ]
        },
        {
         "_id": "8",
         "nom": "Radar_8",
         "dateMaj": "20/06/2016",
         "modes": [
           {
              "fonction": "Poursuite",
              "modulation": "Pulse",
              "sousMode": {
                  "frequence": "7093,087187",
                  "frequenceType": "Fixe",
                  "li": "7.629456122129178",
                  "liType": "Fixe",
                  "pri": "165.8175296979549",
                  "priType": "Agile"
               },
               "balayage": {
                  "type": "Fixe"
                }
           },
           {
              "fonction": "Poursuite",
              "modulation": "CW",
              "sousMode": {
                  "frequence": "4607,208306",
                  "frequenceType": "Fixe"
               },
               "balayage": {
                  "type": "Sectorial",
                  "PRA": "4273"
                }
           }
         ]
        }
      ]
    },
    {
      "_id": "6",
      "nom": "Loc_6",
      "hostilite": "Ami",
      "latitude": "49,151547",
      "longitude": "-3,848166",
      "dateMaj": "19/04/2016",
      "Radars": [
        {
         "_id": "9",
         "nom": "Radar_9",
         "dateMaj": "25/03/2016",
         "modes": [
           {
              "fonction": "Acquisition",
              "modulation": "CW",
              "sousMode": {
                  "frequence": "9518,330356",
                  "frequenceType": "Fixe"
               },
               "balayage": {
                  "type": "Sectorial",
                  "PRA": "4870"
                }
           }
         ]
        },
        {
         "_id": "10",
         "nom": "Radar_10",
         "dateMaj": "05/07/2016",
         "modes": [
           {
              "fonction": "Poursuite",
              "modulation": "CW",
              "sousMode": {
                  "frequence": "9247,410778",
                  "frequenceType": "Fixe"
               },
               "balayage": {
                  "type": "Conical"
                }
           },
           {
              "fonction": "Tir",
              "modulation": "CW",
              "sousMode": {
                  "frequence": "8383,585818",
                  "frequenceType": "Fixe"
               },
               "balayage": {
                  "type": "Complex",
                  "PRA": "551"
                }
           }
         ]
        }
      ]
    },
    {
      "_id": "7",
      "nom": "Loc_7",
      "hostilite": "Inconnu",
      "latitude": "48,715095",
      "longitude": "-3,887202",
      "dateMaj": "01/10/2016",
      "Radars": [
        {
         "_id": "11",
         "nom": "Radar_11",
         "dateMaj": "03/09/2016",
         "modes": [
           {
              "fonction": "Tir",
              "modulation": "Pulse",
              "sousMode": {
                  "frequence": "6966,953988",
                  "frequenceType": "Agile",
                  "li": "1.879098967332247",
                  "liType": "Agile",
                  "pri": "963.804690951819",
                  "priType": "Agile"
               },
               "balayage": {
                  "type": "Conical"
                }
           }
         ]
        }
      ]
    },
    {
      "_id": "8",
      "nom": "Loc_8",
      "hostilite": "Inconnu",
      "latitude": "49,026272",
      "longitude": "-4,011009",
      "dateMaj": "08/03/2016",
      "Radars": [
        {
         "_id": "12",
         "nom": "Radar_12",
         "dateMaj": "13/12/2016",
         "modes": [
           {
              "fonction": "Poursuite",
              "modulation": "Pulse",
              "sousMode": {
                  "frequence": "7016,244377",
                  "frequenceType": "Fixe",
                  "li": "5.243681508808716",
                  "liType": "Agile",
                  "pri": "372.7131107049703",
                  "priType": "Agile"
               },
               "balayage": {
                  "type": "Sectorial",
                  "PRA": "3860"
                }
           },
           {
              "fonction": "Acquisition",
              "modulation": "Pulse",
              "sousMode": {
                  "frequence": "5437,576419",
                  "frequenceType": "Fixe",
                  "li": "1.1413160738708648",
                  "liType": "Fixe",
                  "pri": "251.38211539904194",
                  "priType": "Fixe"
               },
               "balayage": {
                  "type": "Circular",
                  "PRA": "556"
                }
           }
         ]
        },
        {
         "_id": "13",
         "nom": "Radar_13",
         "dateMaj": "24/01/2016",
         "modes": [
           {
              "fonction": "Tir",
              "modulation": "CW",
              "sousMode": {
                  "frequence": "4001,684166",
                  "frequenceType": "Fixe"
               },
               "balayage": {
                  "type": "Complex",
                  "PRA": "3376"
                }
           },
           {
              "fonction": "Acquisition",
              "modulation": "CW",
              "sousMode": {
                  "frequence": "6229,146410",
                  "frequenceType": "Agile"
               },
               "balayage": {
                  "type": "Complex",
                  "PRA": "4269"
                }
           }
         ]
        }
      ]
    },
    {
      "_id": "9",
      "nom": "Loc_9",
      "hostilite": "Inconnu",
      "latitude": "49,318449",
      "longitude": "-4,391727",
      "dateMaj": "20/04/2016",
      "Radars": [
        {
         "_id": "14",
         "nom": "Radar_14",
         "dateMaj": "06/02/2016",
         "modes": [
           {
              "fonction": "Acquisition",
              "modulation": "CW",
              "sousMode": {
                  "frequence": "8069,488510",
                  "frequenceType": "Fixe"
               },
               "balayage": {
                  "type": "Complex",
                  "PRA": "4360"
                }
           }
         ]
        }
      ]
    },
    {
      "_id": "10",
      "nom": "Loc_10",
      "hostilite": "Ami",
      "latitude": "48,988829",
      "longitude": "-3,586163",
      "dateMaj": "22/01/2016",
      "Radars": [
        {
         "_id": "15",
         "nom": "Radar_15",
         "dateMaj": "17/07/2016",
         "modes": [
           {
              "fonction": "Veille",
              "modulation": "Pulse",
              "sousMode": {
                  "frequence": "6398,509180",
                  "frequenceType": "Agile",
                  "li": "2.412589344550208",
                  "liType": "Fixe",
                  "pri": "652.8498057613245",
                  "priType": "Fixe"
               },
               "balayage": {
                  "type": "Circular",
                  "PRA": "650"
                }
           },
           {
              "fonction": "Veille",
              "modulation": "Pulse",
              "sousMode": {
                  "frequence": "3057,650176",
                  "frequenceType": "Agile",
                  "li": "12.43412661872212",
                  "liType": "Agile",
                  "pri": "289.2294191980434",
                  "priType": "Fixe"
               },
               "balayage": {
                  "type": "Complex",
                  "PRA": "507"
                }
           }
         ]
        },
        {
         "_id": "16",
         "nom": "Radar_16",
         "dateMaj": "14/10/2016",
         "modes": [
           {
              "fonction": "Poursuite",
              "modulation": "CW",
              "sousMode": {
                  "frequence": "8250,650817",
                  "frequenceType": "Agile"
               },
               "balayage": {
                  "type": "Sectorial",
                  "PRA": "1346"
                }
           },
           {
              "fonction": "Veille",
              "modulation": "Pulse",
              "sousMode": {
                  "frequence": "8701,683695",
                  "frequenceType": "Agile",
                  "li": "5.379910877615773",
                  "liType": "Agile",
                  "pri": "411.5868094960093",
                  "priType": "Agile"
               },
               "balayage": {
                  "type": "Conical"
                }
           }
         ]
        }
      ]
    },
    {
      "_id": "11",
      "nom": "Loc_11",
      "hostilite": "Hostile",
      "latitude": "48,963909",
      "longitude": "-3,680224",
      "dateMaj": "06/11/2016",
      "Radars": [
        {
         "_id": "17",
         "nom": "Radar_17",
         "dateMaj": "07/09/2016",
         "modes": [
           {
              "fonction": "Veille",
              "modulation": "Pulse",
              "sousMode": {
                  "frequence": "8631,284967",
                  "frequenceType": "Agile",
                  "li": "14.733352761940438",
                  "liType": "Fixe",
                  "pri": "685.79419382376",
                  "priType": "Agile"
               },
               "balayage": {
                  "type": "Conical"
                }
           }
         ]
        },
        {
         "_id": "18",
         "nom": "Radar_18",
         "dateMaj": "19/07/2016",
         "modes": [
           {
              "fonction": "Acquisition",
              "modulation": "Pulse",
              "sousMode": {
                  "frequence": "6025,420301",
                  "frequenceType": "Fixe",
                  "li": "9.647313668823134",
                  "liType": "Fixe",
                  "pri": "497.1263179029797",
                  "priType": "Fixe"
               },
               "balayage": {
                  "type": "Fixe"
                }
           },
           {
              "fonction": "Veille",
              "modulation": "Pulse",
              "sousMode": {
                  "frequence": "4928,865327",
                  "frequenceType": "Agile",
                  "li": "10.346521170906474",
                  "liType": "Agile",
                  "pri": "953.4685151274656",
                  "priType": "Fixe"
               },
               "balayage": {
                  "type": "Circular",
                  "PRA": "544"
                }
           }
         ]
        }
      ]
    },
    {
      "_id": "12",
      "nom": "Loc_12",
      "hostilite": "Hostile",
      "latitude": "48,844575",
      "longitude": "-3,720978",
      "dateMaj": "23/11/2016",
      "Radars": [
        {
         "_id": "19",
         "nom": "Radar_19",
         "dateMaj": "18/01/2017",
         "modes": [
           {
              "fonction": "Poursuite",
              "modulation": "Pulse",
              "sousMode": {
                  "frequence": "6482,324371",
                  "frequenceType": "Agile",
                  "li": "4.40718813360766",
                  "liType": "Agile",
                  "pri": "486.78539481432136",
                  "priType": "Fixe"
               },
               "balayage": {
                  "type": "Circular",
                  "PRA": "2484"
                }
           }
         ]
        }
      ]
    },
    {
      "_id": "13",
      "nom": "Loc_13",
      "hostilite": "Hostile",
      "latitude": "48,984675",
      "longitude": "-3,881318",
      "dateMaj": "15/07/2016",
      "Radars": [
        {
         "_id": "20",
         "nom": "Radar_20",
         "dateMaj": "22/04/2016",
         "modes": [
           {
              "fonction": "Acquisition",
              "modulation": "CW",
              "sousMode": {
                  "frequence": "6187,060132",
                  "frequenceType": "Agile"
               },
               "balayage": {
                  "type": "Fixe"
                }
           }
         ]
        }
      ]
    },
    {
      "_id": "14",
      "nom": "Loc_14",
      "hostilite": "Ami",
      "latitude": "49,011618",
      "longitude": "-3,755311",
      "dateMaj": "15/11/2016",
      "Radars": [
        {
         "_id": "21",
         "nom": "Radar_21",
         "dateMaj": "10/02/2016",
         "modes": [
           {
              "fonction": "Tir",
              "modulation": "Pulse",
              "sousMode": {
                  "frequence": "4513,894862",
                  "frequenceType": "Agile",
                  "li": "3.611922151177574",
                  "liType": "Agile",
                  "pri": "593.804619045611",
                  "priType": "Agile"
               },
               "balayage": {
                  "type": "Fixe"
                }
           },
           {
              "fonction": "Tir",
              "modulation": "CW",
              "sousMode": {
                  "frequence": "3243,756689",
                  "frequenceType": "Fixe"
               },
               "balayage": {
                  "type": "Conical"
                }
           }
         ]
        }
      ]
    },
    {
      "_id": "15",
      "nom": "Loc_15",
      "hostilite": "Hostile",
      "latitude": "48,875179",
      "longitude": "-3,887163",
      "dateMaj": "18/01/2016",
      "Radars": [
        {
         "_id": "22",
         "nom": "Radar_22",
         "dateMaj": "12/01/2017",
         "modes": [
           {
              "fonction": "Poursuite",
              "modulation": "Pulse",
              "sousMode": {
                  "frequence": "5964,719094",
                  "frequenceType": "Agile",
                  "li": "18.105798630263635",
                  "liType": "Agile",
                  "pri": "724.3791206302725",
                  "priType": "Agile"
               },
               "balayage": {
                  "type": "Complex",
                  "PRA": "199"
                }
           }
         ]
        }
      ]
    },
    {
      "_id": "16",
      "nom": "Loc_16",
      "hostilite": "Inconnu",
      "latitude": "48,881111",
      "longitude": "-4,059358",
      "dateMaj": "18/03/2016",
      "Radars": [
        {
         "_id": "23",
         "nom": "Radar_23",
         "dateMaj": "24/04/2016",
         "modes": [
           {
              "fonction": "Acquisition",
              "modulation": "CW",
              "sousMode": {
                  "frequence": "6608,725397",
                  "frequenceType": "Fixe"
               },
               "balayage": {
                  "type": "Complex",
                  "PRA": "4477"
                }
           },
           {
              "fonction": "Acquisition",
              "modulation": "Pulse",
              "sousMode": {
                  "frequence": "3580,242363",
                  "frequenceType": "Fixe",
                  "li": "19.7243670165949",
                  "liType": "Fixe",
                  "pri": "900.5447338596208",
                  "priType": "Agile"
               },
               "balayage": {
                  "type": "Fixe"
                }
           }
         ]
        }
      ]
    },
    {
      "_id": "17",
      "nom": "Loc_17",
      "hostilite": "Hostile",
      "latitude": "48,993960",
      "longitude": "-3,912773",
      "dateMaj": "17/01/2016",
      "Radars": [
        {
         "_id": "24",
         "nom": "Radar_24",
         "dateMaj": "20/12/2016",
         "modes": [
           {
              "fonction": "Poursuite",
              "modulation": "CW",
              "sousMode": {
                  "frequence": "4718,570380",
                  "frequenceType": "Fixe"
               },
               "balayage": {
                  "type": "Sectorial",
                  "PRA": "3871"
                }
           },
           {
              "fonction": "Acquisition",
              "modulation": "Pulse",
              "sousMode": {
                  "frequence": "8340,669167",
                  "frequenceType": "Agile",
                  "li": "19.53750046949092",
                  "liType": "Agile",
                  "pri": "425.079077867117",
                  "priType": "Fixe"
               },
               "balayage": {
                  "type": "Sectorial",
                  "PRA": "4297"
                }
           }
         ]
        },
        {
         "_id": "25",
         "nom": "Radar_25",
         "dateMaj": "14/01/2016",
         "modes": [
           {
              "fonction": "Tir",
              "modulation": "Pulse",
              "sousMode": {
                  "frequence": "7616,235969",
                  "frequenceType": "Fixe",
                  "li": "16.107582696720158",
                  "liType": "Fixe",
                  "pri": "880.8080804653296",
                  "priType": "Fixe"
               },
               "balayage": {
                  "type": "Conical"
                }
           }
         ]
        }
      ]
    },
    {
      "_id": "18",
      "nom": "Loc_18",
      "hostilite": "Ami",
      "latitude": "49,272410",
      "longitude": "-3,598879",
      "dateMaj": "20/01/2016",
      "Radars": [
        {
         "_id": "26",
         "nom": "Radar_26",
         "dateMaj": "05/03/2016",
         "modes": [
           {
              "fonction": "Acquisition",
              "modulation": "CW",
              "sousMode": {
                  "frequence": "7470,235121",
                  "frequenceType": "Fixe"
               },
               "balayage": {
                  "type": "Circular",
                  "PRA": "3300"
                }
           }
         ]
        }
      ]
    },
    {
      "_id": "19",
      "nom": "Loc_19",
      "hostilite": "Hostile",
      "latitude": "48,455184",
      "longitude": "-3,562148",
      "dateMaj": "06/01/2017",
      "Radars": [
        {
         "_id": "27",
         "nom": "Radar_27",
         "dateMaj": "16/07/2016",
         "modes": [
           {
              "fonction": "Tir",
              "modulation": "Pulse",
              "sousMode": {
                  "frequence": "6666,728311",
                  "frequenceType": "Fixe",
                  "li": "4.3250486348433395",
                  "liType": "Agile",
                  "pri": "195.19133997470033",
                  "priType": "Agile"
               },
               "balayage": {
                  "type": "Circular",
                  "PRA": "701"
                }
           },
           {
              "fonction": "Tir",
              "modulation": "Pulse",
              "sousMode": {
                  "frequence": "5504,509575",
                  "frequenceType": "Agile",
                  "li": "7.358526242442756",
                  "liType": "Fixe",
                  "pri": "615.6669229173393",
                  "priType": "Agile"
               },
               "balayage": {
                  "type": "Conical"
                }
           }
         ]
        },
        {
         "_id": "28",
         "nom": "Radar_28",
         "dateMaj": "11/01/2017",
         "modes": [
           {
              "fonction": "Acquisition",
              "modulation": "CW",
              "sousMode": {
                  "frequence": "9393,532580",
                  "frequenceType": "Fixe"
               },
               "balayage": {
                  "type": "Complex",
                  "PRA": "321"
                }
           },
           {
              "fonction": "Veille",
              "modulation": "Pulse",
              "sousMode": {
                  "frequence": "9788,387831",
                  "frequenceType": "Agile",
                  "li": "11.453169669599696",
                  "liType": "Fixe",
                  "pri": "625.3960642822901",
                  "priType": "Agile"
               },
               "balayage": {
                  "type": "Sectorial",
                  "PRA": "1476"
                }
           }
         ]
        }
      ]
    },
    {
      "_id": "20",
      "nom": "Loc_20",
      "hostilite": "Inconnu",
      "latitude": "48,462066",
      "longitude": "-3,516408",
      "dateMaj": "09/01/2016",
      "Radars": [
        {
         "_id": "29",
         "nom": "Radar_29",
         "dateMaj": "10/03/2016",
         "modes": [
           {
              "fonction": "Veille",
              "modulation": "CW",
              "sousMode": {
                  "frequence": "8188,894259",
                  "frequenceType": "Agile"
               },
               "balayage": {
                  "type": "Circular",
                  "PRA": "2487"
                }
           }
         ]
        }
      ]
    },
    {
      "_id": "21",
      "nom": "Loc_21",
      "hostilite": "Hostile",
      "latitude": "49,163889",
      "longitude": "-3,870614",
      "dateMaj": "17/01/2017",
      "Radars": [
        {
         "_id": "30",
         "nom": "Radar_30",
         "dateMaj": "09/11/2016",
         "modes": [
           {
              "fonction": "Acquisition",
              "modulation": "CW",
              "sousMode": {
                  "frequence": "6105,781844",
                  "frequenceType": "Agile"
               },
               "balayage": {
                  "type": "Complex",
                  "PRA": "2386"
                }
           }
         ]
        }
      ]
    },
    {
      "_id": "22",
      "nom": "Loc_22",
      "hostilite": "Ami",
      "latitude": "48,501304",
      "longitude": "-3,776741",
      "dateMaj": "25/01/2016",
      "Radars": [
        {
         "_id": "31",
         "nom": "Radar_31",
         "dateMaj": "07/06/2016",
         "modes": [
           {
              "fonction": "Veille",
              "modulation": "CW",
              "sousMode": {
                  "frequence": "9770,439741",
                  "frequenceType": "Agile"
               },
               "balayage": {
                  "type": "Conical"
                }
           },
           {
              "fonction": "Poursuite",
              "modulation": "CW",
              "sousMode": {
                  "frequence": "9929,914461",
                  "frequenceType": "Fixe"
               },
               "balayage": {
                  "type": "Fixe"
                }
           }
         ]
        },
        {
         "_id": "32",
         "nom": "Radar_32",
         "dateMaj": "22/11/2016",
         "modes": [
           {
              "fonction": "Veille",
              "modulation": "Pulse",
              "sousMode": {
                  "frequence": "7862,000297",
                  "frequenceType": "Agile",
                  "li": "4.520626426576451",
                  "liType": "Agile",
                  "pri": "842.6804902083076",
                  "priType": "Agile"
               },
               "balayage": {
                  "type": "Complex",
                  "PRA": "2216"
                }
           }
         ]
        }
      ]
    },
    {
      "_id": "23",
      "nom": "Loc_23",
      "hostilite": "Ami",
      "latitude": "48,591675",
      "longitude": "-4,232422",
      "dateMaj": "21/05/2016",
      "Radars": [
        {
         "_id": "33",
         "nom": "Radar_33",
         "dateMaj": "03/11/2016",
         "modes": [
           {
              "fonction": "Acquisition",
              "modulation": "Pulse",
              "sousMode": {
                  "frequence": "6418,309617",
                  "frequenceType": "Fixe",
                  "li": "18.30072346541363",
                  "liType": "Agile",
                  "pri": "842.5596239964831",
                  "priType": "Agile"
               },
               "balayage": {
                  "type": "Conical"
                }
           },
           {
              "fonction": "Acquisition",
              "modulation": "CW",
              "sousMode": {
                  "frequence": "4897,959648",
                  "frequenceType": "Fixe"
               },
               "balayage": {
                  "type": "Sectorial",
                  "PRA": "4790"
                }
           }
         ]
        }
      ]
    },
    {
      "_id": "24",
      "nom": "Loc_24",
      "hostilite": "Inconnu",
      "latitude": "48,707812",
      "longitude": "-3,607693",
      "dateMaj": "24/01/2016",
      "Radars": [
        {
         "_id": "34",
         "nom": "Radar_34",
         "dateMaj": "08/02/2016",
         "modes": [
           {
              "fonction": "Poursuite",
              "modulation": "CW",
              "sousMode": {
                  "frequence": "9286,283248",
                  "frequenceType": "Fixe"
               },
               "balayage": {
                  "type": "Fixe"
                }
           },
           {
              "fonction": "Tir",
              "modulation": "CW",
              "sousMode": {
                  "frequence": "7013,329600",
                  "frequenceType": "Agile"
               },
               "balayage": {
                  "type": "Complex",
                  "PRA": "1144"
                }
           }
         ]
        }
      ]
    },
    {
      "_id": "25",
      "nom": "Loc_25",
      "hostilite": "Inconnu",
      "latitude": "48,560201",
      "longitude": "-3,665845",
      "dateMaj": "01/09/2016",
      "Radars": [
        {
         "_id": "35",
         "nom": "Radar_35",
         "dateMaj": "09/12/2016",
         "modes": [
           {
              "fonction": "Veille",
              "modulation": "CW",
              "sousMode": {
                  "frequence": "3755,588501",
                  "frequenceType": "Fixe"
               },
               "balayage": {
                  "type": "Circular",
                  "PRA": "1706"
                }
           },
           {
              "fonction": "Tir",
              "modulation": "Pulse",
              "sousMode": {
                  "frequence": "5897,156575",
                  "frequenceType": "Fixe",
                  "li": "15.275340479718896",
                  "liType": "Agile",
                  "pri": "506.588725380351",
                  "priType": "Fixe"
               },
               "balayage": {
                  "type": "Conical"
                }
           }
         ]
        }
      ]
    },
    {
      "_id": "26",
      "nom": "Loc_26",
      "hostilite": "Ami",
      "latitude": "48,505238",
      "longitude": "-4,340025",
      "dateMaj": "07/10/2016",
      "Radars": [
        {
         "_id": "36",
         "nom": "Radar_36",
         "dateMaj": "08/01/2017",
         "modes": [
           {
              "fonction": "Poursuite",
              "modulation": "CW",
              "sousMode": {
                  "frequence": "8895,238957",
                  "frequenceType": "Agile"
               },
               "balayage": {
                  "type": "Fixe"
                }
           },
           {
              "fonction": "Acquisition",
              "modulation": "Pulse",
              "sousMode": {
                  "frequence": "7188,706232",
                  "frequenceType": "Agile",
                  "li": "9.716607581550036",
                  "liType": "Agile",
                  "pri": "364.30096130941894",
                  "priType": "Fixe"
               },
               "balayage": {
                  "type": "Circular",
                  "PRA": "2775"
                }
           }
         ]
        }
      ]
    },
    {
      "_id": "27",
      "nom": "Loc_27",
      "hostilite": "Inconnu",
      "latitude": "48,601224",
      "longitude": "-3,481784",
      "dateMaj": "09/12/2016",
      "Radars": [
        {
         "_id": "37",
         "nom": "Radar_37",
         "dateMaj": "14/07/2016",
         "modes": [
           {
              "fonction": "Tir",
              "modulation": "CW",
              "sousMode": {
                  "frequence": "3294,271668",
                  "frequenceType": "Fixe"
               },
               "balayage": {
                  "type": "Complex",
                  "PRA": "4140"
                }
           }
         ]
        }
      ]
    },
    {
      "_id": "28",
      "nom": "Loc_28",
      "hostilite": "Hostile",
      "latitude": "49,053494",
      "longitude": "-3,943492",
      "dateMaj": "22/06/2016",
      "Radars": [
        {
         "_id": "38",
         "nom": "Radar_38",
         "dateMaj": "18/04/2016",
         "modes": [
           {
              "fonction": "Veille",
              "modulation": "CW",
              "sousMode": {
                  "frequence": "3229,186877",
                  "frequenceType": "Fixe"
               },
               "balayage": {
                  "type": "Circular",
                  "PRA": "2031"
                }
           }
         ]
        }
      ]
    },
    {
      "_id": "29",
      "nom": "Loc_29",
      "hostilite": "Ami",
      "latitude": "48,511294",
      "longitude": "-3,662760",
      "dateMaj": "21/05/2016",
      "Radars": [
        {
         "_id": "39",
         "nom": "Radar_39",
         "dateMaj": "07/12/2016",
         "modes": [
           {
              "fonction": "Acquisition",
              "modulation": "CW",
              "sousMode": {
                  "frequence": "6520,512562",
                  "frequenceType": "Fixe"
               },
               "balayage": {
                  "type": "Circular",
                  "PRA": "95"
                }
           }
         ]
        },
        {
         "_id": "40",
         "nom": "Radar_40",
         "dateMaj": "11/07/2016",
         "modes": [
           {
              "fonction": "Acquisition",
              "modulation": "CW",
              "sousMode": {
                  "frequence": "4097,691415",
                  "frequenceType": "Agile"
               },
               "balayage": {
                  "type": "Conical"
                }
           }
         ]
        }
      ]
    },
    {
      "_id": "30",
      "nom": "Loc_30",
      "hostilite": "Inconnu",
      "latitude": "49,322961",
      "longitude": "-3,615528",
      "dateMaj": "17/11/2016",
      "Radars": [
        {
         "_id": "41",
         "nom": "Radar_41",
         "dateMaj": "24/12/2016",
         "modes": [
           {
              "fonction": "Acquisition",
              "modulation": "CW",
              "sousMode": {
                  "frequence": "8556,932580",
                  "frequenceType": "Agile"
               },
               "balayage": {
                  "type": "Conical"
                }
           }
         ]
        }
      ]
    },
    {
      "_id": "31",
      "nom": "Loc_31",
      "hostilite": "Inconnu",
      "latitude": "49,288180",
      "longitude": "-4,396138",
      "dateMaj": "18/01/2017",
      "Radars": [
        {
         "_id": "42",
         "nom": "Radar_42",
         "dateMaj": "04/09/2016",
         "modes": [
           {
              "fonction": "Acquisition",
              "modulation": "Pulse",
              "sousMode": {
                  "frequence": "4347,757352",
                  "frequenceType": "Agile",
                  "li": "4.852037312882226",
                  "liType": "Agile",
                  "pri": "353.9581094740629",
                  "priType": "Fixe"
               },
               "balayage": {
                  "type": "Complex",
                  "PRA": "3933"
                }
           }
         ]
        },
        {
         "_id": "43",
         "nom": "Radar_43",
         "dateMaj": "19/10/2016",
         "modes": [
           {
              "fonction": "Veille",
              "modulation": "CW",
              "sousMode": {
                  "frequence": "3593,832073",
                  "frequenceType": "Agile"
               },
               "balayage": {
                  "type": "Conical"
                }
           }
         ]
        }
      ]
    },
    {
      "_id": "32",
      "nom": "Loc_32",
      "hostilite": "Inconnu",
      "latitude": "48,928030",
      "longitude": "-4,378046",
      "dateMaj": "15/10/2016",
      "Radars": [
        {
         "_id": "44",
         "nom": "Radar_44",
         "dateMaj": "12/03/2016",
         "modes": [
           {
              "fonction": "Tir",
              "modulation": "Pulse",
              "sousMode": {
                  "frequence": "5888,667067",
                  "frequenceType": "Agile",
                  "li": "3.1086467939766234",
                  "liType": "Fixe",
                  "pri": "244.84707374827715",
                  "priType": "Agile"
               },
               "balayage": {
                  "type": "Conical"
                }
           }
         ]
        },
        {
         "_id": "45",
         "nom": "Radar_45",
         "dateMaj": "08/08/2016",
         "modes": [
           {
              "fonction": "Tir",
              "modulation": "CW",
              "sousMode": {
                  "frequence": "4237,592745",
                  "frequenceType": "Fixe"
               },
               "balayage": {
                  "type": "Fixe"
                }
           }
         ]
        }
      ]
    },
    {
      "_id": "33",
      "nom": "Loc_33",
      "hostilite": "Inconnu",
      "latitude": "48,696826",
      "longitude": "-3,882098",
      "dateMaj": "22/06/2016",
      "Radars": [
        {
         "_id": "46",
         "nom": "Radar_46",
         "dateMaj": "18/03/2016",
         "modes": [
           {
              "fonction": "Veille",
              "modulation": "Pulse",
              "sousMode": {
                  "frequence": "9004,334829",
                  "frequenceType": "Agile",
                  "li": "2.679150477591589",
                  "liType": "Agile",
                  "pri": "527.9665315102675",
                  "priType": "Fixe"
               },
               "balayage": {
                  "type": "Complex",
                  "PRA": "1808"
                }
           }
         ]
        },
        {
         "_id": "47",
         "nom": "Radar_47",
         "dateMaj": "05/03/2016",
         "modes": [
           {
              "fonction": "Poursuite",
              "modulation": "Pulse",
              "sousMode": {
                  "frequence": "8644,770120",
                  "frequenceType": "Fixe",
                  "li": "3.6370501910414657",
                  "liType": "Agile",
                  "pri": "965.1385985464519",
                  "priType": "Agile"
               },
               "balayage": {
                  "type": "Sectorial",
                  "PRA": "4502"
                }
           },
           {
              "fonction": "Poursuite",
              "modulation": "Pulse",
              "sousMode": {
                  "frequence": "9111,724281",
                  "frequenceType": "Agile",
                  "li": "2.219334179389985",
                  "liType": "Agile",
                  "pri": "859.5390434541534",
                  "priType": "Fixe"
               },
               "balayage": {
                  "type": "Sectorial",
                  "PRA": "3135"
                }
           }
         ]
        }
      ]
    },
    {
      "_id": "34",
      "nom": "Loc_34",
      "hostilite": "Ami",
      "latitude": "49,109267",
      "longitude": "-4,006872",
      "dateMaj": "23/04/2016",
      "Radars": [
        {
         "_id": "48",
         "nom": "Radar_48",
         "dateMaj": "04/10/2016",
         "modes": [
           {
              "fonction": "Tir",
              "modulation": "Pulse",
              "sousMode": {
                  "frequence": "4789,002710",
                  "frequenceType": "Agile",
                  "li": "16.15187321579282",
                  "liType": "Fixe",
                  "pri": "165.92097585710934",
                  "priType": "Agile"
               },
               "balayage": {
                  "type": "Conical"
                }
           }
         ]
        }
      ]
    },
    {
      "_id": "35",
      "nom": "Loc_35",
      "hostilite": "Ami",
      "latitude": "49,290755",
      "longitude": "-4,463210",
      "dateMaj": "25/09/2016",
      "Radars": [
        {
         "_id": "49",
         "nom": "Radar_49",
         "dateMaj": "19/05/2016",
         "modes": [
           {
              "fonction": "Tir",
              "modulation": "CW",
              "sousMode": {
                  "frequence": "4884,217357",
                  "frequenceType": "Agile"
               },
               "balayage": {
                  "type": "Conical"
                }
           }
         ]
        },
        {
         "_id": "50",
         "nom": "Radar_50",
         "dateMaj": "05/04/2016",
         "modes": [
           {
              "fonction": "Tir",
              "modulation": "Pulse",
              "sousMode": {
                  "frequence": "9097,698068",
                  "frequenceType": "Fixe",
                  "li": "3.389722484544384",
                  "liType": "Fixe",
                  "pri": "453.8976100134179",
                  "priType": "Fixe"
               },
               "balayage": {
                  "type": "Complex",
                  "PRA": "1472"
                }
           }
         ]
        }
      ]
    },
    {
      "_id": "36",
      "nom": "Loc_36",
      "hostilite": "Hostile",
      "latitude": "48,512586",
      "longitude": "-4,128733",
      "dateMaj": "09/01/2016",
      "Radars": [
        {
         "_id": "51",
         "nom": "Radar_51",
         "dateMaj": "02/07/2016",
         "modes": [
           {
              "fonction": "Tir",
              "modulation": "CW",
              "sousMode": {
                  "frequence": "7356,107421",
                  "frequenceType": "Agile"
               },
               "balayage": {
                  "type": "Conical"
                }
           }
         ]
        },
        {
         "_id": "52",
         "nom": "Radar_52",
         "dateMaj": "10/01/2017",
         "modes": [
           {
              "fonction": "Tir",
              "modulation": "CW",
              "sousMode": {
                  "frequence": "8833,926037",
                  "frequenceType": "Fixe"
               },
               "balayage": {
                  "type": "Complex",
                  "PRA": "4058"
                }
           },
           {
              "fonction": "Acquisition",
              "modulation": "Pulse",
              "sousMode": {
                  "frequence": "9778,392688",
                  "frequenceType": "Agile",
                  "li": "15.367236892206623",
                  "liType": "Agile",
                  "pri": "690.3544808448601",
                  "priType": "Agile"
               },
               "balayage": {
                  "type": "Circular",
                  "PRA": "2995"
                }
           }
         ]
        }
      ]
    },
    {
      "_id": "37",
      "nom": "Loc_37",
      "hostilite": "Hostile",
      "latitude": "48,440194",
      "longitude": "-3,937827",
      "dateMaj": "03/05/2016",
      "Radars": [
        {
         "_id": "53",
         "nom": "Radar_53",
         "dateMaj": "02/08/2016",
         "modes": [
           {
              "fonction": "Veille",
              "modulation": "Pulse",
              "sousMode": {
                  "frequence": "5640,962671",
                  "frequenceType": "Fixe",
                  "li": "6.475903736776801",
                  "liType": "Fixe",
                  "pri": "329.46843790623177",
                  "priType": "Fixe"
               },
               "balayage": {
                  "type": "Complex",
                  "PRA": "3704"
                }
           },
           {
              "fonction": "Acquisition",
              "modulation": "Pulse",
              "sousMode": {
                  "frequence": "6495,354799",
                  "frequenceType": "Fixe",
                  "li": "8.775171264061303",
                  "liType": "Fixe",
                  "pri": "867.8827268028763",
                  "priType": "Agile"
               },
               "balayage": {
                  "type": "Fixe"
                }
           }
         ]
        }
      ]
    },
    {
      "_id": "38",
      "nom": "Loc_38",
      "hostilite": "Hostile",
      "latitude": "49,158405",
      "longitude": "-3,545029",
      "dateMaj": "11/12/2016",
      "Radars": [
        {
         "_id": "54",
         "nom": "Radar_54",
         "dateMaj": "07/06/2016",
         "modes": [
           {
              "fonction": "Poursuite",
              "modulation": "CW",
              "sousMode": {
                  "frequence": "4894,802833",
                  "frequenceType": "Fixe"
               },
               "balayage": {
                  "type": "Fixe"
                }
           },
           {
              "fonction": "Acquisition",
              "modulation": "CW",
              "sousMode": {
                  "frequence": "5579,122013",
                  "frequenceType": "Agile"
               },
               "balayage": {
                  "type": "Circular",
                  "PRA": "2787"
                }
           }
         ]
        },
        {
         "_id": "55",
         "nom": "Radar_55",
         "dateMaj": "24/11/2016",
         "modes": [
           {
              "fonction": "Veille",
              "modulation": "Pulse",
              "sousMode": {
                  "frequence": "3378,888910",
                  "frequenceType": "Fixe",
                  "li": "17.9601995408926",
                  "liType": "Fixe",
                  "pri": "863.5999322030344",
                  "priType": "Agile"
               },
               "balayage": {
                  "type": "Sectorial",
                  "PRA": "3285"
                }
           },
           {
              "fonction": "Poursuite",
              "modulation": "CW",
              "sousMode": {
                  "frequence": "4762,806524",
                  "frequenceType": "Fixe"
               },
               "balayage": {
                  "type": "Conical"
                }
           }
         ]
        }
      ]
    },
    {
      "_id": "39",
      "nom": "Loc_39",
      "hostilite": "Hostile",
      "latitude": "49,169208",
      "longitude": "-4,361371",
      "dateMaj": "10/02/2016",
      "Radars": [
        {
         "_id": "56",
         "nom": "Radar_56",
         "dateMaj": "14/10/2016",
         "modes": [
           {
              "fonction": "Tir",
              "modulation": "CW",
              "sousMode": {
                  "frequence": "3058,965561",
                  "frequenceType": "Fixe"
               },
               "balayage": {
                  "type": "Fixe"
                }
           }
         ]
        },
        {
         "_id": "57",
         "nom": "Radar_57",
         "dateMaj": "07/08/2016",
         "modes": [
           {
              "fonction": "Acquisition",
              "modulation": "Pulse",
              "sousMode": {
                  "frequence": "5732,370758",
                  "frequenceType": "Fixe",
                  "li": "4.691808791991452",
                  "liType": "Fixe",
                  "pri": "516.5495686976077",
                  "priType": "Fixe"
               },
               "balayage": {
                  "type": "Fixe"
                }
           },
           {
              "fonction": "Acquisition",
              "modulation": "CW",
              "sousMode": {
                  "frequence": "9074,707016",
                  "frequenceType": "Agile"
               },
               "balayage": {
                  "type": "Fixe"
                }
           }
         ]
        }
      ]
    },
    {
      "_id": "40",
      "nom": "Loc_40",
      "hostilite": "Hostile",
      "latitude": "49,044606",
      "longitude": "-3,908357",
      "dateMaj": "13/06/2016",
      "Radars": [
        {
         "_id": "58",
         "nom": "Radar_58",
         "dateMaj": "19/01/2016",
         "modes": [
           {
              "fonction": "Tir",
              "modulation": "Pulse",
              "sousMode": {
                  "frequence": "3536,799051",
                  "frequenceType": "Agile",
                  "li": "12.085045441383674",
                  "liType": "Fixe",
                  "pri": "136.77566715676363",
                  "priType": "Agile"
               },
               "balayage": {
                  "type": "Conical"
                }
           },
           {
              "fonction": "Veille",
              "modulation": "Pulse",
              "sousMode": {
                  "frequence": "7186,866521",
                  "frequenceType": "Agile",
                  "li": "2.6925189803683107",
                  "liType": "Fixe",
                  "pri": "270.1287099238663",
                  "priType": "Fixe"
               },
               "balayage": {
                  "type": "Conical"
                }
           }
         ]
        },
        {
         "_id": "59",
         "nom": "Radar_59",
         "dateMaj": "12/05/2016",
         "modes": [
           {
              "fonction": "Tir",
              "modulation": "Pulse",
              "sousMode": {
                  "frequence": "9222,738497",
                  "frequenceType": "Agile",
                  "li": "13.848221804938063",
                  "liType": "Agile",
                  "pri": "680.390580088314",
                  "priType": "Agile"
               },
               "balayage": {
                  "type": "Complex",
                  "PRA": "2985"
                }
           },
           {
              "fonction": "Poursuite",
              "modulation": "Pulse",
              "sousMode": {
                  "frequence": "8628,649039",
                  "frequenceType": "Agile",
                  "li": "19.746703190398215",
                  "liType": "Fixe",
                  "pri": "103.20301017275604",
                  "priType": "Agile"
               },
               "balayage": {
                  "type": "Sectorial",
                  "PRA": "3580"
                }
           }
         ]
        }
      ]
    },
    {
      "_id": "41",
      "nom": "Loc_41",
      "hostilite": "Hostile",
      "latitude": "49,311867",
      "longitude": "-3,924649",
      "dateMaj": "15/07/2016",
      "Radars": [
        {
         "_id": "60",
         "nom": "Radar_60",
         "dateMaj": "09/10/2016",
         "modes": [
           {
              "fonction": "Tir",
              "modulation": "CW",
              "sousMode": {
                  "frequence": "4476,198393",
                  "frequenceType": "Agile"
               },
               "balayage": {
                  "type": "Fixe"
                }
           }
         ]
        }
      ]
    },
    {
      "_id": "42",
      "nom": "Loc_42",
      "hostilite": "Hostile",
      "latitude": "49,067603",
      "longitude": "-4,042115",
      "dateMaj": "11/02/2016",
      "Radars": [
        {
         "_id": "61",
         "nom": "Radar_61",
         "dateMaj": "08/01/2016",
         "modes": [
           {
              "fonction": "Veille",
              "modulation": "Pulse",
              "sousMode": {
                  "frequence": "8436,827730",
                  "frequenceType": "Fixe",
                  "li": "9.673051079359599",
                  "liType": "Agile",
                  "pri": "342.7505667019883",
                  "priType": "Fixe"
               },
               "balayage": {
                  "type": "Sectorial",
                  "PRA": "670"
                }
           },
           {
              "fonction": "Poursuite",
              "modulation": "CW",
              "sousMode": {
                  "frequence": "4580,026344",
                  "frequenceType": "Agile"
               },
               "balayage": {
                  "type": "Sectorial",
                  "PRA": "1944"
                }
           }
         ]
        },
        {
         "_id": "62",
         "nom": "Radar_62",
         "dateMaj": "14/12/2016",
         "modes": [
           {
              "fonction": "Veille",
              "modulation": "Pulse",
              "sousMode": {
                  "frequence": "5587,139425",
                  "frequenceType": "Fixe",
                  "li": "17.635165308618102",
                  "liType": "Agile",
                  "pri": "878.3569172015734",
                  "priType": "Agile"
               },
               "balayage": {
                  "type": "Fixe"
                }
           }
         ]
        }
      ]
    },
    {
      "_id": "43",
      "nom": "Loc_43",
      "hostilite": "Hostile",
      "latitude": "48,954427",
      "longitude": "-3,847079",
      "dateMaj": "08/12/2016",
      "Radars": [
        {
         "_id": "63",
         "nom": "Radar_63",
         "dateMaj": "25/06/2016",
         "modes": [
           {
              "fonction": "Tir",
              "modulation": "Pulse",
              "sousMode": {
                  "frequence": "6339,315179",
                  "frequenceType": "Fixe",
                  "li": "3.4914313655820015",
                  "liType": "Fixe",
                  "pri": "846.6188825456707",
                  "priType": "Agile"
               },
               "balayage": {
                  "type": "Conical"
                }
           }
         ]
        }
      ]
    },
    {
      "_id": "44",
      "nom": "Loc_44",
      "hostilite": "Inconnu",
      "latitude": "49,157217",
      "longitude": "-3,664691",
      "dateMaj": "20/01/2016",
      "Radars": [
        {
         "_id": "64",
         "nom": "Radar_64",
         "dateMaj": "13/07/2016",
         "modes": [
           {
              "fonction": "Veille",
              "modulation": "CW",
              "sousMode": {
                  "frequence": "8158,229692",
                  "frequenceType": "Fixe"
               },
               "balayage": {
                  "type": "Complex",
                  "PRA": "1759"
                }
           }
         ]
        },
        {
         "_id": "65",
         "nom": "Radar_65",
         "dateMaj": "10/11/2016",
         "modes": [
           {
              "fonction": "Poursuite",
              "modulation": "CW",
              "sousMode": {
                  "frequence": "3704,847439",
                  "frequenceType": "Fixe"
               },
               "balayage": {
                  "type": "Circular",
                  "PRA": "724"
                }
           },
           {
              "fonction": "Tir",
              "modulation": "CW",
              "sousMode": {
                  "frequence": "6535,702261",
                  "frequenceType": "Agile"
               },
               "balayage": {
                  "type": "Fixe"
                }
           }
         ]
        }
      ]
    },
    {
      "_id": "45",
      "nom": "Loc_45",
      "hostilite": "Inconnu",
      "latitude": "48,853349",
      "longitude": "-3,653317",
      "dateMaj": "09/05/2016",
      "Radars": [
        {
         "_id": "66",
         "nom": "Radar_66",
         "dateMaj": "11/09/2016",
         "modes": [
           {
              "fonction": "Tir",
              "modulation": "CW",
              "sousMode": {
                  "frequence": "3204,927746",
                  "frequenceType": "Agile"
               },
               "balayage": {
                  "type": "Sectorial",
                  "PRA": "3242"
                }
           },
           {
              "fonction": "Poursuite",
              "modulation": "Pulse",
              "sousMode": {
                  "frequence": "6219,972351",
                  "frequenceType": "Agile",
                  "li": "18.902956345845134",
                  "liType": "Fixe",
                  "pri": "666.4465806456244",
                  "priType": "Fixe"
               },
               "balayage": {
                  "type": "Fixe"
                }
           }
         ]
        },
        {
         "_id": "67",
         "nom": "Radar_67",
         "dateMaj": "06/12/2016",
         "modes": [
           {
              "fonction": "Veille",
              "modulation": "CW",
              "sousMode": {
                  "frequence": "8381,274024",
                  "frequenceType": "Agile"
               },
               "balayage": {
                  "type": "Circular",
                  "PRA": "3960"
                }
           }
         ]
        }
      ]
    },
    {
      "_id": "46",
      "nom": "Loc_46",
      "hostilite": "Hostile",
      "latitude": "48,488306",
      "longitude": "-4,059989",
      "dateMaj": "04/04/2016",
      "Radars": [
        {
         "_id": "68",
         "nom": "Radar_68",
         "dateMaj": "13/10/2016",
         "modes": [
           {
              "fonction": "Acquisition",
              "modulation": "Pulse",
              "sousMode": {
                  "frequence": "5476,778383",
                  "frequenceType": "Fixe",
                  "li": "4.492233185091658",
                  "liType": "Fixe",
                  "pri": "237.62409702967153",
                  "priType": "Fixe"
               },
               "balayage": {
                  "type": "Complex",
                  "PRA": "4132"
                }
           }
         ]
        }
      ]
    },
    {
      "_id": "47",
      "nom": "Loc_47",
      "hostilite": "Inconnu",
      "latitude": "49,202576",
      "longitude": "-3,861520",
      "dateMaj": "11/09/2016",
      "Radars": [
        {
         "_id": "69",
         "nom": "Radar_69",
         "dateMaj": "16/05/2016",
         "modes": [
           {
              "fonction": "Tir",
              "modulation": "Pulse",
              "sousMode": {
                  "frequence": "7224,559397",
                  "frequenceType": "Agile",
                  "li": "4.505871502685515",
                  "liType": "Fixe",
                  "pri": "638.1944061452546",
                  "priType": "Fixe"
               },
               "balayage": {
                  "type": "Circular",
                  "PRA": "1038"
                }
           },
           {
              "fonction": "Tir",
              "modulation": "Pulse",
              "sousMode": {
                  "frequence": "3251,764126",
                  "frequenceType": "Fixe",
                  "li": "10.687267528368654",
                  "liType": "Fixe",
                  "pri": "610.9801666239649",
                  "priType": "Fixe"
               },
               "balayage": {
                  "type": "Sectorial",
                  "PRA": "2819"
                }
           }
         ]
        },
        {
         "_id": "70",
         "nom": "Radar_70",
         "dateMaj": "17/05/2016",
         "modes": [
           {
              "fonction": "Poursuite",
              "modulation": "Pulse",
              "sousMode": {
                  "frequence": "6718,307927",
                  "frequenceType": "Agile",
                  "li": "5.551769678315118",
                  "liType": "Agile",
                  "pri": "943.850649688138",
                  "priType": "Fixe"
               },
               "balayage": {
                  "type": "Sectorial",
                  "PRA": "3950"
                }
           }
         ]
        }
      ]
    },
    {
      "_id": "48",
      "nom": "Loc_48",
      "hostilite": "Inconnu",
      "latitude": "49,097577",
      "longitude": "-4,340751",
      "dateMaj": "07/01/2016",
      "Radars": [
        {
         "_id": "71",
         "nom": "Radar_71",
         "dateMaj": "15/01/2017",
         "modes": [
           {
              "fonction": "Veille",
              "modulation": "CW",
              "sousMode": {
                  "frequence": "5328,784640",
                  "frequenceType": "Fixe"
               },
               "balayage": {
                  "type": "Fixe"
                }
           }
         ]
        },
        {
         "_id": "72",
         "nom": "Radar_72",
         "dateMaj": "08/02/2016",
         "modes": [
           {
              "fonction": "Acquisition",
              "modulation": "Pulse",
              "sousMode": {
                  "frequence": "6152,699708",
                  "frequenceType": "Fixe",
                  "li": "18.106560569532622",
                  "liType": "Fixe",
                  "pri": "857.3531877355928",
                  "priType": "Agile"
               },
               "balayage": {
                  "type": "Sectorial",
                  "PRA": "4458"
                }
           }
         ]
        }
      ]
    },
    {
      "_id": "49",
      "nom": "Loc_49",
      "hostilite": "Inconnu",
      "latitude": "49,219455",
      "longitude": "-3,546432",
      "dateMaj": "23/04/2016",
      "Radars": [
        {
         "_id": "73",
         "nom": "Radar_73",
         "dateMaj": "15/01/2016",
         "modes": [
           {
              "fonction": "Acquisition",
              "modulation": "Pulse",
              "sousMode": {
                  "frequence": "8882,663111",
                  "frequenceType": "Agile",
                  "li": "8.166704831052739",
                  "liType": "Fixe",
                  "pri": "924.0097774268453",
                  "priType": "Fixe"
               },
               "balayage": {
                  "type": "Sectorial",
                  "PRA": "3209"
                }
           }
         ]
        }
      ]
    },
    {
      "_id": "50",
      "nom": "Loc_50",
      "hostilite": "Ami",
      "latitude": "49,185524",
      "longitude": "-3,862340",
      "dateMaj": "22/02/2016",
      "Radars": [
        {
         "_id": "74",
         "nom": "Radar_74",
         "dateMaj": "11/04/2016",
         "modes": [
           {
              "fonction": "Veille",
              "modulation": "Pulse",
              "sousMode": {
                  "frequence": "8071,939668",
                  "frequenceType": "Agile",
                  "li": "17.03639485338612",
                  "liType": "Fixe",
                  "pri": "629.7874710424038",
                  "priType": "Agile"
               },
               "balayage": {
                  "type": "Fixe"
                }
           },
           {
              "fonction": "Acquisition",
              "modulation": "Pulse",
              "sousMode": {
                  "frequence": "6961,149389",
                  "frequenceType": "Fixe",
                  "li": "4.741823233071577",
                  "liType": "Fixe",
                  "pri": "748.700734912594",
                  "priType": "Agile"
               },
               "balayage": {
                  "type": "Sectorial",
                  "PRA": "1346"
                }
           }
         ]
        },
        {
         "_id": "75",
         "nom": "Radar_75",
         "dateMaj": "01/06/2016",
         "modes": [
           {
              "fonction": "Tir",
              "modulation": "CW",
              "sousMode": {
                  "frequence": "8103,588206",
                  "frequenceType": "Fixe"
               },
               "balayage": {
                  "type": "Conical"
                }
           },
           {
              "fonction": "Acquisition",
              "modulation": "CW",
              "sousMode": {
                  "frequence": "4998,145559",
                  "frequenceType": "Agile"
               },
               "balayage": {
                  "type": "Fixe"
                }
           }
         ]
        }
      ]
    },
    {
      "_id": "51",
      "nom": "Loc_51",
      "hostilite": "Ami",
      "latitude": "49,123041",
      "longitude": "-4,014158",
      "dateMaj": "20/08/2016",
      "Radars": [
        {
         "_id": "76",
         "nom": "Radar_76",
         "dateMaj": "07/02/2016",
         "modes": [
           {
              "fonction": "Acquisition",
              "modulation": "Pulse",
              "sousMode": {
                  "frequence": "6689,584194",
                  "frequenceType": "Agile",
                  "li": "9.135551838111194",
                  "liType": "Agile",
                  "pri": "619.9949997016611",
                  "priType": "Agile"
               },
               "balayage": {
                  "type": "Conical"
                }
           },
           {
              "fonction": "Poursuite",
              "modulation": "CW",
              "sousMode": {
                  "frequence": "3173,093229",
                  "frequenceType": "Agile"
               },
               "balayage": {
                  "type": "Fixe"
                }
           }
         ]
        }
      ]
    },
    {
      "_id": "52",
      "nom": "Loc_52",
      "hostilite": "Inconnu",
      "latitude": "49,264111",
      "longitude": "-4,306679",
      "dateMaj": "22/07/2016",
      "Radars": [
        {
         "_id": "77",
         "nom": "Radar_77",
         "dateMaj": "20/01/2016",
         "modes": [
           {
              "fonction": "Tir",
              "modulation": "Pulse",
              "sousMode": {
                  "frequence": "7341,041642",
                  "frequenceType": "Fixe",
                  "li": "11.231532874267481",
                  "liType": "Agile",
                  "pri": "131.29024659959168",
                  "priType": "Agile"
               },
               "balayage": {
                  "type": "Circular",
                  "PRA": "2902"
                }
           }
         ]
        }
      ]
    },
    {
      "_id": "53",
      "nom": "Loc_53",
      "hostilite": "Hostile",
      "latitude": "48,792895",
      "longitude": "-4,048354",
      "dateMaj": "24/04/2016",
      "Radars": [
        {
         "_id": "78",
         "nom": "Radar_78",
         "dateMaj": "12/11/2016",
         "modes": [
           {
              "fonction": "Poursuite",
              "modulation": "Pulse",
              "sousMode": {
                  "frequence": "3898,484288",
                  "frequenceType": "Fixe",
                  "li": "5.363660799321762",
                  "liType": "Agile",
                  "pri": "788.8287696193044",
                  "priType": "Agile"
               },
               "balayage": {
                  "type": "Fixe"
                }
           },
           {
              "fonction": "Veille",
              "modulation": "CW",
              "sousMode": {
                  "frequence": "8272,576238",
                  "frequenceType": "Fixe"
               },
               "balayage": {
                  "type": "Sectorial",
                  "PRA": "985"
                }
           }
         ]
        },
        {
         "_id": "79",
         "nom": "Radar_79",
         "dateMaj": "25/02/2016",
         "modes": [
           {
              "fonction": "Veille",
              "modulation": "CW",
              "sousMode": {
                  "frequence": "4546,463420",
                  "frequenceType": "Agile"
               },
               "balayage": {
                  "type": "Fixe"
                }
           }
         ]
        }
      ]
    },
    {
      "_id": "54",
      "nom": "Loc_54",
      "hostilite": "Inconnu",
      "latitude": "48,488800",
      "longitude": "-4,173488",
      "dateMaj": "13/08/2016",
      "Radars": [
        {
         "_id": "80",
         "nom": "Radar_80",
         "dateMaj": "11/06/2016",
         "modes": [
           {
              "fonction": "Poursuite",
              "modulation": "Pulse",
              "sousMode": {
                  "frequence": "3645,263991",
                  "frequenceType": "Fixe",
                  "li": "11.594155360860169",
                  "liType": "Agile",
                  "pri": "796.1448954148369",
                  "priType": "Agile"
               },
               "balayage": {
                  "type": "Fixe"
                }
           }
         ]
        }
      ]
    },
    {
      "_id": "55",
      "nom": "Loc_55",
      "hostilite": "Ami",
      "latitude": "48,917002",
      "longitude": "-4,218251",
      "dateMaj": "14/12/2016",
      "Radars": [
        {
         "_id": "81",
         "nom": "Radar_81",
         "dateMaj": "12/09/2016",
         "modes": [
           {
              "fonction": "Acquisition",
              "modulation": "Pulse",
              "sousMode": {
                  "frequence": "5515,630386",
                  "frequenceType": "Agile",
                  "li": "10.424744497364719",
                  "liType": "Agile",
                  "pri": "860.3954405313102",
                  "priType": "Agile"
               },
               "balayage": {
                  "type": "Fixe"
                }
           },
           {
              "fonction": "Tir",
              "modulation": "Pulse",
              "sousMode": {
                  "frequence": "6502,027871",
                  "frequenceType": "Fixe",
                  "li": "12.603597786487333",
                  "liType": "Fixe",
                  "pri": "455.61275561593715",
                  "priType": "Agile"
               },
               "balayage": {
                  "type": "Fixe"
                }
           }
         ]
        },
        {
         "_id": "82",
         "nom": "Radar_82",
         "dateMaj": "13/07/2016",
         "modes": [
           {
              "fonction": "Tir",
              "modulation": "Pulse",
              "sousMode": {
                  "frequence": "6844,227682",
                  "frequenceType": "Agile",
                  "li": "16.53208580915733",
                  "liType": "Fixe",
                  "pri": "700.433669573216",
                  "priType": "Fixe"
               },
               "balayage": {
                  "type": "Complex",
                  "PRA": "2633"
                }
           },
           {
              "fonction": "Tir",
              "modulation": "CW",
              "sousMode": {
                  "frequence": "4810,747780",
                  "frequenceType": "Fixe"
               },
               "balayage": {
                  "type": "Fixe"
                }
           }
         ]
        }
      ]
    },
    {
      "_id": "56",
      "nom": "Loc_56",
      "hostilite": "Hostile",
      "latitude": "49,089826",
      "longitude": "-4,189407",
      "dateMaj": "24/02/2016",
      "Radars": [
        {
         "_id": "83",
         "nom": "Radar_83",
         "dateMaj": "19/01/2016",
         "modes": [
           {
              "fonction": "Veille",
              "modulation": "Pulse",
              "sousMode": {
                  "frequence": "3389,378819",
                  "frequenceType": "Fixe",
                  "li": "9.227538062776809",
                  "liType": "Agile",
                  "pri": "121.93079859205986",
                  "priType": "Agile"
               },
               "balayage": {
                  "type": "Fixe"
                }
           },
           {
              "fonction": "Tir",
              "modulation": "Pulse",
              "sousMode": {
                  "frequence": "5842,699808",
                  "frequenceType": "Agile",
                  "li": "18.683137591625",
                  "liType": "Agile",
                  "pri": "444.3147701281859",
                  "priType": "Agile"
               },
               "balayage": {
                  "type": "Sectorial",
                  "PRA": "3825"
                }
           }
         ]
        }
      ]
    },
    {
      "_id": "57",
      "nom": "Loc_57",
      "hostilite": "Inconnu",
      "latitude": "49,243291",
      "longitude": "-3,966538",
      "dateMaj": "15/08/2016",
      "Radars": [
        {
         "_id": "84",
         "nom": "Radar_84",
         "dateMaj": "04/02/2016",
         "modes": [
           {
              "fonction": "Poursuite",
              "modulation": "Pulse",
              "sousMode": {
                  "frequence": "6181,178857",
                  "frequenceType": "Fixe",
                  "li": "15.244870546110597",
                  "liType": "Agile",
                  "pri": "451.9954687860739",
                  "priType": "Agile"
               },
               "balayage": {
                  "type": "Fixe"
                }
           },
           {
              "fonction": "Veille",
              "modulation": "Pulse",
              "sousMode": {
                  "frequence": "9674,180549",
                  "frequenceType": "Fixe",
                  "li": "16.64630603784191",
                  "liType": "Agile",
                  "pri": "597.2832886141613",
                  "priType": "Fixe"
               },
               "balayage": {
                  "type": "Conical"
                }
           }
         ]
        },
        {
         "_id": "85",
         "nom": "Radar_85",
         "dateMaj": "14/10/2016",
         "modes": [
           {
              "fonction": "Tir",
              "modulation": "CW",
              "sousMode": {
                  "frequence": "4476,401949",
                  "frequenceType": "Fixe"
               },
               "balayage": {
                  "type": "Sectorial",
                  "PRA": "1693"
                }
           },
           {
              "fonction": "Veille",
              "modulation": "Pulse",
              "sousMode": {
                  "frequence": "6584,580479",
                  "frequenceType": "Fixe",
                  "li": "3.7558392786216546",
                  "liType": "Agile",
                  "pri": "583.0394654825544",
                  "priType": "Agile"
               },
               "balayage": {
                  "type": "Fixe"
                }
           }
         ]
        }
      ]
    },
    {
      "_id": "58",
      "nom": "Loc_58",
      "hostilite": "Inconnu",
      "latitude": "49,100597",
      "longitude": "-4,293144",
      "dateMaj": "14/08/2016",
      "Radars": [
        {
         "_id": "86",
         "nom": "Radar_86",
         "dateMaj": "20/04/2016",
         "modes": [
           {
              "fonction": "Tir",
              "modulation": "Pulse",
              "sousMode": {
                  "frequence": "3864,983291",
                  "frequenceType": "Agile",
                  "li": "6.128934399095689",
                  "liType": "Fixe",
                  "pri": "551.9890510122295",
                  "priType": "Fixe"
               },
               "balayage": {
                  "type": "Circular",
                  "PRA": "2794"
                }
           },
           {
              "fonction": "Veille",
              "modulation": "Pulse",
              "sousMode": {
                  "frequence": "8440,303523",
                  "frequenceType": "Agile",
                  "li": "15.290187793396228",
                  "liType": "Agile",
                  "pri": "966.9242188243651",
                  "priType": "Agile"
               },
               "balayage": {
                  "type": "Conical"
                }
           }
         ]
        },
        {
         "_id": "87",
         "nom": "Radar_87",
         "dateMaj": "05/12/2016",
         "modes": [
           {
              "fonction": "Veille",
              "modulation": "Pulse",
              "sousMode": {
                  "frequence": "8961,607126",
                  "frequenceType": "Fixe",
                  "li": "19.242382759384206",
                  "liType": "Fixe",
                  "pri": "700.9633679786493",
                  "priType": "Agile"
               },
               "balayage": {
                  "type": "Circular",
                  "PRA": "937"
                }
           },
           {
              "fonction": "Acquisition",
              "modulation": "CW",
              "sousMode": {
                  "frequence": "8337,687619",
                  "frequenceType": "Fixe"
               },
               "balayage": {
                  "type": "Circular",
                  "PRA": "611"
                }
           }
         ]
        }
      ]
    },
    {
      "_id": "59",
      "nom": "Loc_59",
      "hostilite": "Hostile",
      "latitude": "49,097104",
      "longitude": "-3,907717",
      "dateMaj": "11/04/2016",
      "Radars": [
        {
         "_id": "88",
         "nom": "Radar_88",
         "dateMaj": "24/07/2016",
         "modes": [
           {
              "fonction": "Acquisition",
              "modulation": "CW",
              "sousMode": {
                  "frequence": "7795,899532",
                  "frequenceType": "Agile"
               },
               "balayage": {
                  "type": "Conical"
                }
           }
         ]
        }
      ]
    },
    {
      "_id": "60",
      "nom": "Loc_60",
      "hostilite": "Inconnu",
      "latitude": "49,359373",
      "longitude": "-3,691843",
      "dateMaj": "24/01/2016",
      "Radars": [
        {
         "_id": "89",
         "nom": "Radar_89",
         "dateMaj": "01/05/2016",
         "modes": [
           {
              "fonction": "Tir",
              "modulation": "Pulse",
              "sousMode": {
                  "frequence": "3309,452521",
                  "frequenceType": "Agile",
                  "li": "18.661210720012722",
                  "liType": "Fixe",
                  "pri": "279.78806119469675",
                  "priType": "Agile"
               },
               "balayage": {
                  "type": "Conical"
                }
           },
           {
              "fonction": "Poursuite",
              "modulation": "Pulse",
              "sousMode": {
                  "frequence": "4226,715781",
                  "frequenceType": "Fixe",
                  "li": "16.859183578204032",
                  "liType": "Agile",
                  "pri": "102.31129184943157",
                  "priType": "Agile"
               },
               "balayage": {
                  "type": "Circular",
                  "PRA": "452"
                }
           }
         ]
        },
        {
         "_id": "90",
         "nom": "Radar_90",
         "dateMaj": "06/08/2016",
         "modes": [
           {
              "fonction": "Tir",
              "modulation": "Pulse",
              "sousMode": {
                  "frequence": "5162,978691",
                  "frequenceType": "Fixe",
                  "li": "14.949859074531428",
                  "liType": "Fixe",
                  "pri": "990.6794027573158",
                  "priType": "Agile"
               },
               "balayage": {
                  "type": "Circular",
                  "PRA": "1953"
                }
           }
         ]
        }
      ]
    },
    {
      "_id": "61",
      "nom": "Loc_61",
      "hostilite": "Ami",
      "latitude": "49,200169",
      "longitude": "-3,663317",
      "dateMaj": "25/02/2016",
      "Radars": [
        {
         "_id": "91",
         "nom": "Radar_91",
         "dateMaj": "15/03/2016",
         "modes": [
           {
              "fonction": "Veille",
              "modulation": "Pulse",
              "sousMode": {
                  "frequence": "8485,801617",
                  "frequenceType": "Agile",
                  "li": "1.5774622797607052",
                  "liType": "Agile",
                  "pri": "910.1952798782133",
                  "priType": "Agile"
               },
               "balayage": {
                  "type": "Circular",
                  "PRA": "4793"
                }
           }
         ]
        }
      ]
    },
    {
      "_id": "62",
      "nom": "Loc_62",
      "hostilite": "Ami",
      "latitude": "48,905371",
      "longitude": "-4,215910",
      "dateMaj": "23/04/2016",
      "Radars": [
        {
         "_id": "92",
         "nom": "Radar_92",
         "dateMaj": "07/11/2016",
         "modes": [
           {
              "fonction": "Tir",
              "modulation": "Pulse",
              "sousMode": {
                  "frequence": "5321,189682",
                  "frequenceType": "Agile",
                  "li": "15.225274568907587",
                  "liType": "Fixe",
                  "pri": "604.8859972733139",
                  "priType": "Fixe"
               },
               "balayage": {
                  "type": "Conical"
                }
           },
           {
              "fonction": "Poursuite",
              "modulation": "CW",
              "sousMode": {
                  "frequence": "5894,148416",
                  "frequenceType": "Agile"
               },
               "balayage": {
                  "type": "Sectorial",
                  "PRA": "2263"
                }
           }
         ]
        }
      ]
    },
    {
      "_id": "63",
      "nom": "Loc_63",
      "hostilite": "Ami",
      "latitude": "48,796012",
      "longitude": "-4,419132",
      "dateMaj": "15/06/2016",
      "Radars": [
        {
         "_id": "93",
         "nom": "Radar_93",
         "dateMaj": "20/03/2016",
         "modes": [
           {
              "fonction": "Acquisition",
              "modulation": "CW",
              "sousMode": {
                  "frequence": "5520,242842",
                  "frequenceType": "Agile"
               },
               "balayage": {
                  "type": "Fixe"
                }
           }
         ]
        },
        {
         "_id": "94",
         "nom": "Radar_94",
         "dateMaj": "11/10/2016",
         "modes": [
           {
              "fonction": "Acquisition",
              "modulation": "CW",
              "sousMode": {
                  "frequence": "5770,359776",
                  "frequenceType": "Fixe"
               },
               "balayage": {
                  "type": "Sectorial",
                  "PRA": "1291"
                }
           }
         ]
        }
      ]
    },
    {
      "_id": "64",
      "nom": "Loc_64",
      "hostilite": "Hostile",
      "latitude": "48,675273",
      "longitude": "-3,927212",
      "dateMaj": "18/11/2016",
      "Radars": [
        {
         "_id": "95",
         "nom": "Radar_95",
         "dateMaj": "18/07/2016",
         "modes": [
           {
              "fonction": "Acquisition",
              "modulation": "CW",
              "sousMode": {
                  "frequence": "7604,308980",
                  "frequenceType": "Fixe"
               },
               "balayage": {
                  "type": "Circular",
                  "PRA": "2943"
                }
           },
           {
              "fonction": "Acquisition",
              "modulation": "Pulse",
              "sousMode": {
                  "frequence": "4480,367756",
                  "frequenceType": "Fixe",
                  "li": "6.211557349705531",
                  "liType": "Agile",
                  "pri": "423.60496106216624",
                  "priType": "Agile"
               },
               "balayage": {
                  "type": "Circular",
                  "PRA": "3262"
                }
           }
         ]
        }
      ]
    },
    {
      "_id": "65",
      "nom": "Loc_65",
      "hostilite": "Hostile",
      "latitude": "49,376988",
      "longitude": "-3,767307",
      "dateMaj": "08/03/2016",
      "Radars": [
        {
         "_id": "96",
         "nom": "Radar_96",
         "dateMaj": "13/12/2016",
         "modes": [
           {
              "fonction": "Acquisition",
              "modulation": "CW",
              "sousMode": {
                  "frequence": "8789,015839",
                  "frequenceType": "Agile"
               },
               "balayage": {
                  "type": "Sectorial",
                  "PRA": "2005"
                }
           }
         ]
        }
      ]
    },
    {
      "_id": "66",
      "nom": "Loc_66",
      "hostilite": "Ami",
      "latitude": "49,220655",
      "longitude": "-4,167736",
      "dateMaj": "09/06/2016",
      "Radars": [
        {
         "_id": "97",
         "nom": "Radar_97",
         "dateMaj": "08/12/2016",
         "modes": [
           {
              "fonction": "Acquisition",
              "modulation": "CW",
              "sousMode": {
                  "frequence": "3388,843770",
                  "frequenceType": "Agile"
               },
               "balayage": {
                  "type": "Circular",
                  "PRA": "1257"
                }
           }
         ]
        },
        {
         "_id": "98",
         "nom": "Radar_98",
         "dateMaj": "02/07/2016",
         "modes": [
           {
              "fonction": "Poursuite",
              "modulation": "Pulse",
              "sousMode": {
                  "frequence": "7078,617192",
                  "frequenceType": "Fixe",
                  "li": "7.362563259929358",
                  "liType": "Fixe",
                  "pri": "774.3575561152634",
                  "priType": "Agile"
               },
               "balayage": {
                  "type": "Sectorial",
                  "PRA": "3445"
                }
           },
           {
              "fonction": "Tir",
              "modulation": "CW",
              "sousMode": {
                  "frequence": "9369,814097",
                  "frequenceType": "Agile"
               },
               "balayage": {
                  "type": "Complex",
                  "PRA": "1184"
                }
           }
         ]
        }
      ]
    },
    {
      "_id": "67",
      "nom": "Loc_67",
      "hostilite": "Ami",
      "latitude": "49,084917",
      "longitude": "-4,273344",
      "dateMaj": "07/09/2016",
      "Radars": [
        {
         "_id": "99",
         "nom": "Radar_99",
         "dateMaj": "07/07/2016",
         "modes": [
           {
              "fonction": "Poursuite",
              "modulation": "Pulse",
              "sousMode": {
                  "frequence": "3776,781703",
                  "frequenceType": "Agile",
                  "li": "2.3121911109352653",
                  "liType": "Agile",
                  "pri": "896.4399856295241",
                  "priType": "Agile"
               },
               "balayage": {
                  "type": "Sectorial",
                  "PRA": "2148"
                }
           },
           {
              "fonction": "Veille",
              "modulation": "Pulse",
              "sousMode": {
                  "frequence": "9466,440100",
                  "frequenceType": "Agile",
                  "li": "3.933804325207345",
                  "liType": "Fixe",
                  "pri": "678.5634061184861",
                  "priType": "Agile"
               },
               "balayage": {
                  "type": "Sectorial",
                  "PRA": "4024"
                }
           }
         ]
        }
      ]
    },
    {
      "_id": "68",
      "nom": "Loc_68",
      "hostilite": "Hostile",
      "latitude": "48,827444",
      "longitude": "-4,248580",
      "dateMaj": "02/01/2016",
      "Radars": [
        {
         "_id": "100",
         "nom": "Radar_100",
         "dateMaj": "11/01/2016",
         "modes": [
           {
              "fonction": "Poursuite",
              "modulation": "Pulse",
              "sousMode": {
                  "frequence": "3983,669119",
                  "frequenceType": "Fixe",
                  "li": "15.946672084490952",
                  "liType": "Fixe",
                  "pri": "610.8637298663286",
                  "priType": "Fixe"
               },
               "balayage": {
                  "type": "Circular",
                  "PRA": "833"
                }
           }
         ]
        }
      ]
    },
    {
      "_id": "69",
      "nom": "Loc_69",
      "hostilite": "Ami",
      "latitude": "49,131435",
      "longitude": "-4,058792",
      "dateMaj": "25/11/2016",
      "Radars": [
        {
         "_id": "101",
         "nom": "Radar_101",
         "dateMaj": "04/03/2016",
         "modes": [
           {
              "fonction": "Poursuite",
              "modulation": "CW",
              "sousMode": {
                  "frequence": "6095,359345",
                  "frequenceType": "Agile"
               },
               "balayage": {
                  "type": "Conical"
                }
           }
         ]
        }
      ]
    },
    {
      "_id": "70",
      "nom": "Loc_70",
      "hostilite": "Hostile",
      "latitude": "49,332491",
      "longitude": "-4,259572",
      "dateMaj": "17/06/2016",
      "Radars": [
        {
         "_id": "102",
         "nom": "Radar_102",
         "dateMaj": "08/09/2016",
         "modes": [
           {
              "fonction": "Veille",
              "modulation": "CW",
              "sousMode": {
                  "frequence": "7139,263558",
                  "frequenceType": "Fixe"
               },
               "balayage": {
                  "type": "Circular",
                  "PRA": "2346"
                }
           },
           {
              "fonction": "Poursuite",
              "modulation": "Pulse",
              "sousMode": {
                  "frequence": "9785,391468",
                  "frequenceType": "Fixe",
                  "li": "3.5844645270788407",
                  "liType": "Agile",
                  "pri": "841.6370771053535",
                  "priType": "Agile"
               },
               "balayage": {
                  "type": "Complex",
                  "PRA": "4000"
                }
           }
         ]
        }
      ]
    },
    {
      "_id": "71",
      "nom": "Loc_71",
      "hostilite": "Ami",
      "latitude": "48,869732",
      "longitude": "-4,070044",
      "dateMaj": "23/03/2016",
      "Radars": [
        {
         "_id": "103",
         "nom": "Radar_103",
         "dateMaj": "05/02/2016",
         "modes": [
           {
              "fonction": "Tir",
              "modulation": "CW",
              "sousMode": {
                  "frequence": "8331,606901",
                  "frequenceType": "Fixe"
               },
               "balayage": {
                  "type": "Complex",
                  "PRA": "4414"
                }
           },
           {
              "fonction": "Poursuite",
              "modulation": "CW",
              "sousMode": {
                  "frequence": "6574,955823",
                  "frequenceType": "Agile"
               },
               "balayage": {
                  "type": "Sectorial",
                  "PRA": "2378"
                }
           }
         ]
        }
      ]
    },
    {
      "_id": "72",
      "nom": "Loc_72",
      "hostilite": "Ami",
      "latitude": "48,786474",
      "longitude": "-4,395580",
      "dateMaj": "06/03/2016",
      "Radars": [
        {
         "_id": "104",
         "nom": "Radar_104",
         "dateMaj": "11/06/2016",
         "modes": [
           {
              "fonction": "Tir",
              "modulation": "Pulse",
              "sousMode": {
                  "frequence": "4831,182251",
                  "frequenceType": "Agile",
                  "li": "16.28052060623913",
                  "liType": "Agile",
                  "pri": "153.80182842801943",
                  "priType": "Fixe"
               },
               "balayage": {
                  "type": "Fixe"
                }
           },
           {
              "fonction": "Acquisition",
              "modulation": "Pulse",
              "sousMode": {
                  "frequence": "7093,368946",
                  "frequenceType": "Agile",
                  "li": "5.249116640978028",
                  "liType": "Agile",
                  "pri": "667.7059958483119",
                  "priType": "Agile"
               },
               "balayage": {
                  "type": "Fixe"
                }
           }
         ]
        },
        {
         "_id": "105",
         "nom": "Radar_105",
         "dateMaj": "17/05/2016",
         "modes": [
           {
              "fonction": "Veille",
              "modulation": "CW",
              "sousMode": {
                  "frequence": "5960,825137",
                  "frequenceType": "Fixe"
               },
               "balayage": {
                  "type": "Circular",
                  "PRA": "4076"
                }
           }
         ]
        }
      ]
    },
    {
      "_id": "73",
      "nom": "Loc_73",
      "hostilite": "Ami",
      "latitude": "48,705920",
      "longitude": "-3,757770",
      "dateMaj": "24/08/2016",
      "Radars": [
        {
         "_id": "106",
         "nom": "Radar_106",
         "dateMaj": "03/11/2016",
         "modes": [
           {
              "fonction": "Tir",
              "modulation": "CW",
              "sousMode": {
                  "frequence": "4700,673591",
                  "frequenceType": "Agile"
               },
               "balayage": {
                  "type": "Conical"
                }
           }
         ]
        },
        {
         "_id": "107",
         "nom": "Radar_107",
         "dateMaj": "11/09/2016",
         "modes": [
           {
              "fonction": "Acquisition",
              "modulation": "Pulse",
              "sousMode": {
                  "frequence": "5336,156281",
                  "frequenceType": "Fixe",
                  "li": "6.409204394383076",
                  "liType": "Agile",
                  "pri": "393.21105318006",
                  "priType": "Fixe"
               },
               "balayage": {
                  "type": "Complex",
                  "PRA": "79"
                }
           }
         ]
        }
      ]
    },
    {
      "_id": "74",
      "nom": "Loc_74",
      "hostilite": "Ami",
      "latitude": "49,170172",
      "longitude": "-3,631208",
      "dateMaj": "16/07/2016",
      "Radars": [
        {
         "_id": "108",
         "nom": "Radar_108",
         "dateMaj": "15/12/2016",
         "modes": [
           {
              "fonction": "Acquisition",
              "modulation": "CW",
              "sousMode": {
                  "frequence": "6441,965382",
                  "frequenceType": "Agile"
               },
               "balayage": {
                  "type": "Sectorial",
                  "PRA": "4649"
                }
           }
         ]
        }
      ]
    },
    {
      "_id": "75",
      "nom": "Loc_75",
      "hostilite": "Inconnu",
      "latitude": "48,506279",
      "longitude": "-3,557923",
      "dateMaj": "04/05/2016",
      "Radars": [
        {
         "_id": "109",
         "nom": "Radar_109",
         "dateMaj": "15/01/2017",
         "modes": [
           {
              "fonction": "Veille",
              "modulation": "Pulse",
              "sousMode": {
                  "frequence": "8257,226330",
                  "frequenceType": "Agile",
                  "li": "18.091726432947905",
                  "liType": "Agile",
                  "pri": "600.30569463186",
                  "priType": "Agile"
               },
               "balayage": {
                  "type": "Fixe"
                }
           },
           {
              "fonction": "Tir",
              "modulation": "Pulse",
              "sousMode": {
                  "frequence": "9629,986556",
                  "frequenceType": "Fixe",
                  "li": "11.733313357711351",
                  "liType": "Agile",
                  "pri": "163.27085848123204",
                  "priType": "Fixe"
               },
               "balayage": {
                  "type": "Circular",
                  "PRA": "2716"
                }
           }
         ]
        }
      ]
    },
    {
      "_id": "76",
      "nom": "Loc_76",
      "hostilite": "Inconnu",
      "latitude": "48,868216",
      "longitude": "-4,078146",
      "dateMaj": "15/12/2016",
      "Radars": [
        {
         "_id": "110",
         "nom": "Radar_110",
         "dateMaj": "06/09/2016",
         "modes": [
           {
              "fonction": "Poursuite",
              "modulation": "Pulse",
              "sousMode": {
                  "frequence": "9971,436774",
                  "frequenceType": "Agile",
                  "li": "15.86917787534748",
                  "liType": "Fixe",
                  "pri": "953.8608287193919",
                  "priType": "Agile"
               },
               "balayage": {
                  "type": "Conical"
                }
           },
           {
              "fonction": "Tir",
              "modulation": "Pulse",
              "sousMode": {
                  "frequence": "6328,139296",
                  "frequenceType": "Fixe",
                  "li": "5.2793781482375834",
                  "liType": "Agile",
                  "pri": "591.211992830132",
                  "priType": "Fixe"
               },
               "balayage": {
                  "type": "Conical"
                }
           }
         ]
        }
      ]
    },
    {
      "_id": "77",
      "nom": "Loc_77",
      "hostilite": "Hostile",
      "latitude": "49,002605",
      "longitude": "-4,043996",
      "dateMaj": "19/06/2016",
      "Radars": [
        {
         "_id": "111",
         "nom": "Radar_111",
         "dateMaj": "17/06/2016",
         "modes": [
           {
              "fonction": "Poursuite",
              "modulation": "CW",
              "sousMode": {
                  "frequence": "5261,382960",
                  "frequenceType": "Fixe"
               },
               "balayage": {
                  "type": "Sectorial",
                  "PRA": "4693"
                }
           }
         ]
        }
      ]
    },
    {
      "_id": "78",
      "nom": "Loc_78",
      "hostilite": "Inconnu",
      "latitude": "49,084993",
      "longitude": "-3,914362",
      "dateMaj": "23/09/2016",
      "Radars": [
        {
         "_id": "112",
         "nom": "Radar_112",
         "dateMaj": "04/10/2016",
         "modes": [
           {
              "fonction": "Veille",
              "modulation": "Pulse",
              "sousMode": {
                  "frequence": "7475,275711",
                  "frequenceType": "Fixe",
                  "li": "6.7765033822729235",
                  "liType": "Agile",
                  "pri": "768.7151810879899",
                  "priType": "Agile"
               },
               "balayage": {
                  "type": "Fixe"
                }
           },
           {
              "fonction": "Acquisition",
              "modulation": "CW",
              "sousMode": {
                  "frequence": "4083,481359",
                  "frequenceType": "Agile"
               },
               "balayage": {
                  "type": "Complex",
                  "PRA": "345"
                }
           }
         ]
        },
        {
         "_id": "113",
         "nom": "Radar_113",
         "dateMaj": "19/09/2016",
         "modes": [
           {
              "fonction": "Poursuite",
              "modulation": "CW",
              "sousMode": {
                  "frequence": "4813,340660",
                  "frequenceType": "Fixe"
               },
               "balayage": {
                  "type": "Complex",
                  "PRA": "2241"
                }
           }
         ]
        }
      ]
    },
    {
      "_id": "79",
      "nom": "Loc_79",
      "hostilite": "Ami",
      "latitude": "48,753454",
      "longitude": "-3,564921",
      "dateMaj": "04/08/2016",
      "Radars": [
        {
         "_id": "114",
         "nom": "Radar_114",
         "dateMaj": "07/03/2016",
         "modes": [
           {
              "fonction": "Veille",
              "modulation": "CW",
              "sousMode": {
                  "frequence": "9941,302856",
                  "frequenceType": "Fixe"
               },
               "balayage": {
                  "type": "Sectorial",
                  "PRA": "1282"
                }
           },
           {
              "fonction": "Acquisition",
              "modulation": "Pulse",
              "sousMode": {
                  "frequence": "5805,659008",
                  "frequenceType": "Fixe",
                  "li": "17.87277804252341",
                  "liType": "Fixe",
                  "pri": "474.30525773011743",
                  "priType": "Agile"
               },
               "balayage": {
                  "type": "Conical"
                }
           }
         ]
        },
        {
         "_id": "115",
         "nom": "Radar_115",
         "dateMaj": "09/11/2016",
         "modes": [
           {
              "fonction": "Tir",
              "modulation": "Pulse",
              "sousMode": {
                  "frequence": "7642,954767",
                  "frequenceType": "Agile",
                  "li": "16.421746885595844",
                  "liType": "Fixe",
                  "pri": "155.62094885182287",
                  "priType": "Fixe"
               },
               "balayage": {
                  "type": "Complex",
                  "PRA": "1835"
                }
           }
         ]
        }
      ]
    },
    {
      "_id": "80",
      "nom": "Loc_80",
      "hostilite": "Hostile",
      "latitude": "48,476940",
      "longitude": "-3,494466",
      "dateMaj": "18/03/2016",
      "Radars": [
        {
         "_id": "116",
         "nom": "Radar_116",
         "dateMaj": "20/02/2016",
         "modes": [
           {
              "fonction": "Veille",
              "modulation": "Pulse",
              "sousMode": {
                  "frequence": "4931,055944",
                  "frequenceType": "Agile",
                  "li": "13.50584360929636",
                  "liType": "Fixe",
                  "pri": "847.8922156764335",
                  "priType": "Fixe"
               },
               "balayage": {
                  "type": "Sectorial",
                  "PRA": "3452"
                }
           }
         ]
        },
        {
         "_id": "117",
         "nom": "Radar_117",
         "dateMaj": "12/12/2016",
         "modes": [
           {
              "fonction": "Veille",
              "modulation": "Pulse",
              "sousMode": {
                  "frequence": "8813,759284",
                  "frequenceType": "Agile",
                  "li": "3.4439347343868985",
                  "liType": "Agile",
                  "pri": "413.6288672693583",
                  "priType": "Agile"
               },
               "balayage": {
                  "type": "Fixe"
                }
           }
         ]
        }
      ]
    },
    {
      "_id": "81",
      "nom": "Loc_81",
      "hostilite": "Hostile",
      "latitude": "49,344978",
      "longitude": "-3,879538",
      "dateMaj": "02/12/2016",
      "Radars": [
        {
         "_id": "118",
         "nom": "Radar_118",
         "dateMaj": "06/04/2016",
         "modes": [
           {
              "fonction": "Acquisition",
              "modulation": "CW",
              "sousMode": {
                  "frequence": "5121,826304",
                  "frequenceType": "Fixe"
               },
               "balayage": {
                  "type": "Complex",
                  "PRA": "4775"
                }
           }
         ]
        }
      ]
    },
    {
      "_id": "82",
      "nom": "Loc_82",
      "hostilite": "Hostile",
      "latitude": "49,234908",
      "longitude": "-3,587627",
      "dateMaj": "22/07/2016",
      "Radars": [
        {
         "_id": "119",
         "nom": "Radar_119",
         "dateMaj": "12/06/2016",
         "modes": [
           {
              "fonction": "Veille",
              "modulation": "CW",
              "sousMode": {
                  "frequence": "9903,365252",
                  "frequenceType": "Agile"
               },
               "balayage": {
                  "type": "Circular",
                  "PRA": "2085"
                }
           },
           {
              "fonction": "Poursuite",
              "modulation": "Pulse",
              "sousMode": {
                  "frequence": "9145,648458",
                  "frequenceType": "Agile",
                  "li": "19.670521399810553",
                  "liType": "Agile",
                  "pri": "146.04110341261833",
                  "priType": "Fixe"
               },
               "balayage": {
                  "type": "Sectorial",
                  "PRA": "4327"
                }
           }
         ]
        }
      ]
    },
    {
      "_id": "83",
      "nom": "Loc_83",
      "hostilite": "Hostile",
      "latitude": "48,910371",
      "longitude": "-3,553569",
      "dateMaj": "24/04/2016",
      "Radars": [
        {
         "_id": "120",
         "nom": "Radar_120",
         "dateMaj": "01/05/2016",
         "modes": [
           {
              "fonction": "Poursuite",
              "modulation": "CW",
              "sousMode": {
                  "frequence": "7224,020898",
                  "frequenceType": "Fixe"
               },
               "balayage": {
                  "type": "Fixe"
                }
           },
           {
              "fonction": "Poursuite",
              "modulation": "Pulse",
              "sousMode": {
                  "frequence": "5445,868526",
                  "frequenceType": "Agile",
                  "li": "7.90921874080464",
                  "liType": "Fixe",
                  "pri": "269.3873517258761",
                  "priType": "Agile"
               },
               "balayage": {
                  "type": "Complex",
                  "PRA": "1416"
                }
           }
         ]
        }
      ]
    },
    {
      "_id": "84",
      "nom": "Loc_84",
      "hostilite": "Hostile",
      "latitude": "48,955234",
      "longitude": "-3,987522",
      "dateMaj": "15/10/2016",
      "Radars": [
        {
         "_id": "121",
         "nom": "Radar_121",
         "dateMaj": "04/11/2016",
         "modes": [
           {
              "fonction": "Veille",
              "modulation": "Pulse",
              "sousMode": {
                  "frequence": "4061,521020",
                  "frequenceType": "Fixe",
                  "li": "11.769675640498532",
                  "liType": "Agile",
                  "pri": "259.879192903844",
                  "priType": "Agile"
               },
               "balayage": {
                  "type": "Conical"
                }
           },
           {
              "fonction": "Acquisition",
              "modulation": "Pulse",
              "sousMode": {
                  "frequence": "8280,892813",
                  "frequenceType": "Fixe",
                  "li": "13.290653066463266",
                  "liType": "Fixe",
                  "pri": "237.58892880558534",
                  "priType": "Fixe"
               },
               "balayage": {
                  "type": "Circular",
                  "PRA": "4519"
                }
           }
         ]
        }
      ]
    },
    {
      "_id": "85",
      "nom": "Loc_85",
      "hostilite": "Ami",
      "latitude": "48,993719",
      "longitude": "-3,870108",
      "dateMaj": "21/11/2016",
      "Radars": [
        {
         "_id": "122",
         "nom": "Radar_122",
         "dateMaj": "16/01/2017",
         "modes": [
           {
              "fonction": "Acquisition",
              "modulation": "Pulse",
              "sousMode": {
                  "frequence": "4456,168524",
                  "frequenceType": "Fixe",
                  "li": "4.27690219964802",
                  "liType": "Fixe",
                  "pri": "552.1808183565241",
                  "priType": "Fixe"
               },
               "balayage": {
                  "type": "Conical"
                }
           },
           {
              "fonction": "Veille",
              "modulation": "CW",
              "sousMode": {
                  "frequence": "8915,544326",
                  "frequenceType": "Fixe"
               },
               "balayage": {
                  "type": "Fixe"
                }
           }
         ]
        }
      ]
    },
    {
      "_id": "86",
      "nom": "Loc_86",
      "hostilite": "Ami",
      "latitude": "49,135377",
      "longitude": "-4,154098",
      "dateMaj": "17/01/2017",
      "Radars": [
        {
         "_id": "123",
         "nom": "Radar_123",
         "dateMaj": "25/12/2016",
         "modes": [
           {
              "fonction": "Poursuite",
              "modulation": "CW",
              "sousMode": {
                  "frequence": "9268,057191",
                  "frequenceType": "Agile"
               },
               "balayage": {
                  "type": "Conical"
                }
           },
           {
              "fonction": "Acquisition",
              "modulation": "CW",
              "sousMode": {
                  "frequence": "8590,483940",
                  "frequenceType": "Fixe"
               },
               "balayage": {
                  "type": "Conical"
                }
           }
         ]
        }
      ]
    },
    {
      "_id": "87",
      "nom": "Loc_87",
      "hostilite": "Inconnu",
      "latitude": "48,986329",
      "longitude": "-4,121231",
      "dateMaj": "24/09/2016",
      "Radars": [
        {
         "_id": "124",
         "nom": "Radar_124",
         "dateMaj": "19/05/2016",
         "modes": [
           {
              "fonction": "Veille",
              "modulation": "Pulse",
              "sousMode": {
                  "frequence": "8532,178434",
                  "frequenceType": "Fixe",
                  "li": "17.458327055362773",
                  "liType": "Agile",
                  "pri": "459.4619851453366",
                  "priType": "Agile"
               },
               "balayage": {
                  "type": "Circular",
                  "PRA": "4964"
                }
           }
         ]
        },
        {
         "_id": "125",
         "nom": "Radar_125",
         "dateMaj": "11/08/2016",
         "modes": [
           {
              "fonction": "Veille",
              "modulation": "Pulse",
              "sousMode": {
                  "frequence": "6026,450671",
                  "frequenceType": "Fixe",
                  "li": "10.318027391558639",
                  "liType": "Fixe",
                  "pri": "363.2229401268005",
                  "priType": "Agile"
               },
               "balayage": {
                  "type": "Complex",
                  "PRA": "1678"
                }
           }
         ]
        }
      ]
    },
    {
      "_id": "88",
      "nom": "Loc_88",
      "hostilite": "Inconnu",
      "latitude": "48,541848",
      "longitude": "-3,671530",
      "dateMaj": "08/10/2016",
      "Radars": [
        {
         "_id": "126",
         "nom": "Radar_126",
         "dateMaj": "03/10/2016",
         "modes": [
           {
              "fonction": "Poursuite",
              "modulation": "CW",
              "sousMode": {
                  "frequence": "5328,438937",
                  "frequenceType": "Agile"
               },
               "balayage": {
                  "type": "Conical"
                }
           },
           {
              "fonction": "Veille",
              "modulation": "CW",
              "sousMode": {
                  "frequence": "7780,509028",
                  "frequenceType": "Agile"
               },
               "balayage": {
                  "type": "Conical"
                }
           }
         ]
        }
      ]
    },
    {
      "_id": "89",
      "nom": "Loc_89",
      "hostilite": "Inconnu",
      "latitude": "48,491812",
      "longitude": "-3,731192",
      "dateMaj": "10/08/2016",
      "Radars": [
        {
         "_id": "127",
         "nom": "Radar_127",
         "dateMaj": "24/09/2016",
         "modes": [
           {
              "fonction": "Veille",
              "modulation": "Pulse",
              "sousMode": {
                  "frequence": "7930,181417",
                  "frequenceType": "Fixe",
                  "li": "15.987728792391417",
                  "liType": "Fixe",
                  "pri": "564.5095889714821",
                  "priType": "Fixe"
               },
               "balayage": {
                  "type": "Conical"
                }
           },
           {
              "fonction": "Tir",
              "modulation": "Pulse",
              "sousMode": {
                  "frequence": "4316,422679",
                  "frequenceType": "Agile",
                  "li": "1.208442607702331",
                  "liType": "Agile",
                  "pri": "507.7683706945319",
                  "priType": "Fixe"
               },
               "balayage": {
                  "type": "Conical"
                }
           }
         ]
        }
      ]
    },
    {
      "_id": "90",
      "nom": "Loc_90",
      "hostilite": "Hostile",
      "latitude": "48,496455",
      "longitude": "-3,957369",
      "dateMaj": "07/07/2016",
      "Radars": [
        {
         "_id": "128",
         "nom": "Radar_128",
         "dateMaj": "12/01/2016",
         "modes": [
           {
              "fonction": "Acquisition",
              "modulation": "CW",
              "sousMode": {
                  "frequence": "8362,986741",
                  "frequenceType": "Agile"
               },
               "balayage": {
                  "type": "Circular",
                  "PRA": "3099"
                }
           }
         ]
        }
      ]
    },
    {
      "_id": "91",
      "nom": "Loc_91",
      "hostilite": "Ami",
      "latitude": "49,148920",
      "longitude": "-4,017471",
      "dateMaj": "05/01/2016",
      "Radars": [
        {
         "_id": "129",
         "nom": "Radar_129",
         "dateMaj": "07/07/2016",
         "modes": [
           {
              "fonction": "Poursuite",
              "modulation": "Pulse",
              "sousMode": {
                  "frequence": "9099,400054",
                  "frequenceType": "Fixe",
                  "li": "7.61240078462157",
                  "liType": "Agile",
                  "pri": "489.4975348428782",
                  "priType": "Agile"
               },
               "balayage": {
                  "type": "Fixe"
                }
           },
           {
              "fonction": "Acquisition",
              "modulation": "CW",
              "sousMode": {
                  "frequence": "3791,834675",
                  "frequenceType": "Fixe"
               },
               "balayage": {
                  "type": "Fixe"
                }
           }
         ]
        }
      ]
    },
    {
      "_id": "92",
      "nom": "Loc_92",
      "hostilite": "Inconnu",
      "latitude": "48,855886",
      "longitude": "-3,954699",
      "dateMaj": "17/08/2016",
      "Radars": [
        {
         "_id": "130",
         "nom": "Radar_130",
         "dateMaj": "23/01/2016",
         "modes": [
           {
              "fonction": "Tir",
              "modulation": "Pulse",
              "sousMode": {
                  "frequence": "9192,059785",
                  "frequenceType": "Fixe",
                  "li": "5.676479756517311",
                  "liType": "Agile",
                  "pri": "386.94637698503806",
                  "priType": "Fixe"
               },
               "balayage": {
                  "type": "Conical"
                }
           },
           {
              "fonction": "Poursuite",
              "modulation": "Pulse",
              "sousMode": {
                  "frequence": "8207,588597",
                  "frequenceType": "Fixe",
                  "li": "12.424599104017855",
                  "liType": "Agile",
                  "pri": "570.7750638795892",
                  "priType": "Agile"
               },
               "balayage": {
                  "type": "Conical"
                }
           }
         ]
        },
        {
         "_id": "131",
         "nom": "Radar_131",
         "dateMaj": "13/06/2016",
         "modes": [
           {
              "fonction": "Tir",
              "modulation": "Pulse",
              "sousMode": {
                  "frequence": "6825,585200",
                  "frequenceType": "Agile",
                  "li": "14.822554810789088",
                  "liType": "Fixe",
                  "pri": "137.36385277204644",
                  "priType": "Fixe"
               },
               "balayage": {
                  "type": "Sectorial",
                  "PRA": "1343"
                }
           }
         ]
        }
      ]
    },
    {
      "_id": "93",
      "nom": "Loc_93",
      "hostilite": "Hostile",
      "latitude": "49,191685",
      "longitude": "-3,819929",
      "dateMaj": "14/04/2016",
      "Radars": [
        {
         "_id": "132",
         "nom": "Radar_132",
         "dateMaj": "15/01/2017",
         "modes": [
           {
              "fonction": "Tir",
              "modulation": "Pulse",
              "sousMode": {
                  "frequence": "3642,635212",
                  "frequenceType": "Fixe",
                  "li": "15.690743414757918",
                  "liType": "Fixe",
                  "pri": "204.2372546081064",
                  "priType": "Agile"
               },
               "balayage": {
                  "type": "Conical"
                }
           },
           {
              "fonction": "Veille",
              "modulation": "CW",
              "sousMode": {
                  "frequence": "8433,206127",
                  "frequenceType": "Agile"
               },
               "balayage": {
                  "type": "Complex",
                  "PRA": "4171"
                }
           }
         ]
        },
        {
         "_id": "133",
         "nom": "Radar_133",
         "dateMaj": "25/01/2016",
         "modes": [
           {
              "fonction": "Veille",
              "modulation": "Pulse",
              "sousMode": {
                  "frequence": "9096,889865",
                  "frequenceType": "Agile",
                  "li": "9.25586603132728",
                  "liType": "Agile",
                  "pri": "830.9898118717358",
                  "priType": "Fixe"
               },
               "balayage": {
                  "type": "Circular",
                  "PRA": "2437"
                }
           }
         ]
        }
      ]
    },
    {
      "_id": "94",
      "nom": "Loc_94",
      "hostilite": "Hostile",
      "latitude": "49,383316",
      "longitude": "-3,952260",
      "dateMaj": "14/10/2016",
      "Radars": [
        {
         "_id": "134",
         "nom": "Radar_134",
         "dateMaj": "04/01/2017",
         "modes": [
           {
              "fonction": "Acquisition",
              "modulation": "CW",
              "sousMode": {
                  "frequence": "5609,518998",
                  "frequenceType": "Fixe"
               },
               "balayage": {
                  "type": "Conical"
                }
           },
           {
              "fonction": "Tir",
              "modulation": "CW",
              "sousMode": {
                  "frequence": "3615,352070",
                  "frequenceType": "Agile"
               },
               "balayage": {
                  "type": "Fixe"
                }
           }
         ]
        },
        {
         "_id": "135",
         "nom": "Radar_135",
         "dateMaj": "20/07/2016",
         "modes": [
           {
              "fonction": "Poursuite",
              "modulation": "CW",
              "sousMode": {
                  "frequence": "5442,233103",
                  "frequenceType": "Agile"
               },
               "balayage": {
                  "type": "Fixe"
                }
           }
         ]
        }
      ]
    },
    {
      "_id": "95",
      "nom": "Loc_95",
      "hostilite": "Inconnu",
      "latitude": "49,138934",
      "longitude": "-4,353419",
      "dateMaj": "25/05/2016",
      "Radars": [
        {
         "_id": "136",
         "nom": "Radar_136",
         "dateMaj": "16/11/2016",
         "modes": [
           {
              "fonction": "Poursuite",
              "modulation": "Pulse",
              "sousMode": {
                  "frequence": "6193,480540",
                  "frequenceType": "Fixe",
                  "li": "17.28706679023373",
                  "liType": "Agile",
                  "pri": "149.25479765618374",
                  "priType": "Agile"
               },
               "balayage": {
                  "type": "Circular",
                  "PRA": "4119"
                }
           },
           {
              "fonction": "Poursuite",
              "modulation": "Pulse",
              "sousMode": {
                  "frequence": "3118,837265",
                  "frequenceType": "Fixe",
                  "li": "5.913403259774519",
                  "liType": "Fixe",
                  "pri": "483.5866742358743",
                  "priType": "Fixe"
               },
               "balayage": {
                  "type": "Fixe"
                }
           }
         ]
        },
        {
         "_id": "137",
         "nom": "Radar_137",
         "dateMaj": "08/07/2016",
         "modes": [
           {
              "fonction": "Veille",
              "modulation": "CW",
              "sousMode": {
                  "frequence": "6436,513952",
                  "frequenceType": "Agile"
               },
               "balayage": {
                  "type": "Fixe"
                }
           },
           {
              "fonction": "Poursuite",
              "modulation": "CW",
              "sousMode": {
                  "frequence": "8887,522659",
                  "frequenceType": "Fixe"
               },
               "balayage": {
                  "type": "Fixe"
                }
           }
         ]
        }
      ]
    },
    {
      "_id": "96",
      "nom": "Loc_96",
      "hostilite": "Hostile",
      "latitude": "49,000123",
      "longitude": "-4,094399",
      "dateMaj": "07/01/2016",
      "Radars": [
        {
         "_id": "138",
         "nom": "Radar_138",
         "dateMaj": "18/08/2016",
         "modes": [
           {
              "fonction": "Veille",
              "modulation": "CW",
              "sousMode": {
                  "frequence": "3958,692271",
                  "frequenceType": "Fixe"
               },
               "balayage": {
                  "type": "Fixe"
                }
           }
         ]
        }
      ]
    },
    {
      "_id": "97",
      "nom": "Loc_97",
      "hostilite": "Hostile",
      "latitude": "49,111212",
      "longitude": "-3,600189",
      "dateMaj": "03/08/2016",
      "Radars": [
        {
         "_id": "139",
         "nom": "Radar_139",
         "dateMaj": "10/10/2016",
         "modes": [
           {
              "fonction": "Tir",
              "modulation": "CW",
              "sousMode": {
                  "frequence": "9535,109652",
                  "frequenceType": "Agile"
               },
               "balayage": {
                  "type": "Conical"
                }
           },
           {
              "fonction": "Tir",
              "modulation": "CW",
              "sousMode": {
                  "frequence": "4596,658017",
                  "frequenceType": "Agile"
               },
               "balayage": {
                  "type": "Circular",
                  "PRA": "4150"
                }
           }
         ]
        }
      ]
    },
    {
      "_id": "98",
      "nom": "Loc_98",
      "hostilite": "Hostile",
      "latitude": "49,368973",
      "longitude": "-3,558776",
      "dateMaj": "25/10/2016",
      "Radars": [
        {
         "_id": "140",
         "nom": "Radar_140",
         "dateMaj": "04/09/2016",
         "modes": [
           {
              "fonction": "Tir",
              "modulation": "CW",
              "sousMode": {
                  "frequence": "7123,524484",
                  "frequenceType": "Fixe"
               },
               "balayage": {
                  "type": "Fixe"
                }
           }
         ]
        },
        {
         "_id": "141",
         "nom": "Radar_141",
         "dateMaj": "15/12/2016",
         "modes": [
           {
              "fonction": "Poursuite",
              "modulation": "CW",
              "sousMode": {
                  "frequence": "4367,879979",
                  "frequenceType": "Fixe"
               },
               "balayage": {
                  "type": "Conical"
                }
           },
           {
              "fonction": "Tir",
              "modulation": "Pulse",
              "sousMode": {
                  "frequence": "9460,918466",
                  "frequenceType": "Fixe",
                  "li": "12.583404032001878",
                  "liType": "Fixe",
                  "pri": "500.6553401189069",
                  "priType": "Fixe"
               },
               "balayage": {
                  "type": "Complex",
                  "PRA": "3775"
                }
           }
         ]
        }
      ]
    }
]
