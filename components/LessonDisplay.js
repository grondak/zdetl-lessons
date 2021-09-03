app.component('lesson-display', {
    props: {

    },
    template:
    /*html*/
    `<div>
        <div>Lesson title: {{ name }} </div>
        <div><img v-bind:src="image"></div>
        <div>
            <button class="button" v-on:click="gotoFirstLesson">
                <span class="material-icons-outlined">
                    first_page
                </span>
            </button>
            <button class="button" v-on:click="gotoPreviousLesson">
                <span class="material-icons-outlined">
                    chevron_left
                </span>
            </button>
            <button class="button" v-on:click="gotoNextLesson">
                <span class="material-icons-outlined">
                    chevron_right
                </span>
            </button>
            <button class="button" v-on:click="gotoLastLesson">
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
            currentLesson: 0,
            // need lessonImageData and wordLessonData to have something in them so vue doesn't bomb.
            // These will be replaced at mount time by reading JSON files
            // The JSON files make it easier to maintain the site
            // They will be replaced by database calls from Amplify when I update the program
            lessonImageData: [{ lesson: "1. Stateroom", image: "AZ_139-2021_Stateroom.png" }],
            wordLessonData: [
                {
                "zhodani": "a.chabl.r.shanj ",
                "lesson": "1. Stateroom",
                "english": "medicine cabinet"
                }
            ],
        }
    },
    mounted() {          
        this.init();
    },
    methods: {
        loadJSON(callback, filename) {
            var xobj = new XMLHttpRequest();
            xobj.overrideMimeType("application/json");
            xobj.open('GET', filename, true)
            xobj.onreadystatechange = function () {
                if (xobj.readyState == 4 && xobj.status == "200") {
                    // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
                    callback(xobj.responseText);
                }
            };
            xobj.send(null);
        },
        init() {
            let that = this
            that.loadJSON(function (response) {
                // Parse JSON string into object
                var data = JSON.parse(response);
                that.lessonImageData = data.lessonImageData
            }, './assets/json/lessonImageData.json');
            that.loadJSON(function (response) {
                // Parse JSON string into object
                var data = JSON.parse(response);
                that.wordLessonData = data.wordLessonData
            }, './assets/json/wordLessonData.json');
        },        
        lessonFilter(value, index, array) {
            return array[index].lesson == this.lessonImageData[this.currentLesson].lesson;
        },
        gotoFirstLesson() {
            this.currentLesson = 0;
        },
        gotoPreviousLesson() {
            if(this.currentLesson > 0)
                this.currentLesson -= 1;
        },
        gotoNextLesson() {
            if(this.currentLesson < this.lessonCount -1 )
                this.currentLesson += 1;
        },
        gotoLastLesson() {
            this.currentLesson = this.lessonCount - 1;
        }
    },
    computed: {
        lessonCount() {
            return this.lessonImageData.length;
        },
        name() {
            return this.lessonImageData[this.currentLesson].lesson;
        },
        image() {
            return "assets/images/" + this.lessonImageData[this.currentLesson].image;
        },
        wordsForLesson() {
            return this.wordLessonData.filter(this.lessonFilter)
        },
    }
})
