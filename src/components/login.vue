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
      email: "shehan774690541@gmail.com",
      password: "shehanApp",
      userName: "",
      request_status: 0,
    };
  },
  methods: {
    UserLogin() {
      const comp = this
      console.log("login vue")
      try {
        let requestBody = {
          password: comp.password,
          email: comp.email,
        };
        networkManager.apiRequest('api/User/login', requestBody, (e) => {
          console.log("Login responce", e)
          if (e.statusCode == 200) {
            comp.store.token = e.data.token;
            comp.store.user = comp.email;
            console.log("get docs")
            comp.$router.push("/docs");
          }
          else {
            comp.alertCustom("An error occurred !", "Invalid password or user name", " - OK - ");
          }

        }, false)
      } catch (error) {
        console.log("User Login : ", error)
        comp.alertCustom("An error occurred !", error, "OK");
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