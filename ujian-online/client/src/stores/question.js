import axios from 'axios'
import { defineStore } from 'pinia'
import { apiUrl } from '../utils/url'
import Swal from 'sweetalert2'

export const useQuestionStore = defineStore('question', {
    state: () => ({
        questions: {},
        question: {}
    }),
    actions: {
        async handleAddQuestion(formInput) {
            try {
                const { data } = await axios({
                    method: 'post',
                    url: apiUrl + '/questions',
                    headers: {
                        access_token: localStorage.access_token
                    },
                    data: formInput
                })
                Swal.fire({
                    icon: 'success',
                    title: 'Success...',
                    text: 'Success add questions'
                })
            } catch (err) {
                Swal.fire({
                    icon: 'error',
                    title: 'Error...',
                    text: err.response.data.message
                })
            }
        },

        async fetchQuestion() {
            try {
                const { data } = await axios({
                    method: 'get',
                    url: apiUrl + '/questions',
                    headers: {
                        access_token: localStorage.access_token
                    }
                })
                this.questions = data
                console.log(data)
            } catch (err) {
                console.log(err)
            }
        }
    }
})