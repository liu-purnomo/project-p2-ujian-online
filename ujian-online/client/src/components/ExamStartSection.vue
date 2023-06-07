<script>
import { mapActions, mapState } from 'pinia'
import { useExamStore } from '../stores/exam'

export default {
  name: 'ExamStartSection',
  data() {
    return {
      pin: ''
    }
  },
  computed: {
    ...mapState(useExamStore, ['exam'])
  },
  methods: {
    ...mapActions(useExamStore, ['fetchExamDetail', 'handleStartExam', 'handleGetMyAnswer']),

    handleSubmitFormStartExam() {
      const id = this.$route.params.id
      this.handleStartExam(id, this.pin)
      this.handleGetMyAnswer(id)
    }
  },
  created() {
    const id = this.$route.params.id
    this.fetchExamDetail(id)
  }
}
</script>

<template>
  <div class="row g-4 mb-4">
    <!-- Right sidebar START -->
    <div class="col-md-6">
      <div class="row g-4">
        <!-- Card follow START -->
        <div class="col-lg-12">
          <div class="card">
            <!-- Card header START -->
            <div class="card-header pb-0 border-0">
              <h2 class="text-danger"><i class="bi bi-exclamation-diamond-fill"></i> Warning</h2>
            </div>
            <!-- Card header END -->
            <!-- Card body START -->
            <div class="card-body">
              <div class="d-grid mt-3">
                <p class="lead">Read this carefully</p>
                <div class="alert alert-warning" role="alert">
                  <strong>Note: </strong>Anda hanya bisa mengikuti ujian ini sekali!
                </div>
                <ul>
                  <li>Waktu akan dihitung dari anda klik tombol start.</li>
                  <li>
                    Pastikan Anda menyelesaikan ujian sebelum waktu berakhir, waktu bisa dilihat di
                    pojok kanan atas.
                  </li>
                  <li>
                    Jika waktu berakhir, dan anda belum selesai ujian, maka anda dianggap
                    <strong><i>SUDAH</i></strong> mengikuti ujian, dan nilai ujian berdasarkan
                    berapa banyak <strong>jawaban benar</strong> yang anda pilih!
                  </li>
                  <li>Ingat, anda hanya boleh mengerjakan ujian sekali!</li>
                  <li>Pastikan jaringan internet anda normal</li>
                </ul>
              </div>
            </div>
            <!-- Card body END -->
          </div>
        </div>
        <!-- Card follow START -->
      </div>
    </div>
    <!-- Right sidebar END -->
    <!-- Main content START -->
    <div class="col-md-6">
      <!-- Card feed item START -->
      <div class="card">
        <div class="card-body pb-2 mb-4">
          <div class="vstack gap-2">
            <!-- Feed poll item -->
            <div>
              <h3 class="text-center">{{ exam.title }}</h3>

              <p class="lead text-center">{{ exam.description }}</p>

              <table class="table user-table table-hover align-items-center">
                <tr>
                  <th>Status</th>
                  <td v-if="exam.isPremium">Premium</td>
                  <td v-else>Free</td>
                </tr>
                <tr>
                  <th>Total question</th>
                  <td>{{ exam.totalQuestions }} questions</td>
                </tr>
                <tr>
                  <th>Duration</th>
                  <td>{{ exam.duration }} minutes</td>
                </tr>
              </table>
              <form @submit.prevent="handleSubmitFormStartExam">
                <div class="d-flex justify-content-between">
                  <div class="col-6 form-group">
                    <input
                      v-model="pin"
                      name="token"
                      type="text"
                      class="form-control"
                      placeholder="input PIN here"
                      required
                    />
                  </div>
                  <div>
                    <RouterLink to="/">
                      <button class="btn btn-danger mx-2">Cancel</button>
                    </RouterLink>
                    <button class="btn btn-success px-4" type="submit">Start</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <!-- Card body END -->
      </div>
      <!-- Card feed item END -->
    </div>
    <!-- Main content END -->
  </div>
  <!-- Page Confirmation Start Exam END -->
</template>
