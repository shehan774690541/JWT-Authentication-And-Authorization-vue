<template>
    <b-table :data="data" :columns="columns"></b-table>
</template>

<script>
import axios from "axios";
export default {
    data() {
        return {
            data: [],
            columns: [
                { field: 'id', label: 'ID', numeric: true },
                { field: 'userName', label: 'User Name', },
                { field: 'document', label: 'Document', },
            ]
        }
    },
    mounted() {
        this.allDocuments()
    },
    methods: {
        async allDocuments() {
            try {
                const response = await axios.get("http://localhost:5169/api/UserDocs/AllData");

                if (response.data.status_code === 200) {
                    console.log(response.data.status_code)
                this.data = response.data.data.documents
                } else {
                    console.log("Failed to fetch Document data");
                }
            } catch (error) {
                console.log("An error occurred:", error);
            }
        },
    },


}
</script>

<style lang="scss" scoped></style>