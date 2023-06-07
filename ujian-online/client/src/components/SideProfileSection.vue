<script>
import { mapState } from 'pinia'
import { useUserStore } from '../stores/user'

export default {
  name: 'SideProfileSection',
  computed: {
    ...mapState(useUserStore, ['user'])
  }
}
</script>

<template>
  <div class="col-lg-3">
    <!-- Advanced filter responsive toggler START -->
    <div class="d-flex align-items-center d-lg-none">
      <button
        class="border-0 bg-transparent"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasSideNavbar"
        aria-controls="offcanvasSideNavbar"
      >
        <span class="btn btn-primary"><i class="bi bi-command"></i></span>
        <span class="h6 mb-0 fw-bold d-lg-none ms-2">My profile</span>
      </button>
    </div>
    <!-- Advanced filter responsive toggler END -->

    <!-- Navbar START-->
    <nav class="navbar navbar-expand-lg mx-0">
      <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasSideNavbar">
        <!-- Offcanvas header -->
        <div class="offcanvas-header">
          <button
            type="button"
            class="btn-close text-reset ms-auto"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>

        <!-- Offcanvas body -->
        <div class="offcanvas-body d-block px-2 px-lg-0">
          <!-- Card START -->
          <div class="card">
            <!-- Cover image -->
            <!-- Card body START -->
            <div class="card-body pt-0">
              <div class="text-center">
                <!-- Avatar -->
                <div class="mt-3 mb-3">
                  <a href="#"
                    ><img
                      class="img-fluid rounded border border-white border-3"
                      :src="user.avatar"
                      alt=""
                  /></a>
                </div>
                <!-- Info -->
                <h5 class="mb-2">{{ user.name }}</h5>
                <p v-if="user.isPremium">Member Premium</p>
                <p v-else>Member Basic</p>
              </div>

              <!-- Divider -->
              <hr />

              <!-- Side Nav START -->
              <ul class="nav nav-link-secondary flex-column fw-bold gap-2">
                <li v-if="user.isPremium" class="nav-item">
                  <RouterLink to="/grades">
                    <span class="nav-link">
                      <img
                        class="me-2 h-20px fa-fw"
                        src="/assets/images/icon/medal-pin-outline-filled.svg"
                        alt=""
                      />
                      <span>Exam Result </span>
                    </span>
                  </RouterLink>
                </li>

                <!-- <li class="nav-item">
                  <RouterLink to="/exams">
                    <span class="nav-link">
                      <img
                        class="me-2 h-20px fa-fw"
                        src="/assets/images/icon/calendar-outline-filled.svg"
                        alt=""
                      />
                      <span>Exam List </span>
                    </span>
                  </RouterLink>
                </li> -->

                <li class="nav-item">
                  <RouterLink to="/settings">
                    <span class="nav-link">
                      <img
                        class="me-2 h-20px fa-fw"
                        src="/assets/images/icon/cog-outline-filled.svg"
                        alt=""
                      />
                      <span>Account Settings </span>
                    </span>
                  </RouterLink>
                </li>
              </ul>
              <!-- Side Nav END -->
            </div>
            <!-- Card body END -->
          </div>
          <!-- Card END -->
          <!-- Copyright -->
          <p class="small text-center mt-3">
            ©2023
            <a class="text-body" target="_blank" href="https://ujian-online.com/"> Ujian Online </a>
          </p>
        </div>
      </div>
    </nav>
    <!-- Navbar END-->
  </div>
</template>
