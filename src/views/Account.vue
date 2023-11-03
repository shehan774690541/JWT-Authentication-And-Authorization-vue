<template>
  <div class="content">
    <div class="form">
      <login v-if="loginForm" />
      <register v-if="registerForm" />
      <br />
      <div @click="changeForms" style="width: 100%;text-align: center;" >
        <u>{{ form_changer }}</u>
      </div>
    </div>
  </div>
</template>

<script>
import login from "@/components/login.vue";
import register from "@/components/register.vue";
import { useStore } from "../../store/store";
import router from "@/router";

export default {
  components: {
    register,
    login,
  },
  data() {
    return {
      form_changer: "",
      loginForm: false,
      registerForm: true,
    };
  },
  mounted() {
    this.changeForms();
    if(this.$route.query.pg == "register"){
      this.loginForm = false
      this.registerForm = true
    }
    else{
      this.loginForm = true
      this.registerForm = false
    }

    if(this.$route.query.pg == "login"){
      this.loginForm = true
      this.registerForm = false
    }
  },
  methods: {
    changeForms() {
      (this.loginForm = !this.loginForm),(this.registerForm = !this.registerForm),(this.form_changer = "clicked!");

      if (this.loginForm == true && this.registerForm == false) {
        this.form_changer = "Already have account? Sign in";
      } else {
        this.form_changer = "Don't have account yet? Sign up";
      }
    },
    cl() {
      console.log(this.store);
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
.content {
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
.form {
  border: 1px solid black;
  border-radius: 20px;
  padding: 20px;
  width: 500px;
  height: auto;
}
.form p {
  text-align: center;
  transition: ease 0.05s;
}
.form p:hover {
  text-align: center;
  color: blue;
}
</style>