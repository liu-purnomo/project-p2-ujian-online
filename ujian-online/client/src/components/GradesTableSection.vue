<script>
import { mapActions, mapState } from 'pinia'
import { useGradeStore } from '../stores/grade'
import { useUserStore } from '../stores/user'

export default {
  name: 'GradesTableSection',
  computed: {
    ...mapState(useGradeStore, ['grades']),
    ...mapState(useUserStore, ['user'])
  },
  methods: {
    ...mapActions(useGradeStore, ['fetchGradeUser'])
  },
  created() {
    this.fetchGradeUser()
  }
}
</script>

<template>
  <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4">
    <div class="d-block mb-2 mb-md-0">
      <h2 class="h4">Users Grade List</h2>
      <p class="mb-0">All user exam result.</p>
    </div>
    <div class="btn-toolbar mb-2 mb-md-0">
      <div class="btn-group ms-2 ms-lg-3">
        <RouterLink type="button" class="btn btn-outline-dark" to="/">Dashboard</RouterLink>
      </div>
    </div>
  </div>
  <!-- Page Header End -->
  <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-2">
    <div class="col-lg-9 d-md-flex">
      <div class="input-group me-2 me-lg-3 fmxw-300">
        <span class="input-group-text">
          <i class="bi bi-search"></i>
        </span>
        <input type="text" class="form-control" placeholder="Search examination result" />
      </div>
      <select class="form-select d-none d-md-inline" aria-label="Message select example 2">
        <option selected>All</option>
        <option value="1">Premium</option>
        <option value="2">Free</option>
      </select>
    </div>
    <div class="btn-toolbar mb-md-0">
      <a href="#" class="btn btn-primary-soft d-inline-flex align-items-center">
        <i class="bi bi-gear fs-6 fw-bold me-2"></i>
        Setting
      </a>
    </div>
  </div>

  <!-- TABELLL -->
  <div class="card card-body shadow border-0 table-wrapper table-responsive">
    <table class="table user-table table-hover align-items-center">
      <thead>
        <tr>
          <th class="border-bottom">User</th>
          <th class="border-bottom">Exam</th>
          <th class="border-bottom">Tanggal</th>
          <th class="border-bottom">Grade</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="grade in grades" :key="grade.id">
          <td>
            <a href="#" class="d-flex align-items-center">
              <img :src="user.avatar" class="avatar avatar-xxs rounded-circle me-3" alt="Avatar" />
              <div class="d-block">
                <span class="fw-bold">{{ user.name }}</span>
              </div>
            </a>
          </td>
          <td>
            <span class="fw-normal">{{ grade.Exam.title }}</span>
          </td>
          <td><span class="fw-normal">12 Mei 2023</span></td>
          <td>
            <span class="fw-normal text-success">{{ grade.grade }}</span>
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
