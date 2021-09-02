app.component('lesson-display', {
    props: {

    },
    template:
    /*html*/
    `<div>
        <div>Lesson title: {{ name }} </div>
        <div><img v-bind:src="image"></div>
        <div>
            <button class="button" v-on:click="firstLesson">
                <span class="material-icons-outlined">
                    first_page
                </span>
            </button>
            <button class="button" v-on:click="previousLesson">
                <span class="material-icons-outlined">
                    chevron_left
                </span>
            </button>
            <button class="button" v-on:click="nextLesson">
                <span class="material-icons-outlined">
                    chevron_right
                </span>
            </button>
            <button class="button" v-on:click="lastLesson">
                <span class="material-icons-outlined">
                    last_page
                </span>
            </button>
        </div>
        <div>
            <ul>
                <li v-for="word, index in wordsForLesson"> {{ word.zhodani + ": " + word.english }}</li>
            </ul>
        </div>

    </div>`,
    data() {
        return {
            lessonCount: 18,
            currentLesson: 0,
            lessonImageData: [
                { lesson: "1. Stateroom", image: "AZ_139-2021_Stateroom.png" },
                { lesson: "2. Stateroom & Wardrobe", image: "AZ_140-2021_Wardrobe.png" },
                { lesson: "3. The Galley", image: "AZ_141-2021_Galley.png" },
                { lesson: "4. Breakfast", image: "AZ_142-2021_Breakfast.png" },
                { lesson: "5. The Bridge", image: "AZ_143-2021_The_Bridge.png" },
                { lesson: "6. Engineering", image: "AZ_144-2021_Engineering.png" },
                { lesson: "7. The Rec Room", image: "AZ_145-2021_Rec_Room.png" },
                { lesson: "8. Pirate Ship", image: "AZ_146-2021_Pirate_Ship.png" },
                { lesson: "9. Spaceport", image: "AZ_147-2021_Spaceport.png" },
                { lesson: "10. Countryside", image: "AZ_148-2021_The_Countryside.png" },
                { lesson: "11. Marketplace", image: "AZ_151-2021_The_Market.png" },
                { lesson: "12. The Clothier", image: "AZ_153-2021_Clothing_Shop.png" },
                { lesson: "13. The Park", image: "AZ_154-2021_In_The_Park.png" },
                { lesson: "14. The Disco", image: "AZ_157-2021_Clubbing.png" },
                { lesson: "15. The Body Parts", image: "AZ_160-2021_The_Body_(Me).png" },
                { lesson: "16. Colors", image: "AZ_162-2021_Numbers.png" },
                { lesson: "17. Numbers", image: "AZ_161-2021_Numbers.png" },
                { lesson: "18. Seasons", image: "AZ_164-2021_The_Seasons.png" },

            ],
            wordLessonData: [
                {
                "zhodani": "a.chabl.r.shanj ",
                "lesson": "1. Stateroom",
                "english": "medicine cabinet"
                },
                {
                "zhodani": "a.pria ",
                "lesson": "1. Stateroom",
                "english": "mattress"
                },
                {
                "zhodani": "achabl",
                "lesson": "1. Stateroom",
                "english": "cabinet"
                },
                {
                "zhodani": "bense ",
                "lesson": "1. Stateroom",
                "english": "pipe"
                },
                {
                "zhodani": "braz ",
                "lesson": "1. Stateroom",
                "english": "sink"
                },
                {
                "zhodani": "edektlizvebr ",
                "lesson": "1. Stateroom",
                "english": "blanket"
                },
                {
                "zhodani": "fanzh.kenzh ",
                "lesson": "1. Stateroom",
                "english": "drain pipe"
                },
                {
                "zhodani": "fevranzh",
                "lesson": "1. Stateroom",
                "english": "books"
                },
                {
                "zhodani": "frrz ",
                "lesson": "1. Stateroom",
                "english": "mug, cup"
                },
                {
                "zhodani": "izhdiepriaa ",
                "lesson": "1. Stateroom",
                "english": "Stateroom; cabin; bedroom"
                },
                {
                "zhodani": "kliazh",
                "lesson": "1. Stateroom",
                "english": "water"
                },
                {
                "zhodani": "kliazh.i.bense",
                "lesson": "1. Stateroom",
                "english": "faucet; tap"
                },
                {
                "zhodani": "kliazh.i.rensh ",
                "lesson": "1. Stateroom",
                "english": "shower"
                },
                {
                "zhodani": "shanj",
                "lesson": "1. Stateroom",
                "english": "medicine  "
                },
                {
                "zhodani": "tet.e ",
                "lesson": "1. Stateroom",
                "english": "towel"
                },
                {
                "zhodani": "tledpria",
                "lesson": "1. Stateroom",
                "english": "pillow"
                },
                {
                "zhodani": "zdedl.a.de' ",
                "lesson": "1. Stateroom",
                "english": "mirror"
                },
                {
                "zhodani": "Chibo",
                "lesson": "2. Stateroom & Wardrobe",
                "english": "boots, shoes"
                },
                {
                "zhodani": "chtofr.e.chez ",
                "lesson": "2. Stateroom & Wardrobe",
                "english": "closet; wardrobe"
                },
                {
                "zhodani": "fenj.riv.chiavr",
                "lesson": "2. Stateroom & Wardrobe",
                "english": "drawers; dresser"
                },
                {
                "zhodani": "ia.plam.ze.jiap ",
                "lesson": "2. Stateroom & Wardrobe",
                "english": "curtain/shade/privacy screen"
                },
                {
                "zhodani": "jivr.dre",
                "lesson": "2. Stateroom & Wardrobe",
                "english": "belt"
                },
                {
                "zhodani": "minz.chibo",
                "lesson": "2. Stateroom & Wardrobe",
                "english": "literally, \"sexy shoes\""
                },
                {
                "zhodani": "minz.zhde",
                "lesson": "2. Stateroom & Wardrobe",
                "english": "bra; lingerie"
                },
                {
                "zhodani": "shtol ",
                "lesson": "2. Stateroom & Wardrobe",
                "english": "hat"
                },
                {
                "zhodani": "shtol.e.chiej",
                "lesson": "2. Stateroom & Wardrobe",
                "english": "helmet"
                },
                {
                "zhodani": "tlansh.ia",
                "lesson": "2. Stateroom & Wardrobe",
                "english": "poster, picture, wall decoration"
                },
                {
                "zhodani": "tsadl.o.chib",
                "lesson": "2. Stateroom & Wardrobe",
                "english": "gauntlets, gloves"
                },
                {
                "zhodani": "vav.ie.la.chte ",
                "lesson": "2. Stateroom & Wardrobe",
                "english": "trousers"
                },
                {
                "zhodani": "Zdad.ziar.e",
                "lesson": "2. Stateroom & Wardrobe",
                "english": "Intercom"
                },
                {
                "zhodani": "zhenj",
                "lesson": "2. Stateroom & Wardrobe",
                "english": "shirt, uniform shirt"
                },
                {
                "zhodani": "ash.ash.tiabl.nef.a",
                "lesson": "3. The Galley",
                "english": "freezer (lit. very cold box)"
                },
                {
                "zhodani": "ash.tiabl.nef.a",
                "lesson": "3. The Galley",
                "english": "refrigerator (cold box)"
                },
                {
                "zhodani": "chrsh",
                "lesson": "3. The Galley",
                "english": "bottle"
                },
                {
                "zhodani": "Izhdetsench",
                "lesson": "3. The Galley",
                "english": "Galley/kitchen/eating room"
                },
                {
                "zhodani": "kafi",
                "lesson": "3. The Galley",
                "english": "coffee  "
                },
                {
                "zhodani": "riashkiplstavle",
                "lesson": "3. The Galley",
                "english": "dishwasher"
                },
                {
                "zhodani": "riashzhdevrkafi",
                "lesson": "3. The Galley",
                "english": "coffee maker"
                },
                {
                "zhodani": "shont",
                "lesson": "3. The Galley",
                "english": "stool, seat"
                },
                {
                "zhodani": "sta.ie",
                "lesson": "3. The Galley",
                "english": "plates"
                },
                {
                "zhodani": "vrien.nef.a",
                "lesson": "3. The Galley",
                "english": "oven"
                },
                {
                "zhodani": "yavle",
                "lesson": "3. The Galley",
                "english": "bowls"
                },
                {
                "zhodani": "yents.chap.o",
                "lesson": "3. The Galley",
                "english": "Bacon"
                },
                {
                "zhodani": "rint.zi.tlob.e.jiebl ",
                "lesson": "3. The Galley",
                "english": "Herb Garden (hydroponic herb garden)"
                },
                {
                "zhodani": "Ziatl",
                "lesson": "3. The Galley",
                "english": "Table"
                },
                {
                "zhodani": "sta ",
                "lesson": "4. Breakfast",
                "english": "plate "
                },
                {
                "zhodani": "Vlezjaq",
                "lesson": "4. Breakfast",
                "english": "bacon"
                },
                {
                "zhodani": "kafi",
                "lesson": "4. Breakfast",
                "english": "coffee"
                },
                {
                "zhodani": "jiebl",
                "lesson": "4. Breakfast",
                "english": "herb  "
                },
                {
                "zhodani": "mizhtloyo",
                "lesson": "4. Breakfast",
                "english": "pastry; donut"
                },
                {
                "zhodani": "ibro",
                "lesson": "4. Breakfast",
                "english": "egg"
                },
                {
                "zhodani": "Rianzitsench",
                "lesson": "4. Breakfast",
                "english": "breakfast"
                },
                {
                "zhodani": "tlech.de.tsench",
                "lesson": "4. Breakfast",
                "english": "eating utensils/chopsticks"
                },
                {
                "zhodani": "e.i.r.ie.shid ",
                "lesson": "4. Breakfast",
                "english": "toast"
                },
                {
                "zhodani": "Ziatl",
                "lesson": "4. Breakfast",
                "english": "table"
                },
                {
                "zhodani": "driej.tla.zhdets.a ",
                "lesson": "5. The Bridge",
                "english": "Sensor Operator"
                },
                {
                "zhodani": "vlezhdjiapljdivria",
                "lesson": "5. The Bridge",
                "english": "Navigator (star path finder)"
                },
                {
                "zhodani": "vlezhdvevlstepr",
                "lesson": "5. The Bridge",
                "english": "Pilot (starship guide)"
                },
                {
                "zhodani": "vlezhdvevlatl",
                "lesson": "5. The Bridge",
                "english": "Captain (starship lord)"
                },
                {
                "zhodani": "vatldrik",
                "lesson": "5. The Bridge",
                "english": "Iris Valve"
                },
                {
                "zhodani": "drik",
                "lesson": "5. The Bridge",
                "english": "Hatch"
                },
                {
                "zhodani": "drej",
                "lesson": "5. The Bridge",
                "english": "seat"
                },
                {
                "zhodani": "atl'driej",
                "lesson": "5. The Bridge",
                "english": "captain's chair/conn"
                },
                {
                "zhodani": "rekr'jiapl",
                "lesson": "5. The Bridge",
                "english": "system plot"
                },
                {
                "zhodani": "Vlezhd'jiapl",
                "lesson": "5. The Bridge",
                "english": "star chart"
                },
                {
                "zhodani": "Vlezhdvevldizhdietsench",
                "lesson": "5. The Bridge",
                "english": "\"Bridge\" or \"starship command center\" - usually abbreviated VVP, analogous to CIC"
                },
                {
                "zhodani": "Zdivrtsench",
                "lesson": "6. Engineering",
                "english": "Engine room"
                },
                {
                "zhodani": "Vlezhdizdivr",
                "lesson": "6. Engineering",
                "english": "Jump Drive"
                },
                {
                "zhodani": "tieptlizhdrej",
                "lesson": "6. Engineering",
                "english": "workstation"
                },
                {
                "zhodani": "tlizhdrej",
                "lesson": "6. Engineering",
                "english": "console"
                },
                {
                "zhodani": "shinsivreb shiafl",
                "lesson": "6. Engineering",
                "english": "hydrogen fuel lines"
                },
                {
                "zhodani": "Iaditsiek",
                "lesson": "6. Engineering",
                "english": "spanner"
                },
                {
                "zhodani": "Tezie",
                "lesson": "6. Engineering",
                "english": "mallet"
                },
                {
                "zhodani": "Zhdivrzdanj",
                "lesson": "6. Engineering",
                "english": "engineer"
                },
                {
                "zhodani": "Zhdivrzdanjatl",
                "lesson": "6. Engineering",
                "english": "chief engineer"
                },
                {
                "zhodani": "shinsivreb merjodl zaflia",
                "lesson": "6. Engineering",
                "english": "fusion power plant"
                },
                {
                "zhodani": "stiljodl",
                "lesson": "6. Engineering",
                "english": "floor panel"
                },
                {
                "zhodani": "ekeotsiatsench",
                "lesson": "7. The Rec Room",
                "english": "Recreation Room"
                },
                {
                "zhodani": "shtotl",
                "lesson": "7. The Rec Room",
                "english": "Liquor"
                },
                {
                "zhodani": "shtotlkral",
                "lesson": "7. The Rec Room",
                "english": "Wet Bar"
                },
                {
                "zhodani": "Bialziatl",
                "lesson": "7. The Rec Room",
                "english": "Billiard Table"
                },
                {
                "zhodani": "Bialfidl",
                "lesson": "7. The Rec Room",
                "english": "Billiard Ball"
                },
                {
                "zhodani": "nachchaadieiaia ",
                "lesson": "7. The Rec Room",
                "english": "Scoreboard"
                },
                {
                "zhodani": "kraldieiaia",
                "lesson": "7. The Rec Room",
                "english": "Dart board"
                },
                {
                "zhodani": "kral ",
                "lesson": "7. The Rec Room",
                "english": "dart(s)"
                },
                {
                "zhodani": "abradlnad",
                "lesson": "7. The Rec Room",
                "english": "money; credits"
                },
                {
                "zhodani": "bialzhdesh",
                "lesson": "7. The Rec Room",
                "english": "billiard cue"
                },
                {
                "zhodani": "Forzhan vlezhdvevl",
                "lesson": "8. Pirate Ship",
                "english": "Pirate/Corsair starship"
                },
                {
                "zhodani": "Ked",
                "lesson": "8. Pirate Ship",
                "english": "\"port\" (the left side of the ship)"
                },
                {
                "zhodani": "Zdazh",
                "lesson": "8. Pirate Ship",
                "english": "\"starboard\" (the right side of the ship)"
                },
                {
                "zhodani": "Breia",
                "lesson": "8. Pirate Ship",
                "english": "wing"
                },
                {
                "zhodani": "vlezhdjiapl.ebat",
                "lesson": "8. Pirate Ship",
                "english": "astrogation dome"
                },
                {
                "zhodani": "Va.zhiaii",
                "lesson": "8. Pirate Ship",
                "english": "laser turret"
                },
                {
                "zhodani": "Ebiajchi",
                "lesson": "8. Pirate Ship",
                "english": "viewport"
                },
                {
                "zhodani": "Vevl.fiar",
                "lesson": "8. Pirate Ship",
                "english": "ship's boat"
                },
                {
                "zhodani": "shinsivreb pi'radefl",
                "lesson": "8. Pirate Ship",
                "english": "fuel scoop"
                },
                {
                "zhodani": "tlatl.zhiaii",
                "lesson": "8. Pirate Ship",
                "english": "missile turret"
                },
                {
                "zhodani": "Forzhan eshtejie",
                "lesson": "8. Pirate Ship",
                "english": "Jolly Roger"
                },
                {
                "zhodani": "Vlezhdvevl.zdedrai",
                "lesson": "9. Spaceport",
                "english": "Spaceport"
                },
                {
                "zhodani": "Vevl.fiar",
                "lesson": "9. Spaceport",
                "english": "Ship's Boat"
                },
                {
                "zhodani": "bira.shieoapie'",
                "lesson": "9. Spaceport",
                "english": "Cargo Hold"
                },
                {
                "zhodani": "Bira",
                "lesson": "9. Spaceport",
                "english": "Cargo  "
                },
                {
                "zhodani": "Ese",
                "lesson": "9. Spaceport",
                "english": "Ramp"
                },
                {
                "zhodani": "zdedraiatl",
                "lesson": "9. Spaceport",
                "english": "Port Official"
                },
                {
                "zhodani": "zhdonzhabe",
                "lesson": "9. Spaceport",
                "english": "Passengers"
                },
                {
                "zhodani": "iarel",
                "lesson": "9. Spaceport",
                "english": "Bus"
                },
                {
                "zhodani": "shtiazani",
                "lesson": "9. Spaceport",
                "english": "Luggage"
                },
                {
                "zhodani": "bira.darchtabrtliel",
                "lesson": "9. Spaceport",
                "english": "Cargo Loader"
                },
                {
                "zhodani": "iadlajem",
                "lesson": "9. Spaceport",
                "english": "Air/Raft; Skycar"
                },
                {
                "zhodani": "Iatlepcha",
                "lesson": "10. Countryside",
                "english": "Countryside"
                },
                {
                "zhodani": "Mizh",
                "lesson": "10. Countryside",
                "english": "Clouds"
                },
                {
                "zhodani": "Dranzh",
                "lesson": "10. Countryside",
                "english": "Sun"
                },
                {
                "zhodani": "Jdatl",
                "lesson": "10. Countryside",
                "english": "Mountains"
                },
                {
                "zhodani": "acopatlicza",
                "lesson": "10. Countryside",
                "english": "monorail; train"
                },
                {
                "zhodani": "Abavnomakl",
                "lesson": "10. Countryside",
                "english": "truck; lorry"
                },
                {
                "zhodani": "Qietseplfatlia",
                "lesson": "10. Countryside",
                "english": "motorcycle"
                },
                {
                "zhodani": "iadla ",
                "lesson": "10. Countryside",
                "english": "sky"
                },
                {
                "zhodani": "Preql",
                "lesson": "10. Countryside",
                "english": "city"
                },
                {
                "zhodani": "otlatl",
                "lesson": "10. Countryside",
                "english": "road; highway"
                },
                {
                "zhodani": "Zhdiechichtatl",
                "lesson": "10. Countryside",
                "english": "forest"
                },
                {
                "zhodani": "iadlajem",
                "lesson": "10. Countryside",
                "english": "skycar"
                },
                {
                "zhodani": "Mantlachjem",
                "lesson": "10. Countryside",
                "english": "ground car"
                },
                {
                "zhodani": "Tianchti.zhie",
                "lesson": "11. Marketplace",
                "english": "Marketplace"
                },
                {
                "zhodani": "Tsazhdachalanad",
                "lesson": "11. Marketplace",
                "english": "Musician; \"street performer\""
                },
                {
                "zhodani": "abradlnad",
                "lesson": "11. Marketplace",
                "english": "Money"
                },
                {
                "zhodani": "koachkali",
                "lesson": "11. Marketplace",
                "english": "Awning"
                },
                {
                "zhodani": "zholad",
                "lesson": "11. Marketplace",
                "english": "Server"
                },
                {
                "zhodani": "Chalan.zhi.va.zhdi",
                "lesson": "11. Marketplace",
                "english": "Streetlight"
                },
                {
                "zhodani": "otliadpanzhie ",
                "lesson": "11. Marketplace",
                "english": "Zebra Crossing"
                },
                {
                "zhodani": "tepozhachtio",
                "lesson": "11. Marketplace",
                "english": "Bicycle"
                },
                {
                "zhodani": "Tiepozhuchayazhie",
                "lesson": "11. Marketplace",
                "english": "Balcony"
                },
                {
                "zhodani": "Pochqi",
                "lesson": "11. Marketplace",
                "english": "Window"
                },
                {
                "zhodani": "Pochqi.tiablnefa",
                "lesson": "11. Marketplace",
                "english": "Window Box"
                },
                {
                "zhodani": "Choyan",
                "lesson": "11. Marketplace",
                "english": "Store; shop"
                },
                {
                "zhodani": "Kochuyan",
                "lesson": "11. Marketplace",
                "english": "Door"
                },
                {
                "zhodani": "Kaltenzhie",
                "lesson": "11. Marketplace",
                "english": "Sidewalk"
                },
                {
                "zhodani": "Chalan.zhie",
                "lesson": "11. Marketplace",
                "english": "Street "
                },
                {
                "zhodani": "tilmachoyan",
                "lesson": "12. The Clothier",
                "english": "Clothing shop"
                },
                {
                "zhodani": "rezche",
                "lesson": "12. The Clothier",
                "english": "sign"
                },
                {
                "zhodani": "tilmachtli",
                "lesson": "12. The Clothier",
                "english": "clothing rack"
                },
                {
                "zhodani": "achiakia",
                "lesson": "12. The Clothier",
                "english": "jacket; waistcoat"
                },
                {
                "zhodani": "tilma",
                "lesson": "12. The Clothier",
                "english": "clothing"
                },
                {
                "zhodani": "vav.ie.la.chte ",
                "lesson": "12. The Clothier",
                "english": "trousers"
                },
                {
                "zhodani": "cheyakia",
                "lesson": "12. The Clothier",
                "english": "long coat"
                },
                {
                "zhodani": "chtiepili",
                "lesson": "12. The Clothier",
                "english": "handbag"
                },
                {
                "zhodani": "Chibo",
                "lesson": "12. The Clothier",
                "english": "boots, shoes"
                },
                {
                "zhodani": "tilmanamachad",
                "lesson": "12. The Clothier",
                "english": "one who sells clothing"
                },
                {
                "zhodani": "kemiltlatia",
                "lesson": "12. The Clothier",
                "english": "dress"
                },
                {
                "zhodani": "tepek",
                "lesson": "13. The Park",
                "english": "park"
                },
                {
                "zhodani": "Chtiachi",
                "lesson": "13. The Park",
                "english": "bench"
                },
                {
                "zhodani": "zhochtila",
                "lesson": "13. The Park",
                "english": "flower garden"
                },
                {
                "zhodani": "ichtiozhie",
                "lesson": "13. The Park",
                "english": "path"
                },
                {
                "zhodani": "achazhatli",
                "lesson": "13. The Park",
                "english": "reeds"
                },
                {
                "zhodani": "kanatli",
                "lesson": "13. The Park",
                "english": "ducks"
                },
                {
                "zhodani": "tepozhachtio",
                "lesson": "13. The Park",
                "english": "bicycle"
                },
                {
                "zhodani": "koazhitl",
                "lesson": "13. The Park",
                "english": "tree"
                },
                {
                "zhodani": "tlapakalanch",
                "lesson": "13. The Park",
                "english": "picnic"
                },
                {
                "zhodani": "kliamanali",
                "lesson": "13. The Park",
                "english": "pond"
                },
                {
                "zhodani": "achtalili",
                "lesson": "13. The Park",
                "english": "toy boat"
                },
                {
                "zhodani": "choazoitli",
                "lesson": "13. The Park",
                "english": "shrub; bush; shrubbery"
                },
                {
                "zhodani": "mitotlsench",
                "lesson": "14. The Disco",
                "english": "dance hall/disco"
                },
                {
                "zhodani": "ichthintzactli",
                "lesson": "14. The Disco",
                "english": "speaker; loudspeaker"
                },
                {
                "zhodani": "tlazhotzonl'atl",
                "lesson": "14. The Disco",
                "english": "disc jockey (lit. \"music master\")"
                },
                {
                "zhodani": "tepetzololi",
                "lesson": "14. The Disco",
                "english": "disco ball"
                },
                {
                "zhodani": "aineqsench",
                "lesson": "14. The Disco",
                "english": "alcove"
                },
                {
                "zhodani": "miltotli",
                "lesson": "14. The Disco",
                "english": "dancing"
                },
                {
                "zhodani": "choachatl",
                "lesson": "14. The Disco",
                "english": "pole"
                },
                {
                "zhodani": "choachatl'miltotlia",
                "lesson": "14. The Disco",
                "english": "pole dancer"
                },
                {
                "zhodani": "tlatlicotlia",
                "lesson": "14. The Disco",
                "english": "bartender"
                },
                {
                "zhodani": "tlatlie",
                "lesson": "14. The Disco",
                "english": "drinks"
                },
                {
                "zhodani": "tlepaa",
                "lesson": "14. The Disco",
                "english": "bar "
                },
                {
                "zhodani": "tlakopoye",
                "lesson": "15. The Body Parts",
                "english": "body parts (parts of the body)"
                },
                {
                "zhodani": "koatl",
                "lesson": "15. The Body Parts",
                "english": "head"
                },
                {
                "zhodani": "elpaplatl",
                "lesson": "15. The Body Parts",
                "english": "shoulder"
                },
                {
                "zhodani": "matli",
                "lesson": "15. The Body Parts",
                "english": "arm"
                },
                {
                "zhodani": "matselpachtan",
                "lesson": "15. The Body Parts",
                "english": "elbow"
                },
                {
                "zhodani": "chtopitsachtli",
                "lesson": "15. The Body Parts",
                "english": "leg"
                },
                {
                "zhodani": "tlanchoatli",
                "lesson": "15. The Body Parts",
                "english": "knee"
                },
                {
                "zhodani": "chitontli",
                "lesson": "15. The Body Parts",
                "english": "foot"
                },
                {
                "zhodani": "tsonkali",
                "lesson": "15. The Body Parts",
                "english": "hair"
                },
                {
                "zhodani": "tonachazh",
                "lesson": "15. The Body Parts",
                "english": "ear"
                },
                {
                "zhodani": "ichtotl",
                "lesson": "15. The Body Parts",
                "english": "eye"
                },
                {
                "zhodani": "yakatzoli",
                "lesson": "15. The Body Parts",
                "english": "nose"
                },
                {
                "zhodani": "zhdipali",
                "lesson": "15. The Body Parts",
                "english": "mouth; lips"
                },
                {
                "zhodani": "maitli",
                "lesson": "15. The Body Parts",
                "english": "hand"
                },
                {
                "zhodani": "tsipitl",
                "lesson": "15. The Body Parts",
                "english": "navel"
                },
                {
                "zhodani": "Tlapralio",
                "lesson": "16. Colors",
                "english": "The Colors"
                },
                {
                "zhodani": "Niechtik",
                "lesson": "16. Colors",
                "english": "gray"
                },
                {
                "zhodani": "kozhaqi",
                "lesson": "16. Colors",
                "english": "orange"
                },
                {
                "zhodani": "Iapali",
                "lesson": "16. Colors",
                "english": "black"
                },
                {
                "zhodani": "Tlazhdoyo",
                "lesson": "16. Colors",
                "english": "red"
                },
                {
                "zhodani": "Qiltik",
                "lesson": "16. Colors",
                "english": "green"
                },
                {
                "zhodani": "techtotik",
                "lesson": "16. Colors",
                "english": "blue"
                },
                {
                "zhodani": "ichtotzotik",
                "lesson": "16. Colors",
                "english": "light purple"
                },
                {
                "zhodani": "chtochipotik",
                "lesson": "16. Colors",
                "english": "orangey pink"
                },
                {
                "zhodani": "tlazhdaletlatik",
                "lesson": "16. Colors",
                "english": "pink"
                },
                {
                "zhodani": "chtopiatlik",
                "lesson": "16. Colors",
                "english": "orange"
                },
                {
                "zhodani": "kamotik",
                "lesson": "16. Colors",
                "english": "purple"
                },
                {
                "zhodani": "ichkotzik",
                "lesson": "16. Colors",
                "english": "light blue"
                },
                {
                "zhodani": "tepozhotlik",
                "lesson": "16. Colors",
                "english": "gold"
                },
                {
                "zhodani": "yiaplatik",
                "lesson": "16. Colors",
                "english": "brown"
                },
                {
                "zhodani": "izhtak",
                "lesson": "16. Colors",
                "english": "white"
                },
                {
                "zhodani": "chten",
                "lesson": "17. Numbers",
                "english": "one "
                },
                {
                "zhodani": "omei",
                "lesson": "17. Numbers",
                "english": "two"
                },
                {
                "zhodani": "tyeii",
                "lesson": "17. Numbers",
                "english": "three"
                },
                {
                "zhodani": "nachoie",
                "lesson": "17. Numbers",
                "english": "four"
                },
                {
                "zhodani": "machieli",
                "lesson": "17. Numbers",
                "english": "five"
                },
                {
                "zhodani": "chtiachi",
                "lesson": "17. Numbers",
                "english": "six"
                },
                {
                "zhodani": "komi",
                "lesson": "17. Numbers",
                "english": "seven"
                },
                {
                "zhodani": "kue",
                "lesson": "17. Numbers",
                "english": "eight"
                },
                {
                "zhodani": "kona",
                "lesson": "17. Numbers",
                "english": "nine"
                },
                {
                "zhodani": "matlapa",
                "lesson": "17. Numbers",
                "english": "ten"
                },
                {
                "zhodani": "matlachten",
                "lesson": "17. Numbers",
                "english": "eleven"
                },
                {
                "zhodani": "matla'omei",
                "lesson": "17. Numbers",
                "english": "twelve"
                },
                {
                "zhodani": "matlatyeii",
                "lesson": "17. Numbers",
                "english": "thirteen"
                },
                {
                "zhodani": "matlanachoie",
                "lesson": "17. Numbers",
                "english": "fourteen"
                },
                {
                "zhodani": "matlamachieli",
                "lesson": "17. Numbers",
                "english": "fifteen"
                },
                {
                "zhodani": "matlachtiachi",
                "lesson": "17. Numbers",
                "english": "sixteen"
                },
                {
                "zhodani": "matlakomi",
                "lesson": "17. Numbers",
                "english": "seventeen"
                },
                {
                "zhodani": "matlakue",
                "lesson": "17. Numbers",
                "english": "eighteen"
                },
                {
                "zhodani": "matlakona",
                "lesson": "17. Numbers",
                "english": "nineteen"
                },
                {
                "zhodani": "omeimatli",
                "lesson": "17. Numbers",
                "english": "twenty"
                },
                {
                "zhodani": "Atrint",
                "lesson": "18. Seasons",
                "english": "\"raining\""
                },
                {
                "zhodani": "Vrienstial",
                "lesson": "18. Seasons",
                "english": "\"heat\""
                },
                {
                "zhodani": "Atchafser",
                "lesson": "18. Seasons",
                "english": "\"waning\""
                },
                {
                "zhodani": "Ataniebl",
                "lesson": "18. Seasons",
                "english": "\"harvest\""
                },
                {
                "zhodani": "Atshiavl",
                "lesson": "18. Seasons",
                "english": "\"chill\""
                },
                {
                "zhodani": "Atpiapr",
                "lesson": "18. Seasons",
                "english": "\"thaw\""
                }
            ],
        }
    },
    methods: {
        lessonFilter(value, index, array) {

            return array[index].lesson == this.lessonImageData[this.currentLesson].lesson;
        },
        firstLesson() {
            this.currentLesson = 0;
        },
        previousLesson() {
            if(this.currentLesson > 0)
                this.currentLesson -= 1;
        },
        nextLesson() {
            if(this.currentLesson < this.lessonCount -1 )
                this.currentLesson += 1;
        },
        lastLesson() {
            this.currentLesson = this.lessonCount - 1;
        }
    },
    computed: {
        name() {
            return this.lessonImageData[this.currentLesson].lesson;
        },
        image() {
            return "assets/images/" + this.lessonImageData[this.currentLesson].image;
        },
        wordsForLesson() {
            const result = this.wordLessonData.filter(this.lessonFilter)
            return result;
            
        },
    }
})
