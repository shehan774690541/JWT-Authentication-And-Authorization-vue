let appSettings;

if (process.env.NODE_ENV === "production"){
    let timeoutDurationMins = 30
    appSettings = {
        $api_url: process.env.VUE_APP_API_BASE_URL,
        timeoutDuration: timeoutDurationMins * 60 * 1000,
    };
}else{
    let timeoutDurationMins = 30;
    appSettings = {
        $api_url: "http://localhost:5169/",
        timeoutDuration: timeoutDurationMins * 60 * 1000,
    };
}

export { appSettings }