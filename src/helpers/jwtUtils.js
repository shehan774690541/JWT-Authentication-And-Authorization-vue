import { useStore } from "@/store/store";
import router from "@/router"
import {ToastProgrammatic as Toast} from 'buefy'

const jwtUtils = {

    status: {
        valid: 'valid',
        invalid: 'invalid',
        expired: 'expired',
        margin: 'margin'
    },

    loadToken: function () {
        try {
            let data = null

            const token = JSON.parse(localStorage.getItem('store')).token //customToken === "" ? localStorage.getItem('store').token : customToken
            const jwtObj = this.parseJwt(token)

            const status = this.validateJwt(jwtObj)

            switch (status) {
                case this.status.valid:
                    data = { token, jwtObj }
                    break
                case this.status.margin:
                    data = { token, jwtObj }
                    setTimeout(() => {
                        this.refreshJwt().then()
                    }, 5000)
                    break
                case this.status.expired:
                    console.error('Token expired!')
                    // this.logoutTheUser()
                    break
                case this.status.invalid:
                    console.error('Token invalid!')
                    // this.logoutTheUser()
                    break
            }
            // console.log(data);
            return data
        }
        catch (e) {
            console.error(e.message)
            // this.logoutTheUser()

            return null
        }
    },
    validateToken: function () {
        try {
            let isValid = true

            const token = localStorage.getItem('token')
            const jwtObj = this.parseJwt(token)

            const status = this.validateJwt(jwtObj)

            switch (status) {
                case this.status.valid:
                    isValid = true
                    break
                case this.status.margin:
                    isValid = true
                    break
                case this.status.expired:
                    console.error('Token expired!')
                    // this.logoutTheUser()
                    isValid = false
                    break
                case this.status.invalid:
                    console.error('Token invalid!')
                    // this.logoutTheUser()
                    isValid = false
                    break
            }
            return isValid
        }
        catch (e) {
            console.error(e.message)
            // this.logoutTheUser()

            return false
        }
    },

    parseJwt: function (token) {
        try {
            return atob(token.split('.')[1])
        }
        catch (e) {
            throw "Token parsing failed!"
        }
    },

    validateJwt: function (jwtObj) {
        try {
            let status = this.status.valid

            const createdTime = jwtObj.iat
            const expireTime = jwtObj.exp
            const refreshMargin = jwtObj.rfh
            const currTime = Date.now() / 1000
            const timespan = currTime - createdTime


            if (currTime >= expireTime) {
                status = this.status.expired
            }

            if (timespan >= refreshMargin / 1000) {
                status = this.status.margin
            }

            return status
        }
        catch {
            return this.status.invalid
        }
    },
    logoutTheUser: function (manualLogOut = false) {

        if (localStorage.getItem('store') != null) {
            const piniaStore = useStore();
            piniaStore.$reset();
        }

        if (router.currentRoute.name !== 'home') {
            if (manualLogOut) {
                router.replace({ path: '' }).then(() => { router.go() })
            }
            else {
                const params = {
                    type: 'is-warning',
                    message: 'Session expired!. Please login again'
                }
                Toast.open(params)
                setTimeout(() => {
                    router.replace({ path: 'user' }).then(() => { router.go() })
                }, 100)
                // router.push('/home');
            }
        }
    }
}

export default jwtUtils
