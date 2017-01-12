var carriers = [
    {
      "_id": "1",
      "nom": "Carrier_1",
      "hostilite": "Inconnu",
      "dateMaj": "09/07/2016",
      "type": "Air",
      "ssTypeAir": "Interceptor",
      "Radars": [
        {
         "_id": "1",
         "nom": "Radar_1",
         "dateMaj": "05/08/2016",
         "modes": [
           {
              "fonction": "Veille",
              "modulation": "Pulse",
              "sousMode": {
                  "frequence": "3105,856514",
                  "frequenceType": "Agile",
                  "li": "12.728967367948758",
                  "liType": "Fixe",
                  "pri": "455.80676070317566",
                  "priType": "Agile"
               },
               "balayage": {
                  "type": "Complex",
                  "PRA": "4878"
                }
           }
         ]
        }
      ]
    },
    {
      "_id": "2",
      "nom": "Carrier_2",
      "hostilite": "Hostile",
      "dateMaj": "22/01/2017",
      "type": "Air",
      "ssTypeAir": "Drone",
      "Radars": [
        {
         "_id": "2",
         "nom": "Radar_2",
         "dateMaj": "15/06/2016",
         "modes": [
           {
              "fonction": "Tir",
              "modulation": "Pulse",
              "sousMode": {
                  "frequence": "9174,112897",
                  "frequenceType": "Agile",
                  "li": "14.434767216135016",
                  "liType": "Agile",
                  "pri": "273.7411936190076",
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
      "_id": "3",
      "nom": "Carrier_3",
      "hostilite": "Ami",
      "dateMaj": "16/11/2016",
      "type": "Sea",
      "ssTypeSea": "Cargo",
      "Radars": [
        {
         "_id": "3",
         "nom": "Radar_3",
         "dateMaj": "04/03/2016",
         "modes": [
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
        },
        {
         "_id": "4",
         "nom": "Radar_4",
         "dateMaj": "07/02/2016",
         "modes": [
           {
              "fonction": "Veille",
              "modulation": "Pulse",
              "sousMode": {
                  "frequence": "4208,513123",
                  "frequenceType": "Fixe",
                  "li": "2.362808850906026",
                  "liType": "Agile",
                  "pri": "563.1696041047737",
                  "priType": "Fixe"
               },
               "balayage": {
                  "type": "Sectorial",
                  "PRA": "1280"
                }
           },
           {
              "fonction": "Poursuite",
              "modulation": "Pulse",
              "sousMode": {
                  "frequence": "9761,163825",
                  "frequenceType": "Fixe",
                  "li": "10.44989608002342",
                  "liType": "Fixe",
                  "pri": "358.7487323109497",
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
      "_id": "4",
      "nom": "Carrier_4",
      "hostilite": "Inconnu",
      "dateMaj": "02/01/2017",
      "type": "Sea",
      "ssTypeSea": "Destroyer",
      "Radars": [
        {
         "_id": "5",
         "nom": "Radar_5",
         "dateMaj": "10/05/2016",
         "modes": [
           {
              "fonction": "Poursuite",
              "modulation": "CW",
              "sousMode": {
                  "frequence": "7131,023778",
                  "frequenceType": "Agile"
               },
               "balayage": {
                  "type": "Circular",
                  "PRA": "601"
                }
           }
         ]
        }
      ]
    },
    {
      "_id": "5",
      "nom": "Carrier_5",
      "hostilite": "Hostile",
      "dateMaj": "07/12/2016",
      "type": "Air",
      "ssTypeAir": "Fighter",
      "Radars": [
        {
         "_id": "6",
         "nom": "Radar_6",
         "dateMaj": "11/08/2016",
         "modes": [
           {
              "fonction": "Tir",
              "modulation": "CW",
              "sousMode": {
                  "frequence": "7475,316320",
                  "frequenceType": "Fixe"
               },
               "balayage": {
                  "type": "Complex",
                  "PRA": "1298"
                }
           }
         ]
        },
        {
         "_id": "7",
         "nom": "Radar_7",
         "dateMaj": "25/12/2016",
         "modes": [
           {
              "fonction": "Acquisition",
              "modulation": "CW",
              "sousMode": {
                  "frequence": "6632,268424",
                  "frequenceType": "Fixe"
               },
               "balayage": {
                  "type": "Complex",
                  "PRA": "2191"
                }
           },
           {
              "fonction": "Veille",
              "modulation": "CW",
              "sousMode": {
                  "frequence": "5129,128557",
                  "frequenceType": "Agile"
               },
               "balayage": {
                  "type": "Sectorial",
                  "PRA": "3333"
                }
           }
         ]
        }
      ]
    },
    {
      "_id": "6",
      "nom": "Carrier_6",
      "hostilite": "Ami",
      "dateMaj": "13/11/2016",
      "type": "Air",
      "ssTypeAir": "Weapon",
      "Radars": [
        {
         "_id": "8",
         "nom": "Radar_8",
         "dateMaj": "05/11/2016",
         "modes": [
           {
              "fonction": "Acquisition",
              "modulation": "CW",
              "sousMode": {
                  "frequence": "4746,420239",
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
                  "frequence": "3512,793632",
                  "frequenceType": "Agile"
               },
               "balayage": {
                  "type": "Sectorial",
                  "PRA": "2200"
                }
           }
         ]
        }
      ]
    },
    {
      "_id": "7",
      "nom": "Carrier_7",
      "hostilite": "Inconnu",
      "dateMaj": "17/04/2016",
      "type": "Land",
      "ssTypeLand": "Combat support",
      "Radars": [
        {
         "_id": "9",
         "nom": "Radar_9",
         "dateMaj": "24/07/2016",
         "modes": [
           {
              "fonction": "Tir",
              "modulation": "CW",
              "sousMode": {
                  "frequence": "5731,793588",
                  "frequenceType": "Fixe"
               },
               "balayage": {
                  "type": "Circular",
                  "PRA": "2916"
                }
           }
         ]
        }
      ]
    },
    {
      "_id": "8",
      "nom": "Carrier_8",
      "hostilite": "Hostile",
      "dateMaj": "04/11/2016",
      "type": "Land",
      "ssTypeLand": "Vehicle",
      "Radars": [
        {
         "_id": "10",
         "nom": "Radar_10",
         "dateMaj": "12/04/2016",
         "modes": [
           {
              "fonction": "Tir",
              "modulation": "CW",
              "sousMode": {
                  "frequence": "6400,257322",
                  "frequenceType": "Fixe"
               },
               "balayage": {
                  "type": "Complex",
                  "PRA": "1929"
                }
           }
         ]
        }
      ]
    },
    {
      "_id": "9",
      "nom": "Carrier_9",
      "hostilite": "Inconnu",
      "dateMaj": "20/07/2016",
      "type": "Sea",
      "ssTypeSea": "Fishing",
      "Radars": [
        {
         "_id": "11",
         "nom": "Radar_11",
         "dateMaj": "13/10/2016",
         "modes": [
           {
              "fonction": "Poursuite",
              "modulation": "CW",
              "sousMode": {
                  "frequence": "7459,996615",
                  "frequenceType": "Agile"
               },
               "balayage": {
                  "type": "Complex",
                  "PRA": "2350"
                }
           },
           {
              "fonction": "Acquisition",
              "modulation": "CW",
              "sousMode": {
                  "frequence": "7149,589420",
                  "frequenceType": "Fixe"
               },
               "balayage": {
                  "type": "Complex",
                  "PRA": "3091"
                }
           }
         ]
        },
        {
         "_id": "12",
         "nom": "Radar_12",
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
      "_id": "10",
      "nom": "Carrier_10",
      "hostilite": "Inconnu",
      "dateMaj": "16/11/2016",
      "type": "Air",
      "ssTypeAir": "Fighter",
      "Radars": [
        {
         "_id": "13",
         "nom": "Radar_13",
         "dateMaj": "09/05/2016",
         "modes": [
           {
              "fonction": "Acquisition",
              "modulation": "CW",
              "sousMode": {
                  "frequence": "7535,626919",
                  "frequenceType": "Fixe"
               },
               "balayage": {
                  "type": "Sectorial",
                  "PRA": "2295"
                }
           }
         ]
        }
      ]
    },
    {
      "_id": "11",
      "nom": "Carrier_11",
      "hostilite": "Ami",
      "dateMaj": "03/10/2016",
      "type": "Land",
      "ssTypeLand": "Vehicle",
      "Radars": [
        {
         "_id": "14",
         "nom": "Radar_14",
         "dateMaj": "13/05/2016",
         "modes": [
           {
              "fonction": "Acquisition",
              "modulation": "Pulse",
              "sousMode": {
                  "frequence": "8373,410344",
                  "frequenceType": "Agile",
                  "li": "16.18241397023627",
                  "liType": "Agile",
                  "pri": "694.3466136515177",
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
      "_id": "12",
      "nom": "Carrier_12",
      "hostilite": "Ami",
      "dateMaj": "03/06/2016",
      "type": "Air",
      "ssTypeAir": "Tanker",
      "Radars": [
        {
         "_id": "15",
         "nom": "Radar_15",
         "dateMaj": "08/06/2016",
         "modes": [
           {
              "fonction": "Poursuite",
              "modulation": "Pulse",
              "sousMode": {
                  "frequence": "9678,319517",
                  "frequenceType": "Fixe",
                  "li": "8.397651801266292",
                  "liType": "Agile",
                  "pri": "926.2087006360881",
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
                  "frequence": "9648,188924",
                  "frequenceType": "Fixe"
               },
               "balayage": {
                  "type": "Sectorial",
                  "PRA": "4610"
                }
           }
         ]
        }
      ]
    },
    {
      "_id": "13",
      "nom": "Carrier_13",
      "hostilite": "Inconnu",
      "dateMaj": "21/08/2016",
      "type": "Sea",
      "ssTypeSea": "Tanker",
      "Radars": [
        {
         "_id": "16",
         "nom": "Radar_16",
         "dateMaj": "15/02/2016",
         "modes": [
           {
              "fonction": "Veille",
              "modulation": "CW",
              "sousMode": {
                  "frequence": "3631,587182",
                  "frequenceType": "Fixe"
               },
               "balayage": {
                  "type": "Conical"
                }
           },
           {
              "fonction": "Veille",
              "modulation": "CW",
              "sousMode": {
                  "frequence": "8839,980564",
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
      "_id": "14",
      "nom": "Carrier_14",
      "hostilite": "Inconnu",
      "dateMaj": "05/05/2016",
      "type": "Air",
      "ssTypeAir": "Weapon",
      "Radars": [
        {
         "_id": "17",
         "nom": "Radar_17",
         "dateMaj": "24/08/2016",
         "modes": [
           {
              "fonction": "Poursuite",
              "modulation": "Pulse",
              "sousMode": {
                  "frequence": "3402,387277",
                  "frequenceType": "Agile",
                  "li": "9.165386832268933",
                  "liType": "Agile",
                  "pri": "301.44775344773257",
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
                  "frequence": "5488,030141",
                  "frequenceType": "Fixe",
                  "li": "11.146314868014837",
                  "liType": "Fixe",
                  "pri": "431.8389339522594",
                  "priType": "Fixe"
               },
               "balayage": {
                  "type": "Circular",
                  "PRA": "27"
                }
           }
         ]
        },
        {
         "_id": "18",
         "nom": "Radar_18",
         "dateMaj": "02/06/2016",
         "modes": [
           {
              "fonction": "Veille",
              "modulation": "Pulse",
              "sousMode": {
                  "frequence": "5732,961257",
                  "frequenceType": "Agile",
                  "li": "9.92285599908366",
                  "liType": "Fixe",
                  "pri": "780.7744682955425",
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
                  "frequence": "4607,109421",
                  "frequenceType": "Fixe",
                  "li": "15.146116658102844",
                  "liType": "Agile",
                  "pri": "301.49174964461247",
                  "priType": "Fixe"
               },
               "balayage": {
                  "type": "Circular",
                  "PRA": "3965"
                }
           }
         ]
        }
      ]
    },
    {
      "_id": "15",
      "nom": "Carrier_15",
      "hostilite": "Inconnu",
      "dateMaj": "04/05/2016",
      "type": "Land",
      "ssTypeLand": "Vehicle",
      "Radars": [
        {
         "_id": "19",
         "nom": "Radar_19",
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
        },
        {
         "_id": "20",
         "nom": "Radar_20",
         "dateMaj": "04/06/2016",
         "modes": [
           {
              "fonction": "Tir",
              "modulation": "CW",
              "sousMode": {
                  "frequence": "3062,293850",
                  "frequenceType": "Agile"
               },
               "balayage": {
                  "type": "Sectorial",
                  "PRA": "2592"
                }
           }
         ]
        }
      ]
    },
    {
      "_id": "16",
      "nom": "Carrier_16",
      "hostilite": "Ami",
      "dateMaj": "19/05/2016",
      "type": "Land",
      "ssTypeLand": "Vehicle",
      "Radars": [
        {
         "_id": "21",
         "nom": "Radar_21",
         "dateMaj": "24/06/2016",
         "modes": [
           {
              "fonction": "Acquisition",
              "modulation": "Pulse",
              "sousMode": {
                  "frequence": "8906,199187",
                  "frequenceType": "Fixe",
                  "li": "4.367526458335434",
                  "liType": "Agile",
                  "pri": "638.8134862943961",
                  "priType": "Agile"
               },
               "balayage": {
                  "type": "Complex",
                  "PRA": "295"
                }
           }
         ]
        }
      ]
    },
    {
      "_id": "17",
      "nom": "Carrier_17",
      "hostilite": "Ami",
      "dateMaj": "13/07/2016",
      "type": "Land",
      "ssTypeLand": "Vehicle",
      "Radars": [
        {
         "_id": "22",
         "nom": "Radar_22",
         "dateMaj": "17/01/2017",
         "modes": [
           {
              "fonction": "Tir",
              "modulation": "CW",
              "sousMode": {
                  "frequence": "9565,446989",
                  "frequenceType": "Agile"
               },
               "balayage": {
                  "type": "Complex",
                  "PRA": "4167"
                }
           }
         ]
        }
      ]
    },
    {
      "_id": "18",
      "nom": "Carrier_18",
      "hostilite": "Inconnu",
      "dateMaj": "10/02/2016",
      "type": "Air",
      "ssTypeAir": "Weapon",
      "Radars": [
        {
         "_id": "23",
         "nom": "Radar_23",
         "dateMaj": "13/11/2016",
         "modes": [
           {
              "fonction": "Veille",
              "modulation": "CW",
              "sousMode": {
                  "frequence": "6098,820878",
                  "frequenceType": "Agile"
               },
               "balayage": {
                  "type": "Circular",
                  "PRA": "4190"
                }
           }
         ]
        }
      ]
    },
    {
      "_id": "19",
      "nom": "Carrier_19",
      "hostilite": "Inconnu",
      "dateMaj": "12/01/2016",
      "type": "Sea",
      "ssTypeSea": "Overcraft",
      "Radars": [
        {
         "_id": "24",
         "nom": "Radar_24",
         "dateMaj": "20/06/2016",
         "modes": [
           {
              "fonction": "Poursuite",
              "modulation": "CW",
              "sousMode": {
                  "frequence": "4472,183929",
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
      "_id": "20",
      "nom": "Carrier_20",
      "hostilite": "Hostile",
      "dateMaj": "15/07/2016",
      "type": "Air",
      "ssTypeAir": "Weapon",
      "Radars": [
        {
         "_id": "25",
         "nom": "Radar_25",
         "dateMaj": "21/01/2016",
         "modes": [
           {
              "fonction": "Veille",
              "modulation": "CW",
              "sousMode": {
                  "frequence": "7595,239872",
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
                  "frequence": "4701,731562",
                  "frequenceType": "Agile",
                  "li": "3.8175192729325276",
                  "liType": "Agile",
                  "pri": "225.27159063818578",
                  "priType": "Fixe"
               },
               "balayage": {
                  "type": "Sectorial",
                  "PRA": "905"
                }
           }
         ]
        }
      ]
    },
    {
      "_id": "21",
      "nom": "Carrier_21",
      "hostilite": "Ami",
      "dateMaj": "24/12/2016",
      "type": "Air",
      "ssTypeAir": "Tanker",
      "Radars": [
        {
         "_id": "26",
         "nom": "Radar_26",
         "dateMaj": "13/02/2016",
         "modes": [
           {
              "fonction": "Tir",
              "modulation": "CW",
              "sousMode": {
                  "frequence": "8379,961654",
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
      "_id": "22",
      "nom": "Carrier_22",
      "hostilite": "Inconnu",
      "dateMaj": "02/12/2016",
      "type": "Air",
      "ssTypeAir": "Bomber",
      "Radars": [
        {
         "_id": "27",
         "nom": "Radar_27",
         "dateMaj": "20/04/2016",
         "modes": [
           {
              "fonction": "Poursuite",
              "modulation": "CW",
              "sousMode": {
                  "frequence": "4384,373790",
                  "frequenceType": "Fixe"
               },
               "balayage": {
                  "type": "Complex",
                  "PRA": "4297"
                }
           },
           {
              "fonction": "Tir",
              "modulation": "CW",
              "sousMode": {
                  "frequence": "4558,875399",
                  "frequenceType": "Agile"
               },
               "balayage": {
                  "type": "Sectorial",
                  "PRA": "1288"
                }
           }
         ]
        },
        {
         "_id": "28",
         "nom": "Radar_28",
         "dateMaj": "25/07/2016",
         "modes": [
           {
              "fonction": "Poursuite",
              "modulation": "Pulse",
              "sousMode": {
                  "frequence": "5528,392828",
                  "frequenceType": "Fixe",
                  "li": "3.123380578075957",
                  "liType": "Agile",
                  "pri": "657.1663630105676",
                  "priType": "Fixe"
               },
               "balayage": {
                  "type": "Circular",
                  "PRA": "2746"
                }
           },
           {
              "fonction": "Poursuite",
              "modulation": "CW",
              "sousMode": {
                  "frequence": "8565,951520",
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
      "_id": "23",
      "nom": "Carrier_23",
      "hostilite": "Inconnu",
      "dateMaj": "09/04/2016",
      "type": "Air",
      "ssTypeAir": "Drone",
      "Radars": [
        {
         "_id": "29",
         "nom": "Radar_29",
         "dateMaj": "15/04/2016",
         "modes": [
           {
              "fonction": "Tir",
              "modulation": "Pulse",
              "sousMode": {
                  "frequence": "6332,722752",
                  "frequenceType": "Agile",
                  "li": "8.484953670256054",
                  "liType": "Fixe",
                  "pri": "333.2634662254391",
                  "priType": "Fixe"
               },
               "balayage": {
                  "type": "Complex",
                  "PRA": "2532"
                }
           },
           {
              "fonction": "Veille",
              "modulation": "Pulse",
              "sousMode": {
                  "frequence": "9424,962655",
                  "frequenceType": "Agile",
                  "li": "18.732523896142926",
                  "liType": "Agile",
                  "pri": "204.17922027477",
                  "priType": "Fixe"
               },
               "balayage": {
                  "type": "Circular",
                  "PRA": "1346"
                }
           }
         ]
        },
        {
         "_id": "30",
         "nom": "Radar_30",
         "dateMaj": "22/08/2016",
         "modes": [
           {
              "fonction": "Tir",
              "modulation": "Pulse",
              "sousMode": {
                  "frequence": "3740,377089",
                  "frequenceType": "Agile",
                  "li": "16.122238186088794",
                  "liType": "Fixe",
                  "pri": "280.18202218425824",
                  "priType": "Fixe"
               },
               "balayage": {
                  "type": "Sectorial",
                  "PRA": "4069"
                }
           }
         ]
        }
      ]
    },
    {
      "_id": "24",
      "nom": "Carrier_24",
      "hostilite": "Inconnu",
      "dateMaj": "15/12/2016",
      "type": "Land",
      "ssTypeLand": "Tank",
      "Radars": [
        {
         "_id": "31",
         "nom": "Radar_31",
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
        },
        {
         "_id": "32",
         "nom": "Radar_32",
         "dateMaj": "01/02/2016",
         "modes": [
           {
              "fonction": "Tir",
              "modulation": "CW",
              "sousMode": {
                  "frequence": "8462,399212",
                  "frequenceType": "Agile"
               },
               "balayage": {
                  "type": "Complex",
                  "PRA": "3641"
                }
           }
         ]
        }
      ]
    },
    {
      "_id": "25",
      "nom": "Carrier_25",
      "hostilite": "Inconnu",
      "dateMaj": "04/02/2016",
      "type": "Air",
      "ssTypeAir": "Bomber",
      "Radars": [
        {
         "_id": "33",
         "nom": "Radar_33",
         "dateMaj": "16/01/2016",
         "modes": [
           {
              "fonction": "Tir",
              "modulation": "Pulse",
              "sousMode": {
                  "frequence": "7265,700796",
                  "frequenceType": "Fixe",
                  "li": "10.157517484752137",
                  "liType": "Fixe",
                  "pri": "612.3227096472991",
                  "priType": "Agile"
               },
               "balayage": {
                  "type": "Sectorial",
                  "PRA": "2842"
                }
           }
         ]
        }
      ]
    },
    {
      "_id": "26",
      "nom": "Carrier_26",
      "hostilite": "Ami",
      "dateMaj": "17/04/2016",
      "type": "Air",
      "ssTypeAir": "Bomber",
      "Radars": [
        {
         "_id": "34",
         "nom": "Radar_34",
         "dateMaj": "21/11/2016",
         "modes": [
           {
              "fonction": "Acquisition",
              "modulation": "CW",
              "sousMode": {
                  "frequence": "9683,776137",
                  "frequenceType": "Fixe"
               },
               "balayage": {
                  "type": "Circular",
                  "PRA": "1309"
                }
           },
           {
              "fonction": "Tir",
              "modulation": "CW",
              "sousMode": {
                  "frequence": "4831,020004",
                  "frequenceType": "Agile"
               },
               "balayage": {
                  "type": "Complex",
                  "PRA": "2532"
                }
           }
         ]
        }
      ]
    },
    {
      "_id": "27",
      "nom": "Carrier_27",
      "hostilite": "Ami",
      "dateMaj": "02/08/2016",
      "type": "Sea",
      "ssTypeSea": "Tanker",
      "Radars": [
        {
         "_id": "35",
         "nom": "Radar_35",
         "dateMaj": "09/01/2017",
         "modes": [
           {
              "fonction": "Poursuite",
              "modulation": "Pulse",
              "sousMode": {
                  "frequence": "5961,052750",
                  "frequenceType": "Fixe",
                  "li": "8.716657112223064",
                  "liType": "Agile",
                  "pri": "152.22967261148884",
                  "priType": "Fixe"
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
      "_id": "28",
      "nom": "Carrier_28",
      "hostilite": "Ami",
      "dateMaj": "16/05/2016",
      "type": "Air",
      "ssTypeAir": "Bomber",
      "Radars": [
        {
         "_id": "36",
         "nom": "Radar_36",
         "dateMaj": "15/02/2016",
         "modes": [
           {
              "fonction": "Tir",
              "modulation": "Pulse",
              "sousMode": {
                  "frequence": "4986,647761",
                  "frequenceType": "Fixe",
                  "li": "11.369532664130977",
                  "liType": "Agile",
                  "pri": "230.33376399516484",
                  "priType": "Fixe"
               },
               "balayage": {
                  "type": "Complex",
                  "PRA": "1048"
                }
           }
         ]
        },
        {
         "_id": "37",
         "nom": "Radar_37",
         "dateMaj": "07/10/2016",
         "modes": [
           {
              "fonction": "Acquisition",
              "modulation": "CW",
              "sousMode": {
                  "frequence": "4423,871700",
                  "frequenceType": "Fixe"
               },
               "balayage": {
                  "type": "Complex",
                  "PRA": "1312"
                }
           }
         ]
        }
      ]
    },
    {
      "_id": "29",
      "nom": "Carrier_29",
      "hostilite": "Hostile",
      "dateMaj": "05/08/2016",
      "type": "Sea",
      "ssTypeSea": "Battle ship",
      "Radars": [
        {
         "_id": "38",
         "nom": "Radar_38",
         "dateMaj": "07/04/2016",
         "modes": [
           {
              "fonction": "Tir",
              "modulation": "CW",
              "sousMode": {
                  "frequence": "5535,894247",
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
                  "frequence": "9314,552947",
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
      "_id": "30",
      "nom": "Carrier_30",
      "hostilite": "Inconnu",
      "dateMaj": "03/02/2016",
      "type": "Land",
      "ssTypeLand": "Combat support",
      "Radars": [
        {
         "_id": "39",
         "nom": "Radar_39",
         "dateMaj": "23/10/2016",
         "modes": [
           {
              "fonction": "Poursuite",
              "modulation": "CW",
              "sousMode": {
                  "frequence": "4292,381836",
                  "frequenceType": "Agile"
               },
               "balayage": {
                  "type": "Sectorial",
                  "PRA": "3690"
                }
           }
         ]
        },
        {
         "_id": "40",
         "nom": "Radar_40",
         "dateMaj": "06/09/2016",
         "modes": [
           {
              "fonction": "Veille",
              "modulation": "Pulse",
              "sousMode": {
                  "frequence": "8546,656459",
                  "frequenceType": "Fixe",
                  "li": "14.807150096049185",
                  "liType": "Agile",
                  "pri": "775.4833280216596",
                  "priType": "Agile"
               },
               "balayage": {
                  "type": "Sectorial",
                  "PRA": "1094"
                }
           },
           {
              "fonction": "Acquisition",
              "modulation": "Pulse",
              "sousMode": {
                  "frequence": "5395,873717",
                  "frequenceType": "Fixe",
                  "li": "9.020666870542815",
                  "liType": "Agile",
                  "pri": "919.7693031762122",
                  "priType": "Fixe"
               },
               "balayage": {
                  "type": "Sectorial",
                  "PRA": "3987"
                }
           }
         ]
        }
      ]
    },
    {
      "_id": "31",
      "nom": "Carrier_31",
      "hostilite": "Inconnu",
      "dateMaj": "12/12/2016",
      "type": "Sea",
      "ssTypeSea": "Overcraft",
      "Radars": [
        {
         "_id": "41",
         "nom": "Radar_41",
         "dateMaj": "04/05/2016",
         "modes": [
           {
              "fonction": "Acquisition",
              "modulation": "Pulse",
              "sousMode": {
                  "frequence": "3525,646083",
                  "frequenceType": "Agile",
                  "li": "18.046092793238238",
                  "liType": "Agile",
                  "pri": "559.3019008397191",
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
      "_id": "32",
      "nom": "Carrier_32",
      "hostilite": "Ami",
      "dateMaj": "11/01/2017",
      "type": "Air",
      "ssTypeAir": "Drone",
      "Radars": [
        {
         "_id": "42",
         "nom": "Radar_42",
         "dateMaj": "01/08/2016",
         "modes": [
           {
              "fonction": "Poursuite",
              "modulation": "Pulse",
              "sousMode": {
                  "frequence": "5895,288715",
                  "frequenceType": "Fixe",
                  "li": "16.927098321820033",
                  "liType": "Agile",
                  "pri": "906.3977879257737",
                  "priType": "Agile"
               },
               "balayage": {
                  "type": "Sectorial",
                  "PRA": "2427"
                }
           },
           {
              "fonction": "Veille",
              "modulation": "Pulse",
              "sousMode": {
                  "frequence": "8438,045654",
                  "frequenceType": "Agile",
                  "li": "18.232121769574754",
                  "liType": "Fixe",
                  "pri": "611.561405661172",
                  "priType": "Agile"
               },
               "balayage": {
                  "type": "Fixe"
                }
           }
         ]
        },
        {
         "_id": "43",
         "nom": "Radar_43",
         "dateMaj": "01/04/2016",
         "modes": [
           {
              "fonction": "Poursuite",
              "modulation": "Pulse",
              "sousMode": {
                  "frequence": "4359,217537",
                  "frequenceType": "Agile",
                  "li": "12.271885880167437",
                  "liType": "Fixe",
                  "pri": "566.9799812181159",
                  "priType": "Agile"
               },
               "balayage": {
                  "type": "Circular",
                  "PRA": "4353"
                }
           }
         ]
        }
      ]
    },
    {
      "_id": "33",
      "nom": "Carrier_33",
      "hostilite": "Ami",
      "dateMaj": "17/05/2016",
      "type": "Sea",
      "ssTypeSea": "Cruiser",
      "Radars": [
        {
         "_id": "44",
         "nom": "Radar_44",
         "dateMaj": "19/04/2016",
         "modes": [
           {
              "fonction": "Poursuite",
              "modulation": "CW",
              "sousMode": {
                  "frequence": "3754,228100",
                  "frequenceType": "Fixe"
               },
               "balayage": {
                  "type": "Sectorial",
                  "PRA": "2749"
                }
           },
           {
              "fonction": "Acquisition",
              "modulation": "Pulse",
              "sousMode": {
                  "frequence": "5441,844396",
                  "frequenceType": "Fixe",
                  "li": "13.97126907182784",
                  "liType": "Fixe",
                  "pri": "454.4696643853442",
                  "priType": "Agile"
               },
               "balayage": {
                  "type": "Circular",
                  "PRA": "608"
                }
           }
         ]
        }
      ]
    },
    {
      "_id": "34",
      "nom": "Carrier_34",
      "hostilite": "Ami",
      "dateMaj": "18/11/2016",
      "type": "Land",
      "ssTypeLand": "Tank",
      "Radars": [
        {
         "_id": "45",
         "nom": "Radar_45",
         "dateMaj": "19/10/2016",
         "modes": [
           {
              "fonction": "Poursuite",
              "modulation": "Pulse",
              "sousMode": {
                  "frequence": "4419,171642",
                  "frequenceType": "Agile",
                  "li": "6.361337866674661",
                  "liType": "Fixe",
                  "pri": "176.3056502881715",
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
      "_id": "35",
      "nom": "Carrier_35",
      "hostilite": "Inconnu",
      "dateMaj": "10/04/2016",
      "type": "Land",
      "ssTypeLand": "Patriot",
      "Radars": [
        {
         "_id": "46",
         "nom": "Radar_46",
         "dateMaj": "24/02/2016",
         "modes": [
           {
              "fonction": "Acquisition",
              "modulation": "Pulse",
              "sousMode": {
                  "frequence": "7509,310394",
                  "frequenceType": "Agile",
                  "li": "14.986487615463089",
                  "liType": "Fixe",
                  "pri": "239.972483861828",
                  "priType": "Agile"
               },
               "balayage": {
                  "type": "Sectorial",
                  "PRA": "2241"
                }
           },
           {
              "fonction": "Acquisition",
              "modulation": "Pulse",
              "sousMode": {
                  "frequence": "5549,847030",
                  "frequenceType": "Agile",
                  "li": "13.096056695690905",
                  "liType": "Agile",
                  "pri": "846.9856380081262",
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
      "_id": "36",
      "nom": "Carrier_36",
      "hostilite": "Inconnu",
      "dateMaj": "24/05/2016",
      "type": "Land",
      "ssTypeLand": "Airport",
      "Radars": [
        {
         "_id": "47",
         "nom": "Radar_47",
         "dateMaj": "08/01/2017",
         "modes": [
           {
              "fonction": "Acquisition",
              "modulation": "CW",
              "sousMode": {
                  "frequence": "8079,312738",
                  "frequenceType": "Agile"
               },
               "balayage": {
                  "type": "Circular",
                  "PRA": "2355"
                }
           },
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
        }
      ]
    },
    {
      "_id": "37",
      "nom": "Carrier_37",
      "hostilite": "Ami",
      "dateMaj": "14/11/2016",
      "type": "Air",
      "ssTypeAir": "Weapon",
      "Radars": [
        {
         "_id": "48",
         "nom": "Radar_48",
         "dateMaj": "08/12/2016",
         "modes": [
           {
              "fonction": "Veille",
              "modulation": "Pulse",
              "sousMode": {
                  "frequence": "9728,855766",
                  "frequenceType": "Agile",
                  "li": "7.6313223249507836",
                  "liType": "Fixe",
                  "pri": "450.9166894226241",
                  "priType": "Fixe"
               },
               "balayage": {
                  "type": "Sectorial",
                  "PRA": "3357"
                }
           }
         ]
        },
        {
         "_id": "49",
         "nom": "Radar_49",
         "dateMaj": "04/12/2016",
         "modes": [
           {
              "fonction": "Tir",
              "modulation": "CW",
              "sousMode": {
                  "frequence": "4113,417826",
                  "frequenceType": "Agile"
               },
               "balayage": {
                  "type": "Circular",
                  "PRA": "2442"
                }
           },
           {
              "fonction": "Acquisition",
              "modulation": "CW",
              "sousMode": {
                  "frequence": "5462,653923",
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
      "_id": "38",
      "nom": "Carrier_38",
      "hostilite": "Inconnu",
      "dateMaj": "09/03/2016",
      "type": "Land",
      "ssTypeLand": "Airport",
      "Radars": [
        {
         "_id": "50",
         "nom": "Radar_50",
         "dateMaj": "22/10/2016",
         "modes": [
           {
              "fonction": "Poursuite",
              "modulation": "Pulse",
              "sousMode": {
                  "frequence": "4583,104732",
                  "frequenceType": "Fixe",
                  "li": "12.034307508533269",
                  "liType": "Agile",
                  "pri": "115.11091738963253",
                  "priType": "Fixe"
               },
               "balayage": {
                  "type": "Circular",
                  "PRA": "1837"
                }
           }
         ]
        }
      ]
    },
    {
      "_id": "39",
      "nom": "Carrier_39",
      "hostilite": "Hostile",
      "dateMaj": "15/07/2016",
      "type": "Sea",
      "ssTypeSea": "Overcraft",
      "Radars": [
        {
         "_id": "51",
         "nom": "Radar_51",
         "dateMaj": "01/10/2016",
         "modes": [
           {
              "fonction": "Veille",
              "modulation": "CW",
              "sousMode": {
                  "frequence": "3667,235099",
                  "frequenceType": "Agile"
               },
               "balayage": {
                  "type": "Fixe"
                }
           },
           {
              "fonction": "Tir",
              "modulation": "CW",
              "sousMode": {
                  "frequence": "3880,424073",
                  "frequenceType": "Fixe"
               },
               "balayage": {
                  "type": "Circular",
                  "PRA": "4672"
                }
           }
         ]
        }
      ]
    },
    {
      "_id": "40",
      "nom": "Carrier_40",
      "hostilite": "Hostile",
      "dateMaj": "20/04/2016",
      "type": "Land",
      "ssTypeLand": "Combat support",
      "Radars": [
        {
         "_id": "52",
         "nom": "Radar_52",
         "dateMaj": "23/03/2016",
         "modes": [
           {
              "fonction": "Veille",
              "modulation": "CW",
              "sousMode": {
                  "frequence": "8061,127562",
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
      "_id": "41",
      "nom": "Carrier_41",
      "hostilite": "Ami",
      "dateMaj": "09/02/2016",
      "type": "Air",
      "ssTypeAir": "Fighter",
      "Radars": [
        {
         "_id": "53",
         "nom": "Radar_53",
         "dateMaj": "12/03/2016",
         "modes": [
           {
              "fonction": "Tir",
              "modulation": "CW",
              "sousMode": {
                  "frequence": "6986,417137",
                  "frequenceType": "Agile"
               },
               "balayage": {
                  "type": "Sectorial",
                  "PRA": "1793"
                }
           },
           {
              "fonction": "Acquisition",
              "modulation": "CW",
              "sousMode": {
                  "frequence": "3016,297762",
                  "frequenceType": "Fixe"
               },
               "balayage": {
                  "type": "Fixe"
                }
           }
         ]
        },
        {
         "_id": "54",
         "nom": "Radar_54",
         "dateMaj": "04/07/2016",
         "modes": [
           {
              "fonction": "Veille",
              "modulation": "Pulse",
              "sousMode": {
                  "frequence": "7698,297821",
                  "frequenceType": "Agile",
                  "li": "1.233193923552256",
                  "liType": "Fixe",
                  "pri": "672.5459243671193",
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
                  "frequence": "4147,205031",
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
      "_id": "42",
      "nom": "Carrier_42",
      "hostilite": "Hostile",
      "dateMaj": "13/01/2016",
      "type": "Sea",
      "ssTypeSea": "Cruiser",
      "Radars": [
        {
         "_id": "55",
         "nom": "Radar_55",
         "dateMaj": "04/03/2016",
         "modes": [
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
        },
        {
         "_id": "56",
         "nom": "Radar_56",
         "dateMaj": "24/01/2017",
         "modes": [
           {
              "fonction": "Tir",
              "modulation": "Pulse",
              "sousMode": {
                  "frequence": "9912,919434",
                  "frequenceType": "Fixe",
                  "li": "14.96878765957519",
                  "liType": "Fixe",
                  "pri": "686.3317838210329",
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
                  "frequence": "6405,738188",
                  "frequenceType": "Agile"
               },
               "balayage": {
                  "type": "Complex",
                  "PRA": "3833"
                }
           }
         ]
        }
      ]
    },
    {
      "_id": "43",
      "nom": "Carrier_43",
      "hostilite": "Hostile",
      "dateMaj": "21/07/2016",
      "type": "Sea",
      "ssTypeSea": "Cargo",
      "Radars": [
        {
         "_id": "57",
         "nom": "Radar_57",
         "dateMaj": "22/07/2016",
         "modes": [
           {
              "fonction": "Poursuite",
              "modulation": "CW",
              "sousMode": {
                  "frequence": "3148,335092",
                  "frequenceType": "Fixe"
               },
               "balayage": {
                  "type": "Conical"
                }
           },
           {
              "fonction": "Acquisition",
              "modulation": "Pulse",
              "sousMode": {
                  "frequence": "8182,566419",
                  "frequenceType": "Fixe",
                  "li": "5.784760563861275",
                  "liType": "Fixe",
                  "pri": "398.39920163572987",
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
      "_id": "44",
      "nom": "Carrier_44",
      "hostilite": "Ami",
      "dateMaj": "19/01/2017",
      "type": "Sea",
      "ssTypeSea": "Fishing",
      "Radars": [
        {
         "_id": "58",
         "nom": "Radar_58",
         "dateMaj": "17/06/2016",
         "modes": [
           {
              "fonction": "Tir",
              "modulation": "Pulse",
              "sousMode": {
                  "frequence": "7793,974451",
                  "frequenceType": "Agile",
                  "li": "7.324482728331164",
                  "liType": "Fixe",
                  "pri": "406.48095646985524",
                  "priType": "Agile"
               },
               "balayage": {
                  "type": "Sectorial",
                  "PRA": "2808"
                }
           },
           {
              "fonction": "Veille",
              "modulation": "CW",
              "sousMode": {
                  "frequence": "8563,683066",
                  "frequenceType": "Agile"
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
         "dateMaj": "02/11/2016",
         "modes": [
           {
              "fonction": "Tir",
              "modulation": "Pulse",
              "sousMode": {
                  "frequence": "6357,261292",
                  "frequenceType": "Agile",
                  "li": "13.247506601793654",
                  "liType": "Fixe",
                  "pri": "116.02584389323437",
                  "priType": "Fixe"
               },
               "balayage": {
                  "type": "Circular",
                  "PRA": "4146"
                }
           },
           {
              "fonction": "Poursuite",
              "modulation": "CW",
              "sousMode": {
                  "frequence": "9341,881543",
                  "frequenceType": "Agile"
               },
               "balayage": {
                  "type": "Circular",
                  "PRA": "1595"
                }
           }
         ]
        }
      ]
    },
    {
      "_id": "45",
      "nom": "Carrier_45",
      "hostilite": "Hostile",
      "dateMaj": "14/01/2017",
      "type": "Air",
      "ssTypeAir": "Drone",
      "Radars": [
        {
         "_id": "60",
         "nom": "Radar_60",
         "dateMaj": "14/11/2016",
         "modes": [
           {
              "fonction": "Poursuite",
              "modulation": "CW",
              "sousMode": {
                  "frequence": "4509,683261",
                  "frequenceType": "Agile"
               },
               "balayage": {
                  "type": "Complex",
                  "PRA": "4123"
                }
           }
         ]
        }
      ]
    },
    {
      "_id": "46",
      "nom": "Carrier_46",
      "hostilite": "Inconnu",
      "dateMaj": "15/05/2016",
      "type": "Land",
      "ssTypeLand": "Vehicle",
      "Radars": [
        {
         "_id": "61",
         "nom": "Radar_61",
         "dateMaj": "07/03/2016",
         "modes": [
           {
              "fonction": "Veille",
              "modulation": "Pulse",
              "sousMode": {
                  "frequence": "7733,555402",
                  "frequenceType": "Agile",
                  "li": "13.252690024086629",
                  "liType": "Agile",
                  "pri": "134.07545261202557",
                  "priType": "Fixe"
               },
               "balayage": {
                  "type": "Conical"
                }
           },
           {
              "fonction": "Tir",
              "modulation": "CW",
              "sousMode": {
                  "frequence": "5407,781868",
                  "frequenceType": "Agile"
               },
               "balayage": {
                  "type": "Sectorial",
                  "PRA": "4207"
                }
           }
         ]
        },
        {
         "_id": "62",
         "nom": "Radar_62",
         "dateMaj": "16/05/2016",
         "modes": [
           {
              "fonction": "Acquisition",
              "modulation": "CW",
              "sousMode": {
                  "frequence": "9383,068902",
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
      "_id": "47",
      "nom": "Carrier_47",
      "hostilite": "Hostile",
      "dateMaj": "14/12/2016",
      "type": "Sea",
      "ssTypeSea": "Fishing",
      "Radars": [
        {
         "_id": "63",
         "nom": "Radar_63",
         "dateMaj": "13/03/2016",
         "modes": [
           {
              "fonction": "Acquisition",
              "modulation": "Pulse",
              "sousMode": {
                  "frequence": "4652,093705",
                  "frequenceType": "Fixe",
                  "li": "2.63451333820555",
                  "liType": "Agile",
                  "pri": "827.767314115157",
                  "priType": "Fixe"
               },
               "balayage": {
                  "type": "Sectorial",
                  "PRA": "2848"
                }
           }
         ]
        }
      ]
    },
    {
      "_id": "48",
      "nom": "Carrier_48",
      "hostilite": "Inconnu",
      "dateMaj": "04/06/2016",
      "type": "Sea",
      "ssTypeSea": "Tanker",
      "Radars": [
        {
         "_id": "64",
         "nom": "Radar_64",
         "dateMaj": "05/04/2016",
         "modes": [
           {
              "fonction": "Acquisition",
              "modulation": "Pulse",
              "sousMode": {
                  "frequence": "8646,912855",
                  "frequenceType": "Fixe",
                  "li": "12.721347268091948",
                  "liType": "Agile",
                  "pri": "875.0543415741837",
                  "priType": "Agile"
               },
               "balayage": {
                  "type": "Sectorial",
                  "PRA": "1309"
                }
           }
         ]
        },
        {
         "_id": "65",
         "nom": "Radar_65",
         "dateMaj": "13/12/2016",
         "modes": [
           {
              "fonction": "Veille",
              "modulation": "Pulse",
              "sousMode": {
                  "frequence": "5834,682671",
                  "frequenceType": "Fixe",
                  "li": "7.313570281341381",
                  "liType": "Fixe",
                  "pri": "399.93965051040226",
                  "priType": "Agile"
               },
               "balayage": {
                  "type": "Sectorial",
                  "PRA": "908"
                }
           }
         ]
        }
      ]
    },
    {
      "_id": "49",
      "nom": "Carrier_49",
      "hostilite": "Ami",
      "dateMaj": "16/11/2016",
      "type": "Land",
      "ssTypeLand": "Tank",
      "Radars": [
        {
         "_id": "66",
         "nom": "Radar_66",
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
      "_id": "50",
      "nom": "Carrier_50",
      "hostilite": "Inconnu",
      "dateMaj": "22/01/2017",
      "type": "Air",
      "ssTypeAir": "Interceptor",
      "Radars": [
        {
         "_id": "67",
         "nom": "Radar_67",
         "dateMaj": "20/01/2016",
         "modes": [
           {
              "fonction": "Veille",
              "modulation": "Pulse",
              "sousMode": {
                  "frequence": "3779,898704",
                  "frequenceType": "Fixe",
                  "li": "16.926415553019297",
                  "liType": "Fixe",
                  "pri": "382.4269511718544",
                  "priType": "Agile"
               },
               "balayage": {
                  "type": "Complex",
                  "PRA": "3096"
                }
           }
         ]
        }
      ]
    },
    {
      "_id": "51",
      "nom": "Carrier_51",
      "hostilite": "Inconnu",
      "dateMaj": "08/04/2016",
      "type": "Land",
      "ssTypeLand": "Air defense",
      "Radars": [
        {
         "_id": "68",
         "nom": "Radar_68",
         "dateMaj": "06/04/2016",
         "modes": [
           {
              "fonction": "Tir",
              "modulation": "Pulse",
              "sousMode": {
                  "frequence": "8180,108180",
                  "frequenceType": "Agile",
                  "li": "18.421443547412505",
                  "liType": "Fixe",
                  "pri": "611.8088385829765",
                  "priType": "Fixe"
               },
               "balayage": {
                  "type": "Circular",
                  "PRA": "4511"
                }
           },
           {
              "fonction": "Poursuite",
              "modulation": "CW",
              "sousMode": {
                  "frequence": "7352,174568",
                  "frequenceType": "Agile"
               },
               "balayage": {
                  "type": "Circular",
                  "PRA": "4219"
                }
           }
         ]
        },
        {
         "_id": "69",
         "nom": "Radar_69",
         "dateMaj": "17/07/2016",
         "modes": [
           {
              "fonction": "Acquisition",
              "modulation": "Pulse",
              "sousMode": {
                  "frequence": "5485,909486",
                  "frequenceType": "Fixe",
                  "li": "15.472068666790673",
                  "liType": "Agile",
                  "pri": "553.7353228018815",
                  "priType": "Fixe"
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
      "nom": "Carrier_52",
      "hostilite": "Inconnu",
      "dateMaj": "06/05/2016",
      "type": "Sea",
      "ssTypeSea": "Overcraft",
      "Radars": [
        {
         "_id": "70",
         "nom": "Radar_70",
         "dateMaj": "06/01/2017",
         "modes": [
           {
              "fonction": "Veille",
              "modulation": "CW",
              "sousMode": {
                  "frequence": "5940,077883",
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
      "_id": "53",
      "nom": "Carrier_53",
      "hostilite": "Ami",
      "dateMaj": "13/10/2016",
      "type": "Land",
      "ssTypeLand": "Tank",
      "Radars": [
        {
         "_id": "71",
         "nom": "Radar_71",
         "dateMaj": "01/04/2016",
         "modes": [
           {
              "fonction": "Veille",
              "modulation": "Pulse",
              "sousMode": {
                  "frequence": "7898,663537",
                  "frequenceType": "Agile",
                  "li": "12.961008302525789",
                  "liType": "Fixe",
                  "pri": "914.2533558952616",
                  "priType": "Fixe"
               },
               "balayage": {
                  "type": "Circular",
                  "PRA": "4898"
                }
           },
           {
              "fonction": "Acquisition",
              "modulation": "CW",
              "sousMode": {
                  "frequence": "8526,045987",
                  "frequenceType": "Agile"
               },
               "balayage": {
                  "type": "Complex",
                  "PRA": "343"
                }
           }
         ]
        }
      ]
    },
    {
      "_id": "54",
      "nom": "Carrier_54",
      "hostilite": "Inconnu",
      "dateMaj": "17/05/2016",
      "type": "Sea",
      "ssTypeSea": "Battle ship",
      "Radars": [
        {
         "_id": "72",
         "nom": "Radar_72",
         "dateMaj": "14/12/2016",
         "modes": [
           {
              "fonction": "Tir",
              "modulation": "CW",
              "sousMode": {
                  "frequence": "3616,422628",
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
                  "frequence": "6568,993300",
                  "frequenceType": "Fixe"
               },
               "balayage": {
                  "type": "Complex",
                  "PRA": "3823"
                }
           }
         ]
        },
        {
         "_id": "73",
         "nom": "Radar_73",
         "dateMaj": "16/01/2016",
         "modes": [
           {
              "fonction": "Veille",
              "modulation": "CW",
              "sousMode": {
                  "frequence": "3831,162479",
                  "frequenceType": "Agile"
               },
               "balayage": {
                  "type": "Sectorial",
                  "PRA": "1687"
                }
           },
           {
              "fonction": "Veille",
              "modulation": "Pulse",
              "sousMode": {
                  "frequence": "6426,821603",
                  "frequenceType": "Fixe",
                  "li": "19.709361230164248",
                  "liType": "Fixe",
                  "pri": "747.8246201224498",
                  "priType": "Fixe"
               },
               "balayage": {
                  "type": "Sectorial",
                  "PRA": "4100"
                }
           }
         ]
        }
      ]
    },
    {
      "_id": "55",
      "nom": "Carrier_55",
      "hostilite": "Hostile",
      "dateMaj": "07/01/2016",
      "type": "Sea",
      "ssTypeSea": "Cargo",
      "Radars": [
        {
         "_id": "74",
         "nom": "Radar_74",
         "dateMaj": "13/11/2016",
         "modes": [
           {
              "fonction": "Acquisition",
              "modulation": "Pulse",
              "sousMode": {
                  "frequence": "8656,255470",
                  "frequenceType": "Fixe",
                  "li": "7.46078007031421",
                  "liType": "Agile",
                  "pri": "146.56959184031328",
                  "priType": "Fixe"
               },
               "balayage": {
                  "type": "Fixe"
                }
           },
           {
              "fonction": "Tir",
              "modulation": "CW",
              "sousMode": {
                  "frequence": "9837,721465",
                  "frequenceType": "Fixe"
               },
               "balayage": {
                  "type": "Sectorial",
                  "PRA": "351"
                }
           }
         ]
        },
        {
         "_id": "75",
         "nom": "Radar_75",
         "dateMaj": "13/12/2016",
         "modes": [
           {
              "fonction": "Poursuite",
              "modulation": "CW",
              "sousMode": {
                  "frequence": "3597,695725",
                  "frequenceType": "Agile"
               },
               "balayage": {
                  "type": "Circular",
                  "PRA": "4561"
                }
           },
           {
              "fonction": "Tir",
              "modulation": "Pulse",
              "sousMode": {
                  "frequence": "5412,401485",
                  "frequenceType": "Fixe",
                  "li": "19.130509267961965",
                  "liType": "Agile",
                  "pri": "423.77553833655554",
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
      "_id": "56",
      "nom": "Carrier_56",
      "hostilite": "Ami",
      "dateMaj": "08/09/2016",
      "type": "Air",
      "ssTypeAir": "Tanker",
      "Radars": [
        {
         "_id": "76",
         "nom": "Radar_76",
         "dateMaj": "12/05/2016",
         "modes": [
           {
              "fonction": "Poursuite",
              "modulation": "CW",
              "sousMode": {
                  "frequence": "9551,354626",
                  "frequenceType": "Fixe"
               },
               "balayage": {
                  "type": "Fixe"
                }
           }
         ]
        },
        {
         "_id": "77",
         "nom": "Radar_77",
         "dateMaj": "21/06/2016",
         "modes": [
           {
              "fonction": "Veille",
              "modulation": "CW",
              "sousMode": {
                  "frequence": "8992,806658",
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
      "_id": "57",
      "nom": "Carrier_57",
      "hostilite": "Inconnu",
      "dateMaj": "02/09/2016",
      "type": "Land",
      "ssTypeLand": "Patriot",
      "Radars": [
        {
         "_id": "78",
         "nom": "Radar_78",
         "dateMaj": "04/05/2016",
         "modes": [
           {
              "fonction": "Tir",
              "modulation": "CW",
              "sousMode": {
                  "frequence": "7635,161406",
                  "frequenceType": "Fixe"
               },
               "balayage": {
                  "type": "Sectorial",
                  "PRA": "1832"
                }
           },
           {
              "fonction": "Veille",
              "modulation": "CW",
              "sousMode": {
                  "frequence": "8390,213582",
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
      "_id": "58",
      "nom": "Carrier_58",
      "hostilite": "Inconnu",
      "dateMaj": "04/10/2016",
      "type": "Sea",
      "ssTypeSea": "Cruiser",
      "Radars": [
        {
         "_id": "79",
         "nom": "Radar_79",
         "dateMaj": "17/12/2016",
         "modes": [
           {
              "fonction": "Poursuite",
              "modulation": "Pulse",
              "sousMode": {
                  "frequence": "6260,893898",
                  "frequenceType": "Fixe",
                  "li": "3.531771527725562",
                  "liType": "Fixe",
                  "pri": "586.9387492779373",
                  "priType": "Agile"
               },
               "balayage": {
                  "type": "Circular",
                  "PRA": "4521"
                }
           },
           {
              "fonction": "Tir",
              "modulation": "Pulse",
              "sousMode": {
                  "frequence": "5997,308572",
                  "frequenceType": "Agile",
                  "li": "11.977672215923956",
                  "liType": "Agile",
                  "pri": "357.0887622700026",
                  "priType": "Fixe"
               },
               "balayage": {
                  "type": "Sectorial",
                  "PRA": "1869"
                }
           }
         ]
        },
        {
         "_id": "80",
         "nom": "Radar_80",
         "dateMaj": "11/08/2016",
         "modes": [
           {
              "fonction": "Tir",
              "modulation": "Pulse",
              "sousMode": {
                  "frequence": "4213,247801",
                  "frequenceType": "Fixe",
                  "li": "2.916401569988512",
                  "liType": "Agile",
                  "pri": "146.234299868702",
                  "priType": "Fixe"
               },
               "balayage": {
                  "type": "Circular",
                  "PRA": "822"
                }
           }
         ]
        }
      ]
    },
    {
      "_id": "59",
      "nom": "Carrier_59",
      "hostilite": "Hostile",
      "dateMaj": "20/10/2016",
      "type": "Sea",
      "ssTypeSea": "Aircraft carrier",
      "Radars": [
        {
         "_id": "81",
         "nom": "Radar_81",
         "dateMaj": "07/02/2016",
         "modes": [
           {
              "fonction": "Acquisition",
              "modulation": "CW",
              "sousMode": {
                  "frequence": "5750,264317",
                  "frequenceType": "Agile"
               },
               "balayage": {
                  "type": "Complex",
                  "PRA": "3192"
                }
           }
         ]
        }
      ]
    },
    {
      "_id": "60",
      "nom": "Carrier_60",
      "hostilite": "Inconnu",
      "dateMaj": "21/02/2016",
      "type": "Air",
      "ssTypeAir": "Bomber",
      "Radars": [
        {
         "_id": "82",
         "nom": "Radar_82",
         "dateMaj": "22/08/2016",
         "modes": [
           {
              "fonction": "Tir",
              "modulation": "Pulse",
              "sousMode": {
                  "frequence": "5624,563579",
                  "frequenceType": "Fixe",
                  "li": "16.193017074009145",
                  "liType": "Agile",
                  "pri": "192.35035741680593",
                  "priType": "Fixe"
               },
               "balayage": {
                  "type": "Fixe"
                }
           }
         ]
        },
        {
         "_id": "83",
         "nom": "Radar_83",
         "dateMaj": "16/03/2016",
         "modes": [
           {
              "fonction": "Tir",
              "modulation": "CW",
              "sousMode": {
                  "frequence": "5855,410208",
                  "frequenceType": "Fixe"
               },
               "balayage": {
                  "type": "Complex",
                  "PRA": "989"
                }
           },
           {
              "fonction": "Acquisition",
              "modulation": "Pulse",
              "sousMode": {
                  "frequence": "3954,664091",
                  "frequenceType": "Fixe",
                  "li": "6.8237291206712",
                  "liType": "Agile",
                  "pri": "467.0755940663423",
                  "priType": "Fixe"
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
      "_id": "61",
      "nom": "Carrier_61",
      "hostilite": "Ami",
      "dateMaj": "10/10/2016",
      "type": "Land",
      "ssTypeLand": "Combat support",
      "Radars": [
        {
         "_id": "84",
         "nom": "Radar_84",
         "dateMaj": "17/03/2016",
         "modes": [
           {
              "fonction": "Tir",
              "modulation": "CW",
              "sousMode": {
                  "frequence": "5267,123147",
                  "frequenceType": "Agile"
               },
               "balayage": {
                  "type": "Complex",
                  "PRA": "300"
                }
           }
         ]
        },
        {
         "_id": "85",
         "nom": "Radar_85",
         "dateMaj": "15/04/2016",
         "modes": [
           {
              "fonction": "Poursuite",
              "modulation": "CW",
              "sousMode": {
                  "frequence": "4260,436500",
                  "frequenceType": "Fixe"
               },
               "balayage": {
                  "type": "Sectorial",
                  "PRA": "1597"
                }
           }
         ]
        }
      ]
    },
    {
      "_id": "62",
      "nom": "Carrier_62",
      "hostilite": "Ami",
      "dateMaj": "24/11/2016",
      "type": "Air",
      "ssTypeAir": "Fighter",
      "Radars": [
        {
         "_id": "86",
         "nom": "Radar_86",
         "dateMaj": "17/01/2016",
         "modes": [
           {
              "fonction": "Acquisition",
              "modulation": "CW",
              "sousMode": {
                  "frequence": "6473,703347",
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
      "_id": "63",
      "nom": "Carrier_63",
      "hostilite": "Inconnu",
      "dateMaj": "21/11/2016",
      "type": "Air",
      "ssTypeAir": "Drone",
      "Radars": [
        {
         "_id": "87",
         "nom": "Radar_87",
         "dateMaj": "17/11/2016",
         "modes": [
           {
              "fonction": "Poursuite",
              "modulation": "CW",
              "sousMode": {
                  "frequence": "3419,419495",
                  "frequenceType": "Agile"
               },
               "balayage": {
                  "type": "Sectorial",
                  "PRA": "2241"
                }
           },
           {
              "fonction": "Acquisition",
              "modulation": "CW",
              "sousMode": {
                  "frequence": "7670,039652",
                  "frequenceType": "Fixe"
               },
               "balayage": {
                  "type": "Complex",
                  "PRA": "2633"
                }
           }
         ]
        }
      ]
    },
    {
      "_id": "64",
      "nom": "Carrier_64",
      "hostilite": "Inconnu",
      "dateMaj": "07/06/2016",
      "type": "Sea",
      "ssTypeSea": "Tanker",
      "Radars": [
        {
         "_id": "88",
         "nom": "Radar_88",
         "dateMaj": "20/10/2016",
         "modes": [
           {
              "fonction": "Acquisition",
              "modulation": "CW",
              "sousMode": {
                  "frequence": "6566,514960",
                  "frequenceType": "Agile"
               },
               "balayage": {
                  "type": "Conical"
                }
           }
         ]
        },
        {
         "_id": "89",
         "nom": "Radar_89",
         "dateMaj": "07/01/2017",
         "modes": [
           {
              "fonction": "Acquisition",
              "modulation": "Pulse",
              "sousMode": {
                  "frequence": "4200,750620",
                  "frequenceType": "Agile",
                  "li": "11.909712441069649",
                  "liType": "Agile",
                  "pri": "880.125942662206",
                  "priType": "Agile"
               },
               "balayage": {
                  "type": "Complex",
                  "PRA": "3998"
                }
           }
         ]
        }
      ]
    },
    {
      "_id": "65",
      "nom": "Carrier_65",
      "hostilite": "Ami",
      "dateMaj": "06/02/2016",
      "type": "Air",
      "ssTypeAir": "Bomber",
      "Radars": [
        {
         "_id": "90",
         "nom": "Radar_90",
         "dateMaj": "21/11/2016",
         "modes": [
           {
              "fonction": "Veille",
              "modulation": "CW",
              "sousMode": {
                  "frequence": "8040,813474",
                  "frequenceType": "Fixe"
               },
               "balayage": {
                  "type": "Complex",
                  "PRA": "2537"
                }
           }
         ]
        }
      ]
    },
    {
      "_id": "66",
      "nom": "Carrier_66",
      "hostilite": "Hostile",
      "dateMaj": "17/07/2016",
      "type": "Air",
      "ssTypeAir": "Weapon",
      "Radars": [
        {
         "_id": "91",
         "nom": "Radar_91",
         "dateMaj": "01/02/2016",
         "modes": [
           {
              "fonction": "Tir",
              "modulation": "CW",
              "sousMode": {
                  "frequence": "8248,110201",
                  "frequenceType": "Agile"
               },
               "balayage": {
                  "type": "Complex",
                  "PRA": "4620"
                }
           }
         ]
        },
        {
         "_id": "92",
         "nom": "Radar_92",
         "dateMaj": "09/12/2016",
         "modes": [
           {
              "fonction": "Acquisition",
              "modulation": "CW",
              "sousMode": {
                  "frequence": "4771,845551",
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
      "_id": "67",
      "nom": "Carrier_67",
      "hostilite": "Ami",
      "dateMaj": "02/06/2016",
      "type": "Sea",
      "ssTypeSea": "Cruiser",
      "Radars": [
        {
         "_id": "93",
         "nom": "Radar_93",
         "dateMaj": "05/03/2016",
         "modes": [
           {
              "fonction": "Poursuite",
              "modulation": "Pulse",
              "sousMode": {
                  "frequence": "8610,193896",
                  "frequenceType": "Agile",
                  "li": "9.27976741127518",
                  "liType": "Agile",
                  "pri": "560.8746330286401",
                  "priType": "Fixe"
               },
               "balayage": {
                  "type": "Complex",
                  "PRA": "142"
                }
           },
           {
              "fonction": "Veille",
              "modulation": "CW",
              "sousMode": {
                  "frequence": "3744,344521",
                  "frequenceType": "Agile"
               },
               "balayage": {
                  "type": "Circular",
                  "PRA": "558"
                }
           }
         ]
        },
        {
         "_id": "94",
         "nom": "Radar_94",
         "dateMaj": "04/04/2016",
         "modes": [
           {
              "fonction": "Veille",
              "modulation": "Pulse",
              "sousMode": {
                  "frequence": "6557,532707",
                  "frequenceType": "Agile",
                  "li": "11.786624996098046",
                  "liType": "Agile",
                  "pri": "211.21213743613453",
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
      "_id": "68",
      "nom": "Carrier_68",
      "hostilite": "Hostile",
      "dateMaj": "19/05/2016",
      "type": "Land",
      "ssTypeLand": "Air defense",
      "Radars": [
        {
         "_id": "95",
         "nom": "Radar_95",
         "dateMaj": "02/11/2016",
         "modes": [
           {
              "fonction": "Tir",
              "modulation": "Pulse",
              "sousMode": {
                  "frequence": "4824,620027",
                  "frequenceType": "Agile",
                  "li": "5.064382542695601",
                  "liType": "Fixe",
                  "pri": "343.8882721138009",
                  "priType": "Agile"
               },
               "balayage": {
                  "type": "Conical"
                }
           }
         ]
        },
        {
         "_id": "96",
         "nom": "Radar_96",
         "dateMaj": "14/10/2016",
         "modes": [
           {
              "fonction": "Tir",
              "modulation": "CW",
              "sousMode": {
                  "frequence": "7916,052412",
                  "frequenceType": "Agile"
               },
               "balayage": {
                  "type": "Sectorial",
                  "PRA": "1284"
                }
           }
         ]
        }
      ]
    },
    {
      "_id": "69",
      "nom": "Carrier_69",
      "hostilite": "Hostile",
      "dateMaj": "03/01/2017",
      "type": "Sea",
      "ssTypeSea": "Destroyer",
      "Radars": [
        {
         "_id": "97",
         "nom": "Radar_97",
         "dateMaj": "05/07/2016",
         "modes": [
           {
              "fonction": "Tir",
              "modulation": "Pulse",
              "sousMode": {
                  "frequence": "7872,688888",
                  "frequenceType": "Agile",
                  "li": "11.873378397250747",
                  "liType": "Fixe",
                  "pri": "572.6669223118929",
                  "priType": "Agile"
               },
               "balayage": {
                  "type": "Sectorial",
                  "PRA": "4690"
                }
           },
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
        },
        {
         "_id": "98",
         "nom": "Radar_98",
         "dateMaj": "04/09/2016",
         "modes": [
           {
              "fonction": "Tir",
              "modulation": "Pulse",
              "sousMode": {
                  "frequence": "9783,374589",
                  "frequenceType": "Fixe",
                  "li": "14.442698351498125",
                  "liType": "Fixe",
                  "pri": "936.5883692098843",
                  "priType": "Agile"
               },
               "balayage": {
                  "type": "Circular",
                  "PRA": "1001"
                }
           }
         ]
        }
      ]
    },
    {
      "_id": "70",
      "nom": "Carrier_70",
      "hostilite": "Hostile",
      "dateMaj": "05/03/2016",
      "type": "Air",
      "ssTypeAir": "Weapon",
      "Radars": [
        {
         "_id": "99",
         "nom": "Radar_99",
         "dateMaj": "19/09/2016",
         "modes": [
           {
              "fonction": "Veille",
              "modulation": "Pulse",
              "sousMode": {
                  "frequence": "7143,279267",
                  "frequenceType": "Fixe",
                  "li": "2.977110163104442",
                  "liType": "Agile",
                  "pri": "420.79148248117303",
                  "priType": "Agile"
               },
               "balayage": {
                  "type": "Circular",
                  "PRA": "1588"
                }
           }
         ]
        }
      ]
    },
    {
      "_id": "71",
      "nom": "Carrier_71",
      "hostilite": "Inconnu",
      "dateMaj": "13/05/2016",
      "type": "Land",
      "ssTypeLand": "Combat support",
      "Radars": [
        {
         "_id": "100",
         "nom": "Radar_100",
         "dateMaj": "08/01/2017",
         "modes": [
           {
              "fonction": "Tir",
              "modulation": "CW",
              "sousMode": {
                  "frequence": "6440,894273",
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
                  "frequence": "8716,779702",
                  "frequenceType": "Fixe",
                  "li": "18.2122187420631",
                  "liType": "Fixe",
                  "pri": "289.85909862669587",
                  "priType": "Agile"
               },
               "balayage": {
                  "type": "Complex",
                  "PRA": "4406"
                }
           }
         ]
        },
        {
         "_id": "101",
         "nom": "Radar_101",
         "dateMaj": "13/05/2016",
         "modes": [
           {
              "fonction": "Veille",
              "modulation": "Pulse",
              "sousMode": {
                  "frequence": "9301,518843",
                  "frequenceType": "Agile",
                  "li": "15.567273440613423",
                  "liType": "Fixe",
                  "pri": "554.8339035436461",
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
      "_id": "72",
      "nom": "Carrier_72",
      "hostilite": "Hostile",
      "dateMaj": "18/06/2016",
      "type": "Sea",
      "ssTypeSea": "Cruiser",
      "Radars": [
        {
         "_id": "102",
         "nom": "Radar_102",
         "dateMaj": "20/03/2016",
         "modes": [
           {
              "fonction": "Acquisition",
              "modulation": "Pulse",
              "sousMode": {
                  "frequence": "8240,890631",
                  "frequenceType": "Fixe",
                  "li": "11.658704386881071",
                  "liType": "Fixe",
                  "pri": "834.4037238094587",
                  "priType": "Fixe"
               },
               "balayage": {
                  "type": "Complex",
                  "PRA": "2279"
                }
           }
         ]
        },
        {
         "_id": "103",
         "nom": "Radar_103",
         "dateMaj": "14/01/2017",
         "modes": [
           {
              "fonction": "Poursuite",
              "modulation": "Pulse",
              "sousMode": {
                  "frequence": "8571,012131",
                  "frequenceType": "Fixe",
                  "li": "18.95238912188813",
                  "liType": "Fixe",
                  "pri": "443.4573927090949",
                  "priType": "Agile"
               },
               "balayage": {
                  "type": "Sectorial",
                  "PRA": "2935"
                }
           },
           {
              "fonction": "Acquisition",
              "modulation": "Pulse",
              "sousMode": {
                  "frequence": "4945,398078",
                  "frequenceType": "Fixe",
                  "li": "17.016570515733086",
                  "liType": "Agile",
                  "pri": "764.8950912980603",
                  "priType": "Agile"
               },
               "balayage": {
                  "type": "Complex",
                  "PRA": "1139"
                }
           }
         ]
        }
      ]
    },
    {
      "_id": "73",
      "nom": "Carrier_73",
      "hostilite": "Hostile",
      "dateMaj": "21/01/2017",
      "type": "Land",
      "ssTypeLand": "Patriot",
      "Radars": [
        {
         "_id": "104",
         "nom": "Radar_104",
         "dateMaj": "18/11/2016",
         "modes": [
           {
              "fonction": "Acquisition",
              "modulation": "CW",
              "sousMode": {
                  "frequence": "7819,941079",
                  "frequenceType": "Fixe"
               },
               "balayage": {
                  "type": "Circular",
                  "PRA": "4204"
                }
           }
         ]
        },
        {
         "_id": "105",
         "nom": "Radar_105",
         "dateMaj": "19/11/2016",
         "modes": [
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
      "_id": "74",
      "nom": "Carrier_74",
      "hostilite": "Hostile",
      "dateMaj": "23/04/2016",
      "type": "Land",
      "ssTypeLand": "Air defense",
      "Radars": [
        {
         "_id": "106",
         "nom": "Radar_106",
         "dateMaj": "03/01/2017",
         "modes": [
           {
              "fonction": "Acquisition",
              "modulation": "Pulse",
              "sousMode": {
                  "frequence": "4880,610522",
                  "frequenceType": "Fixe",
                  "li": "8.20779776318172",
                  "liType": "Fixe",
                  "pri": "961.5593874459895",
                  "priType": "Fixe"
               },
               "balayage": {
                  "type": "Sectorial",
                  "PRA": "1331"
                }
           },
           {
              "fonction": "Acquisition",
              "modulation": "Pulse",
              "sousMode": {
                  "frequence": "9026,842608",
                  "frequenceType": "Agile",
                  "li": "7.639953073719443",
                  "liType": "Agile",
                  "pri": "577.7198530732719",
                  "priType": "Fixe"
               },
               "balayage": {
                  "type": "Sectorial",
                  "PRA": "4366"
                }
           }
         ]
        },
        {
         "_id": "107",
         "nom": "Radar_107",
         "dateMaj": "07/11/2016",
         "modes": [
           {
              "fonction": "Tir",
              "modulation": "CW",
              "sousMode": {
                  "frequence": "5725,528688",
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
      "_id": "75",
      "nom": "Carrier_75",
      "hostilite": "Ami",
      "dateMaj": "18/04/2016",
      "type": "Sea",
      "ssTypeSea": "Fishing",
      "Radars": [
        {
         "_id": "108",
         "nom": "Radar_108",
         "dateMaj": "23/06/2016",
         "modes": [
           {
              "fonction": "Tir",
              "modulation": "CW",
              "sousMode": {
                  "frequence": "9915,109186",
                  "frequenceType": "Fixe"
               },
               "balayage": {
                  "type": "Circular",
                  "PRA": "4678"
                }
           },
           {
              "fonction": "Poursuite",
              "modulation": "CW",
              "sousMode": {
                  "frequence": "4446,594584",
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
      "_id": "76",
      "nom": "Carrier_76",
      "hostilite": "Ami",
      "dateMaj": "07/07/2016",
      "type": "Land",
      "ssTypeLand": "Combat support",
      "Radars": [
        {
         "_id": "109",
         "nom": "Radar_109",
         "dateMaj": "12/02/2016",
         "modes": [
           {
              "fonction": "Veille",
              "modulation": "CW",
              "sousMode": {
                  "frequence": "4999,689031",
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
      "_id": "77",
      "nom": "Carrier_77",
      "hostilite": "Ami",
      "dateMaj": "20/09/2016",
      "type": "Sea",
      "ssTypeSea": "Fishing",
      "Radars": [
        {
         "_id": "110",
         "nom": "Radar_110",
         "dateMaj": "08/01/2016",
         "modes": [
           {
              "fonction": "Tir",
              "modulation": "CW",
              "sousMode": {
                  "frequence": "5617,862038",
                  "frequenceType": "Agile"
               },
               "balayage": {
                  "type": "Circular",
                  "PRA": "3180"
                }
           }
         ]
        },
        {
         "_id": "111",
         "nom": "Radar_111",
         "dateMaj": "12/12/2016",
         "modes": [
           {
              "fonction": "Acquisition",
              "modulation": "Pulse",
              "sousMode": {
                  "frequence": "8384,015099",
                  "frequenceType": "Fixe",
                  "li": "13.257227017136017",
                  "liType": "Fixe",
                  "pri": "405.8818403850754",
                  "priType": "Fixe"
               },
               "balayage": {
                  "type": "Circular",
                  "PRA": "2362"
                }
           }
         ]
        }
      ]
    },
    {
      "_id": "78",
      "nom": "Carrier_78",
      "hostilite": "Hostile",
      "dateMaj": "17/06/2016",
      "type": "Sea",
      "ssTypeSea": "Cargo",
      "Radars": [
        {
         "_id": "112",
         "nom": "Radar_112",
         "dateMaj": "25/11/2016",
         "modes": [
           {
              "fonction": "Tir",
              "modulation": "Pulse",
              "sousMode": {
                  "frequence": "9724,744051",
                  "frequenceType": "Agile",
                  "li": "9.79386614207097",
                  "liType": "Agile",
                  "pri": "258.4171201712954",
                  "priType": "Fixe"
               },
               "balayage": {
                  "type": "Fixe"
                }
           },
           {
              "fonction": "Tir",
              "modulation": "Pulse",
              "sousMode": {
                  "frequence": "6295,241465",
                  "frequenceType": "Fixe",
                  "li": "13.260154503407163",
                  "liType": "Fixe",
                  "pri": "357.8222830121817",
                  "priType": "Agile"
               },
               "balayage": {
                  "type": "Sectorial",
                  "PRA": "2162"
                }
           }
         ]
        }
      ]
    },
    {
      "_id": "79",
      "nom": "Carrier_79",
      "hostilite": "Ami",
      "dateMaj": "16/07/2016",
      "type": "Air",
      "ssTypeAir": "Fighter",
      "Radars": [
        {
         "_id": "113",
         "nom": "Radar_113",
         "dateMaj": "11/08/2016",
         "modes": [
           {
              "fonction": "Veille",
              "modulation": "CW",
              "sousMode": {
                  "frequence": "4185,902365",
                  "frequenceType": "Agile"
               },
               "balayage": {
                  "type": "Sectorial",
                  "PRA": "1174"
                }
           },
           {
              "fonction": "Tir",
              "modulation": "CW",
              "sousMode": {
                  "frequence": "5102,501779",
                  "frequenceType": "Agile"
               },
               "balayage": {
                  "type": "Fixe"
                }
           }
         ]
        },
        {
         "_id": "114",
         "nom": "Radar_114",
         "dateMaj": "10/01/2017",
         "modes": [
           {
              "fonction": "Acquisition",
              "modulation": "CW",
              "sousMode": {
                  "frequence": "3485,854144",
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
      "_id": "80",
      "nom": "Carrier_80",
      "hostilite": "Inconnu",
      "dateMaj": "14/08/2016",
      "type": "Sea",
      "ssTypeSea": "Tanker",
      "Radars": [
        {
         "_id": "115",
         "nom": "Radar_115",
         "dateMaj": "20/09/2016",
         "modes": [
           {
              "fonction": "Tir",
              "modulation": "CW",
              "sousMode": {
                  "frequence": "3162,597719",
                  "frequenceType": "Agile"
               },
               "balayage": {
                  "type": "Fixe"
                }
           },
           {
              "fonction": "Tir",
              "modulation": "Pulse",
              "sousMode": {
                  "frequence": "5865,719908",
                  "frequenceType": "Fixe",
                  "li": "12.961507481203608",
                  "liType": "Fixe",
                  "pri": "551.5784801766449",
                  "priType": "Fixe"
               },
               "balayage": {
                  "type": "Sectorial",
                  "PRA": "273"
                }
           }
         ]
        },
        {
         "_id": "116",
         "nom": "Radar_116",
         "dateMaj": "15/09/2016",
         "modes": [
           {
              "fonction": "Tir",
              "modulation": "CW",
              "sousMode": {
                  "frequence": "5833,323679",
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
      "_id": "81",
      "nom": "Carrier_81",
      "hostilite": "Hostile",
      "dateMaj": "22/03/2016",
      "type": "Land",
      "ssTypeLand": "Vehicle",
      "Radars": [
        {
         "_id": "117",
         "nom": "Radar_117",
         "dateMaj": "15/01/2017",
         "modes": [
           {
              "fonction": "Poursuite",
              "modulation": "Pulse",
              "sousMode": {
                  "frequence": "3476,686047",
                  "frequenceType": "Agile",
                  "li": "8.341820854025157",
                  "liType": "Agile",
                  "pri": "698.1123787265647",
                  "priType": "Agile"
               },
               "balayage": {
                  "type": "Sectorial",
                  "PRA": "3987"
                }
           }
         ]
        }
      ]
    },
    {
      "_id": "82",
      "nom": "Carrier_82",
      "hostilite": "Inconnu",
      "dateMaj": "12/02/2016",
      "type": "Land",
      "ssTypeLand": "Combat support",
      "Radars": [
        {
         "_id": "118",
         "nom": "Radar_118",
         "dateMaj": "24/08/2016",
         "modes": [
           {
              "fonction": "Acquisition",
              "modulation": "Pulse",
              "sousMode": {
                  "frequence": "4312,708383",
                  "frequenceType": "Fixe",
                  "li": "5.616114032233717",
                  "liType": "Agile",
                  "pri": "420.2269042665115",
                  "priType": "Fixe"
               },
               "balayage": {
                  "type": "Circular",
                  "PRA": "2793"
                }
           },
           {
              "fonction": "Veille",
              "modulation": "Pulse",
              "sousMode": {
                  "frequence": "9146,330022",
                  "frequenceType": "Agile",
                  "li": "18.050856167122415",
                  "liType": "Agile",
                  "pri": "791.1574218557618",
                  "priType": "Agile"
               },
               "balayage": {
                  "type": "Circular",
                  "PRA": "1694"
                }
           }
         ]
        },
        {
         "_id": "119",
         "nom": "Radar_119",
         "dateMaj": "21/04/2016",
         "modes": [
           {
              "fonction": "Poursuite",
              "modulation": "CW",
              "sousMode": {
                  "frequence": "8069,875017",
                  "frequenceType": "Agile"
               },
               "balayage": {
                  "type": "Conical"
                }
           },
           {
              "fonction": "Acquisition",
              "modulation": "Pulse",
              "sousMode": {
                  "frequence": "7779,313273",
                  "frequenceType": "Agile",
                  "li": "7.583910808050566",
                  "liType": "Fixe",
                  "pri": "761.011181706957",
                  "priType": "Agile"
               },
               "balayage": {
                  "type": "Circular",
                  "PRA": "3065"
                }
           }
         ]
        }
      ]
    },
    {
      "_id": "83",
      "nom": "Carrier_83",
      "hostilite": "Ami",
      "dateMaj": "04/12/2016",
      "type": "Air",
      "ssTypeAir": "Interceptor",
      "Radars": [
        {
         "_id": "120",
         "nom": "Radar_120",
         "dateMaj": "19/02/2016",
         "modes": [
           {
              "fonction": "Poursuite",
              "modulation": "Pulse",
              "sousMode": {
                  "frequence": "9296,951844",
                  "frequenceType": "Agile",
                  "li": "11.562009108894824",
                  "liType": "Agile",
                  "pri": "996.6399279379175",
                  "priType": "Agile"
               },
               "balayage": {
                  "type": "Circular",
                  "PRA": "2178"
                }
           },
           {
              "fonction": "Tir",
              "modulation": "CW",
              "sousMode": {
                  "frequence": "9039,170583",
                  "frequenceType": "Agile"
               },
               "balayage": {
                  "type": "Fixe"
                }
           }
         ]
        },
        {
         "_id": "121",
         "nom": "Radar_121",
         "dateMaj": "07/05/2016",
         "modes": [
           {
              "fonction": "Poursuite",
              "modulation": "Pulse",
              "sousMode": {
                  "frequence": "7789,736775",
                  "frequenceType": "Agile",
                  "li": "17.98384772391614",
                  "liType": "Agile",
                  "pri": "394.3178071202749",
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
                  "frequence": "9369,400439",
                  "frequenceType": "Fixe"
               },
               "balayage": {
                  "type": "Circular",
                  "PRA": "3180"
                }
           }
         ]
        }
      ]
    },
    {
      "_id": "84",
      "nom": "Carrier_84",
      "hostilite": "Hostile",
      "dateMaj": "16/08/2016",
      "type": "Land",
      "ssTypeLand": "Airport",
      "Radars": [
        {
         "_id": "122",
         "nom": "Radar_122",
         "dateMaj": "08/08/2016",
         "modes": [
           {
              "fonction": "Veille",
              "modulation": "Pulse",
              "sousMode": {
                  "frequence": "4278,402669",
                  "frequenceType": "Fixe",
                  "li": "17.480033395429064",
                  "liType": "Fixe",
                  "pri": "642.3448505917399",
                  "priType": "Agile"
               },
               "balayage": {
                  "type": "Sectorial",
                  "PRA": "3212"
                }
           },
           {
              "fonction": "Poursuite",
              "modulation": "Pulse",
              "sousMode": {
                  "frequence": "3227,634440",
                  "frequenceType": "Agile",
                  "li": "12.177610571905626",
                  "liType": "Agile",
                  "pri": "551.0706934883362",
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
      "_id": "85",
      "nom": "Carrier_85",
      "hostilite": "Inconnu",
      "dateMaj": "21/06/2016",
      "type": "Air",
      "ssTypeAir": "Bomber",
      "Radars": [
        {
         "_id": "123",
         "nom": "Radar_123",
         "dateMaj": "23/08/2016",
         "modes": [
           {
              "fonction": "Acquisition",
              "modulation": "CW",
              "sousMode": {
                  "frequence": "4493,623980",
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
                  "frequence": "7375,550262",
                  "frequenceType": "Fixe",
                  "li": "18.78335146267584",
                  "liType": "Fixe",
                  "pri": "392.48569079778053",
                  "priType": "Agile"
               },
               "balayage": {
                  "type": "Circular",
                  "PRA": "2329"
                }
           }
         ]
        }
      ]
    },
    {
      "_id": "86",
      "nom": "Carrier_86",
      "hostilite": "Inconnu",
      "dateMaj": "04/07/2016",
      "type": "Land",
      "ssTypeLand": "Airport",
      "Radars": [
        {
         "_id": "124",
         "nom": "Radar_124",
         "dateMaj": "13/08/2016",
         "modes": [
           {
              "fonction": "Poursuite",
              "modulation": "CW",
              "sousMode": {
                  "frequence": "9489,543199",
                  "frequenceType": "Agile"
               },
               "balayage": {
                  "type": "Complex",
                  "PRA": "911"
                }
           },
           {
              "fonction": "Acquisition",
              "modulation": "Pulse",
              "sousMode": {
                  "frequence": "8832,215733",
                  "frequenceType": "Agile",
                  "li": "2.515830392829268",
                  "liType": "Agile",
                  "pri": "703.4854545064751",
                  "priType": "Fixe"
               },
               "balayage": {
                  "type": "Complex",
                  "PRA": "3785"
                }
           }
         ]
        },
        {
         "_id": "125",
         "nom": "Radar_125",
         "dateMaj": "11/03/2016",
         "modes": [
           {
              "fonction": "Acquisition",
              "modulation": "Pulse",
              "sousMode": {
                  "frequence": "7728,305283",
                  "frequenceType": "Agile",
                  "li": "14.608311606973404",
                  "liType": "Fixe",
                  "pri": "210.04687406209433",
                  "priType": "Fixe"
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
      "_id": "87",
      "nom": "Carrier_87",
      "hostilite": "Hostile",
      "dateMaj": "02/10/2016",
      "type": "Air",
      "ssTypeAir": "Drone",
      "Radars": [
        {
         "_id": "126",
         "nom": "Radar_126",
         "dateMaj": "09/10/2016",
         "modes": [
           {
              "fonction": "Veille",
              "modulation": "CW",
              "sousMode": {
                  "frequence": "9318,068339",
                  "frequenceType": "Fixe"
               },
               "balayage": {
                  "type": "Fixe"
                }
           },
           {
              "fonction": "Veille",
              "modulation": "Pulse",
              "sousMode": {
                  "frequence": "9898,738163",
                  "frequenceType": "Fixe",
                  "li": "18.19212597884745",
                  "liType": "Fixe",
                  "pri": "951.1269783048778",
                  "priType": "Agile"
               },
               "balayage": {
                  "type": "Sectorial",
                  "PRA": "4357"
                }
           }
         ]
        }
      ]
    },
    {
      "_id": "88",
      "nom": "Carrier_88",
      "hostilite": "Inconnu",
      "dateMaj": "21/04/2016",
      "type": "Air",
      "ssTypeAir": "Weapon",
      "Radars": [
        {
         "_id": "127",
         "nom": "Radar_127",
         "dateMaj": "23/08/2016",
         "modes": [
           {
              "fonction": "Tir",
              "modulation": "CW",
              "sousMode": {
                  "frequence": "6079,648516",
                  "frequenceType": "Agile"
               },
               "balayage": {
                  "type": "Fixe"
                }
           }
         ]
        },
        {
         "_id": "128",
         "nom": "Radar_128",
         "dateMaj": "10/11/2016",
         "modes": [
           {
              "fonction": "Veille",
              "modulation": "CW",
              "sousMode": {
                  "frequence": "3061,077035",
                  "frequenceType": "Agile"
               },
               "balayage": {
                  "type": "Circular",
                  "PRA": "1630"
                }
           }
         ]
        }
      ]
    },
    {
      "_id": "89",
      "nom": "Carrier_89",
      "hostilite": "Hostile",
      "dateMaj": "14/06/2016",
      "type": "Sea",
      "ssTypeSea": "Cargo",
      "Radars": [
        {
         "_id": "129",
         "nom": "Radar_129",
         "dateMaj": "20/10/2016",
         "modes": [
           {
              "fonction": "Veille",
              "modulation": "Pulse",
              "sousMode": {
                  "frequence": "5948,077694",
                  "frequenceType": "Agile",
                  "li": "11.564577623494358",
                  "liType": "Agile",
                  "pri": "447.6012373348099",
                  "priType": "Fixe"
               },
               "balayage": {
                  "type": "Sectorial",
                  "PRA": "4008"
                }
           }
         ]
        }
      ]
    },
    {
      "_id": "90",
      "nom": "Carrier_90",
      "hostilite": "Hostile",
      "dateMaj": "22/07/2016",
      "type": "Air",
      "ssTypeAir": "Drone",
      "Radars": [
        {
         "_id": "130",
         "nom": "Radar_130",
         "dateMaj": "12/01/2016",
         "modes": [
           {
              "fonction": "Tir",
              "modulation": "CW",
              "sousMode": {
                  "frequence": "5114,417566",
                  "frequenceType": "Agile"
               },
               "balayage": {
                  "type": "Circular",
                  "PRA": "3874"
                }
           },
           {
              "fonction": "Tir",
              "modulation": "Pulse",
              "sousMode": {
                  "frequence": "6111,125110",
                  "frequenceType": "Fixe",
                  "li": "1.1331865783330606",
                  "liType": "Agile",
                  "pri": "998.6075231288622",
                  "priType": "Fixe"
               },
               "balayage": {
                  "type": "Circular",
                  "PRA": "2053"
                }
           }
         ]
        }
      ]
    },
    {
      "_id": "91",
      "nom": "Carrier_91",
      "hostilite": "Inconnu",
      "dateMaj": "13/01/2017",
      "type": "Air",
      "ssTypeAir": "Bomber",
      "Radars": [
        {
         "_id": "131",
         "nom": "Radar_131",
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
      "_id": "92",
      "nom": "Carrier_92",
      "hostilite": "Hostile",
      "dateMaj": "14/05/2016",
      "type": "Air",
      "ssTypeAir": "Interceptor",
      "Radars": [
        {
         "_id": "132",
         "nom": "Radar_132",
         "dateMaj": "02/01/2016",
         "modes": [
           {
              "fonction": "Acquisition",
              "modulation": "CW",
              "sousMode": {
                  "frequence": "3490,100554",
                  "frequenceType": "Agile"
               },
               "balayage": {
                  "type": "Circular",
                  "PRA": "209"
                }
           }
         ]
        },
        {
         "_id": "133",
         "nom": "Radar_133",
         "dateMaj": "24/01/2016",
         "modes": [
           {
              "fonction": "Veille",
              "modulation": "CW",
              "sousMode": {
                  "frequence": "4622,406068",
                  "frequenceType": "Agile"
               },
               "balayage": {
                  "type": "Circular",
                  "PRA": "4199"
                }
           }
         ]
        }
      ]
    },
    {
      "_id": "93",
      "nom": "Carrier_93",
      "hostilite": "Hostile",
      "dateMaj": "07/04/2016",
      "type": "Sea",
      "ssTypeSea": "Cargo",
      "Radars": [
        {
         "_id": "134",
         "nom": "Radar_134",
         "dateMaj": "16/12/2016",
         "modes": [
           {
              "fonction": "Poursuite",
              "modulation": "CW",
              "sousMode": {
                  "frequence": "7156,033596",
                  "frequenceType": "Fixe"
               },
               "balayage": {
                  "type": "Sectorial",
                  "PRA": "3762"
                }
           }
         ]
        }
      ]
    },
    {
      "_id": "94",
      "nom": "Carrier_94",
      "hostilite": "Inconnu",
      "dateMaj": "20/11/2016",
      "type": "Sea",
      "ssTypeSea": "Fishing",
      "Radars": [
        {
         "_id": "135",
         "nom": "Radar_135",
         "dateMaj": "20/01/2016",
         "modes": [
           {
              "fonction": "Poursuite",
              "modulation": "Pulse",
              "sousMode": {
                  "frequence": "7073,808360",
                  "frequenceType": "Fixe",
                  "li": "12.452707831271617",
                  "liType": "Agile",
                  "pri": "195.0360694096887",
                  "priType": "Fixe"
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
      "nom": "Carrier_95",
      "hostilite": "Ami",
      "dateMaj": "22/07/2016",
      "type": "Air",
      "ssTypeAir": "Bomber",
      "Radars": [
        {
         "_id": "136",
         "nom": "Radar_136",
         "dateMaj": "06/12/2016",
         "modes": [
           {
              "fonction": "Veille",
              "modulation": "CW",
              "sousMode": {
                  "frequence": "5005,161447",
                  "frequenceType": "Fixe"
               },
               "balayage": {
                  "type": "Circular",
                  "PRA": "413"
                }
           }
         ]
        }
      ]
    },
    {
      "_id": "96",
      "nom": "Carrier_96",
      "hostilite": "Inconnu",
      "dateMaj": "02/10/2016",
      "type": "Land",
      "ssTypeLand": "Airport",
      "Radars": [
        {
         "_id": "137",
         "nom": "Radar_137",
         "dateMaj": "15/06/2016",
         "modes": [
           {
              "fonction": "Veille",
              "modulation": "CW",
              "sousMode": {
                  "frequence": "3097,834282",
                  "frequenceType": "Agile"
               },
               "balayage": {
                  "type": "Conical"
                }
           }
         ]
        },
        {
         "_id": "138",
         "nom": "Radar_138",
         "dateMaj": "12/04/2016",
         "modes": [
           {
              "fonction": "Veille",
              "modulation": "Pulse",
              "sousMode": {
                  "frequence": "3060,735398",
                  "frequenceType": "Fixe",
                  "li": "4.0856315012784075",
                  "liType": "Fixe",
                  "pri": "622.2776123542554",
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
      "_id": "97",
      "nom": "Carrier_97",
      "hostilite": "Inconnu",
      "dateMaj": "06/07/2016",
      "type": "Sea",
      "ssTypeSea": "Battle ship",
      "Radars": [
        {
         "_id": "139",
         "nom": "Radar_139",
         "dateMaj": "03/03/2016",
         "modes": [
           {
              "fonction": "Tir",
              "modulation": "CW",
              "sousMode": {
                  "frequence": "6432,957460",
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
      "_id": "98",
      "nom": "Carrier_98",
      "hostilite": "Inconnu",
      "dateMaj": "13/01/2016",
      "type": "Air",
      "ssTypeAir": "Weapon",
      "Radars": [
        {
         "_id": "140",
         "nom": "Radar_140",
         "dateMaj": "20/09/2016",
         "modes": [
           {
              "fonction": "Acquisition",
              "modulation": "Pulse",
              "sousMode": {
                  "frequence": "3905,778434",
                  "frequenceType": "Agile",
                  "li": "19.559376209158863",
                  "liType": "Fixe",
                  "pri": "399.37072044798225",
                  "priType": "Agile"
               },
               "balayage": {
                  "type": "Conical"
                }
           }
         ]
        }
      ]
    }
]
