<template>
  <div>
    <h1 style="text-align: center">register</h1>
    <b-field label="User Name">
      <b-input v-model="userName"></b-input>
    </b-field>

    <b-field label="Password">
      <b-input v-model="password" type="password"></b-input>
    </b-field>

    <b-field label="Email Address">
      <b-input v-model="email"></b-input>
    </b-field>

    <div class="block">
      <b-radio v-model="role" name="name" native-value="user">
        User
      </b-radio>
      <b-radio v-model="role" name="name" native-value="student">
        Student
      </b-radio>
    </div>

    <center>
      <b-button @click="UserRegister">Register</b-button>
    </center>
  </div>
</template>
  
<script>
import axios from "axios";
import router from "@/router";
import networkManager from "@/network";

export default {
  data() {
    return {
      email: "",
      password: "",
      userName: "",
      role: "user"
    };
  },
  methods: {
    UserRegister() {
      try {
        let requestBody = {
          userName: this.userName,
          password: this.password,
          email: this.email,
          userRole: this.role,
        };
        networkManager.apiRequest('api/User/register', requestBody, (e) => {
          if (e.status === 200) {
            console.log("Data added successfully.", e);
            this.alertCustom("Successfull !", "New Account Create Successfull", "OK");
            router.push('');
          }
        }, false);
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
};
</script>
  
<style></style>