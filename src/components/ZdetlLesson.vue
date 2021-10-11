<template>
  <div>
    <div>Lesson title: {{ name }}</div>
    <div><img v-bind:src="image" /></div>
    <div>
      <button class="button" v-on:click="gotoFirstLesson">
        <span class="material-icons-outlined"> first_page </span>
      </button>
      <button class="button" v-on:click="gotoPreviousLesson">
        <span class="material-icons-outlined"> chevron_left </span>
      </button>
      <button class="button" v-on:click="gotoNextLesson">
        <span class="material-icons-outlined"> chevron_right </span>
      </button>
      <button class="button" v-on:click="gotoLastLesson">
        <span class="material-icons-outlined"> last_page </span>
      </button>
    </div>
    <div>
      <ul>
        <li v-for="word in wordsForLesson" v-bind:key="word">
          {{ word.zhodani + ": " + word.english }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Zdetl-Lesson",
  data() {
    return {
      publicPath: process.env.BASE_URL,
      currentLesson: 0,
      // need lessonImageData and wordLessonData to have something in them so vue doesn't bomb.
      // These will be replaced at mount time by reading JSON files
      // The JSON files make it easier to maintain the site
      // They will be replaced by database calls from Amplify when I update the program
      lessonImageData: [
        { lesson: "1. Stateroom", image: "AZ_139-2021_Stateroom.png" },
      ],
      wordLessonData: [
        {
          zhodani: "a.chabl.r.shanj ",
          lesson: "1. Stateroom",
          english: "medicine cabinet",
        },
      ],
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    loadJSON(callback, filename) {
      var xobj = new XMLHttpRequest();
      xobj.overrideMimeType("application/json");
      xobj.open("GET", filename, true);
      xobj.onreadystatechange = function () {
        if (xobj.readyState == 4 && xobj.status == "200") {
          // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
          callback(xobj.responseText);
        }
      };
      xobj.send(null);
    },
    init() {
      let that = this;
      that.loadJSON(function (response) {
        // Parse JSON string into object
        var data = JSON.parse(response);
        that.lessonImageData = data.lessonImageData;
      }, "https://eooio56v95.execute-api.us-east-1.amazonaws.com/dev/lessonImageData");
      that.loadJSON(function (response) {
        // Parse JSON string into object
        var data = JSON.parse(response);
        that.wordLessonData = data.wordLessonData;
      }, "https://eooio56v95.execute-api.us-east-1.amazonaws.com/dev/wordLessonData");
    },
    lessonFilter(value, index, array) {
      return (
        array[index].lesson == this.lessonImageData[this.currentLesson].lesson
      );
    },
    gotoFirstLesson() {
      this.currentLesson = 0;
    },
    gotoPreviousLesson() {
      if (this.currentLesson > 0) this.currentLesson -= 1;
    },
    gotoNextLesson() {
      if (this.currentLesson < this.lessonCount - 1) this.currentLesson += 1;
    },
    gotoLastLesson() {
      this.currentLesson = this.lessonCount - 1;
    },
  },
  computed: {
    lessonCount() {
      return this.lessonImageData.length;
    },
    name() {
      return this.lessonImageData[this.currentLesson].lesson;
    },
    image() {
      return this.publicPath + this.lessonImageData[this.currentLesson].image;
    },
    wordsForLesson() {
      return this.wordLessonData.filter(this.lessonFilter);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
body {
  background-color: #f2f2f2;
  margin: 0px;
  font-family: tahoma;
  color: #282828;
}

.button {
  margin: 30px;
  background-color: #39495c;
  border-radius: 5px;
  font-size: 18px;
  width: 160px;
  height: 60px;
  color: white;
  padding: 20px;
  box-shadow: inset 0 -0.6em 1em -0.35em rgba(0, 0, 0, 0.17),
    inset 0 0.6em 2em -0.3em rgba(255, 255, 255, 0.15),
    inset 0 0 0em 0.05em rgba(255, 255, 255, 0.12);
  text-align: center;
  cursor: pointer;
}

.disabledButton {
  background-color: #d8d8d8;
  cursor: not-allowed;
}

h1 {
  font-size: 50px;
}

h3 {
  font-size: 25px;
}

img {
  border: 2px solid #d8d8d8;
  width: 70%;
  margin: 40px;
  padding: 15px;
  -webkit-box-shadow: 0px 2px 15px -12px rgba(0, 0, 0, 0.57);
  -moz-box-shadow: 0px 2px 15px -12px rgba(0, 0, 0, 0.57);
  box-shadow: 2px 15px -12px rgba(0, 0, 0, 0.57);
}

input {
  width: 100%;
  height: 40px;
  margin-bottom: 20px;
}

label {
  font-size: 20px;
  margin-bottom: 5px;
}

li {
  font-size: 18px;
}

.nav-bar {
  background: linear-gradient(-90deg, #84cf6a, #16c0b0);
  height: 60px;
  margin-bottom: 25px;
  -webkit-box-shadow: 0px 2px 15px -12px rgba(0, 0, 0, 0.57);
  -moz-box-shadow: 0px 2px 15px -12px rgba(0, 0, 0, 0.57);
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.57);
}

.out-of-stock-img {
  opacity: 0.5;
}

p {
  font-size: 22px;
}

.product-display {
  display: flex;
  flex-direction: column;
  padding: 1rem;
}

.product-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

.product-image,
.product-info {
  width: 50%;
}

.review-form {
  display: flex;
  flex-direction: column;
  width: 425px;
  padding: 20px;
  margin: 40px;
  border: 2px solid #d8d8d8;
  background-color: white;
  -webkit-box-shadow: 0px 2px 15px -12px rgba(0, 0, 0, 0.57);
  -moz-box-shadow: 0px 2px 15px -12px rgba(0, 0, 0, 0.57);
  box-shadow: 2px 15px -12px rgba(0, 0, 0, 0.57);
}

.review-container {
  width: 425px;
  padding: 20px;
  background-color: white;
  -webkit-box-shadow: 0px 2px 20px -12px rgba(0, 0, 0, 0.57);
  -moz-box-shadow: 0px 2px 20px -12px rgba(0, 0, 0, 0.57);
  box-shadow: 2px 20px -12px rgba(0, 0, 0, 0.57);
  margin-left: 40px;
  border: 2px solid #d8d8d8;
}

.review-container li {
  margin-bottom: 30px;
}

.review-form .button {
  display: block;
  margin: 30px auto;
}

.search {
  margin: 25px 100px;
  justify-content: flex-end;
  float: right;
}

select {
  height: 40px;
  font-size: 20px;
  background-color: white;
  cursor: pointer;
}

textarea {
  width: 95%;
  height: 70px;
  padding: 10px;
  font-size: 20px;
  margin-bottom: 20px;
}

ul {
  list-style-type: none;
}

@media only screen and (max-width: 600px) {
  .container {
    flex-direction: column;
  }

  .product-image,
  .product-info {
    margin-left: 10px;
    width: 100%;
  }

  .review-form {
    width: 90%;
  }
}
</style>
