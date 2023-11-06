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
import { useStore } from "../../store/store";
import router from "@/router";

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
        console.log(requestBody);
        axios
          .post("http://localhost:5169/api/User/login", requestBody)
          .then((response) => {
            if (response.status === 200) {
              console.log(response.data.data.token);
              this.store.token = response.data.data.token;
              this.store.user = this.email;
              // this.alertCustom("Successfull !", "New Account Create Successfull", "OK");
              // this.$router.push("/docs");
              router.push('/docs')
            }
          })
          .catch((error) => {
            this.alertCustom("An error occurred !", error, "OK");
          });
      } catch (error) {
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

<style>
</style>