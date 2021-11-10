<template>
  <div>
    <div v-if="authState !== 'signedin'">
      You are signed out.
      <div class="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link> |
        <router-link to="/search"
          ><span class="material-icons-outlined md-24"
            >search</span
          ></router-link
        >
      </div>
    </div>
    <amplify-auth-container>
      <amplify-authenticator>
        <div class="nav">
          <router-link to="/">Home</router-link> |
          <router-link to="/about">About</router-link> |
          <router-link to="/search"
            ><span class="material-icons-outlined md-24"
              >search</span
            ></router-link
          >
          |
          <router-link to="/manager">Manager</router-link> |
          <span v-if="authState === 'signedin' && user">
            <span>Hello, {{ user.username }} &nbsp;</span>
          </span>
        </div>
        <amplify-sign-out></amplify-sign-out>
      </amplify-authenticator>
    </amplify-auth-container>

    <router-view />
  </div>
</template>

<script>
import { onAuthUIStateChange } from "@aws-amplify/ui-components";

export default {
  name: "AuthStateApp",
  created() {
    this.unsubscribeAuth = onAuthUIStateChange((authState, authData) => {
      this.authState = authState;
      this.user = authData;
    });
  },
  data() {
    return {
      user: undefined,
      authState: undefined,
      unsubscribeAuth: undefined,
    };
  },
  beforeUnmount() {
    this.unsubscribeAuth();
  },
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.nav {
  padding: 30px;
}

.nav a {
  font-weight: bold;
  color: #2c3e50;
}

.nav a.router-link-exact-active {
  color: #42b983;
}

amplify-authenticator {
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  /*height: 100vh;*/
}
</style>
