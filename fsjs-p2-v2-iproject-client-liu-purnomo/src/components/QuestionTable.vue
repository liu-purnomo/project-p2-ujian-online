<script>
import { mapActions, mapState } from 'pinia'
import { useQuestionStore } from '../stores/question'

export default {
  name: 'QuestionsTable',
  computed: {
    ...mapState(useQuestionStore, ['questions'])
  },
  methods: {
    ...mapActions(useQuestionStore, ['fetchQuestion'])
  },
  created() {
    this.fetchQuestion()
  }
}
</script>

<template>
  <div class="card card-body shadow border-0 table-wrapper table-responsive">
    <table class="table user-table table-hover align-items-center">
      <thead>
        <tr>
          <th class="border-bottom w-25">Question</th>
          <th class="border-bottom">Status</th>
          <th class="border-bottom">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="question in questions.questions" :key="question.id">
          <td class="text-truncate" style="max-width: 500px">
            <a href="#" class="d-flex align-items-center">
              <span class="fw-bold text-truncate">{{ question.question }}</span>
            </a>
          </td>

          <td>
            <span v-if="question.isPremium" class="fw-normal">Premium</span>
            <span v-else class="fw-normal">Free</span>
          </td>
          <td>
            <div class="btn-group">
              <button
                class="btn btn-link text-dark dropdown-toggle-split m-0 p-0"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <svg
                  class="icon icon-xs"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"
                  ></path>
                </svg>
              </button>
              <div class="dropdown-menu dashboard-dropdown dropdown-menu-start mt-2 py-1">
                <a class="dropdown-item d-flex align-items-center" href="#">
                  <i class="bi bi-gear fs-6 text-success me-2"></i>
                  Edit
                </a>
                <a class="dropdown-item d-flex align-items-center" href="#">
                  <i class="bi bi-globe me-2"></i>
                  Change Status
                </a>
              </div>
            </div>

            <svg
              class="icon icon-xs text-danger ms-1"
              title="Delete"
              data-bs-toggle="tooltip"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </td>
        </tr>
      </tbody>
    </table>
    <div
      class="card-footer px-3 border-0 d-flex flex-column flex-lg-row align-items-center justify-content-between"
    >
      <nav aria-label="Page navigation example">
        <ul class="pagination mb-0">
          <li class="page-item">
            <a class="page-link" href="#">Previous</a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">1</a>
          </li>
          <li class="page-item active">
            <a class="page-link" href="#">2</a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">3</a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">4</a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">5</a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">Next</a>
          </li>
        </ul>
      </nav>
      <div class="fw-normal small mt-4 mt-lg-0">Showing <b>5</b> out of <b>25</b> entries</div>
    </div>
  </div>
</template>

<style scoped></style>
