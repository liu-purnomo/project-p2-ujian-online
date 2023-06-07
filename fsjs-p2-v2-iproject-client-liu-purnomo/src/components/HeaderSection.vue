<script>
import { mapActions, mapState } from 'pinia'
import { useUserStore } from '../stores/user'

export default {
  name: 'HeaderSection',
  computed: {
    ...mapState(useUserStore, ['isLoggedIn', 'user', 'midtransInfo'])
  },
  methods: {
    ...mapActions(useUserStore, ['handleLogout', 'generateTokenMitrans'])
  }
}
</script>

<template>
  <header class="navbar-light fixed-top header-static bg-mode">
    <!-- Logo Nav START -->
    <nav class="navbar navbar-expand-lg">
      <div class="container">
        <!-- Logo START -->
        <RouterLink class="navbar-brand" to="/">
          <img class="navbar-brand-item" src="/assets/images/logo.png" alt="logo" />
        </RouterLink>
        <!-- Logo END -->

        <!-- Responsive navbar toggler -->
        <button
          class="navbar-toggler ms-auto icon-md btn btn-light p-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
          aria-controls="navbarCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-animation">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </button>

        <!-- Main navbar START -->
        <div class="collapse navbar-collapse" id="navbarCollapse">
          <!-- Nav Search START -->
          <div class="nav mt-3 mt-lg-0 flex-nowrap align-items-center px-4 px-lg-0">
            <div class="nav-item w-100">
              <form class="rounded position-relative">
                <input
                  class="form-control ps-5 bg-light"
                  type="search"
                  placeholder="Search..."
                  aria-label="Search"
                />
                <button
                  class="btn bg-transparent px-2 py-0 position-absolute top-50 start-0 translate-middle-y"
                  type="submit"
                >
                  <i class="bi bi-search fs-5"> </i>
                </button>
              </form>
            </div>
          </div>
          <!-- Nav Search END -->

          <ul class="navbar-nav navbar-nav-scroll ms-auto">
            <li v-if="user.role === 'admin'" class="nav-item">
              <RouterLink class="nav-link" to="/dashboard"> Dashboard </RouterLink>
            </li>
            <li v-if="user.role === 'admin'" class="nav-item">
              <RouterLink class="nav-link" to="/exams"> Exams </RouterLink>
            </li>
            <li v-if="user.role === 'admin'" class="nav-item">
              <RouterLink class="nav-link" to="/questions"> Questions </RouterLink>
            </li>
            <li v-if="user.role === 'admin'" class="nav-item">
              <RouterLink class="nav-link" to="/explanation"> Explan </RouterLink>
            </li>
            <li v-if="user.role === 'admin'" class="nav-item">
              <RouterLink class="nav-link" to="/grades"> Grades </RouterLink>
            </li>
            <li v-if="user.role === 'admin'" class="nav-item">
              <RouterLink class="nav-link" to="/add-question"> Add question </RouterLink>
            </li>
          </ul>
        </div>
        <!-- Main navbar END -->

        <!-- Nav right START -->
        <ul class="nav flex-nowrap align-items-center ms-sm-3 list-unstyled">
          <li class="nav-item ms-2">
            <RouterLink class="nav-link icon-md btn btn-light p-0" to="/settings">
              <i class="bi bi-gear-fill fs-6"> </i>
            </RouterLink>
          </li>
          <li v-if="!isLoggedIn" class="nav-item ms-2">
            <RouterLink class="btn btn-success" to="/login">Login</RouterLink>
          </li>
          <li v-if="!isLoggedIn" class="nav-item ms-2">
            <RouterLink class="btn btn-primary" to="/register">Register</RouterLink>
          </li>
          <!-- Notification dropdown END -->

          <li class="nav-item ms-2 dropdown">
            <a
              class="nav-link btn icon-md p-0"
              href="#"
              id="profileDropdown"
              role="button"
              data-bs-auto-close="outside"
              data-bs-display="static"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <img class="avatar-img rounded-2" :src="user.avatar" alt="" />
            </a>
            <ul
              class="dropdown-menu dropdown-animation dropdown-menu-end pt-3 small me-md-n3"
              aria-labelledby="profileDropdown"
            >
              <!-- Profile info -->
              <li class="px-3">
                <div class="d-flex align-items-center position-relative">
                  <!-- Avatar -->
                  <div class="avatar me-3">
                    <img class="avatar-img rounded-circle" :src="user.avatar" alt="avatar" />
                  </div>
                  <div>
                    <a class="h6 stretched-link" href="#">{{ user.name }}</a>
                    <p v-if="user.isPremium" class="small m-0">User Premium</p>
                    <p v-else class="small m-0">User Basic</p>
                  </div>
                </div>
                <a
                  v-if="!user.isPremium"
                  @click.prevent="generateTokenMitrans"
                  class="dropdown-item btn btn-primary-soft btn-sm my-2 text-center"
                  href="my-profile.html"
                  >Get Premium</a
                >
              </li>
              <!-- Links -->
              <li>
                <RouterLink class="dropdown-item" to="/settings">
                  <i class="bi bi-gear fa-fw me-2"></i>Profile Settings
                </RouterLink>
              </li>

              <li>
                <a
                  @click.prevent="handleLogout"
                  class="dropdown-item bg-danger-soft-hover"
                  href="sign-in-advance.html"
                >
                  <i class="bi bi-power fa-fw me-2"></i>Sign Out
                </a>
              </li>
            </ul>
          </li>
          <!-- Profile START -->
        </ul>
        <!-- Nav right END -->
      </div>
    </nav>
    <!-- Logo Nav END -->
  </header>
</template>

<style scoped></style>
