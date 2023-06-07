<script>
import { mapActions } from 'pinia'
import { useUserStore } from '../stores/user'

export default {
  name: 'AuthForm',
  data() {
    return {
      email: '',
      password: '',
      showPassword: false
    }
  },
  methods: {
    ...mapActions(useUserStore, [
      'handleLogin',
      'handleLoginUsingGoogle',
      'handleLoginUsingGoogleFirabase',
      'handleLoginUsingFecebookFirabase',
      'handleLoginUsingTwitterFirabase'
    ]),
    showHidePassword() {
      if (this.showPassword) {
        this.showPassword = false
      } else {
        this.showPassword = true
      }
    },
    doLogin() {
      this.handleLogin(this.email, this.password)
    },
    callback(response) {
      this.handleLoginUsingGoogle(response.credential)
    }
  }
}
</script>

<template>
  <form @submit.prevent="doLogin" class="mt-sm-4">
    <!-- Email -->
    <div class="mb-3 input-group-lg">
      <input v-model="email" type="email" class="form-control" placeholder="Enter email" />
    </div>
    <!-- New password -->
    <div class="mb-3 position-relative">
      <!-- Password -->
      <div class="input-group input-group-lg">
        <input
          v-model="password"
          class="form-control"
          :type="showPassword ? 'text' : 'password'"
          placeholder="Enter new password"
        />
        <span @click.prevent="showHidePassword" class="input-group-text p-0">
          <i class="fakepasswordicon bi bi-eye cursor-pointer p-2 w-40px"></i>
        </span>
      </div>
    </div>
    <!-- Remember me -->
    <div class="mb-3 d-sm-flex justify-content-between">
      <div></div>
      <a href="forgot-password.html">Forgot password?</a>
    </div>
    <!-- Button -->
    <div class="d-grid">
      <button type="submit" class="btn btn-lg btn-primary">Login</button>
    </div>
    <div class="text-center">
      <h3 class="mt-2">OR</h3>
      <div class="d-grid mb-2">
        <button @click.prevent="handleLoginUsingGoogleFirabase" class="btn btn-lg btn-primary">
          <i class="bi bi-google me-2"></i>
          Login With Google
        </button>
      </div>
      <div class="d-grid mb-2">
        <button @click.prevent="handleLoginUsingTwitterFirabase" class="btn btn-lg btn-primary">
          <i class="bi bi-twitter me-2"></i>
          Login With Twitter
        </button>
      </div>
      <div class="d-grid mb-2">
        <button @click.prevent="handleLoginUsingFecebookFirabase" class="btn btn-lg btn-primary">
          <i class="bi bi-facebook me-2"></i>
          Login With Facebook
        </button>
      </div>
    </div>
    <!-- <div class="d-grid text-center mx-auto">
      <GoogleLogin :callback="callback" />
    </div> -->
    <!-- Copyright -->
    <p class="mb-0 mt-3">
      ©2023 <a target="_blank" href="https://ujian-online.com/">Ujian Online.</a> All rights
      reserved
    </p>
  </form>
</template>

<style scoped></style>
