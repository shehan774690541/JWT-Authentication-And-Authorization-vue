<template>
  <div>
    <h1 style="text-align: center">register</h1>
    <b-field label="User Name">
      <b-input v-model="userName"></b-input>
    </b-field>
    <b-field label="Password">
      <b-input v-model="password"></b-input>
    </b-field>
    <b-field label="Email Address">
      <b-input v-model="email"></b-input>
    </b-field>
    <center>
      <b-button @click="UserRegister">Register</b-button>
    </center>
  </div>
</template>
  
  <script>
import axios from "axios";

export default {
  data() {
    return {
      email: "",
      password: "",
      userName: "",
    };
  },
  methods: {
    UserRegister() {
      try {
        let requestBody = {
          userName: this.userName,
          password: this.password,
          email: this.email,
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
            // this.$router.push("/gi");
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
  
  <style>
</style>