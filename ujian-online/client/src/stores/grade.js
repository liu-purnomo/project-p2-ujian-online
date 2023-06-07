import axios from 'axios'
import { defineStore } from 'pinia'
import { apiUrl } from '../utils/url'
import Swal from 'sweetalert2'

export const useGradeStore = defineStore('grade', {
    state: () => ({
        grades: []
    }),
    actions: {
        async fetchGradeUser() {
            try {
                const { data } = await axios({
                    method: 'get',
                    url: apiUrl + '/grades/list',
                    headers: {
                        access_token: localStorage.access_token
                    },
                })
                this.grades = data
            } catch (err) {
                console.log(err.response.data.message)
            }
        }
    }
})