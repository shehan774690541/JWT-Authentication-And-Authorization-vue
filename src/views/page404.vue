<template>
    <div class="errorPage">
        <div>
            <h1>404 Not Found</h1>
            <br>
            <center>
                <router-link to="/user">Back To Home</router-link>
            </center>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.errorPage {
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
}

.errorPage h1 {
    font-size: 3em;
    color: rgb(255, 117, 117);

}
</style>    