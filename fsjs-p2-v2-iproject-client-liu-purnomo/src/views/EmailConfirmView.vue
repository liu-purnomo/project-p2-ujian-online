<script>
import { mapActions } from 'pinia'
import { useUserStore } from '../stores/user'

export default {
  name: 'EmailConfirmView',
  data() {
    return {
      email: '',
      token: '****'
    }
  },
  methods: {
    ...mapActions(useUserStore, ['handleEmailConfirmation']),
    handleSubmitFormConfirmation() {
      this.handleEmailConfirmation(this.email, this.token)
    }
  },
  created() {
    const query = this.$route.query
    if (query) {
      this.email = this.$route.query.email
      this.token = this.$route.query.token
    }
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
          <h1 class="mb-2">Activate account</h1>
          <!-- Form START -->
          <form @submit.prevent="handleSubmitFormConfirmation()" class="mt-sm-4">
            <!-- Email -->
            <div class="mb-3 input-group-lg">
              <input
                v-model="email"
                type="email"
                class="form-control text-center fs-2"
                placeholder="Input email here"
              />
            </div>
            <div class="mb-3 input-group-lg">
              <input v-model="token" type="text" class="form-control text-center fs-2" />
            </div>
            <!-- Button -->
            <div class="d-grid">
              <button type="submit" class="btn btn-lg btn-primary">verification</button>
            </div>
            <!-- Copyright -->
            <p class="mb-0 mt-3 text-center">
              ©2023 <a target="_blank" href="https://ujian-online.com/">Ujian Online.</a> All rights
              reserved
            </p>
          </form>
          <!-- Form END -->
        </div>
        <!-- Sign in START -->
      </div>
    </div>
    <!-- Row END -->
  </div>
</template>
