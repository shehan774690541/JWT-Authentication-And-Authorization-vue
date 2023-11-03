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
        console.log(requestBody);
        axios
          .post("http://localhost:5169/api/User/register?", requestBody)
          .then((response) => {
            if (response.status === 200) {
              // this.alertCustom("added", "Successfull Add New Data!", "is-success", "check")
              console.log("Data added successfully.");
              this.alertCustom("Successfull !", "New Account Create Successfull", "OK");
            }
            if (this.$route.fullPath !== '/user') {
              router.push('/user');
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
};
</script>
  
<style></style>