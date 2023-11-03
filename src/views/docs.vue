<template>
  <div class="content">
    <div class="form">
      <div>
        <uploadDocs />
      </div>
    </div>
  </div>
</template>

<script>
import uploadDocs from '@/components/uploadDocs.vue';
import { useStore } from "../../store/store";
// import router from '@/views/Account.vue';

export default {
  components: {
    uploadDocs
  },
  mounted(){
    if(this.store.role !== "user"){
      this.$router.replace('/user')
    }
  },
  setup() {
    const store = useStore();
    return {
      store,
    };
  },
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
}</style>