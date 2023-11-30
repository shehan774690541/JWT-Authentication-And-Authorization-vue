import axios from "axios";
import { appSettings } from "@/appSetting";
import jwtUtils from "../helpers/jwtUtils";

class NetworkResponse {
    statusCode;
    data;
    constructor() {
        this.statusCode = 0;
        this.data = null;
    }
}

const networkManager = {
    apiRequest: function (endpoint, data, callBack, withToken = true, contentType = "application/json", token = null) {

        const URL = appSettings.$api_url + endpoint;

        let config = {
            headers: {},
            timeout: appSettings.timeoutDuration
        };

        if (withToken) {
            let authHeader = `Bearer ${JSON.parse(localStorage.getItem('store')).token}`

            config.headers = {
                Authorization: authHeader,
            };
        }

        config.headers["Content-Type"] = contentType

        if (contentType === "multipart/form-data") {
            config.headers["onUploadProgress"] = progrsEvent => console.log(ProgressEvent.loaded)
        }

        axios
            .post(URL, data, config)
            .then(function (response) {
                const responseData = {
                    statusCode: response.status,
                    data: response.data.data
                };
                callBack(responseData);
            })
            .catch(function (error) {
                let resp = new NetworkResponse();

                if (error.response) {
                    resp.statusCode = error.response.status;

                    if (error.response.data) {
                        resp = error.response.data;
                    }

                    if (resp.statusCode === 401) {
                        console.log("log out the user!")
                    }
                } else {
                    resp.statusCode = 502;
                }

                callBack(resp);
            })
            .finally(function () {
                console.log("apiRequest Finished!")
            });
    }
}

export default networkManager;
