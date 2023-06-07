<script>
import AuthForm from '../components/AuthForm.vue'
export default {
  name: 'LoginView',
  components: {
    AuthForm
  }
}
</script>

<template>
  <div class="container">
    <div class="row justify-content-center align-items-center vh-100 py-5">
      <!-- Main content START -->
      <div class="col-sm-10 col-md-8 col-lg-7 col-xl-6 col-xxl-5">
        <!-- Sign in START -->
        <div class="card card-body text-center p-4 p-sm-5">
          <!-- Title -->
          <h1 class="mb-2">Sign in</h1>
          <p class="mb-0">
            Don't have an account? <RouterLink to="/register">Click here to sign up</RouterLink>
          </p>
          <!-- Form START -->
          <AuthForm />
        </div>
        <!-- Sign in START -->
      </div>
    </div>
    <!-- Row END -->
  </div>
</template>
