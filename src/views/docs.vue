<template>
  <div class="content">
    <div class="form"  v-if="this.uploadDocs">
      <div>
        <uploadDocs/>
      </div>
    </div>
    <div class="allDocs" v-if="this.viewAllData">
      <div>
        <AllDocs />
      </div>
    </div>

    <section>
      <b-sidebar type="is-light" :fullheight=true :fullwidth=false :overlay=true :right=false v-model="open">
        <div class="p-1">
          <b-menu>
            <b-menu-list label="Menu">
              <b-menu-item  label="Upload Document" @click="uploadDocumentMethod()"></b-menu-item>
            </b-menu-list>
            <b-menu-list>
              <b-menu-item label="All Data"  @click="viewAddDataMethod()"></b-menu-item>
            </b-menu-list>
            <b-menu-list label="Actions">
              <b-menu-item label="Logout" v-on:click="logOutUser(true)"></b-menu-item>
            </b-menu-list>
          </b-menu>
        </div>
      </b-sidebar>
    </section>
    <b-button @click="open = true" class="showSide" icon-left="github-circle">
      <svg viewBox="0 0 24 24" fill="none" width="40px" height="40px" xmlns="http://www.w3.org/2000/svg">
        <g id="SVGRepo_bgCarrier" stroke-width="0" />
        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" />
        <g id="SVGRepo_iconCarrier">
          <path
            d="M7 7C6.44772 7 6 7.44772 6 8C6 8.55228 6.44772 9 7 9H13C13.5523 9 14 8.55228 14 8C14 7.44772 13.5523 7 13 7H7Z"
            fill="#000000" />
          <path
            d="M6 12C6 11.4477 6.44772 11 7 11H13C13.5523 11 14 11.4477 14 12C14 12.5523 13.5523 13 13 13H7C6.44772 13 6 12.5523 6 12Z"
            fill="#000000" />
          <path
            d="M7 15C6.44772 15 6 15.4477 6 16C6 16.5523 6.44772 17 7 17H13C13.5523 17 14 16.5523 14 16C14 15.4477 13.5523 15 13 15H7Z"
            fill="#000000" />
          <path fill-rule="evenodd" clip-rule="evenodd"
            d="M5.625 21H18.375C20.3918 21 22 19.3435 22 17.3333V6.66667C22 4.65653 20.3918 3 18.375 3H5.625C3.60818 3 2 4.65653 2 6.66667V17.3333C2 19.3435 3.60818 21 5.625 21ZM5.625 5C4.74233 5 4 5.73129 4 6.66667V17.3333C4 18.2687 4.74233 19 5.625 19H14.375C15.2577 19 16 18.2687 16 17.3333V6.66667C16 5.73129 15.2577 5 14.375 5H5.625ZM18.375 19H17.6042C17.8575 18.4987 18 17.9317 18 17.3333V6.66667C18 6.06833 17.8575 5.50132 17.6042 5H18.375C19.2577 5 20 5.73129 20 6.66667V17.3333C20 18.2687 19.2577 19 18.375 19Z"
            fill="#000000" />
        </g>
      </svg>
    </b-button>
  </div>
</template>

<script>
import uploadDocs from '@/components/uploadDocs.vue';
import allDocs from '@/components/allDocs.vue';
import { useStore } from "@/store/store";
import AllDocs from '@/components/allDocs.vue';
// import router from '@/views/Account.vue';
import jwtUtils from '@/helpers/jwtUtils';


export default {
  components: {
    uploadDocs,
    allDocs,
    AllDocs
},
  data() {
    return {
      open: false,
      viewAllData: false,
      uploadDocs:true,
    }
  },
  setup() {
    const store = useStore();
    return {
      store,
    };
  },
  methods:{
    uploadDocumentMethod(){
      this.uploadDocs = true;
      this.viewAllData = false;
    },
    viewAddDataMethod(){
      this.uploadDocs = false;
      this.viewAllData = true;
    },
    logOutUser(){
      console.log("userLog out");
      jwtUtils.logoutTheUser();
    }
  }
}
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
  height: 300px;
  display: flex;
  justify-content: center;
}

.form p {
  text-align: center;
  transition: ease 0.05s;
}

.form p:hover {
  text-align: center;
  color: blue;
}

.showSide {
  position: absolute;
  left: 0;
  display: flex;
  padding: 10px;
  margin: 10px;
  width: 50px;
  height: 50px;
  opacity: 10%;
  transition: ease 0.5s;
}
.showSide:hover{
  opacity: 100%;
  transition: ease 0.5s;
}
.allDocs{
  width: 100%;
  height: 100%;
}
</style>../store/store