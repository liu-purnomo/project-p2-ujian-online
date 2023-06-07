<script>
import HeaderSection from '../components/HeaderSection.vue'
import SideProfileSection from '../components/SideProfileSection.vue'
import QuestionTable from '../components/QuestionTable.vue'

export default {
  components: {
    HeaderSection,
    SideProfileSection,
    QuestionTable
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
            <div class="d-block mb-2 mb-md-0">
              <h2 class="h4">Questions List</h2>
              <p class="mb-0">List question</p>
            </div>
            <div class="btn-toolbar mb-2 mb-md-0">
              <div class="btn-group ms-2 ms-lg-3">
                <RouterLink to="/add-question">
                  <button type="button" class="btn btn-outline-dark">
                    <i class="bi bi-plus-circle me-2"></i> Add new question
                  </button>
                </RouterLink>
              </div>
            </div>
          </div>
          <div
            class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-2"
          >
            <div class="col-lg-9 d-md-flex">
              <div class="input-group me-2 me-lg-3 fmxw-300">
                <span class="input-group-text">
                  <i class="bi bi-search"></i>
                </span>
                <input type="text" class="form-control" placeholder="Search Question" />
              </div>
            </div>
            <div class="btn-toolbar mb-md-0">
              <a href="#" class="btn btn-primary-soft d-inline-flex align-items-center">
                <i class="bi bi-cloud-download fs-6 fw-bold me-2"></i>
                Import Question
              </a>
            </div>
          </div>
          <QuestionTable />
        </div>
      </div>
    </div>
  </main>
</template>
