<template>
    <div class="allData">
        <section>
            <b-collapse class="card" animation="slide" v-for="(collapse, index) of tableData" :key="index"
                :open="isOpen == index" @open="isOpen = index" :aria-id="'contentIdForA11y5-' + index">
                <template #trigger="props">
                    <div class="card-header" role="button" :aria-controls="'contentIdForA11y5-' + index"
                        :aria-expanded="props.open" >
                        <p class="card-header-title">
                            {{ collapse.userName }}
                        </p>
                        <a class="card-header-icon">
                            <b-icon :icon="props.open ? 'menu-down' : 'menu-up'">
                            </b-icon>
                        </a>
                    </div>
                </template>  
                <div class="card-content" >
                    <div class="content" style="height: 50px; ">
                        {{ collapse.document }}
                    </div>
                </div>
            </b-collapse>
        </section>
    </div>
</template>

<script>
import axios from "axios";
import { useStore } from "@/store/store";
import networkManager from '@/network';

export default {
    data() {
        return {
            isOpen: 0,
            tableData: [],
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
            const data = null;
            networkManager.apiRequest('api/UserDocs/Alldata', data, (e) => {
                this.storeData(e.data.data.documents);
            });
        },
        storeData(datas) {
            console.log(datas); this.tableData = datas;
        }
    }
    ,
    setup() {
        const store = useStore();                                
        return {
            store,
        };
    },
}
</script>

<style scoped>
.allData {
    padding: 30px;
}
</style>../store/store