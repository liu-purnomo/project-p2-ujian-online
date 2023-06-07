import axios from 'axios'
import { defineStore } from 'pinia'
import { apiUrl } from '../utils/url'
import Swal from 'sweetalert2'

export const useExamStore = defineStore('exam', {
    state: () => ({
        exams: {},
        exam: {},
        examQuestions: {},
        answered: [],
        examSession: {},
        detailAnswer: {}
    }),
    actions: {
        async handleAddExam(exam) {
            try {
                const { data } = await axios({
                    method: 'post',
                    url: apiUrl + '/exams',
                    headers: {
                        access_token: localStorage.access_token
                    },
                    data: exam
                })
                this.fetchExam()
                Swal.fire({
                    icon: 'success',
                    title: 'Success...',
                    text: 'New exam created'
                })
                this.router.push('/dashboard')
            } catch (err) {
                Swal.fire({
                    icon: 'error',
                    title: 'Error...',
                    text: err.response.data.message
                })
            }
        },

        async fetchExam() {
            try {
                const { data } = await axios({
                    method: 'get',
                    url: apiUrl + '/exams',
                    headers: {
                        access_token: localStorage.access_token
                    },
                })
                this.exams = data
            } catch (err) {
                Swal.fire({
                    icon: 'error',
                    title: 'Error...',
                    text: err.response.data.message
                })
            }
        },

        async fetchListExamForUser() {
            try {
                const { data } = await axios({
                    method: 'get',
                    url: apiUrl + '/exams/list',
                    headers: {
                        access_token: localStorage.access_token
                    },
                })

                this.exams = data
            } catch (err) {
                Swal.fire({
                    icon: 'error',
                    title: 'Error...',
                    text: err.response.data.message
                })
            }
        },

        async handleStartExam(id, pin) {
            try {
                const { data } = await axios({
                    method: 'post',
                    url: apiUrl + '/exams/start/' + id,
                    headers: {
                        access_token: localStorage.access_token
                    },
                    data: {
                        pin
                    }
                })
                this.examQuestions = data
                Swal.fire({
                    icon: 'success',
                    title: 'Start...',
                    text: 'Timer starting now'
                })
                this.router.push('/examination/1')
            } catch (err) {
                console.log(err)
                Swal.fire({
                    icon: 'error',
                    title: 'Error...',
                    text: err.response.data.message
                })
            }
        },

        async fetchExamDetail(id) {
            try {
                const { data } = await axios({
                    method: 'get',
                    url: apiUrl + '/exams/detail/' + id,
                    headers: {
                        access_token: localStorage.access_token
                    },
                })
                this.exam = data
            } catch (err) {
                console.log(err)
                Swal.fire({
                    icon: 'error',
                    title: 'Error...',
                    text: err.response.data.message
                })
            }
        },

        async fetchExamSession() {
            try {
                const { data } = await axios({
                    method: 'get',
                    url: apiUrl + '/exams/session/',
                    headers: {
                        access_token: localStorage.access_token
                    },
                })
                this.examSession = data
            } catch (err) {
                Swal.fire({
                    icon: 'error',
                    title: 'Error...',
                    text: err.response.data.message
                })
            }
        },

        async fetchExamQuestion() {
            try {
                const { data } = await axios({
                    method: 'get',
                    url: apiUrl + '/exams/question',
                    headers: {
                        access_token: localStorage.access_token
                    },
                })
                this.examQuestions = data
                await this.handleGetMyAnswer(data[0].Session.ExamId)
            } catch (err) {
                console.log(err)
                Swal.fire({
                    icon: 'error',
                    title: 'Error...',
                    text: err.response.data.message
                })
            }
        },

        async handleChangeStatus(id) {
            try {
                const { data } = await axios({
                    method: 'patch',
                    url: apiUrl + '/exams/change-status/' + id,
                    headers: {
                        access_token: localStorage.access_token
                    },
                })
                this.fetchExam()
                Swal.fire({
                    icon: 'success',
                    title: 'Success...',
                    text: data.message
                })
            } catch (err) {
                console.log(err)
            }
        },
        async handleChangeVisibility(id) {
            try {
                const { data } = await axios({
                    method: 'patch',
                    url: apiUrl + '/exams/change-visibility/' + id,
                    headers: {
                        access_token: localStorage.access_token
                    },
                })
                this.fetchExam()
                Swal.fire({
                    icon: 'success',
                    title: 'Success...',
                    text: data.message
                })
            } catch (err) {
                console.log(err)
                Swal.fire({
                    icon: 'error',
                    title: 'Error...',
                    text: err.response.data.message
                })
            }
        },
        async handleGenerateNewPin(id) {
            try {
                const { data } = await axios({
                    method: 'patch',
                    url: apiUrl + '/exams/generate-new-pin/' + id,
                    headers: {
                        access_token: localStorage.access_token
                    },
                })
                this.fetchExam()
                Swal.fire({
                    icon: 'success',
                    title: 'Success...',
                    text: data.message
                })
            } catch (err) {
                console.log(err)
            }
        },
        async handleDeleteExam(id) {
            try {
                const { data } = await axios({
                    method: 'delete',
                    url: apiUrl + '/exams/' + id,
                    headers: {
                        access_token: localStorage.access_token
                    },
                })
                this.fetchExam()
                Swal.fire({
                    icon: 'success',
                    title: 'Success...',
                    text: data.message
                })
            } catch (err) {
                console.log(err)
            }
        },
        async handleAnswerExam(questionsNumber, answer, examId) {
            try {
                const { data } = await axios({
                    method: 'post',
                    url: apiUrl + '/exams/answer/' + questionsNumber,
                    headers: {
                        access_token: localStorage.access_token
                    },
                    data: {
                        answer: answer
                    }
                })
                await this.handleGetMyAnswer(data.ExamId)
            } catch (err) {
                Swal.fire({
                    icon: 'error',
                    title: 'Error...',
                    text: err.response.data.message
                })
                this.router.push('/')
            }
        },

        async handleGetMyAnswer(ExamId) {
            try {
                const { data } = await axios({
                    method: 'get',
                    url: apiUrl + '/exams/my-answer/' + ExamId,
                    headers: {
                        access_token: localStorage.access_token
                    },
                })
                this.answered = data
            } catch (err) {
                console.log(err.response.data.message)
            }
        },

        async fetchDetailAnswer(questionNumber) {
            try {
                const { data } = await axios({
                    method: 'get',
                    url: apiUrl + '/exams/my-answer/detail/' + questionNumber,
                    headers: {
                        access_token: localStorage.access_token
                    },
                })
                this.detailAnswer = data
            } catch (err) {
                console.log(err.response.data.message)
            }
        }
    }
})