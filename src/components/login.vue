<template>
  <div>
    <h1 style="text-align: center">login</h1>

    <b-field label="Email Address">
      <b-input v-model="email"></b-input>
    </b-field>
    <b-field label="Password">
      <b-input v-model="password" type="password"></b-input>
    </b-field>
    <center>
      <b-button @click="UserLogin">Login Here</b-button>
    </center>
  </div>
</template>

<script>
import axios from "axios";
import { useStore } from "@/store/store";
import router from "@/router";
import networkManager from "@/network";


export default {
  data() {
    return {
      email: "",
      password: "",
      userName: "",
    };
  },
  methods: {
    UserLogin() {
      try {
        let requestBody = {
          password: this.password,
          email: this.email,
        };
        
        networkManager.apiRequest('api/User/login', requestBody, (e) => {
          if (e.data.status_code == 200) {
            this.store.token = e.data.data.token;
            this.store.user = this.email;
            this.$router.push('docs');
          }
        }, false);
        
      } catch (error) {
        console.log("User Login : ", error)
        this.alertCustom("An error occurred !", error, "OK");
      }
    },
    alertCustom(_title, _message, _confirmText) {
      this.$buefy.dialog.alert({
        title: _title,
        message: _message,
        confirmText: _confirmText,
      });
    },
  },
  setup() {
    const store = useStore();
    return {
      store,
    };
  },
};
</script>

<style></style>../store/store