<script>
import HeaderSection from '../components/HeaderSection.vue'
import SideProfileSection from '../components/SideProfileSection.vue'

export default {
  components: {
    HeaderSection,
    SideProfileSection
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
              <h2 class="h4">Detail Ujian 1</h2>
              <p class="mb-0">Informasi detail ujian 1</p>
            </div>
            <div class="btn-toolbar mb-2 mb-md-0">
              <div class="btn-group ms-2 ms-lg-3">
                <button type="button" class="btn btn-outline-danger">
                  <i class="bi bi-trash me-2"></i> Delete Exam
                </button>
              </div>
            </div>
          </div>
          <!-- Page Header End -->
          <div
            class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-2"
          >
            <div class="col-lg-9 d-md-flex">
              <div class="input-group me-2 me-lg-3 fmxw-300">
                <span class="input-group-text">
                  <i class="bi bi-search"></i>
                </span>
                <input type="text" class="form-control" placeholder="Search examination result" />
              </div>
            </div>
            <div class="btn-toolbar mb-md-0">
              <a href="#" class="btn btn-primary-soft d-inline-flex align-items-center">
                <i class="bi bi-cloud-download fs-6 fw-bold me-2"></i>
                Export
              </a>
            </div>
          </div>

          <!-- TABELLL -->
          <div class="card card-body shadow border-0 table-wrapper table-responsive">
            <table class="table user-table table-hover align-items-center">
              <thead>
                <tr>
                  <th class="border-bottom">User</th>
                  <th class="border-bottom">Tanggal</th>
                  <th class="border-bottom">Grade</th>
                  <th class="border-bottom">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <a href="#" class="d-flex align-items-center">
                      <img
                        src="/assets/images/user.png"
                        class="avatar avatar-xxs rounded-circle me-3"
                        alt="Avatar"
                      />
                      <div class="d-block">
                        <span class="fw-bold">Liu Purnomo</span>
                      </div>
                    </a>
                  </td>

                  <td><span class="fw-normal">12 Mei 2023</span></td>
                  <td><span class="fw-normal text-success">100</span></td>
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
                          <i class="bi bi-envelope fs-6 text-success me-2"></i>
                          Send result
                        </a>
                        <a class="dropdown-item d-flex align-items-center" href="#">
                          <i class="bi bi-globe me-2"></i>
                          Publish Result
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
                <tr>
                  <td>
                    <a href="#" class="d-flex align-items-center">
                      <img
                        src="/assets/images/user.png"
                        class="avatar avatar-xxs rounded-circle me-3"
                        alt="Avatar"
                      />
                      <div class="d-block">
                        <span class="fw-bold">Liu Purnomo</span>
                      </div>
                    </a>
                  </td>

                  <td><span class="fw-normal">12 Mei 2023</span></td>
                  <td><span class="fw-normal text-success">100</span></td>
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
                          <i class="bi bi-envelope fs-6 text-success me-2"></i>
                          Send result
                        </a>
                        <a class="dropdown-item d-flex align-items-center" href="#">
                          <i class="bi bi-globe me-2"></i>
                          Publish Result
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
                <tr>
                  <td>
                    <a href="#" class="d-flex align-items-center">
                      <img
                        src="/assets/images/user.png"
                        class="avatar avatar-xxs rounded-circle me-3"
                        alt="Avatar"
                      />
                      <div class="d-block">
                        <span class="fw-bold">Liu Purnomo</span>
                      </div>
                    </a>
                  </td>

                  <td><span class="fw-normal">12 Mei 2023</span></td>
                  <td><span class="fw-normal text-success">100</span></td>
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
                          <i class="bi bi-envelope fs-6 text-success me-2"></i>
                          Send result
                        </a>
                        <a class="dropdown-item d-flex align-items-center" href="#">
                          <i class="bi bi-globe me-2"></i>
                          Publish Result
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
                <tr>
                  <td>
                    <a href="#" class="d-flex align-items-center">
                      <img
                        src="/assets/images/user.png"
                        class="avatar avatar-xxs rounded-circle me-3"
                        alt="Avatar"
                      />
                      <div class="d-block">
                        <span class="fw-bold">Liu Purnomo</span>
                      </div>
                    </a>
                  </td>

                  <td><span class="fw-normal">12 Mei 2023</span></td>
                  <td><span class="fw-normal text-success">100</span></td>
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
                          <i class="bi bi-envelope fs-6 text-success me-2"></i>
                          Send result
                        </a>
                        <a class="dropdown-item d-flex align-items-center" href="#">
                          <i class="bi bi-globe me-2"></i>
                          Publish Result
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
              <div class="fw-normal small mt-4 mt-lg-0">
                Showing <b>5</b> out of <b>25</b> entries
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
