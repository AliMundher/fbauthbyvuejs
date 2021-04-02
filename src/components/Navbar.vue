<template>
  <v-app-bar flat app>
    <v-toolbar-title>
      <v-btn text class="grey--text" to="/">moon </v-btn>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <!-- Logout Link -->
    <v-btn text class="grey--text" @click="logout" v-if="logden">
      logout
      <v-icon right>logout</v-icon>
    </v-btn>
    <div v-else>
      <v-btn text class="grey--text" to="/register" v-if="link_none">
        Sign up
        <v-icon right>login</v-icon>
      </v-btn>
      <v-btn text class="grey--text" to="/login" v-if="link_none">
        Log in
        <v-icon right>login</v-icon>
      </v-btn>
    </div>
  </v-app-bar>
</template>

<script>
import { auth } from "../fb";
// import Login from "../views/Login";

export default {
  name: "navbar",
  data() {
    return {
      logden: false,
      link_none: false,
    };
  },
  methods: {
    logout() {
      auth.signOut().then(() => {
        setTimeout(() => this.redirect(), 1000);
      });
    },
    redirect() {
      this.$router.push({ name: "Login" });
    },
  },
  created() {
    auth.onAuthStateChanged((user) => {
      if (user) {
        this.logden = true;
        this.link_none = true;
      } else {
        this.logden = false;
        this.link_none = true;
      }
    });
  },
};
</script>

<style lang="scss" scoped></style>
