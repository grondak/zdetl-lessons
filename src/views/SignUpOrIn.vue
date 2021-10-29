<template>
  <div class="signuporin">
    <div class="warning">Signup is on the way. Signin doesn't work yet.</div>
    <form class="signup-form" @submit.prevent="onSubmit">
      <h3>Sign up for Zdetl-Lessons</h3>
      <div class="formComplaint" v-if="badFormData">
        At least one field is blank.<br />
      </div>
      <div class="signupFormFields">
        <label for="username">Username:</label>
        <input id="username" v-model="username" />
        <br />
        <label for="password">Password:</label>
        <input id="password" v-model="password" />
        <br />
        <label for="password">Verify Password:</label>
        <input id="password" v-model="secondPassword" />
        <br />
        <label for="email">Email:</label>
        <input id="email" v-model="email" />
        <br />
        <label for="phoneNumber">Phone Number:</label>
        <input id="phoneNumber" v-model="phoneNumber" />
        <br />
        <input class="button" type="submit" value="Continue" />
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "Zdetl-Lesson",
  data() {
    return {
      username: "",
      password: "",
      secondPassword: "",
      email: "",
      phoneNumber: "",
      badFormData: false,
    };
  },
  methods: {
    clearIt() {
      this.username = "";
      this.password = "";
      this.secondPassword = "";
      this.email = "";
      this.phoneNumber = "";
    },
    onSubmit() {
      this.badFormData = false;
      if (
        this.username === "" ||
        this.password === "" ||
        this.secondPassword === "" ||
        this.email === "" ||
        this.phoneNumber === ""
      ) {
        alert("Please fill in all fields");
        this.badFormData = true;
      }
      if (this.password != this.secondPassword) {
        alert("Passwords do not match");
        this.password = "";
        this.secondPassword = "";
        this.badFormData = true;
      }
      alert(
        "Username:  " +
          this.username +
          " password: " +
          this.password +
          " secondPassword: " +
          this.secondPassword +
          "email: " +
          this.email +
          "phoneNumber: " +
          this.phoneNumber +
          "|"
      );
      this.clearIt();
    },
  },
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.formComplaint {
  color: red;
}
.signupFormFields {
  text-align: left;
  right: 0px;
  width: 300px;
  border: 3px solid blue;
  padding: 10px;
}
</style>
