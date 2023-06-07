<script>
import { mapState } from 'pinia'
import { useUserStore } from '../stores/user'

export default {
  name: 'ExamCard',
  props: ['exam'],
  computed: {
    ...mapState(useUserStore, ['user'])
  }
}
</script>

<template>
  <!-- Card feed item START -->
  <div class="card">
    <!-- Card header START -->
    <div class="card-header border-0 pb-0">
      <div class="d-flex align-items-center justify-content-between">
        <div class="d-flex align-items-center">
          <div>
            <h6 class="card-title mb-0">
              <a href="#"> {{ exam.title }} </a>
            </h6>
            <div class="nav nav-divider">
              <p v-if="exam.isOpen" class="nav-item mb-0 small">Open</p>
              <p v-else class="nav-item mb-0 small">Close</p>
              <span
                class="nav-item small"
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                title="Public"
              >
                <i class="bi bi-globe"></i>
              </span>
            </div>
          </div>
        </div>

        <div>
          <a
            @click.prevent="this.$router.push(`/exam-start/${exam.id}`)"
            href="#"
            class="btn btn-primary-soft"
          >
            Take this Exam
          </a>
        </div>
        <!-- Card share action END -->
      </div>
    </div>

    <div class="card-body">
      <p>{{ exam.description }}</p>

      <ul
        class="nav nav-pills nav-pills-light nav-fill nav-stack small border-top border-bottom py-1 mb-1"
      >
        <li class="nav-item">
          <span v-if="exam.isPremium" class="nav-link mb-0">
            <i class="bi bi-globe pe-1"></i> Premium
          </span>
          <span v-else class="nav-link mb-0"><i class="bi bi-globe pe-1"></i> free</span>
        </li>
        <li class="nav-item">
          <span class="nav-link mb-0">
            <i class="bi bi-mortarboard pe-1"></i> {{ exam.totalQuestions }} Soal
          </span>
        </li>
        <li class="nav-item">
          <a v-if="exam.isPremium && !user.isPremium" class="nav-link mb-0"
            ><i class="bi bi-key pe-1"></i> ******
          </a>
          <span v-else class="nav-link mb-0"><i class="bi bi-key pe-1"></i> {{ exam.pin }}</span>
        </li>
        <li class="nav-item">
          <a class="nav-link mb-0"><i class="bi bi-alarm pe-1"></i> {{ exam.duration }} m</a>
        </li>
      </ul>
    </div>
  </div>
  <!-- Card feed item END -->
</template>

<style scoped></style>
