<template>
  <div class="content">
    <div class="form">
      <div>
        <uploadDocs/>
      </div>
    </div>
  </div>
</template>

<script>
import uploadDocs from '@/components/uploadDocs.vue';

export default {
    components:{
        uploadDocs
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
</style>