import axios from 'axios'
import { defineStore } from 'pinia'
import { apiUrl } from '../utils/url'
import Swal from 'sweetalert2'
import { googleFirebaseLogin, facebookFirebaseLogin, twitterFirebaseLogin } from '../utils/firebaseConfig'


export const useUserStore = defineStore('user', {
    state: () => ({
        isLoggedIn: false,
        user: {},
    }),
    actions: {
        async handleLoginUsingGoogleFirabase() {
            try {
                const response = await googleFirebaseLogin()
                const { data } = await axios({
                    method: 'post',
                    url: apiUrl + '/user/login-firebase',
                    data: {
                        response
                    }
                })
                localStorage.setItem('access_token', data.access_token)
                this.isLoggedIn = true
                this.router.push('/')
                this.fetchDetailUser()
                Swal.fire({
                    icon: 'success',
                    title: 'Horray...',
                    text: 'Login success'
                })
            } catch (err) {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: err.response.data.message,
                    timer: 1500
                })
            }
        },
        async handleLoginUsingFecebookFirabase() {
            try {
                const response = await facebookFirebaseLogin()
                const { data } = await axios({
                    method: 'post',
                    url: apiUrl + '/user/login-firebase',
                    data: {
                        response
                    }
                })
                localStorage.setItem('access_token', data.access_token)
                this.isLoggedIn = true
                this.router.push('/')
                this.fetchDetailUser()
                Swal.fire({
                    icon: 'success',
                    title: 'Horray...',
                    text: 'Login success'
                })
            } catch (err) {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: err.response.data.message,
                    timer: 1500
                })
            }
        },
        async handleLoginUsingTwitterFirabase() {
            try {
                const response = await twitterFirebaseLogin()
                const { data } = await axios({
                    method: 'post',
                    url: apiUrl + '/user/login-firebase',
                    data: {
                        payload: response
                    }
                })
                localStorage.setItem('access_token', data.access_token)
                this.isLoggedIn = true
                this.router.push('/')
                this.fetchDetailUser()
                Swal.fire({
                    icon: 'success',
                    title: 'Horray...',
                    text: 'Login success'
                })
            } catch (err) {
                console.log(err)
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: err.response.data.message,
                    timer: 1500
                })
            }
        },
        async handleRegister(name, email, password) {
            try {
                const { data } = await axios({
                    method: 'post',
                    url: apiUrl + '/user/register',
                    data: {
                        name, email, password
                    }
                })
                Swal.fire({
                    icon: 'success',
                    title: 'Success...',
                    text: data.message
                })
            } catch (err) {
                Swal.fire({
                    icon: 'error',
                    title: 'Error...',
                    text: err.response.data.message
                })
            }
        },
        async handleEmailConfirmation(email, token) {
            try {
                const { data } = await axios({
                    method: 'post',
                    url: apiUrl + '/user/confirmation',
                    data: {
                        email, token
                    }
                })
                this.router.push('/login')
                Swal.fire({
                    icon: 'success',
                    title: 'Success...',
                    text: data.message
                })
            } catch (err) {
                Swal.fire({
                    icon: 'error',
                    title: 'Error...',
                    text: err.response.data.message
                })
            }
        },

        async handleLogin(email, password) {
            try {
                const { data } = await axios({
                    method: 'post',
                    url: apiUrl + '/user/login',
                    data: {
                        email, password
                    }
                })
                localStorage.setItem('access_token', data.access_token)
                this.isLoggedIn = true
                this.router.push('/')
                this.fetchDetailUser()
                Swal.fire({
                    icon: 'success',
                    title: 'Horray...',
                    text: 'Login success'
                })
            } catch (err) {
                if (err.response.data.message === 'Pending Account. Please Verify Your Email!') {
                    Swal.fire({
                        icon: 'error',
                        title: 'Error...',
                        text: err.response.data.message
                    })
                    this.router.push('/confirmation')
                } else {
                    Swal.fire({
                        icon: 'error',
                        title: 'Error...',
                        text: err.response.data.message
                    })
                    this.router.push('/login')
                }
            }
        },
        async fetchDetailUser() {
            try {
                const { data } = await axios({
                    method: 'get',
                    url: apiUrl + '/user/profile',
                    headers: {
                        access_token: localStorage.access_token
                    }
                })
                this.user = data
            } catch (err) {
                localStorage.clear()
                this.router.push('/login')
            }
        },
        async handleUpdateProfile(inpuData) {
            try {
                const { data } = await axios({
                    method: 'put',
                    url: apiUrl + '/user/edit',
                    headers: {
                        access_token: localStorage.access_token
                    },
                    data: inpuData
                })
                Swal.fire({
                    icon: 'success',
                    title: 'Horray...',
                    text: data.message
                })
            } catch (err) {
                Swal.fire({
                    icon: 'error',
                    title: 'Error...',
                    text: err.response.data.message
                })
            }
        },

        async subcribe() {
            try {
                const { data } = await axios({
                    method: 'patch',
                    url: apiUrl + '/user/subscription',
                    headers: {
                        access_token: localStorage.access_token
                    }
                })
                Swal.fire({
                    icon: 'success',
                    title: 'Horray...',
                    text: 'Your account are premium now'
                })
                await this.fetchDetailUser()
            } catch (err) {
                Swal.fire({
                    icon: 'error',
                    title: 'Error...',
                    text: err.response.data.message
                })
            }
        },


        async generateTokenMitrans() {
            try {
                const { data } = await axios({
                    method: 'post',
                    url: apiUrl + '/user/generate-subscription-token',
                    headers: {
                        access_token: localStorage.access_token
                    },
                })

                const callback = this.subcribe

                window.snap.pay(data.token, {
                    onSuccess: function (result) {
                        /* You may add your own implementation here */
                        callback()
                    },
                })
            } catch (err) {
                Swal.fire({
                    icon: 'error',
                    title: 'Error...',
                    text: err.response.data.message
                })
            }
        },
        async handleLoginUsingGoogle(token) {
            try {
                const { data } = await axios({
                    method: 'post',
                    url: apiUrl + '/user/login-by-google',
                    data: {
                        token_google: token
                    }
                })
                localStorage.setItem('access_token', data.access_token)
                this.isLoggedIn = true
                this.router.push('/')
                this.fetchDetailUser()
                Swal.fire({
                    icon: 'success',
                    title: 'Horray...',
                    text: 'Login success'
                })
            } catch (err) {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: err.response.data.message,
                    timer: 1500
                })
            }
        }
        ,
        handleChangeLoginStatus(status) {
            this.isLoggedIn = status
        },
        handleLogout() {
            localStorage.clear()
            this.isLoggedIn = false
            this.router.push('/login')
        },

    }
})