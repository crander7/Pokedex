angular.module('pokedex').service('landingSrv', function() {

  var national = [
    {
        entry_number: 1,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/1/",
            name: "bulbasaur"
        }
    }, {
        entry_number: 2,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/2/",
            name: "ivysaur"
        }
    }, {
        entry_number: 3,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/3/",
            name: "venusaur"
        }
    }, {
        entry_number: 4,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/4/",
            name: "charmander"
        }
    }, {
        entry_number: 5,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/5/",
            name: "charmeleon"
        }
    }, {
        entry_number: 6,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/6/",
            name: "charizard"
        }
    }, {
        entry_number: 7,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/7/",
            name: "squirtle"
        }
    }, {
        entry_number: 8,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/8/",
            name: "wartortle"
        }
    }, {
        entry_number: 9,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/9/",
            name: "blastoise"
        }
    }, {
        entry_number: 10,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/10/",
            name: "caterpie"
        }
    }, {
        entry_number: 11,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/11/",
            name: "metapod"
        }
    }, {
        entry_number: 12,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/12/",
            name: "butterfree"
        }
    }, {
        entry_number: 13,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/13/",
            name: "weedle"
        }
    }, {
        entry_number: 14,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/14/",
            name: "kakuna"
        }
    }, {
        entry_number: 15,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/15/",
            name: "beedrill"
        }
    }, {
        entry_number: 16,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/16/",
            name: "pidgey"
        }
    }, {
        entry_number: 17,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/17/",
            name: "pidgeotto"
        }
    }, {
        entry_number: 18,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/18/",
            name: "pidgeot"
        }
    }, {
        entry_number: 19,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/19/",
            name: "rattata"
        }
    }, {
        entry_number: 20,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/20/",
            name: "raticate"
        }
    }, {
        entry_number: 21,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/21/",
            name: "spearow"
        }
    }, {
        entry_number: 22,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/22/",
            name: "fearow"
        }
    }, {
        entry_number: 23,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/23/",
            name: "ekans"
        }
    }, {
        entry_number: 24,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/24/",
            name: "arbok"
        }
    }, {
        entry_number: 25,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/25/",
            name: "pikachu"
        }
    }, {
        entry_number: 26,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/26/",
            name: "raichu"
        }
    }, {
        entry_number: 27,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/27/",
            name: "sandshrew"
        }
    }, {
        entry_number: 28,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/28/",
            name: "sandslash"
        }
    }, {
        entry_number: 29,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/29/",
            name: "nidoran-f"
        }
    }, {
        entry_number: 30,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/30/",
            name: "nidorina"
        }
    }, {
        entry_number: 31,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/31/",
            name: "nidoqueen"
        }
    }, {
        entry_number: 32,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/32/",
            name: "nidoran-m"
        }
    }, {
        entry_number: 33,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/33/",
            name: "nidorino"
        }
    }, {
        entry_number: 34,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/34/",
            name: "nidoking"
        }
    }, {
        entry_number: 35,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/35/",
            name: "clefairy"
        }
    }, {
        entry_number: 36,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/36/",
            name: "clefable"
        }
    }, {
        entry_number: 37,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/37/",
            name: "vulpix"
        }
    }, {
        entry_number: 38,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/38/",
            name: "ninetales"
        }
    }, {
        entry_number: 39,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/39/",
            name: "jigglypuff"
        }
    }, {
        entry_number: 40,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/40/",
            name: "wigglytuff"
        }
    }, {
        entry_number: 41,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/41/",
            name: "zubat"
        }
    }, {
        entry_number: 42,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/42/",
            name: "golbat"
        }
    }, {
        entry_number: 43,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/43/",
            name: "oddish"
        }
    }, {
        entry_number: 44,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/44/",
            name: "gloom"
        }
    }, {
        entry_number: 45,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/45/",
            name: "vileplume"
        }
    }, {
        entry_number: 46,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/46/",
            name: "paras"
        }
    }, {
        entry_number: 47,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/47/",
            name: "parasect"
        }
    }, {
        entry_number: 48,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/48/",
            name: "venonat"
        }
    }, {
        entry_number: 49,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/49/",
            name: "venomoth"
        }
    }, {
        entry_number: 50,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/50/",
            name: "diglett"
        }
    }, {
        entry_number: 51,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/51/",
            name: "dugtrio"
        }
    }, {
        entry_number: 52,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/52/",
            name: "meowth"
        }
    }, {
        entry_number: 53,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/53/",
            name: "persian"
        }
    }, {
        entry_number: 54,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/54/",
            name: "psyduck"
        }
    }, {
        entry_number: 55,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/55/",
            name: "golduck"
        }
    }, {
        entry_number: 56,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/56/",
            name: "mankey"
        }
    }, {
        entry_number: 57,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/57/",
            name: "primeape"
        }
    }, {
        entry_number: 58,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/58/",
            name: "growlithe"
        }
    }, {
        entry_number: 59,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/59/",
            name: "arcanine"
        }
    }, {
        entry_number: 60,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/60/",
            name: "poliwag"
        }
    }, {
        entry_number: 61,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/61/",
            name: "poliwhirl"
        }
    }, {
        entry_number: 62,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/62/",
            name: "poliwrath"
        }
    }, {
        entry_number: 63,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/63/",
            name: "abra"
        }
    }, {
        entry_number: 64,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/64/",
            name: "kadabra"
        }
    }, {
        entry_number: 65,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/65/",
            name: "alakazam"
        }
    }, {
        entry_number: 66,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/66/",
            name: "machop"
        }
    }, {
        entry_number: 67,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/67/",
            name: "machoke"
        }
    }, {
        entry_number: 68,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/68/",
            name: "machamp"
        }
    }, {
        entry_number: 69,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/69/",
            name: "bellsprout"
        }
    }, {
        entry_number: 70,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/70/",
            name: "weepinbell"
        }
    }, {
        entry_number: 71,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/71/",
            name: "victreebel"
        }
    }, {
        entry_number: 72,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/72/",
            name: "tentacool"
        }
    }, {
        entry_number: 73,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/73/",
            name: "tentacruel"
        }
    }, {
        entry_number: 74,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/74/",
            name: "geodude"
        }
    }, {
        entry_number: 75,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/75/",
            name: "graveler"
        }
    }, {
        entry_number: 76,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/76/",
            name: "golem"
        }
    }, {
        entry_number: 77,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/77/",
            name: "ponyta"
        }
    }, {
        entry_number: 78,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/78/",
            name: "rapidash"
        }
    }, {
        entry_number: 79,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/79/",
            name: "slowpoke"
        }
    }, {
        entry_number: 80,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/80/",
            name: "slowbro"
        }
    }, {
        entry_number: 81,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/81/",
            name: "magnemite"
        }
    }, {
        entry_number: 82,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/82/",
            name: "magneton"
        }
    }, {
        entry_number: 83,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/83/",
            name: "farfetchd"
        }
    }, {
        entry_number: 84,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/84/",
            name: "doduo"
        }
    }, {
        entry_number: 85,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/85/",
            name: "dodrio"
        }
    }, {
        entry_number: 86,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/86/",
            name: "seel"
        }
    }, {
        entry_number: 87,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/87/",
            name: "dewgong"
        }
    }, {
        entry_number: 88,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/88/",
            name: "grimer"
        }
    }, {
        entry_number: 89,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/89/",
            name: "muk"
        }
    }, {
        entry_number: 90,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/90/",
            name: "shellder"
        }
    }, {
        entry_number: 91,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/91/",
            name: "cloyster"
        }
    }, {
        entry_number: 92,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/92/",
            name: "gastly"
        }
    }, {
        entry_number: 93,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/93/",
            name: "haunter"
        }
    }, {
        entry_number: 94,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/94/",
            name: "gengar"
        }
    }, {
        entry_number: 95,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/95/",
            name: "onix"
        }
    }, {
        entry_number: 96,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/96/",
            name: "drowzee"
        }
    }, {
        entry_number: 97,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/97/",
            name: "hypno"
        }
    }, {
        entry_number: 98,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/98/",
            name: "krabby"
        }
    }, {
        entry_number: 99,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/99/",
            name: "kingler"
        }
    }, {
        entry_number: 100,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/100/",
            name: "voltorb"
        }
    }, {
        entry_number: 101,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/101/",
            name: "electrode"
        }
    }, {
        entry_number: 102,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/102/",
            name: "exeggcute"
        }
    }, {
        entry_number: 103,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/103/",
            name: "exeggutor"
        }
    }, {
        entry_number: 104,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/104/",
            name: "cubone"
        }
    }, {
        entry_number: 105,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/105/",
            name: "marowak"
        }
    }, {
        entry_number: 106,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/106/",
            name: "hitmonlee"
        }
    }, {
        entry_number: 107,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/107/",
            name: "hitmonchan"
        }
    }, {
        entry_number: 108,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/108/",
            name: "lickitung"
        }
    }, {
        entry_number: 109,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/109/",
            name: "koffing"
        }
    }, {
        entry_number: 110,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/110/",
            name: "weezing"
        }
    }, {
        entry_number: 111,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/111/",
            name: "rhyhorn"
        }
    }, {
        entry_number: 112,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/112/",
            name: "rhydon"
        }
    }, {
        entry_number: 113,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/113/",
            name: "chansey"
        }
    }, {
        entry_number: 114,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/114/",
            name: "tangela"
        }
    }, {
        entry_number: 115,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/115/",
            name: "kangaskhan"
        }
    }, {
        entry_number: 116,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/116/",
            name: "horsea"
        }
    }, {
        entry_number: 117,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/117/",
            name: "seadra"
        }
    }, {
        entry_number: 118,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/118/",
            name: "goldeen"
        }
    }, {
        entry_number: 119,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/119/",
            name: "seaking"
        }
    }, {
        entry_number: 120,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/120/",
            name: "staryu"
        }
    }, {
        entry_number: 121,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/121/",
            name: "starmie"
        }
    }, {
        entry_number: 122,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/122/",
            name: "mr-mime"
        }
    }, {
        entry_number: 123,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/123/",
            name: "scyther"
        }
    }, {
        entry_number: 124,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/124/",
            name: "jynx"
        }
    }, {
        entry_number: 125,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/125/",
            name: "electabuzz"
        }
    }, {
        entry_number: 126,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/126/",
            name: "magmar"
        }
    }, {
        entry_number: 127,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/127/",
            name: "pinsir"
        }
    }, {
        entry_number: 128,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/128/",
            name: "tauros"
        }
    }, {
        entry_number: 129,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/129/",
            name: "magikarp"
        }
    }, {
        entry_number: 130,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/130/",
            name: "gyarados"
        }
    }, {
        entry_number: 131,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/131/",
            name: "lapras"
        }
    }, {
        entry_number: 132,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/132/",
            name: "ditto"
        }
    }, {
        entry_number: 133,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/133/",
            name: "eevee"
        }
    }, {
        entry_number: 134,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/134/",
            name: "vaporeon"
        }
    }, {
        entry_number: 135,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/135/",
            name: "jolteon"
        }
    }, {
        entry_number: 136,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/136/",
            name: "flareon"
        }
    }, {
        entry_number: 137,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/137/",
            name: "porygon"
        }
    }, {
        entry_number: 138,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/138/",
            name: "omanyte"
        }
    }, {
        entry_number: 139,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/139/",
            name: "omastar"
        }
    }, {
        entry_number: 140,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/140/",
            name: "kabuto"
        }
    }, {
        entry_number: 141,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/141/",
            name: "kabutops"
        }
    }, {
        entry_number: 142,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/142/",
            name: "aerodactyl"
        }
    }, {
        entry_number: 143,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/143/",
            name: "snorlax"
        }
    }, {
        entry_number: 144,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/144/",
            name: "articuno"
        }
    }, {
        entry_number: 145,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/145/",
            name: "zapdos"
        }
    }, {
        entry_number: 146,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/146/",
            name: "moltres"
        }
    }, {
        entry_number: 147,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/147/",
            name: "dratini"
        }
    }, {
        entry_number: 148,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/148/",
            name: "dragonair"
        }
    }, {
        entry_number: 149,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/149/",
            name: "dragonite"
        }
    }, {
        entry_number: 150,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/150/",
            name: "mewtwo"
        }
    }, {
        entry_number: 151,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/151/",
            name: "mew"
        }
    }, {
        entry_number: 152,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/152/",
            name: "chikorita"
        }
    }, {
        entry_number: 153,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/153/",
            name: "bayleef"
        }
    }, {
        entry_number: 154,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/154/",
            name: "meganium"
        }
    }, {
        entry_number: 155,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/155/",
            name: "cyndaquil"
        }
    }, {
        entry_number: 156,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/156/",
            name: "quilava"
        }
    }, {
        entry_number: 157,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/157/",
            name: "typhlosion"
        }
    }, {
        entry_number: 158,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/158/",
            name: "totodile"
        }
    }, {
        entry_number: 159,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/159/",
            name: "croconaw"
        }
    }, {
        entry_number: 160,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/160/",
            name: "feraligatr"
        }
    }, {
        entry_number: 161,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/161/",
            name: "sentret"
        }
    }, {
        entry_number: 162,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/162/",
            name: "furret"
        }
    }, {
        entry_number: 163,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/163/",
            name: "hoothoot"
        }
    }, {
        entry_number: 164,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/164/",
            name: "noctowl"
        }
    }, {
        entry_number: 165,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/165/",
            name: "ledyba"
        }
    }, {
        entry_number: 166,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/166/",
            name: "ledian"
        }
    }, {
        entry_number: 167,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/167/",
            name: "spinarak"
        }
    }, {
        entry_number: 168,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/168/",
            name: "ariados"
        }
    }, {
        entry_number: 169,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/169/",
            name: "crobat"
        }
    }, {
        entry_number: 170,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/170/",
            name: "chinchou"
        }
    }, {
        entry_number: 171,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/171/",
            name: "lanturn"
        }
    }, {
        entry_number: 172,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/172/",
            name: "pichu"
        }
    }, {
        entry_number: 173,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/173/",
            name: "cleffa"
        }
    }, {
        entry_number: 174,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/174/",
            name: "igglybuff"
        }
    }, {
        entry_number: 175,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/175/",
            name: "togepi"
        }
    }, {
        entry_number: 176,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/176/",
            name: "togetic"
        }
    }, {
        entry_number: 177,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/177/",
            name: "natu"
        }
    }, {
        entry_number: 178,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/178/",
            name: "xatu"
        }
    }, {
        entry_number: 179,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/179/",
            name: "mareep"
        }
    }, {
        entry_number: 180,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/180/",
            name: "flaaffy"
        }
    }, {
        entry_number: 181,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/181/",
            name: "ampharos"
        }
    }, {
        entry_number: 182,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/182/",
            name: "bellossom"
        }
    }, {
        entry_number: 183,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/183/",
            name: "marill"
        }
    }, {
        entry_number: 184,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/184/",
            name: "azumarill"
        }
    }, {
        entry_number: 185,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/185/",
            name: "sudowoodo"
        }
    }, {
        entry_number: 186,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/186/",
            name: "politoed"
        }
    }, {
        entry_number: 187,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/187/",
            name: "hoppip"
        }
    }, {
        entry_number: 188,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/188/",
            name: "skiploom"
        }
    }, {
        entry_number: 189,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/189/",
            name: "jumpluff"
        }
    }, {
        entry_number: 190,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/190/",
            name: "aipom"
        }
    }, {
        entry_number: 191,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/191/",
            name: "sunkern"
        }
    }, {
        entry_number: 192,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/192/",
            name: "sunflora"
        }
    }, {
        entry_number: 193,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/193/",
            name: "yanma"
        }
    }, {
        entry_number: 194,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/194/",
            name: "wooper"
        }
    }, {
        entry_number: 195,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/195/",
            name: "quagsire"
        }
    }, {
        entry_number: 196,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/196/",
            name: "espeon"
        }
    }, {
        entry_number: 197,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/197/",
            name: "umbreon"
        }
    }, {
        entry_number: 198,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/198/",
            name: "murkrow"
        }
    }, {
        entry_number: 199,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/199/",
            name: "slowking"
        }
    }, {
        entry_number: 200,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/200/",
            name: "misdreavus"
        }
    }, {
        entry_number: 201,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/201/",
            name: "unown"
        }
    }, {
        entry_number: 202,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/202/",
            name: "wobbuffet"
        }
    }, {
        entry_number: 203,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/203/",
            name: "girafarig"
        }
    }, {
        entry_number: 204,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/204/",
            name: "pineco"
        }
    }, {
        entry_number: 205,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/205/",
            name: "forretress"
        }
    }, {
        entry_number: 206,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/206/",
            name: "dunsparce"
        }
    }, {
        entry_number: 207,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/207/",
            name: "gligar"
        }
    }, {
        entry_number: 208,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/208/",
            name: "steelix"
        }
    }, {
        entry_number: 209,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/209/",
            name: "snubbull"
        }
    }, {
        entry_number: 210,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/210/",
            name: "granbull"
        }
    }, {
        entry_number: 211,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/211/",
            name: "qwilfish"
        }
    }, {
        entry_number: 212,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/212/",
            name: "scizor"
        }
    }, {
        entry_number: 213,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/213/",
            name: "shuckle"
        }
    }, {
        entry_number: 214,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/214/",
            name: "heracross"
        }
    }, {
        entry_number: 215,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/215/",
            name: "sneasel"
        }
    }, {
        entry_number: 216,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/216/",
            name: "teddiursa"
        }
    }, {
        entry_number: 217,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/217/",
            name: "ursaring"
        }
    }, {
        entry_number: 218,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/218/",
            name: "slugma"
        }
    }, {
        entry_number: 219,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/219/",
            name: "magcargo"
        }
    }, {
        entry_number: 220,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/220/",
            name: "swinub"
        }
    }, {
        entry_number: 221,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/221/",
            name: "piloswine"
        }
    }, {
        entry_number: 222,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/222/",
            name: "corsola"
        }
    }, {
        entry_number: 223,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/223/",
            name: "remoraid"
        }
    }, {
        entry_number: 224,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/224/",
            name: "octillery"
        }
    }, {
        entry_number: 225,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/225/",
            name: "delibird"
        }
    }, {
        entry_number: 226,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/226/",
            name: "mantine"
        }
    }, {
        entry_number: 227,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/227/",
            name: "skarmory"
        }
    }, {
        entry_number: 228,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/228/",
            name: "houndour"
        }
    }, {
        entry_number: 229,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/229/",
            name: "houndoom"
        }
    }, {
        entry_number: 230,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/230/",
            name: "kingdra"
        }
    }, {
        entry_number: 231,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/231/",
            name: "phanpy"
        }
    }, {
        entry_number: 232,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/232/",
            name: "donphan"
        }
    }, {
        entry_number: 233,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/233/",
            name: "porygon2"
        }
    }, {
        entry_number: 234,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/234/",
            name: "stantler"
        }
    }, {
        entry_number: 235,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/235/",
            name: "smeargle"
        }
    }, {
        entry_number: 236,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/236/",
            name: "tyrogue"
        }
    }, {
        entry_number: 237,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/237/",
            name: "hitmontop"
        }
    }, {
        entry_number: 238,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/238/",
            name: "smoochum"
        }
    }, {
        entry_number: 239,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/239/",
            name: "elekid"
        }
    }, {
        entry_number: 240,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/240/",
            name: "magby"
        }
    }, {
        entry_number: 241,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/241/",
            name: "miltank"
        }
    }, {
        entry_number: 242,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/242/",
            name: "blissey"
        }
    }, {
        entry_number: 243,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/243/",
            name: "raikou"
        }
    }, {
        entry_number: 244,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/244/",
            name: "entei"
        }
    }, {
        entry_number: 245,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/245/",
            name: "suicune"
        }
    }, {
        entry_number: 246,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/246/",
            name: "larvitar"
        }
    }, {
        entry_number: 247,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/247/",
            name: "pupitar"
        }
    }, {
        entry_number: 248,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/248/",
            name: "tyranitar"
        }
    }, {
        entry_number: 249,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/249/",
            name: "lugia"
        }
    }, {
        entry_number: 250,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/250/",
            name: "ho-oh"
        }
    }, {
        entry_number: 251,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/251/",
            name: "celebi"
        }
    }, {
        entry_number: 252,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/252/",
            name: "treecko"
        }
    }, {
        entry_number: 253,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/253/",
            name: "grovyle"
        }
    }, {
        entry_number: 254,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/254/",
            name: "sceptile"
        }
    }, {
        entry_number: 255,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/255/",
            name: "torchic"
        }
    }, {
        entry_number: 256,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/256/",
            name: "combusken"
        }
    }, {
        entry_number: 257,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/257/",
            name: "blaziken"
        }
    }, {
        entry_number: 258,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/258/",
            name: "mudkip"
        }
    }, {
        entry_number: 259,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/259/",
            name: "marshtomp"
        }
    }, {
        entry_number: 260,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/260/",
            name: "swampert"
        }
    }, {
        entry_number: 261,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/261/",
            name: "poochyena"
        }
    }, {
        entry_number: 262,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/262/",
            name: "mightyena"
        }
    }, {
        entry_number: 263,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/263/",
            name: "zigzagoon"
        }
    }, {
        entry_number: 264,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/264/",
            name: "linoone"
        }
    }, {
        entry_number: 265,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/265/",
            name: "wurmple"
        }
    }, {
        entry_number: 266,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/266/",
            name: "silcoon"
        }
    }, {
        entry_number: 267,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/267/",
            name: "beautifly"
        }
    }, {
        entry_number: 268,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/268/",
            name: "cascoon"
        }
    }, {
        entry_number: 269,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/269/",
            name: "dustox"
        }
    }, {
        entry_number: 270,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/270/",
            name: "lotad"
        }
    }, {
        entry_number: 271,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/271/",
            name: "lombre"
        }
    }, {
        entry_number: 272,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/272/",
            name: "ludicolo"
        }
    }, {
        entry_number: 273,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/273/",
            name: "seedot"
        }
    }, {
        entry_number: 274,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/274/",
            name: "nuzleaf"
        }
    }, {
        entry_number: 275,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/275/",
            name: "shiftry"
        }
    }, {
        entry_number: 276,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/276/",
            name: "taillow"
        }
    }, {
        entry_number: 277,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/277/",
            name: "swellow"
        }
    }, {
        entry_number: 278,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/278/",
            name: "wingull"
        }
    }, {
        entry_number: 279,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/279/",
            name: "pelipper"
        }
    }, {
        entry_number: 280,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/280/",
            name: "ralts"
        }
    }, {
        entry_number: 281,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/281/",
            name: "kirlia"
        }
    }, {
        entry_number: 282,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/282/",
            name: "gardevoir"
        }
    }, {
        entry_number: 283,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/283/",
            name: "surskit"
        }
    }, {
        entry_number: 284,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/284/",
            name: "masquerain"
        }
    }, {
        entry_number: 285,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/285/",
            name: "shroomish"
        }
    }, {
        entry_number: 286,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/286/",
            name: "breloom"
        }
    }, {
        entry_number: 287,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/287/",
            name: "slakoth"
        }
    }, {
        entry_number: 288,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/288/",
            name: "vigoroth"
        }
    }, {
        entry_number: 289,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/289/",
            name: "slaking"
        }
    }, {
        entry_number: 290,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/290/",
            name: "nincada"
        }
    }, {
        entry_number: 291,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/291/",
            name: "ninjask"
        }
    }, {
        entry_number: 292,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/292/",
            name: "shedinja"
        }
    }, {
        entry_number: 293,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/293/",
            name: "whismur"
        }
    }, {
        entry_number: 294,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/294/",
            name: "loudred"
        }
    }, {
        entry_number: 295,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/295/",
            name: "exploud"
        }
    }, {
        entry_number: 296,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/296/",
            name: "makuhita"
        }
    }, {
        entry_number: 297,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/297/",
            name: "hariyama"
        }
    }, {
        entry_number: 298,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/298/",
            name: "azurill"
        }
    }, {
        entry_number: 299,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/299/",
            name: "nosepass"
        }
    }, {
        entry_number: 300,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/300/",
            name: "skitty"
        }
    }, {
        entry_number: 301,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/301/",
            name: "delcatty"
        }
    }, {
        entry_number: 302,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/302/",
            name: "sableye"
        }
    }, {
        entry_number: 303,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/303/",
            name: "mawile"
        }
    }, {
        entry_number: 304,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/304/",
            name: "aron"
        }
    }, {
        entry_number: 305,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/305/",
            name: "lairon"
        }
    }, {
        entry_number: 306,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/306/",
            name: "aggron"
        }
    }, {
        entry_number: 307,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/307/",
            name: "meditite"
        }
    }, {
        entry_number: 308,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/308/",
            name: "medicham"
        }
    }, {
        entry_number: 309,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/309/",
            name: "electrike"
        }
    }, {
        entry_number: 310,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/310/",
            name: "manectric"
        }
    }, {
        entry_number: 311,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/311/",
            name: "plusle"
        }
    }, {
        entry_number: 312,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/312/",
            name: "minun"
        }
    }, {
        entry_number: 313,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/313/",
            name: "volbeat"
        }
    }, {
        entry_number: 314,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/314/",
            name: "illumise"
        }
    }, {
        entry_number: 315,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/315/",
            name: "roselia"
        }
    }, {
        entry_number: 316,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/316/",
            name: "gulpin"
        }
    }, {
        entry_number: 317,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/317/",
            name: "swalot"
        }
    }, {
        entry_number: 318,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/318/",
            name: "carvanha"
        }
    }, {
        entry_number: 319,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/319/",
            name: "sharpedo"
        }
    }, {
        entry_number: 320,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/320/",
            name: "wailmer"
        }
    }, {
        entry_number: 321,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/321/",
            name: "wailord"
        }
    }, {
        entry_number: 322,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/322/",
            name: "numel"
        }
    }, {
        entry_number: 323,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/323/",
            name: "camerupt"
        }
    }, {
        entry_number: 324,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/324/",
            name: "torkoal"
        }
    }, {
        entry_number: 325,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/325/",
            name: "spoink"
        }
    }, {
        entry_number: 326,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/326/",
            name: "grumpig"
        }
    }, {
        entry_number: 327,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/327/",
            name: "spinda"
        }
    }, {
        entry_number: 328,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/328/",
            name: "trapinch"
        }
    }, {
        entry_number: 329,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/329/",
            name: "vibrava"
        }
    }, {
        entry_number: 330,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/330/",
            name: "flygon"
        }
    }, {
        entry_number: 331,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/331/",
            name: "cacnea"
        }
    }, {
        entry_number: 332,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/332/",
            name: "cacturne"
        }
    }, {
        entry_number: 333,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/333/",
            name: "swablu"
        }
    }, {
        entry_number: 334,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/334/",
            name: "altaria"
        }
    }, {
        entry_number: 335,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/335/",
            name: "zangoose"
        }
    }, {
        entry_number: 336,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/336/",
            name: "seviper"
        }
    }, {
        entry_number: 337,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/337/",
            name: "lunatone"
        }
    }, {
        entry_number: 338,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/338/",
            name: "solrock"
        }
    }, {
        entry_number: 339,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/339/",
            name: "barboach"
        }
    }, {
        entry_number: 340,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/340/",
            name: "whiscash"
        }
    }, {
        entry_number: 341,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/341/",
            name: "corphish"
        }
    }, {
        entry_number: 342,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/342/",
            name: "crawdaunt"
        }
    }, {
        entry_number: 343,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/343/",
            name: "baltoy"
        }
    }, {
        entry_number: 344,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/344/",
            name: "claydol"
        }
    }, {
        entry_number: 345,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/345/",
            name: "lileep"
        }
    }, {
        entry_number: 346,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/346/",
            name: "cradily"
        }
    }, {
        entry_number: 347,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/347/",
            name: "anorith"
        }
    }, {
        entry_number: 348,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/348/",
            name: "armaldo"
        }
    }, {
        entry_number: 349,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/349/",
            name: "feebas"
        }
    }, {
        entry_number: 350,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/350/",
            name: "milotic"
        }
    }, {
        entry_number: 351,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/351/",
            name: "castform"
        }
    }, {
        entry_number: 352,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/352/",
            name: "kecleon"
        }
    }, {
        entry_number: 353,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/353/",
            name: "shuppet"
        }
    }, {
        entry_number: 354,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/354/",
            name: "banette"
        }
    }, {
        entry_number: 355,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/355/",
            name: "duskull"
        }
    }, {
        entry_number: 356,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/356/",
            name: "dusclops"
        }
    }, {
        entry_number: 357,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/357/",
            name: "tropius"
        }
    }, {
        entry_number: 358,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/358/",
            name: "chimecho"
        }
    }, {
        entry_number: 359,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/359/",
            name: "absol"
        }
    }, {
        entry_number: 360,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/360/",
            name: "wynaut"
        }
    }, {
        entry_number: 361,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/361/",
            name: "snorunt"
        }
    }, {
        entry_number: 362,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/362/",
            name: "glalie"
        }
    }, {
        entry_number: 363,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/363/",
            name: "spheal"
        }
    }, {
        entry_number: 364,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/364/",
            name: "sealeo"
        }
    }, {
        entry_number: 365,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/365/",
            name: "walrein"
        }
    }, {
        entry_number: 366,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/366/",
            name: "clamperl"
        }
    }, {
        entry_number: 367,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/367/",
            name: "huntail"
        }
    }, {
        entry_number: 368,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/368/",
            name: "gorebyss"
        }
    }, {
        entry_number: 369,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/369/",
            name: "relicanth"
        }
    }, {
        entry_number: 370,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/370/",
            name: "luvdisc"
        }
    }, {
        entry_number: 371,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/371/",
            name: "bagon"
        }
    }, {
        entry_number: 372,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/372/",
            name: "shelgon"
        }
    }, {
        entry_number: 373,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/373/",
            name: "salamence"
        }
    }, {
        entry_number: 374,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/374/",
            name: "beldum"
        }
    }, {
        entry_number: 375,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/375/",
            name: "metang"
        }
    }, {
        entry_number: 376,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/376/",
            name: "metagross"
        }
    }, {
        entry_number: 377,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/377/",
            name: "regirock"
        }
    }, {
        entry_number: 378,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/378/",
            name: "regice"
        }
    }, {
        entry_number: 379,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/379/",
            name: "registeel"
        }
    }, {
        entry_number: 380,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/380/",
            name: "latias"
        }
    }, {
        entry_number: 381,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/381/",
            name: "latios"
        }
    }, {
        entry_number: 382,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/382/",
            name: "kyogre"
        }
    }, {
        entry_number: 383,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/383/",
            name: "groudon"
        }
    }, {
        entry_number: 384,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/384/",
            name: "rayquaza"
        }
    }, {
        entry_number: 385,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/385/",
            name: "jirachi"
        }
    }, {
        entry_number: 386,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/386/",
            name: "deoxys"
        }
    }, {
        entry_number: 387,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/387/",
            name: "turtwig"
        }
    }, {
        entry_number: 388,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/388/",
            name: "grotle"
        }
    }, {
        entry_number: 389,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/389/",
            name: "torterra"
        }
    }, {
        entry_number: 390,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/390/",
            name: "chimchar"
        }
    }, {
        entry_number: 391,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/391/",
            name: "monferno"
        }
    }, {
        entry_number: 392,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/392/",
            name: "infernape"
        }
    }, {
        entry_number: 393,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/393/",
            name: "piplup"
        }
    }, {
        entry_number: 394,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/394/",
            name: "prinplup"
        }
    }, {
        entry_number: 395,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/395/",
            name: "empoleon"
        }
    }, {
        entry_number: 396,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/396/",
            name: "starly"
        }
    }, {
        entry_number: 397,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/397/",
            name: "staravia"
        }
    }, {
        entry_number: 398,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/398/",
            name: "staraptor"
        }
    }, {
        entry_number: 399,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/399/",
            name: "bidoof"
        }
    }, {
        entry_number: 400,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/400/",
            name: "bibarel"
        }
    }, {
        entry_number: 401,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/401/",
            name: "kricketot"
        }
    }, {
        entry_number: 402,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/402/",
            name: "kricketune"
        }
    }, {
        entry_number: 403,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/403/",
            name: "shinx"
        }
    }, {
        entry_number: 404,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/404/",
            name: "luxio"
        }
    }, {
        entry_number: 405,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/405/",
            name: "luxray"
        }
    }, {
        entry_number: 406,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/406/",
            name: "budew"
        }
    }, {
        entry_number: 407,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/407/",
            name: "roserade"
        }
    }, {
        entry_number: 408,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/408/",
            name: "cranidos"
        }
    }, {
        entry_number: 409,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/409/",
            name: "rampardos"
        }
    }, {
        entry_number: 410,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/410/",
            name: "shieldon"
        }
    }, {
        entry_number: 411,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/411/",
            name: "bastiodon"
        }
    }, {
        entry_number: 412,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/412/",
            name: "burmy"
        }
    }, {
        entry_number: 413,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/413/",
            name: "wormadam"
        }
    }, {
        entry_number: 414,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/414/",
            name: "mothim"
        }
    }, {
        entry_number: 415,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/415/",
            name: "combee"
        }
    }, {
        entry_number: 416,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/416/",
            name: "vespiquen"
        }
    }, {
        entry_number: 417,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/417/",
            name: "pachirisu"
        }
    }, {
        entry_number: 418,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/418/",
            name: "buizel"
        }
    }, {
        entry_number: 419,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/419/",
            name: "floatzel"
        }
    }, {
        entry_number: 420,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/420/",
            name: "cherubi"
        }
    }, {
        entry_number: 421,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/421/",
            name: "cherrim"
        }
    }, {
        entry_number: 422,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/422/",
            name: "shellos"
        }
    }, {
        entry_number: 423,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/423/",
            name: "gastrodon"
        }
    }, {
        entry_number: 424,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/424/",
            name: "ambipom"
        }
    }, {
        entry_number: 425,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/425/",
            name: "drifloon"
        }
    }, {
        entry_number: 426,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/426/",
            name: "drifblim"
        }
    }, {
        entry_number: 427,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/427/",
            name: "buneary"
        }
    }, {
        entry_number: 428,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/428/",
            name: "lopunny"
        }
    }, {
        entry_number: 429,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/429/",
            name: "mismagius"
        }
    }, {
        entry_number: 430,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/430/",
            name: "honchkrow"
        }
    }, {
        entry_number: 431,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/431/",
            name: "glameow"
        }
    }, {
        entry_number: 432,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/432/",
            name: "purugly"
        }
    }, {
        entry_number: 433,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/433/",
            name: "chingling"
        }
    }, {
        entry_number: 434,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/434/",
            name: "stunky"
        }
    }, {
        entry_number: 435,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/435/",
            name: "skuntank"
        }
    }, {
        entry_number: 436,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/436/",
            name: "bronzor"
        }
    }, {
        entry_number: 437,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/437/",
            name: "bronzong"
        }
    }, {
        entry_number: 438,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/438/",
            name: "bonsly"
        }
    }, {
        entry_number: 439,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/439/",
            name: "mime-jr"
        }
    }, {
        entry_number: 440,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/440/",
            name: "happiny"
        }
    }, {
        entry_number: 441,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/441/",
            name: "chatot"
        }
    }, {
        entry_number: 442,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/442/",
            name: "spiritomb"
        }
    }, {
        entry_number: 443,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/443/",
            name: "gible"
        }
    }, {
        entry_number: 444,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/444/",
            name: "gabite"
        }
    }, {
        entry_number: 445,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/445/",
            name: "garchomp"
        }
    }, {
        entry_number: 446,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/446/",
            name: "munchlax"
        }
    }, {
        entry_number: 447,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/447/",
            name: "riolu"
        }
    }, {
        entry_number: 448,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/448/",
            name: "lucario"
        }
    }, {
        entry_number: 449,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/449/",
            name: "hippopotas"
        }
    }, {
        entry_number: 450,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/450/",
            name: "hippowdon"
        }
    }, {
        entry_number: 451,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/451/",
            name: "skorupi"
        }
    }, {
        entry_number: 452,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/452/",
            name: "drapion"
        }
    }, {
        entry_number: 453,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/453/",
            name: "croagunk"
        }
    }, {
        entry_number: 454,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/454/",
            name: "toxicroak"
        }
    }, {
        entry_number: 455,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/455/",
            name: "carnivine"
        }
    }, {
        entry_number: 456,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/456/",
            name: "finneon"
        }
    }, {
        entry_number: 457,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/457/",
            name: "lumineon"
        }
    }, {
        entry_number: 458,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/458/",
            name: "mantyke"
        }
    }, {
        entry_number: 459,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/459/",
            name: "snover"
        }
    }, {
        entry_number: 460,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/460/",
            name: "abomasnow"
        }
    }, {
        entry_number: 461,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/461/",
            name: "weavile"
        }
    }, {
        entry_number: 462,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/462/",
            name: "magnezone"
        }
    }, {
        entry_number: 463,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/463/",
            name: "lickilicky"
        }
    }, {
        entry_number: 464,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/464/",
            name: "rhyperior"
        }
    }, {
        entry_number: 465,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/465/",
            name: "tangrowth"
        }
    }, {
        entry_number: 466,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/466/",
            name: "electivire"
        }
    }, {
        entry_number: 467,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/467/",
            name: "magmortar"
        }
    }, {
        entry_number: 468,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/468/",
            name: "togekiss"
        }
    }, {
        entry_number: 469,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/469/",
            name: "yanmega"
        }
    }, {
        entry_number: 470,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/470/",
            name: "leafeon"
        }
    }, {
        entry_number: 471,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/471/",
            name: "glaceon"
        }
    }, {
        entry_number: 472,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/472/",
            name: "gliscor"
        }
    }, {
        entry_number: 473,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/473/",
            name: "mamoswine"
        }
    }, {
        entry_number: 474,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/474/",
            name: "porygon-z"
        }
    }, {
        entry_number: 475,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/475/",
            name: "gallade"
        }
    }, {
        entry_number: 476,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/476/",
            name: "probopass"
        }
    }, {
        entry_number: 477,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/477/",
            name: "dusknoir"
        }
    }, {
        entry_number: 478,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/478/",
            name: "froslass"
        }
    }, {
        entry_number: 479,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/479/",
            name: "rotom"
        }
    }, {
        entry_number: 480,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/480/",
            name: "uxie"
        }
    }, {
        entry_number: 481,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/481/",
            name: "mesprit"
        }
    }, {
        entry_number: 482,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/482/",
            name: "azelf"
        }
    }, {
        entry_number: 483,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/483/",
            name: "dialga"
        }
    }, {
        entry_number: 484,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/484/",
            name: "palkia"
        }
    }, {
        entry_number: 485,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/485/",
            name: "heatran"
        }
    }, {
        entry_number: 486,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/486/",
            name: "regigigas"
        }
    }, {
        entry_number: 487,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/487/",
            name: "giratina"
        }
    }, {
        entry_number: 488,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/488/",
            name: "cresselia"
        }
    }, {
        entry_number: 489,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/489/",
            name: "phione"
        }
    }, {
        entry_number: 490,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/490/",
            name: "manaphy"
        }
    }, {
        entry_number: 491,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/491/",
            name: "darkrai"
        }
    }, {
        entry_number: 492,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/492/",
            name: "shaymin"
        }
    }, {
        entry_number: 493,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/493/",
            name: "arceus"
        }
    }, {
        entry_number: 494,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/494/",
            name: "victini"
        }
    }, {
        entry_number: 495,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/495/",
            name: "snivy"
        }
    }, {
        entry_number: 496,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/496/",
            name: "servine"
        }
    }, {
        entry_number: 497,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/497/",
            name: "serperior"
        }
    }, {
        entry_number: 498,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/498/",
            name: "tepig"
        }
    }, {
        entry_number: 499,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/499/",
            name: "pignite"
        }
    }, {
        entry_number: 500,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/500/",
            name: "emboar"
        }
    }, {
        entry_number: 501,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/501/",
            name: "oshawott"
        }
    }, {
        entry_number: 502,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/502/",
            name: "dewott"
        }
    }, {
        entry_number: 503,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/503/",
            name: "samurott"
        }
    }, {
        entry_number: 504,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/504/",
            name: "patrat"
        }
    }, {
        entry_number: 505,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/505/",
            name: "watchog"
        }
    }, {
        entry_number: 506,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/506/",
            name: "lillipup"
        }
    }, {
        entry_number: 507,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/507/",
            name: "herdier"
        }
    }, {
        entry_number: 508,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/508/",
            name: "stoutland"
        }
    }, {
        entry_number: 509,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/509/",
            name: "purrloin"
        }
    }, {
        entry_number: 510,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/510/",
            name: "liepard"
        }
    }, {
        entry_number: 511,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/511/",
            name: "pansage"
        }
    }, {
        entry_number: 512,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/512/",
            name: "simisage"
        }
    }, {
        entry_number: 513,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/513/",
            name: "pansear"
        }
    }, {
        entry_number: 514,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/514/",
            name: "simisear"
        }
    }, {
        entry_number: 515,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/515/",
            name: "panpour"
        }
    }, {
        entry_number: 516,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/516/",
            name: "simipour"
        }
    }, {
        entry_number: 517,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/517/",
            name: "munna"
        }
    }, {
        entry_number: 518,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/518/",
            name: "musharna"
        }
    }, {
        entry_number: 519,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/519/",
            name: "pidove"
        }
    }, {
        entry_number: 520,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/520/",
            name: "tranquill"
        }
    }, {
        entry_number: 521,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/521/",
            name: "unfezant"
        }
    }, {
        entry_number: 522,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/522/",
            name: "blitzle"
        }
    }, {
        entry_number: 523,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/523/",
            name: "zebstrika"
        }
    }, {
        entry_number: 524,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/524/",
            name: "roggenrola"
        }
    }, {
        entry_number: 525,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/525/",
            name: "boldore"
        }
    }, {
        entry_number: 526,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/526/",
            name: "gigalith"
        }
    }, {
        entry_number: 527,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/527/",
            name: "woobat"
        }
    }, {
        entry_number: 528,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/528/",
            name: "swoobat"
        }
    }, {
        entry_number: 529,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/529/",
            name: "drilbur"
        }
    }, {
        entry_number: 530,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/530/",
            name: "excadrill"
        }
    }, {
        entry_number: 531,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/531/",
            name: "audino"
        }
    }, {
        entry_number: 532,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/532/",
            name: "timburr"
        }
    }, {
        entry_number: 533,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/533/",
            name: "gurdurr"
        }
    }, {
        entry_number: 534,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/534/",
            name: "conkeldurr"
        }
    }, {
        entry_number: 535,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/535/",
            name: "tympole"
        }
    }, {
        entry_number: 536,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/536/",
            name: "palpitoad"
        }
    }, {
        entry_number: 537,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/537/",
            name: "seismitoad"
        }
    }, {
        entry_number: 538,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/538/",
            name: "throh"
        }
    }, {
        entry_number: 539,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/539/",
            name: "sawk"
        }
    }, {
        entry_number: 540,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/540/",
            name: "sewaddle"
        }
    }, {
        entry_number: 541,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/541/",
            name: "swadloon"
        }
    }, {
        entry_number: 542,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/542/",
            name: "leavanny"
        }
    }, {
        entry_number: 543,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/543/",
            name: "venipede"
        }
    }, {
        entry_number: 544,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/544/",
            name: "whirlipede"
        }
    }, {
        entry_number: 545,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/545/",
            name: "scolipede"
        }
    }, {
        entry_number: 546,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/546/",
            name: "cottonee"
        }
    }, {
        entry_number: 547,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/547/",
            name: "whimsicott"
        }
    }, {
        entry_number: 548,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/548/",
            name: "petilil"
        }
    }, {
        entry_number: 549,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/549/",
            name: "lilligant"
        }
    }, {
        entry_number: 550,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/550/",
            name: "basculin"
        }
    }, {
        entry_number: 551,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/551/",
            name: "sandile"
        }
    }, {
        entry_number: 552,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/552/",
            name: "krokorok"
        }
    }, {
        entry_number: 553,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/553/",
            name: "krookodile"
        }
    }, {
        entry_number: 554,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/554/",
            name: "darumaka"
        }
    }, {
        entry_number: 555,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/555/",
            name: "darmanitan"
        }
    }, {
        entry_number: 556,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/556/",
            name: "maractus"
        }
    }, {
        entry_number: 557,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/557/",
            name: "dwebble"
        }
    }, {
        entry_number: 558,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/558/",
            name: "crustle"
        }
    }, {
        entry_number: 559,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/559/",
            name: "scraggy"
        }
    }, {
        entry_number: 560,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/560/",
            name: "scrafty"
        }
    }, {
        entry_number: 561,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/561/",
            name: "sigilyph"
        }
    }, {
        entry_number: 562,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/562/",
            name: "yamask"
        }
    }, {
        entry_number: 563,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/563/",
            name: "cofagrigus"
        }
    }, {
        entry_number: 564,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/564/",
            name: "tirtouga"
        }
    }, {
        entry_number: 565,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/565/",
            name: "carracosta"
        }
    }, {
        entry_number: 566,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/566/",
            name: "archen"
        }
    }, {
        entry_number: 567,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/567/",
            name: "archeops"
        }
    }, {
        entry_number: 568,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/568/",
            name: "trubbish"
        }
    }, {
        entry_number: 569,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/569/",
            name: "garbodor"
        }
    }, {
        entry_number: 570,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/570/",
            name: "zorua"
        }
    }, {
        entry_number: 571,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/571/",
            name: "zoroark"
        }
    }, {
        entry_number: 572,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/572/",
            name: "minccino"
        }
    }, {
        entry_number: 573,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/573/",
            name: "cinccino"
        }
    }, {
        entry_number: 574,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/574/",
            name: "gothita"
        }
    }, {
        entry_number: 575,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/575/",
            name: "gothorita"
        }
    }, {
        entry_number: 576,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/576/",
            name: "gothitelle"
        }
    }, {
        entry_number: 577,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/577/",
            name: "solosis"
        }
    }, {
        entry_number: 578,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/578/",
            name: "duosion"
        }
    }, {
        entry_number: 579,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/579/",
            name: "reuniclus"
        }
    }, {
        entry_number: 580,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/580/",
            name: "ducklett"
        }
    }, {
        entry_number: 581,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/581/",
            name: "swanna"
        }
    }, {
        entry_number: 582,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/582/",
            name: "vanillite"
        }
    }, {
        entry_number: 583,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/583/",
            name: "vanillish"
        }
    }, {
        entry_number: 584,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/584/",
            name: "vanilluxe"
        }
    }, {
        entry_number: 585,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/585/",
            name: "deerling"
        }
    }, {
        entry_number: 586,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/586/",
            name: "sawsbuck"
        }
    }, {
        entry_number: 587,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/587/",
            name: "emolga"
        }
    }, {
        entry_number: 588,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/588/",
            name: "karrablast"
        }
    }, {
        entry_number: 589,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/589/",
            name: "escavalier"
        }
    }, {
        entry_number: 590,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/590/",
            name: "foongus"
        }
    }, {
        entry_number: 591,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/591/",
            name: "amoonguss"
        }
    }, {
        entry_number: 592,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/592/",
            name: "frillish"
        }
    }, {
        entry_number: 593,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/593/",
            name: "jellicent"
        }
    }, {
        entry_number: 594,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/594/",
            name: "alomomola"
        }
    }, {
        entry_number: 595,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/595/",
            name: "joltik"
        }
    }, {
        entry_number: 596,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/596/",
            name: "galvantula"
        }
    }, {
        entry_number: 597,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/597/",
            name: "ferroseed"
        }
    }, {
        entry_number: 598,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/598/",
            name: "ferrothorn"
        }
    }, {
        entry_number: 599,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/599/",
            name: "klink"
        }
    }, {
        entry_number: 600,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/600/",
            name: "klang"
        }
    }, {
        entry_number: 601,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/601/",
            name: "klinklang"
        }
    }, {
        entry_number: 602,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/602/",
            name: "tynamo"
        }
    }, {
        entry_number: 603,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/603/",
            name: "eelektrik"
        }
    }, {
        entry_number: 604,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/604/",
            name: "eelektross"
        }
    }, {
        entry_number: 605,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/605/",
            name: "elgyem"
        }
    }, {
        entry_number: 606,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/606/",
            name: "beheeyem"
        }
    }, {
        entry_number: 607,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/607/",
            name: "litwick"
        }
    }, {
        entry_number: 608,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/608/",
            name: "lampent"
        }
    }, {
        entry_number: 609,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/609/",
            name: "chandelure"
        }
    }, {
        entry_number: 610,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/610/",
            name: "axew"
        }
    }, {
        entry_number: 611,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/611/",
            name: "fraxure"
        }
    }, {
        entry_number: 612,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/612/",
            name: "haxorus"
        }
    }, {
        entry_number: 613,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/613/",
            name: "cubchoo"
        }
    }, {
        entry_number: 614,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/614/",
            name: "beartic"
        }
    }, {
        entry_number: 615,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/615/",
            name: "cryogonal"
        }
    }, {
        entry_number: 616,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/616/",
            name: "shelmet"
        }
    }, {
        entry_number: 617,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/617/",
            name: "accelgor"
        }
    }, {
        entry_number: 618,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/618/",
            name: "stunfisk"
        }
    }, {
        entry_number: 619,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/619/",
            name: "mienfoo"
        }
    }, {
        entry_number: 620,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/620/",
            name: "mienshao"
        }
    }, {
        entry_number: 621,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/621/",
            name: "druddigon"
        }
    }, {
        entry_number: 622,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/622/",
            name: "golett"
        }
    }, {
        entry_number: 623,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/623/",
            name: "golurk"
        }
    }, {
        entry_number: 624,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/624/",
            name: "pawniard"
        }
    }, {
        entry_number: 625,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/625/",
            name: "bisharp"
        }
    }, {
        entry_number: 626,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/626/",
            name: "bouffalant"
        }
    }, {
        entry_number: 627,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/627/",
            name: "rufflet"
        }
    }, {
        entry_number: 628,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/628/",
            name: "braviary"
        }
    }, {
        entry_number: 629,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/629/",
            name: "vullaby"
        }
    }, {
        entry_number: 630,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/630/",
            name: "mandibuzz"
        }
    }, {
        entry_number: 631,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/631/",
            name: "heatmor"
        }
    }, {
        entry_number: 632,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/632/",
            name: "durant"
        }
    }, {
        entry_number: 633,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/633/",
            name: "deino"
        }
    }, {
        entry_number: 634,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/634/",
            name: "zweilous"
        }
    }, {
        entry_number: 635,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/635/",
            name: "hydreigon"
        }
    }, {
        entry_number: 636,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/636/",
            name: "larvesta"
        }
    }, {
        entry_number: 637,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/637/",
            name: "volcarona"
        }
    }, {
        entry_number: 638,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/638/",
            name: "cobalion"
        }
    }, {
        entry_number: 639,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/639/",
            name: "terrakion"
        }
    }, {
        entry_number: 640,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/640/",
            name: "virizion"
        }
    }, {
        entry_number: 641,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/641/",
            name: "tornadus"
        }
    }, {
        entry_number: 642,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/642/",
            name: "thundurus"
        }
    }, {
        entry_number: 643,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/643/",
            name: "reshiram"
        }
    }, {
        entry_number: 644,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/644/",
            name: "zekrom"
        }
    }, {
        entry_number: 645,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/645/",
            name: "landorus"
        }
    }, {
        entry_number: 646,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/646/",
            name: "kyurem"
        }
    }, {
        entry_number: 647,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/647/",
            name: "keldeo"
        }
    }, {
        entry_number: 648,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/648/",
            name: "meloetta"
        }
    }, {
        entry_number: 649,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/649/",
            name: "genesect"
        }
    }, {
        entry_number: 650,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/650/",
            name: "chespin"
        }
    }, {
        entry_number: 651,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/651/",
            name: "quilladin"
        }
    }, {
        entry_number: 652,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/652/",
            name: "chesnaught"
        }
    }, {
        entry_number: 653,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/653/",
            name: "fennekin"
        }
    }, {
        entry_number: 654,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/654/",
            name: "braixen"
        }
    }, {
        entry_number: 655,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/655/",
            name: "delphox"
        }
    }, {
        entry_number: 656,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/656/",
            name: "froakie"
        }
    }, {
        entry_number: 657,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/657/",
            name: "frogadier"
        }
    }, {
        entry_number: 658,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/658/",
            name: "greninja"
        }
    }, {
        entry_number: 659,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/659/",
            name: "bunnelby"
        }
    }, {
        entry_number: 660,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/660/",
            name: "diggersby"
        }
    }, {
        entry_number: 661,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/661/",
            name: "fletchling"
        }
    }, {
        entry_number: 662,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/662/",
            name: "fletchinder"
        }
    }, {
        entry_number: 663,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/663/",
            name: "talonflame"
        }
    }, {
        entry_number: 664,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/664/",
            name: "scatterbug"
        }
    }, {
        entry_number: 665,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/665/",
            name: "spewpa"
        }
    }, {
        entry_number: 666,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/666/",
            name: "vivillon"
        }
    }, {
        entry_number: 667,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/667/",
            name: "litleo"
        }
    }, {
        entry_number: 668,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/668/",
            name: "pyroar"
        }
    }, {
        entry_number: 669,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/669/",
            name: "flabebe"
        }
    }, {
        entry_number: 670,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/670/",
            name: "floette"
        }
    }, {
        entry_number: 671,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/671/",
            name: "florges"
        }
    }, {
        entry_number: 672,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/672/",
            name: "skiddo"
        }
    }, {
        entry_number: 673,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/673/",
            name: "gogoat"
        }
    }, {
        entry_number: 674,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/674/",
            name: "pancham"
        }
    }, {
        entry_number: 675,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/675/",
            name: "pangoro"
        }
    }, {
        entry_number: 676,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/676/",
            name: "furfrou"
        }
    }, {
        entry_number: 677,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/677/",
            name: "espurr"
        }
    }, {
        entry_number: 678,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/678/",
            name: "meowstic"
        }
    }, {
        entry_number: 679,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/679/",
            name: "honedge"
        }
    }, {
        entry_number: 680,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/680/",
            name: "doublade"
        }
    }, {
        entry_number: 681,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/681/",
            name: "aegislash"
        }
    }, {
        entry_number: 682,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/682/",
            name: "spritzee"
        }
    }, {
        entry_number: 683,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/683/",
            name: "aromatisse"
        }
    }, {
        entry_number: 684,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/684/",
            name: "swirlix"
        }
    }, {
        entry_number: 685,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/685/",
            name: "slurpuff"
        }
    }, {
        entry_number: 686,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/686/",
            name: "inkay"
        }
    }, {
        entry_number: 687,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/687/",
            name: "malamar"
        }
    }, {
        entry_number: 688,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/688/",
            name: "binacle"
        }
    }, {
        entry_number: 689,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/689/",
            name: "barbaracle"
        }
    }, {
        entry_number: 690,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/690/",
            name: "skrelp"
        }
    }, {
        entry_number: 691,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/691/",
            name: "dragalge"
        }
    }, {
        entry_number: 692,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/692/",
            name: "clauncher"
        }
    }, {
        entry_number: 693,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/693/",
            name: "clawitzer"
        }
    }, {
        entry_number: 694,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/694/",
            name: "helioptile"
        }
    }, {
        entry_number: 695,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/695/",
            name: "heliolisk"
        }
    }, {
        entry_number: 696,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/696/",
            name: "tyrunt"
        }
    }, {
        entry_number: 697,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/697/",
            name: "tyrantrum"
        }
    }, {
        entry_number: 698,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/698/",
            name: "amaura"
        }
    }, {
        entry_number: 699,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/699/",
            name: "aurorus"
        }
    }, {
        entry_number: 700,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/700/",
            name: "sylveon"
        }
    }, {
        entry_number: 701,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/701/",
            name: "hawlucha"
        }
    }, {
        entry_number: 702,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/702/",
            name: "dedenne"
        }
    }, {
        entry_number: 703,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/703/",
            name: "carbink"
        }
    }, {
        entry_number: 704,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/704/",
            name: "goomy"
        }
    }, {
        entry_number: 705,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/705/",
            name: "sliggoo"
        }
    }, {
        entry_number: 706,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/706/",
            name: "goodra"
        }
    }, {
        entry_number: 707,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/707/",
            name: "klefki"
        }
    }, {
        entry_number: 708,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/708/",
            name: "phantump"
        }
    }, {
        entry_number: 709,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/709/",
            name: "trevenant"
        }
    }, {
        entry_number: 710,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/710/",
            name: "pumpkaboo"
        }
    }, {
        entry_number: 711,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/711/",
            name: "gourgeist"
        }
    }, {
        entry_number: 712,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/712/",
            name: "bergmite"
        }
    }, {
        entry_number: 713,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/713/",
            name: "avalugg"
        }
    }, {
        entry_number: 714,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/714/",
            name: "noibat"
        }
    }, {
        entry_number: 715,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/715/",
            name: "noivern"
        }
    }, {
        entry_number: 716,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/716/",
            name: "xerneas"
        }
    }, {
        entry_number: 717,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/717/",
            name: "yveltal"
        }
    }, {
        entry_number: 718,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/718/",
            name: "zygarde"
        }
    }, {
        entry_number: 719,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/719/",
            name: "diancie"
        }
    }, {
        entry_number: 720,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/720/",
            name: "hoopa"
        }
    }, {
        entry_number: 721,
        pokemon_species: {
            url: "http://pokeapi.co/api/v2/pokemon-species/721/",
            name: "volcanion"
        }
    }
  ];

  this.getName = function(input) {
    if (isNaN(input)) {
      input = input.toLowerCase();
      for (var j = 0; j < national.length; j++) {
        if (input === national[j].pokemon_species.name) {
          return input;
        }
      }
      return "Try Again";
    }
    else {
      for (var i = 0; i < national.length; i++) {
        if (Number(input) === national[i].entry_number) {
          return national[i].pokemon_species.name;
        }
      }
    }
  };

  this.getID = function(input) {
    if (isNaN(input)) {
      input = input.toLowerCase();
      for (var i = 0; i < national.length; i++) {
        if (input === national[i].pokemon_species.name) {
          return national[i].entry_number;
        }
      }
      return 'invalid';
    }
    else {
      if (input < 722 && input > 0) {
        return Number(input);
      }
      else {
        return 'invalid';
      }
    }
  };

});//End Service
