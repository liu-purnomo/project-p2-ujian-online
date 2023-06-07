<script>
import HeaderSection from '../components/HeaderSection.vue'
import SideProfileSection from '../components/SideProfileSection.vue'
import FormAddQuestion from '../components/FormAddQuestion.vue'
import FormExam from '../components/FormExam.vue'
import { mapState, mapActions } from 'pinia'
import { useExamStore } from '../stores/exam'

export default {
  name: 'DashboardView',
  components: {
    HeaderSection,
    SideProfileSection,
    FormAddQuestion,
    FormExam
  },
  computed: {
    ...mapState(useExamStore, ['exams'])
  },
  methods: {
    ...mapActions(useExamStore, [
      'fetchExam',
      'handleChangeStatus',
      'handleGenerateNewPin',
      'handleDeleteExam',
      'handleChangeVisibility'
    ])
  },
  created() {
    this.fetchExam()
  }
}
</script>

<template>
  <HeaderSection />
  <main>
    <div class="container">
      <div class="row g-4 mb-4">
        <SideProfileSection />
        <div class="col-lg-8 vstack gap-4">
          <div
            class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4"
          >
            <div class="col-lg-9 d-md-flex">
              <div class="input-group me-2 me-lg-3 fmxw-300">
                <span class="input-group-text">
                  <i class="bi bi-search"></i>
                </span>
                <input type="text" class="form-control" placeholder="Search examination" />
              </div>
              <select class="form-select d-none d-md-inline" aria-label="Message select example 2">
                <option selected>All</option>
                <option value="1">Premium</option>
                <option value="2">Free</option>
              </select>
            </div>
            <div class="btn-toolbar mb-md-0">
              <a
                href="#"
                class="btn btn-primary-soft d-inline-flex align-items-center"
                data-bs-toggle="modal"
                data-bs-target="#modalCreateEvents"
              >
                <i class="bi bi-plus-circle fs-6 fw-bold me-2"></i>
                New Exam
              </a>
            </div>
          </div>

          <div class="card card-body shadow border-0 table-wrapper table-responsive">
            <table class="table user-table table-hover align-items-center">
              <thead>
                <tr>
                  <th class="border-bottom">Title</th>
                  <th class="border-bottom">Questions</th>
                  <th class="border-bottom">Durations</th>
                  <th class="border-bottom">Visibility</th>
                  <th class="border-bottom">Status</th>
                  <th class="border-bottom">PIN</th>
                  <th class="border-bottom">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="exam in exams.exams" :key="exam.id">
                  <td>
                    <a href="#" class="d-flex align-items-center">
                      <span class="fw-bold">{{ exam.title }}</span>
                    </a>
                  </td>
                  <td>
                    <span class="fw-normal">{{ exam.totalQuestions }}</span>
                  </td>
                  <td>
                    <span class="fw-normal">{{ exam.duration }} menit</span>
                  </td>
                  <td>
                    <span v-if="exam.isOpen" class="fw-normal text-success"> Open </span>
                    <span v-else class="fw-normal text-danger"> Close </span>
                  </td>
                  <td>
                    <span v-if="exam.isPremium" class="text-success fw-normal"> Premium </span>
                    <span v-else class="fw-normal"> Free </span>
                  </td>
                  <td>
                    <span class="fw-normal">{{ exam.pin }}</span>
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
                        <a
                          @click.prevent="handleChangeVisibility(exam.id)"
                          class="dropdown-item d-flex align-items-center"
                          href="#"
                        >
                          <i class="bi bi-toggle-off fs-6 text-success me-2"></i>
                          Change Visibility
                        </a>
                        <a
                          @click.prevent="handleChangeStatus(exam.id)"
                          class="dropdown-item d-flex align-items-center"
                          href="#"
                        >
                          <i class="bi bi-currency-dollar me-2"></i>
                          Change Status
                        </a>
                        <a
                          @click.prevent="handleGenerateNewPin(exam.id)"
                          class="dropdown-item d-flex align-items-center"
                          href="#"
                        >
                          <i class="bi bi-key me-2"></i>
                          Generate new pin
                        </a>
                      </div>
                    </div>

                    <svg
                      @click.prevent="handleDeleteExam(exam.id)"
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
              <div class="fw-normal small mt-4 mt-lg-0">
                Showing <b>5</b> out of <b>25</b> entries
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
  <div class="modal fade" id="modalCreateEvents" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="modalLabelCreateAlbum">Create new exam</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <FormExam />
      </div>
    </div>
  </div>
</template>
