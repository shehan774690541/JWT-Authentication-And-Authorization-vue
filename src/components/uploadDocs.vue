<template>
  <div id="app" class="container">
    <h2 style="text-align: center">Upload Document</h2>
    <!-- txt : {{ this.txt }} -->
    <div>
      <section>
        <b-field>
          <b-upload v-model="dropFiles" multiple drag-drop>
            <section class="section" v-if="!dropFiles">
              <div class="has-text-centered">
                <p>
                  <b-icon icon="upload" size="is-large"> </b-icon>
                </p>
                <p>Drop your files here or click to upload</p>
              </div>
            </section>
          </b-upload>
        </b-field>
        <div @click="deleteDropFile(index)" v-for="(file, index) in dropFiles" :key="index" class="text is-dark"
          style="justify-content: center; align-items: center">
          <ul>
            <li><b>File Name : </b> {{ file.name }}</li>
            <li><b>File Size : </b> {{ formatFileSize(file.size) }}</li>
            <li><b>File Type : </b> {{ getFileType(file.type) }}</li>
          </ul>

          <div style="width: 100%; display: flex; justify-content: space-between">
            <b-button @click="uploadForDb(file)">Upload</b-button>
            <b-button @click="deleteDropFile()">Remove</b-button>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { useStore } from "@/store/store";
import networkManager from "@/network";


export default {
  data() {
    return {
      dropFiles: null,
      uploafVisible: true,
      base64Image: null,
      txt: ""
    };
  },
  methods: {
    deleteDropFile(index) {
      this.dropFiles.splice(index, 1);
      this.dropFiles = null;
    },
    uploadForDb: function (file) {
      try {
        const fileInput = file;
        const reader = new FileReader();

        reader.onload = () => {
          const base64String = reader.result;
          const base64ImageWithoutPrefix = base64String.split(",")[1];
          this.base64Image = `${fileInput.name}~${base64ImageWithoutPrefix}`;

          const requestBody = {
            email: this.store.user,
            document: this.base64Image,
          };
          console.log(requestBody);

          networkManager.apiRequest('api/UserDocs/uploadDocs', requestBody, (e) => {
            this.alertCustom("Successfull", e.data.data.documents, "OK");
          });
        };

        reader.readAsDataURL(fileInput);
        console.log("Upload process Finished!");
      } catch (error) {
        console.log("Upload Error : ", error);
      }
    },


    formatFileSize(size) {
      if (size < 1024) {
        return size + " B";
      } else if (size < 1024 * 1024) {
        return (size / 1024).toFixed(2) + " KB";
      } else {
        return (size / (1024 * 1024)).toFixed(2) + " MB";
      }
    },
    getFileType(type) {
      const imageTypes = ["image/jpeg", "image/png", "image/gif"];
      const documentTypes = ["application/pdf", "text/plain"];

      if (imageTypes.includes(type)) {
        return "Image";
      } else if (documentTypes.includes(type)) {
        return "Document";
      } else {
        return "Other";
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
<style scoped></style>
../store/store