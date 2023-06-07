<script>
import { mapActions, mapState } from 'pinia'
import { useExamStore } from '../stores/exam'
import QuestionsCard from '../components/QuestionsCard.vue'
import Swal from 'sweetalert2'
import { useUserStore } from '../stores/user'

export default {
  name: 'ExaminationView',
  data() {
    // const newYear = new Date(now.getTime() + 60 * 60 * 1000)
    return {
      questionItem: {},
      time: null,
      dataIndex: 0,
      questionNumber: null
    }
  },
  computed: {
    ...mapState(useExamStore, ['examQuestions', 'answered']),
    ...mapState(useUserStore, ['user'])
  },
  methods: {
    ...mapActions(useExamStore, ['fetchExamQuestion', 'fetchDetailAnswer']),
    async nextNumber() {
      this.questionNumber = this.questionNumber - 1
      this.dataIndex = this.dataIndex - 1
      this.questionItem = this.examQuestions[this.dataIndex]
      await this.fetchDetailAnswer(this.questionNumber)
      this.$router.push(`/examination/${this.questionNumber}`)
      this.time = new Date(this.questionItem.Session.timeStop) - new Date()
    },

    async prevNumber() {
      this.questionNumber = this.questionNumber + 1
      this.dataIndex = this.dataIndex + 1
      this.questionItem = this.examQuestions[this.dataIndex]
      await this.fetchDetailAnswer(this.questionNumber)
      this.$router.push(`/examination/${this.questionNumber}`)
    },

    async goToPage(pageNumber) {
      this.questionNumber = pageNumber
      this.dataIndex = pageNumber - 1
      await this.fetchDetailAnswer(this.questionNumber)
      this.$router.push(`/examination/${this.questionNumber}`)
      this.questionItem = this.examQuestions[this.dataIndex]
    },
    handleClickDone() {
      Swal.fire({
        icon: 'success',
        title: 'Done...',
        text: 'Congratulation, you finish this exam'
      })
      this.$router.push(`/`)
    }
  },
  async created() {
    this.questionNumber = Number(this.$route.params.number)
    this.dataIndex = Number(this.$route.params.number) - 1
    await this.fetchExamQuestion()
    await this.fetchDetailAnswer(this.questionNumber)
    this.questionItem = this.examQuestions[this.dataIndex]
    this.time = new Date(this.questionItem.Session.timeStop) - new Date()
  },
  components: { QuestionsCard }
}
</script>

<template>
  <header class="navbar-light fixed-top header-static bg-mode">
    <!-- Logo Nav START -->

    <nav class="navbar navbar-expand-lg">
      <div class="container">
        <!-- Logo START -->
        <div class="navbar-brand">
          <img class="navbar-brand-item" src="/assets/images/logo.png" alt="logo" />
        </div>
        <!-- Logo END -->
        <!-- Nav right START -->
        <ul class="nav flex-nowrap align-items-center ms-sm-3 list-unstyled">
          <li class="nav-item">
            <span class="nav-link disabled" href="#">
              <vue-countdown
                :time="time"
                :interval="100"
                v-slot="{ hours, minutes, seconds, milliseconds }"
              >
                Time Stop <span class="text-danger fw-bold" id="demo"></span>
                <strong> {{ hours }} : {{ minutes }} : {{ seconds }} </strong>
              </vue-countdown>
            </span>
          </li>

          <li class="nav-item ms-2">
            <div class="nav-link btn icon-md p-0">
              <img class="avatar-img rounded-2" :src="user.avatar" alt="" />
            </div>
          </li>
        </ul>
        <!-- Nav right END -->
      </div>
    </nav>
  </header>
  <!-- ======================= Header END -->

  <!-- **************** MAIN CONTENT START **************** -->
  <main>
    <!-- Container START -->
    <div class="container">
      <!--UJIAN PAGE START-->
      {{ answered.length }}
      <div class="row g-4">
        <div class="col-md-6 col-lg-6 vstack gap-4">
          <div class="card">
            <QuestionsCard
              :questionItem="questionItem"
              :questionNumber="questionNumber"
              :dataIndex="dataIndex"
            />
            <div class="card-footer">
              <div class="d-flex align-items-center justify-content-between">
                <div class="d-flex">
                  <button
                    :disabled="questionNumber <= 1"
                    @click.prevent="nextNumber"
                    class="btn btn-outline-primary"
                  >
                    <i class="bi bi-arrow-left-circle me-2"></i>Sebelumnya
                  </button>
                </div>
                <div class="d-flex">
                  <button
                    @click.prevent="prevNumber"
                    :disabled="questionNumber >= examQuestions.length"
                    class="btn btn-outline-primary"
                  >
                    Berikutnya<i class="bi bi-arrow-right-circle ms-2"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-lg-6 mb-6">
          <div class="row g-4">
            <div>
              <div class="card">
                <div class="card-header pb-0 border-0">
                  <h5 class="card-title mb-0">Questions Number</h5>
                </div>
                <div class="card-body">
                  <a
                    @click.prevent="goToPage(item.questionNumber)"
                    v-for="item in examQuestions"
                    key="item.id"
                    :class="
                      item.questionNumber === questionNumber ? 'btn-primary' : 'btn-outline-primary'
                    "
                    class="btn justify-item-center text-center rounded-circle icon-md m-1"
                  >
                    {{ item.questionNumber }}
                  </a>
                  <div class="d-grid mt-3">
                    <button class="btn btn-outline-success mt-1 mb-1">
                      {{ answered.length }} Soal sudah dijawab
                    </button>
                    <button class="btn btn-outline-danger mt-1 mb-1">
                      {{ examQuestions.length - answered.length }} Soal belum dijawab
                    </button>
                    <button
                      @click.prevent="handleClickDone"
                      v-if="answered.length >= examQuestions.length"
                      class="btn btn-primary mt-1"
                    >
                      Done
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--UJIAN PAGE END-->
    </div>
    <!---CONTAINER CLOSE TAG-->
  </main>
  <!-- **************** MAIN CONTENT END **************** -->
</template>
